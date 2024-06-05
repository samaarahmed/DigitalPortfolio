import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Refrences = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Refrences</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Viktor Rehnqvist"
            des="viktor.rehnqvist@standout.se"
          />          
          <ResumeCard
            title="Robert Tublén (EC Utbildning)"
            des="larsericrobert.tublen@ecutbildning.se"
          />
          <ResumeCard
            title="Gabriella Frykhamn"
            des="gabriella.frykhamn@utb.ecutbildning.se"
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Refrences;