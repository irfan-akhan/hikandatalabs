import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import StackCards from "./StackCards";

export default function OurStack() {
	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			p={{ base: 4, md: "10" }}
			my={{ base: 4, md: "5" }}
			data-aos="fade-up"
		>
			<Heading
				as="h2"
				fontWeight="400"
				my="5"
				data-aos="fade-up"
				data-aos-deley="20"
			>
				OUR TECH STACK
			</Heading>
			<Text
				fontWeight="400"
				fontSize="medium"
				textAlign="center"
				width={{ base: "90%", md: "70%" }}
				data-aos="fade-up"
				data-aos-deley="20"
			>
				{`We build ultra-performant and reliable software with the latest
				technologies under our belt. Let us find a best-matching
				framework that’ll exceed your product expectations.`}
			</Text>
			<StackCards />
		</Flex>
	);
}
