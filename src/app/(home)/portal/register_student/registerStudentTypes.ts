export interface FormTypes {
	firstName: string;
	lastName: string;
	address: string;
	email: string;
	whatsappNumber: string;
	phoneNumber: string;
	faculty: string;
	department: string;
	state: string;
	hasInternationalPassport: boolean;
	// imageUrl: string;
};

  export interface Step2Data extends FormTypes  {
    amount: number;
    state: string
    passport: string
    schoolId: string
    level: string
  };

  type ReferenceType = {
    reference: number
  }



  export type Step3Data = Step2Data & ReferenceType


  