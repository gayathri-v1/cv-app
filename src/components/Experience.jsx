import { useState } from "react";
import { v4 as uuidv4  } from "uuid";
import '../style/education.css';
const Experience = () => {
  const [experienceInfo, setExperienceInfo] = useState({
    experienceArray: [
      {
        companyName: "",
        position: "",
        responsibility: "",
        fromDate: "",
        toDate: "",
        id: uuidv4(),
      },
    ],
    editMode: true,
  });
  // Handles input changes
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setExperienceInfo((prevState) => ({
      ...prevState,
      experienceArray: prevState.experienceArray.map((experience) =>
        experience.id === id ? { ...experience, [name]: value } : experience
      ),
    }));
  };
  //Adds new experience form
  const handleAdd = () => {
    setExperienceInfo((prevState) => ({
      ...prevState,
      experienceArray: [
        ...prevState.experienceArray,
        {
          companyName: "",
          position: "",
          responsibility: "",
          fromDate: "",
          toDate: "",
          id: uuidv4(),
        },
      ],
    }));
  };
  const handleEdit = () => {
    setExperienceInfo((prevState) => ({
      ...prevState,
      editMode: true,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceInfo((prevState) => ({
      ...prevState,
      editMode: false,
    }));
  };
  const handleDelete = (id) => {
    setExperienceInfo((prevState) => ({
      ...prevState,
      experienceArray: prevState.experienceArray.filter(
        (experience) => experience.id !== id
      ),
    }));
  };
  const experienceForm = (experience) => {
    return(
    <div key={experience.id} style={{ marginBottom: "10px" }} className="experienceForm">
      
        <label htmlFor={`companyName-${experience.id}`}>Company name:</label>
        <input
          type="text"
          id={`companyName-${experience.id}`}
          name="companyName"
          placeholder="Enter company name"
          required
          value={experience.companyName}
          onChange={(e) => handleChange(e, experience.id)}
        />
        <label htmlFor={`position-${experience.id}`}>Job position</label>
        <input
          type="text"
          id={`position-${experience.id}`}
          name="position"
          placeholder="sales assistant"
          required
          value={experience.position}
          onChange={(e) => handleChange(e, experience.id)}
        />
        <label htmlFor={`responsibility-${experience.id}`}>
          Roles & responsibility:
        </label>
        <textarea
          id={`responsibility-${experience.id}`}
          name="responsibility"
          required
          rows={5}
          cols={42}
          value={experience.responsibility}
          onChange={(e) => handleChange(e, experience.id)}
        />
        <label htmlFor={`fromDate-${experience.id}`}>From:</label>
        <input
          type="date"
          id={`fromDate-${experience.id}`}
          name="fromDate"
          required
          value={experience.fromDate}
          onChange={(e) => handleChange(e, experience.id)}
        />
        <label htmlFor={`toDate-${experience.id}`}>To:</label>
        <input
          type="date"
          id={`toDate-${experience.id}`}
          name="toDate"
          required
          value={experience.toDate}
          onChange={(e) => handleChange(e, experience.id)}
        />
        <button type="button" onClick={() => handleDelete(experience.id)}>
          Delete
          {/* <span className="material-symbols-outlined">delete</span> */}
        </button>
      
    </div>
    );
  };

  //Edit form JSX
  const editForm = (
    <form onSubmit={handleSubmit}>
    <div>
      <h3>Experience</h3>
      {experienceInfo.experienceArray.map((experience) =>
        experienceForm(experience)
      )}
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <button type="submit">
        Submit
      </button>
    </div>
    </form>
  );

  //submitted form JSX
  const submittedForm = (
    <div className="expSubmit">
      <button type="button" onClick={handleEdit}>
        <span className="material-symbols-outlined">edit</span>
      </button>
      <h3>Experience</h3>
      {experienceInfo.experienceArray.map((experience) => (
        <div key={experience.id} style={{ marginBottom: "10px" }} >
        <div className="header">
        <div className="experience1">
          <h4>{experience.companyName}</h4>
          <p>{experience.position}</p></div>
        <div className="experience2">

          {experience.fromDate && <p>From: {experience.fromDate}</p>}
          {experience.toDate && <p>To: {experience.toDate}</p>}
        </div>

          </div>
          <h4>Roles & responsibilities</h4>
          <p>{experience.responsibility}</p>
          <hr></hr>
        </div>
        
      ))}
      
    </div>
    
  );

  return <>{experienceInfo.editMode ? editForm : submittedForm}</>;
//   return <>{experienceInfo.editMode ? editForm : submittedForm}</>;

  
};

export default Experience;
