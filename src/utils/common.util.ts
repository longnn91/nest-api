export const paginationModal = (page, limit) => {
  if (!page || !limit) return null;
  const _page = Number(page);
  const _limit = Number(limit);
  return {
    skip: _page > 1 ? (_page - 1) * _limit : 0,
    take: _limit,
  };
};

export const paginationResult = (page, limit, total) => ({
  page: Number(page),
  limit: Number(limit),
  total: Number(total),
});
