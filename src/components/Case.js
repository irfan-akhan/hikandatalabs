import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

export default function Case({ bg, build, title, text, banner, slug }) {
	return (
		<Flex
			data-aos="fade-up"
			height={{ base: "fit-content", md: "95vh" }}
			justify="center"
			align="center"
			my="3"
			overflow="hidden"
			bg={bg ? bg : "initial"}
			width={{ base: "100%", md: "90%" }}
			color="#fff"
			direction={{ base: "column", md: "row" }}
		>
			<Flex
				p={{ base: "4", md: "3rem" }}
				direction="column"
				align={{ base: "center", md: "flex-start" }}
				gap={{ base: "6" }}
				maxW={{ base: "100%", md: "60%" }}
			>
				<Stack>
					<Heading
						as="h1"
						width="fit-content"
						mb="2"
						fontSize={{ base: "large", md: "xx-large" }}
						data-aos="fade-up"
						data-aos-delay="20"
						fontWeight="400"
					>
						{title}
					</Heading>
					<Heading
						as="h1"
						width="fit-content"
						fontSize={{ base: "medium", md: "xxx-large" }}
						data-aos="fade-up"
						data-aos-delay="25"
					>
						{build}
					</Heading>
				</Stack>

				<Text
					fontWeight={{ base: 300, md: "400" }}
					p={{ base: "0", md: "0" }}
					width={{ base: "100%", md: "80%" }}
					fontSize={{ base: "medium", md: "large" }}
					data-aos="fade-up"
					data-aos-delay="30"
				>
					{text}
				</Text>
				<Button
					as="a"
					href={`/portfolio-hikan-datalabs/${slug}`}
					prefetch="true"
					borderRadius="0"
					variant="outline"
					borderColor="#EC1D24"
					fontWeight="300"
					fontSize="medium"
					transform="all 1s ease-in"
					boxShadow="5px 5px 0px 0px  #EC1D24"
					_hover={{
						color: "white",
						transform: "all 1s ease-in",
						boxShadow: "3px 2px 0px 0px  #EC1D24",
					}}
					padding="5"
					color="#fff"
					data-aos="fade-up"
				>
					{`View case study ->`}
				</Button>
			</Flex>

			<Box
				width="50%"
				display={{ base: "none", md: "initial" }}
				data-aos="fade-left"
				data-aos-delay="30"
			>
				<Image
					src={banner}
					h="100%"
					objectFit={"contain"}
					alt="hikandatalabs"
					width="100%"
					transition="all 1s ease-in"
					transform="scale(.9)"
					_hover={{
						transform: "scale(.8)",
					}}
				/>
			</Box>
		</Flex>
	);
}
