import { Locator, Page } from "@playwright/test"
import { expect } from '@playwright/test'


export class LoginPage {

    private readonly usernameTextBox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly shoppingCartIcon: Locator

    constructor(page: Page) {
        this.usernameTextBox = page.getByRole('textbox', { name: 'Username' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.shoppingCartIcon = page.locator("xpath=//a[contains(@class, 'shopping_cart_link')]")
    }

    async fillUsername(username: string) {
        await this.usernameTextBox.fill(username)
    }
    
    async fillPassword(password: string) {
        await this.passwordTextbox.fill(password)
    }

    async clickOnLogin() {
        await this.loginButton.click()
    }

    async loginWithCredentials(username:string, password:string){
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }

    async checkSuccessfulLogin(){
        await expect(this.shoppingCartIcon).toBeVisible()
    }
}

    