import { Button, FileInput, Label } from "flowbite-react";
import { useState } from "react";
import Cloud from "../icons/cloud";
import { useAppStore } from "../store";
import { Alerta } from "./Alert";
import { Alertconexion } from "./Alertconexion";
import { Alerterror } from "./Alerterror";
import { Alertimg } from "./Alertimg";

export function Uploads() {
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const setPageState = useAppStore((state) => state.setPageState);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const submit = async () => {
    if (!selectedFile) {
      <Alertimg />;
      return;
    }

    setPageState("loading");

    const formdata = new FormData();
    formdata.append("imgbackground", selectedFile);

    try {
      const res = await fetch(
        "https://removebackground-backend.onrender.com/img",
        {
          method: "POST",
          body: formdata,
        },
      );

      if (res.ok) {
        <Alerta />;
      } else {
        <Alerterror />;
      }
    } catch (error) {
      console.error("Error: ", error);
      <Alertconexion />;
    }
  };

  return (
    <>
      <div className="flex justify-center pt-100">
        <div className="flex w-96 items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Cloud />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <FileInput
              onChange={handleFileChange}
              id="dropzone-file"
              className="hidden"
            />
          </Label>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <Button
          className="cursor-pointer"
          pill
          color="light"
          size="xl"
          onClick={submit}
        >
          Convert
        </Button>
      </div>
    </>
  );
}
