import { useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import route from "../../routes/route.json";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoader, seIsLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const resetFormHandler = () => {
    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setConformPassword("");
  };

  const successMsgHandler = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg("");
      navigate(`/${route.LOGIN}`);
    }, 5000);
  };

  const errorMsgHandler = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  };

  const signinHandler = () => {
    if (!(fullName && userName && email && password && conformPassword)) {
      errorMsgHandler("All fields are required!!!");
      return;
    }
    seIsLoader(true);
    setTimeout(() => {
      seIsLoader(false);
      if (fullName && userName && email && password && conformPassword) {
        resetFormHandler();
        successMsgHandler("Signin Successful!!!");
      } else {
        errorMsgHandler("Invalid Credentials!!!");
      }
    }, 3000);
  };

  return (
    <div
      className="mt-4 mb-4 d-inline-block p-4 border border-2 text-black bg-white rounded"
    >
      <Row className="mt-3 fs-5">
        <Col>
          <label>Full Name </label>
        </Col>
        <Col>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="mt-3 fs-5">
        <Col>
          <label>User Name </label>
        </Col>
        <Col>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="mt-3 fs-5">
        <Col>
          <label>Email </label>
        </Col>
        <Col>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="mt-3 fs-5">
        <Col>
          <label>password</label>
        </Col>
        <Col>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="mt-3 fs-5">
        <Col>
          <label>Confirm Password</label>
        </Col>
        <Col>
          <input
            type="password"
            value={conformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="mt-3 fs-5">
        <Col>
          <Button
            variant="primary"
            onClick={signinHandler}
            disabled={isLoader}
            className="fs-5"
          >
            Sign in
          </Button>
        </Col>
        <Col>
          {!isLoader && (
            <Button variant="link" onClick={resetFormHandler} className="fs-5">
              Reset Form
            </Button>
          )}
        </Col>
      </Row>
      {!isLoader && (
        <div className="mt-2 fs-5">
          <Button
            variant="link"
            onClick={() => navigate(`/${route.LOGIN}`)}
            className="fs-5"
          >
            Already have account ?
          </Button>
        </div>
      )}
      {isLoader && <Spinner animation="border" variant="primary" />}
      {successMsg && (
        <Row className="mt-3 text-success fw-bold fs-5">
          <p>{successMsg}</p>
        </Row>
      )}
      {errorMsg && (
        <Row className="mt-3 text-danger fw-bold fs-5">
          <p>{errorMsg}</p>
        </Row>
      )}
    </div>
  );
};
export default Signup;
