import React, { useState, useEffect } from "react";
import { Section } from "react-scroll-section";
import { Grid, Row, Col } from "react-flexbox-grid";
import IndexBlock from "../../components/indexBlock/indexBlock";
import Button from "../../components/button/button";
import MoreBlock from "../../components/moreBlock/moreBlock";
import explorations from "../../../datastore/explorations.json";
import { ReactComponent as MapBG } from "../../../assets/images/mapbg6.svg";
import { useScrollSection } from "react-scroll-section";

function Explore() {
  const explore = useScrollSection("explore-Section");

  const [activeArea, setActiveArea] = useState(false);

  useEffect(() => {
    if (explore.selected) {
      setActiveArea(true);
    }
  }, [explore.selected]); // IMPORTANT, This will cause react to update depending on change of this value

  return (
    <>
      <Section
        id="explore-Section"
        className={explore.selected || activeArea ? "activated" : null}
      ></Section>
      <section className="section-explore">
        <div className="c-contain">
          <Grid fluid className="border-left">
            <Row top="xs" className="intro-column-reverse">
              <Col xs={12} sm={12} md={1} lg={1}>
                <IndexBlock index="03" indexValue="Explore" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <MapBG width="300%" height="300%" />
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} className="contentArea">
                <h1 className="txt--36 txt--uppercase txt--color-body">
                  Explore
                </h1>
                <h3 className="txt--normal txt--9 u-vr--sm">
                  I place great value in exploration, and when seeking
                  inspiration,look no further than the natural world. As a
                  number of great artists and philosphers have commented, “Art
                  is but and imitation of nature” (Vincent Van Gogh), “Nature is
                  the art of God” (Dante), “Art takes nature as its model”
                  (Aristotle).
                  <br /> <br />
                  Explore some of my recent expeditions in nature below.
                </h3>
                <hr className="hr--short hr--brand-secondary u-vr-top--md" />
                <h2 className="txt--black txt--12 u-vr-top--vast contentLocationArea">
                  Hare's Gap
                </h2>

                <Row className="contentLocationArea">
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <p className="txt--brand-secondary txt--color-body txt--8">
                      The Hare’s Gap is the most dramatic mountain pass in the
                      Mournes. Its sharply defined outline indicates that ice
                      once passed this way; using the Gap’s convenient
                      north-south alignment to advance and retreat over the
                      entire Mournes range. In more recent times the Hare’s Gap
                      marked the exit point for smuggled goods which had crossed
                      the hills from the coast along the Brandy Pad.
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <p className="txt--brand-secondary txt--color-body txt--8">
                      Nowadays, the Gap’s easily reached central location on the
                      rim of the High Mournes makes it a popular starting point
                      for routes scaling adjoining peaks, or simply for a walk
                      along the gentle contours of the Brandy Pad.
                    </p>
                    <Button content="Read more" symbol="&#8594;"></Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <MoreBlock itemCount={explorations.length} />
        </div>
      </section>
    </>
  );
}

export default Explore;
