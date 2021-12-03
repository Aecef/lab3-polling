import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import PollFormEnd from '../components/forms/poll-form-end';
const isBrowser = typeof window !== "undefined"

import PollDataComponent from '../components/forms/poll-data-component';
import {Container,Table} from 'react-bootstrap'

const  CreatePoll = () => {

   return <Layout>
    <Seo title="Poll Page"/>
    <Container>
        <button onClick={saveData}>Table</button> 
        <button onClick={tables.createTable}>Blocks Made</button>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Time Slot</th>
                    <th>Reserve Slot</th>
                    <th>Capacity</th>
                    <th>People</th>
                </tr>
            </thead>
            <tbody id = 'dayTable'>
                <PollFormEnd dayinmil={Date.parse(new Date(1638486086000))} votesPTS = {2} people = {["Kyle", "Alec"]} reservations = {0} />
            </tbody>

            <tbody id= 'dayTableShow'>

            </tbody>

        </Table>
    </Container>
  </Layout>
   
 }

export default CreatePoll 


//<PollFormEnd dayinmil={Date.parse(new Date(1638486086000))} votesPTS = {2} people = {["Kyle", "Alec"]} reservations = {0} />
//<PollFormEnd dayinmil={Date.parse(new Date(1638486084000))} votesPTS = {2} people = {["Timmy", "Al"]} reservations = {1} />


function saveData(){
    if(isBrowser){
    let data = JSON.parse(window.localStorage.getItem('pollData'));
    let dataSlot;
    let iblocks = data.blocks
    const EndTime = new Date();
    EndTime.setTime(data.endDate)
    const StartTime = new Date(data.startDate);
    const BlockSize = (Date.parse(EndTime) - Date.parse(StartTime)) / iblocks; 
    let slot_records = new Array();
    slot_records = JSON.parse(localStorage.getItem("slots"))?JSON.parse(localStorage.getItem("slots")):[]
    const NewTime = new Date(data.startDate);

    let timeslots;
    let k = 0;
    for(let i =0; i < iblocks; i++){
        k = (Date.parse(NewTime) + (BlockSize * i));
            if (localStorage.getItem('slots' + k)) {
                //dataSlot = JSON.parse(window.localStorage.getItem('slot' + k));
                slot_records.push({
                    "dateinmil": k,
                    "votesPTS": dataSlot.votespts,
                    "people": dataSlot.people
                })
            } else {
            }
        }
    }
}

const tables = {
        createTable: function (){
        if(isBrowser){let data = JSON.parse(window.localStorage.getItem('pollData'));}
        let dataSlot;
        let iblocks = data.blocks

        const EndTime = new Date();
        EndTime.setTime(data.endDate)
        const StartTime = new Date(data.startDate);
        const BlockSize = (Date.parse(EndTime) - Date.parse(StartTime)) / iblocks; 

        const NewTime = new Date(data.startDate);

    
        console.log(NewTime);
        console.log(EndTime);
        let timeslots;
        let k = 0;
        for(let i =0; i < iblocks; i++){
            k = (Date.parse(NewTime) + (BlockSize * i));
            //console.log(BlockSize * i);
            //console.log(k);
            if(document.getElementById('dayTable') != null){
                //document.getElementById('dayTable').innerHTML += "<tr>" + '<td>' + (new Date(k)) + '</td>' + "</tr>";
                if (localStorage.getItem('slots')) {
                    dataSlot = JSON.parse(window.localStorage.getItem('slot' + k));
                    document.getElementById('dayTable').innerHTML += "<PollFormEnd dayinmil=" + Date.parse(new Date(k)) + " votesPTS = {"+ dataSlot.votespts +"} people ="+ dataSlot.people +" reservations = "+ dataSlot.reservations +" />"

                } else {
                    //document.getElementById('dayTable').innerHTML += "<"+ "P" + "ollFormEnd dayinmil=" + Date.parse(new Date(k)) + " />"
                    document.getElementById('dayTableShow').innerHTML +=  "<td> <tr>" + (new Date(k)).toLocaleDateString() + "</tr> <tr>" + (new Date(k)).toLocaleTimeString() + "</tr> </td>"
                }
            }
            console.log(document.getElementById('dayTable'));
        }
    }
}