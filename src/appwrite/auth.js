import conf from '../conf/conf.js';
import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // Create Google OAuth login method
createGoogleOAuth() {
    try {
      // Generate the OAuth URL for Google
      const currentHost = window.location.origin;

        return this.account.createOAuth2Session(
        OAuthProvider.Google, // Provider ID for Google
        `${currentHost}/auth/callback`, // Success redirect URL
        `${currentHost}/login`, // Failure redirect URL
        ["profile", "email"] // Requested OAuth scopes
      );

    } catch (error) {
      console.log("Appwrite service :: createGoogleOAuth :: error", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get(); // Fetch the currently logged-in user
      console.log("User data:", user); // Optional: log user info
      return user; // Return the fetched user
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return null; // Return null on error
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService

