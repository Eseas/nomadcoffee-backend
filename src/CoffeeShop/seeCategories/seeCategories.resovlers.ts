import { Resolvers } from "../../types";

const resolvers : Resolvers = {
    Query: {
        seeCategories: async(_, {page}, {client}) => {
            const aCategories = await client.category.findMany({
                take:5,
                skip:(page - 1) * 5,
            });

            return {
                categories: aCategories,
            };
        }
    }
}