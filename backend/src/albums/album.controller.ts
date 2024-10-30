import { Controller, Get, Param, Query } from '@nestjs/common';
import { AlbumService } from './album.service';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  async getAllAlbums(
    @Query('with_tracks') withTracks: string,
    @Query('page') page: string,
  ) {
    const includeTracks = withTracks === 'true';
    return this.albumService.getAllAlbums(
      includeTracks,
      parseInt(page, 10) || 1,
      10,
    );
  }

  @Get('search')
  async searchAlbums(@Query('q') query: string) {
    return this.albumService.searchAlbums(query);
  }

  @Get(':id')
  async getAlbum(@Param('id') id: string) {
    return this.albumService.getAlbum(id);
  }
}
