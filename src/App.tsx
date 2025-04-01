import { useAppStore } from "./store";
import { Uploads } from './compnets/uploads';
import { Loading } from './compnets/Spinner';
//import { Button, Spinner } from "flowbite-react";

export default function App() {
  const pageState = useAppStore((state) => state.pageState);

  const render = () => {
    if (pageState === 'upload') {
      return <Uploads />
    }
    if (pageState === 'loading') {
      return <Loading />
    }
  }

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      {render()}
    </>
  );
}
