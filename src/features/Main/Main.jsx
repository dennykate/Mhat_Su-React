import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AuthForm } from "./components";

const Main = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <button onClick={open}>Login</button>
      </div>

      <Modal opened={opened} onClose={close} centered withCloseButton={false}>
        <AuthForm />
      </Modal>
    </>
  );
};

export default Main;
