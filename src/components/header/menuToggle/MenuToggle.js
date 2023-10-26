import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import "./MenuToggle.css"


const MenuToggle = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={handleToggleClick}>
        <FontAwesomeIcon icon={faBars} className="menu-icon"/>
      </button>

      <button className="search-button">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </button>
    </div>
  );
};

export default MenuToggle;
