# Portfolio Client

Personal portfolio website for Abdul Barik built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui.

## Features

- Public portfolio sections: Hero, About, Skills, Experience, Education, Achievements, Projects
- Contact form with email delivery via Nodemailer
- Admin dashboard with login protection
- Data-driven content loaded from local JSON files
- Responsive layout with animated UI components

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4, shadcn/ui, Framer Motion
- **Forms:** React Hook Form
- **Email:** Nodemailer
- **Language:** TypeScript

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Create a `.env.local` file in the project root:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `EMAIL_USER` | Gmail address used to send contact form emails |
| `EMAIL_PASS` | Gmail App Password (requires 2FA enabled) |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Deploy on Vercel

The easiest way to deploy this Next.js app is via the [Vercel Platform](https://vercel.com/new).
