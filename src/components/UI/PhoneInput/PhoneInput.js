import React from "react";
import MaskedInput from "react-text-mask";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

/*
 * PhoneInput React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  31.10.2019
 */

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[0-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

const PhoneInput = props => {
  return (
      <FormControl >
        <InputLabel htmlFor="formatted-text-mask-input">
          Phone Number
        </InputLabel>
        <Input
          className={props.className}
          value={props.phone}
          onChange={props.onChange}
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
  );
};

export default PhoneInput;
