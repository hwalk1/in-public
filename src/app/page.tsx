import { Button } from "@nextui-org/button";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <NavBar />
        <Button>Press me</Button>;<h3>Test</h3>
      </NextUIProvider>
    </>
  );
}
