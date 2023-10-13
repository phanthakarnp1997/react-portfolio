import "./index.scss";
import React from "react";
import withLoader from "../../utils/withLoader";
import AnimateText from "../AnimateText";

function Contact() {
  return (
    <>
      <div className="container contact-page">
        <h1>
          <AnimateText
            idx={1}
            letterClass="text-animate-hover"
            text="Contact Me"
          />
        </h1>
        <div className="form-container">
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea type="text" placeholder="Message" />

            <input type="submit" value="Send"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default withLoader(Contact);
