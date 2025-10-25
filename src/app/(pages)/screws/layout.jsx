import React from "react";
import Banner from "@/components/Banner";

export const metadata = {
	title: "Screws | Anita Engineering Works",
	description:
		"The Screws page details the full screw portfolio, covering head styles (flat, pan, hex, socket, countersunk), thread forms, materials and hardness levels used for different load and environmental requirements. It explains manufacturing processes, tolerances, available heat treatments and surface finishes, plus common industry uses such as electronics, automotive assembly and structural fastening. Technical guidance includes selection tips for thread engagement, shear vs. tensile considerations, and recommended mating components; calls to action encourage specification submission for bespoke screw runs.",
	keywords: [
		"screws",
		"screw heads",
		"hex head",
		"socket head",
		"countersunk screws",
		"thread specifications",
		"screw manufacturer",
		"heat treatment",
		"custom screws",
	],
};

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/banners/screws.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					SCREWS
				</h1>
			</Banner>
			<div>{children}</div>
		</>
	);
}
