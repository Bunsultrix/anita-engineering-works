import React from "react";
import Banner from "@/components/Banner";

export const metadata = {
	title: "Contact Us | Anita Engineering Works",
	description:
		"The Contact Us page provides multiple, easy ways to reach Anita Engineering Works — phone numbers, email addresses, physical location, business hours and a simple contact form for inquiries or quote requests. It clarifies response times for sales and technical support, offers guidance for submitting drawings or specifications, and includes directions for site visits or factory audits. The page is designed to convert visitors into leads by making communication straightforward and establishing next steps for sample requests or production discussions.",
	keywords: [
		"contact Anita Engineering Works",
		"request quote",
		"sales enquiry",
		"technical support",
		"factory visit",
		"submit drawing",
		"fastener quotations",
		"bulk order contact",
	],
};

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/banners/contact-us.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					CONTACT US
				</h1>
			</Banner>
			<div className="lg:px-10 lg:py-12 px-2 py-4">{children}</div>
		</>
	);
}
