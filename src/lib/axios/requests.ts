import axios from "axios";

export type competitionDataType = {
	name: string;
	schoolsId: string[];
	seniorRegFee: string;
	juniorRegFee: string;
	graduateRegFee: string;
	startDate: string;
	endDate: string;
};

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;
import {
	AllCompetitionsResponse,
	CompetitionDetailsResponse,
	CompetitionStudent,
	Event,
	EventResponse,
	OngoingCompetitionsResponse,
	Person,
	RegisterStudentResponse,
	ResponseData,
	SchoolsResponse,
	StudentResultResponse,
	UploadResultDataType,
} from "./requestTypes";
import { Step2Data } from "@/app/(home)/portal/register_student/registerStudentTypes";

// admin routes requests

export const getCompetitions = async () => {
	const response = await axios.get<OngoingCompetitionsResponse>(
		"/user/ongoing-competitions"
	);
	return response.data;
};
export const getEventDetails = async (id: string) => {
	const response = await axios.get<{ data: Event }>(`/event/${id}`);
	return response.data;
};
export const getAdminIndex = async () => {
	const response = await axios.get<{
		schools: number;
		student: number;
		competition: number;
	}>(`/admin`);
	return response.data;
};

// export const getAllCompetitions = async ()=>{
//     const response = await axios.get<AllCompetitionsResponse>("/admin/competitions", {withCredentials: true})
//     console.log(response)
//     return response.data
// }

export const registerStudent = async (
	data: Step2Data,
	competitionsId: string | undefined,
	reference: string
) => {
	const response = await axios.post<RegisterStudentResponse>(
		`/auth/register/${competitionsId}?reference=${reference}`,
		data
	);
	return response.data;
};

export const retrieveAcknowledement = async (ref: string) => {
	const response = await axios.get<RegisterStudentResponse>(
		`/user/reprint-slip/${ref}`
	);
	return response.data;
};

export const getStudentResult = async (regNo: string) => {
	const response = await axios.get<StudentResultResponse>(
		`/user/view-result/${regNo}`
	);
	return response.data;
};

export const getSchools = async () => {
	const response = await axios.get<SchoolsResponse>("/schools");
	return response.data;
};

export const getAllStudents = async () => {
	const response = await axios.get<any[]>("/students");
	return response.data;
};

export const createCompetition = async (data: competitionDataType) => {
	const response = await axios.post("/admin/create-competition", data);
};

export const createSchool = async (data: { name: string }) => {
	const response = await axios.post("/admin/school", data);
};
export const editSchool = async (data: { name: string; id: string }) => {
	const response = await axios.put(`/admin/school/${data.id}`, data);
};
export const deleteSchool = async (data: { id: string }) => {
	const response = await axios.delete(`/admin/school/${data.id}`);
};

export const downloadResultTemplate = async (
	schoolId: string,
	competitionId: string
) => {
	const response = await axios.get(
		`/admin/results-template/${schoolId}/${competitionId}`,
		{ responseType: "blob" }
	);
	return response.data;
};

export const uploadresult = async (data: UploadResultDataType) => {
	const response = await axios.post("/admin/update-results", data);
	return response.data;
};

export const getStudents = async (schoolId: string) => {
	const response = await axios.get<CompetitionStudent>(
		`/admin/students/${schoolId}`
	);
	return response.data;
};

export const getAnnouncement = async () => {
	const response = await axios.get("/announcements");
	return response.data;
};

export const getEvents = async () => {
	return (await axios.get<EventResponse>("/events")).data;
};

export const loginAdmin = async (data: { email: string; password: string }) => {
	const response = await axios.post("/auth/admin-login", data);
	return response.data;
};

export const createEvent = async (data: FormData) => {
	const response = await axios.post("/admin/create-event", data);
	return response.data;
};

export const getSession = async () => {
	const response = await axios.get("/auth/check-auth", {
		withCredentials: true,
	});
	return response;
};

export const logout = async () => {
	const response = await axios.get("/auth/logout");
	return response;
};
