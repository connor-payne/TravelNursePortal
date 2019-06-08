import React from "react";
import './ProfileForm.css';

import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container, Card } from 'reactstrap';
const FormInput = ({ name, label, error, ...rest }) => {
  return (
    <Container>
      <Col className='form-container mt-4'>
        <Card className='form-card'>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input className='rounded-0' type="text" name="firstname" id="firstName" placeholder="Enter your firstname" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input className='rounded-0' type="text" name="lastname" id="lastName" placeholder="Enter your lastname" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input className='rounded-0' type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input className='rounded-0' type="text" name="city" id="exampleCity"/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input className='rounded-0' type="text" name="state" id="exampleState"/>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input className='rounded-0' type="text" name="zip" id="exampleZip"/>
                </FormGroup>
              </Col>
            </Row>
            <Button className='btn btn-info px-4 rounded-0'>Next</Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

export default FormInput;
