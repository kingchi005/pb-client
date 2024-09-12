"use client";
import React, { ChangeEvent, useState } from "react";
import { Button, TextField, TimePicker } from "@/components";
import { useFormik } from "formik";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { createEvent } from "@/lib/axios/requests";
import toast from "react-hot-toast";

type FormType = {
  title: string;
  description: string;
  bannerImage: {};
  location: string;
  type: string;
  organisedBy: string;
};

const formatDate = (date: Date) => date.toLocaleDateString();

const time = new Date();
const startTime = new Date().setDate(time.getDate() + 1);
const endTime = new Date().setDate(time.getDate() + 2);

export default function Page() {
  const [startDate, setStartDate] = useState<Date>(new Date(startTime));
  const [endDate, setEndDate] = useState<Date>(new Date(endTime));
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const formik = useFormik<FormType>({
    initialValues: {
      title: "",
      description: "",
      bannerImage: "",
      location: "",
      type: "",
      organisedBy: "",
    },

    onSubmit: (values) => {
      const data = {
        ...values,
        startTime: startDate,
        endTime: endDate,
        bannerImage: file,
      };
      // console.log(data);

      const formData = new FormData();

      for (const [key, value] of Object.entries(data)) {
        // @ts-ignore
        formData.set(key, value);
      }

      // console.log([...formData.entries()]);

      createEvent(formData)
        .then((data) => {
          // console.log(data);
          toast.success(data.message);
          // router.replace("/admin/dashboard");
        })
        .catch((err) => {
          console.log(err);
          if (err.message === "Network Error") {
            toast.error(err.message);
          } else {
            toast.error(err.message, { duration: 5000 });
          }
        });
      // .finally(() => setIsSubmitting(false));
    },
  });

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        // setImage(reader.result as string);
        formik.setFieldValue("bannerImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main>
      <h2 className="col-span-2 mx-auto mt-4 w-full bg-primary py-2 text-center font-righteous text-white lg:w-2/3">
        Create an Event
      </h2>
      <form
        className="mx-auto flex w-full grid-cols-1 flex-col gap-4 border border-primary px-4 py-6 md:grid-cols-2 lg:w-2/3"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-span-2">
          <TextField
            onChange={formik.handleChange}
            name="title"
            value={formik.values.title}
            label="title"
            type="text"
            required
            placeholder="title for event"
          />
        </div>
        <div className="col-span-2">
          <TextField
            onChange={formik.handleChange}
            name="type"
            value={formik.values.type}
            label="Event Type"
            type="text"
            required
            placeholder="event type e.g seminar, workshop"
          />
        </div>

        <div className="col-span-2">
          <TextField
            onChange={formik.handleChange}
            name="location"
            value={formik.values.location}
            label="location"
            type="text"
            required
            placeholder="Event location"
          />
        </div>
        <div className="col-span-2">
          <TextField
            onChange={formik.handleChange}
            name="organisedBy"
            value={formik.values.organisedBy}
            label="organizer"
            type="text"
            required
            placeholder="Event Organizers"
          />
        </div>
        <textarea
          name="description"
          rows={4}
          cols={50}
          id="message"
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Event Description"
          required
          className={`col-span-2 rounded-md border bg-transparent px-2 outline-none focus:border-primary`}
        />
        <div className="relative h-[20rem] rounded-md border">
          <Image
            src={
              (formik.values.bannerImage as string) || "/images/logo_name.jpg"
            }
            fill
            alt=""
            priority
            className="h-full w-full"
          />
          <div className="absolute right-4 top-6 w-[8rem] overflow-hidden bg-red-500">
            <label
              htmlFor="result-upload"
              role="button"
              className="relative z-10 flex cursor-pointer items-center bg-primary p-2 text-white"
            >
              Choose image
            </label>
            <input
              type="file"
              id="result-upload"
              accept="image/jpeg, image/png"
              className="invisible absolute"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <div className="relative">
            <span className="text-sm font-semibold text-primary">
              Start Date
            </span>

            <TimePicker
              dateValue={startDate}
              setDate={setStartDate}
              minDate={startTime}
            />
          </div>

          <div className="relative flex-col">
            <span className="text-sm font-semibold text-primary">End Date</span>

            <TimePicker
              dateValue={endDate}
              setDate={setEndDate}
              minDate={endTime}
            />
          </div>
        </div>
        <Button type="submit" size="medium" className="place-self-center ">
          Create
        </Button>
      </form>
    </main>
  );
}
