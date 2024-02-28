import client from "../../client";

export default {
    Query: {
      seeCategories: async (_, { page }) => {
        try {
          const aCategories = await client.category.findMany({
            take: 5,
            skip: (page - 1) * 5,
          });
          console.log(aCategories);
  
          return {
            categories: aCategories,
          };
        } catch (error) {
          console.error("Error fetching categories:", error);
          throw new Error("Failed to fetch categories");
        }
      },
    },
  };
  