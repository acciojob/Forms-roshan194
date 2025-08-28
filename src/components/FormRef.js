import React, { useRef } from 'react';

const FormRef = () => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordConfirmation = passwordConfirmationRef.current.value;

        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Password Confirmation:', passwordConfirmation);
    };

    return (
        <div id="form-ref-link">
            <h2>Form with useRef</h2>
            <form id="info-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="full_name">Full Name:</label>
                    <input type="text" id="full_name" ref={fullNameRef} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" ref={emailRef} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" ref={passwordRef} required />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Password Confirmation:</label>
                    <input type="password" id="password_confirmation" ref={passwordConfirmationRef} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormRef;