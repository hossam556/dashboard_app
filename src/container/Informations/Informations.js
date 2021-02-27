import React from 'react'
import './informations.css'
import LicenceKey from '../../components/info/LicenceKey/LicenceKey'
import DiscordID from '../../components/info/DiscordID/DiscordID'
import Transfer from '../../components/info/Transfer/Transfer'
import DesktopApp from '../../components/info/DesktopApp/DesktopApp'

const Informations = () => {
    return (
        <div className='info'>
            <div className='hover'><LicenceKey/></div>
            <div className='hover'><DiscordID/></div>
            <div className='hover'><Transfer/></div>
            <div className='hover'><DesktopApp/></div>
        </div>
    )
}

export default Informations

