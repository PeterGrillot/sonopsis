# Sonopsis - Music Collaboration Tool

Sonopsis is a web application for musicians and bands to collaborate, share ideas, and manage projects together. Built with Next.js, Prisma, and Radix UI, Sonopsis makes it easy to organize bands, share lyrics, upload clips, and communicate with your team.

## Features

- **User Management:** Register, view, and manage users with profile images.
- **Bands & Memberships:** Create bands, invite members, and assign roles.
- **Lyrics & Clips:** Share lyric ideas and upload audio clips for collaboration.
- **Comments:** Discuss ideas and give feedback on lyrics and clips.
- **API Endpoints:** RESTful endpoints for users, bands, and more.
- **Modern UI:** Built with Radix UI for a clean, accessible interface.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/sonopsis-app.git
cd sonopsis-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the database

- Copy `.env.example` to `.env` and set your `DATABASE_URL`.
- Start your database (Postgres recommended, Docker supported).
- Run Prisma migrations:

```bash
npx prisma migrate dev
```

### 4. Seed the database (optional)

```bash
npx ts-node prisma/seed.ts
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js App Router pages and API routes
- `/src/components` - React UI components
- `/prisma` - Prisma schema and seed scripts
- `/lib` - Shared utilities (e.g., Prisma client)
- `/public/uploads` - (Optional) Local image/audio uploads

## API Endpoints

- `GET /api/users` - List users with memberships
- `GET /api/users/[id]` - Get user details
- More endpoints for bands, clips, lyrics, etc.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Radix UI](https://www.radix-ui.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) (optional for DB)

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

MIT

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
