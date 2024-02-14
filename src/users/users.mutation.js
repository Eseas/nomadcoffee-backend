import client from "../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      // DB에서 이름과 email로 유저를 찾는다.
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });
      console.log(existingUser);
      
      const uglyPassword = await bcrypt.hash(password, 10);

      return client.user.create({
        data: {
          username,
          email,
          firstName,
          lastName,
          password: uglyPassword,
        },
      });
    },
  },
};