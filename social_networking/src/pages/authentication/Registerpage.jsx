import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
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
  gender: Yup.string().required("Gender is required"), 
  preferredGenre: Yup.string().required("Preferred movie genre is required"),
  engagementStyle: Yup.string().required("Engagement style is required"),
  filmmakingRole: Yup.string().notRequired(),
  favoriteDecade: Yup.string().required("Favorite film decade is required"),
  watchingStyle: Yup.string().required("Film-watching style is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
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
    initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={handleSubmit}
    >
      
      {({ values ,setFieldValue }) => ( // correct way to destructure setFieldValue
        <Form className="space-y-5">

        {/*First Name */}

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

        {/* Last Name */}

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

          {/* Email */}

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

          {/* Password */}

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
              onChange={(e) => setFieldValue("preferredGenre", e.target.value)}
            >
              {[
                "Drama",
                "Thriller",
                "Sci-Fi",
                "Horror",
                "Comedy",
                "Documentary",
                "Experimental/Indie",
              ].map((genre) => (
                <FormControlLabel
                  key={genre}
                  value={genre}
                  control={<Radio />}
                  label={genre}
                />
              ))}
            </RadioGroup>
            <ErrorMessage
              name="preferredGenre"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Engagement style*/}

          <div>
            <label>Engagement style</label>
            <RadioGroup
              row
              name="engagementStyle"
              value={values.engagementStyle}
              onChange={(e) => setFieldValue("engagementStyle", e.target.value)}
            >
              <FormControlLabel
                value="Critic"
                control={<Radio />}
                label="I love analyzing & discussing films (Critic)"
              />
              <FormControlLabel
                value="Creator"
                control={<Radio />}
                label="I create films, scripts, or visuals (Creator)"
              />
              <FormControlLabel
                value="Both"
                control={<Radio />}
                label="Both!"
              />
            </RadioGroup>
            <ErrorMessage
              name="engagementStyle"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Filmaking role  */}
          {values.engagementStyle === "Creator" && (
            <div>
              <label>Favorite Filmmaking Role 🎥</label>
              <RadioGroup
                row
                name="filmmakingRole"
                value={values.filmmakingRole}
                onChange={(e) =>
                  setFieldValue("filmmakingRole", e.target.value)
                }
              >
                {[
                  "Directing",
                  "Screenwriting",
                  "Cinematography",
                  "Editing",
                  "Acting",
                  "Set Design",
                ].map((role) => (
                  <FormControlLabel
                    key={role}
                    value={role}
                    control={<Radio />}
                    label={role}
                  />
                ))}
              </RadioGroup>
            </div>
          )}
          {/* Favourite film decade*/}

          <div>
            <label>Favorite Film Decade</label>
            <RadioGroup
              row
              name="favoriteDecade"
              value={values.favoriteDecade}
              onChange={(e) => setFieldValue("favoriteDecade", e.target.value)}
            >
              {[
              ].map((decade) => (
                <FormControlLabel
                  key={decade}
                  value={decade}
                  control={<Radio />}
                  label={decade}
                />
              ))}
            </RadioGroup>
            <ErrorMessage
              name="favoriteDecade"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Film-Watching style*/}

          <div>
            <label>Film-Watching Style</label>
            <RadioGroup
              row
              name="watchingStyle"
              value={values.watchingStyle}
              onChange={(e) => setFieldValue("watchingStyle", e.target.value)}
            >
              {[ "Theatrical Releases (Cinema Experience)",
                "Streaming Platforms (Netflix, Prime, etc.)",
                "Film Festivals & Indie Screenings",
                "Physical Media (DVDs, Blu-ray, VHS)",
              ].map((style) => (
                <FormControlLabel
                  key={style}
                  value={style}
                  control={<Radio />}
                  label={style}
                />
              ))}
            </RadioGroup>
            <ErrorMessage
              name="watchingStyle"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Submit Button */}
          
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
