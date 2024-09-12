import * as Yup from "yup"


export const createSchoolValidation = Yup.object({
    name: Yup.string().min(5, "at least 4 characters").required("name is required"),
})