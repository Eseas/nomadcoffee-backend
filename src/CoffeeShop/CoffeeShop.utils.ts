export const processCategories = (caption) => {
    const slug = caption
    .match(/[^\s]+/g)
    ?.join('-')
    .toLowerCase() as string;

    return {
        where: {
            name: caption
        },
        create: {
            name: caption,
            slug,
        }
    };
}