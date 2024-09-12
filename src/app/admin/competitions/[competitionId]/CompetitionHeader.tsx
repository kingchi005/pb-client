import { formatAmount } from "@/app/(home)/portal/Step1";
import { Button, Switch } from "@/components";
import { CompetitionDetails } from "@/lib/axios/apiRequestTypes";
import { CompetitionDetailsResponse } from "@/lib/axios/requestTypes";
import { downloadResultTemplate } from "@/lib/axios/requests";
import { formatDateToString } from "@/lib/helpersFunctions";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  CalendarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

type CompetitionHeaderProps = {
  data: CompetitionDetails;
  setDisplayUploadModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CompetitionHeader({
  data,
  setDisplayUploadModal,
}: CompetitionHeaderProps) {
  const handleToogleRegistration = () => {};

  const handleResultTemplate = () => {
    downloadResultTemplate(
      data.competitionDetails.schools[0].id,
      data.competitionDetails.id,
    )
      .then((response) => {
        const blob = new Blob([response]);

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);

        link.download = `${data.competitionDetails.schools[0].name}_result.xlsx`;
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      })
      .catch((err) => toast.error("error in downloading result template"));
  };

  return (
    <section className="flex flex-col gap-4 border border-primary px-4 py-4">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <h2 className="flex items-center gap-2 font-righteous text-2xl capitalize text-primary">
          {" "}
          <span>
            <TrophyIcon className="h-6 w-6 text-primary" />
          </span>
          {data.competitionDetails.name}
        </h2>
        <div className="flex items-center gap-2 font-righteous text-sm text-primary lg:ml-auto">
          <span>End registration</span>

          <span className="">
            <Switch
              enabled={!data.competitionDetails.active}
              setEnabled={handleToogleRegistration}
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <p className="flex items-center gap-2 font-inter text-lg font-semibold text-primary">
          <span>
            <AcademicCapIcon className="h-6 w-6 text-primary " />
          </span>
          {data.competitionDetails.schools[0].name}
        </p>
        <div className="flex items-center gap-2 lg:ml-auto">
          <Button className="h-[2.5rem] text-sm" onClick={handleResultTemplate}>
            <span>
              <ArrowDownTrayIcon className="h-4 w-4 text-white" />
            </span>
            Template
          </Button>
          <Button
            className="h-[2.5rem] text-sm"
            onClick={() => setDisplayUploadModal(true)}
          >
            <span>
              <ArrowUpTrayIcon className="h-4 w-4 text-white" />
            </span>
            Result
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="competition-card flex flex-1 flex-col items-center justify-center rounded-md border px-2 py-1 text-white ">
          <h5 className="text-xs capitalize">Junior</h5>
          <p className="text-sm">
            {formatAmount(data.competitionDetails.juniorRegFee)}
          </p>
        </div>
        <div className="senior flex flex-1 flex-col items-center justify-center rounded-md border px-2 py-1 text-white ">
          <h5 className="text-xs capitalize">Senior</h5>
          <p className="text-sm">
            {formatAmount(data.competitionDetails.seniorRegFee)}
          </p>
        </div>
        <div className="graduated flex flex-1 flex-col items-center justify-center rounded-md border px-2 py-1 text-white ">
          <h5 className="text-xs capitalize">graduated</h5>
          <p className="text-sm">
            {formatAmount(data.competitionDetails.graduateRegFee)}
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md bg-primary p-1 font-oswald font-semibold text-white">
          <span>
            <CalendarIcon className="h-6 w-6" />
          </span>
          <span>
            {formatDateToString(new Date(data.competitionDetails.startDate))}
          </span>
          <span>to</span>
          <span>
            {formatDateToString(new Date(data.competitionDetails.endDate))}
          </span>
        </div>
      </div>
    </section>
  );
}
