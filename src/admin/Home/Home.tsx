import { Outlet } from "react-router-dom";
import Header from "../page/Shared/Header";
import Sidebar from "../page/Shared/Sidebar";


export default function Home() {
  return (
    <div className=" grid grid-cols-12 gap-2">
        <div className=" col-span-2 bg-slate-800"><Sidebar></Sidebar></div>
        <div className=" col-span-10"><Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
         </div>
    </div>
  )
}
