import React from "react";
import Banner from "@/components/Banner";

export const metadata = {
	title: "Others | Anita Engineering Works",
	description:
		"The Others page groups auxiliary fasteners and accessories that don’t fit the main categories—items such as nuts, spacers, rivet nuts, studs, pins, thread rods and hand tools. Each product entry focuses on key specifications (material, thread size, tolerance class), common applications and customization options like knurling, plating or special coatings. The section appeals to buyers seeking one‑stop sourcing for complementary components and provides cross‑references to related product pages to simplify procurement of complete assemblies.",
	keywords: [
		"nuts",
		"spacers",
		"rivet nuts",
		"studs",
		"pins",
		"thread rods",
		"fastener accessories",
		"bespoke fasteners",
		"complementary components",
	],
};

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/banners/others.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					OTHERS
				</h1>
			</Banner>
			<div>{children}</div>
		</>
	);
}
