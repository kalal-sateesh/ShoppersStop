/* eslint-disable react-refresh/only-export-components */
import styles from "./Products.module.css";
import { Carousel, Spinner } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { NavLink } from "react-router-dom";
import route from "../../routes/route.json";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/cartSlice";
import { backgroundHoC } from "../../hoc/backgroundHOC";
import image1 from "../../accets/image1.avif";
import image2 from "../../accets/image2.avif";
import image3 from "../../accets/image3.avif";
import image4 from "../../accets/image4.avif";

const Products = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [index, setIndex] = useState(0);
  const { Products, isLoader, isError, errorMsg } = useContext(ProductsContext);
  const dispatch = useDispatch();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const items = Products.map((ele, index) => {
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
    return (
      <div key={index} className={styles.div}>
        <NavLink
          to={`${route.PRODUCTS}/${ele.id}`}
          className="text-decoration-none text-dark"
        >
          <div className="p-3">
            <img src={ele.image} alt="img" width="150" height="170"></img>
            <div className={styles.card}>
              <h5>{ele.title}</h5>
            </div>
            <div>
              <h5>Rating : {ele.rating.rate}</h5>
            </div>
            <div>
              <h5>price : $ {ele.price}</h5>
            </div>
          </div>
        </NavLink>
        <div>
          <button className={styles.button} onClick={btnClickHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    );
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

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{ width: "100vh" }}
        >
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
              style={{
                height: "60vh",
              }}
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={image2}
              alt="First slide"
              style={{
                height: "60vh",
              }}
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={image3}
              alt="First slide"
              style={{
                height: "60vh",
              }}
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={image4}
              alt="First slide"
              style={{
                height: "60vh",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {!isLoader && !isError && (
        <div
          className="d-flex justify-content-around mt-5 mb-5"
          style={{ flexWrap: "wrap" }}
        >
          {items}
        </div>
      )}
      {isError && !isLoader && (
        <div
          className="text-danger fw-bold fs-5"
          style={{ marginTop: "100px" }}
        >
          {errorMsg}
        </div>
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
export default backgroundHoC(Products);
