import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!: User | null;

  getUser(): User | null {
    return this.user;
  }

  updateUserFromToken(token: string) {
    const infoUser: any = jwt_decode(token);
    this.user = {
      id: Number.parseInt(infoUser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid']),
      email: infoUser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
      nickname: 'albert', 
      role: infoUser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    };
  }

  clearUser() {
    this.user = null;
  }
}
