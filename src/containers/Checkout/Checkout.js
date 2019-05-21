import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  handleCancel = () => {
    this.props.history.goBack();
  };

  handleContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return Array.isArray(this.props.burgerIngredients) &&
      this.props.burgerIngredients.length > 0 ? (
      <div>
        <CheckoutSummary
          onCancel={this.handleCancel}
          onContinue={this.handleContinue}
          ingredients={this.props.burgerIngredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
          exact
        />
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = ({ burgerBuilder }) => {
  return {
    burgerIngredients: burgerBuilder.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
