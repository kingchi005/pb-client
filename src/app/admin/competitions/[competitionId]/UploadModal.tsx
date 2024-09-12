"use client";
import React, { useRef, useState, RefObject } from "react";
import { Button, Overlay } from "@/components";
import {
  ArrowUpTrayIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import toast, { Toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { uploadresult } from "@/lib/axios/requests";

type UploadModalProps = {
  schoolName: string;
  setDisplayUploadModal: React.Dispatch<React.SetStateAction<boolean>>;
  schoolId: string;
  competitionId: string;
};

export default function UploadModal({
  schoolName,
  schoolId,
  competitionId,
  setDisplayUploadModal,
}: UploadModalProps) {
  const [fileName, setFileName] = useState("");
  const [disableButtons, setDisableButtons] = useState(false);
  const fileString = useRef<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // check if the file is a valid excel file
      if (
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "'application/vnd.ms-excel'"
      ) {
        setFileName(file.name);
        const base64String = await convertToBase64(file);

        fileString.current = base64String as string;
      } else {
        toast.error("Please upload a valid excel document", { duration: 5000 });
      }
    }
  };
  const handleUpload = () => {
    setDisableButtons(true);
    const response = uploadresult({
      schoolId,
      competitionId,
      resultFileString: fileString.current as string,
    });
    response
      .then(() => {
        setDisplayUploadModal(false);
      })
      .catch((err) => toast.error("error in uploading result"))
      .finally(() => setDisableButtons(false));
    toast.promise(
      response,
      {
        loading: "Uploading result...",
        success: "Result uplaoded successfully",
        error: "Error in uploading result",
      },
      { duration: 5000, style: { padding: "0.5rem" } },
    );
  };

  return (
    <Overlay>
      <motion.div
        className="absolute   left-[25%] top-[25%] mx-auto flex flex-col items-center gap-2 rounded-2xl bg-white  p-[2rem] shadow-xl lg:w-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      >
        <h2 className="text-center font-righteous text-lg font-semibold text-primary">
          Upload Result for {schoolName}
        </h2>
        <p className="flex items-center gap-2 text-sm text-primary">
          <span>
            <InformationCircleIcon className="h-4 w-4" />
          </span>
          The document should be in excel format only
        </p>
        <hr className="w-full border-2 border-primary" />
        <p className="flex min-h-[2rem] w-full items-center justify-center">
          {fileName}
        </p>
        <div className="flex flex-col items-center">
          <Image
            src={"/svg/upload.svg"}
            height={80}
            width={80}
            alt=""
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
          <div className="relative flex w-fit justify-center text-center">
            <label
              htmlFor="result-upload"
              role="button"
              className="absolute flex w-fit cursor-pointer items-center gap-2 bg-primary p-2 text-white"
            >
              <span>
                <ArrowUpTrayIcon className="h-6 w-6 " />
              </span>
              Choose file
            </label>
            <input
              type="file"
              id="result-upload"
              accept=".xls, .xlsx"
              onChange={handleFileUpload}
              className="invisible"
            />
          </div>
        </div>
        <button
          className="absolute right-2 top-2"
          onClick={() => setDisplayUploadModal(false)}
          disabled={disableButtons}
        >
          <span>
            <XMarkIcon className="h-8 w-8 " />
          </span>
        </button>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            className="border border-primary bg-white text-primary disabled:bg-disabled"
            onClick={() => setDisplayUploadModal(false)}
            disabled={disableButtons}
          >
            Cancel
          </Button>
          <Button disabled={disableButtons} onClick={handleUpload}>
            Upload
          </Button>
        </div>
      </motion.div>
    </Overlay>
  );
}

function convertToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader?.result?.toString().split(",")[1];
      resolve(base64String);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}
