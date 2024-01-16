"use client";
// pages/login.js
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Check if the user has signed up
  // useEffect(() => {
  //   const hasSignedUp = localStorage.getItem("username") !== null;
  //   if (!hasSignedUp) {
  //     router.push("/signup");
  //   }
  // }, [router]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (isLoggedIn) {
      router.push("/");
    }
  }, [router]);

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      // Store user information in localStorage
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", username);

      // Redirect to the home page or any other protected route

      window.location.reload();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen backdrop-blur-sm">
      <div className="bg-white p-8 rounded shadow-xl">
        <h1 className="text-2xl font-semibold mb-4">Login <span className="bg-blue-400 p-1 rounded-lg">Toko<span className="text-white">Kami</span></span> Account</h1>
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
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Login
        </button>
        <p className="mt-2">
          Don't have an account?{" "}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => router.push("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
