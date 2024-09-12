export type School = {
  id: string;
  name: string;
  students?: number;
};

interface Competition {
  id: string;
  name: string;
  seniorRegFee: number;
  juniorRegFee: number;
  graduateRegFee: number;
  active: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  schools: School[];
}

type PartialDetails<T> = {
  [K in keyof T]?: T[K];
};

export interface Result {
  id: string;
  reading: number;
  writing: number;
  mathematics: number;
  total: number;
  position: number | null;
  schoolId: string;
  studentRegNo: string;
  competitionId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  schoolId: string;
  level: string;
  scienceOrArt: string;
  hasInternationalPassport: boolean;
  passport: string;
  whatsappNumber: string | null;
  regNo: string;
  acknowledgementSent: boolean;
  competitionId: string;
  createdAt: string;
  updatedAt: string;
  result: Result;
}

export type Events = {
  event: {
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
  }[];
};

export type Announcements = {
  announcements: {
    id: number;
    content: string;
    date: string;
    ended: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
};
export type Schools = {
  schools: School[];
};

export type Competitions = {
  competitions: Competition[];
};

interface CompetitionDetailsType extends Competition {
  students: Student[];
}

export type CompetitionDetails = {
  competitionDetails: CompetitionDetailsType;
};

export type Students = {
  students: Student[];
  current_students_count: number;
  total_students_count: number;
  remainning_schools_count: number;
  current_page_count: string;
  nextPage: boolean;
};

interface StudentDetailsType extends Student {
  school: School;
  competition: PartialDetails<Competition>;
}

export type StudentDetails = {
  studentDetails: StudentDetailsType;
};
