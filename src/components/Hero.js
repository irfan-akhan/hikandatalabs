import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./partials/Button";

const Hero = ({ heading, subHeading, text, imgUrl, linkProps }) => {
	return (
		<Flex
			width="96vw"
			height={{ base: "fit-content", md: "90vh" }}
			justify="center"
			mb="10rem"
			overflow="hidden"
			direction={{ base: "column", md: "row" }}
		>
			<Flex
				pl={{ base: 0, md: "7rem" }}
				mt={{ base: "1rem", md: "4rem" }}
				direction="column"
				align={{ base: "center", md: "flex-start" }}
				gap={{ base: "6", md: "8" }}
				pr="3"
				maxW={{ base: "100vw", md: "60%" }}
				// boxShadow="20px 18px 2px 7px #d3d3d3"
				pos="relative"
			>
				<Stack textAlign={{ base: "center", md: "initial" }}>
					<Heading
						as="h1"
						width="fit-content"
						fontSize={{ base: "xx-large", md: "4rem" }}
					>
						{heading
							? heading
							: `We design,  build and launch  digital
						products`}
					</Heading>
					<Text
						fontWeight="300"
						textAlign={{ base: "center", md: "initial" }}
						fontSize={{ base: "medium", md: "large" }}
					>
						{subHeading
							? subHeading
							: "Together we build inspiring digital products"}
					</Text>
				</Stack>

				{
					<Text
						fontWeight="300"
						textAlign={{ base: "center", md: "initial" }}
						px={{ base: "5", md: "0" }}
						fontSize={{ base: "large", md: "x-large" }}
					>
						{text
							? text
							: `From idea discovery to product growth – we can help you at
					every stage of the product development lifecycle.`}
					</Text>
				}
				<CustomButton
					link={true}
					linkProps={
						linkProps
							? linkProps
							: {
									name: "Let's collaborate",
									path: "/contact-hikan-datalabs",
							  }
					}
				/>
			</Flex>

			<Box
				width={{ base: 0, md: "50%" }}
				display={{ base: "none", md: "initial" }}
			>
				<Image
					alt="hikandatalabs"
					src={imgUrl ? imgUrl : "/herobg1.jpg"}
					h="120%"
					width="100%"
					transition="all 1s ease-in"
					_hover={{
						transform: "scale(.9)",
					}}
				/>
			</Box>
		</Flex>
	);
};

export default Hero;
