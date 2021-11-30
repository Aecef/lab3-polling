import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, InputGroup, FormControl, Container, Row, Col, Form, Input, FormGroup} from 'react-bootstrap'
import CalendarAdmin from "../components/calendar-admin"


const StartTime = new Date();
const EndTime = new Date();
EndTime.setHours(StartTime.getHours() + 3);


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

        <div id = 'dayTable'></div>
    </Container>

    <h2>{StartTime.toString()}</h2>
    <h2>{EndTime.toString()}</h2>

  </Layout>
  
)

export default CreatePoll

function CreateTable(blocks){ 
    const BlockSize = (EndTime.getTime() - StartTime.getTime()) / blocks; 
    const NewTime = StartTime;
    for(let i =0; i < blocks; i++){
        NewTime.setTime(NewTime.getTime() + (BlockSize * i));
        document.getElementById('dayTable').innerHTML += "<h6>{NewTime.toString()}</h6>";
        
    }
}

window.addEventListener('load', (event) => {
    CreateTable(8);
});
