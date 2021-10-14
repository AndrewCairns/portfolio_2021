import React, { useState, useEffect } from "react";
import { Section, useScrollSection } from "react-scroll-section";
import { Grid, Row, Col } from "react-flexbox-grid";
import IndexBlock from "../../components/indexBlock/indexBlock";
import Accordion from "../../components/accordion/accordion";
import experienceData from "../../../datastore/experience.json";

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

                <div className="u-hidden@xsmall u-vr-top--enormous">
                  <Accordion triggerRight collapseOthers>
                    {experienceData.map((job, i, arr) => {
                      if (arr.length - 1 === i) {
                        return (
                          <Accordion.Item
                            headerTitle={job.role}
                            headerSubTitle={job.date}
                            headerTitleHighlight={job.company}
                            key={i}
                          >
                            <Grid>
                              <Row middle="xs">
                                <Col xs={12} sm={12} md={12} lg={12}>
                                  <p>{job.description}</p>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                  <div className="flex flex-align-center">
                                    {job.imgs.map((img, i) => {
                                      return (
                                        <div className="flex-1" key={i}>
                                          <a
                                            href={img.url}
                                            title={img.title}
                                            target="_blank"
                                          >
                                            <img
                                              className="img-grow"
                                              src={img.src}
                                              alt={img.title}
                                            />
                                          </a>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Col>
                              </Row>
                            </Grid>
                          </Accordion.Item>
                        );
                      } else {
                        return (
                          <Accordion.Item
                            headerTitle={job.role}
                            headerSubTitle={job.date}
                            headerTitleHighlight={job.company}
                            key={i}
                          >
                            <Grid>
                              <Row middle="xs">
                                <Col xs={12} sm={12} md={8} lg={8}>
                                  <p>{job.description}</p>
                                </Col>
                                <Col xs={12} sm={12} md={4} lg={4}>
                                  <div className="flex flex-align-center">
                                    {job.imgs.map((img, i) => {
                                      return (
                                        <a
                                          href={img.url}
                                          title={img.title}
                                          target="_blank"
                                          key={i}
                                        >
                                          <img
                                            className="img-grow"
                                            src={img.src}
                                            alt={img.title}
                                          />
                                        </a>
                                      );
                                    })}
                                  </div>
                                </Col>
                              </Row>
                            </Grid>
                          </Accordion.Item>
                        );
                      }
                    })}
                  </Accordion>
                </div>

                <Grid className="u-vr-top--enormous u-vr--enormous stacks">
                  <Row className="row no-perimeter-padding">
                    <Col xs={12} sm={12} md={3} lg={3}>
                      <h3>Skill Set</h3>
                      <ul>
                        <li>UX / UI Design</li>
                        <li>Responsive Design</li>
                        <li>Strategy</li>
                        <li>Creative Thinking</li>
                        <li>System Architecture</li>
                        <li>Client-side Development</li>
                        <li>API Architecture</li>
                        <li>Data Normalisation</li>
                        <li>Performance Optimisation</li>
                        <li>Accessibility Testing</li>
                        <li>Dissemination</li>
                        <li>Communication</li>
                      </ul>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3}>
                      <h3>Tech Stack</h3>
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>WordPress</li>
                        <li>Git</li>
                        <li>Sketch</li>
                        <li>Figma</li>
                        <li>Adobe CC</li>
                        <li>Office 365</li>
                        <li>Keynote</li>
                      </ul>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <h3>Accomplishments</h3>
                      <p>
                        Completed a PhD in Medical Informatics and nominated for
                        best PhD thesis 2018 at Ulster University awards
                        ceremony
                      </p>
                      <p>
                        Led a code academy teaching programming to secondary
                        school teachers
                      </p>
                      <p>
                        Was a key member in the establishment of Ulster
                        University’s UX laboratory
                      </p>
                      <p>
                        Led the front end engineering team within Allstates
                        Online Sales department, serving &gt;35k unique
                        customers per week
                      </p>
                    </Col>
                  </Row>
                </Grid>
              </Col>
            </Row>
          </Grid>
        </div>
      </section>
    </>
  );
}

export default Experience;
