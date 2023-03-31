import { Body, Controller, Post, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: FastifyReply,
  ) {
    this.authService.login(loginDto);
    this.authService.setAuthCookie(response);
  }
}
