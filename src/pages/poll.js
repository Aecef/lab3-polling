import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import PollDataComponent from '../components/forms/poll-data-component';
import {Button, InputGroup, FormControl, Container, Row, Col, Form, Input, FormGroup} from 'react-bootstrap'


const StartTime = new Date();
const EndTime = new Date();
EndTime.setHours(StartTime.getHours() + 3);


const CreatePoll = () => (
  <Layout>
    <Seo title="Poll Page"/>
    <Container>
        <div id = 'dayTable'> </div>
        <Button variant= "primary" onClick = {() => tables.createTable(6, document )}></Button>
    </Container>
  </Layout>
  
)

export default CreatePoll


const tables = {
    createTable: function (iblocks, doc){
        let data = JSON.parse(window.localStorage.getItem('pollData'));
        iblocks = data.blocks
        const EndTime = new Date();
        EndTime.setTime(data.endDate)
        const StartTime = new Date(data.startDate);
        const BlockSize = (Date.parse(EndTime) - Date.parse(StartTime)) / iblocks; 

        const NewTime = new Date(data.startDate);
        if(doc.getElementById('dayTable') != null){
            doc.getElementById('dayTable').innerHTML = " ";
        }
    
        console.log(NewTime);
        console.log(EndTime);

        let k = 0;
        for(let i =0; i < iblocks; i++){
            k = (Date.parse(NewTime) + (BlockSize * i));
            console.log(BlockSize * i);
            console.log(k);
            if(doc.getElementById('dayTable') != null){
                doc.getElementById('dayTable').innerHTML += "<h6>" + (new Date(k)) + "</h6>";
            }
        }
    }
}