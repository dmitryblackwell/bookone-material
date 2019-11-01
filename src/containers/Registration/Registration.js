import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Stepper from "../../components/UI/Stepper/Stepper";
import Input from "@material-ui/core/Input";

import Paper from "@material-ui/core/Paper";
import PhoneInput from "../../components/UI/PhoneInput/PhoneInput";
import classes from "./Registration.module.css";

/*
 * Registration React class.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  30.10.2019
 */

class Registration extends Component {
  state = {
    userData: {}
  };

  handleChange = (name, event) => {
    this.setState({
      userData: {
        [name]: event.target.value
      }
    });
  };

  render() {
    const steps = ["email", "username", "phone", "address"];
    const email = (
      <Paper className={classes.inputBlock}>
        <div>
          <Input
            className={classes.input}
            type="email"
            placeholder="email"
            inputProps={{ "aria-label": "description" }}
            value={this.state.userData.email}
            onChange={event => this.handleChange("email", event)}
          />
          <Input
            className={classes.input}
            type="password"
            placeholder="password"
            inputProps={{ "aria-label": "description" }}
            value={this.state.userData.password}
            onChange={event => this.handleChange("password", event)}
          />
        </div>
      </Paper>
    );
    const username = (
      <Paper className={classes.inputBlock}>
        <div>
          <Input
            className={classes.input}
            type="text"
            placeholder="username"
            inputProps={{ "aria-label": "description" }}
            value={this.state.userData.username}
            onChange={event => this.handleChange("username", event)}
          />
        </div>
      </Paper>
    );
    const phone = (
      <Paper className={classes.inputBlock}>
        <PhoneInput
          className={classes.input}
          phone={this.state.userData.phone}
          onChange={e => this.handleChange("phone", e)}
        />
      </Paper>
    );
    const address = (
      <Paper className={classes.inputBlock}>
        <div>
          <Input
            className={classes.input}
            type="text"
            placeholder="city"
            inputProps={{ "aria-label": "description" }}
            value={this.state.userData.city}
            onChange={event => this.handleChange("city", event)}
          />
          <Input
            className={classes.input}
            type="text"
            placeholder="street"
            inputProps={{ "aria-label": "description" }}
            value={this.state.userData.street}
            onChange={event => this.handleChange("street", event)}
          />
          <Input
            className={classes.input}
            type="text"
            placeholder="house"
            inputProps={{ "aria-label": "description" }}
            value={this.state.userData.house}
            onChange={event => this.handleChange("house", event)}
          />
          <Input
            className={classes.input}
            type="number"
            placeholder="apartment"
            inputProps={{ "aria-label": "description" }}
            value={this.state.userData.apartment}
            onChange={event => this.handleChange("apartment", event)}
          />
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

export default Registration;
