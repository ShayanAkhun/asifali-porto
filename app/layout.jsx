import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';
export const metadata = {
	title: "Asif Ali | Portofolio",
	description:
		"My name is Asif Ali, I'm a Video Editor and I'm passionate about it.",
	author: "Asif Ali",
	applicationName: "Asif Ali",
	keywords: [
		"Asif Ali",
		" Ali",
		"Asif",
		"video",
		"editor",
		"Asif Ali Video",
		"Asif Ali video Editor",
	]
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
				<Script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></Script>
    <Script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></Script>
			</body>
		</html>
	);
}
