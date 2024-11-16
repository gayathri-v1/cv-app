import { useState } from "react";
import '../style/general.css';
import { MdLocationOn,MdPhone,MdEmail,MdPerson  } from "react-icons/md";
const General = () => {
  const [personalInfo, setPersonalInfo] = useState({
    nameOfPerson: "",
    email: "",
    phone: "",
    location: "",
    about: "",
    editMode: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const handleSubmit = () => {
    
    setPersonalInfo({...personalInfo,editMode: false});
  };
  const handleEdit = () => {
    setPersonalInfo({...personalInfo,editMode: true});
  };
  const submittedForm = (
    <>
      <div>
        <button type="button" onClick={handleEdit}>
          <span className="material-symbols-outlined">edit</span>
        </button>
      </div>
      <div className="renderGeneral">
      
        <div className="about">
        <p style={{fontSize: "24px", fontWeight:"800"}}>
        <span>
          <MdPerson style={{ color: "black", fontSize: "20px" }}/>
        </span>
        {personalInfo.nameOfPerson}</p>
        <h4>About:</h4>
        <p>{personalInfo.about}</p>
        </div>
        <div className="contact">
        <p>
        <span>
        <MdEmail  style={{ color: "black", fontSize: "20px" }} /> 
        </span>
        {personalInfo.email}</p>

        <p>
        <span>
        <MdPhone  style={{ color: "black", fontSize: "20px" }} /> 
        </span>
        {personalInfo.phone}</p>
        <p>
        <span>
        <MdLocationOn style={{ color: "black", fontSize: "20px" }} /> 
        </span>
        {personalInfo.location}</p>
        </div>
        </div>
      
    </>
  );

  const editForm = (
    <>
      <h3>Personal details:</h3>
      <form className="generalForm">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="nameOfPerson"
          id="name"
          value={personalInfo.nameOfPerson}
          onChange={handleChange}
          placeholder="Enter name"
          required
          autoComplete="off"
        />

        <label htmlFor="email">Email id:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={personalInfo.email}
          onChange={handleChange}
          placeholder="Email Id"
          required
          autoComplete="off"

        />
        <label htmlFor="phone">Contact no:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={personalInfo.phone}
          onChange={handleChange}
          placeholder="contact number"
          required
          autoComplete="off"

        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={personalInfo.location}
          onChange={handleChange}
          placeholder="Location"
          required
          autoComplete="off"

        />
        <label htmlFor="about">About:</label>

        <textarea
          placeholder="about you"
          id="about"
          name="about"
          value={personalInfo.about}
          onChange={handleChange}
          rows={4}
          cols={20}
          required
        />

        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
    </>
  );

  return <div>{personalInfo.editMode ? editForm : submittedForm}</div>;
};

export default General;
