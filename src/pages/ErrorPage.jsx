import { Link, useNavigate } from "react-router-dom";
import route from "../routes/route.json";
import { useEffect, useState } from "react";

const ErrorPage = () => {
  const [timer, setTimer] = useState(5);
  const navigation = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      navigation(route.HOME);
    }
  }, [navigation, timer]);

  return (
    <div style={{ marginTop: "100px",marginBottom:"200px" }}>
      <h2 className="text-danger">Error: 404 Page Not Found!!!</h2>
      <p>
        Please click on the link to redirect to{" "}
        <Link to={route.HOME}>Home</Link> Page
      </p>
      <p>Or,you will auto redirect to Home page in {timer} sec.</p>
    </div>
  );
};

export default ErrorPage;
