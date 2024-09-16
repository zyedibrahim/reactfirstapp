import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationschema = yup.object({
  name: yup.string().required("Name is required"),
  poster: yup.string().required("Poster is required"),
  rating: yup.number().required("Rating is required"),
  summary: yup.string().required("Summary is required"),
});

export function EditmoviePage() {
  const navigate = useNavigate();
  const [moviedata, setmoviedata] = useState(null);
  const { id } = useParams();

  async function getmoviedata() {
    const url = `https://66dfb5e92fb67ac16f26eb73.mockapi.io/movies/movies/${id}`;

    const response = await fetch(url); // Fetches data from the API
    const data = await response.json(); // Converts the response to JSON format
    setmoviedata(data);
    console.log(moviedata, "moviedata");
  }

  useEffect(() => {
    getmoviedata();
  }, []);

  return (
    <div>
      {moviedata ? (
        <EditinputForm moviedata={moviedata} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

function EditinputForm({ moviedata }) {
  const navigate = useNavigate();
  let EditMoviefuctions = async (emoviedata) => {
    const url = `https://66dfb5e92fb67ac16f26eb73.mockapi.io/movies/movies/${moviedata.id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emoviedata),
    });

    navigate("/movies");
  };

  const formik = useFormik({
    initialValues: {
      name: moviedata.name,
      poster: moviedata.poster,
      rating: moviedata.rating,
      summary: moviedata.summary,
    },
    validationSchema: formvalidationschema,
    onSubmit: (value) => {
      EditMoviefuctions(value);
    },
  });
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
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
