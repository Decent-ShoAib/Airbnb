import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { AuthDataContext } from "../context/AuthContext";
import axios from 'axios';
import { userDataContex } from "../context/UserContex";
import { toast } from "react-toastify";


function SignUp() {
  const [showpass, setshowpass] = useState(false)

  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate()

  let { serverUrl } = useContext(AuthDataContext)

  let {userData, setUserData} = useContext(userDataContex)

  const handleSignUp = async (e) => {
    try {
      e.preventDefault()
      let result = await axios.post(serverUrl + "/api/auth/signup", { name, email, password, }, { withCredentials: true })
      setname("")
      setEmail("")
      setPassword("")
      setUserData(result.data)
      navigate("/")
      console.log(result);
      toast.success("Account Created")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>

      <div className="w-[50-px] h-[50px] bg-red-500 absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center"><FaRegArrowAltCircleLeft className="w-[40-px] h-[40px] text-[50px] text-white" onClick={() => navigate('/')} /></div>

      <form action="" onSubmit={handleSignUp} className='max-w-[900px] w-[90%] h-[600px] flex justify-center flex-col gap-[10px] items-center md:items-start'>

        <h1 className='text-[30px] text-red-400 '>Welcome to Airbnb</h1>

        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[10px]'>
          <label htmlFor="name" className='text-[20px]'>UserName</label>
            <input required onChange={(e)=> setname(e.target.value)} value={name} type="text" id='name' className='w-[90%] h-[40px] border-[2px] border-gray-500 rounded-lg text-[18px] px-[20px]' />
        </div>

        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[10px]'>
          <label htmlFor="email" className='text-[20px]'>Email</label>
          <input required onChange={(e)=> setEmail(e.target.value)} value={email} type="text" id='email' className='w-[90%] h-[40px] border-[2px] border-gray-500 rounded-lg text-[18px] px-[20px]' />
        </div>

        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[10px] relative'>
          <label htmlFor="password" className='text-[20px]'>Password</label>

          <input required onChange={(e)=> setPassword(e.target.value)} value={password} type={showpass ? "text" : "password"} id='password' className='w-[90%] h-[40px] border-[2px] border-gray-500 rounded-lg text-[18px] px-[20px]' />

          {!showpass && <FaEye className="w-[18px] h-[18px] absolute right-[12%] bottom-[10px]" onClick={() => setshowpass(!showpass)} />}

          {showpass && <FaEyeSlash className="w-[18px] h-[18px] absolute right-[12%] bottom-[10px]" onClick={() => setshowpass(!showpass)} />}


        </div>

        <button className='bg-red-500 text-[18px] rounded-lg px-[50px] py-[10px] mb-[20px] mt-[20px]'>Sign Up </button>

        <p className='text-[17px]'>Already have an account? <span className='text-[19px] text-red-500 cursor-pointer' onClick={() => navigate('/login')}>Login</span></p>

      </form>
    </div>
  )
}

export default SignUp

