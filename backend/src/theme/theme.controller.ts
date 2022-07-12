import { Controller, Get } from '@nestjs/common';

import { ThemeService } from './theme.service';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Get()
  getThemeSettings() {
    return {
      logoUrl: '/src/logo.png',
      backgroundColor: '#170934',
      title: 'Uptime Monitor',
      logoAlt: 'Uptime Monitor',
    };
  }
}
