import React, { useState } from "react";
import { ErrorMessage, Field,Form, Formik,validationSchema} from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup"

const validationSchema = {
  email: Yup.string().email("Invalid email").required("Email is required")};

const initialValues = {
  email: "",
  password: "" }; // needed  for email and password for login 

password:Yup.string().min(12,"Password must have 12 characters").required("Password required")


const Loginpage = () => {
  const [formValue, setFormValue] = useState();
  const handleSubmit = (values) => {
    console.log("handle submit",values);
    // logic here for api
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      //validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <Form className="spacey-y-5">
        <div className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="password"
              placeholder="password"
              type="password"
              variant="outline"
              fullWidth
            />
            <ErrorMessage name="password" component ={"div"} className="text-red-500"/>
          </div>
        </div>
      <Button sx={{padding:".8rem 0rem"}} fullWidth type ="submit">Login</Button>
      </Form>
    </Formik>
  );
};

export default Loginpage;
