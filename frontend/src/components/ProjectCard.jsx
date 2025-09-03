import { Link } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="relative bg-white border-2 border-red-500 rounded-xl  shadow-lg min-w-72 ">
      {/* Author Tag */}
      <div className="absolute -top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full flex items-center gap-2 shadow-md ">
        <img
          src={project.authorImage}
          alt={project.author}
          className="w-6 h-6 rounded-full border-2 border-white "
        />
        <span className="text-sm font-medium">{project.author}</span>
      </div>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-40 object-cover p-2"
      />

      {/* Content */}
      <div className="p-4">
        {/* Project Name */}
        <h3 className="text-lg font-bold flex items-center gap-2">
          {project.name}
          <Link size={18} className="text-red-500" />
        </h3>

        {/* Language */}
        <p className="text-red-500 font-medium">{project.language}</p>

        {/* Tags */}
        <div className="mt-2 text-sm text-gray-600">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="mr-2">#{tag}</span>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-end mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
