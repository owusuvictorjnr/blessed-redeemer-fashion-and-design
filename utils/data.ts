import bcrypt from "bcryptjs";

const allData = {
  users: [
    {
      // id: 1,
      name: "John Doe",
      email: "aadmin@example.com",
      password: bcrypt.hashSync("A123456", 10),
      isAdmin: true,
    },

    {
      // id: 2,
      name: "John Doe",
      email: "vitech@example.com",
      password: bcrypt.hashSync("B123456", 10),
      isAdmin: false,
    },
  ],
  logo: [
    {
      id: 1,
      name: "blessed redeemer fashion and design",
      img: "/logo/logo1.jpg",
    },
  ],
};
export default allData;
