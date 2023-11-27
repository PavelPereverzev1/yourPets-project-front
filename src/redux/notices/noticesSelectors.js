export const selectNotices = state => state.notices.items;

export const selectQuery = state => state.notices.query;

export const selectSearchQuery = state => state.notices.query.searchQuery;

export const selectCategory = state => state.notices.query.category;

export const selectFilter = state => state.notices.query.filter;

export const selectIsRefreshing = state => state.notices.isRefreshing;

export const selectIsLoading = state => state.notices.isLoading;

export const selectTotalNotices = state => state.notices.total;

export const selectCurrentPage = state => state.notices.query.page;
