type StudentResult = {
  reading: number;
  writing: number;
  maths: number;
  totalScore: number;
  position: number;
};


 export type StudentData = {
  id: string;
  name: string;
  regNo: string;
  class: string;
  school: string;
  paymentRef: string;
  gender: string;
  hasInternationalPassport: boolean;
  imageLink: string;
  level: string;
  address: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  amount: number;
  result: StudentResult;
  };