import React, { useState } from "react";
import Overview from "./pages/OverviewTab";
import SoilHealth from "./pages/SoilHealthTab";
import Alerts from "./pages/AlertsTab";

function App() {
  const [currentPage, setCurrentPage] = useState("overview");

  const renderPage = () => { 
    switch (currentPage) {
      case "overview":
        return <Overview />;
      case "soilHealth":
        return <SoilHealth />;
      case "alerts":
        return <Alerts />;
      default:
        return <Overview />;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-black-100"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      {/* Gradient Overlay for Modern Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-green-900/30 z-0"></div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-green-700 to-green-900 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center text-white tracking-widest uppercase">
            Regenerative Agriculture Dashboard
          </h1>
        </div>
      </header>

      {/* Navigation */}
<nav className="relative z-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center space-x-4 py-4">
      {["overview", "soilHealth", "alerts"].map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentPage(tab)}
          className={`transition-all duration-300 px-4 py-2 rounded-lg text-white font-semibold shadow-md 
          ${
            currentPage === tab
              ? "bg-green-700 text-black scale-105" // Black text when selected
              : "bg-gray-700 bg-opacity-50 hover:bg-green-600 hover:text-white hover:scale-105" // Black text on hover
          }`}
        >
          {tab === "overview" 
            ? "Overview"
            : tab === "soilHealth"
            ? "Soil Health"
            : "Alerts"}
        </button>
      ))}
    </div>
  </div>
</nav>


      {/* Main Content */}
      <main className="relative z-10">
        <div
          className="max-w-7xl mx-auto py-8 px-6 lg:px-8 bg-white bg-opacity-90 rounded-lg shadow-xl
          backdrop-blur-md"
        >
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gray-800 text-center py-4 mt-10 text-black-300">
        <p>© {new Date().getFullYear()} Regenerative Agriculture Dashboard</p>
      </footer>
    </div>
  );
}

export default App;
