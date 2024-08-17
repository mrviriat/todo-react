import React from "react";
import Container from "react-bootstrap/Container";
import loginBg from "../img/login_bg.jpg";
import Image from "react-bootstrap/Image";

const css = {
  image: {
    objectFit: "cover",
  },
};

export default function Login() {

  return (
    <Container fluid className="mt-0 position-absolute w-100 h-100">
      <Image
          src={loginBg}
          fluid
          className="w-100 h-100"
          style={css.image}
      />
    </Container>
  );
}
