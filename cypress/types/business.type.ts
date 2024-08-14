/**
 * Type that represents article's basic information
 * @typedef {Object} ArticleInfo
 * @property {string} id - The article's id.
 * @property {string} price - The article's price, includes the currency symbol.
 * @property {string} name - The article's name.
 */
export type ArticleInfo = {
  id: string;
  price: string;
  name: string;
};

/**
 * Type that represents the information about the user that is necessary on the purchase process.
 *
 * @typedef {Object} UserInfo
 * @property {string} firstName - The user's first name.
 * @property {string} lastName - The user's last name.
 * @property {string} postalCode - The user's postal code.
 */
export type UserInfo = {
  firstName: string;
  lastName: string;
  postalCode: string;
};
