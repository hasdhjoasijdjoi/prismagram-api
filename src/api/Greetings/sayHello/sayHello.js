import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    sayHello: async () => {
      console.log(await prisma.users()); // prisma api에있는 필드 실행
      return "Hellow";
    },
  },
};
