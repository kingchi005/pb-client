import { Result } from "@/lib/axios/apiRequestTypes";

type ResultProp = {
  result: Result;
};

export default function Results({ result }: ResultProp) {
  return (
    <div className="px-4">
      <table className="mt-4 w-full border-collapse border border-primary">
        <caption className=" bg-primary py-2 text-xl text-white">
          Student Result
        </caption>

        <tbody>
          <tr className="border border-primary">
            <td className="py-2 pl-4 ">Maths</td>
            <td className="">{result.mathematics}</td>
          </tr>
          <tr className="border border-primary">
            <td className="py-2 pl-4 ">Reading</td>
            <td>{result.reading}</td>
          </tr>
          <tr className="border border-primary">
            <td className="py-2 pl-4 ">Writing</td>
            <td>{result.writing}</td>
          </tr>
          <tr className="border border-primary">
            <td className="py-2 pl-4 ">Total Score</td>
            <td>{result.total}</td>
          </tr>
          <tr className="border border-primary bg-primary font-semibold text-white">
            <td className="py-2 pl-4 ">Position</td>
            <td>{result?.position}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
