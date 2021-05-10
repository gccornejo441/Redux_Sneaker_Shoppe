import { removeFromCart } from './shoeSlice';
import { connect } from 'react-redux';

const RemoveFromCart = ({ data, removeFromCart }) => {
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
