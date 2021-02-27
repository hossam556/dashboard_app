import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './LicenceKey.css'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
      padding :'5px',
      position:'relative'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 12,
      color : ' #838383',
      paddingTop:'40px'
    },
    pos: {
      marginBottom: 12,
    },
    actions:{
        display:'flex',
        justifyContent : 'space-between'
    },
    renewal:{
       fontSize:'12px',
       paddingLeft :'15px',
       paddingBottom :'10px'
    },
    button1:{
        color:'01A9F4'
    }
  });
  

const LicenceKey = () => {
    const classes = useStyles();
  
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} >
            Licence Key
          </Typography>
          <Typography style={{fontSize:'18px'}}>
             xxxx - xxxx - xxxx - xxxx
          </Typography>
        </CardContent>
        <div className='lic_buttons'>
        <a className='lic_button1' href='#w'>Renew Now <span style={{paddingLeft:'60px'}}>Stripe</span></a>
        <a className='lic_button2' href='#w'>Deactive</a>
        </div>
        <Typography className={classes.renewal}><span style={{opacity:'0.8'}}>Next Renewal on</span> 22 Mar 2021</Typography>
        <i style={{position:'absolute' ,fontSize:'17px' ,top:'80px',right:'20px',color:'#1EC1C3'}} class='fas fa-eye-slash'></i>
        <span className='eye_cont'></span>
      </Card>
    )
}

export default LicenceKey
