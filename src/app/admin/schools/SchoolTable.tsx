import { Loader } from "@/components";
import { School } from "@/lib/axios/apiRequestTypes";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import { deleteSchool, editSchool, getSchools } from "@/lib/axios/requests";
import { Dialog } from "@radix-ui/react-dialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Delete } from "lucide-react";
import React from "react";

const schools: School[] = [
	{ id: "1", name: "Sue Spencer", students: 58 },
	{ id: "2", name: "Cynthia Lawson", students: 58 },
	{ id: "3", name: "Georgie Powell", students: 74 },
	{ id: "4", name: "Milton Payne", students: 14 },
];

export default function SchoolTable() {
	const { data, isLoading, isError } = useQuery(["all-schools"], getSchools);
	const [isEditing, setIsEditing] = React.useState(false);
	const queryClient = useQueryClient();

	const updateSchool = useMutation({
		mutationFn: (data: { name: string; id: string }) => editSchool(data),
		onSuccess: (data) => {
			queryClient.invalidateQueries(["all-schools"]);
		},
	});
	const removeSchool = useMutation({
		mutationFn: (data: { id: string }) => deleteSchool(data),
		onSuccess: (data) => {
			queryClient.invalidateQueries(["all-schools"]);
		},
	});

	if (isLoading)
		return (
			<div>
				<Loader />
			</div>
		);

	if (isError)
		return <h2 className="mt-4 text-center">Error trying to get records</h2>;

	async function handleDelete() {
    return await removeSchool;
	}
	async function handleUpdate() {
    return (id: string) => {};
	}

	return (
		<div className=" mt-5 border-collapse border-spacing-4 rounded-md border border-primary">
			<ul className="flex flex-col flex-wrap gap-4 p-5">
				{data.data.schools &&
					data.data.schools.map(({ id, name, students }) => (
						<li
							key={id}
							className="grid grid-flow-col  rounded bg-blue-100 p-4 "
						>
							<span>{name}</span>
							{/* <span className="ml-auto ">{students} students</span> */}
							<span className="ml-auto flex flex-row gap-3">
								<button onClick={() => setIsEditing(true)}>
									<Edit />
								</button>
								<button onClick={()=>removeSchool.mutate({id})}>
									<Delete />
								</button>
							</span>
						</li>
					))}
			</ul>
		</div>
	);
}
