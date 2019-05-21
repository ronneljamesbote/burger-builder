import PropTypes from "prop-types";
import React from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import ItemList from "../ItemList/ItemList";
import styles from "./SideDrawer.module.scss";

const SideDrawer = ({ open, onClose }) => {
  let navigationClass = [styles.SideDrawer, styles.Close];

  if (open) navigationClass = [styles.SideDrawer, styles.Open];

  return (
    <React.Fragment>
      <Backdrop show={open} onClick={onClose} />
      <div className={navigationClass.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <ItemList />
        </nav>
      </div>
    </React.Fragment>
  );
};

SideDrawer.defaultProps = {
  open: false
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SideDrawer;
