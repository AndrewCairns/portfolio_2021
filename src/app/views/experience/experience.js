import React, { useState, useEffect } from "react";
import { Section, useScrollSection } from "react-scroll-section";
import { Grid, Row, Col } from "react-flexbox-grid";
import IndexBlock from "../../components/indexBlock/indexBlock";
import Accordion from "../../components/accordion/accordion";

function Experience() {
  const experience = useScrollSection("experience-Section");

  const [activeArea, setActiveArea] = useState(false);

  useEffect(() => {
    if (experience.selected) {
      setActiveArea(true);
    }
  }, [experience.selected]); // IMPORTANT, This will cause react to update depending on change of this value

  return (
    <>
      <Section
        id="experience-Section"
        className={experience.selected || activeArea ? "activated" : null}
      ></Section>
      <section className="section-experience">
        <div className="c-contain">
          <Grid fluid className="border-left">
            <Row top="xs" between="xs" className="intro-column-reverse">
              <Col xs={12} sm={12} md={1} lg={1}>
                <IndexBlock index="05" indexValue="Experience" />
              </Col>
              <Col xs={12} sm={12} md={10} lg={10} className="contentArea">
                <h1 className="txt--36 txt--uppercase txt--color-body">
                  Experience
                </h1>
                <h3 className="txt--normal txt--9 u-vr--sm">
                  With more than a decade in UI/UX education and professional
                  experience, I’ve had the pleasure of working with some great
                  organizations and brilliant people from around the world.
                </h3>
                <hr className="hr--short hr--brand-secondary u-vr-top--md" />

                <Accordion isHeaderTrigger triggerRight collapseOthers>
                  <Accordion.Item
                    headerTitle="Title One"
                    headerSubTitle="Subtitle one"
                    headerChildren={<div>head child here</div>}
                  >
                    Body child
                  </Accordion.Item>
                  <Accordion.Item
                    headerTitle="Title two"
                    headerSubTitle="Subtitle two"
                    headerChildren={<div>head child here</div>}
                  >
                    Body child
                  </Accordion.Item>
                  <Accordion.Item
                    headerTitle="Title three"
                    headerSubTitle="Subtitle three"
                    headerChildren={<div>head child here</div>}
                  >
                    Body child
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Grid>
        </div>
      </section>
    </>
  );
}

export default Experience;
