import React, { useState } from "react";

const BookParking = () => {
  const [area, setArea] = useState("");
  const [spot, setSpot] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleSpotChange = (e) => {
    setSpot(e.target.value);
  };

  const handletimeFromChange = (e) => {
    setTimeFrom(e.target.value);
  };

  const handletimeToChange = (e) => {
    setTimeTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Area:", area);
    console.log("Spot:", spot);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row w-75 m-auto">
        <div className="mb-3 col">
          <input
            type="text"
            className="form-control"
            placeholder="select an area"
            value={area}
            onChange={handleAreaChange}
            style={{ textAlign: "center" }}
          />
        </div>
        <div className="mb-3 col" style={{ paddingBottom: "30px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="select an spot"
            value={spot}
            onChange={handleSpotChange}
            style={{ textAlign: "center" }}
          />
        </div>
      </div>

      <div className="row w-75 m-auto">
        <div className="mb-3 col">
          <input
            type="text"
            className="form-control"
            placeholder="14:00"
            value={timeFrom}
            onChange={handletimeFromChange}
            style={{ textAlign: "center" }}
          />
        </div>
        <div className="mb-3 col" style={{ paddingBottom: "30px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="15:00"
            value={timeTo}
            onChange={handletimeToChange}
            style={{ textAlign: "center" }}
          />
        </div>
      </div>
      <button type="submit" className="btn border w-25 m-auto" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Book Parking
      </button>
    </form>
  );
};

export default BookParking;
