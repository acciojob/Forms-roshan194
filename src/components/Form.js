import React from 'react';

const Form = () => {
    return (
        <div id="form-link">
            <h2>Form Section 1</h2>
            <form id="info-form">
                <div>
                    <label htmlFor="full_name">Full Name:</label>
                    <input type="text" id="full_name" name="full_name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input type="password" id="password_confirmation" name="password_confirmation" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;