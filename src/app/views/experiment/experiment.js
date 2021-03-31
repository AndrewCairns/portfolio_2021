import React, { useState, useEffect } from "react";
import { Section, useScrollSection } from "react-scroll-section";
import { Grid, Row, Col } from "react-flexbox-grid";
import IndexBlock from "../../components/indexBlock/indexBlock";
import Button from "../../components/button/button";
import { ReactComponent as StreamGraph } from "../../../assets/images/charts/StreamGraph.svg";
import { ReactComponent as Sunburst } from "../../../assets/images/charts/Sunburst.svg";
import { ReactComponent as BubbleChart } from "../../../assets/images/charts/BubbleChart.svg";
import { ReactComponent as Donut } from "../../../assets/images/charts/Donut.svg";
import { ReactComponent as Histogram } from "../../../assets/images/charts/Histogram.svg";
import { ReactComponent as SpiderChart } from "../../../assets/images/charts/SpiderChart.svg";
import { ReactComponent as Topojson } from "../../../assets/images/charts/Topojson.svg";
import { ReactComponent as Chord } from "../../../assets/images/charts/Chord.svg";
import { ReactComponent as LineChart } from "../../../assets/images/charts/LineChart.svg";
import { ReactComponent as StackedAreaChart } from "../../../assets/images/charts/StackedAreaChart.svg";
import { ReactComponent as Sankey } from "../../../assets/images/charts/Sankey.svg";
import { ReactComponent as PieChart } from "../../../assets/images/charts/Pie.svg";

function Experiment() {
  const experiment = useScrollSection("experiment-Section");

  const [activeArea, setActiveArea] = useState(false);

  useEffect(() => {
    if (experiment.selected) {
      setActiveArea(true);
    }
  }, [experiment.selected]); // IMPORTANT, This will cause react to update depending on change of this value

  return (
    <>
      <Section
        id="experiment-Section"
        className={experiment.selected || activeArea ? "activated" : null}
      ></Section>
      <section className="section-experiment">
        <div className="c-contain">
          <Grid fluid>
            <Row top="xs" className="intro-column-reverse">
              <Col xs={12} sm={12} md={1} lg={1}>
                <IndexBlock index="04" indexValue="Experiment" />
              </Col>
              <Col xs={12} sm={12} md={1} lg={1}></Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <h1 className="txt--14 txt--uppercase txt--color-body">
                  Experiment
                </h1>
                <h3 className="txt--color-secondary txt--normal txt--8 u-vr--sm">
                  Data Driven Decisions
                </h3>
                <p className="txt--brand-secondary txt--color-body txt--8">
                  Everyone* has data, but what does it all mean? Linking
                  exploration to experimentation via data visualisation, David
                  McCanless puts it nicely when he says: “by visualising
                  infomation, we turn it into a landscape that you can explore
                  with your eyes, a kind of information map. And when you are
                  lost in information, a map is kind of useful”. <br />
                  Data visualisation can provide insight into complex data, and
                  “graphical elegance is often found in simplicity of design and
                  complexity of data.
                  <br />
                  <br />
                  Go, see some of my recent experiments on the right.
                </p>
                <Button
                  varient="light"
                  content="View all"
                  symbol="&#8594;"
                ></Button>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="grid">
                  <div className="item">
                    <StreamGraph width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <Sunburst width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <BubbleChart width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <Donut width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <Histogram width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <SpiderChart width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <Topojson width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <Chord width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <LineChart width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <StackedAreaChart width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <Sankey width="100%" height="100%" />
                  </div>
                  <div className="item">
                    <PieChart width="100%" height="100%" />
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

export default Experiment;
