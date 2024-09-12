import * as Yup from 'yup';

const phoneRegExp = /^(0)(?:(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|909)\d{6}|[5789]\d{9})$/;


export const registerValidationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First Name is Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last Name is Required'),
      email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
      .required("email is provided"),
      address: Yup.string().required("Address is required"),
      phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone number is required'),
      whatsappNumber: Yup.string().matches(phoneRegExp, "invalid phone number"),
      scienceOrArt: Yup.string(),
      // imageUrl: Yup.string().required("passport is required"),


   
  })