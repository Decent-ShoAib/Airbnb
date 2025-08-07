import express from 'express'
import isAuth from '../middleware/isAuth.js'
import uploadMulter from '../middleware/multer.middleware.js'
import { addListing, findListing, getListing, handleDeleteListing, searchController } from '../controllers/listingController.js'

let listingRouter = express.Router()

listingRouter.post("/add",  isAuth, uploadMulter.fields([
    {name: "image1", maxCount: 1},
    {name: "image2", maxCount: 2},
    {name: "image3", maxCount: 3},
]), addListing)

listingRouter.get("/get", getListing)

listingRouter.get("/findlistingbyid/:id", isAuth, findListing)

listingRouter.delete("/listingdelete/:id", isAuth, handleDeleteListing)

listingRouter.get("/search", searchController)

export default listingRouter;