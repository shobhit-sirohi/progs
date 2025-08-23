import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <div className="min-h-screen px-4 py-8 text-white bg-black md:px-14 lg:px-24">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-white rounded-full bg-[#F95FE7] hover:bg-[#b544a7]"
      >
        ← Back to Home
      </Link>
      <h1 className="mb-4 text-4xl font-bold">HDFC Bank Mobile App</h1>
      <p className="mb-6 text-xl">
        Reimagining the HDFC mobile app for clarity, speed and everyday usability.
      </p>

      {/* Your project content here */}
      <div className="py-4">
        <p>Project content coming soon...</p>
      </div>
    </div>
  );
};

export default Project1;
