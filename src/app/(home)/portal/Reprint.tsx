"use client";
import { useRef, useState, RefObject } from "react";
import { useReactToPrint } from "react-to-print";

import { Button, Loader, Overlay, TextField } from "@/components";
import { retrieveAcknowledement } from "@/lib/axios/requests";
import Aknowledgement from "./Aknowledgement";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ResponseData } from "@/lib/axios/requestTypes";

export default function Reprint() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [displayAknowledgement, setDisplayAknowledgement] = useState(false);
  const aknowledgementData = useRef<ResponseData | null>(null);
  const acknownledgemwntRef: RefObject<HTMLDivElement> = useRef(null);
  const modalRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    retrieveAcknowledement(value)
      .then((data) => {
        aknowledgementData.current = data.data;
        setDisplayAknowledgement(true);
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          setErrorMsg("Network Error");
        } else {
          setErrorMsg(err.response.data.error.message);
        }
      })
      .finally(() => setLoading(false));
  };

  const handlePrint = useReactToPrint({
    content: () => acknownledgemwntRef.current,
  });

  return (
    <form
      className="mt-[4rem] flex flex-col items-center gap-4"
      onSubmit={handleSubmit}
    >
      <p className="text-sm text-primary">Reprint Acknowledgement Slip</p>
      <TextField
        name="regNo"
        label="Reference No"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Reference No"
      />

      <Button type="submit" size="fullwidth" disabled={value.length !== 16}>
        Submit
      </Button>
      <p className="text-red-500">{errorMsg}</p>
      {displayAknowledgement && (
        <Overlay>
          <div
            ref={modalRef}
            className="relative top-[50%] mx-auto h-[90vh] w-10/12 translate-y-[-50%] overflow-y-auto   md:w-[60%]"
          >
            <Aknowledgement
              acknowledgementRef={acknownledgemwntRef}
              step3Data={aknowledgementData.current}
            />

            <Button
              type="button"
              className="mx-auto mt-2 text-sm"
              onClick={handlePrint}
            >
              Download Acknowledgement{" "}
              <span>
                <ArrowDownTrayIcon className="h-6 w-6 text-white " />
              </span>
            </Button>
          </div>
          <button
            type="button"
            className="absolute right-2 top-4 md:right-6"
            onClick={() => setDisplayAknowledgement(false)}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </Overlay>
      )}

      {loading && (
        <Overlay>
          <Loader />
        </Overlay>
      )}
    </form>
  );
}
