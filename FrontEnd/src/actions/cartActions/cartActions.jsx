import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../../Constants/cartConstants';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            quantity,
        },
    });

    localStorage.setItem('carItems', JSON.stringify(getState().cart.cartItem));
};
