import React, { useState } from "react";
import "./Contact.css";
import "semantic-ui-css/semantic.min.css";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

const Contact = (props) => {
  const [content, setContent] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });

  const handleContentChange = (event) => {
    setContent({ ...content, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact">
      <h1>Have a question? Want to say hi?</h1>
      <h1>Message me!</h1>
      <Form>
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          placeholder="First name"
          name="firstName"
          value={content.firstName}
          onChange={(event) => handleContentChange(event)}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name"
          placeholder="Last name"
          name="lastName"
          value={content.lastName}
          onChange={(event) => handleContentChange(event)}
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          placeholder="Message"
          name="message"
          value={content.message}
          onChange={(event) => handleContentChange(event)}
        />
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="coolperson@email.com"
          name="email"
          value={content.email}
          onChange={(event) => handleContentChange(event)}
          // error={{
          //   content: "Please enter a valid email address",
          //   pointing: "below",
          // }}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Send"
          label=""
          color="green"
          onClick={handleSubmit}
        />
      </Form>
    </section>
  );
};

export default Contact;
