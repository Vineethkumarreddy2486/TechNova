export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  college: string;
  department: string;
  yearOfStudy: string;
  phone: string;
  password: string;
  cnfrmPassword: string;
}


export interface LoginInterface{
  email:string;
  password:string;
}