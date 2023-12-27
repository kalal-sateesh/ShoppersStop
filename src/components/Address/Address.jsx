import { useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import styles from "./Address.module.css";
import { useNavigate } from "react-router-dom";
import route from "../../routes/route.json";

const Address = () => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  const orderPlaceHandler = () => {
    if (!(street && city && state && pincode)) {
      errorMsgHandler("All feilds are Mandatory!!!");
      return;
    }
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate(`${route.HOME}`);
      }, 2000);
    }, 2000);
  };

  const errorMsgHandler = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  return (
    <>
      {showAlert && (
        <div
          className={`alert alert-success mt-3 ${styles.alert}`}
          role="alert"
        >
          Order Placed Successfully!!!
        </div>
      )}
      <div className="mb-4 mt-5 d-inline-block p-4 border border-2 text-black bg-white rounded">
        <Row className="mt-3 fs-5">
          <Col>
            <label htmlFor="street">Street/Village</label>
          </Col>
          <Col>
            <input
              id="street"
              onChange={(e) => setStreet(e.target.value)}
            ></input>
          </Col>
        </Row>
        <Row className="mt-3 fs-5">
          <Col>
            <label htmlFor="city">City</label>
          </Col>
          <Col>
            <input id="city" onChange={(e) => setCity(e.target.value)}></input>
          </Col>
        </Row>
        <Row className="mt-3 fs-5">
          <Col>
            <label htmlFor="state">State</label>
          </Col>
          <Col>
            <input
              id="state"
              onChange={(e) => setState(e.target.value)}
            ></input>
          </Col>
        </Row>
        <Row className="mt-3 fs-5">
          <Col>
            <label htmlFor="pincode">Pincode</label>
          </Col>
          <Col>
            <input
              id="pincode"
              type="number"
              onChange={(e) => setPincode(e.target.value)}
            ></input>
          </Col>
        </Row>
        <Row className="mt-4 fs-5">
          <Col>
            <Button
              variant="success"
              onClick={orderPlaceHandler}
              disabled={isLoader}
              className="fs-5 mt-3"
            >
              Place Order
            </Button>
          </Col>
        </Row>
        {isLoader && (
          <Spinner animation="border" variant="primary" className="mt-3" />
        )}
        {errorMsg && (
          <Row className="mt-3 text-danger fw-bold fs-5">
            <p className="fs-5">{errorMsg}</p>
          </Row>
        )}
      </div>
    </>
  );
};

export default Address;
