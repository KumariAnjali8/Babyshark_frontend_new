import React from "react"
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <MainLayout />

      <div className="max-w-4xl mx-auto px-6 pt-24">
        <h1 className="text-4xl font-bold mb-3">
          What brings you here today?
        </h1>

        <p className="text-zinc-400 mb-10">
          Choose your path and let’s get started.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          
          {/* Founder */}
          <button
            onClick={() => navigate("/")}
            className="flex-1 p-6 rounded-xl bg-zinc-900 border border-zinc-800
                       hover:border-violet-500 hover:bg-zinc-800
                       transition-all text-left group"
          >
            <div className="text-3xl mb-2">🚀</div>
            <h2 className="text-lg font-semibold group-hover:text-violet-400">
              I have an idea
            </h2>
            <p className="text-sm text-zinc-400">
              Build, validate, and launch your startup
            </p>
          </button>

          {/* Investor */}
          <button
            disabled
            className="flex-1 p-6 rounded-xl bg-zinc-900 border border-zinc-800
                       opacity-50 cursor-not-allowed text-left"
          >
            <div className="text-3xl mb-2">💰</div>
            <h2 className="text-lg font-semibold">
              I want to invest
            </h2>
            <p className="text-sm text-zinc-400">
              Discover promising startups (coming soon)
            </p>
          </button>

          {/* Collaborator */}
          <button
            disabled
            className="flex-1 p-6 rounded-xl bg-zinc-900 border border-zinc-800
                       opacity-50 cursor-not-allowed text-left"
          >
            <div className="text-3xl mb-2">🤝</div>
            <h2 className="text-lg font-semibold">
              I want to work
            </h2>
            <p className="text-sm text-zinc-400">
              Join exciting startup journeys (coming soon)
            </p>
          </button>

        </div>
      </div>
    </div>
  );
}
