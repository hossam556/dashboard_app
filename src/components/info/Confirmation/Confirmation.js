import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Confirmation.css'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
      width:'27%',
      paddingTop:'100px',
      position:'relative'
    },
    action:{
        textAlign:'center'
    },
    head:{
        paddingBottom:'10px'
    }
})

const Confirmation = ({close}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <span className='close_icon' onClick={close}>x</span>
            <a href='#w' className='confirm_a'>.</a> 
            <img src='/icons/Vectoor.png' alt='icoon' className='confirm_icon'/>
           <CardContent className={classes.action}>
               <Typography className={classes.head}>Confirmation Email Sent</Typography>
               <span className='desc'>we sent a link to<a href='#w' style={{color:'#1EC1C3'}}> anthony2142@gmail.com</a>{' '}
               and<a href='#w' style={{color:'#1EC1C3'}}> jamesconor@gmail.com.</a>Check the Email to confirm the transfer</span>
               <div className='conf_text'>
                   <span className='ask'>Didn’t get a confirmation email?</span><br/>
                   <span className='check'>Check your spam or <i style={{color:'#1EC1C3'}}>Send again</i></span>
                </div>     
                         
           </CardContent>
        </Card>
    )
}

export default Confirmation
