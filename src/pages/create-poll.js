import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, InputGroup, FormControl, Container, Row, Col, Form, Input, FormGroup} from 'react-bootstrap'
import CalendarAdmin from "../components/calendar-admin"


const CreatePoll = () => (
  <Layout>
    <Seo title="Poll Page"/>
    <Container>
        <Form>
            <Row>
                <Col xs={4} md={4}>
                    <Row> Start Time </Row>
                    <Row> End Time </Row>
                </Col>
                <Col className = "p-0" xs={4} md={4}>
                    <Row> <input type="datetime-local" id="startDate" name="startDate" /> </Row>
                    <Row> <input type="datetime-local" id="endDate" name="endDate" /> </Row>
                </Col>
                <Col xs={4} md={4}></Col>
            </Row>
            <Row>
                <InputGroup className="my-3">
                    <FormControl
                        placeholder="Time Blocks"
                    />
                </InputGroup>
            </Row>
            <Row>
                <Button type = "submit">Create Poll</Button>
            </Row>
        </Form>
    </Container>
  </Layout>
  
)

export default CreatePoll
