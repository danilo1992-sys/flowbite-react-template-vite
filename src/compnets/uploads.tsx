import { FileInput, Label, Button } from "flowbite-react";
import { useState } from "react";
import { Alerta } from './Alert'
import { Alerterror } from "./Alerterror";
import { Alertimg } from "./Alertimg";
import { Alertconexion } from "./Alertconexion";
import Cloud from "../icons/cloud";

export function Uploads() {
  const [selectedFile, setSelectedFile] = useState<File | string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };


  const submit = async () => {
    if (!selectedFile) {
      <Alertimg />
      return
    }
    const formdata = new FormData()
    formdata.append("imgbackground", selectedFile)

    try {
      const res = await fetch("http://localhost:3000/img", {
        method: "POST",
        body: formdata
      });

      if (res.ok) {
        <Alerta />
      } else {
        <Alerterror />
      }

    } catch (error) {
      console.error("Error: ", error);
      <Alertconexion />
    }
  }

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="flex justify-center pt-12">
        <div className="flex w-96 items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <Cloud />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <FileInput
              onChange={handleFileChange}
              id="dropzone-file"
              className="hidden" />
          </Label>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <Button
          className="cursor-pointer"
          pill
          color="light"
          onClick={submit}>
          Convert
        </Button>
      </div>
    </>
  );
}
