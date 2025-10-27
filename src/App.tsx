import { Route,  Routes } from "react-router-dom";
import Home from "./admin/Home/Home";
import List from "./admin/page/Product/List";
import Add from "./admin/page/Product/Add";
import Edit from "./admin/page/Product/Edit";

import Client from "./pages/Client";
import HomeIndex from "./pages/Home/HomeIndex";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Client></Client>} >
      <Route index element={<HomeIndex></HomeIndex>} ></Route>
      <Route index element={<HomeIndex></HomeIndex>} ></Route>
      </Route>
    </Routes>
      <Routes>
        <Route path="admin" element={<Home></Home>}>
        <Route index element={<List></List>}></Route>
        <Route path="product/add" element={<Add></Add>}></Route>
        <Route path="product/edit/:id" element={<Edit></Edit>}></Route>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
