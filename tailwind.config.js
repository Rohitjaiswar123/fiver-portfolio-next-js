module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#ffffff',
        'light-text': '#1a1a1a',
        'light-primary': '#2563eb',
        // Dark mode colors
        'dark-bg': '#1a1a1a',
        'dark-text': '#ffffff',
        'dark-primary': '#3b82f6',
      },
    },
  },
}
