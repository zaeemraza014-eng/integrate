import { Routes, Route, Navigate } from "react-router-dom";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center w-[450px]">

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Welcome to Clerk Authentication
        </h1>

        <SignedOut>
          <div className="flex justify-center gap-4">

            <a
              href="/sign-in"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Sign In
            </a>

            <a
              href="/sign-up"
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Sign Up
            </a>

          </div>
        </SignedOut>

        <SignedIn>
          <Navigate to="/dashboard" />
        </SignedIn>

      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center">

        <div className="flex justify-end">
          <UserButton />
        </div>

        <h1 className="text-3xl font-bold text-blue-600">
          Dashboard
        </h1>

        <p className="mt-4">
          You have successfully signed in.
        </p>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/sign-in/*" element={<SignIn />} />

      <Route path="/sign-up/*" element={<SignUp />} />

      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}