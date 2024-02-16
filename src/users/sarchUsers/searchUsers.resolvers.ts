import { Resolvers } from "../../types";

const resolvers: Resolvers = {
    Query: {
        searchUsers: async (_, {keyword, lastId}, {client}) => {
            const aUsers = await client.user.findMany({where: { OR: [
                {
                    username: { startsWith: keyword.toLowerCase() } 
                }, 
                { 
                    username: { contains: keyword.toLowerCase() } 
                }]},
                take: 5,
                skip: 1,
                ...(lastId && {cursor: {id:lastId}}),
            });

            return {
                ok:true,
                users: aUsers,
            };
        }
    }
}

export default resolvers;