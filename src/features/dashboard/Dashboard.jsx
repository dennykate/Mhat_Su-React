import useAuth from "@/hooks/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
