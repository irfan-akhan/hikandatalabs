import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Values({ heading, text }) {
	return (
		<Flex
			justify="space-between"
			minW="100%"
			direction={{ base: "column", md: "initial" }}
		>
			<Heading
				data-aos="fade-right"
				as="h2"
				fontWeight="500"
				fontSize="x-large"
				mb="2"
			>
				{heading}
			</Heading>
			<Text
				data-aos="fade-right"
				data-aos-delay="200"
				width={{ base: "100%", md: "60%" }}
				fontWeight="300"
				fontSize="large"
			>
				{text}
			</Text>
		</Flex>
	);
}
