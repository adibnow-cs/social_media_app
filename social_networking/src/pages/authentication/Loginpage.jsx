import React from "react";
import { ErrorMessage, Field,Form, Formik} from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup"

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(12, "Password must have 12 characters")
    .required("Password required"),
});

const initialValues = {
  email: "",
  password: "" }; // needed  for email and password for login 


  const Loginpage = () => {
    const handleSubmit = (values) => {
      console.log("handle submit", values);
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
              <ErrorMessage name="email" component="div" className="text-red-500" />
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
              <ErrorMessage name="password" component="div" className="text-red-500" />
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
          </Form>
        )}
      </Formik>
    );
  };
  
export default Loginpage;
