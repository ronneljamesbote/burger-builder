import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { SuccessButton } from "../../../components/UI/Button/";
import { Input } from "../../../components/UI/Input";
import Spinner from "../../../components/UI/Spinner/Spinner";
import jsonServer from "../../../constants/axiosInstances/jsonServer";
import { resetBurgerIngredients } from "../../../stores/burgerBuilder/actions";
import { validateInput } from "../../../utilities";
import styles from "./ContactData.module.scss";

class ContactData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderForm: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Full Name"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          dirty: false
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Email Address"
          },
          value: "",
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          dirty: false
        },
        address: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Address"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          dirty: false
        },
        zipCode: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Zip Code"
          },
          value: "",
          validation: {
            required: true,
            minLength: 5,
            maxLength: 5,
            isNumeric: true
          },
          valid: false,
          dirty: false
        },
        country: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Country"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          dirty: false
        },
        deliveryMethod: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "fastest", displayValue: "Fastest" },
              { value: "cheapest", displayValue: "Cheapest" }
            ]
          },
          validation: {},
          value: "fastest",
          valid: true
        }
      },
      formValid: false,
      formLoading: false
    };
  }

  handleInputChange = (event, identifier) => {
    let formValid = true;
    let newOrderForm = { ...this.state.orderForm };
    let newFormElement = { ...newOrderForm[identifier] };

    newFormElement.value = event.target.value;
    newFormElement.valid = validateInput(
      newFormElement.value,
      newFormElement.validation
    );
    newFormElement.dirty = true;

    newOrderForm[identifier] = newFormElement;

    for (let key in newOrderForm)
      formValid = newOrderForm[key].valid && formValid;

    this.setState({
      orderForm: newOrderForm,
      formValid: formValid
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ formLoading: true });

    let formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }

    const order = {
      burgerIngredients: this.props.burgerIngredients,
      price: this.props.totalPrice,
      orderData: formData
    };

    // This jsonServer simulates a firebase json schema so I need to create a new
    // object for new order and append it to existing order objects
    jsonServer.get("/orders").then((orders) => {
      jsonServer
        .post("/orders", { ...orders.data, [Date.now()]: { ...order } })
        .then((response) => {
          this.props.history.replace({
            pathname: "/orders"
          });

          this.props.handleResetIngredients();
        });
    });
  };

  render() {
    let formElements = [];

    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.handleSubmit}>
        {formElements.map((element) => {
          const config = element.config;
          return (
            <Input
              key={element.id}
              value={config.value}
              valid={config.valid}
              dirty={config.dirty}
              validate={config.hasOwnProperty("validation")}
              elementType={config.elementType}
              elementConfig={config.elementConfig}
              onChange={(e) => this.handleInputChange(e, element.id)}
            />
          );
        })}

        <SuccessButton disabled={!this.state.formValid}>ORDER</SuccessButton>
      </form>
    );

    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {this.state.formLoading ? <Spinner /> : form}
      </div>
    );
  }
}

const mapStateToProps = ({ burgerBuilder }) => {
  return {
    burgerIngredients: burgerBuilder.ingredients,
    totalPrice: burgerBuilder.totalPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleResetIngredients: () => dispatch(resetBurgerIngredients())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactData)
);
