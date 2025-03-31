import { setSpinner } from "./compnets/Spinner";
import { Uploads } from "./compnets/uploads";
import { useState } from "./store";

export default function App() {
  const pageState = useState((state) => state.pageState)
  return (
    <>
      {pageState === 'upload' && <Uploads />}
      {pageState === 'loading' && setSpinner()}
    </>
  )
}
