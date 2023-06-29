import React from "react";
import "./contactus.css";
import Contact from "../home/contact/contact";

export default function Contactus() {
  return (
    <div className="contactUs">
      <div className="contact1">
      <Contact />
      </div>
      <form action="">
        <input
          type="text"
          id="form_name"
          name="name"
          required="required"
          className="form-control"
          placeholder="Enter your name"
        />
        <input
          type="email"
          id="form_email"
          name="email"
          required="required"
          className="form-control"
          placeholder="Enter email address"
        />
        <input
          type="number"
          id="form_phone_no"
          name="mobile_no"
          required="required"
          className="form-control"
          placeholder="Enter your mobile number"
        />
        <input
          type="text"
          id="form_subject"
          name="subject"
          required="required"
          className="form-control"
          placeholder="Enter Subject"
        />

        <div className="txtarea">
          <textarea
            id="form_message"
            name="message"
            required="required"
            className="form-control h-94"
            placeholder="Enter Message"
          ></textarea>
        </div>

        <div className="ctsbtn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}
