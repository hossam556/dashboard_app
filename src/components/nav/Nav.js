import React ,{useState} from 'react'
import './nav.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Notification from './Notification/Notification'
import Slide from '@material-ui/core/Slide';

const Nav = () => {
    const [show ,setShow]=useState(false)
    
    const openNotif=()=>{
        setShow(!show)
    }
   

    return (
        <div className='nav'>
            <span className='alert' onClick={openNotif}>
                <img  src='./icons/Vector.png' alt='' />
                <span className='elipse'></span>
           </span>
            <img   src='./icons/Ellipse 8.png' alt='' className='boy'/>
            <div>
            <span className='nav_name'>Antony Mike</span><br/>
            <span className='nav_name mail'>anthony2142@email.com</span>
            </div>
            <KeyboardArrowDownIcon style={{paddingRight:'20px'}}/>
            {show && 
                <Notification/>}
        </div>
    )
}

export default Nav

