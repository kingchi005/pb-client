import { FormikProps } from "formik";
import { List, TextField, ImageUploader } from "@/components";
import { getCompetitions } from "@/lib/axios/requests";
import { useQuery } from "@tanstack/react-query";
import { FormTypes } from "./register_student/registerStudentTypes";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from "@radix-ui/react-select";
import STATES from "@/lib/states.json";

type Step1Props<T> = {
	formik: FormikProps<FormTypes>;
	studentLevelValue: { name: string; amount: number };
	setStudentLevelValue: React.Dispatch<
		React.SetStateAction<{
			name: string;
			amount: number;
		}>
	>;
	course: { name: string };
	setCourse: React.Dispatch<
		React.SetStateAction<{
			name: string;
		}>
	>;
	studentSchool: { name: string };
	setStudentSchool: React.Dispatch<
		React.SetStateAction<{
			name: string;
			id: string;
		}>
	>;
	images: any;
	setImages: any;
};

const courseList = [{ name: "Science" }, { name: "Art" }];
const states = [];

export const formatAmount = (amount: number) => {
	const formatter = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		minimumFractionDigits: 2,
	});

	return formatter.format(amount);
};

export default function Step1<T>({
	formik,
	studentLevelValue,
	setStudentLevelValue,
	course,
	setCourse,
	studentSchool,
	setStudentSchool,
	images,
	setImages,
}: Step1Props<T>) {
	// const [studentLevelValue, setStudentLevelValue] = useState(studentLevel[0]);
	const { isLoading, isError, data } = useQuery(
		["competitions"],
		getCompetitions
	);

	const studentsLevel = [
		// { name: "Junior", amount: data?.data.ongoingCompetitions[0].juniorRegFee },
		{
			name: "Seconary",
			amount: data?.data.ongoingCompetitions[0].seniorRegFee,
		},
		{
			name: "Tertiary",
			amount: data?.data.ongoingCompetitions[0].graduateRegFee,
		},
	];

	return (
		<section>
			<form className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="relative flex md:col-span-2">
					<ImageUploader images={images} setImages={setImages} />
					<div className="flex flex-col justify-between py-4">
						<p className="bottom-4 text-sm text-primary">Passport</p>
						<p className="mt-2 text-xs text-red-500">{`${
							images.length > 0 ? "" : "passport is required"
						}`}</p>
					</div>
				</div>
				<TextField
					name="firstName"
					label="First Name"
					type="text"
					value={formik.values.firstName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="first name"
					error={
						formik.errors.firstName &&
						formik.touched.firstName &&
						formik.errors.firstName
					}
				/>
				<TextField
					name="lastName"
					label="Last Name"
					type="text"
					value={formik.values.lastName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="last name"
					error={
						formik.errors.lastName &&
						formik.touched.lastName &&
						formik.errors.lastName
					}
				/>
				<TextField
					name="email"
					label="email"
					type="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="email"
					error={
						formik.errors.email && formik.touched.email && formik.errors.email
					}
				/>
				<TextField
					name="phoneNumber"
					label="Phone"
					type="tel"
					value={formik.values.phoneNumber}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="08175636563"
					error={
						formik.errors.phoneNumber &&
						formik.touched.phoneNumber &&
						formik.errors.phoneNumber
					}
				/>
				<TextField
					name="whatsappNumber"
					label="whatsappNumber"
					type="tel"
					value={formik.values.whatsappNumber}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="08175636563"
					error={
						formik.errors.whatsappNumber &&
						formik.touched.whatsappNumber &&
						formik.errors.whatsappNumber
					}
				/>
				<div className="flex h-full flex-col justify-between pb-2">
					<label
						htmlFor="hasInternationalPassport"
						className="text-sm font-semibold text-primary"
					>
						Have international Passport?
					</label>

					<input
						type="checkbox"
						name="hasInternationalPassport"
						id="hasInternationalPassport"
						checked={formik.values.hasInternationalPassport}
						onChange={formik.handleChange}
						className="h-[2rem] w-[2rem] rounded-full text-ring accent-primary checked:text-white focus:ring-green-400"
					/>
				</div>
				<TextField
					name="address"
					label="address"
					type="text"
					value={formik.values.address}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="address"
					error={
						formik.errors.address &&
						formik.touched.address &&
						formik.errors.address
					}
				/>
				<div className="flex flex-col">
					<label
						htmlFor="school"
						className="font-semi-bold ml-1 text-sm font-semibold capitalize text-primary block"
					>
						Institution
					</label>
					<select
						name=""
						id="school"
						className="bg-transparent border border-app-primary/40 h-[50px] rounded"
					>
						{(isLoading || isError
							? []
							: data?.data.ongoingCompetitions[0].schools
						).map((opt) => (
							<option className="self-start">{opt.name}</option>
						))}
					</select>
				</div>
				<div className="relative flex items-end gap-2">
					<List
						dropdownList={isLoading || isError ? [] : studentsLevel}
						selectedValue={studentLevelValue}
						setSelectedValue={setStudentLevelValue}
						label={"Institution Category"}
					/>

					<div className="border-gray relative flex h-full items-center pt-6">
						<span className=" flex h-[3rem] w-full items-center justify-center border px-4 font-semibold text-primary">
							{`${formatAmount(studentLevelValue.amount)}`}
						</span>

						<span className="absolute top-0 font-semibold text-primary">
							Amount
						</span>
					</div>
				</div>
				<div className="Flex flex-col ">
					<label
						htmlFor="stata"
						className="font-semi-bold ml-1 text-sm font-semibold capitalize text-primary block"
					>
						State
					</label>
					<select
						name="state"
						id="state"
						className="bg-transparent border border-app-primary/40 h-[50px] rounded"
					>
						{STATES.map((opt) => (
							<option className="self-start">{opt.name}</option>
						))}
					</select>
				</div>
				{/* <List
					dropdownList={courseList}
					selectedValue={course}
					setSelectedValue={setCourse}
					label={"State"}
				/> */}
			</form>
		</section>
	);
}
