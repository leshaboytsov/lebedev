import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FilmsService {
  constructor(@InjectModel('Film') private readonly filmModel: Model<any>) {}

  async findAll() {
    return await this.filmModel.find().sort({ data: -1 });
  }

  async findOne(url: string) {
    const film = await this.filmModel.findOne({ url });
    if (!film) {
      throw new Error('Film not found');
    }
    film.views += 1;
    await film.save();
    return film;
  }

  async create(createFilmDto) {
    const film = new this.filmModel(createFilmDto);
    return await film.save();
  }
}
