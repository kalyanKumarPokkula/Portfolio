import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Online BookStore E-commerce Application",
    description:
      "A microservices-based e-commerce platform for browsing, ordering, secure payments, and real-time notifications.",
    image:
      "https://github.com/kalyanKumarPokkula/online-book-store/blob/master/images/books.png?raw=true",
    tech: [
      "Microservices",
      "Node.Js",
      "Spring Boot",
      "Flask",
      "GoLang",
      "React",
      "MySql",
      "Stripe",
    ],
    github: "https://github.com/kalyanKumarPokkula/online-book-store.git",
    live: "https://example.com",
  },
  {
    title: "Goals Tracker Application",
    description:
      "A MERN stack-based goal tracker enabling user sign-up, goal creation, and deletion.",
    image:
      "https://github.com/kalyanKumarPokkula/Goals_Fullstack/blob/master/pics/landingpage.png?raw=true",
    tech: ["React", "TypeScript", "MongoDB", "Node.Js"],
    github: "https://github.com/kalyanKumarPokkula/Goals_Fullstack.git",
    live: "https://example.com",
  },
  {
    title: "TrackMyExpenses Applications",
    description:
      "A MERN stack-based trackMyExpenses enabling user sign-up, expenses creation, update expenses and deletion.",
    image:
      "https://github.com/kalyanKumarPokkula/Expense-Tracker/blob/master/Pics/welcomewithoutsigninpage.png?raw=true",
    tech: ["React", "JavaScirpt", "MongoDB", "Node.Js"],
    github: "https://github.com/kalyanKumarPokkula/Expense-Tracker.git",
    live: "https://example.com",
  },
  {
    title:
      "AWS Infrastructure Provisioning with Terraform and Jenkins CI/CD Pipeline",
    description:
      "This project uses Terraform to provision AWS resources and Jenkins for CI/CD, automating resource creation and ensuring fast, reliable software delivery.",
    image:
      "https://miro.medium.com/v2/resize:fit:761/1*ixEfBJ_tWQotJxF7s8YznQ.png",
    tech: ["Jenkins", "Terraform", "AWS"],
    github: "https://github.com/kalyanKumarPokkula/Terraform-Jenkins-Eks.git",
    live: "https://example.com",
  },
  {
    title: "3-Tier Application Deployment on Amazon EKS",
    description:
      "This project deploys a 3-tier application on Amazon EKS, with separate containers for the frontend, backend, and database, ensuring scalability and efficient management.",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220306133735/Group-42.jpg",
    tech: ["Kubernetes", "EKS", "AWS", "Docker"],
    github: "https://github.com/kalyanKumarPokkula/K8s-ExpenseTracker-app.git",
    live: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Welcome to my portfolio website! This project showcases my skills, experience, and projects",
    image:
      "https://github.com/kalyanKumarPokkula/Portfolio/blob/master/pics/homepage.png?raw=true",
    tech: ["React", "TypeScript", "tailwindCSS"],
    github: "https://github.com/kalyanKumarPokkula/Portfolio.git",
    live: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  ></motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
