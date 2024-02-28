import client from "../../client";

export default {
    Query: {
        findMyCoffeeshops: async (_, {username}) => {
            const user = await client.user.findUnique({
                where: {
                    username: username,
                },
            });
            console.log(user.id);
            if (!user) {
                throw new Error("User not found");
            }

            const aCoffeeShops = await client.coffeeShop.findMany({
                where: {
                    userId: user.id
                },
            });
            console.log(aCoffeeShops);
            return {
                Shops: aCoffeeShops,
            }
        }
    }
}