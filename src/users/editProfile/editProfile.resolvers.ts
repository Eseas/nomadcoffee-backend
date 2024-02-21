import bcrypt from 'bcrypt';
import { protectedResolver } from "../users.utils";
import client from '../../client';
import { uploadToS3 } from '../../shared/shared.utils';

export default {
    Upload: require('graphql-upload-ts').GraphQLUpload,
    Mutation: {
        editProfile: protectedResolver(
            async (
            _,
            { firstName, lastName, username, email, password: newPassword , bio, avatar },
            { loggedInUser },
            ) => {
                let avatarUrl = null;

                if (avatar) {
                    avatarUrl = await uploadToS3(avatar, loggedInUser.id, "avatars");
                }

                let uglyPassword = null;
                if (newPassword) {
                    uglyPassword = await bcrypt.hash(newPassword, 10);
                }

                const isUpdate = await client.user.update({
                    where: { id: loggedInUser.id },
                    data: {
                        firstName,
                        lastName,
                        username,
                        email,
                        bio,
                        ...(uglyPassword && { password: uglyPassword }),
                        ...(avatarUrl && { avatar : avatarUrl }),
                    },
                });
                console.log(isUpdate);
                if (isUpdate) {
                    return {
                        ok: true,
                    };
                } else {
                    return {
                        ok: false,
                        error: '프로필을 업데이트 할 수 없습니다.',
                    };
                }
            },
        ),
    },
}