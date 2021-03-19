import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ReactComponent as Portrait2 } from "../../../assets/images/portrait2.svg";

function Home() {
  return (
    <section className="section-home">
      <div className="c-contain">
        <Grid fluid>
          <Row middle="xs">
            <Col xs={12} sm={12} md={4} lg={4}>
              <h1 className="txt--20 txt--uppercase">
                I'm Andrew ! <br /> I build websites.
              </h1>
              <hr className="hr--short hr--brand-secondary u-vr--gi" />
              <p className="txt--brand-secondary txt--color-secondary txt--8">
                I am an enthusiastic, adaptable and driven Front-end engineer
                with experience in both academia and industry. I have a PhD in
                medical informatics. I thrive in both the competitive,
                fast-paced environment of start-up businesses, and enterprise
                level application development, striving to deliver product(s) of
                optimum quality.
              </p>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <div class="drop">
                <Portrait2 width="100%" height="100%" />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  );
}

export default Home;
