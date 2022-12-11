import React from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';
import './Saidbar.scss'
// import profile from '../../../assets/profile.svg';
// import Plumbing from '../../../assets/Group (4).svg'

function Headers({ opan, setopan }) {
    return (
        <div className="top-header d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center">
                <Link className="btn btn-sm" onClick={() => { setopan(!opan) }} >
                    {!opan ? <AiOutlineMenuFold className='text-dark' style={{ fontSize: "25px" }} /> :
                        <AiOutlineMenuUnfold className='text-dark' style={{ fontSize: "25px" }} />}
                </Link>
                <h6 className='m-0 WelcomeText'><b>Welcome to Project Management</b></h6>
            </div>
            <div className="d-flex align-items-center">
                <div className="">
                    <div className="dropdown" style={{ float: 'right' }}>
                        <button className="dropbtn m-0">
                            {/* <img src={profile} alt="" className='img-fluid me-1' width={35} height={35} /> */}
                            <span className='WelcomeText'>Hi, John</span>
                            <GoChevronDown style={{ fontSize: '18px' }} className='text-dark m-1' />
                        </button>
                        <div className="dropdown-content">
                            <Link to={'/password_reset'} style={{ fontSize: "13px" }}>Change password</Link>
                            <Link to={'/Partner_Login'} style={{ fontSize: "13px" }}>Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers