import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './discord.css'

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

const DiscordID = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <CardContent className={classes.action}>
               <div>
                 <img src='/icons/surface1.png' alt='icon'/>
                 <span style={{paddingLeft:'5px'}}>Discord ID</span><br/>
                 <span>antony#21142</span>
               </div>
               <a className='dis_button' href='w'>Unbind</a>

           </CardContent>
        </Card>
    )
}

export default DiscordID
