import { Button } from "@nextui-org/react";
export function Hero() {
  return (
    <div className="pt-4">
      <div className="px-[20px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium">
          Share your journey, find your purpose
        </h1>
        <p className="text-center pt-6 text-gray-600">
          Create your content on inPublic, build community & get early investors
          as your supporters
        </p>
        <div className="flex w-full justify-around pt-6">
          <Button color="primary" size="lg">
            Create
          </Button>
          <Button color="secondary" size="lg">
            Search
          </Button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <div className="min-h-[600px] w-full object-cover bg-gradient-to-t from-indigo-500 backdrop-hue-rotate-90"></div>
      </div>
    </div>
  );
}
