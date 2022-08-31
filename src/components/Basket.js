import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ShoppingBasket } from "@mui/icons-material"
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        handleModal,
        order = [],
        removeFromOrder
    } = props;

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '500px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Basket" />
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>Basket is empty!</ListItem>
                ) : (
                    <>
                    {order.map((item) => (
                        <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                    ))}
                    
                    <ListItem>
                        <Typography sx={{fontWeight: 400}}>
                            Total:{' '}
                            {order.reduce((acc, item) => {
                            return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            $.
                        </Typography>
                    </ListItem>
                    </>
                )}
                <Divider />
                <Button
                    variant='outlined'
                    color='success'
                    sx={{
                        mt:'15px',
                        ml: '33%'
                    }}
                    onClick={handleModal}
                    
                >
                    Buy Now {' '}
                            {order.reduce((acc, item) => {
                            return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            $
                </Button>

            </List>
        </Drawer>
    )
}

export default Basket