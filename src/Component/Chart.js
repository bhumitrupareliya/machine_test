import React from "react";
import data from "./data.json";

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const Card = (props) => {
    

  return (
    <ul>
      {props.data.map((item) => (
        <>
          <li key={item.id}>
            <div className="card">
              <div className="image">
                <img
                  src={"https://randomuser.me/api/portraits/men/"+randomIntFromInterval(1,99)+".jpg"}
                  alt="Profile"
                />
              </div>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>{item.dec}</p>
                {item.rtl=== true && <div className="retail_bx">Retail</div>}
              </div>
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;