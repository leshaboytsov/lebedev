import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Film extends Document {
  @Prop({ required: true })
  pageTitle: string;

  @Prop({ required: true })
  filmName: string;

  @Prop({ required: true })
  description: string;

  @Prop({ unique: true, required: true })
  url: string;

  // @Prop({ unique: true, required: true })
  // key: string;

  @Prop({ required: true })
  poster1: string;

  @Prop({ required: true })
  video: string;

  @Prop({ default: 0 })
  views: number;

  @Prop({ type: Date, required: true })
  data: Date;
}

export const FilmSchema = SchemaFactory.createForClass(Film);
