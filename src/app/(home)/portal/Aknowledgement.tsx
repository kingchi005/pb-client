import Image from "next/image";
import { ResponseData } from "@/lib/axios/requestTypes";
import { formatAmount } from "./Step1";

type flexDirection = "column" | "row";
const bgImage = `
  linear-gradient(
    95deg,
    hsl(154deg 18% 92%) 0%,
    hsl(180deg 25% 90%) 27%,
    hsl(196deg 35% 88%) 48%,
    hsl(217deg 43% 85%) 62%,
    hsl(240deg 53% 83%) 100%
  )
`;

const tableRowBg = `
  linear-gradient(
    95deg,
    hsl(266deg 18% 92%) 0%,
    hsl(258deg 25% 90%) 27%,
    hsl(254deg 35% 88%) 48%,
    hsl(246deg 43% 85%) 62%,
    hsl(240deg 53% 83%) 100%
  )
`;

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "0.5rem 0",
  },
  profileImgSection: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    gap: "2rem",
    marginTop: "1rem",
    padding: "0 4px",
  },
  referenceContainer: {
    backgroundImage: bgImage,
    color: "black",
    display: "flex",
    flexDirection: "column" as flexDirection,
    alignItems: "center",
    padding: "0.5rem 0.8rem",
    borderRadius: "8px",
  },
  caption: {
    width: "100%",
    color: "black",
    backgroundImage: bgImage,
    fontSize: "large",
  },
  tabletr: {
    backgroundImage: tableRowBg,
    padding: "0,5rem 1rem",
  },
  tableTd: {
    padding: "0.3rem 0.5rem",
    fontSize: "small",
  },
  ul: {
    display: "flex",
    flexDirection: "column" as flexDirection,
    gap: "8px",
    padding: "0.5rem 2rem",
    backgroundImage: tableRowBg,
    fontSize: "small",
    listStyleType: "square",
  },
};

type PropType = {
  acknowledgementRef: React.RefObject<HTMLDivElement>;
  step3Data: ResponseData | null;
};

export default function Aknowledgement({
  acknowledgementRef,
  step3Data,
}: PropType) {
  const time = new Date(step3Data?.createdAt as string);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",

        borderRadius: "4px",
      }}
      ref={acknowledgementRef}
      className="border-2 border-double bg-white"
    >
      <div className="acknowledgementPrint relative flex flex-col items-center gap-4 px-4 font-oswald text-xl sm:flex-row ">
        <div className="flex items-center">
          <Image
            src={"/images/logo.jpg"}
            style={{ borderRadius: "6px" }}
            alt="pb cambridge logo"
            height="40"
            width="40"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
          <h2 className="">
            <span className="text-primary">PB</span>
            Cambridge
          </h2>
        </div>
        <h2 style={styles.header} className="sm:ml-auto ">
          Acnowledgement Slip
        </h2>
      </div>

      <hr className="my-4" />
      <p className="px-4 text-right font-poppins text-sm">
        Date: {time.toLocaleDateString()}
      </p>
      <div
        style={styles.profileImgSection}
        className="acknowledgementPrint mt-4 flex-col sm:flex-row"
      >
        <div className="h-6rem w-[6rem]">
          <Image
            src={step3Data?.passport as string}
            style={{ borderRadius: "6px" }}
            alt={step3Data?.lastName as string}
            height="100"
            width="100"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
        <div style={styles.referenceContainer} className="font-righteous">
          <h5 style={{ fontSize: "0.8rem" }}>Payment Reference Number</h5>
          <p style={{ fontSize: "1.2rem" }}>{`${step3Data?.reference}`}</p>
        </div>
      </div>
      <section style={{ marginTop: "2rem" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <caption style={styles.caption} className="font-righteous">
            Personal Details
          </caption>
          <tbody>
            <tr style={styles.tabletr}>
              <td style={styles.tableTd}>Name</td>
              <td style={styles.tableTd} className="capitalize">
                {step3Data?.lastName} {step3Data?.firstName}
              </td>
            </tr>
            <tr style={styles.tabletr}>
              <td style={styles.tableTd}>Email</td>
              <td style={styles.tableTd}>{step3Data?.email}</td>
            </tr>
            <tr style={styles.tabletr}>
              <td style={styles.tableTd}>Reg No</td>
              <td style={styles.tableTd}>{step3Data?.regNo}</td>
            </tr>
            <tr style={styles.tabletr}>
              <td style={styles.tableTd}>School</td>
              <td style={styles.tableTd}>{step3Data?.school?.name}</td>
            </tr>
            <tr style={styles.tabletr}>
              <td style={styles.tableTd}>Level</td>
              <td style={styles.tableTd}>{step3Data?.level}</td>
            </tr>
            <tr style={styles.tabletr}>
              <td style={styles.tableTd}>Class</td>
              <td style={styles.tableTd}>{step3Data?.scienceOrArt}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <caption style={styles.caption} className="font-righteous">
            Competition Information
          </caption>
          <tbody>
            <tr style={styles.tabletr}>
              <td style={styles.tableTd}>Date</td>
              <td style={styles.tableTd}>28th October, 2023</td>
            </tr>
            <tr style={styles.tabletr}>
              <td style={styles.tableTd}>Amount</td>
              <td style={styles.tableTd}>
                {formatAmount(step3Data?.paidAmount as number)}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h4
          style={{
            backgroundImage: bgImage,
            marginTop: "1rem",
            textAlign: "center",
          }}
          className="font-righteous"
        >
          Other Informations
        </h4>
        <ul style={styles.ul}>
          <li>Come with writing materials to the exam</li>
          <li>Do not enter the exam hall with any gadget</li>
          <li>Bring a copy of the acknownledgemwnt slip</li>
          <li>Come early to the venue</li>
        </ul>
      </section>
    </div>
  );
}
