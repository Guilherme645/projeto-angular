import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { singnupUserRequest } from '../../models/interfaces/user/SignupUserRequest';
import { Observable } from 'rxjs';
import { SignupUserResponse } from '../../models/interfaces/user/SignupUserResponse';
import { AuthRequest } from '../../models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from '../../models/interfaces/user/auth/AuthResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private API_URL = environment.API_URL;
  constructor( private http: HttpClient) { }
  singnupUser( resquestDatas: singnupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`, resquestDatas
    );
  }

  authUser(resquestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, resquestDatas);
  }
}
