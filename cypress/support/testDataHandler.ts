import { faker } from "@faker-js/faker";
import { ArticleInfo, UserInfo } from "../types/business.type";

//For both cases, the info should be defined by the env, probably the information should be different base on that.

/**
 * Retrieves an article data. This should be a db connection / api / file and if possible not hardcoded data
 *
 * @returns {ArticleInfo} A "random" article info.
 */

export function getTestData(): ArticleInfo {
  return {
    id: "4",
    name: "Sauce Labs Backpack",
    price: "$29.99",
  };
}

/**
 * Retrieves the user data. It can be parametrized, hardcoded or randomized.
 *
 * @returns {UserInfo} An object containing test data for an article.
 */
export function generateUserData(): UserInfo {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    postalCode: faker.location.zipCode(),
  };
}
