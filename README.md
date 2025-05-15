# Neural Paths - AI-Powered Solutions Platform

Neural Paths is a cutting-edge platform offering innovative AI solutions designed to transform how businesses and individuals interact with artificial intelligence. Our suite of products includes Rovyk (AI Powerhouse), Ava (Blood Report Analysis), Gitpeek (Github Repository Analysis), and Tyme (Global Time Insights).

## 🌟 Products

- **Rovyk**: A comprehensive AI platform that combines multiple AI models into one seamless interface
- **Ava**: AI-powered blood report analysis tool for clear health insights
- **Gitpeek**: Advanced AI tool for Github repository analysis and insights
- **Tyme**: AI-powered global time management and scheduling solution

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) with [Shadcn UI](https://ui.shadcn.com/)
- **Font**: [Fustat](https://fonts.google.com/) (via Google Fonts)
- **Analytics**: Google Analytics
- **Deployment**: [Vercel](https://vercel.com)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/neural-paths.git
cd neural-paths
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration values.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
neural-paths/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── products/          # Products routes
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/            # React components
│   ├── products.tsx      # Products showcase
│   └── magicui/          # UI components
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── robots.txt       # Search engine directives
└── styles/              # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests

## 🌐 SEO & Performance

- Implemented comprehensive SEO optimization
- Dynamic sitemap generation
- Robots.txt configuration
- OpenGraph and Twitter card support
- Google Analytics integration
- Optimized image loading and font delivery

## 🚀 Deployment

The application is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

For more details, see our [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

For internal contributions, please follow our contribution guidelines and code of conduct.

## 📞 Support

For support, please contact our team at support@neuralpaths.ai

---

Built with ❤️ by Neural Paths Team
