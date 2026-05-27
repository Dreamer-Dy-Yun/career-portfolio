import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a GitHub user page such as <username>.github.io, use base: "/".
// For a repository page such as <username>.github.io/career-portfolio/, use base: "/career-portfolio/".

export default defineConfig({
  base: '/career-portfolio/',
  plugins: [react()],
});
