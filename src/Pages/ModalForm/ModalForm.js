import React, { useState } from "react";

import "./style.scss";

import InitialFormData from "./add-order-form-config";
import { checkValidity } from "../../helpers/utility";

import InputBox from "../../Components/InputBox";
import { Row, Col } from "reactstrap";

function ModalForm() {
  const [formData, setFormData] = useState(() => InitialFormData);

  const handleChangeFormField = (event) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: {
        ...formData[event.target.name],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          formData[event.target.name].validation
        ),
        touched: true,
      },
    };

    let isFormValid = true;
    for (let name in updatedFormData) {
      isFormValid = updatedFormData[name].valid && isFormValid;
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = { ...formData };
    // //touch true //
    Object.keys(newFormData).forEach((key) => {
      formData[key].touched = true;
    });

    setFormData(newFormData);

    let isFormValid = true;
    Object.keys(newFormData).every((key) => {
      isFormValid = isFormValid * formData[key].valid;
      if (!isFormValid) return false;
      else return true;
    });

    if (isFormValid) {
      //call action
    }
  };

  return (
    <div className="home-content main-content">
      <div className="container">
        <h1>Modal Form 1</h1>
        <div className="modal-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <Row>
                <Col xs="6">
                  <label>First Name (Min Length - 3, Max Length - 10)</label>
                  <InputBox
                    {...formData["f_name"]}
                    onChange={handleChangeFormField}
                    placeholder="Enter"
                  />
                </Col>
                {/* <Col xs="6">
                  <label>Last Name (Optional)</label>
                  <InputBox
                    {...formData["l_name"]}
                    onChange={handleChangeFormField}
                    placeholder="Enter"
                  />
                </Col>
                <Col xs="6">
                  <label>Mobile Number (10 Digits)</label>
                  <InputBox
                    {...formData["m_number"]}
                    onChange={handleChangeFormField}
                    placeholder="Enter"
                  />
                </Col>
                <Col xs="6">
                  <label>Email</label>
                  <InputBox
                    {...formData["email"]}
                    onChange={handleChangeFormField}
                    placeholder="Enter"
                  />
                </Col>
                <Col xs="6">
                  <label>Number </label>
                  <InputBox
                    {...formData["number"]}
                    onChange={handleChangeFormField}
                    placeholder="Enter"
                  />
                </Col> */}
              </Row>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
