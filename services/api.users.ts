import axios from "axios";

export interface CreateUser {
  name: string;
  username: string;
  surname: string;
  mail: string;
  phone: string;
  password: string;
  userType: string;
}

export const usersApi = {
  createUser: async ({
    name,
    username,
    surname,
    mail,
    phone,
    password,
    userType,
  }: CreateUser) => {
    const body = {
      name,
      username,
      surname,
      mail,
      phone,
      password,
      userType,
    };
    const result = await axios.post("http://localhost:5000/api/user", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result.data;
  },
};
