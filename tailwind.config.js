/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text-sm': '1px 1px 2px rgba(0, 0, 0, 0.5)', // Đổ bóng chữ nhỏ
        'text-md': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Đổ bóng chữ vừa
        'text-lg': '3px 3px 6px rgba(0, 0, 0, 0.5)', // Đổ bóng chữ lớn
        'text-xl': '4px 4px 8px rgba(0, 0, 0, 0.5)', // Đổ bóng chữ rất lớn
      },
    },
  },
  plugins: [],
}