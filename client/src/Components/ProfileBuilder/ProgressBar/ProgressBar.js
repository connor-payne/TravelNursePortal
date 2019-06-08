import React from 'react';
import { Progress } from 'reactstrap';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container, Card } from 'reactstrap';

const ProgressBar = (props) => {
  return (
      <Progress multi>
        <Progress bar value="25">Personal Info</Progress>
        <Progress bar animated color="info" value="25">License/Certification</Progress>
        <Progress bar animated color="info" value="25">Work History</Progress>
        <Progress bar animated color="info" value="25">Education</Progress>
      </Progress>
  );
};

export default ProgressBar;
