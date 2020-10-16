export default {
  f_name: {
    type: "text",
    name: "f_name",
    value: "",
    valid: false,
    touched: false,
    validation: {
      required: true,
      // number: true,
      // mobileNumber: true,
      // minLength: 3,
      // maxLength: 10,
      // email: true,
    },
  },
  m_number: {
    type: "text",
    name: "m_number",
    value: "",
    valid: false,
    touched: false,
    validation: {
      number: true,
    },
  },
};
