import React from "react";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";

const Auth = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="col-md-4 mx-auto">
          <h1 className="text-center" style={{ paddingBottom: "30px", marginTop: "100px" }}>
            Login
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
