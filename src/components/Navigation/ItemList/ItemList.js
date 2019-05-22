import PropTypes from "prop-types";
import React from "react";
import Item from "./Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = ({ authenticated }) => {
  return (
    <ul className={styles.ItemList}>
      <Item link="/" exact>
        Burger Builder
      </Item>
      {authenticated ? (
        <React.Fragment>
          <Item link="/orders" exact>
            Orders
          </Item>
          <Item link="/logout" exact>
            Logout
          </Item>
        </React.Fragment>
      ) : (
        <Item link="/login" exact>
          Login
        </Item>
      )}
    </ul>
  );
};

ItemList.defaultProps = {
  authenticated: false
};

ItemList.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

export default ItemList;
