const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});
// const Listing = require("../models/listing.js");
// const Review = require("../models/review.js");
const {loggedIn} = require("../middleware.js");


const listingController = require("../controllers/listings.js")

const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error);
        
    }else{
        next();
    }
};

router.route("/")
//Index route
.get(wrapAsync(listingController.index))
// // create route
.post(
// validateListing,
loggedIn,
upload.single('listing[image]'),
wrapAsync(listingController.createListing));


//New router
router.get("/new", loggedIn,listingController.renderNewForm);


router.route("/:id")
// Show router
.get(wrapAsync(listingController.showListings))
// update
.put(
    loggedIn,
// validateListing,
upload.single('listing[image]'),
 wrapAsync(listingController.updateRoute))
 //Delete route
.delete(wrapAsync(listingController.deleteRoute));


// Show router
// router.get("/:id", wrapAsync(listingController.showListings));

//Edit
router.get("/:id/edit", wrapAsync(listingController.editRoute));

// update
// router.put("/:id",
// // validateListing,
//  wrapAsync(listingController.updateRoute));

//Delete route
// router.delete("/:id", wrapAsync(listingController.deleteRoute));

module.exports = router;