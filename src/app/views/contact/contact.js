import React from "react";
import { Section } from "react-scroll-section";
import { Grid, Row, Col } from "react-flexbox-grid";

function Contact() {
  return (
    <section className="section-contact">
      <Section id="contact-Section"></Section>

      <div className="c-contain">
        <Grid fluid>
          <Row top="xs" className="intro-column-reverse">
            <Col xs={12} sm={12} md={8} lg={8} className="contact-container">
              <h1>Got project?</h1>
              <p className="txt--light">
                Get in touch{" "}
                <a href="mailto:awcairns7@gmail.com" title="Email Andrew">
                  awcairns7@gmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  );
}

export default Contact;
