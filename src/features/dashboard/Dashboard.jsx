import { CopyButton } from "@mantine/core";
import { useAuth, useToken } from "@/hooks";

const Dashboard = () => {
  const { logout } = useAuth();
  const generate = useToken();

  const { access_token } = generate();

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <button onClick={logout}>Logout</button>

      <CopyButton value={access_token}>
        {({ copied, copy }) => (
          <button onClick={copy}>{copied ? "Copied url" : "Copy url"}</button>
        )}
      </CopyButton>
    </div>
  );
};

export default Dashboard;
