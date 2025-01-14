const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    Description: String,
    image : {
        filename: String,
        url: {
            type: String,
            default: "https://unsplash.com/photos/a-close-up-of-a-green-snake-curled-up-gUeEQ-eOhzs",
        }
    },
    price:Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],


});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id: {$id: listing.review}});

    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports= Listing;