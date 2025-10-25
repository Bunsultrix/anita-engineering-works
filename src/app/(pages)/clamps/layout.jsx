import React from "react";
import Banner from "@/components/Banner";

export const metadata = {
	title: "Clamps | Anita Engineering Works",
	description:
		"The Clamps page presents the company’s range of clamps — including hose clamps, split clamps, U‑bolt clamps and spring clamps — with descriptions of materials, sizes, load ratings and recommended applications. It explains production methods, available finishes (e.g., zinc plating, stainless steel grades), custom sizing options and packing/branding choices for OEM customers. Technical notes highlight compatibility with pipe diameters, corrosion resistance, and installation tips for different industries such as plumbing, automotive and construction. The page invites requests for datasheets, samples and volume pricing.",
	keywords: [
		"clamps",
		"hose clamps",
		"split clamps",
		"U‑bolt",
		"spring clamp",
		"clamp manufacturer",
		"stainless steel clamps",
		"corrosion‑resistant clamps",
		"OEM clamps",
	],
};

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/banners/clamps.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					CLAMPS
				</h1>
			</Banner>
			<div>{children}</div>
		</>
	);
}
