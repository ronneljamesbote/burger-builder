import PropTypes from "prop-types";
import React from "react";
import Logo from "../../Logo/Logo";
import ItemList from "../ItemList/ItemList";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import styles from "./Toolbar.module.scss";

const Toolbar = ({ onSideDrawerToggle }) => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle onClick={onSideDrawerToggle} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <ItemList />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  onSideDrawerToggle: PropTypes.func.isRequired
};

export default Toolbar;
