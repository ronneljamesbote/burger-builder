import React, { Component } from "react";
import Modal from "../../UI/Modal/Modal";

const ErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: false
      };
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(
        (request) => {
          this.setState({ error: false });
          return request;
        },
        (error) => {
          this.setState({ error: true });
          return Promise.reject(error);
        }
      );

      this.resInterceptor = axios.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          this.setState({ error: true });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    closeErrorModalHandler = () => {
      this.setState({ error: false });
    };

    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.error} close={this.closeErrorModalHandler}>
            Something went wrong! Please try again later.
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default ErrorHandler;
