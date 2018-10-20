import React, { Component } from 'react';
import CreateAccount from './CreateAccount';
import SocialProfiles from './SocialProfiles';
import PersonalDetails from './PersonalDetails';
import MFormContainer from './MFormContainer';
import github from 'simple-icons/icons/github';

export default class MultiStepFormApp extends Component {

	render() {
		const steps = [
			<CreateAccount title="Create Account" />,
			<SocialProfiles title="Social Profiles" />,
			<PersonalDetails title="Personal Details" />,
		];

		return (
			<React.Fragment>
				<div className="multi-step-form-app">
					<MFormContainer steps={ steps } />
				</div>
				<h1>A Multi-Step Form powered by <span><a href="https://reactjs.org/">React JS</a></span></h1>
				<a href="https://github.com/Sidsector9/react-multi-step-form" className="mform-github-logo" dangerouslySetInnerHTML={{ __html: github.svg }} />
				<p className="mform-author-name">Created by: <a href="https://github.com/Sidsector9">Siddharth Thevaril</a></p>
			</React.Fragment>
		);
	}
}