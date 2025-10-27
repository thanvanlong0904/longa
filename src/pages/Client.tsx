import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Client() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
