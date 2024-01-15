"use client";
// pages/signup.js
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Signup successful! You can now log in.");
    router.push("/login"); // Redirect to the login page after signup
  };

  return (
    <>
      <div className="bg">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-2xl font-semibold mb-4">
              Sign Up{" "}
              <span className="bg-blue-400 p-1 rounded-lg">
                Toko<span className="text-white">Kami</span>
              </span>{" "}
              Account
            </h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email:
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Username:
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              onClick={handleSignup}
              className="bg-green-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-600">
              Sign Up
            </button>
            <p className="mt-2">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => router.push("/login")}>
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
