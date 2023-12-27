import { useDispatch, useSelector } from "react-redux";
import styles from "../Cart/Cart.module.css";
import { decreaseQuantity, increaseQuantity, removeItem } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import route from "../../routes/route.json";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const Cart = () => {
  const { isAuth } = useContext(AuthContext);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.data);
  const navigate = useNavigate();

  const clickHandler = () => {
    if (isAuth) {
      navigate(`/${route.ADDRESS}`);
    } else {
      navigate(`/${route.LOGIN}`);
    }
  };

  const totalPrice = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].price * data[i].quantity;
    }
    return sum.toFixed(2);
  };

  const shopNowClickHandler = () => {
    navigate(route.HOME);
  };

  const cartItem = data.map((ele) => {
    let price = ele.price * ele.quantity;
    return (
      <div className={styles.details} key={ele.id}>
        <div className={styles.image}>
          <img src={ele.image} width="100%" height="100%" />
        </div>
        <div className={styles.content}>
          <div className={styles.head}>{ele.title}</div>
          <div className={styles.price}>
            Price : <span className="text-success">$ {price}</span>
          </div>
          <div className={styles.quantity}>
            quantity :{" "}
            <button onClick={() => dispatch(decreaseQuantity({ id: ele.id }))}>
              -
            </button>
            <span>{ele.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity({ id: ele.id }))}>
              +
            </button>
          </div>
          <div className={styles.remove}>
            <button onClick={() => dispatch(removeItem({ id: ele.id }))}>
              Reomove from cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {data.length && (
        <div className={styles.container}>
          <div className={styles.div}>{cartItem}</div>
          <div className={styles.summery}>
            <div className={styles.total}>
              <div className={styles.sum}>SUMMARY</div>
            </div>
            <div className={styles.total}>
              <div className={styles.TP}>Total Price</div>
              <div className={styles.TP}>$ {totalPrice(data)}</div>
            </div>
            <div className={styles.total}>
              <div className={styles.TP}>Shipping Charges</div>
              <div className={styles.free}>FREE</div>
            </div>
            <div className={styles.total}>
              <div className={styles.TP}>Handling Charges</div>
              <div className={styles.TP}>$ 0</div>
            </div>
            <div className={styles.total}>
              <div className={styles.AP}>Amount Payable</div>
              <div className={styles.AP}>$ {totalPrice(data)}</div>
            </div>
            <div className={styles.btn}>
              <button onClick={clickHandler}>BUY NOW</button>
            </div>
          </div>
        </div>
      )}
      {!data.length && (
        <div className={styles.cart}>
          <div className={styles.cart1}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlt1wSnX_U3WQUVYvOpqBw1glQyRLpWCVaQ&usqp=CAU"
                width="100%"
                height="100%"
              ></img>
            </div>
            <div className={styles.cart2}>
              <h2 className="text-black">No item in cart</h2>
              <button className={styles.shopNow} onClick={shopNowClickHandler}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
