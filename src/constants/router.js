import { ADMIN, GUEST, USER } from "./permission";

export const publicRoutes = [
  // {
  //   path: '/login',
  //   component: 'LoginPage',
  //   exact: true,
  //   permission: GUEST
  // }
  {
    path: "/home",
    component: "HomePage",
    exact: true,
    permission: GUEST,
  },
  {
    path: "/a-and-d",
    component: "ADPage",
    exact: true,
    permission: GUEST,
  },
  {
    path: "/encryption",
    component: "EncryptionPage",
    exact: true,
    permission: GUEST,
  },
  {
    path: "/legal",
    component: "LegalPage",
    exact: true,
    permission: GUEST,
  },
  {
    path: "/contact",
    component: "ContactPage",
    exact: true,
    permission: GUEST,
  },
];

export const privateRoutes = [
  // {
  //   path: '/home',
  //   component: 'HomePage',
  //   exact: true,
  //   permission: USER
  // },
  {
    path: "/file-detail",
    component: "DetailPage",
    exact: true,
    permission: USER,
  },
  {
    path: "/profile",
    component: "ProfilePage",
    exact: true,
    permission: USER,
  },
  {
    path: "/manage",
    component: "ManagePage",
    exact: true,
    permission: ADMIN,
  },
  {
    path: "/setting",
    component: "SettingPage",
    exact: true,
    permission: ADMIN,
  },
];
