import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const JobSpecial = () => {
  return (
    <Container>
      <Row className="mt-3">
        {/* Logo in the upper left corner */}
        <Col>
          <img src="../../assets/BYLogo.png" alt="Logo" className="logo" />
        </Col>

        {/* Buttons and line in the upper right corner */}
        <Col className="text-right">
          <Button variant="light" className="mr-2">Home</Button>
          <Button variant="light" className="mr-2">Notifications</Button>
          <Button variant="light" className="mr-2">Profile</Button>
        </Col>
      </Row>

      {/* Line below the buttons */}
      <hr/>

      {/* Search box */}
      <Row className="mt-3">
        <Col>
          <InputGroup className="mb-3">
            <FormControl placeholder="Search for jobs..." />
          </InputGroup>
        </Col>
      </Row>

      {/* Title "Find Jobs" */}
      <Row className="mt-3">
        <Col>
          <h2>Find Jobs</h2>
        </Col>
      </Row>

      {/* Two big buttons with a white background */}
      <Row className="mt-3">
        <Col>
          <Button variant="light" size="lg" className="job-button">Find Jobs</Button>
          <Button variant="light" size="lg" className="employer-button">Find Employers</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JobSpecial;
