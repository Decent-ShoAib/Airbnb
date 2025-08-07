import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { GiFamilyHouse } from "react-icons/gi";
import { GiVikingLonghouse } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { GiWoodCabin } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { useContext } from 'react';
import { listingDataContext } from '../context/ListingContex';

function ListingPage2() {

    let navigate = useNavigate()
    let { category, setCategory } = useContext(listingDataContext)
    return (

        <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto ">

            <div className="w-[50-px] h-[50px] bg-red-500 absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center"><FaRegArrowAltCircleLeft className="w-[40-px] h-[40px] text-[50px] text-white" onClick={() => navigate('/')} /></div>

            <div className='w-[180px] h-[40px] text-[18px] bg-red-500 text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg px-[10px]'>
                Set Your Category
            </div>

            <div className={` max-w-[900px] w-[100%] h-[550px] overflow-auto bg-white flex items-center justify-start flex-col gap-[40px] mt-[30px] `}>
                <h1 className='text-[18px] text-[black] md:text-[30px] px-[10px] '>Which of these best describes your place?</h1>

                <div className='max-w-[900px] w-[100%] h-[100%] flex flex-wrap items-center justify-center gap-[15px] md:w-[70%]'>

                    <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-red-400 text-[16px] rounded-lg ${category == "villa" ? "border-3 border-red-400" : ""}`} onClick={() => setCategory("villa")}>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-[black]' /><h3>Villa</h3>
                    </div>

                    <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-red-400 text-[16px] rounded-lg ${category == "farmHouse" ? "border-3 border-red-400" : ""}`} onClick={() => setCategory("farmHouse")}>
                        <GiVikingLonghouse className='w-[30px] h-[30px] text-[black]' /><h3>Farm House</h3>
                    </div>

                    <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-red-400 text-[16px] rounded-lg ${category == "poolHouse" ? "border-3 border-red-400" : ""}`} onClick={() => setCategory("poolHouse")}>
                        <MdPool className='w-[30px] h-[30px] text-[black]' /><h3>Pool House</h3>
                    </div>

                    <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-red-400 text-[16px] rounded-lg ${category == "rooms" ? "border-3 border-red-400" : ""}`} onClick={() => setCategory("rooms")}>
                        <MdBedroomParent className='w-[30px] h-[30px] text-[black]' /><h3>Rooms</h3>
                    </div>

                    <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-red-400 text-[16px] rounded-lg ${category == "flat" ? "border-3 border-red-400" : ""}`} onClick={() => setCategory("flat")}>
                        <FaBuilding className='w-[30px] h-[30px] text-[black]' /><h3>Flat</h3>
                    </div>
                   

                <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-red-400 text-[16px] rounded-lg ${category == "pg" ? "border-3 border-red-400" : ""}`} onClick={() => setCategory("pg")} >
                    <IoBedOutline className='w-[30px] h-[30px] text-[black]' /><h3>PG</h3>
                </div>

                <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-red-400 text-[16px] rounded-lg ${category == "cabin" ? "border-3 border-red-400" : ""}`} onClick={() => setCategory("cabin")}>
                    <GiWoodCabin className='w-[30px] h-[30px] text-[black]' /><h3>Cabin</h3>
                </div>

                <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-red-400 text-[16px] rounded-lg ${category == "shops" ? "border-3 border-red-400" : ""}`} onClick={() => setCategory("shops")}>
                    <BsShop className='w-[30px] h-[30px] text-[black]' /><h3>Shops</h3>
                </div>


            </div>
            <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg absolute right-[5%] bottom-[5%]' onClick={() => navigate("/listingpage3")} >Next</button>
        </div>

        </div >
    )
}

export default ListingPage2