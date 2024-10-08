import { useEffect, useState } from "react";
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
import Button from "@mui/material/Button";

export function MovieContainer() {
  let [movielist, setmovielist] = useState([]);

  async function getmoviedata() {
    const url = "https://66dfb5e92fb67ac16f26eb73.mockapi.io/movies/movies";
    try {
      const response = await fetch(url); // Fetches data from the API
      const data = await response.json(); // Converts the response to JSON format
      setmovielist(data);
    } catch (err) {
      console.log("ree", err); // Logs any error that occurs during the fetch
    }
  }
  useEffect(() => {
    getmoviedata();
  }, []);

  const deletefuncion = async (id) => {
    console.log(id, "delete id call");
    const url = `https://66dfb5e92fb67ac16f26eb73.mockapi.io/movies/movies/${id}`;
    const deletedone = await fetch(url, { method: "DELETE" });
    console.log(deletedone, "done is donen");
    getmoviedata();
  };

  return (
    <div>
      <div className="mlistcon">
        {/* {moveilist.map((moviedata, id) => (
          <Movie key={id} moviedata={moviedata} index={id} />
        ))} */}

        {movielist.map((moviedata, id) => (
          <MovieEach
            key={id}
            moviedata={moviedata}
            index={id}
            deletefuncion={() => deletefuncion(moviedata.id)}
          />
        ))}
      </div>
    </div>
  );
}

// export function MovieEach({ id, moviedata, index }) {
//   var [countlike, setcountlike] = useState(0);
//   var [countdislike, setcountdislike] = useState(0);
//   const navigate = useNavigate();

//   let style = {
//     color: moviedata.rating > 7 ? "green" : "red",
//   };
//   let [show, setshow] = useState(true);

//   let showstyle = {
//     display: show ? "block" : "none",
//   };

//   return (
//     <Card sx={{ marginTop: "75px" }} className="mcon">
//       <CardMedia
//         component="img"
//         alt={moviedata.name}
//         className="poster"
//         image={moviedata.poster}
//       />
//       <CardContent className="mnr">
//         <div className="tg">
//           <Typography>{moviedata.name}</Typography>
//           <Button onClick={() => setshow(!show)}>
//             {show ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
//           </Button>
//           <Button onClick={() => navigate(`/movie/${index}`)}>
//             <InfoIcon />
//           </Button>
//         </div>

//         <Typography style={style}>{moviedata.rating}</Typography>
//       </CardContent>

//       {show ? (
//         <CardContent>
//           <Typography>{moviedata.summary}</Typography>
//         </CardContent>
//       ) : null}

//       <CardActions>
//         <Button variant="text" onClick={() => setcountlike(countlike + 1)}>
//           <Badge badgeContent={countlike} color="primary">
//             👍
//           </Badge>
//         </Button>
//         <Button
//           variant="text"
//           onClick={() => setcountdislike(countdislike + 1)}
//         >
//           <Badge color="error" badgeContent={countdislike}>
//             👎
//           </Badge>
//         </Button>
//         <Button variant="text">
//           <DeleteIcon />
//         </Button>
//         <Button>
//           <EditIcon />
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
export function MovieEach({ id, moviedata, index, deletefuncion }) {
  var [countlike, setcountlike] = useState(0);
  var [countdislike, setcountdislike] = useState(0);
  const navigate = useNavigate();

  let style = {
    color: moviedata.rating > 7 ? "green" : "red",
  };
  let [show, setshow] = useState(true);

  return (
    <Card sx={{ marginTop: "75px", maxWidth: "345px" }} className="mcon">
      <CardMedia
        component="img"
        alt={moviedata.name}
        className="poster"
        image={moviedata.poster}
        sx={{ objectFit: "cover" }}
      />
      <CardContent className="mnr">
        <div className="tg">
          {/* Check if moviedata.name is defined and not null */}
          {moviedata.name && <Typography>{moviedata.name}</Typography>}
          {/* Ensure this Button doesn't have any syntax errors */}
          <Button onClick={() => setshow(!show)}>
            {show ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
          </Button>
          <Button onClick={() => navigate(`/movie/${moviedata.id}`)}>
            <InfoIcon />
          </Button>
        </div>

        {/* Conditionally render this Typography and check moviedata.rating */}
        <Typography style={style}>{moviedata.rating}</Typography>
      </CardContent>

      {show ? (
        <CardContent
          sx={{ maxHeight: "100px", overflow: "auto", scrollbarWidth: "none" }}
        >
          {/* Ensure summary exists */}
          {moviedata.summary && <Typography>{moviedata.summary}</Typography>}
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
        <Button onClick={deletefuncion} variant="text">
          <DeleteIcon />
        </Button>
        <Button onClick={() => navigate(`/movie/edit/${moviedata.id}`)}>
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
