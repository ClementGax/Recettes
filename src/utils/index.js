import slugify from 'slugify';

export const slugifyTitle = (title) => {
  const slug = slugify(title, {
    lower: true,
  });

  return slug;
};

export const getRecipeBySlug = (recipes, slug) => (
  recipes.find((recipe) => slugifyTitle(recipe.title) === slug)
);
