# Pawmundo

A modern pet care services website built with React, TypeScript, and Tailwind CSS.

## Features

- Professional pet grooming services
- Pet training and boarding facilities
- Veterinary care information
- Contact form with WhatsApp integration
- Responsive design with smooth scroll animations
- Modern UI with gradient backgrounds

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)
- Supabase (backend ready)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ScrollAnimation.tsx
│   └── WhatsAppButton.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## Features Details

### Scroll Animations

The website includes smooth scroll animations that trigger when sections come into view. Animations only play once on initial scroll.

### WhatsApp Integration

A floating WhatsApp button is available on all pages for quick customer contact.

### Responsive Design

The website is fully responsive and works seamlessly across desktop, tablet, and mobile devices.

## License

MIT
