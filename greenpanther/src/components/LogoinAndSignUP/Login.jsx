import { useState,useEffect } from "react";
import React from "react";
import "../LogoinAndSignUP/Login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useNavigate,
} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formVlaues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false)

  const handleChange=(e)=>{
    const {name , value}=e.target
    setFormValues({...formVlaues, [name]:value})
    console.log(formVlaues)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setFormErrors(validate(formVlaues))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formVlaues)
    }
  }, [formErrors])
  

  const validate=(value)=>{
    const errors={}
    if(!value.email){
      errors.email="Email is required"
    }
    if(!value.password){
      errors.password="Password is required"
    }
    return errors
  }

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login / SignIn
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog login_modal">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Login / SignIn
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="login_form">
                <form action="" className="Login_area" onSubmit={handleSubmit}>
                  <label htmlFor="" className="login_label">
                    Email
                  </label>
                  <EmailIcon className="email_icon" color="success"  />
                  <input
                    type="email"
                    placeholder="Enter You Email"
                    name="email"
                    value={formVlaues.email}
                    onChange={handleChange}
                  />

                  <p className="error_display">{formErrors.email}</p>

                  <label htmlFor="" className="login_label">
                    Password
                  </label>
                  <LockIcon className="password_icon" color="success"  />
                  <input
                    type="password"
                    placeholder="Enter Yor Password"
                    name="password"
                    value={formVlaues.password}
                    onChange={handleChange}
                  />
                  <p className="error_display">{formErrors.password}</p>
                  <button>Log In</button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
