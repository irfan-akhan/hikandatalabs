import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function RecruitmentCard({ heading, text, step }) {
	return (
		<Flex
			p={{ base: 4, md: "12" }}
			align="center"
			gap={{ base: 2, md: "20" }}
			justify="start"
			data-aos="fade-up"
			direction={{ base: "column", md: "row" }}
		>
			<Text
				fontSize="7rem"
				color="#EC1D24"
				data-aos="fade-up"
				data-aos-delay="20"
			>
				{step}
			</Text>
			<Box
				textAlign={{ base: "center", md: "start" }}
				data-aos="fade-up"
				data-aos-delay="40"
			>
				<Text mb="2" fontSize={{ base: "x-large", md: "xx-large" }}>
					{heading}
				</Text>
				<Text
					fontWeight="300"
					fontSize={{ base: "medium", md: "large" }}
				>
					{text}
				</Text>
			</Box>
		</Flex>
	);
}
