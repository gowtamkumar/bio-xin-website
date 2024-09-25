const url = process.env.NEXT_PUBLIC_APP_URL 

const apiBaseUrl = process.env.NEXT_SERVER_URL;

export const appConfig = {
  name: "E-commerce",
  title: "E-commerce",
  description: "",
  url,
  apiBaseUrl,
  author: {
    name: "E-commerce",
    email: "demo@gmail.com",
    website: "www.commerce.com",
  },
  links: {
    linkedIn: "",
    github: "",
  },
};

export default appConfig;
