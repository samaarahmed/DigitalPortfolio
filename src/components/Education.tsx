import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer (400 YHP)"
            subTitle="EC Utbildning, Växjö (Aug 2022 - Jun 2024)"
            des="HTML och CSS, JavaScript 1, JavaScript 2 (Angular), JavaScript 3 (ReactJs), UX & UI, Agila projektmetoder, Backend-utveckling 1 (C#), Backend-utveckling 2 (C#), LIA 1 Frontendutveckling, Examenarbete, LIA 2 Frontendutveckling"
          />
          <ResumeCard
            title="Full-Stack JAVA developer (Basic Course)"
            subTitle="Lexicon, Växjö (Nov 2021 - Aug 2022)"
            des="Backend (Java), Frontend (HTML and CSS, JavaScript (ReatJs)), Intership"
          />
          <ResumeCard
            title="Masters (Information Systems) with specialization in Business Development"
            subTitle="Linneuniversitetet, Växjö(Sep 2010 - Dec 2012)"
            des="Informations Systems Methodology, Managing Change Processes and Knowledge Resources, Ethics and Profession in Information Technology, Supply Chain Management, Participative Thinking, Degree Project"
          />
        </div>
      </div>
      {/* part Two */}

    </motion.div>
  );
};

export default Education;