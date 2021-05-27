import React, { Component } from 'react';
import axios from 'axios';
export class Trip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            loading: true
        }
    }

    componentDidMount() {
        this.loadTripsData();
    }

    loadTripsData() {
        axios.get("api/trips/getAllTrips").then(result => {
            const response = result.data;
            this.setState({
                trips: response,
                loading: false
            });
        })
    }

    onTripUpdate(id) {
        const { history } = this.props;
        history.push('update/'+id)
    }

    onTripDelete(id) {
        const { history } = this.props;
        history.push('delete/' + id)
    }

    renderAllTrips(trips) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Date Started</td>
                        <td>Date Completed</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {trips.map(trip => (
                        <tr key={trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{trip.dateStarted ? new Date(trip.dateStarted).toISOString().slice(0,10) : '-'}</td>
                            <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0,10) : '-'}</td>
                            <td>
                                <div className="form-group">
                                    <button onClick={() => this.onTripUpdate(trip.id)} className="btn btn-success">Update</button>
                                    <button onClick={() => this.onTripDelete(trip.id)} className="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }


    render() {

        let content = this.state.loading ? (
            <p>
                <em>loading...</em>
            </p>
        ): (
            this.renderAllTrips(this.state.trips)
        )

        return (
            <div>
                <h1>All trips</h1>
                <p>Here are all your trips</p>
                {content}
            </div>
        )
    }
}