import { useContext } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { userDataContex } from '../context/UserContex'
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

function MyListing() {

    let {userData} = useContext(userDataContex);
    let navigate = useNavigate();

    return (
        <div className='w-[100%] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative  px-[20px]'>
            <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[7%] left-[20px] rounded-[50%] flex items-center justify-center ' onClick={() => navigate("/")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>

            <div className='w-[60%] h-[10%] border-[2px] border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold  mt-[50px] md:w-[600px] text-nowrap'>MY LISTING</div>
            <div className='w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px] '>
                {userData.listing.map((list) => (
                    <Card key={list._id} title={list.title} landmark={list.landmark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id={list._id} host={list.host} />
                ))}

            </div>


        </div>
    )
}

export default MyListing