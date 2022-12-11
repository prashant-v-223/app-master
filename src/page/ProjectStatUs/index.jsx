import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import EmtyData from '../../assets/EmtyData.png'
// import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProjectStatUs.scss'
function ProjectStatUs() {
    const [buttomclick, setbuttomclick] = useState(false)
    const [validationActive, setvalidationActive] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const LoginValidation = yup.object({
        StatUs: yup.string().required('StatUs is required.'),
    })
    useEffect(() => {
        setvalidationActive(false)
        setbuttomclick(false)
    }, [modalShow])

    const onHide = () => setModalShow(false)
    return (
        <div className='container-fluid'>
            <ToastContainer />
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center pt-4">
                        <div className="">
                            <h4 className=''><b>Project Status</b></h4>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="bg-info Actions m-2" onClick={() => setModalShow(true)} >
                                <IoMdAdd />
                            </div>
                            {/* <input className="form-control Search" placeholder='Search' type="text" id="flexCheckDefault" /> */}
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{width:'110px'}} >Scopeid</th>
                                <th>Status</th>
                                <th>Active</th>
                                <th style={{width:'110px'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{ position: 'relative', height: '200px', border: '1px solid !important' }}>
                            <tr className=''>
                                <td className="" colSpan={5}>
                                    <img src={EmtyData} alt="" className='d-block m-auto py-4' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={onHide}

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Project Status
                    </Modal.Title>
                </Modal.Header>
                <Formik
                    initialValues={{}}
                    validationSchema={LoginValidation}
                    onSubmit={(values) => {
                        setModalShow(false)
                        setvalidationActive(false)
                        if (!buttomclick) {
                            toast.success('Project Status Add successFully.')
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                    }) => (
                        <>
                            <Form >
                                <Modal.Body>
                                    <div className="mb-3">
                                        <div className="">
                                            <label className='py-1'>Status <span className='error'>*</span></label>
                                            <input type="text" className={`form-control py-2 ${errors.StatUs && validationActive && 'was-validated'}`} name='StatUs' value={values.StatUs} onChange={handleChange} />
                                        </div>
                                        {errors.StatUs && validationActive ? <div className='error'>{errors.StatUs}</div> : null}
                                    </div>
                                    <div className="form-check checkbox-lg">
                                        <input className="form-check-input" type="checkbox" name='Active' id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Active
                                        </label>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="col-12 d-flex justify-content-center">
                                        <button className='btn btn-outline-info px-3 py-2 my-3 mx-2' type='submit' style={{ width: '110px' }} onClick={() => setvalidationActive(!false)}>
                                            Save
                                        </button>
                                        <button className='btn btn-outline-danger px-3 py-2 my-3 mx-2' style={{ width: '110px' }} onClick={() => {
                                            setbuttomclick(true)
                                            onHide()
                                        }}>
                                            Cancel
                                        </button>
                                    </div>
                                </Modal.Footer>
                            </Form>
                        </>
                    )}
                </Formik>
            </Modal >
        </div>
    )
}
export default ProjectStatUs;