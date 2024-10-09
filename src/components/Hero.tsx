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
        <div className="flex w-full">
          <Button>Create your Profile</Button>
          <Button>Search Profiles</Button>
        </div>
      </div>
    </div>
  );
}
