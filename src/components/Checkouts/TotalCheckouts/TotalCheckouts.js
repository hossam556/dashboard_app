import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './totalCheckouts.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
      width:'34%',      
    },
    action:{
      display:'flex',
      justifyContent:'space-between'
    }
})

const TotalCheckouts = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <CardContent className={classes.action}>
               <div>
                 <p style={{display:'inline-block'}}>Total Checkouts</p><br/>
                 <span><span className='n72'>72</span>/82</span>
               </div>
               <div className='shopping_cont'>
               <span className='shopping'><AddShoppingCartIcon style={{color:"#63F4F7" ,fontSize:'35px'}}/></span>
                 <a href='#w' className='shopping_a'>.</a>
                 <img src='./icons/Vector (3).png' alt='true' className='true_mark'/>
               </div>
           </CardContent>
        </Card>
    )
}

export default TotalCheckouts
