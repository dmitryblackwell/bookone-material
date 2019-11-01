import React, { Component } from "react";
import { connect } from 'react-redux';
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";


import Stepper from "../../components/UI/Stepper/Stepper";
import PhoneInput from "../../components/UI/PhoneInput/PhoneInput";
import classes from "./Registration.module.css";
import * as actionTypes from '../../store/actions';

/*
 * Registration React class.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  30.10.2019
 */

class Registration extends Component {
  handleChange = (name, event) => {
    this.props.setUserData(name, event.target.value);
  };

  RegInput = props => {
    return (
      <Input
        className={classes.input}
        type={props.type ? props.type : 'text'}
        placeholder={props.id}
        inputProps={{ "aria-label": "description" }}
        value={props.value}
        onChange={event => this.handleChange(props.id, event)}
      />
    );
  };

  render() {
    const steps = ["email", "username", "phone", "address"];
    const email = (
      <Paper className={classes.inputBlock}>
        <div>
          <this.RegInput id="email" value={this.props.email} />
          <this.RegInput id="password" value={this.props.password} />
        </div>
      </Paper>
    );
    const username = (
      <Paper className={classes.inputBlock}>
        <div>
          <this.RegInput id="username" value={this.props.username} />
        </div>
      </Paper>
    );
    const phone = (
      <Paper className={classes.inputBlock}>
        <PhoneInput
          className={classes.input}
          phone={this.props.phone}
          onChange={e => this.handleChange("phone", e)}
        />
      </Paper>
    );
    const address = (
      <Paper className={classes.inputBlock}>
        <div>
          <this.RegInput id="city" value={this.props.city} />
          <this.RegInput id="street" value={this.props.street} />
          <this.RegInput id="house" value={this.props.house} />
          <this.RegInput id="apartment" value={this.props.apartment} />
        </div>
      </Paper>
    );
    const stepContent = [email, username, phone, address];
    return (
      <Container>
        <Stepper steps={steps} stepContent={stepContent} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setUserData: (id, value) => dispatch({type: actionTypes.REGISTRATION_USER_DATA_CHANGED, id: id, value: value})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
