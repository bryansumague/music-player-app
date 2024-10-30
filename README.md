
# Music Player App


 Develop a music player web application using Next.js and Tailwind CSS. The
 application will fetch data from a REST API, display a list of albums, allow users to click
 on an album to view detailed information on an about page, and play music tracks.


## Tech Stack

**Client:** React 19, Next.js 15, TailwindCSS, react-h5-audio-player, Auth.js

**Server:** Nest.js, Prisma, NeonDB




## Frontend Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`AUTH_SECRET="I2IKYMFvJVn0/lCthtz0mjOu8yK2glCqAa8y9B9mGCU="`

`AUTH_GOOGLE_ID="812562663717-jrt0kac0bp5iftflr06h90av7jo41976.apps.googleusercontent.com"`

`AUTH_GOOGLE_SECRET="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"`

`NEXT_PUBLIC_BACKEND_URL="http://localhost:3001"` 



## Backend Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL="postgresql://neondb_owner:fiWuJ6GkNyo4@ep-raspy-violet-a1w5z3nl.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"`

`JWT_SECRET="0403796c3b412c4c1b369fb3b5bdad3ffd346b913807e418d6e83c7c00e662fa1af90802253af979691c6d4f06f738096cf9a2753f199437a6ea26fa53916faf"`

`FRONTEND_URL="http://localhost:3000"`

## Run Locally

Clone the project

```bash
  git clone https://github.com/bryansumague/music-player-app
```

Go to the project directory

```bash
  cd music-player-app
```

Install dependencies (Frontend) -- I use Tabler Icon which only support older version of react

```bash
  cd frontend
  npm install --legacy-peer-deps
```

Install dependencies (Backend)

```bash
  cd backend
  npm install
  npx prisma generate
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

