import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Pitch() {
	return (
		<Flex
			p={{ base: "2", md: "4rem" }}
			direction={{ base: "column", md: "initial" }}
			minH="90vh"
			justify="center"
			mb="10"
		>
			<Flex
				direction="column"
				gap={{ base: 6, md: 12 }}
				p="5"
				maxW={{ base: "100%", md: "50%" }}
			>
				<Heading
					data-aos="fade-right"
					as="h1"
					width="fit-content"
					fontSize={{ base: "large", md: "xxx-large" }}
				>
					Do You Have a New Idea or Existing Digital Product to Build
					or Improve?
				</Heading>
				<Text
					data-aos="fade-right"
					data-aos-delay="200"
					fontWeight="300"
					px={{ base: "0", md: "0" }}
					fontSize={{ base: "large", md: "large" }}
				>
					Our experts from different fields collaborate with yours
					throughout the product lifecycle. Solving the right problems
					for your target audience by designing and building the
					products in an agile and scalable manner.
				</Text>
			</Flex>
			<Flex
				direction="column"
				gap="12"
				px={{ base: 5, md: 10 }}
				maxW={{ base: "100%", md: "45%" }}
			>
				<Flex
					direction="column"
					gap="8"
					p="5"
					border="2px solid #000"
					minH="240px"
					maxW="350px"
					boxShadow="10px 10px 0px 2px #EC1D24"
					data-aos="fade-left"
					data-aos-delay="200"
				>
					<Heading as="h3" fontSize="x-large" fontWeight="400">
						From Idea to Product
					</Heading>
					<Text
						fontWeight="300"
						fontSize={{ base: "large", md: "large" }}
					>
						{`Create a digital product based on your industry
						knowledge with a high market adoption tailored to your
						audience's needs.`}
					</Text>
				</Flex>
				<Flex
					direction="column"
					gap="8"
					p="5"
					border="2px solid #000"
					minH="240px"
					maxW="350px"
					data-aos="fade-left"
					data-aos-delay="400"
					boxShadow="10px 10px 0px 2px #EC1D24"
				>
					<Heading as="h3" fontSize="x-large" fontWeight="400">
						Dedicated Team
					</Heading>
					<Text
						fontWeight="300"
						fontSize={{ base: "large", md: "large" }}
					>
						{`Team of experts dedicated to your needs that we manage
						for you, or you take the lead with your in-house
						processes.`}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
