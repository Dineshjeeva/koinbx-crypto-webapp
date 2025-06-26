# KoinBX Crypto WebApp

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

### 1. Install dependencies

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

I change the [Port Number]: 8080

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

Libraries Used

🔧 Next.js
Framework used for server-side rendering and static site generation.

🎨 MUI (Material UI)
Used for UI components like Table, Button, Box, Tabs, Avatar, etc.

Styling and layout handled with MUI's built-in props and system.

📊 Chart.js (via react-chartjs-2)
Used for rendering sparkline-style line charts inside the trading table.

Charts dynamically change color based on trading trends.

Note: Not using MUI Charts (@mui/x-charts), but rather Chart.js.

🔥 Firebase Realtime Database
Used for real-time data fetching.

All Firebase configuration is stored in:
src/lib/firebase.ts

Data is retrieved using the custom hook:
useFetch.ts
