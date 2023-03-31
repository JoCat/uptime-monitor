import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { FastifyReply } from 'fastify';

import { AuthGuard } from './auth.guard';
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

  @UseGuards(AuthGuard)
  @Get('check')
  check() {
    return {
      message: 'You are logged in',
    };
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  logout(@Res() response: FastifyReply) {
    this.authService.logout(response);
  }
}
