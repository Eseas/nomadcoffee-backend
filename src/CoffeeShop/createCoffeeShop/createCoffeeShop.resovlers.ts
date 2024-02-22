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
          //console.log(CategoryObj);
          //console.log(CoffeeShopPhoto);
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
                  connectOrCreate: processCategories(category),
                },
            }
          });
          //console.log(NewCoffeeShop);
          const CoffeeShopPhotos = [];
          if (CoffeeShopPhoto) {
            for (let i = 0; i < CoffeeShopPhoto.length; i++) {
              const fileUrl = await uploadToS3(CoffeeShopPhoto[i], loggedInUser.id, category);
              const newCoffeeShopPhoto = client.CoffeeShopPhoto.create({
                data: {
                  url: fileUrl,
                  shop: {
                    connect: {
                      id: NewCoffeeShop.id
                    }
                  }
                }
              });
              CoffeeShopPhotos.push(newCoffeeShopPhoto);
            }
          }
  
          //console.log(CoffeeShopPhotos);
          return {
            ok: true,
          }
      }
    )
  }
}