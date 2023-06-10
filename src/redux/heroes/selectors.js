export const selectHeroes = (state) => state.heroes.heroes;
export const selectHeroesList = (state) => state.heroes.pagination;
export const selectIsLoading = (state) => state.heroes.isLoading;
export const selectShouldRedirect = (state) => state.heroes.shouldRedirect;
export const selectHero = (state) => state.heroes.activeHero;
