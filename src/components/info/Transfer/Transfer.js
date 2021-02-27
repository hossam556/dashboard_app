import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './transfer.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TransferModal from '../TransferModal/TransferModal'
import Confirmation from '../Confirmation/Confirmation'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',}
})

const Transfer = () => {
    const classes = useStyles();
    const [show ,setShow]= useState(false)
    const [confirm ,setConfirm]= useState(false)


    const openModal=()=>{
        setShow(true)
    }
    const closeModal=()=>{
      setShow(false)
  }
  const openConfirm=()=>{
    setConfirm(true)
  }
  const closeConfirm=()=>{
    setConfirm(false)
  }
 


    return (
        <Card className={classes.root} variant="outlined">
        <CardContent >
            <div style={{paddingBottom:'10px'}}>
             <img src='/icons/surface1.png' alt='icon'/>
             <span className='t_head' >Transfer</span>
            </div >
            <div className='trans'>
            <div>
              <span style={{opacity:'0.8' , fontSize:'12px'}}>Current Email</span><br/>
              <span>anthony2142@emaill.com</span>
            </div>
            <a className='tran_button' href='#w' onClick={openModal}>Transfer to <ChevronRightIcon style={{position:'absolute'}}/> </a>
            </div>
        </CardContent>
        {show && <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={show}
                    onClose={closeModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}>
             <Fade in={show}>
            <TransferModal close={closeModal} open={openConfirm}/>
            </Fade>

          </Modal>}
          {confirm && <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={confirm}
                    onClose={closeConfirm}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}>
             <Fade in={show}>
            <Confirmation close={closeConfirm} />
            </Fade>

          </Modal>}
     </Card>
    )
}

export default Transfer
