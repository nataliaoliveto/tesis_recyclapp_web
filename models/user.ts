export interface UserCreate {
  name: string;
  surname: string;
  mail: string;
  phone: string;
  password: string;
  username: string;
  address?: AddressCreate[];
  userType: "CUSTOMER" | "STORE"
}

interface AddressCreate {
  city: string;
  flat: string;
  street: string;
  latitude: number;
  longitude: number;
  state: string;
}
