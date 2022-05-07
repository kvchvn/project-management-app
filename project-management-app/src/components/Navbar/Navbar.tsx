import { ReactNode } from "react";

type NavbarProps = {
  children: ReactNode;
}

function Navbar(props: NavbarProps){
  return <nav>{props.children}</nav>;
}

export default Navbar;