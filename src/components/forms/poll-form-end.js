import React, { Component } from 'react';

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
            reservations: parseInt(this.reservations),
        }
    }

    onSubmit(e) {
        e.preventDefault()
    }

    
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('slot' + this.props.dayinmil));

        if (localStorage.getItem('slot' + this.props.dayinmil)) {
            this.setState({
                dayinmil: parseInt(this.userData.dayinmil),
                people: this.userData.people,
                votes: this.userData.votes,
                reservations: parseInt(this.userData.reservations),
            })
        } else {
            this.setState({
                dayinmil: parseInt(this.props.dayinmil),
                people: this.props.people,
                votes: this.props.voterPTS,
                reservations: parseInt(this.props.reservations),
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('slot' + this.props.dayinmil, JSON.stringify(nextState));
    }



    render() {

        return (
                <tr>
                    <td>
                        <tr>{(new Date(this.props.dayinmil)).toLocaleDateString()}</tr>
                        <tr>{(new Date(this.props.dayinmil)).toLocaleTimeString()}</tr>
                    </td>
                    <td>
                        <div className="form-group">
                            <td> <input type="text" className="form-control" placeholder="Name" /></td>
                            <td><button type="submit" className="btn btn-primary btn-block">Reserve</button></td>
                        </div>
                    </td>
                    <td>
                        {this.props.votesPTS}
                    </td>
                    <td>
                        {this.props.people.toString()}
                    </td>
                </tr>
        )
    }
}