import uploadOnCoudinary from "../config/cloudinary.js";
import Listing from "../models/listingModel.js";
import User from "../models/userModel.js";

///////      add listing controller      //////

export const addListing = async (req, res) => {
    try {
        let host = req.user_id;
        let { title, description, rent, city, landmark, category } = req.body;

        let image1 = await uploadOnCoudinary(req.files.image1[0].path)
        let image2 = await uploadOnCoudinary(req.files.image2[0].path)
        let image3 = await uploadOnCoudinary(req.files.image3[0].path)

        let listing = await Listing.create({
            title, description, rent, city, landmark, category,
            image1, image2, image3,
            host
        })

        let user = await User.findByIdAndUpdate(host, { $push: { listing: listing._id } }, { new: true })

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(201).json(listing)

    } catch (error) {
      return res.status(500).json({message:`adding listing error:${error}`})
    }
}


///////      get all listing controller      //////

export const getListing = async (req, res) => {
    try {
        let listing = await Listing.find().sort({ createdAt: -1 })
        return res.status(200).json(listing)
    } catch (error) {
        return res.status(500).status({message:`get listing error: ${error}`})
    }
}


/////////       find listing by id         //////////

export const findListing = async (req, res)=>{
    try {
        let {id} = req.params 
        let listing = await Listing.findById(id)
        if(!listing){
           return  res.status(404).json({message: "listing not found"})
        }
        return res.status(200).json(listing)
    } catch (error) {
        return res.status(500).json({message:"find listing error", error})
    }
}


//////////         delete listing     /////////

export const handleDeleteListing = async (req, res)=>{
    try {
        let {id} = req.params;
        let listing = await Listing.findByIdAndDelete(id);
        let user = await User.findByIdAndUpdate( listing.host,{$pull:{listing:listing._id}}, {new: true})
        if(!user){
          return res.status(404).json({message:"user is not found"})
        }
        return res.status(200).json({message: "Listing delete"})
    } catch (error) {
        return res.status(500).json({message: `delete listing error ${error}`})
    }
}



//////////   Search baar controller    ///////////

export const searchController = async (req, res)=>{
    try {
        let {query} = req.query;
        if(!query){
            return res.status(400).json({message: "search query is required"})
        }
        const listing = await Listing.find({
            $or:[
                {landmark: {$regex: query, $options: "i"}},
                {title: {$regex: query, $options: "i"}},
                {city: {$regex: query, $options: "i"}},
            ],
        })
        res.status(200).json(listing)
    } catch (error) {
        console.error( "error in search bar", error)
        return res.status(500).json({message: `search error ${error}`}
        )
    }
}
