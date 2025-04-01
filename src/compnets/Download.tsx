import { Button, Card } from "flowbite-react";
import { useAppStore } from "../store";
import { useEffect } from "react";

export default function Download() {
  const setPageState = useAppStore((state) => state.setPageState);

  useEffect(() => {
    setPageState("download");
  }, []);

  const handleDownload = () => {
    window.open(
      "https://removebackground-backend.onrender.com/download/",
      "_blank",
    );
    setPageState("upload");
  };
  return (
    <>
      <div className="flex justify-center pt-100">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="http://localhost:3000/download/"
        />
      </div>
      <div className="flex justify-center pt-5">
        <Button
          className="cursor-pointer"
          color="light"
          pill
          size="xl"
          onClick={handleDownload}
        >
          Descargar
        </Button>
      </div>
    </>
  );
}
