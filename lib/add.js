function add(lhs, rhs) {
  if (lhs === null || lhs === undefined) {
    throw new Error('\'lhs\' is required');
  }
  if (rhs === null || rhs === undefined) {
    throw new Error('\'rhs\' is required');
  }

  return lhs + rhs;
}

module.exports = add;
