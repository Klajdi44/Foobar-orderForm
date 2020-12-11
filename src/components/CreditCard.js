import React from "react";
import Card from "react-credit-cards";

import { formatCreditCardNumber, formatCVC, formatExpirationDate, formatFormData, allLetter } from "../modules/utils";

import "react-credit-cards/es/styles-compiled.css";

export default class CreditCard extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <Card number={number} name={name} expiry={expiry} cvc={cvc} focused={focused} callback={this.handleCallback} />
          <div ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
            <fieldset>
              <div className="form-group">
                <label for="number">Card Number</label>
                <span class="form-span name">Enter the card number</span>
                <input
                  id="number"
                  type="tel"
                  name="number"
                  className="form-control"
                  placeholder=" "
                  pattern="[\d| ]{16,22}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="form-group">
                <label for="name">Cardholder</label>
                <span class="form-span name">As it appears on the card</span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder=" "
                  required
                  onInput={(e) => allLetter(e.target)}
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="form-group">
                <label for="expiry">Expiration Date</label>
                <span class="form-span name">e.g. 12/2021</span>
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder=" "
                  pattern="(0[1-9]|10|11|12)/2[0-9]{3}$"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="form-group">
                <label for="number">CVC</label>
                <span class="form-span name">Enter the CVC (usually on the back of the card)</span>
                <input type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder=" "
                  pattern="\d{3,4}"
                  required onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus} />
              </div>
              <input type="hidden" name="issuer" value={issuer} />
              <div className="form-actions"></div>
            </fieldset>
          </div>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
