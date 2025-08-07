import React from 'react'
import { useContext } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { listingDataContext } from '../context/ListingContex'
import { useNavigate } from 'react-router-dom'
import { userDataContex } from '../context/UserContex'
import axios from 'axios'
import { AuthDataContext } from '../context/AuthContext'
import { toast } from 'react-toastify'

function ViewCard() {

    let { cardDetails, setCardDetails,deleting, setDeleting } = useContext(listingDataContext)
    let { userData } = useContext(userDataContex)
    let { serverUrl } = useContext(AuthDataContext)
    
    let navigate = useNavigate()

//////////      delete listing        ////////

const deleteListing = async ()=>{
    setDeleting(true)
    try {
        const result = await axios.delete(serverUrl + `/api/listing/listingdelete/${cardDetails._id}`, {withCredentials: true})
        toast.success("Listing Deleted")
        navigate("/")
        console.log(result.data)
        setDeleting(false)
    } catch (error) {
        setDeleting(false)
        console.log("delete listing error", error)
        toast.error(error.response.data.message)
    }
}

    return (
        <>
            <div className='w-[100vw] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto  relative'>
                <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>

                <div className='w-[95%]  flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]'>
                    <h1 className='text-[20px]  text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden px-[70px] md:px-[0px]'>
                        {`In ${cardDetails.landmark.toUpperCase()} , ${cardDetails.city.toUpperCase()}`}
                    </h1>
                </div>

                <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row '>
                    <div className='w-[100%]  h-[65%]  md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] '>
                        <img src={cardDetails.image1} alt="" className='w-[100%]' />
                    </div>
                    <div className='w-[100%] h-[50%]  flex  items-center justify-center md:w-[50%] md:h-[100%] md:flex-col'>
                        <div className='w-[100%] h-[100%]  overflow-hidden  flex items-center justify-center border-[2px] border-white '>
                            <img src={cardDetails.image2} alt="" className='w-[100%]' />
                        </div>
                        <div className='w-[100%] h-[100%]  overflow-hidden  flex items-center justify-center border-[2px] border-white'>
                            <img src={cardDetails.image3} alt="" className='w-[100%]' />
                        </div>
                    </div>

                </div>
                <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`${cardDetails.title.toUpperCase()} ${cardDetails.category.toUpperCase()} , ${cardDetails.landmark.toUpperCase()}`}</div>
                <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] text-gray-800'>{cardDetails.description}</div>
                <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`Rs.${cardDetails.rent}/day`}</div>

                <div className='w-[95%] h-[50px] flex gap-4 items-center justify-start md:px-[100px] px-[10px]'>{cardDetails.host == userData._id && <button className='px-[30px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[50px] rounded-lg  text-nowrap'>
                    Edit listing
                </button>}
                    {cardDetails.host != userData._id && <button className='px-[30px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[50px] rounded-lg   text-nowrap'>
                        Reserve
                    </button>}
                    {cardDetails.host == userData._id && <button className='px-[30px] py-[10px] bg-[black] text-[white] text-[18px] md:px-[50px] rounded-lg   text-nowrap' onClick={()=>{deleteListing()}}>
                        {deleting ? "deleting..." : "delete"}
                    </button>}
                </div>
            </div>
        </>
    )
}

export default ViewCard