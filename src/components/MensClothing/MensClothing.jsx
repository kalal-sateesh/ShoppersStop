import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import styles from "./MensClothing.module.css";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/cartSlice";

const MenClothing = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { Products, isLoader, isError, errorMsg } = useContext(ProductsContext);
  const dispatch = useDispatch();

  const List = Products.map((ele, index) => {
    const btnClickHandler = () => {
      dispatch(
        addItem({
          id: ele.id,
          image: ele.image,
          title: ele.title,
          price: ele.price,
        })
      );
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    };
    if (ele.category == "men's clothing") {
      return (
        <div key={index} className={styles.div}>
          <div className="p-3">
            <img src={ele.image} alt="img" width="150" height="170"></img>
            <div className={styles.card}>
              <h5 className="text-black">{ele.title}</h5>
            </div>
            <div>
              <h5 className="text-black">Rating : {ele.rating.rate}</h5>
            </div>
            <div>
              <h5 className="text-black">price : $ {ele.price}</h5>
            </div>
            <div className={styles.description}>{ele.description}</div>
            <div>
              <button className={styles.button} onClick={btnClickHandler}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      {showAlert && (
        <div
          className={`alert alert-success mt-3 ${styles.alert}`}
          role="alert"
        >
          Item added to cart!
        </div>
      )}
      <div className={styles.shop}>
        <h2>Mens Clothing Latest Collections</h2>
      </div>
      {!isLoader && !isError && (
        <div
          className="d-flex justify-content-around mt-3 mb-3"
          style={{ flexWrap: "wrap" }}
        >
          {List}
        </div>
      )}
      {isError && !isLoader && (
        <div className="text-danger fw-bold mt-5 fs-5">{errorMsg}</div>
      )}
      {isLoader && !isError && (
        <Spinner
          animation="border"
          variant="primary"
          className={styles.spinner}
        />
      )}
    </>
  );
};

export default MenClothing;
