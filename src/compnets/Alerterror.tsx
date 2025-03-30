import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export function Alerterror() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Ocurrió un error al subir la imagen</span>
    </Alert>
  );
}
