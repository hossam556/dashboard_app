import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './totalFailure.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
      width:'34%'
    },
    action:{
      display:'flex',
      justifyContent:'space-between'
    }
})

const TotalFailures = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <CardContent className={classes.action}>
               <div>
                 <p  style={{display:'inline-block'}}>Total Failures</p><br/>
                 <span><span className='n10'>10</span>/82</span>
               </div>
               <div className='shopping_cont2'>
               <span className='shopping2'><AddShoppingCartIcon style={{color:"#FE7448" ,fontSize:'35px'}}/></span>
                 <a href='w' className='shopping_a2'>.</a>
                 <img src='./icons/Vector (4).png' alt='true' className='false_mark'/>
               </div>
           </CardContent>
        </Card>
    )
}

export default TotalFailures
