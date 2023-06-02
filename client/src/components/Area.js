import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings } from "../actions/bookingActions";

const Area = ({ arr, area }) => {
  const { bookings, loading, error } = useSelector((state) => state.booking);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, []);

  let counter = 0;

  return (
    <div className="border" style={{ padding: "20px 40px" }}>
      {error && <p>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        arr.map((value, i) => {
          return (
            <div key={i} className="row justify-content-md-center">
              {value.map((x, y) => {
                if (x) {
                  counter++;
                }
                let spot = bookings?.filter(
                  (item) => item.spot.split(" ")[1] == counter && item.area == area
                );
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
                      backgroundColor: x && spot?.length > 0 ? "#f00" : "",
                    }}
                  >
                    {x ? `Parking Spot ${counter}` : ""}
                  </div>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Area;
