import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

export default function ValueCard({ heading, text, subText, step }) {
	return (
		<Flex
			p={{ base: 4, md: "12" }}
			my={{ base: 4, md: "10" }}
			align="flex-start"
			gap={{ base: 2, md: "20" }}
			justify="space-between"
			color="#fff"
			bg="#000"
			data-aos="fade-up"
			data-aos-delay="40"
			direction={{ base: "column", md: " row" }}
		>
			<Box>
				<Text
					data-aos="fade-up"
					data-aos-delay="20"
					fontSize={{ base: "2rem", md: "4rem" }}
					color=" #EC1D24"
				>
					{step}
				</Text>
				<Text
					data-aos="fade-up"
					data-aos-delay="20"
					mb="4"
					fontSize={{ base: "x-large", md: "xxx-large" }}
				>
					{heading}
				</Text>
				<Text
					data-aos="fade-up"
					data-aos-delay="20"
					fontSize={{ base: "small", md: "large" }}
				>
					{text}
				</Text>
				<Text
					data-aos="fade-up"
					data-aos-delay="20"
					fontSize={{ base: "small", md: "large" }}
				>
					{subText}
				</Text>
			</Box>
			<Box
				data-aos="fade-up"
				data-aos-delay="40"
				display={{ base: "none", md: "block" }}
			>
				<Image
					src="/teams.jpg"
					width={"500px"}
					height="350px"
					objectFit="cover"
					alt="team"
				/>
			</Box>
		</Flex>
	);
}
