import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserData } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { FarmLoadingAnimation } from "../components/Loading";

const Reset = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const { resetUser, btnLoading } = UserData();
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    resetUser(token, otp, password, navigate);
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden bg-gray-100">
      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-green-800 opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Reset Password Form */}
      <motion.div
        className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-2xl z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Reset Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
               className="w-full px-4 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="OTP"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               className="w-full px-4 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
              required
            />
          </motion.div>
          <motion.button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={btnLoading}
                    >
                      {btnLoading ? <FarmLoadingAnimation/>: "Submit"}
                    </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Reset;
