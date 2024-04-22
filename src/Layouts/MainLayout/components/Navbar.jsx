import { routes } from "../../../routes";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-1">
      {routes.map((route, index) => {
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
