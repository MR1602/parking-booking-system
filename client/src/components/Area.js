import React from "react";

const Area = ({arr}) => {
//   let arr = [
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ];
  let counter = 0;
  return (
    <div className="border" style={{ padding: "20px 40px" }}>
      {arr.map((value, i) => {
        return (
          <div key={i} className="row justify-content-md-center">
            {value.map((x, y) => {
                if(x){
                    counter++
                }
              return (
                <div
                  key={i + y}
                  className={x ? "border" : ""}
                  style={{
                    height: "250px",
                    margin: "10px",
                    width: "22%",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: '#f00'
                  }}
                >
                  {x ? `Parking Spot ${counter}`: ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Area;
