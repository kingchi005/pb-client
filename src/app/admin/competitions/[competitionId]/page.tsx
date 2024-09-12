"use client";
import { useState } from "react";
import { Loader } from "@/components";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import CompetitionHeader from "./CompetitionHeader";
import UploadModal from "./UploadModal";
import StudentsTable from "./StudentsTable";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import { CompetitionDetails } from "@/lib/axios/apiRequestTypes";

export default function Competition() {
  const [displayUploadModal, setDisplayUploadModal] = useState(false);
  const { competitionId } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["all-competitions", competitionId],
    () =>
      adminGetRequest<CompetitionDetails>(
        `competition/${competitionId as string}`,
      ),
  );
  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (isError)
    return (
      <h2 className="mt-4 text-center">Could not get competition details</h2>
    );

  return (
    <div>
      <CompetitionHeader
        data={data}
        setDisplayUploadModal={setDisplayUploadModal}
      />

      <StudentsTable competitionId={data.competitionDetails.id} />

      {displayUploadModal ? (
        <UploadModal
          schoolName={data.competitionDetails.name}
          setDisplayUploadModal={setDisplayUploadModal}
          schoolId={data.competitionDetails.schools[0].id}
          competitionId={data.competitionDetails.id}
        />
      ) : null}
    </div>
  );
}
