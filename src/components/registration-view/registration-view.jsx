import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegistrationView (props) {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthdate, setBirthdate ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password, email, birthdate);
        props.onRegistration(username);
    }

    return (
        <form>
            <label>
                First name:
                <input type="text" value = { firstname } onChange = {event => setFirstname(event.target.value)} />
            </label>
            <label>
                Last name:
                <input type="text" value = { lastname } onChange = {event => setLastname(event.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value = { email } onChange = {event => setEmail(event.target.value)} />
            </label>
            <label>
                Username:
                <input type="text" value = { username } onChange = {event => setUsername(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value = { password } onChange = {event => setPassword(event.target.value)} />
            </label>
            <label>
                Birthday:
                <input type="date" value = { birthdate} onChange = {event => setBirthdate(event.target.value)} />
            </label>
            <button type="submit" onClick = {handleSubmit}>Sign Up</button>
        </form>
    )
}


RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired
};