# Registration Form 

This is a registration form built using React, with form validation provided by Formik and Yup. User details are stored in Redux, with data persistence enabled by Redux Persist. Upon successful registration, the user's first name, last name, email, and password are saved in the Redux store, and the user is redirected to the login page.

The login page also uses React and Redux, and checks the user's email and password against the stored data in the Redux store. If the credentials match, the user is redirected to the home page. If not, they are redirected back to the signup page.

The home page features a grid that displays the user's details, and a logout button in the header. When the user clicks the logout button, the Redux store is set to null. Routes to the home page are rendered based on whether the Redux store has user details or not.

This project is intended as a simple example of how to use React, Formik, Yup, Redux, and Redux Persist to build a registration form with client-side validation and data persistence. Feel free to use this code as a starting point for your own projects.


