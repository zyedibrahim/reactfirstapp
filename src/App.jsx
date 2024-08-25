import { useState } from "react";

import "./App.css";

function App() {
  let bd = [
    {
      id: 1,
      name: "jack1",
      img: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg",
    },
    {
      id: 2,
      name: "jack2",
      img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    },
    {
      id: 3,
      name: "jack3",
      img: "https://www.shutterstock.com/image-photo/portrait-suspicious-girl-stylish-hairdo-260nw-2419831495.jpg",
    },
  ];
  //
  return (
    <div>
      {bd.map((ele, id) => (
        <Msg key={ele.id} name={ele.name} img={ele.img} id={id} />
      ))}
    </div>
  );
}

function Msg({ name, img, id }) {
  const [count, setCount] = useState(0);
  return (
    <div className="back">
      <div key={id}>
        {id}
        <img className="imgs" src={img} alt={name} />
        <div className="name">{name}</div>
        <button onClick={() => setCount(count + 1)}> like {count} </button>
      </div>
    </div>
  );
}

export default App;
