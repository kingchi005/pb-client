"use client";
import React, { useState } from "react";
import Header from "./Header";
import StudentsTable from "./StudentTable";

export default function Page() {
  const [selectedCompetition, setSelectedCompetition] = useState("");

  function selectCompetition(text: string) {
    setSelectedCompetition(text);
  }

  // console.log(selectedCompetition);

  return (
    <section className="">
      <Header selectCompetition={selectCompetition} />
      <StudentsTable competitionId={selectedCompetition} />
    </section>
  );
}
