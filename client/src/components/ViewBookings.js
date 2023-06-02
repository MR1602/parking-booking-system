import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings } from "../actions/bookingActions";

const ViewBookings = () => {
  const { bookings, loading, error } = useSelector((state) => state.booking);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Area</th>
              <th>Spot</th>
              <th>Date</th>
              <th>Start</th>
              <th>End</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr key={index}>
                <td>{item.area}</td>
                <td>{item.spot}</td>
                <td>{new Date(item.date).toLocaleDateString("en-UK")}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.duration.toString().replace("00", "h")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewBookings;
