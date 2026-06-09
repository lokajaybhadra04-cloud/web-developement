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