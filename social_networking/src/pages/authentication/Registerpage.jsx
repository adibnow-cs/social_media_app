import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(12, "Password must have 12 characters")
    .required("Password required"),
  preferredGenre: Yup.string().required("Preferred movie genre is required"),
  engagementStyle: Yup.string().required("Engagement style is required"),
  favoriteDecade: Yup.string().required("Favorite film decade is required"),
  watchingStyle: Yup.string().required("Film-watching style is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  preferredGenre: "",
  engagementStyle: "",
  favoriteDecade: "",
  watchingStyle: "",
};

const Registerpage = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Submitted!", values);
        alert("Form Submitted");
        setSubmitting(false);
      }}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>  
          
          {/* First Name */}
          <Field as={TextField} name="firstName" placeholder="First name" fullWidth />
          <ErrorMessage name="firstName" component="div" className="text-red-500" />

          {/* Last Name */}
          <Field as={TextField} name="lastName" placeholder="Last Name" fullWidth />
          <ErrorMessage name="lastName" component="div" className="text-red-500" />

          {/* Email */}
          <Field as={TextField} name="email" placeholder="Email" fullWidth />
          <ErrorMessage name="email" component="div" className="text-red-500" />

          {/* Password */}
          <Field as={TextField} name="password" placeholder="Password" type="password" fullWidth />
          <ErrorMessage name="password" component="div" className="text-red-500" />

          {/* Preferred Movie Genre */}
          <label>Preferred Movie Genre</label>
          <RadioGroup
            row
            name="preferredGenre"
            value={values.preferredGenre}
            onChange={(e) => setFieldValue("preferredGenre", e.target.value)}
          >
            {["Drama", "Thriller", "Sci-Fi", "Horror", "Comedy", "Documentary", "Experimental/Indie"].map((genre) => (
              <FormControlLabel key={genre} value={genre} control={<Radio />} label={genre} />
            ))}
          </RadioGroup>
          <ErrorMessage name="preferredGenre" component="div" className="text-red-500" />

          {/* Engagement Style */}
          <label>Engagement style</label>
          <RadioGroup
            row
            name="engagementStyle"
            value={values.engagementStyle}
            onChange={(e) => setFieldValue("engagementStyle", e.target.value)}
          >
            <FormControlLabel value="Critic" control={<Radio />} label="I love analyzing & discussing films (Critic)" />
            <FormControlLabel value="Creator" control={<Radio />} label="I create films, scripts, or visuals (Creator)" />
            <FormControlLabel value="Both" control={<Radio />} label="Both!" />
          </RadioGroup>
          <ErrorMessage name="engagementStyle" component="div" className="text-red-500" />

          {/* Favorite Film Decade */}
          <label>Favorite Film Decade</label>
          <RadioGroup
            row
            name="favoriteDecade"
            value={values.favoriteDecade}
            onChange={(e) => setFieldValue("favoriteDecade", e.target.value)}
          >
            {["Silent Era (1890s-1920s)", "Golden Age (1930s-1950s)", "New Hollywood (1960s-1980s)", "Modern Blockbusters (1990s-Present)", "All Eras"].map((decade) => (
              <FormControlLabel key={decade} value={decade} control={<Radio />} label={decade} />
            ))}
          </RadioGroup>
          <ErrorMessage name="favoriteDecade" component="div" className="text-red-500" />

          {/* Film-Watching Style */}
          <label>Film-Watching Style</label>
          <RadioGroup
            row
            name="watchingStyle"
            value={values.watchingStyle}
            onChange={(e) => setFieldValue("watchingStyle", e.target.value)}
          >
            {["Theatrical Releases (Cinema Experience)", "Streaming Platforms (Netflix, Prime, etc.)", "Film Festivals & Indie Screenings", "Physical Media (DVDs, Blu-ray, VHS)"].map((style) => (
              <FormControlLabel key={style} value={style} control={<Radio />} label={style} />
            ))}
          </RadioGroup>
          <ErrorMessage name="watchingStyle" component="div" className="text-red-500" />

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary">
            {/* Login*/}
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Registerpage;
