
# Music Player App


 Develop a music player web application using Next.js and Tailwind CSS. The
 application will fetch data from a REST API, display a list of albums, allow users to click
 on an album to view detailed information on an about page, and play music tracks.


## Tech Stack

**Client:** React 19, Next.js 15, TailwindCSS, react-h5-audio-player, Auth.js

**Server:** Nest.js, Prisma, NeonDB




## Run Locally

Clone the project

```bash
  git clone https://github.com/bryansumague/music-player-app
```

Go to the project directory

```bash
  cd music-player-app
```

Install dependencies (Frontend) -- I use Tabler which only support older version of react

```bash
  cd frontend
  npm install --legacy-peer-deps
```

Install dependencies (Backend)

```bash
  cd backend
  npm install
```

Start the server (Frontend)

```bash
  cd frontend
  npm run start
```
Start the server (Backend)

```bash
  cd frontend
  npm run start:dev
```
## Seeding NeonDB

Remove existing data

```bash
  npx prisma db push --force-reset
```

Run Seeder
```bash
  npm run seed
```
## Roadmap

- Adding Favorite Albums

- Add Favorite Track

- Add Toastify and Error message display

- Optimize Search

- Utilize Server Props

- Dockerization


## Assumptions and Decisions

I would like to make a very close copy of spotify but with very limited time constraint I only came up with the layout and basic functionalities. I added login function via Google oAuth as I intended to add saving of favorite albums and tracks. I spend most of my time finding suitable MP3 player as I am using react latest version most of the common player library are not supported

