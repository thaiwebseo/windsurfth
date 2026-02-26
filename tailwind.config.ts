import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-prompt)', 'Prompt', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          dark: '#F7931E',
        },
        secondary: '#1E293B',
        accent: '#10B981',
      },
    },
  },
  plugins: [],
}

export default config
