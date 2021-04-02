import React, { useState, useEffect } from "react";
import { Section, useScrollSection } from "react-scroll-section";
import { Grid, Row, Col } from "react-flexbox-grid";
import IndexBlock from "../../components/indexBlock/indexBlock";
import Accordion from "../../components/accordion/accordion";
import Tabs from "../../components/tabs/tabs";

function Experience() {
  const experience = useScrollSection("experience-Section");

  const [activeArea, setActiveArea] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

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

                <div class="u-hidden@xsmall">
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
                </div>

                <Tabs
                  comparison
                  tabs={[
                    {
                      label: "hit 1",
                      id: "hit-1",
                      content: <span> Hit 1</span>,
                      onClick: () => {
                        setActiveTab(0);
                      },
                    },
                    {
                      label: "hit 2",
                      id: "hit-2",
                      content: <span> Hit 2</span>,
                      onClick: () => {
                        setActiveTab(1);
                      },
                    },
                    {
                      label: "hit 3",
                      id: "hit-3",
                      content: <span> Hit 3</span>,
                      onClick: () => {
                        setActiveTab(2);
                      },
                    },
                    {
                      label: "hit 4",
                      id: "hit-4",
                      content: <span> Hit 4</span>,
                      onClick: () => {
                        setActiveTab(3);
                      },
                    },
                  ]}
                />

                <div className="c-tabs__container">
                  <div
                    className={`c-tabs__container--block ${
                      activeTab === 0 ? "is-active" : ""
                    }`}
                  >
                    Hello 1
                  </div>
                  <div
                    className={`c-tabs__container--block ${
                      activeTab === 1 ? "is-active" : ""
                    }`}
                  >
                    Hello 2
                  </div>
                  <div
                    className={`c-tabs__container--block ${
                      activeTab === 2 ? "is-active" : ""
                    }`}
                  >
                    Hello 3
                  </div>
                  <div
                    className={`c-tabs__container--block ${
                      activeTab === 3 ? "is-active" : ""
                    }`}
                  >
                    Hello 4
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </section>
    </>
  );
}

export default Experience;
