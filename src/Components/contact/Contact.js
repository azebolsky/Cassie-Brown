import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import "semantic-ui-css/semantic.min.css";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";

const Contact = () => {
  const [content, setContent] = useState({
    name: "",
    // lastName: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  });

  const handleContentChange = (event) => {
    setContent({ ...content, [event.target.name]: event.target.value });
  };

  const resetForm = () =>
    setContent({
      name: "",
      // lastName: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    setContent({ buttonText: "...sending" });

    let data = {
      ...content,
    };
    console.log(data);

    axios
      .post("API_URI", data)
      .then((res) => {
        setContent({ sent: true }, resetForm);
      })
      .catch((error) => {
        console.log("message not sent");
        console.log(error);
      });
  };

  return (
    <section id="contact">
      <h1>Have a question? Want to say hi?</h1>
      <h1>Message me!</h1>
      <form className="contact-form" onSubmit={(event) => handleSubmit(event)}>
        <label className="message" htmlFor="message-input">
          Your Message
        </label>
        <textarea
          onChange={(event) => handleContentChange(event)}
          name="message"
          className="message-input"
          type="text"
          placeholder="Please write your message here"
          value={content.message || ""}
          required
        />

        <label className="message-name" htmlFor="message-name">
          Your Name
        </label>
        <input
          onChange={(event) => handleContentChange(event)}
          name="name"
          className="message-name"
          type="text"
          placeholder="Your Name"
          value={content.name || ""}
        />

        <label className="message-email" htmlFor="message-email">
          Your Email
        </label>
        <input
          onChange={(event) => handleContentChange(event)}
          name="email"
          className="message-email"
          type="email"
          placeholder="your@email.com"
          required
          value={content.email || ""}
        />

        <div className="button--container">
          <button type="submit" className="button button-primary">
            {content.buttonText}
          </button>
        </div>
      </form>

      {/* <Form onSubmit={handleSubmit}>
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          htmlFor="first"
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
          content={content.buttonText}
          label=""
          color="green"
          onClick={handleSubmit}
        />
      </Form> */}
    </section>
  );
};

export default Contact;
