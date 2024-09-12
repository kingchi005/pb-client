"use client";
import React from "react";
import FetchResults from "./FetchResults";
import ResultTable from "./ResultTable";

export default function Page() {
  return (
    <div>
      <h2 className="font-righteous text-2xl">Results</h2>
      {/* <FetchResults /> */}
      <ResultTable />
    </div>
  );
}
