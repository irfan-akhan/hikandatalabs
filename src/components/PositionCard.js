import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./partials/Button";

export default function PositionCard({ title, position, location }) {
	return (
		<Flex
			p={{ base: 3, md: "6" }}
			my={{ base: 4, md: "10" }}
			align={{ md: "flex-end" }}
			gap={{ base: 5, md: "20" }}
			justify="space-between"
			border="1px solid #00000079"
			direction={{ base: "column", md: "row" }}
			data-aos="fade-up"
			data-aos-delay="40"
		>
			<Box>
				<Text
					textTransform="capitalize"
					mb="4"
					fontSize={{ base: "medium", md: "x-large" }}
					data-aos="fade-up"
					data-aos-delay="40"
				>
					{title}
				</Text>
				<Flex
					data-aos="fade-up"
					data-aos-delay="50"
					gap={{ base: 2, md: "5" }}
					fontSize={{ base: "small", md: "medium" }}
					textTransform="uppercase"
					color="#fff"
				>
					<Text bg="#000" w="fit-content" py="1" px="2">
						{position}
					</Text>
					<Text bg="#000" w="fit-content" py="1" px="2">
						{location}
					</Text>
				</Flex>
			</Box>
			<CustomButton text="Apply Now" />
		</Flex>
	);
}
