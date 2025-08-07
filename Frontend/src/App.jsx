import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ListingPage1 from "./pages/ListingPage1"
import ListingPage2 from "./pages/ListingPage2"
import ListingPage3 from "./pages/ListingPage3"
import { userDataContex } from "./context/UserContex"
import { useContext } from "react"
import MyListing from "./pages/MyListing"
import ViewCard from "./pages/ViewCard"
import { Bounce, ToastContainer, toast } from 'react-toastify';

function App() {
  let { userData } = useContext(userDataContex)

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/listingpage1" element={userData != null ? <ListingPage1 /> : <Navigate Navigate to="/login" />} />
        <Route path="/listingpage2" element={userData != null ? <ListingPage2 /> : <Navigate Navigate to="/" />} />
        <Route path="/listingpage3" element={userData != null ? <ListingPage3 /> : <Navigate Navigate to="/" />} />
        <Route path="/mylisting" element={userData != null ? <MyListing /> : <Navigate Navigate to="/" />} />
        <Route path="/viewcard" element={userData != null ? <ViewCard /> : <Navigate Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App