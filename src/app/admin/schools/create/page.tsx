"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, List, TextField, TimePicker } from "@/components";
import { useFormik } from "formik";
import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
} from "@tanstack/react-query";
import { createSchool, getSchools } from "@/lib/axios/requests";
import toast from "react-hot-toast";
import { createSchoolValidation } from "./validate";

type FormType = {
  name: string;
};
type RequestData = FormType;

export default function Create() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const createNewSchool = useMutation({
    mutationFn: (data: RequestData) => createSchool(data),
    onSuccess: (data) => {
      router.push("/admin/schools");
      queryClient.invalidateQueries(["all-schools"]);
    },
  });

  const formik = useFormik<FormType>({
    initialValues: {
      name: "",
    },
    validationSchema: createSchoolValidation,
    onSubmit: (values) => {
      createNewSchool.mutate(values);
    },
  });

  return (
    <main>
      <h2 className="col-span-2 mx-auto w-full bg-primary py-2 text-center font-righteous text-white lg:w-2/3">
        Create School
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto flex w-full grid-cols-1 flex-col gap-4 border border-primary px-4 py-6 md:grid-cols-2 lg:w-2/3"
      >
        <TextField
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Competition Title"
          placeholder="name of school"
          error={
            formik.errors.name && formik.touched.name && formik.errors.name
          }
        />

        <Button size="medium" type="submit" className="col-span-2 mx-auto">
          Create
        </Button>
      </form>
    </main>
  );
}
