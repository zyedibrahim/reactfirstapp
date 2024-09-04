import { useState } from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

export function MovieContainer({ movielist, setmovielist }) {
  // let [moviedatas, setmoviedatas] = useState(moveilist);

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
    <div>
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
          onClick={() => setmovielist([...moveilist, emoviedata])}
          variant="contained"
        >
          ADD
        </Button>
      </div>

      <div className="mlistcon">
        {/* {moveilist.map((moviedata, id) => (
          <Movie key={id} moviedata={moviedata} index={id} />
        ))} */}

        {movielist.map((moviedata, id) => (
          <MovieEach key={id} moviedata={moviedata} index={id} />
        ))}
      </div>
    </div>
  );
}

export function MovieEach({ id, moviedata, index }) {
  var [countlike, setcountlike] = useState(0);
  var [countdislike, setcountdislike] = useState(0);
  const navigate = useNavigate();

  let style = {
    color: moviedata.rating > 7 ? "green" : "red",
  };
  let [show, setshow] = useState(true);

  let showstyle = {
    display: show ? "block" : "none",
  };

  return (
    <Card className="mcon">
      <CardMedia
        component="img"
        alt={moviedata.name}
        className="poster"
        image={moviedata.poster}
      />
      <CardContent className="mnr">
        <div className="tg">
          <Typography>{moviedata.name}</Typography>
          <Button onClick={() => setshow(!show)}>
            {show ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
          </Button>
          <Button onClick={() => navigate(`/movie/${index}`)}>
            <InfoIcon />
          </Button>
        </div>

        <Typography style={style}>{moviedata.rating}</Typography>
      </CardContent>

      {show ? (
        <CardContent>
          <Typography>{moviedata.summary}</Typography>
        </CardContent>
      ) : null}

      <CardActions>
        <Button variant="text" onClick={() => setcountlike(countlike + 1)}>
          <Badge badgeContent={countlike} color="primary">
            👍
          </Badge>
        </Button>
        <Button
          variant="text"
          onClick={() => setcountdislike(countdislike + 1)}
        >
          <Badge color="error" badgeContent={countdislike}>
            👎
          </Badge>
        </Button>
        <Button variant="text">
          <DeleteIcon />
        </Button>
        <Button>
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
