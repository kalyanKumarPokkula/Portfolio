import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Users, Rocket } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Analytical thinker with a knack for solving complex technical challenges.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Player',
      description: 'Excellent communicator who thrives in collaborative environments.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies and frameworks.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm a passionate Full Stack Developer with 5 years of experience in building web applications.
            My journey in tech started with a Computer Science degree, and I've been in love with coding ever since.
          </p>
          <p className="text-xl text-gray-600">
            Currently focused on creating scalable applications using modern technologies,
            I enjoy tackling complex problems and turning ideas into reality through elegant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                {quality.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{quality.title}</h3>
              <p className="text-gray-600">{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}