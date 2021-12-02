import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import PollDataComponent from '../components/forms/poll-data-component';
import {Button, InputGroup, FormControl, Container, Row, Col, Form, Input, FormGroup,Table} from 'react-bootstrap'


const  CreatePoll = () => {

   return <Layout>
    <Seo title="Poll Page"/>
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Time Slot</th>
                    <th>Reserve</th>
                    <th>Slots Left</th>
                    <th>People</th>
                </tr>
            </thead>
            <tbody id = 'dayTable'>
                {tables.createTable(6)}  
            </tbody>
        </Table> 
    </Container>
  </Layout>
   
 }

export default CreatePoll

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
                document.getElementById('dayTable').innerHTML += "<tr>" + '<td>' + (new Date(k)) + '</td>' + "</tr>";
            }
            console.log(document.getElementById('dayTable'));
        }
    }
}