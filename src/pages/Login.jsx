import React from 'react'

function Login() {




   const { handleChange, values, handleSubmit, handleBlur, errors, touched } =  useFormik({
  //const formik  =  useFormik({
  initialValues: {
    username: "",
    author: "",
  
  },
  onSubmit: async (values) => {
    // manipulate values before API call
   const payload = {
      ...values,
       username: values.username.toLowerCase(),
      author: values.author
      ,

    };

    // wait for mutation result
     console.log("varible"+values.username);
      console.log("varible"+values.author);
    //const response = await mutation.mutate(  { url: `http://localhost:3000/users/useradd`, body: values, method: 'POST' });

    // mutation.mutate(  { url: `http://localhost:3000/book/bookadd`, body: payload, method: 'POST' });

    // manipulate form values using mutation response
    //console.log("use form ik"+response);
   
  },
});

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4"> {/* */}
      {/* Card Container */}
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md"> {/* */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name='email'
             // value={email}
            //  onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name='password'
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
