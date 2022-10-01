import React from "react";
import Button from "@mui/material/Button";
import "./TermCondition.css";
export default function TermCondition() {
  return (
    <div className="termcondition_cont">
      <div className="term_main_container">
        <h2>Terms of Services</h2>
        <p>
          We know its's tempting to skip these Terms of Services,but it's
          important to establish what you can expect from us as you use these
          services,and what we expect from you.
        </p>
        <p>
          These Terms of Services reflect the way these business works,the laws
          that apply to our company,and certain things we've always believed to
          be true.As a result,these Terms of Service help define our
          relationship with you as you interect with our services.For
          example,these terms include the following topic headings:{" "}
        </p>
        <ul>
          <li>
            What you can expect from us,which describe how we develop our
            services.
          </li>

          <li>
            What we expect from you,which establishes certain rules for using
            our services.
          </li>
          <li>
            In case of problem or disagreements,which describes other legal
            rights you have,and what to expect in case someone violates these
            terms.
          </li>
        </ul>
        <p>
          Understanding these terms is important because,to use our services,you
          must accept these terms.
        </p>
        <p>
          Besides these terms,we also publish a Privacy Policy.Although it's not
          part of these terms.
        </p>
        <div className="term_btn">
          <Button
            variant="text"
            sx={{
              width: "10%",
              mt: 4,
              mb: 4,
              textTransform: "none",
              color: "#00000",
              // backgroundColor: "#3898E2",
              // "&:hover": {
              //   backgroundColor: "#3898E2",
              // },
            }}
          >
            Not right now...
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "12%",
              mt: 4,
              mb: 4,
              textTransform: "none",
              color: "#FFFFFF",
              backgroundColor: "#898787",
              "&:hover": {
                backgroundColor: "#898787",
              },
            }}
          >
            I agree with terms
          </Button>
        </div>
      </div>
    </div>
  );
}
