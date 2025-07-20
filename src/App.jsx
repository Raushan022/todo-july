import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import AllTodos from "./pages/AllTodos";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alltodos" element={<AllTodos />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
