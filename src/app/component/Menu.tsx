import React from "react";
import NavLink from "./NavLink";

interface Link {
  title: string;
  path: string;
}

interface MenuProps {
  links: Link[];
}

const Menu: React.FC<MenuProps> = ({ links }) => {
  if (!links || !Array.isArray(links)) {
    return <p>No links available</p>;
  }

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
