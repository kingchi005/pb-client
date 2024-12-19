"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { contactFormSchema } from "@/components/forms/formValidationSchema";
import { Button, SmallLoader, TextField } from "@/components";
import { sendEmail } from "@/lib/email/sendEmail";
import { truncate } from "fs/promises";
import toast from "react-hot-toast";
type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
};

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const formik = useFormik<FormValues>({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		},
		validationSchema: contactFormSchema,
		onSubmit: (values, { resetForm }) => {
			// Handle form submission here
			setLoading(true);
			sendEmail(values)
				.then((result) => {
					console.log(result);
					toast.success("email sent successfully", { duration: 5000 });
					resetForm();
				})
				.catch((err) => toast.error("error sending email", { duration: 5000 }))
				.finally(() => setLoading(false));
		},
	});

	return (
		<form
			className="mx-6 mt-6 grid grid-cols-2 gap-6 rounded-md bg-white p-4 shadow-lg md:w-1/2"
			onSubmit={formik.handleSubmit}
		>
			<h2 className="col-span-2 font-righteous text-2xl text-primary">
				Get in Touch
			</h2>
			<p className="col-span-2">We are here for You. How can we help?</p>
			<div className="col-span-2">
				<TextField
					name="firstName"
					type="text"
					label="firstName"
					value={formik.values.firstName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.errors.firstName &&
						formik.errors.firstName &&
						formik.errors.firstName
					}
				/>
			</div>

			<div className="col-span-2">
				<TextField
					name="lastName"
					type="text"
					label="lastName"
					value={formik.values.lastName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.errors.lastName &&
						formik.touched.lastName &&
						formik.errors.lastName
					}
				/>
			</div>
			<div className="col-span-2">
				<TextField
					name="email"
					type="email"
					label="email"
					autoComplete="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.errors.email && formik.touched.email && formik.errors.email
					}
				/>
			</div>

			<div className="col-span-2">
				<label>Message</label>
				<textarea
					name="message" 
					rows={6}
					id="message"
					value={formik.values.message}
					onChange={formik.handleChange}
					placeholder="Enter your message"
					required
           className="hover:border hover:border-app-primary/50 outline-none p-2 w-full"
					// className={`col-span-1 rounded-md border bg-transparent px-2 outline-none focus:border-primary w-max`}
				/>
				<p className="mt-[-1rem] text-xs text-red-500">
					{formik.errors.message &&
						formik.touched.message &&
						formik.errors.message}
				</p>
			</div>

			<Button
				type="submit"
				size="fullwidth"
				className="col-span-2 py-3 rounded-3xl"
				disabled={loading}
			>
				{loading && <SmallLoader />}
				Send a message
			</Button>
		</form>
	);
}
