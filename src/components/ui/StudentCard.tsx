import { Student } from "@/lib/axios/apiRequestTypes";
import { Avatar, Button } from "..";
import Link from "next/link";

export default function StudentCard({
  firstName,
  lastName,
  regNo,
  passport,
  level,
}: Student) {
  return (
    <tr className="border border-primary text-xs lg:hover:bg-disabled">
      <td className="flex items-center justify-center py-2 text-center">
        {" "}
        <Avatar
          imageUrl={passport || "/svg/avatar-image.svg"}
          placeholder="blur"
          blurDataUrl="/svg/avatar-image.svg"
          alt="image"
        />
      </td>

      <td className="py-2 text-center">{`${firstName} ${lastName}`}</td>
      <td className="py-2 text-center">{regNo}</td>

      <td className="hidden py-2 text-center  md:table-cell">{level}</td>
      <td className="text-center ">
        <Link href={`/admin/students/${regNo}`}>
          <Button className="h-[2rem] w-full">View</Button>
        </Link>
      </td>
    </tr>
  );
}
