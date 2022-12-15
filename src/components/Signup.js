import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';



export default function Signup() {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        validationSchema:yup.object({
            name:yup.string().min(2,"name must have at least two characters").required(),
            email:yup.string().email().required(),
            password:yup.string().min(6,"password must have at least six characters").required(),
        }),
        onSubmit:(values,{resetForm})=>{
            console.log(values)
            resetForm({values:""})
        }
        
    });

    const nameError = formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>

    const emailError = formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>

    const passwordError= formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>
   

    return (
        <div>
        SignUp
            <form onSubmit={formik.handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">name</label>
    <input type="text" onChange={formik.handleChange} value={formik.values.name}  className="form-control" id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="error" style={{color:"red"}}>
  {nameError}
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input type="email" onChange={formik.handleChange} value={formik.values.email}  className="form-control" id="email" aria-describedby="emailHelp"/>
  </div>
  <div className="error" style={{color:"red"}}>
  {emailError}
  </div>
  
  <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input type="password" onChange={formik.handleChange} value={formik.values.password}  className="form-control" id="password" aria-describedby="emailHelp"/>
  </div>
  <div className="error" style={{color:"red"}}>
  {passwordError}
  </div>
  <br />
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
