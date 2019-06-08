import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row, Button, Label, Input, FormText, Container, Card } from 'reactstrap'
import Form from './../Common/Forms/Form'
import CompletionTracker from './CompletionTracker/CompletionTracker'
import ProgressBar from './ProgressBar/ProgressBar'

class ProfileBuilder extends React.Component {
  render () {
    return(
      <Container>
        <Row>
          <Col className='p-0' lg={3}>
            <CompletionTracker/>
          </Col>
          <Col className='mt-5' lg={{size:7,offset:1}}>
            <ProgressBar/>
            <Form/>
          </Col>
        </Row>
      </Container>
    )

  }
}

export default ProfileBuilder;
