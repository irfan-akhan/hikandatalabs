import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function CoreValueCard({ heading, text }) {
	return (
		<Flex
			boxShadow={"3px 5px 0px 10px  #000"}
			direction="column"
			p="10"
			maxW={{ base: "100%", md: "45%" }}
		>
			<Heading
				data-aos="fade-up"
				as="h2"
				mb="4"
				fontWeight="500"
				fontSize="x-large"
			>
				{heading}
			</Heading>
			<Text
				data-aos="fade-up"
				data-aos-delay="200"
				fontWeight="300"
				fontSize="large"
			>
				{text}
			</Text>
		</Flex>
	);
}
