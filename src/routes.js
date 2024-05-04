import { Dashboard } from "./Pages/Dashboard";
import { Customer } from "./Pages/Customer";
import { Home } from "./Pages/Home";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/customer",
    component: Customer,
  },
];
