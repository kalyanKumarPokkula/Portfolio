import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  {
    name: "React",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Spring Boot",
    image:
      "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png",
  },
  {
    name: "Tailwind",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Python",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "Java",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
];

const backendSkills = [
  {
    name: "MySQL",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "AWS",
    image:
      "https://banner2.cleanpng.com/20190418/qty/kisspng-amazon-web-services-logo-cloud-computing-amazon-co-logoaws-1-itnext-summit-1713897691932.webp",
  },
  {
    name: "Terraform",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg",
  },
  {
    name: "Jenkins",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "Git",
    image: "https://miro.medium.com/v2/resize:fit:383/0*5g3mp6zgIoqprOgV.png",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </motion.div>

        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex gap-8 mb-8"
        >
          {frontendSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 flex flex-col items-center p-4 bg-white rounded-xl shadow-lg w-32"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-3"
              />
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -1000 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex gap-8"
        >
          {backendSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 flex flex-col items-center p-4 bg-white rounded-xl shadow-lg w-32"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-3"
              />
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
