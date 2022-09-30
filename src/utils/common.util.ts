export const paginationModal = (page, perPage) => {
  const _page = Number(page);
  const _perPage = Number(perPage);
  return {
    skip: _page > 1 ? (_page - 1) * _perPage : 0,
    take: _perPage,
  };
};

export const paginationResult = (page, perPage, total) => ({
  page: Number(page),
  perPage: Number(perPage),
  total: Number(total),
});
