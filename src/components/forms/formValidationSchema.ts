import * as Yup from "yup"



  export const loginSchema = Yup.object({
    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
      .required("no email provided"),
    password: Yup.string()
      .required("No password provided")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
  });

  export const resetPasswordSchema = Yup.object({
    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
      .required("no email provided"),
   
  });

  export const contactFormSchema = Yup.object({
    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
      .required("no email provided"),
      firstName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('first Name is required'),
       lastName: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('last Name is required'),
         message: Yup.string().required("message is required")
   
  });

 