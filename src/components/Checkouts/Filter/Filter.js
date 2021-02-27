import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Filter.css'

const useStyles = makeStyles({
    root: {
        width:'24%',
      backgroundColor: '#2B2F55',
      borderRadius: '10px',
      color :'white',
    },
    
})

const Filter = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <CardContent >
               <p  style={{display:'inline-block'}}>Filter by :</p>
               <div className="filter_date">
               <a className='filter_button' href='w'>1D</a>
               <a className='filter_button M' href='w'>1M</a>
               <a className='filter_button' href='w'>1Y</a>
               </div>
           </CardContent>
        </Card>
    )
}

export default Filter
