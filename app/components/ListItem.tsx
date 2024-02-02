import { NavLink } from "@remix-run/react";

export function ListItem({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <li className="rounded-sm px-2 py-1 font-semibold hover:bg-gray-300">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "flex items-center bg-gray-300" : "flex items-center"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
