import React from "react";
import { Section } from "react-scroll-section";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ReactComponent as Portrait2 } from "../../../assets/images/portrait2.svg";
import IndexBlock from "../../components/indexBlock/indexBlock";

function Home() {
  return (
    <section className="section-home">
      <Section id="intro-Section"></Section>

      <div className="c-contain">
        <Grid fluid>
          <Row top="xs" className="intro-column-reverse">
            <Col xs={12} sm={12} md={1} lg={1} className="u-vr-top--enormous">
              <IndexBlock index="01" indexValue="Introduction" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={1}
              lg={1}
              className="u-vr-top--enormous"
            ></Col>
            <Col xs={12} sm={12} md={4} lg={4} className="u-vr-top--enormous">
              <h1 className="txt--20 txt--uppercase u-vr--lg">
                I'm Andrew ! <br /> I build websites.
              </h1>
              <hr className="hr--short hr--brand-secondary u-vr--gi" />
              <p className="txt--brand-secondary txt--color-body txt--8">
                I am an enthusiastic, adaptable and driven Front-end engineer
                with experience in both academia and industry. I have a PhD in
                medical informatics. I thrive in both the competitive,
                fast-paced environment of start-up businesses, and enterprise
                level application development, striving to deliver product(s) of
                optimum quality.
              </p>
            </Col>
            <Col xs={8} sm={8} md={6} lg={6}>
              <div>
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
