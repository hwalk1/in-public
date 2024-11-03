"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { useFormik } from "formik";
import { schema } from "../app/Schemas/schema";

interface Responses {
  email: string;
  username: string;
}

export const Hero = () => {
  const [success, setSuccess] = useState(Boolean);
  const [respData, setRespData] = useState<Responses>({
    email: "",
    username: "",
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      console.log("submitting");
      const postData = async () => {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          body: JSON.stringify(values),
        });
        return response.json();
      };
      postData().then((data) => {
        if (data && data[0].id) {
          setSuccess(true);
          setRespData({ email: data[0].email, username: data[0].username });
          console.log("Success Data");
          console.log("Data from onSubmit client side: ", data);
        } else {
          setSuccess(false);
          console.log("Fail Data");
        }
      });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, handleBlur } =
    formik;
  console.log(touched, errors);

  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium lg:text-[64px] lg:leading-[72px]">
          Share your journey, find your purpose
        </h1>
        <p className="text-center pt-6 text-gray-600 lg:text-[18px] lg:leading-7">
          Create your content on inPublic, build community & get early investors
          as your supporters.
        </p>
        <p className="text-center pt-6 text-gray-600 lg:text-[18px] lg:leading-7">
          Reserve your Username below and be the first to join the beta program.
        </p>
      </div>
      <div className="h-screen w-full object-cover bg-gradient-to-t from-indigo-500 backdrop-hue-rotate-90 p-6">
        {success ? (
          <>
            <div
              className="flex-col w-full justify-center align-middle text-center text-[18
            px]"
            >
              <h1 className="p-5">Your inline now!</h1>
              <h1 className="p-10">{respData.username}</h1>
              <h1 className="p-10">{respData.email}</h1>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full ">
            <form
              onSubmit={handleSubmit}
              className="flex h-full w-full flex-col "
            >
              <div className="flex w-full justify-center">
                <div className="min-w-[600px] justify-center">
                  <Input
                    type="email"
                    label="Email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    isInvalid={!!errors.email && touched.email}
                    errorMessage={errors.email}
                  />
                  <Input
                    type="text"
                    label="Username"
                    id="username"
                    className="pt-6"
                    onChange={handleChange}
                    value={values.username}
                    isInvalid={!!errors.username && touched.username}
                    errorMessage={errors.username}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="flex justify-center pt-6 min-w-11">
                <Button
                  color="primary"
                  size="lg"
                  className="min-w-[150px]"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
