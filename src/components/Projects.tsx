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
            title="To do list app (React & TypeScript)"
            des=" App with CRUD functionality"
            src={projectThree}
            link="https://samaar-todolist-react-typescript.netlify.app/"

           />
        <ProjectsCard
            title="E-commerce Website (React & TypeScript)"
            des=" Städafint website with booking system (CRUD) on my pages"
            src={projectFive}
            link="https://samaar-bookingsystem.netlify.app/"

          />
          <ProjectsCard
            title="Burger Heaven Menu prototype (Figma)"
            des="UX & UI project "
            src={projectTwo}
            link="https://www.figma.com/proto/rhZsoTpE7U0H8xc1fJ9YbM/LIA-restaurant?node-id=2-2&starting-point-node-id=2%3A2&scaling=contain"

          />
          <ProjectsCard
            title="Product Manager Full-stack app"
            des="C# on backend & ReactJS on frontend"
            src={projectOne}
            link="https://github.com/samaarahmed?tab=repositories"
          />
          <ProjectsCard
            title="To do list app (Angular)"
            des=" CRUD functionality"
            src={projectFour}
            link="https://github.com/samaarahmed?tab=repositories"

          />
          <ProjectsCard
            title="E-commerce Website (Angular)"
            des="Städafint website with booking system"
            src={projectSix}
            link="https://github.com/samaarahmed?tab=repositories"

          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;