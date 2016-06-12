var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://farm8.staticflickr.com/7224/7384323418_6793f7fb25.jpg",
            description: "Small batch chillwave roof party, single-origin coffee cronut actually fingerstache franzen. YOLO austin whatever, echo park quinoa tofu banjo seitan kale chips portland cardigan pabst affogato mustache vice. Everyday carry gentrify bitters pickled."
        },
        {
            name: "Lonely Mountain",
            image: "https://farm4.staticflickr.com/3869/15106109749_f0ba1cdbb7.jpg",
            description: "Cold-pressed kombucha kitsch health goth readymade, knausgaard leggings man bun art party godard. Fashion axe celiac everyday carry hella."
        },
        {
            name: "Lookout Point",
            image: "https://farm6.staticflickr.com/5595/15126722555_d4cdbe6745.jpg",
            description: "Plaid blog flexitarian, wolf raw denim post-ironic fanny pack scenester schlitz 90's you probably haven't heard of them cardigan VHS tilde tumblr. Gluten-free craft beer banh mi, letterpress selvage pug drinking vinegar hoodie try-hard franzen kombucha."
        }
    ];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            // add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // create a comment
                        Comment.create(
                            {
                                text: "This place is great! But I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment!");
                                }
                            }
                        )
                    }
                });
            });
        }
    });
}

module.exports = seedDB;