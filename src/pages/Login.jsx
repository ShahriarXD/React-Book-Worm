import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto my-16 bg-white p-8 md:p-12 border border-[#1313131A] shadow-xl rounded-2xl"
    >
      <h2 className="text-3xl font-bold font-serif text-center mb-8 text-[#131313]">Welcome Back</h2>
      
      <form className="flex flex-col gap-5 text-[#131313]">
        <div className="form-control">
          <label className="label pt-0"><span className="label-text font-bold">Email</span></label>
          <input type="email" placeholder="Enter your email" className="input input-bordered w-full bg-[#FAFAFA] border-[#13131333]" required />
        </div>
        
        <div className="form-control">
          <label className="label pt-0"><span className="label-text font-bold">Password</span></label>
          <input type="password" placeholder="Enter your password" className="input input-bordered w-full bg-[#FAFAFA] border-[#13131333]" required />
        </div>
        
        <button className="btn w-full bg-[#23BE0A] hover:bg-[#1f9f08] border-none text-white text-lg font-bold min-h-0 py-3 h-auto mt-2">
          Sign In
        </button>
      </form>
      
      <p className="text-center mt-8 text-[#131313B2] font-medium">
        Don't have an account? <Link to="/signup" className="text-[#23BE0A] font-bold hover:underline">Sign up</Link>
      </p>
    </motion.div>
  );
};

export default Login;
