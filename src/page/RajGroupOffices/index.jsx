import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import EmtyData from '../../assets/EmtyData.png'
// import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RajGroupOffices.scss'

function RajGroupOffices() {
    const [buttomclick, setbuttomclick] = useState(false)
    const [validationActive, setvalidationActive] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const LoginValidation = yup.object({
        Office: yup.string().required('Office Name is required.'),
        Address: yup.string().required('Address is required.'),
        City: yup.string().required('City is required.'),
        Pincode: yup.string().required('Pincode is required.'),
        ContectPerson: yup.string().required('Contect Person is required.'),
        ContectNo: yup.string().required('Contect No is required.'),
    })
    useEffect(() => {
        setvalidationActive(false)
        setbuttomclick(false)
    }, [modalShow])

    const onHide = () => { setModalShow(false); }
    const onDone = () => setvalidationActive(!false)
    return (
        <div className='container-fluid'>
            <ToastContainer />
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center pt-4">
                        <div className="">
                            <h4 className=''><b>Raj Group Offices</b></h4>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="bg-info Actions m-2" onClick={() => setModalShow(true)} >
                                <IoMdAdd />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{width:'110px'}}>Sr. #</th>
                                <th>Office Name</th>
                                <th>City</th>
                                <th>Pincode</th>
                                <th>Contect Person</th>
                                <th>Contect No.</th>
                                <th>Active</th>
                                <th style={{width:'110px'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{ position: 'relative', height: '200px', border: '1px solid !important' }}>
                            <tr className=''>
                                <td className="" colSpan={8}>
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
                        Add Raj Group Office
                    </Modal.Title>
                </Modal.Header>
                <Formik
                    initialValues={{}}
                    validationSchema={LoginValidation}
                    onSubmit={(values) => {
                        setModalShow(false)
                        setvalidationActive(false)
                        if (!buttomclick) {
                            toast.success('Raj Group Office Add successFully.')
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
                                    <div className="mb-4">
                                        <div className="">
                                            <label className='py-1'>Office Name <span className='error'>*</span></label>
                                            <input type="text" className={`form-control py-2 ${errors.Office && validationActive && 'was-validated'}`} name='Office' defaultValue={values.Email} onChange={handleChange} />
                                        </div>
                                        {errors.Office && validationActive ? <div className='error'>{errors.Office}</div> : null}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address <span className='error'>*</span></label>
                                        <textarea className={`form-control py-2 ${errors.Address && validationActive && 'was-validated'}`} id="exampleFormControlTextarea1" name='Address' defaultValue={values.Address} rows="3" onChange={handleChange}></textarea>
                                        {errors.Address && validationActive ? <div className='error'>{errors.Address}</div> : null}
                                    </div>
                                    <div className="d-flex ">
                                        <div className="w-50 pe-1">
                                            <div className="mb-3">
                                                <label className='py-1'>City <span className='error'>*</span></label>
                                                <input type="text" className={`form-control py-2 ${errors.City && validationActive && 'was-validated'}`} name='City' defaultValue={values.City} onChange={handleChange} />
                                                {errors.City && validationActive ? <div className='error'>{errors.City}</div> : null}
                                            </div>
                                            <div className="mb-3">
                                                <label className='py-1'>Pincode <span className='error'>*</span></label>
                                                <input type="text" className={`form-control py-2 ${errors.Pincode && validationActive && 'was-validated'}`} name='Pincode' defaultValue={values.Pincode} onChange={handleChange} />
                                                {errors.Pincode && validationActive ? <div className='error'>{errors.Pincode}</div> : null}
                                            </div>
                                            <div className="form-check checkbox-lg">
                                                <input className="form-check-input" type="checkbox" name='Active' id="flexCheckDefault" onChange={handleChange} />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Active
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-50 ps-1">
                                            <div className="mb-3">
                                                <label className='py-1'>Contect Person <span className='error'>*</span></label>
                                                <input type="text" className={`form-control py-2 ${errors.ContectPerson && validationActive && 'was-validated'}`} name='ContectPerson' defaultValue={values.ContectPerson} onChange={handleChange} />
                                                {errors.ContectPerson && validationActive ? <div className='error'>{errors.ContectPerson}</div> : null}
                                            </div>
                                            <div className="mb-3">
                                                <label className='py-1'>Contect No <span className='error'>*</span></label>
                                                <input type="text" className={`form-control py-2 ${errors.ContectNo && validationActive && 'was-validated'}`} name='ContectNo' defaultValue={values.ContectNo} onChange={handleChange} />
                                                {errors.ContectNo && validationActive ? <div className='error'>{errors.ContectNo}</div> : null}
                                            </div>
                                        </div>

                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                </Modal.Footer>
                                <div className="col-12 d-flex justify-content-center">
                                    <button className='btn btn-outline-info px-3 py-2 my-3 mx-2' type='submit' style={{ width: '110px' }} onClick={onDone} >
                                        Save
                                    </button>
                                    <button className='btn btn-outline-danger px-3 py-2 my-3 mx-2' style={{ width: '110px' }} onClick={() => {
                                        setbuttomclick(true)
                                        onHide()
                                    }}>
                                        Cancel
                                    </button>
                                </div>
                            </Form>
                        </>
                    )}
                </Formik>
            </Modal >
        </div>
    )
}

export default RajGroupOffices