import * as Yup from "yup"


export const createCompetitionValidation = Yup.object({
    name: Yup.string().min(5, "at least 4 characters").required("name is required"),
    juniorRegFee: Yup.number().min(1000, "Not less than 1000").required("amount is required"),
    seniorRegFee: Yup.number().min(1000, "Not less than 1000").required("amount is required"),
    graduateRegFee: Yup.number().min(1000, "Not less than 1000").required("amount is required"),
})