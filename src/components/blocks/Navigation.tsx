import { NavigationCI } from "@/models/interfaces/Navigation";
import { NavItem } from "@/components/elements/NavItem";

export const Navigation = ({ NavItems }: NavigationCI) => {
  return (
    <>
      {NavItems.map(({ text, link }) => {
        return (
          <li className="nav-item dropdown dropdown-mega" key={link}>
            <NavItem link={link} text={text} />
          </li>
        );
      })}
    </>
  );
};

export default Navigation;
