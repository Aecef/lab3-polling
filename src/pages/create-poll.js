import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

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
                        id = "timeblocks"
                    />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup className="my-3">
                    <FormControl
                        placeholder="Max Votes Per Time"
                    />
                </InputGroup>
            </Row>
            <Row>
                <Button type = "submit">Create Poll</Button>
            </Row>
        </Form>

        <div id = 'dayTable' > dayTable </div>
    </Container>

    <h2>{StartTime.toString()}</h2>
    <h2>{EndTime.toString()}</h2>

    <Button variant= "primary" onClick = {() => tables.createTable(6, document )}></Button>
  </Layout>
  
)

export default CreatePoll


const tables = {
    createTable: function (blocks, doc){
        const BlockSize = (Date.parse(EndTime) - Date.parse(StartTime)) / blocks; 
        console.log(BlockSize);
        const NewTime = new Date(Date.parse(StartTime));
        if(doc.getElementById('dayTable') != null){
            doc.getElementById('dayTable').innerHTML = " ";
        }
    
        console.log(NewTime);
        console.log(EndTime);
        for(let i =0; i < blocks; i++){
            NewTime.setTime(NewTime.getTime() + (BlockSize * i));

            if(doc.getElementById('dayTable') != null){
                doc.getElementById('dayTable').innerHTML += "<h6>" + NewTime.toString() + "</h6>";
            }
        }
    }
}