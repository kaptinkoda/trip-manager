import React, { Component } from 'react';
import axios from 'axios';

export class Delete extends Component {
    constructor(props) {
        super(props);

        this.onConfirmation = this.onConfirmation.bind(this);
        this.onCancel = this.onCancel.bind(this);

        this.state = {
            id: 0,
            name: "",
            description: "",
            dateStarted: null,
            dateCompleted: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get("api/trips/getTrip/" + id).then(res => {
            let trip = res.data;
            console.log(trip);
            this.setState({
                id: trip.id,
                name: trip.name,
                description: trip.description
            })
        })
    }

    onCancel() {
        const { history } = this.props;
        history.push('/trips');
    }

    onConfirmation() {
        const { history } = this.props;
        
        axios.delete("api/trips/deleteTrip/"+this.state.id).then(res => {
            history.push('/trips');
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Delete trip confirmation</h2>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title"> {this.state.name} </h4>
                        <p class="card-text"> {this.state.description} </p>
                        <button onClick={this.onCancel} class="btn btn-default">
                            Cancel
                        </button>
                        <button onClick={this.onConfirmation} class="btn btn-danger">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}