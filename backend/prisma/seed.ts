// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const response = await fetch(
    'https://pixabay.com/api/?key=46806631-135cee8f36e17914150e25076&q=album+cover&image_type=photo&min_width=600&min_height=400&orientation=vertical&category=music',
  );
  const data = await response.json();

  const albumCovers = data.hits.map((hit) => hit.webformatURL);

  for (let i = 0; i < 10; i++) {
    const album = await prisma.album.create({
      data: {
        album_cover_image:
          albumCovers[Math.floor(Math.random() * albumCovers.length)],
        album_title: faker.music.genre(),
        artist_name: faker.person.fullName(),
        release_date: faker.date.past(),
        tracks: {
          create: Array.from({ length: 10 }, (_, j) => ({
            title: faker.music.songName(),
            duration: `${Math.floor(Math.random() * 3) + 2}:${Math.floor(
              Math.random() * 60,
            )
              .toString()
              .padStart(2, '0')}`,
            mp3_link: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${
              j + 1
            }.mp3`,
          })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
