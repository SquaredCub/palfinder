import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IMenuButtonProps {
  handleToggleMenu: () => void;
}

const MenuButton: React.FC<IMenuButtonProps> = ({ handleToggleMenu }) => {
  return (
    <button onClick={handleToggleMenu} className="menuButton">
      <LazyLoadImage
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        height="20px"
        width="20px"

        // style={{ filter: "invert(1)" }}
      />
    </button>
  );
};

export default MenuButton;
