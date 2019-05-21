import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.scss";

class Modal extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} onClick={this.props.onClose} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
