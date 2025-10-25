import React from "react";
import Banner from "@/components/Banner";

export const metadata = {
	title: "About Us | Anita Engineering Works",
	description:
		"The About Us page tells the company story, outlining its founding, leadership, mission and core values centered on precision, reliability and customer satisfaction. It summarizes manufacturing infrastructure, workforce expertise, quality systems (including any certifications), and continuous improvement initiatives such as process automation or material traceability. The section reinforces credibility through client logos, factory photos and a brief timeline of major milestones, helping procurement teams evaluate the company’s stability and fit for long‑term partnerships.",
	keywords: [
		"about Anita Engineering Works",
		"company history",
		"mission",
		"manufacturing capabilities",
		"quality systems",
		"certifications",
		"factory photos",
		"client partners",
	],
};

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/banners/about-us.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					ABOUT US
				</h1>
			</Banner>
			<div>{children}</div>
		</>
	);
}
