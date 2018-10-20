import React, { Component } from 'react';

export default class PersonalDetails extends Component {
	render() {
		return(
			<div className="mform-personal-details">
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />
				<input type="text" placeholder="Phone Number" />
			</div>
		);
	}
}