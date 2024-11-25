import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Workflow } from "lucide-react";

const nameAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const name = "Kalyan Kumar Pokkula".split("");

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {" "}
          {/* Changed max-w-4xl to max-w-5xl */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6 flex-wrap">
              {name.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={nameAnimation}
                  className={`font-bold ${
                    char === " " ? "mx-4" : ""
                  } bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              Software Developer
            </motion.h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Full Stack Developer and DevOps enthusiast dedicated to creating
            innovative, scalable, and efficient web solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors mb-4 sm:mb-0"
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <Code2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600">Full Stack Development</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <Workflow className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-gray-600">DevOps</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-gray-600">Database Design</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
