import Layout from "@/components/Layout";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CaseStudies from "@/components/CaseStudies";
import Link from "next/link";
export default function Portfolio() {
	return (
		<Layout>
			<Flex
				direction="column"
				justify="center"
				align="center"
				height={{ base: "50vh", md: "90vh" }}
				margin="auto"
				width={{ base: "90%", md: "70%" }}
				textAlign="center"
				gap="5"
				textTransform="capitalize"
				mt={{ base: "25vh", md: "26" }}
			>
				<Heading color=" #EC1D24" as="h2" fontSize="x-large">
					AN AGILE PARTNER FOR YOUR CUSTOM REQUIREMENTS
				</Heading>
				<Heading as="h1" fontSize={{ base: "medium", md: "xxx-large" }}>
					{`Explore software development case studies from companies with similar challenges`}
				</Heading>
				<Text
					fontSize={{ base: "medium", md: "large" }}
					fontWeight="400"
				>
					{`We build digital solutions for global brands, enterprises,
					agencies, and startups that want to grow and scale-up.`}
				</Text>
			</Flex>
			<Flex
				direction={{ base: "column", lg: "row" }}
				justify="space-between"
				align="flex-start"
				p={{ base: 4, md: "10" }}
				data-aos="fade-up"
				width="90%"
				margin="auto"
				gap={{ base: 16, md: "initial" }}
				height={{ base: "fit-content", lg: "70vh" }}
			>
				<Flex
					direction="column"
					width={{ base: "100%", lg: "30%" }}
					gap="5"
					data-aos="fade-up"
					data-aos-delay="50"
					mt={{ base: 12, md: "initial" }}
					shadow="2xl"
					p="5"
					justifyContent="space-between"
					height="100%"
				>
					<Flex direction="column" gap="5">
						<Image
							data-aos="fade-up"
							data-aos-delay="50"
							src="/web-development.svg"
							alt="web development"
							boxSize={"50px"}
						/>
						<Heading
							as="h2"
							fontSize={"x-large"}
							data-aos="fade-up"
							data-aos-delay="100"
							_hover={{ color: " #EC1D24" }}
							cursor="pointer"
						>
							Web Development
						</Heading>
						<Text
							fontWeight="500"
							data-aos="fade-up"
							data-aos-delay="150"
							fontSize="medium"
						>
							{`Be certain the project is on track by choosing from
							numberous professionals available for every stage of the
							development process.`}
						</Text>
					</Flex>
					<Link
						data-aos="fade-up"
						data-aos-delay="150"
						href="/services-hikan-datalabs/web"
						colorScheme=" #EC1D24"
					>
						{`Learn more ->`}
					</Link>
				</Flex>

				<Flex
					direction="column"
					width={{ base: "100%", lg: "30%" }}
					gap="5"
					data-aos="fade-up"
					data-aos-delay="50"
					height="100%"
					shadow="2xl"
					p="5"
					justifyContent="space-between"
				>
					<Flex direction="column" gap="5">
						<Image
							data-aos="fade-up"
							data-aos-delay="50"
							src="/product-design.svg"
							alt="product-design"
							boxSize={"50px"}
						/>
						<Heading
							as="h2"
							_hover={{ color: " #EC1D24" }}
							cursor="pointer"
							data-aos="fade-up"
							data-aos-delay="100"
							fontSize={"x-large"}
						>
							Mobile Application Development
						</Heading>
						<Text
							data-aos="fade-up"
							data-aos-delay="150"
							fontWeight="500"
							fontSize="medium"
						>
							{`Turn a raw idea into a product millions can’t live without. 
						Leave your mobile development to us, we create immersive UIs 
						for iOS and Android devices.`}
						</Text>
					</Flex>

					<Link
						data-aos="fade-up"
						data-aos-delay="150"
						href="/services-hikan-datalabs/mobile"
						colorScheme=" #EC1D24"
					>
						{`Learn more ->`}
					</Link>
				</Flex>
				<Flex
					data-aos="fade-up"
					data-aos-delay="50"
					direction="column"
					width={{ base: "100%", lg: "30%" }}
					gap="5"
					mt={{ base: 12, md: "initial" }}
					height="100%"
					justifyContent="space-between"
					shadow="2xl"
					p="5"
				>
					<Flex direction="column" gap="5">
						<Image
							data-aos="fade-up"
							data-aos-delay="50"
							src="/agile-development.svg"
							alt="agile-development"
							boxSize={"50px"}
						/>
						<Heading
							data-aos="fade-up"
							data-aos-delay="100"
							as="h2"
							_hover={{ color: " #EC1D24" }}
							cursor="pointer"
							fontSize={"x-large"}
						>
							Agile Development Teams on Demand
						</Heading>
						<Text
							data-aos="fade-up"
							data-aos-delay="150"
							fontWeight="500"
							fontSize="medium"
						>
							{`Fill the talent gap for your custom software projects 
							    in a few weeks.`}
						</Text>
					</Flex>
					<Link
						data-aos="fade-up"
						data-aos-delay="150"
						href="#"
						colorScheme=" #EC1D24"
					>
						{`Learn more ->`}
					</Link>
				</Flex>
			</Flex>
			<Flex
				direction="column"
				justify="center"
				align="center"
				p={{ base: 4, md: "10" }}
				data-aos="fade-up"
			>
				<Heading
					width="100%"
					data-aos="fade-up"
					as="h2"
					textTransform="capitalize"
					textAlign="center"
					fontSize={{ base: "x-large", md: "xx-large" }}
				>
					our recent work
				</Heading>
				<CaseStudies showButton={false} />
			</Flex>
		</Layout>
	);
}
