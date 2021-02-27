import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Notification.css'


const useStyles = makeStyles({
    root: {
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',  
      paddingBottom:'70px',
      position:'absolute',
      top:'80px',
      right:'13%',
      zIndex:'10',
      width:'300px'  },
    action:{
    },
    head:{
    }
})

const Notification = ({close,open}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <p className='not_title'>Notification</p>
           <CardContent className={classes.action}>
               <div className='cont_now'>
                   <span className='not_now'>Transfer link confirmed <i style={{color:'grey'}}>by jamescorner313@gmail.com
                      <br/> just now</i></span><br/>
                      <img src='./icons/Vectorrr.png' alt='' className='not_icon'/>
                      <span className=' notif'></span>

               </div>
               <div className='cont_now'>
                   <span className='not_now'>Transfer link confirmed <i style={{color:'grey'}}>by anthony2313@gmail.com
                   <br/> 2min ago</i></span><br/>
                   <img src='./icons/Vectorrr.png' alt='' className='not_icon'/>
                   <span className='notif'></span>

               </div>
               <div className='cont_5min'>
                   <span className='not_5min'> confirmation email sent<i style={{color:'grey'}}> to jamescorner313@gmail.com and
                   anthony2313@gmail.com 5min ago</i>
                   </span>

               </div>
           </CardContent>
        </Card>
    )
}

export default Notification
