import React, { useState, lazy, Suspense } from "react";

// Introduce an artificial delay in the lazy loading
const delayImport = (ms, component) => {
  return new Promise((resolve) => setTimeout(() => resolve(component), ms));
};

// Lazy load with delay
const UserProfile = lazy(() => delayImport(2000, import("./UserProfile")));

function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);

  const handleViewProfile = () => {
    setShowProfile(true);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleViewProfile}>View Profile</button>

      {/* Use Suspense to show a fallback while the component is being loaded */}
      {showProfile && (
        <Suspense fallback={<div>Loading Profile...</div>}>
          <UserProfile />
        </Suspense>
      )}
    </div>
  );
}

export default Dashboard;
