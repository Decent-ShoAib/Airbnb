import { useNavigate } from "react-router-dom"
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { useContext } from "react"
import { listingDataContext } from "../context/ListingContex"

function ListingPage1() {

  let navigate = useNavigate()

  let {
    frontEndImage1, setFrontEndImage1,
    frontEndImage2, setFrontEndImage2,
    frontEndImage3, setFrontEndImage3,
    backEndImage1, setBackEndImage1,
    backEndImage2, setBackEndImage2,
    backEndImage3, setBackEndImage3,
    title, setTitle,
    description, setDescription,
    rent, setRent,
    city, setCity,
    landmark, setLandmark,
    category, setCategory,
  } = useContext(listingDataContext)

let handleImage1 = (e)=>{
  let file = e.target.files[0] 
  setBackEndImage1(file)
  setFrontEndImage1(URL.createObjectURL(file))
}

let handleImage2 = (e)=>{
  let file = e.target.files[0] 
  setBackEndImage2(file)
  setFrontEndImage2(URL.createObjectURL(file))
}

let handleImage3 = (e)=>{
  let file = e.target.files[0] 
  setBackEndImage3(file)
  setFrontEndImage3(URL.createObjectURL(file))
}

  return (
    <div className="w-[100%] h-[100%] bg-white flex items-center justify-center relative overflow-auto">


      <form action="" className='max-w-[900px] w-[90%] h-[550px] flex justify-start flex-col gap-[10px] items-center md:items-start mb-[20px] overflow-auto mt-[80px] scrollbar-hide' onSubmit={(e)=> {e.preventDefault(), navigate("/listingpage2")}}>

        <div className="w-[50-px] h-[50px] bg-red-500 absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center"><FaRegArrowAltCircleLeft className="w-[40-px] h-[40px] text-[50px] text-white" onClick={() => navigate('/')} /></div>

        <div className='w-[170px] h-[40px] text-[18px] bg-red-500 text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg'>
          SetUp Your Home
        </div>

        <div className='w-[90%] flex items-start justify-start flex-col mt-[20px]'>
          <label htmlFor="title" className='text-[20px]'>Title:</label>
          <input required type="text" id="title" className='w-[90%] h-[40px] border-[2px] border-gray-500 rounded-lg text-[18px] px-[20px]' onChange={(e)=> setTitle(e.target.value)} value={title} />
        </div>

        <div className='w-[90%] flex items-start justify-start flex-col mt-[20px]'>
          <label htmlFor="des" className='text-[20px]'>Description:</label>
          <textarea required type="text" id="title" className='w-[90%] h-[80px] border-[2px] border-gray-500 rounded-lg text-[18px] px-[20px]' onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>
        </div>

        <div className='w-[90%] flex items-start justify-center flex-col gap-[10px]'>
          <label htmlFor="img1" className='text-[20px]'>Image 1:</label>
          <div className='flex items-center justify-start  w-[90%] h-[40px] border-gray-500 border-2 rounded-[10px] '><input type="file" id='img1' className='w-[40%] text-[15px] px-[10px] ' required onChange={handleImage1}/>
          </div>
        </div>

        <div className='w-[90%] flex items-start justify-center flex-col gap-[10px]'>
          <label htmlFor="img2" className='text-[20px]'>Image 2:</label>
          <div className='flex items-center justify-start  w-[90%] h-[40px] border-gray-500 border-2 rounded-[10px]'><input type="file" id='img2' className='w-[100%] text-[15px] px-[10px] ' required onChange={handleImage2}/>
          </div>
        </div>

        <div className='w-[90%] flex items-start justify-center flex-col gap-[10px]'>
          <label htmlFor="img3" className='text-[20px]'>Image 3:</label>
          <div className='flex items-center justify-start  w-[90%] h-[40px] border-gray-500 border-2 rounded-[10px]'><input type="file" id='img3' className='w-[100%] text-[15px] px-[10px] ' required onChange={handleImage3}/>
          </div>
        </div>

        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
          <label htmlFor="rent" className='text-[20px]'>Rent:</label>
          <input type="number" id='rent' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required placeholder='Rs.______/day' onChange={(e)=> setRent(e.target.value)} value={rent}/>
        </div>

        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
          <label htmlFor="city" className='text-[20px]'>City:</label>
          <input type="text" id='city' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required placeholder='city,country' onChange={(e)=> setCity(e.target.value)} value={city}/>
        </div>

        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
          <label htmlFor="landmark" className='text-[20px]'>Landmark:</label>
          <input type="text" id='landmark' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=> setLandmark(e.target.value)} value={landmark}/>
        </div>

        <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg '>Next</button>


      </form>

    </div>
  )
}

export default ListingPage1