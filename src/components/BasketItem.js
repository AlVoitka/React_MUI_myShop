import { IconButton, ListItem, Typography } from '@mui/material';
import { Delete } from "@mui/icons-material";

const BasketItem = ({removeFromOrder, id, name, price, quantity}) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}$ x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Delete 
                    color='warning'
                />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;