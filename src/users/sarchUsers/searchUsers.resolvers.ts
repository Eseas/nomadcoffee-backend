import { Resolvers } from "../../types";

const resolvers: Resolvers = {
    Query: {
        searchUsers: async (_, {keyword, page}, {client}) => {
            const aUsers = await client.user.findMany({
                where: {
                  username: {
                    startsWith: keyword.toLowerCase(),
                  },
                },
                take: 5,
                skip: (page - 1) * 5
            });
            const totalUsers = await client.user.count({
                where: {username: {startsWith: keyword.toLowerCase()}},
            });
            return {
                Users: aUsers,
                totalPages: Math.ceil(totalUsers / 5)
            };
        }
    }
}

export default resolvers;