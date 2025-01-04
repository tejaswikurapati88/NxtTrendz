// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import Payment from '../Payment'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const noOfItems = cartList.length
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="summary-total">
            Order Total: <span className="total-price">Rs {total}/-</span>
          </h1>
          <p className="summary-para">{noOfItems} Items in cart</p>

          <Popup
            modal
            trigger={
              <button className="button-summ" type="button">
                Checkout
              </button>
            }
            position="top left"
            closeOnDocumentClick
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
