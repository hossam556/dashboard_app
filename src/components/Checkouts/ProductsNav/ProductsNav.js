import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './productsnav.css'

const useStyles = makeStyles({
    root: {
        width:'100%',
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
      marginTop:'35px',
    },
    action :{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    }
    
})

const ProductsNav = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <CardContent  className={classes.action}>
               <span style={{flex:'1' ,position:'relative'}}  className='nav_title'>DATE
               <i style={{position:'absolute' ,top:'4px',fontSize:'18px'}} class="material-icons">keyboard_arrow_down</i>
               <i style={{position:'absolute' ,bottom:'4px',fontSize:'18px'}} class="material-icons">keyboard_arrow_up</i></span>
               <span style={{flex:'3'}}  className='nav_title'>PRODUCT</span>
               <span style={{flex:'1'}} className='nav_title'>SIZE{" "}(US)</span>
               <span style={{flex:'2' ,paddingLeft:'10px'}} className='nav_title'>WEBSITE</span>
               <span style={{flex:'1'}} className='nav_title'>PRICE</span>
               <span style={{flex:'1'}} className='nav_title'>STATUS</span>

           </CardContent>
        </Card>
    )
}

export default ProductsNav
