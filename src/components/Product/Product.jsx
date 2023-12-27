import { useContext, useState } from "react";
import styles from "../Product/Product.module.css";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/cartSlice";
const Product = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { Products, isLoader, isError, errorMsg } = useContext(ProductsContext);
  const dispatch = useDispatch();

  const { pid = "1" } = useParams();
  console.log(pid);

  const List = Products.map((ele) => {
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

    if (ele.id == pid) {
      return (
        <>
          <div className={styles.img}>
            <img src={ele.image} alt="IMAGE" width="100%" height="100%" />
          </div>
          <div className={styles.content}>
            <div className={styles.head}>{ele.title}</div>
            <div className={styles.description}>{ele.description}</div>
            <div className={styles.size}>Seclect Size</div>
            <div className={styles.size}>
              <span className={styles.span}>M</span>
              <span className={styles.span}>L</span>
              <span className={styles.span}>XL</span>
              <span className={styles.span}>XXL</span>
            </div>
            <div className={styles.price}>
              Price :{" "}
              <span style={{ color: "rgb(255, 136, 136)" }}>$ {ele.price}</span>
            </div>
            <div className={styles.mrp}>M.R.P. inclusive of all taxes</div>
            <div className={styles.icon}>
              <i className={`bi bi-suit-heart me-4 ${styles.i}`}></i>
              <i className={`bi bi-whatsapp me-4 ${styles.i}`}></i>
              <Button
                variant="success"
                className={styles.button}
                onClick={btnClickHandler}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </>
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
      {!isLoader && !isError && <div className={styles.container}>{List}</div>}
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

export default Product;
