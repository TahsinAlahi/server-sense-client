import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function UserCount() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center text-5xl font-bold ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center"
          >
            <CountUp end={1000} duration={2} separator="," />
            <p className="text-lg font-semibold mt-2">Happy Users</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center"
          >
            <CountUp end={5000} duration={2} separator="," />
            <p className="text-lg font-semibold mt-2">Services Reviewed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center"
          >
            <CountUp end={200} duration={2} separator="," />
            <p className="text-lg font-semibold mt-2">Businesses Served</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default UserCount;
