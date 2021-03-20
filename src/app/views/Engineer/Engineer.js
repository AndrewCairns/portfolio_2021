import React from "react";
import { Section } from "react-scroll-section";
import { Grid, Row, Col } from "react-flexbox-grid";
import IndexBlock from "../../components/indexBlock/indexBlock";

function Engineer() {
  return (
    <section className="section-engineer">
      <div className="c-contain">
        <Section id="engineer"></Section>

        <Grid fluid>
          <Row middle="xs">
            <Col xs={12} sm={12} md={3} lg={3}>
              <IndexBlock index="02" indexValue="Engineering" />
            </Col>
            <Col xs={12} sm={12} md={1} lg={1}></Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <h1 className="txt--20 txt--uppercase">Front-end Engineer</h1>
              <h3 className="txt--color-secondary txt--normal txt--8 u-vr--gi">
                HTML / CSS / Javascript / Angular / React / D3
              </h3>
              <p className="txt--brand-secondary txt--color-body txt--8">
                As a front-end engineer, I architect and develop websites and
                applications using web technologies (i.e., HTML, CSS, DOM, and
                JavaScript), which run in the browser. A key part of this
                process is discussing, conceptualising and developing visual
                designs from a front-end perspective, often working alongside UX
                researchers, UX architects, visual designers and content
                strategists. Using frameworks and libraries such as Angular,
                React and D3.js I scaffold and develop web applications to
                facilitate optimum user experiences.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  );
}

export default Engineer;
