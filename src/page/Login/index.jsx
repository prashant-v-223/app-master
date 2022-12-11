import React, { useState } from 'react'
import * as yup from "yup";
import { Formik, Form } from 'formik';
import './Login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Login() {

    const navigat = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const LoginUser = () => {
        const [validationActive, setvalidationActive] = useState(false)
        const LoginValidation = yup.object({
            Email: yup.string().email('User Name is invalid .').required('User Name is required .'),
            Password: yup
                .string()
                .required('Password is required.')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Please Enter strong password ."
                ),
        })
        const onDone = () => setvalidationActive(!false)
        return (
            <>
                <h3 className='pt-4 pt-md-5 mt-0 mt-md-5'>Login To Your Account</h3>
                <Formik
                    initialValues={{}}
                    validationSchema={LoginValidation}
                    onSubmit={(values) => {
                        console.log("📢[Index.jsx:17]: values: ", values);
                        toast.success('Login successFully.')
                        navigat('/Dashboard')
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                    }) => (
                        <>
                            <Form >
                                <div className="my-4">
                                    <div className="">
                                        <label className='py-1'>Username<span className='error'>*</span></label>
                                        <input type="text" className={`form-control py-2 ${errors.Email && validationActive && 'was-validated'}`} name='Email' value={values.Email} onChange={handleChange} />
                                    </div>
                                    {errors.Email && validationActive ? <div className='error'>{errors.Email}</div> : null}
                                </div>
                                <div className="my-2">
                                    <div className="">
                                        <label className='py-1'>Password<span className='error'>*</span></label>
                                        <input type="Password" className={`form-control py-2 ${errors.Password && validationActive && 'was-validated'}`} name='Password' value={values.Password}
                                            onChange={handleChange} />
                                    </div>
                                    {errors.Password && validationActive ? <div className='error'>{errors.Password}</div> : null}
                                </div>
                                <div className="d-flex justify-content-between align-itams-center pt-3">
                                    <div className="form-check checkbox-lg">
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="">
                                        <p className='text-info m-0' onClick={() => {
                                            setModalShow(!modalShow)
                                        }}>Forgot Password ?</p>
                                    </div>
                                </div>
                                <button className='btn btn-info px-4 py-3 my-3 w-100 text-light' type='submit' onClick={() => onDone()}>
                                    Submit
                                </button>
                                {/* <button className='active_Servicesbtn px-4 py-3 my-3 w-100' onClick={() => modalShow('Login with Password')}>Login with Password</button> */}
                            </Form>
                        </>
                    )}
                </Formik>
            </>

        )
    }
    const ForgetPassword = () => {
        const [validationActive, setvalidationActive] = useState(false)
        const onDone = () => setvalidationActive(!false)
        const ForgetPasswordValidation = yup.object({
            Email: yup.string().email('User Name is invalid .').required('User Name is required .'),
        })
        return (
            <>
                <h4 className='pt-4 pt-md-5 mt-0 mt-md-5'>Forget Password</h4>
                <Formik
                    initialValues={{}}
                    validationSchema={ForgetPasswordValidation}
                    onSubmit={(values) => {
                        console.log("📢[Index.jsx:17]: values: ", values);
                        toast.success('Reset password link sent successFully.')
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                    }) => (
                        <>
                            <Form >
                                <div className="my-4">
                                    <div className="">
                                        <label className='py-1'>Username<span className='error'>*</span></label>
                                        <input type="text" className={`form-control py-2 ${errors.Email && validationActive && 'was-validated'}`} name='Email' value={values.Email} onChange={handleChange} />
                                    </div>
                                    {errors.Email && validationActive ? <div className='error'>{errors.Email}</div> : null}
                                </div>
                                <div className="d-flex justify-content-between align-itams-center pt-2">
                                    <div className="form-check checkbox-lg">
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="">
                                        <p className='text-info m-0' onClick={() => {
                                            setModalShow(!modalShow)
                                        }}>Back To Login</p>
                                    </div>
                                </div>
                                <button className='btn btn-info px-4 py-3 my-3 w-100 text-light' type='submit' onClick={onDone}>
                                    Send Reset Link
                                </button>
                            </Form>
                        </>
                    )}
                </Formik>
            </ >
        );
    }
    return (
        <div className="container-fluid">
            <ToastContainer />
            <div className="row" style={{ height: '100vh' }}>
                <div className="col-12 col-md-6  h-100 d-none d-md-block" style={{ background: '#383737' }}>
                    <div className="ps-md-4 ms-3 pt-4 mt-4 pt-md-5 mt-md-5">
                        <h1 className='text-light py-2'>RAJ Group</h1>
                        <h5 className='text-light py-2'>Welcome to Project Management</h5>
                    </div>
                </div>
                <div className="col-12 col-md-6  col-md-block h-100 d-flex  flex-column px-4 px-sm-5">
                    <div className="pt-5 d-md-none d-block">
                        <h1 className='ps-md-4 pt-4 mt-4 pt-md-5 mt-md-5'><b>RAJ Group</b></h1>
                    </div>
                    {!modalShow ? <LoginUser /> : <ForgetPassword />}
                </div>
            </div>

        </div>
    )
}

export default Login