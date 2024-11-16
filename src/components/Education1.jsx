import { useState } from "react";
import { v4 as uuid } from "uuid";
import '../style/education.css'
import { MdSchool } from "react-icons/md";

const Education1 = () => {
  const [eduInfo, setEduInfo] = useState({
    degreeArray: [
      {
        school: "",
        title: "",
        fromDate: "",
        toDate: "",
        id: uuid(),
      },
    ],
    editMode: true,
  });

  // Handles input changes
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setEduInfo((prevState) => ({
      ...prevState,
      degreeArray: prevState.degreeArray.map((degree) =>
        degree.id === id ? { ...degree, [name]: value } : degree
      ),
    }));
  };

  // Adds a new education form
  const handleAdd = () => {
    setEduInfo((prevState) => ({
      ...prevState,
      degreeArray: [
        ...prevState.degreeArray,
        {
          school: "",
          title: "",
          fromDate: "",
          toDate: "",
          id: uuid(),
        },
      ],
    }));
  };

  // Deletes a degree entry
  const handleDelete = (id) => {
    setEduInfo((prevState) => ({
      ...prevState,
      degreeArray: prevState.degreeArray.filter((degree) => degree.id !== id),
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setEduInfo((prevState) => ({ ...prevState, editMode: false }));
  };

  // Enables edit mode
  const handleEdit = () => {
    setEduInfo((prevState) => ({ ...prevState, editMode: true }));
  };

  // Education form JSX
  const eduForm = (degree) => (
    <div key={degree.id} style={{ marginBottom: "10px" }}>
      <form className="eduForm">
        <label htmlFor={`school-${degree.id}`}>Institute Name:</label>
        <input
          name="school"
          id={`school-${degree.id}`}
          type="text"
          placeholder="School name"
          value={degree.school}
          onChange={(e) => handleChange(e, degree.id)}
          required
        />
        <label htmlFor={`title-${degree.id}`}>Degree:</label>
        <input
          name="title"
          id={`title-${degree.id}`}
          type="text"
          placeholder="Bachelors of..."
          value={degree.title}
          onChange={(e) => handleChange(e, degree.id)}
          required
        />
        <label htmlFor={`fromDate-${degree.id}`}>From:</label>
        <input
          name="fromDate"
          id={`fromDate-${degree.id}`}
          type="date"
          value={degree.fromDate}
          onChange={(e) => handleChange(e, degree.id)}
          required
        />
        <label htmlFor={`toDate-${degree.id}`}>To:</label>
        <input
          name="toDate"
          id={`toDate-${degree.id}`}
          type="date"
          value={degree.toDate}
          onChange={(e) => handleChange(e, degree.id)}
          required
        />
        <button type="button" onClick={() => handleDelete(degree.id)}>Delete
          {/* <span className="material-symbols-outlined">delete</span> */}
        </button>
      </form>
    </div>
  );

  // Edit form JSX
  const editForm = (
    <div>
      <h3>Education</h3>
      {eduInfo.degreeArray.map((degree) => eduForm(degree))}
      <button type="button" onClick={handleAdd}>Add
        {/* <span className="material-symbols-outlined">add</span> */}
      </button>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );

  // Submitted form JSX
  const submittedForm = (
    <div className="submittedForm">
    <button onClick={handleEdit}>
        <span className="material-symbols-outlined">edit</span>
      </button>
        <h3>Education</h3>
      {eduInfo.degreeArray.map((degree) => (
        <div key={degree.id} style={{ marginBottom: "10px" }}>
          <h4 style={{fontSize:"18px"}}> 
          <span>
          <MdSchool style={{ color: "blue", fontSize: "20px" }}    />
        </span>
           {degree.school}</h4>
          <p>{degree.title}</p>
          {degree.fromDate && <p>From: {degree.fromDate}</p>}
          {degree.toDate && <p>To: {degree.toDate}</p>}
          <hr></hr>
        </div>
        
      ))}
      
    </div>
  );

  // Render the form based on the mode
  return <div>{eduInfo.editMode ? editForm : submittedForm}</div>;
};

export default Education1;
