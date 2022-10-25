import React from "react";

const checkEmail = () => {
  let email = document.querySelector(".email").value;

  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  //   console.log(email);
  if (regex.test(email)) return true;

  alert("invalid email");
  return false;
};

export default checkEmail;
