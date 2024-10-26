"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { useFormik } from "formik";
import { schema } from "../app/Schemas/schema";
import { bool } from "yup";

console.log({ schema });

export const Hero = () => {
  const [success, setSuccess] = useState(Boolean);
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
          console.log("Success Data");
          console.log("Data from onSubmit client side: ", data);
        } else {
          setSuccess(false);
          console.log("Fail Data");
        }
      });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  console.log({ errors, touched });

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

      {success ? (
        <>
          <h1>Your inline now!</h1>
        </>
      ) : (
        <div className="flex h-full w-full ">
          <form onSubmit={handleSubmit} className="flex h-full w-full ">
            <div className="flex flex-col h-screen w-full object-cover bg-gradient-to-t from-indigo-500 backdrop-hue-rotate-90 p-6">
              <div className="flex w-full justify-center">
                <div className="min-w-[600px] justify-center">
                  <Input
                    type="email"
                    label="Email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                  />
                  <Input
                    type="text"
                    label="Username"
                    id="username"
                    className="pt-6"
                    onChange={handleChange}
                    value={values.username}
                    isInvalid={!!errors.username}
                    errorMessage={errors.username}
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
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Hero;
