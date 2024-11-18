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

  hero: [
    {
      id: 1,
      name: "blessed redeemer fashion and design",
      img: "/img/pic2.jpg",
    },

    {
      id: 2,
      name: "blessed redeemer fashion and design",
      img: "/img/pic3.jpg",
    },

    {
      id: 3,
      name: "blessed redeemer fashion and design",
      img: "/img/pic4.jpg",
    },

    {
      id: 4,
      name: "blessed redeemer fashion and design",
      img: "/img/pic5.jpg",
    },

    {
      id: 5,
      name: "blessed redeemer fashion and design",
      img: "/img/pic7.jpg",
    },

    {
      id: 6,
      name: "blessed redeemer fashion and design",
      img: "/img/pic8.jpg",
    },
  ],
};
export default allData;
