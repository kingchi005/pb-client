import { Button, Loader } from "@/components";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { School } from "@/lib/axios/apiRequestTypes";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import { deleteSchool, editSchool, getSchools } from "@/lib/axios/requests";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@radix-ui/react-dialog";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverClose,
} from "@radix-ui/react-popover";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Delete, Copy } from "lucide-react";
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
	const [search, setSearch] = React.useState("");
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

	async function handleDelete(id: string) {
		if (confirm("Are you sure?")) {
			removeSchool.mutate({ id });
		}
	}
	async function handleUpdate() {
		return (id: string) => {};
	}

	return (
		<>
			<div className="mb-4 flex items-center gap-2">
				<Input
					placeholder="Search schools by name..."
					value={search}
					onChange={e => setSearch(e.target.value)}
					className="w-64"
				/>
			</div>
			<div className=" mt-5 border-collapse border-spacing-4 rounded-md border border-primary">
				<ul className="flex flex-col flex-wrap gap-4 p-5">
					{data.data.schools &&
						data.data.schools
							.filter(school => school.name.toLowerCase().includes(search.toLowerCase()))
							.sort((a, b) => (a.name?.[0] > b.name?.[0] ? 1 : 0))
							.map(({ id, name, students }) => (
								<li
									key={id}
									className="grid grid-flow-col  justify-start gap-5 rounded bg-blue-100 p-4 group"
								>
									{/* <span className="ml-auto ">{students} students</span> */}
									<span className="flex-row gap-3 hidden group-hover:flex">
										<Popover>
											<PopoverTrigger>
												<Edit color="#555" />
											</PopoverTrigger>
											<PopoverContent align="start" className="w-[100%]">
												<form
													onSubmit={(ev) => {
														ev.preventDefault();
														updateSchool.mutate({
															id,
															//@ts-ignore
															name: ev.currentTarget.name!.value!,
														});
													}}
													className="justify-start items-center flex w-full"
												>
													{/* <Label htmlFor="width">Name</Label> */}
													<Input
														id="width"
														name="name"
														defaultValue={name}
														className="col-span-2 h-8 w-full"
													/>
													{/* <PopoverClose> */}
													<button
														type="submit"
														// onClick={() => setIsEditing(true)}
														className="btn-xs text-xs bg-app-green py-1 px-3"
													>
														save
													</button>
													{/* </PopoverClose> */}
												</form>
											</PopoverContent>
										</Popover>
										{/* <button onClick={() => setIsEditing(true)}>
										<Edit />
									</button> */}
										<button onClick={() => handleDelete(id)}>
											<Delete color="#555" />
										</button>
									</span>
									<span>{name}</span>
								</li>
							))}
				</ul>
			</div>
		</>
	);
}
