import { randomUUID } from 'crypto';

import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FastifyReply } from 'fastify';

import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private authData: { authToken: string; authExpires: Date };

  constructor(private configService: ConfigService) {}

  public login(loginDto: LoginDto) {
    const adminUsername = this.configService.get<string>(
      'ADMIN_USERNAME',
      'admin',
    );
    const adminPassword = this.configService.get<string>(
      'ADMIN_PASSWORD',
      'admin',
    );

    if (
      loginDto.username !== adminUsername ||
      loginDto.password !== adminPassword
    ) {
      throw new BadRequestException('Invalid credentials');
    }
  }

  public isAuthenticated(authCookie: string) {
    if (!authCookie) return false;
    if (!this.authData) return false;

    if (this.authData.authToken !== authCookie) return false;
    if (this.authData.authExpires < new Date()) return false;

    return true;
  }

  public setAuthCookie(response: FastifyReply) {
    const authToken = randomUUID();
    const authExpires = new Date(Date.now() + 604_800_000); // 7 days

    this.authData = { authToken, authExpires };

    response.setCookie('authToken', authToken, {
      signed: true,
      httpOnly: true,
      secure: this.configService.get('COOKIE_SECURE', 'false') === 'true',
      domain: this.configService.get('COOKIE_DOMAIN', 'localhost'),
      path: '/',
      expires: authExpires,
    });
  }
}
