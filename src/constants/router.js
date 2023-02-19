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
    path: "/about-company",
    component: "AboutCompany",
    exact: true,
    permission: GUEST,
  },
  {
    path: "/about-career",
    component: "AboutCareer",
    exact: true,
    permission: GUEST,
  },
  {
    path: "/about-contact",
    component: "AboutContact",
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
    path: "/ghost-mess",
    component: "GhostMessPage",
    exact: true,
    permission: GUEST,
  },
  {
    path: "/ghost-os",
    component: "GhostOSPage",
    exact: true,
    permission: GUEST,
  },
  {
    path: "/partner",
    component: "GhostPartnerPage",
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
