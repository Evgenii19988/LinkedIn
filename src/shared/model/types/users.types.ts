export interface User {
  firstName: string;
  lastName: string;
  description: string;
  image: string | ArrayBuffer;
  id?: string | number;
}
