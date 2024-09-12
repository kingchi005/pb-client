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
import { createCompetition, getSchools } from "@/lib/axios/requests";
import { createCompetitionValidation } from "./createCompetitionValidate";
import toast from "react-hot-toast";

type FormType = {
  name: string;
  juniorRegFee: string;
  seniorRegFee: string;
  graduateRegFee: string;
};
type RequestData = FormType & {
  schoolsId: string[];
  startDate: string;
  endDate: string;
};

const formatDate = (date: Date) => date.toLocaleDateString();

const time = new Date();
const startTime = new Date().setDate(time.getDate() + 1);
const endTime = new Date().setDate(time.getDate() + 2);

export default function Create() {
  const { data, isLoading, isError } = useQuery(["schools"], getSchools, {
    refetchOnMount: false,
  });
  const [selectedSchool, setSelectedSchool] = useState({ name: "", id: "" });
  const [startDate, setStartDate] = useState<Date>(new Date(startTime));
  const [endDate, setEndDate] = useState<Date>(new Date(endTime));
  const router = useRouter();
  const queryClient = useQueryClient();
  const createNewCompetition = useMutation({
    mutationFn: (data: RequestData) => createCompetition(data),
    onSuccess: (data) => {
      router.push("/admin/competitions");
      queryClient.invalidateQueries(["all-competitions"]);
    },
  });

  useEffect(() => {
    if (data) {
      setSelectedSchool(data.data.schools[0]);
    }
  }, [data]);

  const formik = useFormik<FormType>({
    initialValues: {
      name: "",

      juniorRegFee: "",
      seniorRegFee: "",
      graduateRegFee: "",
    },
    validationSchema: createCompetitionValidation,
    onSubmit: (values) => {
      const formValues = {
        ...values,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        schoolsId: [selectedSchool.id],
      };
      createNewCompetition.mutate(formValues);
    },
  });

  return (
    <main>
      <h2 className="col-span-2 mx-auto w-full bg-primary py-2 text-center font-righteous text-white lg:w-2/3">
        Create Competition
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
          placeholder="name of competition"
          error={
            formik.errors.name && formik.touched.name && formik.errors.name
          }
        />
        <List
          dropdownList={isLoading || isError ? [] : data?.data.schools}
          label={"Select School"}
          selectedValue={selectedSchool}
          setSelectedValue={setSelectedSchool}
        />

        <div className="col-span-2 flex flex-col justify-between gap-4 md:flex-row">
          <TextField
            name="juniorRegFee"
            type="number"
            value={formik.values.juniorRegFee}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Junior Fee"
            placeholder="amount"
            error={
              formik.errors.juniorRegFee &&
              formik.touched.juniorRegFee &&
              formik.errors.juniorRegFee
            }
          />
          <TextField
            name="seniorRegFee"
            type="number"
            value={formik.values.seniorRegFee}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Senior Fee"
            placeholder="amount"
            error={
              formik.errors.seniorRegFee &&
              formik.touched.seniorRegFee &&
              formik.errors.seniorRegFee
            }
          />
          <TextField
            name="graduateRegFee"
            type="number"
            value={formik.values.graduateRegFee}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Graduated Fee"
            placeholder="amount"
            error={
              formik.errors.graduateRegFee &&
              formik.touched.graduateRegFee &&
              formik.errors.graduateRegFee
            }
          />
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
        <Button size="medium" type="submit" className="col-span-2 mx-auto">
          Create
        </Button>
      </form>
    </main>
  );
}
