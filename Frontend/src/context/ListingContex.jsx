import { useContext, useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { AuthDataContext } from "./AuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { userDataContex } from "./UserContex"

export const listingDataContext = createContext()

function ListingContext({ children }) {

    let navigate = useNavigate()

    let [frontEndImage1, setFrontEndImage1] = useState(null)
    let [frontEndImage2, setFrontEndImage2] = useState(null)
    let [frontEndImage3, setFrontEndImage3] = useState(null)
    let [backEndImage1, setBackEndImage1] = useState(null)
    let [backEndImage2, setBackEndImage2] = useState(null)
    let [backEndImage3, setBackEndImage3] = useState(null)

    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    let [rent, setRent] = useState("")
    let [city, setCity] = useState("")
    let [landmark, setLandmark] = useState("")
    let [category, setCategory] = useState("")

    let [adding, setAdding] = useState(false)
    let [deleting, setDeleting] = useState(false)

    let [listingData, setListingData] = useState([])
    let [newListData, setNewListData] = useState([])

    const [cardDetails, setCardDetails] = useState(null)

    const [searchData, setSearchData] = useState([])

    let { serverUrl } = useContext(AuthDataContext)
    let { userData } = useContext(userDataContex)

    //////     add listing   /////
    const handleAddListing = async () => {
        setAdding(true)
        try {
            let formData = new FormData()
            formData.append("image1", backEndImage1)
            formData.append("image2", backEndImage2)
            formData.append("image3", backEndImage3)
            formData.append("title", title)
            formData.append("description", description)
            formData.append("rent", rent)
            formData.append("city", city)
            formData.append("landmark", landmark)
            formData.append("category", category)

            let result = await axios.post(serverUrl + "/api/listing/add", formData, { withCredentials: true })
            console.log(result)
            setAdding(false)

            setTitle("")
            setDescription("")
            setFrontEndImage1(null)
            setFrontEndImage2(null)
            setFrontEndImage3(null)
            setBackEndImage1(null)
            setBackEndImage2(null)
            setBackEndImage3(null)
            setRent("")
            setCity("")
            setLandmark("")
            setCategory("")

            toast.success("Listing Created Successfully")

            navigate("/")

        } catch (error) {
            toast.error(error.response.data.message)
            console.log(`add listing ${error}`)
            setAdding(false)
        }
    }

/////      get listing   ///////

    const getListing = async () => {
        try {
            let result = await axios.get(serverUrl + "api/listing/get", { withCredentials: true })
            setListingData(result.data)
            setNewListData(result.data)
        } catch (error) {
            console.log("get listing error:", error)
        }
    }
useEffect(()=>{
    getListing()
},[adding, deleting, userData])

///////////     view card (listing find by id)  ///////

const handleViewCard = async (id)=>{
    try {
         let cardResult = await axios.get(serverUrl + `/api/listing/findlistingbyid/${id}`, {withCredentials: true})
         console.log(cardResult.data)
         setCardDetails(cardResult.data)
         navigate("/viewcard")
    } catch (error) {
        console.log(`handle view card ${error}`)
    }
}

///////////     Search Handler    /////////

const searchHandler = async (data)=>{
    try {
        if (!data || data.trim() === "") {
      setSearchData([]);  // Empty input means clear search
      return;
    }
        let result = await axios.get(serverUrl + `/api/listing/search?query=${data}`, {withCredentials: true})
        setSearchData(result.data)
    } catch (error) {
        setSearchData(null)
        return console.log(`search bar error ${error}`)
    }
}


    let value = {
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
        adding, setAdding,
        listingData, setListingData,
        newListData, setNewListData,
        cardDetails, setCardDetails,
        deleting, setDeleting,
        searchData, setSearchData,

        handleAddListing,
        handleViewCard,
        searchHandler,

    }
    return (

        <listingDataContext.Provider value={value} >
            <>
                {children}
            </>
        </listingDataContext.Provider>
    )
}

export default ListingContext