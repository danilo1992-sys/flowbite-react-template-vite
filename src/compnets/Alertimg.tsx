import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export function Alertimg() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Debe de seleccionar una imagen </span>
    </Alert>
  );
}
