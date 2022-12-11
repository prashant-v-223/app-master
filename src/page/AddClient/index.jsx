import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { Formik, Form } from 'formik';
import './AddClient.scss'
import { IoMdAdd } from 'react-icons/io';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import EmtyData from '../../assets/EmtyData.png'
function AddClient() {
    const [validationActive, setvalidationActive] = useState(false)
    const [AllDataLocation, setAllDataLocation] = useState([])
    const [Location, setLocation] = useState({ SiteLocation: '', City: '' })
    const [Locationerror, setLocationerror] = useState({})
    const [AllDataRepresentatives, setAllDataRepresentatives] = useState([])
    const [Representatives, setRepresentatives] = useState({ Name: '', Mobile: '', Email: '', Designation: '' })
    const [Representativeserror, setRepresentativeserror] = useState({})
    const [stap, setstap] = useState(false)
    const AddClientValidation = yup.object({
        ClientName: yup.string().required('Client Name is required.'),
        ContactPerson: yup.string().required('Contact Person Name is required.'),
        ContactNo: yup.string().required('Contact No  is required.'),
        ContactEmail: yup.string().required('Contact Email  is required.'),

    })
    const ClientLocationValidation = (data) => {
        const error = {}
        if (!data.SiteLocation) {
            error.SiteLocation = 'Site Location is required.'
        }
        if (!data.City) {
            error.City = 'City is required.'
        }
        setLocationerror(error)
        return error
    }
    const ClientRepresentativesValidation = (data) => {
        const error = {}
        if (!data.Name) {
            error.Name = 'Name is required.'
        }
        if (!data.Mobile) {
            error.Mobile = 'Mobile is required.'
        }
        if (!data.Email) {
            error.Email = 'Email is required.'
        }
        if (!data.Designation) {
            error.Designation = 'Designation is required.'
        }
        setRepresentativeserror(error)
        return error
    }
    const AddClintLocations = (e) => {
        if (e.target.value.trim() !== '') {
            setLocation({ ...Location, [e.target.name]: e.target.value })
        } else {
            setLocation({ ...Location, [e.target.name]: '' })
        }
    };
    const AddClintRepresentatives = (e) => {
        if (e.target.value.trim() !== '') {
            setRepresentatives({ ...Representatives, [e.target.name]: e.target.value })
        } else {
            setRepresentatives({ ...Representatives, [e.target.name]: '' })
        }
    };

    return (
        <>
            {!stap ?
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-items-center pt-4">
                                <div className="">
                                    <h4 className=''><b>Add Client</b></h4>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="bg-info Actions m-2" onClick={() => {
                                        setstap(!stap)
                                    }} >
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
                                        <th>Scopeid</th>
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
                </div>
                :
                <div className="container-fluid">
                    <ToastContainer />
                    <div className="row">
                        <h4 className='pt-4 pb-0 ps-'><b>Add Client</b></h4>
                        <Formik
                            initialValues={{}}
                            validationSchema={AddClientValidation}
                            onSubmit={(values) => {
                                setstap(!stap)
                                console.log("📢[index.jsx:121]: values: ", values);
                                toast.success('Client Add successFully.')

                            }}
                        >
                            {({
                                values,
                                errors,
                                handleChange,
                            }) => (
                                <>
                                    <Form >
                                        <div className="row">
                                            <div className="col-6 py-2">
                                                <div className="">
                                                    <div className=" ">
                                                        <label className=''>Client Name<span className='error'>*</span></label>
                                                        <input type="text" className={`form-control py-2 ${errors.ClientName && validationActive && 'was-validated'}`} name='ClientName' defaultValue={values.ClientName}
                                                            onChange={handleChange} />
                                                    </div>
                                                    {errors.ClientName && validationActive ? <div className='error'>{errors.ClientName}</div> : null}
                                                </div>
                                            </div>
                                            <div className="col-6 py-2">
                                                <div className="">
                                                    <div className="">
                                                        <label className=''>Contact Person<span className='error'>*</span></label>
                                                        <input type="Password" className={`form-control py-2 ${errors.ContactPerson && validationActive && 'was-validated'}`} name='ContactPerson' defaultValue={values.ContactPerson}
                                                            onChange={handleChange} />
                                                    </div>
                                                    {errors.ContactPerson && validationActive ? <div className='error'>{errors.ContactPerson}</div> : null}
                                                </div>
                                            </div>
                                            <div className="col-6 py-2">
                                                <div className="">
                                                    <div className="">
                                                        <label className='' >Contact No<span className='error'>*</span></label>
                                                        <input type="Password" className={`form-control py-2 ${errors.ContactNo && validationActive && 'was-validated'}`} name='ContactNo' defaultValue={values.ContactNo}
                                                            onChange={handleChange} />
                                                    </div>
                                                    {errors.ContactNo && validationActive ? <div className='error'>{errors.ContactNo}</div> : null}
                                                </div>
                                            </div>
                                            <div className="col-6 py-2">
                                                <div className="">
                                                    <div className="">
                                                        <label className=''>Contact Email<span className='error'>*</span></label>
                                                        <input type="Password" className={`form-control py-2 ${errors.ContactEmail && validationActive && 'was-validated'}`} name='ContactEmail' defaultValue={values.ContactEmail}
                                                            onChange={handleChange} />
                                                    </div>
                                                    {errors.ContactEmail && validationActive ? <div className='error'>{errors.ContactEmail}</div> : null}
                                                </div>
                                            </div>
                                            {/* Locations */}
                                            <div className="col-12">
                                                <h4 className='pt-4'><b>Clients' Locations</b></h4>
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th style={{width:'110px'}}>Sr. #</th>
                                                                <th>Site Location</th>
                                                                <th>City</th>
                                                                <th style={{width:'110px'}} >Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {AllDataLocation?.map((e, i) => {
                                                                return (
                                                                    <tr key={i.toString()}>
                                                                        <td style={{width:'110px'}}>{i + 1}</td>
                                                                        <td>

                                                                            <input type="text" className={`w-100 p-2 form-control`} style={{ minWidth: '150px' }} value={e.SiteLocation} disabled readOnly />
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" className='w-100 p-2 form-control' style={{ minWidth: '150px' }} value={e.City} disabled readOnly />
                                                                        </td>
                                                                        <td className='d-flex justify-content-end p-2'  style={{width:'110px'}}>
                                                                            <div className="Actions my-2 mx-1" style={{ background: 'rgb(213, 184, 80)' }}><AiFillEdit className='text-light' /></div>
                                                                            <div className="bg-danger Actions my-2 mx-1"><AiFillDelete /></div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                            <tr>
                                                                <td style={{width:'110px'}}>{AllDataLocation.length + 1}</td>
                                                                <td>
                                                                    <input type="text" className={`w-100 p-2 form-control ${Locationerror?.SiteLocation && 'was-validated'}`} style={{ minWidth: '150px' }} name='SiteLocation' value={Location?.SiteLocation} onChange={AddClintLocations} />
                                                                    {Locationerror.SiteLocation ? <div className='error'>{Locationerror.SiteLocation}</div> : null}
                                                                </td>
                                                                <td>
                                                                    <input type="text" className={`w-100 p-2 form-control ${Locationerror?.City && 'was-validated'}`} style={{ minWidth: '150px' }} name='City' value={Location?.City} onChange={AddClintLocations} />
                                                                    {Locationerror.City ? <div className='error'>{Locationerror.City}</div> : null}
                                                                </td>
                                                                <td className='' style={{width:'110px'}}>
                                                                    <div className='d-flex justify-content-end'>
                                                                        <div className="bg-info Actions m-2" onClick={() => {
                                                                            if (Object.values(ClientLocationValidation(Location)).length === 0) {
                                                                                setAllDataLocation([...AllDataLocation, { id: new Date().toString(), ...Location }])
                                                                                setLocation({ SiteLocation: '', City: '' })
                                                                            }
                                                                        }} >
                                                                            <IoMdAdd />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <h4 className='pt-4'><b>Client Representatives</b></h4>
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th style={{width:'110px'}}>Sr. #</th>
                                                                <th>Name</th>
                                                                <th>Mobile</th>
                                                                <th>Email</th>
                                                                <th>Designation</th>
                                                                <th style={{width:'110px'}}>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {AllDataRepresentatives?.map((e, i) => {
                                                                return (
                                                                    <tr key={i.toString()}>
                                                                        <td style={{width:'110px'}}>{i + 1}</td>
                                                                        <td>
                                                                            <input type="text" className={`w-100 p-2 form-control `} style={{ minWidth: '150px' }} name='Name' value={e.Name} disabled />
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" className={`w-100 p-2 form-control `} style={{ minWidth: '150px' }} name='Mobile' value={e.Mobile} disabled />
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" className={`w-100 p-2 form-control `} style={{ minWidth: '150px' }} name='Email' value={e.Email} disabled />
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" className={`w-100 p-2 form-control `} style={{ minWidth: '150px' }} name='Designation' value={e.Designation} disabled />
                                                                        </td>
                                                                        <td style={{width:'110px'}} className='d-flex justify-content-end'>
                                                                            <div className="Actions my-2 mx-1" style={{ background: 'rgb(213, 184, 80)' }}><AiFillEdit className='text-light' /></div>
                                                                            <div className="bg-danger Actions my-2 mx-1"><AiFillDelete /></div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                            <tr>
                                                                <td style={{width:'110px'}}>{AllDataRepresentatives.length + 1}</td>
                                                                <td>
                                                                    <input type="text" className={`w-100 p-2 form-control ${Representativeserror.Name && 'was-validated'}`} style={{ minWidth: '150px' }} name='Name' value={Representatives?.Name} onChange={AddClintRepresentatives} />
                                                                    {Representativeserror.Name ? <div className='error'>{Representativeserror.Name}</div> : null}
                                                                </td>
                                                                <td>
                                                                    <input type="text" className={`w-100 p-2 form-control ${Representativeserror?.Mobile && 'was-validated'}`} style={{ minWidth: '150px' }} name='Mobile' value={Representatives?.Mobile} onChange={AddClintRepresentatives} />
                                                                    {Representativeserror.Mobile ? <div className='error'>{Representativeserror.Mobile}</div> : null}
                                                                </td>
                                                                <td>
                                                                    <input type="text" className={`w-100 p-2 form-control ${Representativeserror?.Email && 'was-validated'}`} style={{ minWidth: '150px' }} name='Email' value={Representatives?.Email} onChange={AddClintRepresentatives} />
                                                                    {Representativeserror.Email ? <div className='error'>{Representativeserror.Email}</div> : null}
                                                                </td>
                                                                <td>
                                                                    <input type="text" className={`w-100 p-2 form-control ${Representativeserror?.Designation && 'was-validated'}`} style={{ minWidth: '150px' }} name='Designation' value={Representatives?.Designation} onChange={AddClintRepresentatives} />
                                                                    {Representativeserror.Designation ? <div className='error'>{Representativeserror.Designation}</div> : null}
                                                                </td>
                                                                <td className='d-flex justify-content-end' style={{width:'110px'}}>
                                                                    <div className="bg-info Actions m-2" onClick={() => {
                                                                        if (Object.values(ClientRepresentativesValidation(Representatives)).length === 0) {
                                                                            setAllDataRepresentatives([...AllDataRepresentatives, { id: new Date().toString(), ...Representatives }])
                                                                            setRepresentatives({ Name: '', Mobile: '', Email: '', Designation: '' })
                                                                        }
                                                                    }} >
                                                                        <IoMdAdd />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-center pt-4">
                                                <button className='btn btn-outline-info px-3 py-2 my-3 mx-2' type="submit" style={{ width: '110px' }}
                                                    onClick={(values) => {
                                                        setvalidationActive(!false)
                                                    }}
                                                >
                                                    Save
                                                </button>
                                                <button className='btn btn-outline-danger px-3 py-2 my-3 mx-2' style={{ width: '110px' }} onClick={() => {
                                                    setstap(!stap)
                                                }}>
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </>
                            )}
                        </Formik>
                    </div>
                </div >
            }
        </>
    )
}

export default AddClient