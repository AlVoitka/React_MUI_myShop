import { Alert, Snackbar } from '@mui/material'

function Snack({isOpen, handleClose = Function.prototype}) {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                severity="success"
                variant='filled'
                color="info"
                icon={false}
            >Product successfully added to cart</Alert>
        </Snackbar>
    )
}

export default Snack;