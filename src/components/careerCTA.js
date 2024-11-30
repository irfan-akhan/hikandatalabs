import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./partials/Button";

export default function CareerCTA() {
	return (
		<Flex
			justify="space-between"
			p={{ base: 4, md: "24" }}
			gap={{ base: 4, md: "10" }}
			direction={{ base: "column", md: "initial" }}
		>
			<Box p="10" width={{ base: "100%", md: "50%" }}>
				<Heading
					data-aos="fade-up"
					as="h1"
					fontSize={{ base: "x-large", md: "xx-large" }}
				>
					We are looking for great people
				</Heading>
				<Text
					my="5"
					data-aos="fade-up"
					fontWeight="300"
					fontSize={{ base: "large", md: "1.4rem" }}
				>
					{`Interested in working with world-class team on problems that
					really matter ? We are growing fast and hiring arcoss all
					departments. Join us now.`}
				</Text>
				<CustomButton
					text="Explore Open positions"
					link={true}
					linkProps={{
						path: "/careers-hikan-datalabs",
						name: "Explore Open positions",
					}}
				/>
			</Box>
			<Box p="10">
				<Image
					src="/join.jpg"
					width="350px"
					rounded="12"
					objectFit="contain"
				/>
			</Box>
		</Flex>
	);
}
