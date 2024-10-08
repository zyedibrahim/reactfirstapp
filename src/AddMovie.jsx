import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationschema = yup.object({
  name: yup.string().required("Name is required"),
  poster: yup.string().required("Poster is required"),
  rating: yup.number().required("Rating is required"),
  summary: yup.string().required("Summary is required"),
});

export function AddMovie() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: "", poster: "", rating: "", summary: "" },
    validationSchema: formvalidationschema,
    onSubmit: (value) => {
      AddMoviefuctions(value);
    },
  });

  // const navigate = useNavigate();
  let AddMoviefuctions = async (emoviedata) => {
    const url = "https://66dfb5e92fb67ac16f26eb73.mockapi.io/movies/movies";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emoviedata),
    });

    navigate("/movies");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="inputcon-center">
        <div className="inputcon">
          <TextField
            onChange={formik.handleChange}
            placeholder="name"
            value={formik.values.name}
            className="infill"
            type="name"
            name="name"
            label="Name"
            variant="outlined"
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name
            ? formik.errors.name
            : null}
          <TextField
            onChange={formik.handleChange}
            placeholder="Poster"
            className="infill"
            type="text"
            value={formik.values.poster}
            name="poster"
            label="Poster"
            variant="outlined"
            onBlur={formik.handleBlur}
          />
          {formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : null}

          <TextField
            onChange={formik.handleChange}
            placeholder="Rating"
            className="infill"
            type="text"
            value={formik.values.rating}
            name="rating"
            label="Rating"
            variant="outlined"
            onBlur={formik.handleBlur}
          />
          {formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : null}

          <TextField
            onChange={formik.handleChange}
            placeholder="Summary"
            className="infill"
            value={formik.values.summary}
            type="text"
            name="summary"
            label="summary"
            variant="outlined"
            onBlur={formik.handleBlur}
          />
          {formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : null}

          <Button type="submit" variant="contained">
            ADD
          </Button>
        </div>
      </div>
    </form>
  );
}
