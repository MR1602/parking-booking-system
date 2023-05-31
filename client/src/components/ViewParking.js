import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Area from "./Area";

const ViewParking = (props) => {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item
              className="border"
              style={{
                marginRight: "30px",
                marginLeft: "30px",
                marginBottom: "30px",
              }}
            >
              <Nav.Link eventKey="first">area 1</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="border"
              style={{
                marginRight: "30px",
                marginLeft: "30px",
                marginBottom: "30px",
              }}
            >
              <Nav.Link eventKey="second">area 2</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="border"
              style={{
                marginRight: "30px",
                marginLeft: "30px",
                marginBottom: "30px",
              }}
            >
              <Nav.Link eventKey="third">area 3</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <Area/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            <Tab.Pane eventKey="third">third tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ViewParking;
