import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Typography from "@mui/material/Typography";

export function MovieDetailsPage() {
  const [moviedata, setmoviedata] = useState([]);
  const id = useParams();

  const navigate = useNavigate();
  async function getmoviedata() {
    const url = `https://66dfb5e92fb67ac16f26eb73.mockapi.io/movies/movies/${id.id}`;
    try {
      const response = await fetch(url); // Fetches data from the API
      const data = await response.json(); // Converts the response to JSON format
      setmoviedata(data);
    } catch (err) {
      console.log("ree", err); // Logs any error that occurs during the fetch
    }
  }
  useEffect(() => {
    getmoviedata();
  }, []);

  return (
    <div className="movie-detail-page">
      <iframe
        height="500px"
        width="100%"
        src={moviedata.trailer}
        title={moviedata.name}
      />
      <div className="movie-detail-spc">
        <Typography>{moviedata.name}</Typography>
        <Typography>{moviedata.rating}</Typography>
      </div>
      <div className="movie-detail-page-summary">{moviedata.summary}</div>
      <div>
        <Button
          onClick={() => navigate(-1)}
          startIcon={<KeyboardBackspaceIcon />}
          variant="contained"
        >
          Back
        </Button>
      </div>
    </div>
  );
}
