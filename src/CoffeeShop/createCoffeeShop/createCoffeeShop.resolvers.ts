import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";
import { processCategories } from "../CoffeeShop.utils";

export default {
  Upload: require('graphql-upload-ts').GraphQLUpload,
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (_,
        { name, latitude, logitude, CoffeeShopPhoto, category },
        { loggedInUser, client }) => {
            try{
        console.log(name, "/", latitude, "/", logitude, "/", category);
        console.log(processCategories(category));
        const NewCoffeeShop = await client.coffeeShop.create({
          data: {
            name,
            latitude,
            logitude,
            CoffeeShopPhoto,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            categories: {
              connectOrCreate: {
                where: {
                    slug: 'nico-in-cafe',
                },
                create: {
                    name: 'nico in cafe',
                    slug: 'nico-in-cafe',
                },
            },
            }
          },
        });
        console.log(NewCoffeeShop);
        if (CoffeeShopPhoto) {
          const fileUrl = await uploadToS3(CoffeeShopPhoto, loggedInUser.id, category);
          console.log(fileUrl)
          client.CoffeeShopPhoto.create({
            data: {
              url: fileUrl,
              shop: {
                connect: {
                  id: NewCoffeeShop.id
                }
              }
            }
          });
        }
        
        return {
          ok: true,
        }
        } catch (err) {
            return {
                ok: false,
                error: err
            }
        }
      }
    )
  }
}