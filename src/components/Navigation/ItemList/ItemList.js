import React from "react";
import Item from "./Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = () => {
  return (
    <ul className={styles.ItemList}>
      <Item link="/" exact>
        Burger Builder
      </Item>
      <Item link="/orders" exact>
        Orders
      </Item>
    </ul>
  );
};

export default ItemList;
