<div align="center">

# 🛒 বাজার দর (BazarDor)

### প্রয়োজনীয় পণ্যের দাম এক নজরে।

A Bangla grocery price tracker for Bangladesh. See today's prices for rice, lentils,
oil, vegetables, fish, meat, eggs, milk and spices, spot what went up or down, and
compare prices market by market.

<br />

<a href="https://bazar-dor-sandy.vercel.app/">
  <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-15803d?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
</a>
<a href="https://github.com/ABiR994/Bazar-Dor">
  <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
</a>

<br />
<br />

<img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/DaisyUI-5-1AD1A5?style=flat-square" alt="DaisyUI" />
<img src="https://img.shields.io/badge/BetterAuth-Authentication-6C47FF?style=flat-square" alt="BetterAuth" />
<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/react--hot--toast-Notifications-FF6B6B?style=flat-square" alt="react-hot-toast" />

</div>

---

## 📖 About the Project

**বাজার দর (BazarDor)** turns a raw list of market prices into something you can read in
seconds. The home page shows today's date, a scrolling price ticker, and the products
whose prices moved the most. Every product has its own page with the lowest, highest and
average price, plus a table of what it costs in 12 markets across the country.

The whole interface is in Bangla, with Bengali numerals (১,৮৫০ টাকা), and works on
phones, tablets and desktops. Product details are available to signed-in users, with
sign-in by email and password, Google or GitHub.

---

## 🔗 Links

