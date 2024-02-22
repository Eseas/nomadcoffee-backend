import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";
import { processCategories } from "../CoffeeShop.utils";

export default {
    Mutation: {
        editCoffeeShop: protectedResolver(
            async(_,
                {id, name, logitude, latitude, category},
                {loggedInUser, client}
            ) => {
                console.log(id, name, logitude, latitude, category);
                const existCoffeeShop = await client.CoffeeShop.findUnique({
                    where: {
                        id,
                    },
                    include: {
                        categories: {
                            select: {
                                id: true,
                            }
                        }
                    }
                });
                
                if(!existCoffeeShop) {
                    return {
                        ok:false,
                        error: "커피샵을 찾지 못했습니다.",
                    };
                }

                const newCoffeeShop = await client.CoffeeShop.update({
                    where: {
                        id,
                    },
                    data: {
                        name,
                        logitude,
                        latitude,
                        ...(category && {
                        categories: {
                            disconnect: existCoffeeShop.categories,
                            connectOrCreate: processCategories(category)
                        }}),
                    }
                });
                console.log(newCoffeeShop);
                return {
                    ok: true,
                };
            }
        )
    }
} as Resolvers;