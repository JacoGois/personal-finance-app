import { sidebarRoutes } from "../../sidebarRoutes";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-1">
      {sidebarRoutes.map((route, index) => {
        return (
          <NavItem
            key={index}
            name={route.name}
            Icon={route.icon}
            path={route.path}
          />
        );
      })}
    </nav>
  );
};
