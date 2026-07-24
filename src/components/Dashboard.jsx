function Dashboard() {
  const login = localStorage.getItem("login");

  return (
    <div className="container">
      <h1>Dashboard</h1>

      {login === "true" ? (
        <>
          <h2>Welcome!</h2>
          <p>You have successfully signed in.</p>
        </>
      ) : (
        <p>Please Sign In First.</p>
      )}
    </div>
  );
}

export default Dashboard;