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
        <div className="flex w-full justify-between pt-6">
          <Button color="primary" className="w-min-20">
            Create
          </Button>
          <Button color="secondary" className="w-min-20">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
