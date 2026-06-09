import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// For a GitHub user page such as <username>.github.io, use base: "/".
// For a repository page such as <username>.github.io/career-portfolio/, use base: "/career-portfolio/".

export default defineConfig({
  base: '/career-portfolio/',
  plugins: [react(), tailwindcss()],
});
