import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to Trip Manager</h1>
        <p>You can do the following in this application</p>
        <ul>
            <li>Add a trip</li>
            <li>Update a trip</li>
            <li>Delete a trip</li>
            <li>View trips</li>
        </ul>
     </div>
    );
  }
}
