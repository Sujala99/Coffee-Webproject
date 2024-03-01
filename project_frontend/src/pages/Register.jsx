import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
      fullName: event.target.elements.name.value, // Updated to target elements by their names
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    // Post form data to backend
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle success response
      // You might want to redirect the user or clear the form here
    } catch (error) {
      console.error('There was an error!', error);
      // Handle errors here, such as displaying a notification
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{' '}
            <a
              href="#signInPage" // Ideally, this should be a link to your sign-in route
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
            <Link to="/signin" className="font-bold text-black underline">
              Sign in.
            </Link>           
             </a>
          </p>
          <form onSubmit={handleSubmit} className="mt-8"> {/* Updated to use the handleSubmit function */}
            <div className="space-y-5">
              <div>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"
                  id="name" // Corrected to match formData key
                  name="name" // Added for formData
                />
              </div>
              <div>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="phonenuber"
                  id="phonenumber" // Corrected to match formData key
                  name="phonenumber" // Added for formData
                />
              </div>
              <div>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email" // Added for formData
                />
              </div>
              <div>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password" // Added for formData
                />
              </div>
              <div>
                <button
                  type="submit" // Changed to "submit" to trigger form submission
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
