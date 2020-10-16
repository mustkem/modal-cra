export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  Object.keys(rules).forEach((key) => {
    isValid =
      isValid &&
      validationFunctions[key] &&
      validationFunctions[key](value, rules[key]);
  });

  return isValid;
};

const validationFunctions = {
  required: (value) => {
    let isValid = false;
    if (typeof value === "string" && value.trim()) {
      isValid = true;
    } else if (typeof value === "object" && Object.keys(value).length > 0) {
      //for select box // react-select
      isValid = true;
    }
    return isValid;
  },
  number: (value) => {
    return /^[0-9]+$/.test(value);
  },
  mobileNumber: (value) => {
    return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value);
  },
  minLength: (value, minLength) => {
    return minLength && value.length >= minLength;
  },
  maxLength: (value, maxLength) => {
    return maxLength && value.length <= maxLength;
  },
  email: (value) => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      value
    );
  },
};
