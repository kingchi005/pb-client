"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, List } from "@/components";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import { Competitions } from "@/lib/axios/apiRequestTypes";

type School = { name: string; id: string };

export default function FetchResults() {
  const [selectedCompetition, setSelectedCompetition] = useState({
    name: "",
    id: "",
  });
  const [selectedSchool, setSelectedSchool] = useState<School | undefined>({
    name: "",
    id: "",
  });
  const [schools, setSchools] = useState<School[] | undefined>([]);

  const { data, isError, isLoading } = useQuery(
    ["all-competitions"],
    () => adminGetRequest<Competitions>("competitions"),
    { staleTime: 20 * 60 * 60 * 1000 },
  );

  useEffect(() => {
    const newData = data?.competitions.map((item) => {
      return { id: item.id, name: item.name };
    });
    if (newData) {
      setSelectedCompetition(newData[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data !== undefined) {
      const schools = data.competitions.find(
        (item) => item.id === selectedCompetition.id,
      );
      if (schools !== undefined) {
        setSchools(schools?.schools);
        setSelectedSchool(schools?.schools[0]);
      }
    }
  }, [selectedCompetition.name, data, selectedCompetition.id]);

  return (
    <div className="flex w-[50%] flex-col items-center gap-2 sm:flex-row">
      <List
        label={"Competition Name"}
        dropdownList={data?.competitions}
        selectedValue={selectedCompetition}
        setSelectedValue={setSelectedCompetition}
      />
      <List
        label={"School"}
        dropdownList={schools}
        selectedValue={selectedSchool}
        setSelectedValue={setSelectedSchool}
      />
      <Button className="h-[3rem] sm:self-end">Submit</Button>
    </div>
  );
}
