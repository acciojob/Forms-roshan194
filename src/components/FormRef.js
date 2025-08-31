import { useRef } from 'react';
import Card from './Card.js';

export default function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirm: passwordConfirmRef.current.value
    };
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6 text-center">Form with useRef</h2>
      <form id="info-form" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="full_name"
            type="text"
            ref={fullNameRef}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="password_confirmation"
            type="password"
            ref={passwordConfirmRef}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </Card>
  );
}