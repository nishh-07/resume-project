import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validatePassword = (pass) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    return regex.test(pass);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    if (!validatePassword(password)) {
      setMessage(
        "Password must be 8+ chars, uppercase, number & symbol"
      );
      return;
    }

    setMessage("");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* Left Professional Image Section */}
      <div
        className="hidden md:block bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80')"
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-16 text-white">

          <h1 className="text-6xl font-bold leading-tight">
            Hire Top Talent <br />
            Faster With AI
          </h1>

          <p className="mt-6 text-xl text-slate-200 max-w-lg">
            Smart resume screening platform for modern companies and HR teams.
          </p>

        </div>

      </div>

      {/* Right Login Form */}
      <div className="flex items-center justify-center bg-slate-950 p-10">

        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl">

          <h1 className="text-white text-4xl font-bold mb-3 text-center">
            Welcome Back
          </h1>

          <p className="text-slate-300 text-center mb-8">
            Login to continue
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-slate-800 text-white mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-800 text-white mb-3 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-right mb-5">
            <button className="text-cyan-400 text-sm hover:underline">
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-cyan-400 text-black p-4 rounded-xl font-bold hover:bg-cyan-300 transition"
          >
            Login
          </button>

          <p className="text-red-400 text-sm mt-4 text-center">
            {message}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;