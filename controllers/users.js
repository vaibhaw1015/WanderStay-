const User=require("../models/user.js");
module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
}
module.exports.signup=async(req,res,next)=>{
    try{
        console.log("--- START: Signup controller reached ---"); // change
        let{username,email,password}=req.body;
        const newUser=new User({email, username});
        console.log("--- CHECKPOINT 1: Before User.register ---");// change
        const registeredUser=await User.register(newUser,password);

        console.log("--- CHECKPOINT 2: After User.register (Success) ---"); // Change
        console.log("Registered User:", registeredUser.username); // change
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
         return next(err);
            }
            req.flash("success","Welcome to WanderStay!");
            res.redirect("/listings");
        });
    }catch(e){
      console.error("!!! ERROR CAUGHT IN CATCH BLOCK !!!");//change
        console.error("Error Name:", e.name);//change
        console.error("Actual Stack Trace:", e.stack); // change

        req.flash("error",e.message);
        res.redirect("/signup");
    }
}; 


/////////




module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}
module.exports.login=async(req,res)=>{
    req.flash("success","Welcome back to WanderStay!");
    let redirectUrl=res.locals.redirectUrl ||"/listings";
    res.redirect(redirectUrl);
};
module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("Success", "You are logged out!");
        res.redirect("/listings");
    });
};