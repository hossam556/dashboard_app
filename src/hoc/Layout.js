import React from 'react'
import './layout.css'
import Nav from '../components/nav/Nav'

const Layout = (props) => {
    return (
        <div className='layout'>
            <Nav/>
            <main className='main'>{props.children}</main>
        </div>
    )
}

export default Layout
