import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
export const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium lg:text-[64px] lg:leading-[72px]">
          Share your journey, find your purpose
        </h1>
        <p className="text-center pt-6 text-gray-600 lg:text-[18px] lg:leading-7">
          Create your content on inPublic, build community & get early investors
          as your supporters
        </p>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <div className="flex-col h-screen w-full object-cover bg-gradient-to-t from-indigo-500 backdrop-hue-rotate-90 flex justify-center">
          <div className="w-400  pt-4 gap-4 flex">
            <Input type="email" label="email" />
            <Input type="username" label="username" />
          </div>
          <div className="flex w-full justify-around pt-6">
            <Button color="primary" size="lg">
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
