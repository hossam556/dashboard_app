import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './TransferModal.css'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
      width:'30%',
    },
    action:{
    },
    head:{
        fontSize:'24px'
    }
})

const TransferModal = ({close,open}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <CardContent className={classes.action}>
               <Typography className={classes.head}>Transfer</Typography>
               <p className='Tmodal_p'>Transfer to</p>
               <input type='email' placeholder='Enter the email addres' className='Tmodal_input'/>
               
           </CardContent>
           <div className='Tmodal_buttons'>
               <a className='Tmodal_button' href='#w' onClick={close}>Cancel</a>
               <a className='Tmodal_button blue' href='#w'onClick={()=>{open(); close()}} >Send</a>
               </div>
        </Card>
    )
}

export default TransferModal
