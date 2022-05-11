import axios from "axios";
import { createProxyProxy } from "immer/dist/internal";
import React, { Children, ReactNode, useEffect } from "react";
import Navbar, { NavbarProps } from "./Navbar";

function NavbarContainer (props: any){
  useEffect(()=>{
    axios.get(`https://gentle-fortress-75399.herokuapp.com/users/{id}`)
    .then(response => {
      const result = response.data;
      
    })

  })
  return <Navbar {...props.children} />
}
export default NavbarContainer;