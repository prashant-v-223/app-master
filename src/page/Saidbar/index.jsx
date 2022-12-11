import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Saidbar.scss'
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import { MdOutlineDashboard } from 'react-icons/md'
import { RiBookFill } from 'react-icons/ri';
import { BiArrowBack, BiCertification } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import Headers from './Headers';
function Saidbar({ page }) {
    const [parth, setparth] = useState('/Deshboard')
    const location = useLocation()
    const [opan, setopan] = useState(false)
    const [Id, setid] = useState(0)
    const [opan1, setopan1] = useState(false)
    useEffect(() => {
        setparth(location.pathname)
        window.scroll(0, 0)
    }, [location])
    const sidebarmenu = [
        {
            id: '1',
            name: 'Dashboard',
            icon: MdOutlineDashboard,
            navigat: '/Dashboard'
        },
        {
            id: '2',
            name: 'Master',
            icon: RiBookFill,
            submenu: [
                {
                    id: "2-1",
                    name: "Clients",
                    navigat: '/clients'
                },
                {
                    id: "2-2",
                    name: "Scope Of Work",
                    navigat: '/Scope-of-Work'
                },
                {
                    id: "2-3",
                    name: "Project Status",
                    navigat: '/Project-StatUs'
                },
                {
                    id: "2-4",
                    name: "Raj Group Offices",
                    navigat: '/Raj-Group-Offices'
                }
            ]
        },
        {
            id: '3',
            name: 'Master-1',
            icon: RiBookFill,
            submenu: [
                {
                    id: "2-1",
                    name: "Clients",
                    navigat: '/clients'
                },
                {
                    id: "2-2",
                    name: "Scope Of Work",
                    navigat: '/Scope-of-Work'
                },
                {
                    id: "2-3",
                    name: "Project Status",
                    navigat: '/Project-StatUs'
                },
                {
                    id: "2-4",
                    name: "Raj Group Offices",
                    navigat: '/Raj-Group-Offices'
                }
            ]
        },
    ]

    const Menu = () => {
        const [opan1, setopan1] = useState(false)
        return sidebarmenu.map((e, i) => {
            return (
                <div key={i}>
                    {e.submenu
                        ?
                        <div onClick={() => {
                            setid(e.id)
                            // setopan1(!opan1)
                        }} >
                            <li className={`sidebar-dropdown py-2 ${Id}`}  >
                                <Link to={e.navigat}>
                                    <span className='d-flex align-items-center'>
                                        <e.icon style={{ fontSize: '20px' }} className='text-light' />
                                        <h6 className='mx-3 my-0 text-light' style={{ fontSize: '15px' }}>{e.name}</h6>
                                    </span>
                                    {Id === e.id ? <GoChevronDown style={{ fontSize: '18px' }} className='text-light' /> :
                                        <GoChevronRight style={{ fontSize: '18px' }} className='text-light' />}
                                </Link>
                            </li>
                            {e.submenu.map((menu, i) => {
                                return (
                                    <div className="sidebar-submenu" style={{ display: `${Id === e.id ? 'block' : 'none'}` }} key={i}>
                                        <ul className='p-0' style={{ listStyle: 'none' }}>
                                            <li className={`py-2 ps-4 ${parth === menu.navigat && 'MenuActive'}`} >
                                                <Link to={menu.navigat}>
                                                    <span className='d-flex align-items-center'>
                                                        <BiCertification style={{ fontSize: '14px', color: "#fff" }} />
                                                        <h6 className='mx-2 my-0 text-light' style={{ fontSize: '14px' }}>{menu.name}</h6>
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <li className={`py-2 ${parth === e.navigat && 'MenuActive'}`} onClick={() => { setid(!true) }}>
                            <Link to={e.navigat}>
                                <span className='d-flex align-items-center'>
                                    <e.icon style={{ fontSize: '18px' }} className='text-light' />
                                    <h6 className='mx-3 my-0 text-light' style={{ fontSize: '14px' }}>{e.name}</h6>
                                </span>
                            </Link>
                        </li>
                    }
                </div>
            )
        })
    }

    return (
        <div>
            <div className={`page-wrapper chiller-theme ${!opan && 'toggled'} `}>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-header d-flex">
                            <div className="w-75 d-flex align-items-center">
                                <h4 className='text-light m-0'>RAJ Group</h4>
                            </div>
                            <div className="w-25 d-flex align-items-center justify-content-end">
                                <div id="close-sidebar " className='ms-2' onClick={() => { setopan(!opan) }}>
                                    <BiArrowBack className='text-light' style={{ fontSize: "25px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul className='pt-2' style={{ listStyle: "none", padding: '0' }}>
                                <Menu />
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="page-content">
                    <Headers setopan={setopan} opan={opan} />
                    <div className="">
                        {page}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Saidbar