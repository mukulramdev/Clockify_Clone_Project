import {
  Termdiv,
  Ordiv,
  Span,
  Button,
  Input,
  Checkbox,
  TermSpan,
  ButtonImg,
  UlDive,
  Tring,
  LoginPhotoDive,
  LoginSide,
  Loginnewspan,
  LoginPagePhoto,
  Logininputdiv
} from "./Signup_style";
import { LoginNav } from "./loginnav";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";
const Spindiv = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`
const obj = {
  email: "",
  password: "",
};
export const Login = () => {
  const [loding,Setloding] = React.useState(false);
  const [box, SetChheckbox] = React.useState(true);
  const [data, setdata] = React.useState(obj);
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const Checkuser = () => {
    Setloding(true)
    fetch("https://user-data-for-react.herokuapp.com/profile")
      .then((res) => res.json())
      .then((res) => {
        let user = res.find(
          (el) => el.email === data.email && el.password === data.password
        );
        if (user) {
          alert("login sucsess");
          localStorage.setItem("userdata", JSON.stringify(user));
          Setloding(false)
          navigate("/Tracker");
        } else {
          Setloding(false)
          alert(
            "No user found please signup before login Or worng email or password"
          );
        }
      })
      .catch(() => alert("somthing went wrong !!"));
  };
  const handlelogin = () => {
    !box
      ? alert("please accept conditon by checkbox")
      : data.email === ""
      ? alert("please enter email first")
      : data.password.length < 8
      ? alert("please enter right password")
      : Checkuser();
      
        
      
  };
  return (
    loding ? <Spindiv>
    <h1>Checking Details please wait</h1>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></Spindiv> :
    <LoginPhotoDive>
      <div>
        <LoginNav />
        <Logininputdiv>
          <h1>Login</h1>
          <Input
            name="email"
            type="text"
            placeholder="Enter email"
            onChange={handlechange}
          />
          <Input
            name="password"
            type="text"
            placeholder="Enter password"
            onChange={handlechange}
          />
          <Termdiv>
            <Checkbox
              type="checkbox"
              checked={box}
              onChange={() => SetChheckbox(!box)}
            />
            <p>
              Stay logged in <TermSpan> Forgot password?</TermSpan>
            </p>
          </Termdiv>
          <Button onClick={handlelogin} color="white" bacground="blue">
            LOG IN
          </Button>
          <Ordiv>
            <hr />
            <Span>OR</Span>
          </Ordiv>
          <Button>
            <ButtonImg
              src="https://app.clockify.me/assets/ui-icons/icon-google.svg"
              alt=""
            />
            Continue with Google
          </Button>
        </Logininputdiv>
        <UlDive>
          <img
            src="https://app.clockify.me/assets/ui-icons/translate.svg"
            alt=""
          />
          <span>English</span>
          <Tring />
        </UlDive>
        <UlDive>
          <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="" />
          <span>Your data is safe with us:</span>
          <TermSpan>Security Privacy</TermSpan>
        </UlDive>
      </div>
      <LoginSide>
        <Loginnewspan>NEW</Loginnewspan>
        <h1>Scheduling</h1>
        <p>
          Visualize projects on a timeline and plan team's capacity (see who's
          busy and who's available).
        </p>
        <Button color="white" bacground="black" border="none">
          SEE HOW IT WORKS
        </Button>
        <LoginPagePhoto
          src="https://app.clockify.me/assets/features-info/scheduling-promo.webp"
          alt="loginemage"
        />
      </LoginSide>
    </LoginPhotoDive>
  );
};
