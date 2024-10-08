import { Button } from "@nextui-org/button";
import NavBar from "@/components/NavBar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Button color="primary">Press me</Button>;<h3>Test</h3>
    </>
  );
}
