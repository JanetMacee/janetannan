import "./schedule.css";
const Schedule = () => {
  return (
    <>
      <div className="schedule">
        <h1 className="text-center font-bold capitalize text-xl pb-4">
          conference schedule
        </h1>
        <div className="schedule-table">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Session</th>
                <th>Speaker</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00 AM - 9:3 AM</td>
                <td>Registration and Breakfast</td>
                <td></td>
                <td>Main Hall</td>
              </tr>
              <tr>
                <td>9:30 AM - 10:30 AM</td>
                <td>Keynote Session</td>
                <td>Macee Khalid</td>
                <td>Main Hall</td>
              </tr>
              <tr>
                <td>10:30 AM - 11:00 AM</td>
                <td>Break</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>11:00 AM - 12:00 PM</td>
                <td>Session 1</td>
                <td>John Smith</td>
                <td>Room 1</td>
              </tr>
              <tr>
                <td>12:00 PM - 1:00 PM</td>
                <td>lunch time</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:00 PM - 2:00 PM</td>
                <td>Session 2</td>
                <td>Jane Joe</td>
                <td>Room 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Schedule;
