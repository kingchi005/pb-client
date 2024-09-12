import { StudentData } from "@/app/admin/students/StudentTypes";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllStudents = async () => {
  return (await axios.get("/students")).data;
};

export const getStudent = async (studentId: string) => {
  return (await axios.get<StudentData>(`/students/${studentId}`)).data;
};
