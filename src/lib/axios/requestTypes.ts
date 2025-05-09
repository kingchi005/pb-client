type School = {
  id: string;
  name: string;
  students?: number;
};

export interface OngoingCompetition {
  id: string;
  name: string;
  seniorRegFee: number;
  juniorRegFee: number;
  graduateRegFee: number;
  active: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: string;
  updatedAt: string;
  schools: School[];
}

export type Competition = OngoingCompetition[];

export type OngoingCompetitionsResponse = {
  data: {
    ongoingCompetitions: OngoingCompetition[];
    schools: School[];
  };
  message: string;
  ok: boolean;
};

export type AllCompetitionsResponse = {
  ok: boolean;
  message: string;
  data: {
    competitions: OngoingCompetition[];
  };
};

//   register students response type

type StudentResult = {
  competitionId: string;
  createdAt: string;
  id: string;
  mathematics: number;
  position: number | null;
  reading: number;
  schoolId: string;
  tudentRegNo: string;
  total: number;
  updatedAt: string;
  writing: number;
};

interface StudentData {
  acknowledgementSent: boolean;
  address: string;
  competitionId: string;
  createdAt: string;
  email: string;
  firstName: string;
  hasInternationalPassport: boolean;
  id: string;
  lastName: string;
  level: string;
  passport: string;
  phoneNumber: string;
  regNo: string;
  result?: StudentResult;
  schoolId: string;
  scienceOrArt: "Science" | "Art";
  updatedAt: string;
  whatsappNumber: string;
}

export type ResponseData = {
  acknowledgementSent: boolean;
  address: string;
  competionFee: number;
  competition: {
    id: string;
    endDate: string;
    startDate: string;
    name: string;
  };
  competitionId: string;
  createdAt: string;
  email: string;
  firstName: string;
  hasInternationalPassport: boolean;
  id: string;
  lastName: string;
  level: string;
  paidAmount: number;
  passport: string;
  phoneNumber: string;
  reference: string;
  regNo: string;
  result?: StudentResult;
  school: {
    id: string;
    name: string;
  };
  schoolId: string;
  scienceOrArt: string;
  updatedAt: string;
  whatsappNumber: string;
};
export interface RegisterStudentResponse {
  ok: boolean;
  message: string;
  data: ResponseData;
}

export type StudentResultResponse = {
  ok: boolean;
  message: string;
  data: {
    student: ResponseData;
  };
};

export type SchoolsResponse = {
  ok: boolean;
  message: string;
  data: {
    schools: School[];
  };
};

export type Person = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  hasInternationalPassport: boolean;
  schoolId: string;
  level: string;
  scienceOrArt: string;
  passport: string;
  whatsappNumber?: string;
};

export type CompetitionDetails = {
  active: boolean;
  createdAt: Date;
  endDate: Date;
  graduateRegFee: number;
  id: string;
  juniorRegFee: number;
  name: string;
  schools: School[];
  seniorRegFee: number;
  startDate: Date;
  students: StudentData[];
  updatedAt: Date;
};

export interface CompetitionDetailsResponse {
  ok: boolean;
  message: string;
  data: {
    competitionDetails: CompetitionDetails;
  };
}

export type UploadResultDataType = {
  schoolId: string;
  competitionId: string;
  resultFileString: string;
};

export type CompetitionStudent = {
  ok: boolean;
  message: string;
  data: {
    students: StudentData[];
  };
  current_students_count: number;
  total_students_count: number;
  remainning_schools_count: number;
  current_page_count: number;
  nextPage: boolean;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  bannerImage: string;
  type: string;
  location: string;
  organisedBy: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
};

export type EventResponse = {
  ok: boolean;
  message: string;
  data: {
    event: Event[];
  };
};
