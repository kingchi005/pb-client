"use client";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepperIndicator from "./StepperIndicator";
import { useFormik } from "formik";
import { registerValidationSchema } from "./registerValidationSchema";
import { Button, Loader, Overlay } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getCompetitions, registerStudent } from "@/lib/axios/requests";
import { FormTypes, Step2Data } from "./register_student/registerStudentTypes";
import { ResponseData } from "@/lib/axios/requestTypes";
import toast from "react-hot-toast";
import STATES from "@/lib/states.json";

const courseList = [
	{
		name: "Seconary",
	},
	{
		name: "Tertiary",
	},
];

export default function Register() {
	const pathname = usePathname();

	const [steps, setSteps] = useState(1);
	const [studentLevelValue, setStudentLevelValue] = useState({
		name: "",
		amount: 0,
	});
	const [course, setCourse] = useState(STATES[0]);
	const [studentSchool, setStudentSchool] = useState({
		name: "",
		id: "",
	});
	const [images, setImages] = useState<any>([]);
	const step2Data = useRef<Step2Data | null>(null);
	const step3Data = useRef<ResponseData | null>(null);
	const [loading, setloading] = useState(false);
	const { data } = useQuery(["competitions"], getCompetitions);

	const { id } = data?.data.ongoingCompetitions[0] || {};

	useEffect(() => {
		if (data) {
			const studentsLevel = {
				name: "Tertiary",
				amount: data?.data.ongoingCompetitions[0].graduateRegFee,
			};

			setStudentSchool(data.data.ongoingCompetitions[0].schools[0]);
			setStudentLevelValue(studentsLevel);
		}
	}, [data]);
	const formik = useFormik<FormTypes>({
		initialValues: {
			firstName: "",
			lastName: "",
			address: "",
			email: "",
			phoneNumber: "",
			faculty: "",
			department: "",
			whatsappNumber: "",
			state: "",
			hasInternationalPassport: false,
		},
		validationSchema: registerValidationSchema,
		onSubmit: (values) => {
			if (images.length > 0 && data !== undefined) {
				step2Data.current = {
					...values,
					amount: studentLevelValue.amount,
					state: course.name,
					passport: images[0].dataURL,
					schoolId: studentSchool.id,
					level: studentLevelValue.name,
				};

				setSteps(2);
			}
		},
	});

	const handleNextButton = () => {
		if (steps === 1) {
			formik.handleSubmit();
		}
	};

	const getPaymentReference = (reference: string) => {
		// register student after successful payment
		if (step2Data.current != undefined) {
			setloading(true);
			step2Data.current;

			registerStudent(step2Data.current, id, reference)
				.then((data) => {
					step3Data.current = data.data;
					setSteps(3);
				})
				.catch((err) => {
					toast.error("error registering student contact admin");
				})
				.finally(() => setloading(false));
		}
	};
	return (
		<section
			className={`mx-auto min-h-screen w-[90%] ${
				pathname.includes("register_student")
					? " py-[8rem] pt-[5rem]  lg:w-[60%]"
					: ""
			}`}
		>
			<StepperIndicator steps={steps} />
			{steps === 1 ? (
				<Step1
					formik={formik}
					studentLevelValue={studentLevelValue}
					setStudentLevelValue={setStudentLevelValue}
					course={course}
					setCourse={setCourse}
					studentSchool={studentSchool}
					setStudentSchool={setStudentSchool}
					images={images}
					setImages={setImages}
				/>
			) : steps === 2 ? (
				<Step2
					step2Data={step2Data}
					getPaymentReference={getPaymentReference}
				/>
			) : (
				<Step3 step3Data={step3Data.current} />
			)}

			<div className="flex items-center justify-center">
				{steps === 1 ? (
					<Button
						type="button"
						size="medium"
						className="mx-auto mt-4 py-2"
						onClick={handleNextButton}
					>
						next
					</Button>
				) : steps === 2 ? (
					<Button
						type="button"
						size="medium"
						className="mx-auto mt-4 py-2"
						onClick={() => setSteps((prev) => prev - 1)}
					>
						Prev
					</Button>
				) : null}
			</div>
			{loading && (
				<Overlay>
					<Loader />
				</Overlay>
			)}
		</section>
	);
}
