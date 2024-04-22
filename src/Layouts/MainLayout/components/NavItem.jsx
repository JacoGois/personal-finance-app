import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";

export const NavItem = ({ Icon, name, path }) => {
  const location = useLocation();
  return (
    <NavLink
      to={path}
      className={cn("p-[10px] rounded-lg flex items-center gap-1 font-bold", {
        "bg-lightBlue-500 text-white": path === location.pathname,
      })}
    >
      <Icon />
      {name}
    </NavLink>
  );
};
