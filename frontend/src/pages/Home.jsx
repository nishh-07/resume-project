import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-12 py-6">

          <h1 className="text-3xl font-bold text-cyan-400">
            AI Resume Screener
          </h1>

          <Link
            to="/login"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-cyan-300 transition"
          >
            Login
          </Link>

        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex items-center px-12">

          <div className="max-w-3xl">

            <h1 className="text-7xl font-bold leading-tight">
              Hire Smarter <br />
              With <span className="text-cyan-400">AI</span>
            </h1>

            <p className="text-xl text-slate-200 mt-6 leading-relaxed max-w-2xl">
              Transform recruitment with intelligent resume screening,
              candidate ranking, and faster hiring decisions.
            </p>

            <div className="mt-10 flex gap-5">

              <Link
                to="/login"
                className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-300 transition"
              >
                Get Started
              </Link>

              <button className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition">
                Live Demo
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 px-12 pb-12">

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-cyan-400">10x</h2>
            <p className="text-slate-200 mt-2">
              Faster Resume Screening
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-cyan-400">95%</h2>
            <p className="text-slate-200 mt-2">
              Better Candidate Matching
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
            <p className="text-slate-200 mt-2">
              Automated Hiring Support
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;