// src/films/films.controller.ts
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async findAll() {
    return await this.filmsService.findAll();
  }

  @Get(':url')
  async findOne(@Param('url') url: string) {
    return await this.filmsService.findOne(url);
  }

  @Post()
  async create(@Body() createFilmDto) {
    return await this.filmsService.create(createFilmDto);
  }
}
