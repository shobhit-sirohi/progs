import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <div className="max-w-4xl py-8 mx-auto">
      <Link
        to="/projects"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to Projects
      </Link>
      <h1 className="mb-4 text-4xl font-bold">Project 1</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600">
          Detailed description of Project 1 goes here.
        </p>
      </div>
    </div>
  );
};

export default Project1;
