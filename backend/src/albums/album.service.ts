import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AlbumService {
  constructor(private prisma: PrismaService) {}

  async getAllAlbums(withTracks: boolean, page: number, perPage: number) {
    return this.prisma.album
      .findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        include: {
          tracks: withTracks ? true : { select: { id: true } },
          FavoriteAlbum: true,
        },
      })
      .then((albums) =>
        albums.map((album) => ({
          ...album,
          tracks: withTracks ? album.tracks : album.tracks.length,
        })),
      );
  }

  async searchAlbums(query: string) {
    return this.prisma.album.findMany({
      select: {
        id: true,
        album_title: true,
        artist_name: true,
      },
      where: {
        OR: [
          {
            album_title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            artist_name: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
  }

  async getAlbum(id: string) {
    return this.prisma.album.findUnique({
      where: { id },
      include: {
        tracks: true,
      },
    });
  }
}
