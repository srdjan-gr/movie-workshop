import React from 'react'
import { FaRegListAlt } from 'react-icons/fa'

const Nav = () => {
    return (
        <nav className="navbar bg-transparent">
            <div className="container-fluid px-0 py-0">
                <a className="navbar-brand fs-3 fw-bold text-light">MovieMania</a>

                <FaRegListAlt className='fs-3 text-light' />
            </div>
        </nav>
    )
}

export default Nav