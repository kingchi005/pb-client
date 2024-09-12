"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";

import {
  Button,
  Loader,
  Overlay,
  StudentResultCard,
  TextField,
} from "@/components";
import { getStudentResult } from "@/lib/axios/requests";
import { ResponseData } from "@/lib/axios/requestTypes";
import toast from "react-hot-toast";

export default function Result() {
  const [value, setValue] = useState("");
  const [resultAvailable, setResultAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const resultRef = useRef(null);
  const resultData = useRef<ResponseData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    getStudentResult(value)
      .then((data) => {
        if (
          data.data.student.result?.total !== undefined &&
          data.data.student.result?.total < 1
        ) {
          setErrorMsg("No result yet");
        } else {
          resultData.current = data.data.student;
          setResultAvailable(true);
        }
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error(err.message);
        } else {
          setErrorMsg("incorrect reg No or not registered");
        }
      })
      .finally(() => setLoading(false));
  };

  const handlePrint = useReactToPrint({
    content: () => resultRef.current,
  });

  return (
    <main className="relative flex min-h-screen pt-[5rem]">
      <section className="relative hidden md:w-1/2 lg:block">
        <Image
          src={"/svg/result-svg.svg"}
          alt="students"
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          className="h-full w-auto"
        />
      </section>
      <section className="flex w-full flex-col justify-center md:w-1/2">
        <h2 className="text-center font-righteous text-xl">
          Check Your Results
        </h2>
        {!resultAvailable ? (
          <form
            className="mx-auto flex w-full flex-col gap-4 px-4 md:w-1/2"
            onSubmit={handleSubmit}
          >
            <TextField
              name="reg no"
              type="text"
              placeholder="Reg No"
              label="Reg No"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              type="submit"
              size="fullwidth"
              disabled={value.length !== 15}
            >
              Submit
            </Button>
            <p className="text-center text-sm text-red-500">{errorMsg}</p>
          </form>
        ) : (
          <div className="flex flex-col items-center">
            <StudentResultCard
              resultRef={resultRef}
              resultData={resultData.current}
            />
            <div className="flex gap-2">
              <Button
                className="mt-2 h-[2.5rem]"
                type="button"
                onClick={handlePrint}
              >
                Download
              </Button>{" "}
              <Button
                className="mt-2 h-[2.5rem]"
                type="button"
                onClick={() => setResultAvailable(false)}
              >
                Check Again
              </Button>
            </div>
          </div>
        )}
      </section>
      {loading && (
        <Overlay>
          <Loader />
        </Overlay>
      )}
    </main>
  );
}
