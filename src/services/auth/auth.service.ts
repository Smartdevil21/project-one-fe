import { BaseService } from "@/services/base.service";
import {
  ICreateUser,
  ILoginUser,
  ISignupResponse,
  ITokenAuthResponse,
} from "@/typings/interfaces/user/user.interface";
import axios from "axios";

class AuthService extends BaseService {
  private static authService: AuthService;

  constructor() {
    super();
  }

  private static intialiseInstance() {
    this.authService = new AuthService();
  }

  public static getInstance(): AuthService {
    if (this.authService == null) {
      this.intialiseInstance();
    }
    return this.authService;
  }

  public async signup(user: ICreateUser): Promise<ISignupResponse> {
    const result = await axios.post(`${this.httpBaseUrl}/auth/signup`, user);
    return result.data;
  }

  public async login(user: ILoginUser): Promise<ISignupResponse> {
    const result = await axios.post(`${this.httpBaseUrl}/auth/login`, user);
    return result.data;
  }

  public async tokenAuth(token: string): Promise<ITokenAuthResponse> {
    const result = await axios.post(`${this.httpBaseUrl}/auth/token`, {
      token,
    });
    return result.data;
  }
}

export { AuthService };
