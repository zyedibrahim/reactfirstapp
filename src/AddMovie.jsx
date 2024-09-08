import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddMovie({ movielist, setmovielist }) {
  let [name, setname] = useState();
  let [poster, setposter] = useState();
  let [rating, setrating] = useState();
  let [summary, setsummary] = useState();
  let emoviedata = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
  };
  return (
    <div className="inputcon-center">
      <div className="inputcon">
        <TextField
          onChange={(ele) => setname(ele.target.value)}
          placeholder="name"
          className="infill"
          type="text"
          label="Name"
          variant="outlined"
        />
        <TextField
          onChange={(ele) => setposter(ele.target.value)}
          placeholder="Poster"
          className="infill"
          type="text"
          label="Poster"
          variant="outlined"
        />
        <TextField
          onChange={(ele) => setrating(ele.target.value)}
          placeholder="Rating"
          className="infill"
          type="text"
          label="Rating"
          variant="outlined"
        />
        <TextField
          onChange={(ele) => setsummary(ele.target.value)}
          placeholder="Summary"
          className="infill"
          type="text"
          label="summary"
          variant="outlined"
        />

        <Button
          onClick={() => setmovielist([...movielist, emoviedata])}
          variant="contained"
        >
          ADD
        </Button>
      </div>
    </div>
  );
}
