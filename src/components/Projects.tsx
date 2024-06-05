import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo, projectFive, projectSix, projectFour} from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="MY PORTFOLIO"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Product Manager Full-stack app"
            des="C# on backend & ReactJS on frontend"
            src={projectOne}
          />
          <ProjectsCard
            title="Burger Heaven Menu prototype (Figma)"
            des="UX & UI project "
            src={projectTwo}
          />
          <ProjectsCard
            title="To do list app (ReactJS)"
            des=" CRUD functionality"
            src={projectThree}
          />
          <ProjectsCard
            title="To do list app (Angular)"
            des=" CRUD functionality"
            src={projectFour}
          />
          <ProjectsCard
            title="E-commerce Website (ReactJs)"
            des=" Städafint website with booking system"
            src={projectFive}
          />
          <ProjectsCard
            title="E-commerce Website (Angular)"
            des="Städafint website with booking system"
            src={projectSix}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;