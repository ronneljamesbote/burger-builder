import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Item.module.scss";

const Item = ({ link, children, exact }) => {
  return (
    <li className={styles.Item}>
      <NavLink to={link} activeClassName={styles.active} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
};

Item.defaultProps = {
  children: "Link",
  exact: false
};

Item.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool
};

export default Item;
