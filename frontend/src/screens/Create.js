import React,{useState} from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';

const Create = () => {

  const [input, setInput] = useState({
    name:"",
    age:"",
    email:""
  });

  const onChange = (e)=>{
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = ()=>{
    const userData = {
      name:input.name,
      age:input.age,
      email:input.email
    };
    axios.post("https://mernbyharsh.onrender.com/api/createUser",userData).then((res)=>{
      alert("user added succesfuly")
    }).catch((error)=>{
      console.log(error);
    })
  }













  return (
    <div>
      <Navbar />
      <div style={{width:"50%",margin:"auto",marginTop:"50px"}}>
        <form>
        <div className="form-group">
        <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={input.name}
              onChange={onChange}
            />
        </div>
        <div className="form-group">
        <label>Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
              name="age"
              value={input.age}
              onChange={onChange}
            />
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={input.email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <button type="submit" className="btn btn-success m-2" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
