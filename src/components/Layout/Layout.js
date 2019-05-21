import React, { Component } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import styles from "./Layout.module.scss";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  handleOnClose = () => {
    this.setState({ showSideDrawer: false });
  };

  handleSideDrawerToggle = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar onSideDrawerToggle={this.handleSideDrawerToggle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          onClose={this.handleOnClose}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
