import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto my-16 bg-white p-8 md:p-12 border border-[#1313131A] shadow-xl rounded-2xl"
    >
      <h2 className="text-3xl font-bold font-serif text-center mb-8 text-[#131313]">Create Account</h2>
      
      <form className="flex flex-col gap-5 text-[#131313]">
        <div className="form-control">
          <label className="label pt-0"><span className="label-text font-bold">Name</span></label>
          <input type="text" placeholder="Your full name" className="input input-bordered w-full bg-[#FAFAFA] border-[#13131333]" required />
        </div>
        
        <div className="form-control">
          <label className="label pt-0"><span className="label-text font-bold">Email</span></label>
          <input type="email" placeholder="Enter your email" className="input input-bordered w-full bg-[#FAFAFA] border-[#13131333]" required />
        </div>
        
        <div className="form-control">
          <label className="label pt-0"><span className="label-text font-bold">Password</span></label>
          <input type="password" placeholder="Create a password" className="input input-bordered w-full bg-[#FAFAFA] border-[#13131333]" required />
        </div>
        
        <button className="btn w-full bg-[#59C6D2] hover:bg-[#4ba8b3] border-none text-white text-lg font-bold min-h-0 py-3 h-auto mt-2">
          Sign Up
        </button>
      </form>
      
      <p className="text-center mt-8 text-[#131313B2] font-medium">
        Already have an account? <Link to="/login" className="text-[#59C6D2] font-bold hover:underline">Log in</Link>
      </p>
    </motion.div>
  );
};

export default SignUp;
