import { Button, Spinner } from "flowbite-react";
export function Loading() {
  return (
    <>
      <div className="flex justify-center pt-100">
        <Button color="alternative" size="xl">
          <Spinner aria-label="Alternate spinner button example" size="xl" />
          <span className="pl-3">Convirtiendo...</span>
        </Button>
      </div>
    </>
  )
}
