/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import { AuthContext } from "./context/auth/auth.context";
import { AuthProvider } from "./context/auth/auth.provider";
import { privateRoutes, publicRoutes } from "./constants/router";

const RouteRender = ({ path, component, exact }) => (
  console.log(path, component, exact),
  (
    <Route
      key={component}
      exact={exact}
      path={path}
      component={lazy(() => import(`./pages/${component}`))}
    />
  )
);

const PrivateRoute = (route) => {
  const { permission } = route;
  const {
    authState: { isAuthenticated, role },
  } = useContext(AuthContext);

  if (!isAuthenticated) return <Redirect to="/login" />;

  // HACK: Need to refactor
  return role === permission || role === "admin" ? (
    <RouteRender key={route.component} {...route} />
  ) : (
    <Redirect to="/home" />
  );
};

const PrivateRoutes = privateRoutes.map((props, idx) => (
  <PrivateRoute key={idx} {...props} />
));

const PublicRoutes = publicRoutes.map((route) => (
  <RouteRender key={route.component} {...route} />
));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <Layout>
          <Switch>
            {PublicRoutes}
            {PrivateRoutes}
            <Redirect to="/home" />
          </Switch>
        </Layout>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
