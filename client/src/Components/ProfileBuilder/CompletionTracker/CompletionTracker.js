import React from 'react'
import PropTypes from 'prop-types'
import './CompletionTracker.css'
import { Container, Row, Col} from 'reactstrap'

class CompletionTracker extends React.Component {
  render () {
    return (
      <Container className='completionTracker'>
        <Row className='p-2 pt-4'>
          <Col lg={2}>
            <div className='statusCircle complete'></div>
          </Col>
          <Col>
            Personal Info
          </Col>
        </Row>
        <Row className='p-2'>
          <Col lg={2}>
            <div className='statusCircle incomplete'></div>
          </Col>
          <Col>
            License/Certification
          </Col>
        </Row>
        <Row className='p-2'>
          <Col lg={2}>
            <div className='statusCircle incomplete'></div>
          </Col>
          <Col>
            Work History
          </Col>
        </Row>
        <Row className='p-2'>
          <Col lg={2}>
            <div className='statusCircle incomplete'></div>
          </Col>
          <Col>
            Education
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CompletionTracker;
