import { Injectable } from '@nestjs/common';

import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowDto } from './dto/update-tv-show.dto';
import { TvShow } from './entities/tv-show.entity';

@Injectable()
export class TvShowsService {
  private tvShows: TvShow[] = [
    {
      id: 0,
      title: 'Peaky Blinders',
      coverImageUrl:
        'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
      rating: 5,
    },
  ];
  create(createTvShowDto: CreateTvShowDto) {
    return 'This action adds a new tvShow';
  }

  findAll(): TvShow[] {
    return this.tvShows;
  }

  findOne(id: number): TvShow | undefined {
    return this.tvShows.find((tvShow: TvShow) => tvShow.id === id);
  }

  update(id: number, updateTvShowDto: UpdateTvShowDto) {
    return `This action updates a #${id} tvShow`;
  }

  remove(id: number) {
    return `This action removes a #${id} tvShow`;
  }
}
