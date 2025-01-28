import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, Button, FormControlLabel, Radio, RadioGroup } from "@mui/material"; 
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(12, "Password must have 12 characters")
    .required("Password required"),
    gender: Yup.string().required("Gender is required"),
    preferredGenre: Yup.string().required("Preferred movie genre is required"),
    engagementStyle: Yup.string().required("Engagement style is required"),
    filmmakingRole: Yup.string().notRequired(),
    favoriteDecade: Yup.string().required("Favorite film decade is required"),
    watchingStyle: Yup.string().required("Film-watching style is required"),
  });

const initialValues = {
  email: "",
  password: "",
  gender: "",
  preferredGenre: "",
  engagementStyle: "",
  filmmakingRole: "",
  favoriteDecade: "",
  watchingStyle: "",
};

const Registerpage = () => {
  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {({values}) => (
        <Form className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="firstName"
              placeholder="First name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="lastName"
              placeholder="Last Name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="email"
              placeholder="Email"
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
              placeholder="Password"
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
          {/* Movie genre*/}

          <div>
            <label>Preffered Movie Genre</label>
            <RadioGroup
            row
            name="preferredGenre"
            value={values.preferredGenre}
            onChange={(e) => setFieldValue("prefferdGenre",e.target.value)}
            >
              {["Drama", "Thriller", "Sci-Fi", "Horror", "Comedy", "Documentary", "Experimental/Indie"].map(
                (genre) => (
              <FormControlLabel
              key={genre}
              value={genre}
              control={<Radio/>}
              label={genre}
              />
                )
              )}
            </RadioGroup>
            <ErrorMessage name= "preferredGenre" component="div"className="text-red-500"/>  
          </div>

        {/* Movie genre*/}

          <div>
            <label>Engagement style</label>
            <RadioGroup
            row
            name="engagementStyle"
            value={values.engagementStyle}
            onChange={(e) => setFieldValue("engagementStyle",e.target.value)}
            >
              <FormControlLabel
              value="Critic"
              control={<Radio/>}
              label="I love analyzing & discussing films (Critic)"
              />
              <FormControlLabel
              value="Creator"
              control={<Radio/>}
              label="I create films, scripts, or visuals (Creator)"
              />
              <FormControlLabel
              value="Both"
              control={<Radio/>}
              label="Both!" />
            </RadioGroup>
            <ErrorMessage name= "engagementStyle" component="div"className="text-red-500"/>  
          </div>
          {/* Filmaking role  */}

              <div>
            <label>Preffered Movie Genre</label>
            <RadioGroup
            row
            name="preferredGenre"
            value={values.preferredGenre}
            onChange={(e) => setFieldValue("prefferdGenre",e.target.value)}
            >
              {["Drama", "Thriller", "Sci-Fi", "Horror", "Comedy", "Documentary", "Experimental/Indie"].map(
                (genre) => (
              <FormControlLabel
              key={genre}
              value={genre}
              control={<Radio/>}
              label={genre}
              />
                )
              )}
            </RadioGroup>
            <ErrorMessage name= "preferredGenre" component="div"className="text-red-500"/>  
          </div>
    

              {/* Movie genre*/}

              <div>
            <label>Preffered Movie Genre</label>
            <RadioGroup
            row
            name="preferredGenre"
            value={values.preferredGenre}
            onChange={(e) => setFieldValue("prefferdGenre",e.target.value)}
            >
              {["Drama", "Thriller", "Sci-Fi", "Horror", "Comedy", "Documentary", "Experimental/Indie"].map(
                (genre) => (
              <FormControlLabel
              key={genre}
              value={genre}
              control={<Radio/>}
              label={genre}
              />
                )
              )}
            </RadioGroup>
            <ErrorMessage name= "preferredGenre" component="div"className="text-red-500"/>  
          </div>
    

              {/* Movie genre*/}

              <div>
            <label>Preffered Movie Genre</label>
            <RadioGroup
            row
            name="preferredGenre"
            value={values.preferredGenre}
            onChange={(e) => setFieldValue("prefferdGenre",e.target.value)}
            >
              {["Drama", "Thriller", "Sci-Fi", "Horror", "Comedy", "Documentary", "Experimental/Indie"].map(
                (genre) => (
              <FormControlLabel
              key={genre}
              value={genre}
              control={<Radio/>}
              label={genre}
              />
                )
              )}
            </RadioGroup>
            <ErrorMessage name= "preferredGenre" component="div"className="text-red-500"/>  
          </div>
    
    
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Registerpage;
