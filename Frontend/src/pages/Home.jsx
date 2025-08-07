import { useContext } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { listingDataContext } from '../context/ListingContex'

function Home() {

  let { listingData, setListingData, newListData, setNewListData } = useContext(listingDataContext)
  return (
    <div >
      <Navbar />
      <div className='w-[100%] flex items-center justify-center gap-[30px] flex-wrap mt-[250px] md:mt-[180px]'>
        {newListData.map((list) => <Card key={list._id} title={list.title} landmark={list.landmark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id={list._id} />)}
      </div>
    </div>
  )
}

export default Home