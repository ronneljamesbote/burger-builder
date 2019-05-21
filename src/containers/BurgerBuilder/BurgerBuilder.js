import React, { Component } from "react";
import { connect } from "react-redux";
import BuildControls from "../../components/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as burgerBuilderActions from "../../stores/burgerBuilder/actions";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredientListLoading: true,
      showOrder: false
    };
  }

  componentDidMount() {
    this.props.fetchIngredientList(
      () => this.setIngredientListLoading(false),
      () => this.setIngredientListLoading(false)
    );
  }

  setIngredientListLoading = (status) => {
    this.setState({ ingredientListLoading: status });
  };

  handleOrder = () => {
    this.setState({ showOrder: true });
  };

  handleContinue = () => {
    this.props.history.push("/checkout");
  };

  handleCancel = () => {
    this.setState({ showOrder: false });
  };

  render() {
    const enabledIngredients = this.props.burgerIngredients
      .filter((ingredient) => ingredient.quantity > 0)
      .map((ingredient) => ingredient.type);

    let buildControls = <Spinner />;

    if (!this.state.ingredientListLoading) {
      buildControls = (
        <p
          style={{
            textAlign: "center",
            backgroundColor: "#cf8f2e",
            width: "100%",
            padding: "50px 0"
          }}
        >
          There seems no ingredients to add. Please check again later.
        </p>
      );

      if (
        !this.props.ingredientListError &&
        this.props.ingredientList &&
        Object.keys(this.props.ingredientList.length !== 0)
      ) {
        buildControls = (
          <BuildControls
            ingredientList={this.props.ingredientList}
            price={this.props.totalPrice}
            availableIngredients={enabledIngredients}
            canOrder={enabledIngredients.length >= 1}
            onAddIngredient={this.props.handleAddIngredient}
            onRemoveIngredient={this.props.handleRemoveIngredient}
            onOrder={this.handleOrder}
          />
        );
      }
    }

    return (
      <React.Fragment>
        <Modal show={this.state.showOrder} onClose={this.handleCancel}>
          <OrderSummary
            onCancel={this.handleCancel}
            onContinue={this.handleContinue}
            ingredients={this.props.burgerIngredients}
            price={this.props.totalPrice}
          />
        </Modal>

        <Burger ingredients={this.props.burgerIngredients} />

        {buildControls}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ burgerBuilder }) => {
  return {
    ingredientList: burgerBuilder.ingredientList,
    burgerIngredients: burgerBuilder.ingredients,
    totalPrice: burgerBuilder.totalPrice,
    ingredientListError: burgerBuilder.ingredientListError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddIngredient: (type) =>
      dispatch(burgerBuilderActions.addIngredient(type)),
    handleRemoveIngredient: (type) =>
      dispatch(burgerBuilderActions.removeIngredient(type)),
    fetchIngredientList: (onSuccess, onError) => {
      dispatch(burgerBuilderActions.fetchIngredientList(onSuccess, onError));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
