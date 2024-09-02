import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/better_prompt.png"
          title="Better Your Prompt"
          description="A full stack web application which finds better prompts for you using others' blogs. 
          Used Next.JS with react server components and Mongodb as the database to maintain the blogs."
        />
        <ProjectCard
          src="/job_search.png"
          title="Job Search Mobile App"
          description="Dynamic Mobile Application created using React-Native(expo), Rapid-API.
          Users can search for jobs based on keywords, locations, and other parameters."
        />
        <ProjectCard
          src="/netflix.png"
          title="Movie Website"
          description="A dynamic movie website clone which plays trailers when clicked. Created using ReactJS and tmdb API."
        />
      </div>
    </div>
  );
};

export default Projects;
