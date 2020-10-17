export default {
  f_name: {
    type: "text",
    name: "f_name",
    value: "",
    valid: false,
    touched: false,
    validation: {
      required: true,
      minLength: 3,
      maxLength: 10,
    },
  },
  l_name: {
    type: "text",
    name: "l_name",
    value: "",
    valid: false,
    touched: false,
    validation: {},
  },
  number: {
    type: "text",
    name: "number",
    value: "22",
    valid: false,
    touched: false,
    validation: {
      number: true,
    },
  },
  m_number: {
    type: "text",
    name: "m_number",
    value: "",
    valid: false,
    touched: false,
    validation: {
      mobileNumber: true,
    },
  },
  email: {
    type: "text",
    name: "email",
    value: "",
    valid: false,
    touched: false,
    validation: {
      email: true,
    },
  },
};
