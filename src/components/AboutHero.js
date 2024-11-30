import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutHero({ text, heading, bgImage }) {
	return (
		<Flex
			minH={{ base: "initial", md: "95vh" }}
			align="center"
			direction="column"
			color="#000"
			justify="center"
			textTransform="capitalize"
			p={{ base: 4, md: "36" }}
		>
			<Stack mb={{ base: 4, md: "36" }}>
				<Heading
					textAlign={"center"}
					as="h1"
					width="fit-content"
					fontSize={{ base: "x-large", md: "4rem" }}
				>
					{heading}
				</Heading>
				{text && (
					<Text
						textAlign="center"
						fontWeight="300"
						fontSize={{ base: "medium", md: "x-large" }}
					>
						Together we build inspiring digital products
					</Text>
				)}
			</Stack>
		</Flex>
	);
}
