import React, { Component } from 'react';

export default class CreateAccount extends Component {

	render() {
		return(
			<div className="mform-personal-details">
				<label className="mform-input-label">
					<input type="text" placeholder="Email *" required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" />
				</label>

				<div className="mform-gender">
					<label>Male
						<input type="radio" value="M" name="gender" defaultChecked />
					</label>
					<label>Female
						<input type="radio" value="F" name="gender" />
					</label>
				</div>
			</div>
		);
	}
}