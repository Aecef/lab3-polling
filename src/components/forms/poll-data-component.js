import React, { Component } from 'react';
import {Button, InputGroup, FormControl, Container, Row, Col, Form, Input, FormGroup} from 'react-bootstrap'

export default class PollDataComponent extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeVotesPTS = this.onChangeVotesPTS.bind(this);
        this.onChangeVotesPPS = this.onChangeVotesPPS.bind(this);
        this.onChangeBlocks = this.onChangeBlocks.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            blocks: 1,
            votespts: 1,
            votespps: 1
        }
    }

    // Form Events
    onChangeStartDate(e) {
        this.setState({ startDate: e.target.value })
    }

    onChangeEndDate(e) {
        this.setState({ endDate: e.target.value })
    }

    onChangeVotesPTS(e) {
        this.setState({ votespts: e.target.value })
    }
    onChangeVotesPPS(e) {
        this.setState({ votespps: e.target.value })
    }
    onChangeBlocks(e) {
        this.setState({ blocks: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        this.setState({
            startDate: new Date(),
            endDate: new Date(),
            blocks: 1,
            votespts: 1,
            votespps: 1
        })
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('pollData'));

        if (localStorage.getItem('pollData')) {
            this.setState({
                startDate: this.userData.startDate,
                endDate: this.userData.endDate,
                votespts: this.userData.votespts,
                votespps: this.userData.votespps,
                blocks: this.userData.blocks
            })
        } else {
            this.setState({
                startDate: new Date(),
                endDate: new Date(),
                blocks: 1,
                votespts: 1,
                votespps: 1
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('pollData', JSON.stringify(nextState));
    }
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Start Date</label>
                        <input type="datetime-local" className="form-control" value={this.state.startDate} onChange={this.onChangeStartDate} />
                    </div>
                    <div className="form-group" value={this.state.endDate} onChange={this.onChangeEndDate}>
                        <label>End Date</label>
                        <input type="datetime-local" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Blocks</label>
                        <input type="text" className="form-control"  value={this.state.blocks} onChange={this.onChangeBlocks} />
                    </div>
                    <div className="form-group">
                        <label>Votes Per time Slot</label>
                        <input type="text" className="form-control" value={this.state.votespts} onChange={this.onChangeVotesPTS} />
                    </div>
                    <div className="form-group">
                        <label>Votes Per Person</label>
                        <input type="text" className="form-control" value={this.state.votespps} onChange={this.onChangeVotesPPS} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}