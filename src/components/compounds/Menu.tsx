import { NAVIGATION_MENU } from "@/models/constants/navigation";
import Navigation from "@/components/blocks/Navigation";

export const Menu = () => {
  return (
    <ul className="navbar-nav">
      <Navigation NavItems={NAVIGATION_MENU} />
    </ul>
  );
};
