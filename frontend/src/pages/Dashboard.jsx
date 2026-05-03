import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [results, setResults] = useState([]);

  const analyzeCandidate = async () => {
    if (!jobTitle || !jobDesc || files.length === 0) {
      setMessage("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("jobTitle", jobTitle);
    formData.append("jobDesc", jobDesc);

    Array.from(files).forEach((file) => {
      formData.append("resume", file);
    });

    try {
      const res = await axios.post(
        "https://resume-project-gioa.onrender.com/upload",
        formData
      );

      setMessage(res.data.message);
      setResults(res.data.results || []);
    } catch (error) {
      setMessage("Analysis failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Recruiter Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-slate-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Job Description
          </h2>

          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 mb-4"
          />

          <textarea
            rows="8"
            placeholder="Paste Job Description"
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800"
          />
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Upload Resumes
          </h2>

          <input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            className="mb-4"
          />

          <button
            onClick={analyzeCandidate}
            className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-bold"
          >
            Rank Candidates
          </button>

          <p className="mt-4 text-green-400">
            {message}
          </p>
        </div>

      </div>

      {results.length > 0 && (
        <div className="bg-slate-900 p-8 rounded-2xl mt-10">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Ranked Candidates
          </h2>

          {results.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-700 py-3"
            >
              #{index + 1} {item.name} - {item.score} - {item.status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;