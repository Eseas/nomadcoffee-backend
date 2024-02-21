import { Resolvers } from "../types";

const resolvers: Resolvers = {
    CoffeeShop: {
        user: ({userId}, _, {client}) => client.user.findUnique({where: {id: userId}}),  // End : User
        photos: ({id}, _, {client}) =>
            client.coffeeShopPhoto.findMany({
                where: {
                    shop: {
                        id
                    }
                }
            }),  // End : photos
        categories: ({id}, _, {client}) =>
            client.category.findMany({
                where: {
                    shops: {
                        some: {
                            id,
                        },
                    },
                },
            })// End : categories
    },
    Category: {
        totalShops: ({id}, _, {client}) =>{
            console.log(id);
            return client.coffeeShop.count({where: {
                categories: {
                    some: {
                        id,
                    }
                }
            }});

        },  // End: totalShops
    }
}

export default resolvers;