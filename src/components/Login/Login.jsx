import { useContext, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import route from "../../routes/route.json";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const { loginHandler: contextLoginHandler } = useContext(AuthContext);

  const { addUserDataHandler } = useContext(UserContext);

  const resetFormHandler = () => {
    setUserName("");
    setPassword("");
  };

  const successMsgHandler = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg("");
      navigate(`/${route.CART}`);
    }, 3000);
  };

  const errorMsgHandler = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  };

  const loginHandler = () => {
    if (!(userName && password)) {
      errorMsgHandler("Please enter Username and Password!!!");
      return;
    }
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
      if (userName === password) {
        resetFormHandler();
        successMsgHandler("Successfully Login!!!");
        contextLoginHandler();
        addUserDataHandler({ userName });
      } else {
        errorMsgHandler("Invalid Username and Password!!!");
      }
    }, 2000);
  };

  return (
    <div className="mt-4 mb-4 d-inline-block p-4 border border-2 text-black bg-white rounded">
      <Row className="mt-3 fs-5">
        <Col>
          <label htmlFor="username">User Name</label>
        </Col>
        <Col>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="mt-3 fs-5">
        <Col>
          <label htmlFor="pwd">Password</label>
        </Col>
        <Col>
          <input
            type="password"
            id="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="mt-4 fs-5">
        <Col>
          <Button
            variant="primary"
            onClick={loginHandler}
            disabled={isLoader}
            className="fs-5"
          >
            Login
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
        <div className="mt-4 fs-5">
          <Button
            variant="link"
            onClick={() => navigate(`/${route.SIGNUP}`)}
            className="fs-5"
          >
            Dont have an account ?
          </Button>
        </div>
      )}
      {isLoader && <Spinner animation="border" variant="primary" />}
      {successMsg && (
        <Row className="mt-3 text-success fw-bold fs-5">
          <p className="fs-5">{successMsg}</p>
        </Row>
      )}
      {errorMsg && (
        <Row className="mt-3 text-danger fw-bold fs-5">
          <p className="fs-5">{errorMsg}</p>
        </Row>
      )}
    </div>
  );
};
export default Login;
