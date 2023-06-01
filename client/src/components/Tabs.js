import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ViewParking from "./ViewParking";
import BookParking from "./BookParking";
import ViewBookings from "./ViewBookings";

const Tabs = () => {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row style={{ marginTop: "50px", marginBottom: "100px" }}>
        <Col sm={9}>
          <Nav variant="pills" className="flex-row">
            <Nav.Item className="w-25 border" style={{ marginRight: "10px" }}>
              <Nav.Link eventKey="first">view parkings</Nav.Link>
            </Nav.Item>
            <Nav.Item className="w-25 border" style={{ marginRight: "10px" }}>
              <Nav.Link eventKey="second">book parkings</Nav.Link>
            </Nav.Item>
            <Nav.Item className="w-25 border">
              <Nav.Link eventKey="third">view bookings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ViewParking />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <BookParking />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <ViewBookings />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Tabs;
