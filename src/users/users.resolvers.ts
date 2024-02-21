import client from "../client"

export default {
    User: {
        totalFollowing: ({id}) => {
            client.user.count({where: {
                followers: {
                    some: {
                        id,
                    }
                }
            }})
        },
        totalFollowers: ({id}) => {
            client.user.count({where: {
                following: {
                    some: {
                        id,
                    }
                }
            }})
        },
        totalShops: ({id}, _, {client}) => client.coffeeShop.count({where: {userId : id}}),
        isMe: ({id}, _, {loggedInUser}) => {
            if(!loggedInUser) {
                return false;
            }
            return id === loggedInUser.id;
        },
        isFollowing: async ({id}, _, {loggedInUser}) => {
            if(!loggedInUser) {
                return false;
            }
            // 현재 로그인하고 있는 유저의 id가 상대 유저의 following 목록에 있다면,
            // exists의 길이가 1이 되고, true가 반환된다.
/*
            const exists = await client.user.findUnique({
                where: {username:loggedInUser.username}
            }).following({
                where:{
                    id,
                },
            });
            return exists.length !== 0;
*/
            const exists = await client.user.count({
                where: {
                    username:loggedInUser.username,
                    following: {
                        some: {
                            id,
                        },
                    },
                },
            });
            return Boolean(exists);
        },
        shops: ({id}, {page}, {client}) => client.user.findMany({
            where: {id},
            take: 5,
            skip: page,
        })
    }
}