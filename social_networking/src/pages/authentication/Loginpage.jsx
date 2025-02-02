import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(12, "Password must have 12 characters")
    .required("Password required"),
});

const initialValues = {
  email: "",
  password: "",
}; // needed  for email and password for login

const Loginpage = () => {
  const navigate = useNavigate(); //  Has to be inside the component

  const handleSubmit = (values) => {
    console.log("handle submit", values);

    // Simulating successful login
    setTimeout(() => {
      navigate("/home"); //  Redirects to home after successful login
    }, 1000);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {() => (
        <Form className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="password"
              placeholder="Enter your password"
              type="password"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>

          <div className="flex gap-5 items center justify-center pt-5 ">
            <p>If you don't have an account</p>
            <Button onClick={()=>navigate("/register")}>Register</Button>
          </div>

        </Form>
      
      )}
    </Formik>
  );
};

export default Loginpage;
