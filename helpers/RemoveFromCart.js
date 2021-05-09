import { removeFromCart } from './shoeSlice';
import { useDispatch, useSelector, connect } from 'react-redux';

const RemoveFromCart = ({ data, removeFromCart }) => {
    console.log("data: ", data)
    return (
    <button type="button" onClick={() => removeFromCart(data)}>
        Clear Cart
    </button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)), 
    }
}

export default connect(null, mapDispatchToProps)(RemoveFromCart);

// export default RemoveFromCart;