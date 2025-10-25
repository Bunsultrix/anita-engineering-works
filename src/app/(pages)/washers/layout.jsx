import React from "react";
import Banner from "@/components/Banner";

export const metadata = {
	title: "Screws | Anita Engineering Works",
	description:
		"The Washers page describes washer types supplied—plain/load‑distribution washers, spring/lock washers, external and internal tooth washers—and explains how each type improves joint performance under vibration and load. It lists materials, standard thicknesses, inner/outer diameters and finish options, and provides guidance for washer selection based on load distribution, locking requirements and corrosion resistance. The page supports engineers with common use cases, dimensional tables or datasheet downloads, and options for bulk packing or custom stamping.",
	keywords: [
		"washers",
		"plain washer",
		"spring washer",
		"lock washer",
		"external tooth washer",
		"internal tooth washer",
		"washer dimensions",
		"packing options",
		"washer manufacturer",
	],
};

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/banners/washers.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					WASHERS
				</h1>
			</Banner>
			<div>{children}</div>
		</>
	);
}
