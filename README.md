# SpongeBob Character Database

CodeYourDreams Starter Project!!

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/EvanJordan13/SpongebobCharacterDatabase
   cd spongebob-character-database
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   The database is already configured. Copy the  `.env.local` file to your local environment. (in the dev channel)

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The website will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── README.md
├── next.config.ts
├── package.json
├── tsconfig.json
├── .env.local
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
└── src/
    ├── app/                 # Next.js App Router pages
    ├── components/          # React components
    ├── lib/                 # Utility functions and configurations
    └── types/              # TypeScript type definitions
```

## Useful Commands

```
npx prisma studio
npx prisma generate
npx prisma db push
npm run dev
```
## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [Supabase](https://supabase.com/) - Database and backend
- [Chakra UI](https://chakra-ui.com/) - Component library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
