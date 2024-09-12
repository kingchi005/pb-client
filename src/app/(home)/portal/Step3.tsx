import { useRef, RefObject } from "react";
import Aknowledgement from "./Aknowledgement";
import { Button } from "@/components";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useReactToPrint } from "react-to-print";
import { ResponseData } from "@/lib/axios/requestTypes";

type Step3Props = {
  step3Data: ResponseData | null;
};

export default function Step3({ step3Data }: Step3Props) {
  const acknownledgemwntRef: RefObject<HTMLDivElement> = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => acknownledgemwntRef.current,
  });

  return (
    <div>
      <Aknowledgement
        acknowledgementRef={acknownledgemwntRef}
        step3Data={step3Data}
      />

      <Button className="mx-auto mt-2 text-sm" onClick={handlePrint}>
        Download Acknowledgement{" "}
        <span>
          <ArrowDownTrayIcon className="h-6 w-6 text-white " />
        </span>
      </Button>
    </div>
  );
}
