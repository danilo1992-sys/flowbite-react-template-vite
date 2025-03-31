import { Button, Spinner } from "flowbite-react";

export function setSpinner() {
  <Button color="alternative">
    <Spinner aria-label="Alternate spinner button example" size="sm" />
    <span className="pl-3">Loading...</span>
  </Button>
}
