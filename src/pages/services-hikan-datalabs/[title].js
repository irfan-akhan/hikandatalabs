import CaseStudies from "@/components/CaseStudies";
import Layout from "@/components/Layout";
import ServicePageHeader from "@/components/ServicePageHeader";
import ServicePageTechCard from "@/components/ServicePageTechCard";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
const pageData = {
	web: {
		heading: "Web app development",
		text: `Our web solutions are designed to be scalable, maintainable
            and secure, making it easy for you to achieve your business
            goals. Whether you need a fully blown SaaS, web application
            or a website, we've got you covered.`,
		how: `With experience in various industries, we know how to hity our
         targets with high-performant, feature-packed, and user-friendly web products. 
         Our extensive tech stack and capabilities allow us to validate your ideas, 
         turning them into successful MVP releases and rapid product growth.`,
	},
	mobile: {
		heading: "Mobile app development",
		text: `Keep your business on the cutting edge with our expert mobile development
             services. We use the latest technologies and industry best practices to ensure 
            that your app is fast, stable and compatible with multiple mobile platforms.`,
		how: `With experience in various industries, we know how to hit your targets with 
                high-performant, feature-packed, and user-friendly mobile applications.`,
	},
	product: {
		heading: "Product Design, Development and Branding",
		text: `Get bespoke design solutions to easily lead 
                the users through the friendly interface with a strong brand concept. `,
		how: `Neat product design is what makes a great first impression. With Apptension, 
            the first thing users will see is a human-centered design and a distinctive brand 
            identity. We provide a well-qualified team and choose a personalized approach to
                 deliver an intuitive and attractive design solution.`,
	},
};

export default function ServicePage({ title }) {
	const { heading, text, how } = pageData[title] || {};
	return (
		<Layout>
			<ServicePageHeader heading={heading} text={text} />
			{/* <Flex
				direction="column"
				p={{ base: 4, md: "24" }}
				w={{ base: "100%", md: "90%" }}
				mx="auto"
				data-aos="fade-up"
				justify="center"
			>
				<Heading
					as="h2"
					data-aos-deley="20"
					data-aos="fade-up"
					fontSize={{ base: "x-large", md: "xx-large" }}
				>
					WHAT WE DO
				</Heading>
			</Flex> */}
			<Flex
				direction="column"
				p={{ base: 4, md: "12" }}
				w={{ base: "100%", md: "90%" }}
				mx="auto"
				justify="center"
				gap="6"
				data-aos="fade-up"
			>
				<Heading
					as="h2"
					fontSize={{ base: "x-large", md: "xx-large" }}
					data-aos="fade-up"
					data-aos-deley="20"
				>
					HOW WE DO IT
				</Heading>
				<Text
					data-aos="fade-up"
					data-aos-deley="30"
					textAlign="start"
					fontSize={{ base: "small", md: "x-large" }}
					fontWeight="300"
					width={{ base: "100%" }}
				>
					{how}
				</Text>
				<ServicePageTechCard
					heading="frontend tech stack"
					role="frontend"
					text="We adopt widely tested JavaScript & TypeScript frameworks at the frontend to build beautiful and swift web interfaces."
				/>
				<ServicePageTechCard
					reverse={true}
					heading="backend tech stack"
					role="backend"
					text="We adopt widely tested JavaScript & TypeScript frameworks at the frontend to build beautiful and swift web interfaces."
				/>
				<ServicePageTechCard
					heading="design tools"
					role="design"
					text="We adopt widely tested JavaScript & TypeScript frameworks at the frontend to build beautiful and swift web interfaces."
				/>
				<ServicePageTechCard
					reverse={true}
					heading="Our project management tools"
					role="management"
					text="Streamline your product development and minimize business risks with our data-driven project management approach."
				/>
				<ServicePageTechCard
					heading="Our QA toolkit"
					role="qa"
					text="Our testing process is rigorous and designed to identify and address any potential issues before they become problems, ensuring that your application has the best possible interface for your users."
				/>
			</Flex>
			<Flex
				direction="column"
				p={{ base: 4, md: "4" }}
				w={{ base: "100%", md: "90%" }}
				mx="auto"
				justify="center"
				aos-data="fade-up"
			>
				<Heading
					as="h2"
					w={{ base: "100%", md: "60%" }}
					margin="auto"
					fontSize={{ base: "x-large", md: "xx-large" }}
					textTransform={"capitalize"}
				>
					Recent applications we have build
				</Heading>
				<CaseStudies limit={4} />
			</Flex>
		</Layout>
	);
}
export async function getStaticPaths(_ctx) {
	const slugs = ["web", "mobile", "product"];
	return {
		paths: slugs.map((title) => ({ params: { title } })),
		fallback: false,
	};
}
export async function getStaticProps({ params: { title } }) {
	return { props: { title } };
}
