import { Button, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { useAppStore } from "../store";

export function Loading() {
  const setPageState = useAppStore((state) => state.setPageState)

  useEffect(() => {
    const time = setTimeout(() => {
      setPageState('download')
    }, 5000);

    return () => clearTimeout(time)
  }, [])

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
