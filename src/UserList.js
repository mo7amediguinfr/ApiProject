import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function UserList(){
  const [listOfUsers, setListOfUsers] = useState([]);
  //Getting the data 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUsers(response.data))
      .catch((error) => console.log(error));
  }, []);
    return(
        <div className="container">
          <h2 className="h2">Users Data</h2>
        <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

         {/* mapping on data */}
         
          {listOfUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    )
}
export default UserList;