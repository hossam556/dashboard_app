import React ,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './desktop.css'
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import AOS from 'aos';
import "aos/dist/aos.css";



const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
      padding :'5px',
      marginTop : '30px'
    },
    action:{
      display:'flex',
      justifyContent:'space-between'
    }
})

const DesktopApp = () => {
    const classes = useStyles();
    useEffect(() => {
      AOS.init({
        duration : 500
      });
    }, []);

    return (
      <div data-aos="flip-right">
        <Card className={classes.root} variant="outlined" data-aos="flip-right">
        <CardContent className={classes.action}>
            <div className='lap'>
              <LaptopMacIcon style={{fontSize:'80px'}}/>
            </div>
            <div className='des_buttons'>
            <div><a className='desk_button1' href='w'>Download for MacOS</a></div><br/><br/>
            <div><a className='desk_button2' href='w'>Download for Windows</a></div>

            </div>

        </CardContent>
     </Card>
     </div>
    )
}

export default DesktopApp
