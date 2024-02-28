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
        categories: ({id}, _, {client}) => {
            console.log(id)
            return client.category.findMany({
                where: {
                    shops: {
                        some: {
                            id: id,
                        },
                    },
                },
            })
        }// End : categories
    },
    Category: {
        totalShops: ({id}, _, {client}) =>{
            console.log(id);
            return client.coffeeShop.count({
                where: {
                    categories: {
                        id,
                    },
                },
            });
        },  // End: totalShops
    }
}

export default resolvers;