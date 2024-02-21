import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";
import { processCategories } from "../CoffeeShop.utils";

const resolvers : Resolvers = {
    Mutation: {
        editCoffeeShop: protectedResolver(
            async(_,
                {id, name, longitude, latitude, category},
                {loggedInUser, client}
            ) => {
                const existCoffeeShop = await client.CoffeeShop.findFirst({
                    where: {
                        id,
                    },
                    include: {
                        categories: {
                            select: {
                                category: true,
                            }
                        }
                    }
                });
                if(existCoffeeShop.userId !== loggedInUser.id) {
                    return {
                        ok: false,
                        error: "수정할 권한이 없습니다."
                    }
                }

                const newCoffeeShop = await client.CoffeeShop.update({
                    where: {
                        id,
                    },
                    data: {
                        name,
                        longitude,
                        latitude,
                        category: {
                            disconnect: existCoffeeShop.categories,
                            connectOrCreate: processCategories(category)
                        }
                    }
                });
                console.log(newCoffeeShop);
                return {
                    ok: true,
                    shop: newCoffeeShop,
                };
            }
        )
    }
}