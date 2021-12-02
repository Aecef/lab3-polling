import React, { Component } from 'react';
import {Button, InputGroup, FormControl, Container, Row, Col, Form, Input, FormGroup} from 'react-bootstrap'

export default class PollFormEnd extends Component {
    userData;

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        console.log(props.dayinmil);   
        this.state = {
            dayinmil: props.dayinmil,
            people: props.people,
            votes: props.voterPTS,
            reservations: this.reservations,
        }
    }


    onSubmit(e) {
        e.preventDefault()
    }

    
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('slot' + this.props.dayinmil));

        if (localStorage.getItem('slot' + this.props.dayinmil)) {
            this.setState({
                dayinmil: this.userData.dayinmil,
                people: this.userData.people,
                votes: this.userData.votes,
                reservations: this.userData.reservations,
            })
        } else {
            this.setState({
                dayinmil: this.props.dayinmil,
                people: this.props.people,
                votes: this.props.voterPTS,
                reservations: this.props.reservations,
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('slot' + this.props.dayinmil, JSON.stringify(nextState));
    }



    render() {
        return (
            <div className="container">
                <tr>
                    <td>
                        {(new Date(this.props.dayinmil)).toString()}
                    </td>
                    <td>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" />
                            <button type="submit" className="btn btn-primary btn-block">Reserve</button>
                        </div>
                    </td>
                    <td>
                        {this.props.people.toString()}
                    </td>
                </tr>
                
            </div>
        )
    }
}