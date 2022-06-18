import { Controller, Get } from '@nestjs/common';

import { ThemeService } from './theme.service';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Get()
  getThemeSettings() {
    return {
      logoUrl: '/logo.png',
      backgroundColor: '#222',
      title: 'Uptime Monitor',
      logoAlt: 'Uptime Monitor',
    };
  }
}
