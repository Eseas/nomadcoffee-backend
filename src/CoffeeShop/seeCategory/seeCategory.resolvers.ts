import { Resolvers } from "../../types"

const resolvers: Resolvers = {
    Query: {
        seeCategory: (_, {id}, { client }) =>
            {
                const aCategory = client.category.findUnique(
                    {
                        where: {
                            id,
                        },
                    }
                );
                return {
                    category: aCategory
                };
            }
    },
};

export default resolvers;