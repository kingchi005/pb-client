import { ResponseData } from "@/lib/axios/requestTypes";
import Image from "next/image";

type ResultProps = {
  resultRef: React.RefObject<HTMLDivElement>;
  resultData: ResponseData | null;
};

export default function StudentResultCard({
  resultRef,
  resultData,
}: ResultProps) {
  return (
    <div
      ref={resultRef}
      className="mx-auto rounded-sm border-2 border-indigo-700 px-4 lg:w-[50%]"
    >
      <div className="flex justify-center">
        <Image
          src={"/images/logo.jpg"}
          alt="logo"
          height={50}
          width={50}
          priority
        />
      </div>
      <h2 className="mt-4 text-center font-righteous text-xl">
        <span className=" text-primary">PB</span>
        Cambridge Consult Result Slip
      </h2>
      <table className="mt-6 w-full font-inter">
        <tbody>
          <tr>
            <td>Name</td>
            <td className="font-semibold capitalize">
              {resultData?.lastName} {resultData?.firstName}
            </td>
          </tr>
          <tr>
            <td>Reg No</td>
            <td className="font-semibold uppercase">{resultData?.regNo}</td>
          </tr>
          <tr>
            <td>School</td>
            <td className="font-semibold capitalize">
              {resultData?.school.name}
            </td>
          </tr>
          <tr>
            <td>Level</td>
            <td className="font-semibold ">{resultData?.level}</td>
          </tr>
          <tr>
            <td>Class</td>
            <td className="font-semibold ">{resultData?.scienceOrArt}</td>
          </tr>
        </tbody>
      </table>

      <table className="mt-4 w-full text-left">
        <thead>
          <tr className="border">
            <th className="pl-2">Subject</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="pl-2">Mathematics</td>
            <td className="">{resultData?.result?.mathematics}</td>
          </tr>
          <tr className="border">
            <td className="pl-2">Reading</td>
            <td className="">{resultData?.result?.reading}</td>
          </tr>
          <tr className="border">
            <td className="pl-2">Writing</td>
            <td className="">{resultData?.result?.writing}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p className="my-2 text-center">
          Total Score:{" "}
          <span className="font-semibold">{resultData?.result?.total}</span>
        </p>
      </div>
    </div>
  );
}
