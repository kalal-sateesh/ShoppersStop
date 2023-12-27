import Signup from "../components/Signup/Signup";

const SignupPage = () => {
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <h1>Sign up</h1>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          fontFamily: "Arial",
          fontSize: "20px",
        }}
      >
        to enjoy shopping
      </div>
      <Signup></Signup>
    </div>
  );
};
export default SignupPage;
