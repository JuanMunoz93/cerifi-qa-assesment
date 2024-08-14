import { ArticlePage } from "../pages/article/article.po";
import { CartPage } from "../pages/cart/cart.po";
import { CheckoutCompletePage } from "../pages/checkout/checkoutComplete.po";
import { CheckoutInfoPage } from "../pages/checkout/checkoutInfo.po";
import { CheckoutOverviewPage } from "../pages/checkout/checkoutOverview.po";
import { HomePage } from "../pages/home/home.po";
import { LoginPage } from "../pages/login/login.po";
import { ArticleInfo, UserInfo } from "../types/business.type";
import { faker } from '@faker-js/faker';

describe('purchase flow', () => {

  it('purchase one item', () => {
    const loginPage = new LoginPage();
    loginPage.goto();
    loginPage.login();

    const testArticleInfo=getTestData();
    cy.task('logTestData', JSON.stringify(testArticleInfo));

    const userInfo=generateUserData();
    cy.task('logTestData', JSON.stringify(userInfo));
        
    const homePage = new HomePage();
    homePage.openItemByName(testArticleInfo.name);

    const articlePage = new ArticlePage();
    articlePage.validateArticleInfo(testArticleInfo);
    articlePage.addToCart();
    articlePage.goToCart();

    const cartPage = new CartPage();
    cartPage.verifyOneItemInCart(testArticleInfo);
    cartPage.goToCheckout();
    
    const checkoutInfoPage = new CheckoutInfoPage();
    checkoutInfoPage.fillUserInfoAndContinue(userInfo);

    const checkoutOverviewPage = new CheckoutOverviewPage();
    checkoutOverviewPage.verifyOneItemInCheckout(testArticleInfo);
    checkoutOverviewPage.finishPurchase();
  

    const checkoutCompletePage = new CheckoutCompletePage();
    checkoutCompletePage.verifyPurchaseIsComplete();
      
  })

})

//this will be an automatic process, i.e. db queries
  function getTestData():ArticleInfo{
    return {
      id:"4",
      name:"Sauce Labs Backpack",
      price:"$29.99"
    }
  }
  
  function generateUserData():UserInfo{
    return {
      firstName:faker.person.firstName(),
      lastName:faker.person.lastName(),
      postalCode:faker.location.zipCode()
    }
  }