import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function ServicePageHeader({
	heading,
	text,
	imgUrl = "/app-development.jpg",
}) {
	return (
		<Flex
			height={{ base: "initial", md: "90vh" }}
			p={{ base: 4, md: "20" }}
			align="start"
			mt={{ base: 5, md: "26" }}
			direction={{ base: "column", md: "initial" }}
		>
			<Flex
				direction="column"
				margin="auto"
				width={{ base: "100%", md: "60%vw" }}
				gap="5"
				textTransform="capitalize"
				textAlign="start"
				p="6"
			>
				<Heading
					textAlign="start"
					color=" #EC1D24"
					as="h1"
					fontSize={{ base: "medium", md: "xxx-large" }}
				>
					{heading}
				</Heading>
				<Text
					textAlign="start"
					fontSize={{ base: "small", md: "x-large" }}
					fontWeight="300"
					width={{ base: "100%", md: "90%" }}
				>
					{text}
				</Text>
			</Flex>
			<Flex>
				<Image src={imgUrl} />
			</Flex>
		</Flex>
	);
}
