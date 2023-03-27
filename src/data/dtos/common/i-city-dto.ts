enum Gender{
  'Male',
  'Female',
  'Other'
}

interface ICityDTO {
  id: number;
  name: string;
  email: string;
  gender: Gender;
}

export type { ICityDTO }
