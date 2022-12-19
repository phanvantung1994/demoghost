import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { Container, PageWrapper } from "../../theme/commonStyle";

const Layout = (props) => {
  return (
    <Fragment>
      <Container>
        <PageWrapper>{props.children}</PageWrapper>
      </Container>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
