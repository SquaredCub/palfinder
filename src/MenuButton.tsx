import React from "react";

interface IMenuButtonProps {
  handleToggleMenu: () => void;
}

const MenuButton: React.FC<IMenuButtonProps> = ({ handleToggleMenu }) => {
  return (
    <button
      onClick={handleToggleMenu}
      className="menuButton"
      aria-label="Toggle filters"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </button>
  );
};

export default MenuButton;
