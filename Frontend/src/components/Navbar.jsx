import logo from '../assets/Airbnb-logo.svg'
import axios from 'axios';
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FaHotjar } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { GiVikingLonghouse } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { GiWoodCabin } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthDataContext } from '../context/AuthContext';
import { userDataContex } from '../context/UserContex';
import { listingDataContext } from '../context/ListingContex';
import { toast } from 'react-toastify';


function Navbar() {

    const [showPopup, setShowPopup] = useState(false)
    const [categ, setCateg] = useState()
    let [input, setInput] = useState("")

    let navigate = useNavigate()

    let { serverUrl } = useContext(AuthDataContext)
    let { userData, setUserData } = useContext(userDataContex);
    let { listingData, setListingData, newListData, setNewListData, searchHandler, searchData, handleViewCard } = useContext(listingDataContext)

    //////////     log out handler      /////////////

    const handleLogout = async () => {
        try {
            let result = await axios.post(serverUrl + '/api/auth/logout', {}, { withCredentials: true })
            setUserData(null)
            toast.success("LogOut Successfully")
        } catch (error) {
            console.log("logout error", error.message);
            toast.error(error.response.data.message)
        }
    }


    //////////     Category handler  (2nd nav)              /////////////

    const handleCategory = (category) => {
        setCateg(category)

        if (category == "trending") {
            setNewListData(listingData)
            console.log(newListData)
            console.log(category + categ)
        }
        else {
            setNewListData(listingData.filter((list) => list.category?.toLowerCase() == category.toLowerCase()))
        }
    }
    //////////    view card from search bar /////

    const handleCardClick = (id) => {
        if (userData) {
            handleViewCard(id)
        }
        else {
            navigate("/login")
        }
    }


    useEffect(() => {
        searchHandler(input)
    }, [input])


    return (
        <div className='fixed top-0 z-20 bg-white'>
            <div className="w-[100vw] min-h-[70px] h-[90px] border-b-[1px] border-gray-400 flex items-center justify-between px-[35px] md:px-[40px]">
                <div >
                    <img src={logo} alt="" className='w-[170px]' />
                </div>

                {/* search bar */}

                <div className='w-[35%] relative md:block hidden'>
                    <input type="text" className="border-[2px] border-red-400 outline-none w-[100%] rounded-[30px]    py-[10px] px-[30px] text-[17px] overflow-auto text-gray-400" placeholder="Any Where  |  Any Location  |  Any City" onChange={(e) => setInput(e.target.value)} value={input} />

                    <button className='absolute top-[5px] right-[1%] rounded-[50px] p-[10px] bg-red-500'><IoSearchOutline className='text-white w-[20px] h-[20px]' /></button>
                </div>

                <div className='flex items-center justify-center gap-[10px] relative'>
                    <span className='px-[12px] py-[5px] border-2 border-gray-300 hover:bg-gray-300 text-[20px] rounded-[50px] md:block hidden cursor-pointer' onClick={() => { navigate("/listingpage1") }}>List your Home</span>

                    <button onClick={() => setShowPopup(!showPopup)} className='flex gap-[10px] items-center justify-center border-[1px] border-gray-300 rounded-[50px] p-[10px]'><span><RxHamburgerMenu className='w-[25px] h-[25px]' /></span>

                        {userData == null ? <span><CgProfile className='w-[25px] h-[25px]' /></span> :

                            <span className='bg-[black] h-[40px] w-[40px] rounded-full text-white flex justify-center items-center text-[30px]'>{userData?.name.slice(0, 1)}</span>}


                    </button>

                    {/* log out section */}

                    {showPopup && <div className='w-[220px] h-[250px] bg-gray-100 border-2 border-gray-300 rounded-lg z-10 absolute top-[140%]'>
                        <ul className='w-[100%] h-[100%] text-[19px] flex items-start justify-around flex-col py-[10px]'>

                            {!userData && <li onClick={() => { navigate('/login'), setShowPopup(false) }} className='w-[100%] px-[15px] py-[9px] cursor-pointer hover:bg-gray-300'>Login</li>}

                            {userData && <li onClick={() => { handleLogout(), setShowPopup(false) }} className='w-[100%] px-[15px] py-[9px] cursor-pointer hover:bg-gray-300'>Logout</li>}

                            <div className='w-[100%] border-[1px] border-gray-300'></div>
                            <li className='w-[100%] px-[15px] py-[9px] cursor-pointer hover:bg-gray-300' onClick={() => { navigate("/listingpage1") }}>List Your Home</li>

                            <li className='w-[100%] px-[15px] py-[9px] cursor-pointer hover:bg-gray-300' onClick={() => { navigate('/mylisting'), setShowPopup(false) }}>My Listing</li>

                            <li className='w-[100%] px-[15px] py-[9px] cursor-pointer hover:bg-gray-300'>Check Booking</li>
                        </ul>
                    </div>}
                </div>
                {/* ////////////    searh data on search baar             ////////////////// */}

                {searchData?.length > 0 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] max-w-xl max-h-72 overflow-auto bg-white rounded-lg shadow-lg z-50">
                        {searchData.map((search) => (
                            <div
                                key={search._id}
                                className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition duration-200"
                                onClick={() => handleCardClick(search._id)}
                            >
                                <p className="text-base font-medium text-gray-800">{search.title}</p>
                                <p className="text-sm text-gray-500">{search.city} — {search.landmark}</p>
                            </div>
                        ))}
                    </div>
                )}


            </div>

            {/* for mobile search bar */}

            <div className='w-[100%] h-[50px] flex items-center justify-center md:hidden '>
                <div className='w-[90%] relative '>
                    <input type="text" className='w-[100%] mt-[8px] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px] text-[17px]' placeholder="Any Where  |  Any Location  |  Any City" onChange={(e) => setInput(e.target.value)} value={input} />

                    <button className='absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[12px]'><IoSearchOutline className='text-white w-[20px] h-[20px]' /></button>
                </div>
            </div>


            {/* second nav  */}


            <div className='w-[100vw] h-[85px] bg-white flex items-center justify-start cursor-pointer gap-[40px] overflow-auto md:justify-center px-[15px]'>

                <div className={`flex items-center justify-center flex-col text-[13px] hover:border-b-2 cursor-pointer border-red-500 ${categ == "trending" ? "border-b-2 border-red-500" : ""}`} onClick={() => { { handleCategory("trending") } }}>
                    <FaHotjar className='w-[30px] h-[30px] text-black' />
                    <h3>Trending</h3>
                </div>

                <div className={`flex items-center justify-center flex-col text-[13px] hover:border-b-2 cursor-pointer border-red-500 text-nowrap ${categ == "villa" ? "border-b-2 border-red-500" : ""}`} onClick={() => { handleCategory("villa") }}>
                    <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                    <h3>Villa</h3>
                </div>

                <div className={`flex items-center justify-center flex-col text-[13px] hover:border-b-2 cursor-pointer border-red-500 text-nowrap ${categ == "farmhouse" ? "border-b-2 border-red-500" : ""}`} onClick={() => { handleCategory("farmhouse") }}>
                    <GiVikingLonghouse className='w-[30px] h-[30px] text-black' />
                    <h3>Farm House</h3>
                </div>

                <div className={`flex items-center justify-center flex-col text-[13px] hover:border-b-2 cursor-pointer border-red-500 text-nowrap ${categ == "Pool House" ? "border-b-2 border-red-500" : ""}`} onClick={() => { handleCategory("Pool House") }}>
                    <MdPool className='w-[30px] h-[30px] text-black' />
                    <h3>Pool House</h3>
                </div>

                <div className={`flex items-center justify-center flex-col text-[13px] hover:border-b-2 cursor-pointer border-red-500 text-nowrap ${categ == "rooms" ? "border-b-2 border-red-500" : ""}`} onClick={() => { handleCategory("rooms") }}>
                    <MdBedroomParent className='w-[30px] h-[30px] text-black' />
                    <h3>Rooms</h3>
                </div>

                <div className={`flex items-center justify-center flex-col text-[13px] hover:border-b-2 cursor-pointer border-red-500 text-nowrap ${categ == "flat" ? "border-b-2 border-red-500" : ""}`} onClick={() => { handleCategory("flat") }}>
                    <FaBuilding className='w-[30px] h-[30px] text-black' />
                    <h3>Flat</h3>
                </div>

                <div className={`flex items-center justify-center flex-col text-[13px] hover:border-b-2 cursor-pointer border-red-500 text-nowrap ${categ == "pg" ? "border-b-2 border-red-500" : ""}`} onClick={() => { handleCategory("pg") }}>
                    <IoBedOutline className='w-[30px] h-[30px] text-black' />
                    <h3>PG</h3>
                </div>


                <div className={`flex items-center justify-center flex-col text-[13px] hover:border-b-2 cursor-pointer border-red-500 text-nowrap ${categ == "shops" ? "border-b-2 border-red-500" : ""}`} onClick={() => { handleCategory("shops") }}>
                    <BsShop className='w-[30px] h-[30px] text-black' />
                    <h3>Shops</h3>
                </div>

            </div>
        </div>

    )
}

export default Navbar
