import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import PollDataComponent from '../components/forms/poll-data-component';
import {Button, InputGroup, FormControl, Container, Row, Col, Form, Input, FormGroup} from 'react-bootstrap'
import CalendarAdmin from "../components/calendar-admin"


const StartTime = new Date();
const EndTime = new Date();
EndTime.setHours(StartTime.getHours() + 3);


const CreatePoll = () => (

    
  <Layout>
    <Seo title="Poll Page"/>

    
    <Container>
        <PollDataComponent />
    </Container>

  </Layout>
  
)

export default CreatePoll


/*const tables = {
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
}*/