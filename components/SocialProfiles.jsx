import React, { Component } from 'react';

export default class SocialProfiles extends Component {
	render() {
		return(
			<div className="mform-social-profiles">
				<label className="mform-input-label">
					<input type="text" placeholder="Facebook/username" />
				</label>
				<input type="text" placeholder="Twitter/@handle" />
			</div>
		);
	}
}