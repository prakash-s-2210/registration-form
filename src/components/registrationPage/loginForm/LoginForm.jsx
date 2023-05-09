import React, { useState } from "react";
import "../loginForm/LoginForm.scss";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "../../../state/index";
import Input from "../customInput/Input";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const state = useSelector((state)=>state.user)
  const [pageType, setPageType] = useState("register");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    if(values){
        dispatch(
        setRegister({
            user: values,
        })
        )
    }
    onSubmitProps.resetForm();
    setPageType("login");
  };
  const login = async (values, onSubmitProps) => {
    if(values.email === state.email && values.password === state.password){
        navigate("/home");
        // onSubmitProps.resetForm();
        
    }
    else{
        onSubmitProps.resetForm();
        setPageType("register");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {(props) => (
        <Form>
          {isRegister && (
            <>
              <Input label="First Name" name="firstName" type="text" />
              <Input label="Last Name" name="lastName" type="text" />
            </>
          )}
          <Input label="Email Id" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <div className="button-wrapper">
            <button type="submit">{isLogin ? "LOGIN" : "REGISTER"}</button>
          </div>
          <div
            onClick={() => {
              setPageType(isLogin ? "register" : "login");
              props.resetForm();
            }}
            className="login-or-register"
          >
            {isLogin
              ? "Don't have an account? Sign Up here."
              : "Already have an account? Login here."}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
