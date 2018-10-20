import React, { Component } from 'react';

export default class MFormContainer extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			currentStep: 0,
			maxStep: 0,
		}
	}

	/**
	 * Handler for previous button.
	 */
	stepPrevious() {
		
		this.setState({
			currentStep: this.state.currentStep - 1,
		})
	}

	/**
	 * Handler for next button.
	 */
	stepNext() {

		const allInputs = document.querySelectorAll( '.mform .active-step input' );

		let valid = true;

		allInputs.forEach( input => {
			if ( ! input.checkValidity() && input.style.display !== 'none' ) {
				input.classList.add( 'required-field' );
				valid = false;
			} else {
				input.classList.remove( 'required-field' )
			}
		})

		valid && this.setState({
			currentStep: this.state.currentStep + 1,
			maxStep: this.state.currentStep + 1,
		})
	}

	/**
	 * Handler to skip to previous steps.
	 */
	stepTo( index, event ) {
		if( index <= this.state.maxStep ) {
			this.setState({
				currentStep: index
			});
		}
	}

	render() {

		const steps = this.props.steps;
		const currentStep = this.state.currentStep;

		const stepField = steps.map( ( step, index ) => {
			return (
				<div key={ index } className={ `hidden ${ ( index === currentStep ) ? 'active-step' : null }` }>

					{ step }

					<div className="mform-navigation-buttons">
						{/* Previous button */}
						{ ( index > 0 ) && (
							<React.Fragment>
								<button type="button" onClick={ this.stepPrevious.bind( this ) }>Previous</button>
							</React.Fragment>
						) }

						{/* Next button */}
						{ ( index < steps.length - 1 ) && (
							<React.Fragment>
								<button className="mform-next-button" type="button" onClick={ ( event ) => {
										this.stepNext.bind( this )();
										if ( step.props.hasOwnProperty( 'onNextClick' ) ) {
											step.props.onNextClick();
										}
									} }
								>Next</button>
							</React.Fragment>
						) }

						{/* Submit button */}
						{ ( index === steps.length - 1 ) && (
							<React.Fragment>
								<input type="submit" />
							</React.Fragment>
						) }
					</div>
				</div>
			)
		})

		return (
			<React.Fragment>
				<ul className="mform-navigation">
					{ steps.map( ( step, index ) => {
						return (
							<li
								className={ ( index === currentStep ) ? 'active-tab' : null + ( index <= currentStep ) ? 'visited' : null }
								key={ index }
								onClick={ this.stepTo.bind( this, index ) }>
								{ step.props.hasOwnProperty( 'title' ) ? step.props.title : `Step ${ index + 1 }` }
							</li>
						)
					})}
				</ul>
				<form className="mform">
					{ stepField }
				</form>
			</React.Fragment>
		)
	}
}