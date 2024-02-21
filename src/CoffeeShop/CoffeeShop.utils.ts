export const processCategories = (caption) => {
    const categories = caption.match(/ +/g) || [];
    return categories.map((category) => ({
        where: {category},
        create: {category},
    }));
}