import React from "react";
import { Card, Image, Row, Col, Badge } from "react-bootstrap";
const EmpleadoAvatar = (props) => {
  return (
    <Card >
      <Card.Body>
        <Row>
          <Col lg={4}>
            <Image src={props.pic} className="w-50"></Image>
          </Col>

          <Col lg={6} className="">
            <Card.Title>{props.fullName}</Card.Title>
            <div className="d-flex align-items-center justify-content-center">
              <div className="me-3 mt-1">
                <Card.Subtitle>{props.title} </Card.Subtitle>
              </div>
              <Badge bg="primary">{props.department}</Badge>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EmpleadoAvatar;
