## React based Multi Step Form Wrapper

#### Usage

```jsx
const CreateAccount = props => <input type="text" />

const SocialProfiles = props => (
	<div className="mform-social-profiles">
		<label className="mform-input-label">
			<input type="text" placeholder="Facebook/username" />
		</label>
		<input type="text" placeholder="Twitter/@handle" />
	</div>
)
.
.
.
render() {

    const steps = [
    	<CreateAccount title="Create Account" />,
    	<SocialProfiles title="Social Profiles" />,
    ];
    
    return (
        <MFormContainer steps={ steps } />
    )
}
```