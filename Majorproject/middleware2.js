const Listing = require("./models/listing");
const wrapAsync=require("./utils/wrapAsync");





module.exports.isloggedin=(req,res,next)=>{
    // console.log("isloggedin middleware called");    
    // console.log("req.isAuthenticated():", req.isAuthenticated());
    // console.log("req.user:", req.user);
   // console.log("req", req);

   //console.log(req.path,"  ",req.originalUrl);

    //if user is not authenticated, req.user 
    // will be undefined 
    // and req.isAuthenticated() will return
    //  false


    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl; 
        // store the url they are trying to
        //  access eariler in session to 
        // redirect after login


        req.flash("error","You must be logged in ");    
        return res.redirect("/login");
    }
    next();
}   

//why we need this middleware?
// we need this middleware to save the url
//  that the user is trying to access 
// before they are redirected to the login
//  page and after successful login we can 
// redirect them back to that url
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;     
        delete req.session.redirectUrl;
    }
    next();
}





module.exports.isAuthor=wrapAsync(async (req,res,next)=>{
   
    const { id } = req.params;

//find and update in twoparts because:
//1. We want to run the validators defined
//  in the schema, which only run on save()
//  or create(), not on findByIdAndUpdate().
//2. We want to check if the listing exists 
// before trying to update it, so we can handle
//  the case where the listing is not found
//  and provide appropriate feedback to the user.
    const listing = await Listing.findById(id);
    if(! listing.owner.equals(res.locals.currentUser._id )){
      req.flash("error", "You are not the owner of this listing");
      return res.redirect("/listing/" + id);
    }
    next();
}


);