import { StudentDetails } from "@/lib/axios/apiRequestTypes";

type ProfileProps = {
  profileData: StudentDetails;
};

const names = [
  "id",
  "FullName",
  "Reg No",
  "Class",
  "School",
  "Payment Ref",
  "Gender",
  "Internation Passport",
  "Image",
  "Level",
];

const ProfileCard = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex flex-col font-inter">
      <h4 className="font-semibold capitalize text-secondary-gray">{name}</h4>
      <p className="min-h-[3rem] border bg-[#eff6ff] p-2">{value}</p>
    </div>
  );
};

export default function Profile({ profileData }: ProfileProps) {
  const {
    studentDetails: {
      lastName,
      firstName,
      email,
      phoneNumber,
      address,
      whatsappNumber,
      regNo,
      id,
      scienceOrArt,
      level,
      hasInternationalPassport,
      school: { name },
    },
  } = profileData;
  return (
    <div className="mt-4 grid grid-cols-1 gap-2 px-4 md:grid-cols-2">
      <ProfileCard name="Full Name" value={`${lastName} ${firstName}`} />
      <ProfileCard name="Email" value={email} />
      <ProfileCard name="Address" value={address} />
      <ProfileCard name="Phone" value={phoneNumber} />
      <ProfileCard name="Whatsapp No" value={whatsappNumber as string} />
      <ProfileCard name="Reg No" value={regNo} />
      <ProfileCard name="Payment Ref" value={id} />
      <ProfileCard name="School" value={name} />
      <ProfileCard name="Class" value={scienceOrArt} />
      <ProfileCard name="Level" value={level} />
      <ProfileCard
        name="international Passport"
        value={hasInternationalPassport ? "Yes" : "NO"}
      />
    </div>
  );
}
