import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";


function SuccessMadal({modalOpen, modalClose = Function.prototype}) {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#4eff00',
        // border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
      };

    return (
        <Modal
            open={modalOpen}
            onClose={modalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2"sx={{textAlign:'center'}}>
                    Success
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, textAlign:'center'}}>
                Order processed
                </Typography>
            </Box>

        </Modal>
    )
}

export default SuccessMadal;