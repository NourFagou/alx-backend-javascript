export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction{
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.substring(0, 1)}. ${lastName}`;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInt;
}

export interface StudentClassInt {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInt{
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}
