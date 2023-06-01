import React from 'react'

const ViewBookings = () => {

    const data = [
        {
          area: 'Area 1',
          spot: 'Spot 1',
          date: '2023-05-31',
          start: '09:00',
          end: '10:30',
          duration: '1h',
        },
        {
          area: 'Area 2',
          spot: 'Spot 2',
          date: '2023-06-01',
          start: '02:00',
          end: '04:00',
          duration: '2h',
        },
        // Add more data as needed
      ];

  return (
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
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.area}</td>
            <td>{item.spot}</td>
            <td>{item.date}</td>
            <td>{item.start}</td>
            <td>{item.end}</td>
            <td>{item.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ViewBookings