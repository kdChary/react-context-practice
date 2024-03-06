import CartItem from '../CartItem'

import './index.css'
import CartContext from '../../context/CartContext'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      if (!cartList.length) {
        return <h3>Your Cart is Empty !!</h3>
      }
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
