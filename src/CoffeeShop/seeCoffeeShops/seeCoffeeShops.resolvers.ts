export default {
    Query: {
        seeCoffeeShops: (_, {page}, {client}) => {
            const aCoffeeShops = client.CoffeeShop.findMany({
                take: 5,
                skip: (page - 1) * 5,
            });

            return {
                Shops: aCoffeeShops,
            }
        }
    }
}
