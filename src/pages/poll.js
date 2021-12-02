import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import PollDataComponent from '../components/forms/poll-data-component';
import {Button, InputGroup, FormControl, Container, Row, Col, Form, Input, FormGroup} from 'react-bootstrap'


const StartTime = new Date();
const EndTime = new Date();
EndTime.setHours(StartTime.getHours() + 3);


const  CreatePoll = () => {

  return <Layout>
    <Seo title="Poll Page"/>
    <Container>
        <div id = 'dayTable'> is this null </div>
    </Container>
  </Layout>
  
 }

export default CreatePoll

window.onload = function() {
    console.log('crap');
    tables.createTable(6);
}

const tables = {
    createTable: function (iblocks){
        let data = JSON.parse(window.localStorage.getItem('pollData'));
        iblocks = data.blocks
        const EndTime = new Date();
        EndTime.setTime(data.endDate)
        const StartTime = new Date(data.startDate);
        const BlockSize = (Date.parse(EndTime) - Date.parse(StartTime)) / iblocks; 

        const NewTime = new Date(data.startDate);

    
        console.log(NewTime);
        console.log(EndTime);

        let k = 0;
        for(let i =0; i < iblocks; i++){
            k = (Date.parse(NewTime) + (BlockSize * i));
            //console.log(BlockSize * i);
            //console.log(k);
            if(document.getElementById('dayTable') != null){
                document.getElementById('dayTable').innerHTML += "<h6>" + (new Date(k)) + "</h6>";
            }
            console.log(document.getElementById('dayTable'));
        }
    }
}