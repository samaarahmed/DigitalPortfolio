import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Frontend Developer"
            subTitle="Edusurferz Educational Consultant (EEC) - ( July 2024 - Present)"
            des="I am responsible for SEO and adding new features to their website"
          />

          <ResumeCard
            title="Intern"
            subTitle="Standout AB - (Nov 2023 - June 2024)"
            des="Developed a Two-Factor Authentication (2FA) system using JavaScript, Ruby on Rails and Tailwind CSS. 2FA system will be implemented in Standout's platform."
          />
          <ResumeCard
            title="Night Manager"
            subTitle="Point Logistik Gota Media AB, Växjö - (2013 - 2020)"
            des="Supervising Logistics Operations, Staff Management, Ensuring Safety and Security, Problem Solving, Communication, Documentation and Reporting"
          />              
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;