"use client";
import { Announcements } from "@/lib/axios/apiRequestTypes";
import { userGetRequest } from "@/lib/axios/apiRequests";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    userGetRequest<Announcements>("announcements")
      .then((data) => console.log(data.announcements))
      .catch((err) => console.log(err));
  }, []);

  return <div>announcements page</div>;
}