- **Live Site:** [bazar-dor-sandy.vercel.app](https://bazar-dor-sandy.vercel.app/)
- **Repository:** [github.com/ABiR994/Bazar-Dor](https://github.com/ABiR994/Bazar-Dor)

---

## ✨ Key Features

### 📈 Live Price Ticker
An infinite scrolling strip under the navbar shows every product's emoji, name, price
(`টাকা/কেজি`) and its ▲/▼ change percentage. It loops without a break and pauses when you
hover over it.

### 🔺 Top Risers and Fallers
The home page highlights the 6 products whose prices moved up the most and the 6 that moved
down the most, followed by an **All Products** section with every item in a responsive grid.
Each card shows the emoji, name, unit (`প্রতি কেজি / লিটার / ডজন / পিস`), today's price in
Bengali digits and a change badge: red for up, green for down, grey for no change.

### 🗂️ Category Pages with Sorting
Eight categories (চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, মসলা) sit in the navbar, and the
active one is highlighted. A category page has a **সাজান** dropdown: default, price low to
high, and price high to low. It sorts by the actual numeric price, not by Bengali text, so
১৫০ correctly comes after ৯৯.

### 🏪 Market-by-Market Price Details
The protected product page shows an emoji and title, the unit and category, a plain-language
summary of how the price changed since yesterday, a **minimum / maximum / average** price
summary, and a table of prices across 12 markets and divisions.

### 🔐 Authentication with BetterAuth
Email and password, Google and GitHub sign-in, backed by MongoDB. Signing up sends you to
the sign-in page, and signing in takes you home or back to the page you were trying to
open. A logged-in navbar shows your avatar with a profile menu and sign out.

### 👤 Profile and Update Information
A **My Profile** page shows your details, and an update page lets you change your name using
BetterAuth's `updateUser`.

### 🔔 Toasts, Skeletons and 404
Every login, sign-up, sign-out, validation error and protected-route redirect shows a toast.
Home, category, profile and product pages show skeleton loaders while data loads, and any
unknown route (or a category with no products) shows a friendly 404 with a
**হোম পেজে ফিরে যান** button.

### 📱 Fully Responsive
The navbar, ticker, hero, product grid and tables reflow across mobile, tablet and desktop:
1 column on phones, 2 on tablets and 3 on desktops, with a horizontally scrollable category
bar and table on small screens.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| ⬛ Next.js 16 (App Router) | Routing, server rendering, dynamic `[slug]` routes |
| ⚛️ React 19 | UI components, with the React Compiler enabled |
| 🔷 TypeScript | Type-safe API data, props and helpers |
| 🎨 Tailwind CSS 4 | Utility-first styling |
| 🌼 DaisyUI 5 | Buttons, dropdowns, skeleton and spinner styles |
| 🔐 BetterAuth | Email/password, Google and GitHub authentication, user update |
| 🍃 MongoDB Atlas | Stores users, accounts and sessions |
| 🔔 react-hot-toast | Success, error and validation notifications |
| 🌐 BazarDor REST API | Live product and category data |

---

## 🧭 Routes

| Route | Description | Access |
|---|---|---|
| `/` | Hero, top risers, top fallers, all products | Public |
| `/category/[slug]` | Products in a category, with sorting | Public |
| `/product/[slug]` | Price summary and market-by-market table | 🔒 Login required |
| `/signin` | Sign in with email, Google or GitHub | Public |
| `/signup` | Create an account | Public |
| `/my-profile` | Your account details | 🔒 Login required |
| `/my-profile/update` | Update your name | 🔒 Login required |

### API Endpoints Used

```text
GET /products              GET /products?category=chal   GET /products?slug=...
GET /categories            GET /categories/chal          GET /products/1
```

The app tries the primary API first and falls back to the alternative base URL if it fails.

---

## 📂 Project Structure

```text
bazar-dor/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home: hero + product sections
│   │   ├── layout.tsx                  # Navbar, ticker, footer, toaster
│   │   ├── loading.tsx, not-found.tsx
│   │   ├── category/[slug]/            # Category page + skeleton
│   │   ├── product/[slug]/             # Protected product details + skeleton
│   │   ├── signin/, signup/            # Auth pages
│   │   ├── my-profile/ (+ update/)     # Protected profile pages
│   │   └── api/auth/[...all]/          # BetterAuth route handler
│   │
│   ├── components/
│   │   ├── layout/                     # Navbar, NavLinks, AuthButtons, PriceTicker, Footer
│   │   ├── home/                       # Hero, HomeProducts, ProductSection
│   │   ├── product/                    # ProductCard, ProductGrid, SortDropdown, MarketTable ...
│   │   ├── auth/                       # SignInForm, SignUpForm, SocialLogin
│   │   ├── profile/                    # ProfileCard, UpdateNameForm, SignOutButton
│   │   └── ui/                         # ChangeBadge, Avatar, EmptyState
│   │
│   ├── lib/                            # api, auth, auth-client, mongodb, session, format
│   ├── types/                          # Product, Category, Market types
│   └── assets/                         # Logo and hero image
│
├── .env.example
├── next.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v20 or later
- npm
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- Optional: Google and GitHub OAuth apps for social login

### Installation

```bash
git clone https://github.com/ABiR994/Bazar-Dor.git
cd Bazar-Dor
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Fill in `.env.local`:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Primary product API base URL |
| `NEXT_PUBLIC_API_BASE_URL_FALLBACK` | Backup product API base URL |
| `BETTER_AUTH_SECRET` | Random secret, e.g. `openssl rand -base64 32` |
| `BETTER_AUTH_URL` | App URL (`http://localhost:3000` locally) |
| `MONGODB_URL` | MongoDB Atlas connection string |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth credentials |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub OAuth credentials |

OAuth callback URLs to register:

```text
<APP_URL>/api/auth/callback/google
<APP_URL>/api/auth/callback/github
```

### Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deployment

Deployed on **Vercel**. When deploying your own copy:

1. Add all the environment variables above in the Vercel project settings, with
   `BETTER_AUTH_URL` set to your live URL.
2. In MongoDB Atlas, allow network access from `0.0.0.0/0`, because Vercel uses changing IP addresses.
3. Add your live callback URLs to the Google and GitHub OAuth apps.
4. Redeploy after changing any variable.

---

## 👨‍💻 Author

**Salem Nur Abir**

<a href="https://github.com/ABiR994">
  <img src="https://img.shields.io/badge/GitHub-ABiR994-181717?style=for-the-badge&logo=github" alt="GitHub" />
</a>
