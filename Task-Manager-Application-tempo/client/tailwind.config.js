/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        task_hover: "#e7e5e4",
        over_due: "#dc2626",
        main_color: "#5534A5",
        purple: "#7e5bef",
        pink: "#ff49db",
        dark_purple: "#081A51",
        light_white: "rgba(255,255,0,18)",

        view_task_main_color: "#5534A5",
        view_task_white: "#fff",
      },
      spacing: {
        view_task_1: "8px",
        view_task_2: "12px",
        view_task_3: "16px",
        view_task_4: "24px",
        view_task_5: "32px",
        view_task_6: "48px",
        view_task_7: "60px",
        view_task_8: "80px",
        view_task_9: "100px",
        view_task_10: "120px",
        view_task_11: "200px",
        view_task_12: "250px",
        view_task_13: "50vh",
        special_width_1: "85vw",
        special_width_2: "15vw",
        task_height_lg2: "25vw",
        vh1: "1vh",
        vh2: "2vh",
        vh3: "3vh",
        vh4: "4vh",
        vh5: "5vh",
        vh6: "6vh",
        vh7: "7vh",
        vh8: "8vh",
        vh9: "9vh",
        vh10: "10vh",
        vh15: "15vh",
        vh40: "45vh",
        vw1: "1vw",
        vw2: "2vw",
        vw3: "3vw",
        vw4: "4vw",
        vw5: "5vw",
        vw6: "6vw",
        vw7: "7vw",
        vw8: "8vw",
        vw9: "9vw",
        vw10: "10vw",
        vw80: "80vw",
        vw20: "20vw",
        vw80: "80vw",
      },
      fontSize: {
        view_task_1: "8px",
        view_task_2: "12px",
        view_task_3: "16px",
        view_task_4: "24px",
        view_task_5: "32px",
        view_task_6: "48px",
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        "2xl_": { max: "1535px" },

        xl_: { max: "1279px" },

        lg_: { max: "1023px" },

        lg2_: { max: "920px" },

        md_: { max: "767px" },

        sm_: { max: "639px" },
      },
    },
  },
  plugins: [],
};