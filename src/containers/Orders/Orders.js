import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import Spinner from "../../components/UI/Spinner/Spinner";
import { fetchOrders } from "../../stores/orders/actions";

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ordersLoading: true
    };
  }

  componentDidMount() {
    this.props.fetchOrders(
      () => this.setOrdersLoading(false),
      () => this.setOrdersLoading(false)
    );
  }

  setOrdersLoading = (status) => {
    this.setState({
      ordersLoading: status
    });
  };

  render() {
    const ordersFailedStyle = {
      width: "80%",
      border: "1px solid #eee",
      boxShadow: "0 2px 3px #ccc",
      padding: "35px 10px",
      margin: "10px auto",
      boxSizing: "border-box",
      textAlign: "center",
      fontSize: "1.3em"
    };

    let orders = <Spinner />;

    if (!this.state.ordersLoading) {
      orders = (
        <div style={ordersFailedStyle}>
          <p>
            Something went wrong while fetching your orders. Please check again
            later.
          </p>
        </div>
      );

      if (!this.props.ordersError) {
        orders =
          this.props.orders.length > 0 ? (
            this.props.orders.map((order) => (
              <OrderItem
                key={order.id}
                ingredients={order.burgerIngredients}
                price={order.price}
              />
            ))
          ) : (
            <div style={ordersFailedStyle}>
              <p>
                No orders so far. Click
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#40a4c8" }}
                >
                  &nbsp;here&nbsp;
                </Link>
                to create your first burger!
              </p>
            </div>
          );
      }
    }

    return <React.Fragment>{orders}</React.Fragment>;
  }
}

const mapStateToProps = ({ orders }) => {
  return {
    orders: orders.orders,
    ordersError: orders.ordersError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (onSucces, onError) => dispatch(fetchOrders(onSucces, onError))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
