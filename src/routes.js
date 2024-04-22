import { MdOutlineDashboard } from "react-icons/md";
import { Dashboard } from "./Pages/Dashboard";
import { BsPeople } from "react-icons/bs";
import { Customer } from "./Pages/Customer";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    icon: MdOutlineDashboard,
  },
  {
    path: "/customer",
    name: "Customer",
    component: Customer,
    icon: BsPeople,
  },
];
