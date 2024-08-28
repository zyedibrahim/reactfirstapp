import { useState } from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function MovieContainer({ id, moviedata }) {
  var [countlike, setcountlike] = useState(0);
  var [countdislike, setcountdislike] = useState(0);

  let style = {
    color: moviedata.rating > 7 ? "green" : "red",
  };
  let [show, setshow] = useState(true);

  let showstyle = {
    display: show ? "block" : "none",
  };

  return (
    <div key={id} className="mcon">
      <img className="poster" src={moviedata.poster} alt={moviedata.name} />
      <div className="mnr">
        <div className="tg">
          <div>{moviedata.name}</div>
          <Button onClick={() => setshow(!show)}>
            {show ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
          </Button>
        </div>
        <div style={style}>{moviedata.rating}</div>
      </div>

      {show ? <div className="summary">{moviedata.summary}</div> : null}

      <div className="lbutton">
        <Button onClick={() => setcountlike(countlike + 1)}>
          <Badge badgeContent={countlike} color="primary">
            👍
          </Badge>
        </Button>
        <Button onClick={() => setcountdislike(countdislike + 1)}>
          <Badge color="error" badgeContent={countdislike}>
            👎
          </Badge>
        </Button>
      </div>
    </div>
  );
}
