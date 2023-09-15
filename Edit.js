import React, { useEffect, useState } from 'react';
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const {id} = useParams()
  const [buses, setbuses] = useState({});
  const navigate = useNavigate();
  

  const getRecord = () => {
    fetch(`http://localhost:7000/buses/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setbuses(data);
      })
      .catch((error) => {
        console.error('Something went wrong', error);
      });
  };

  const editRecord = (e) => {
    e.preventDefault();

    fetch("http://localhost:7000/buses/" +id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buses),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Record Updated");
          navigate("/list");
        } else {
          console.error("Record not added. Server response not ok.");
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setbuses((prevbuses) => ({
      ...prevbuses,
      [name]: value,
    }));
  };

  useEffect(() => {
    getRecord();
  }, []);

  return (
    <div className="container mobile-page">
        <h2>Edit Bus Record</h2>
        <form
          action="mobile-form"
       
          onSubmit={(event) => {
            editRecord(event);
          }}
        >
          <div className="form-group">
            <label htmlFor="id">Id</label>
            <input
              type="number"
              className="form-control"
              name="id" 
              value={buses.id || ""}
              placeholder="Enter Id"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>
         

          <div className="form-group">
            <label htmlFor="bus_name">Name</label>
            <input
              type="text"
              className="form-control"
              name="bus_name" 
              value={buses.bus_name || ""}
              placeholder="Enter Name"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

         

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={buses.description || ""}
              placeholder="Enter Description"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email" 
              value={buses.email|| ""}
              placeholder="Enter email"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ticket_price">ticket price</label>
            <input
              type="text"
              className="form-control"
              name="ticket_price" 
              value={buses.ticket_price|| ""}
              placeholder="Enter ticket price"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="passanger_name">passanger name</label>
            <input
              type="text"
              className="form-control"
              name="passanger_name" 
              value={buses.passanger_name|| ""}
              placeholder="Enter passanger name"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="arrival_time">arrival time</label>
            <input
              type="text"
              className="form-control"
              name="arrival_time" 
              value={buses.arrival_time|| ""}
              placeholder="Enter arrival time"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="due_time">due time</label>
            <input
              type="text"
              className="form-control"
              name="due_time" 
              value={buses.due_time|| ""}
              placeholder="Enter due time"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  );
}

export default Edit;