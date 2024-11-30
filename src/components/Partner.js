import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import CustomButton from "./partials/Button";

export default function Partner() {
	return (
		<Flex
			paddingY={{ base: 16, md: "36" }}
			paddingX={{ base: 6, md: 20 }}
			direction="column"
			justify="center"
			align={{ base: "initial", md: "center" }}
			bg="#000"
			color="#fff"
			my="16"
		>
			<Heading
				mb="6"
				as="h2"
				fontSize={{ base: "medium", md: "x-large" }}
			>
				WHAT CAN WE HELP YOU WITH?
			</Heading>
			<Flex p={{ base: 3, md: "10" }} wrap="wrap" justify="flexStart">
				<Text
					data-aos="fade-left"
					textDecoration="underline"
					textUnderlineOffset="6px"
					textDecorationColor="transparent"
					_hover={{
						textDecoration: "underline",
						textDecorationColor: "#fff",
						transition: "all .3s ease-in",
					}}
					minW="25%"
					as="a"
					p="10"
					href="/services-hikan-datalabs/product"
					fontSize="x-large"
					fontWeight="500"
				>
					Product <br /> Discovery
				</Text>
				<Text
					data-aos="fade-left"
					data-aos-delay="50"
					textDecoration="underline"
					textUnderlineOffset="6px"
					textDecorationColor="transparent"
					_hover={{
						textDecoration: "underline",
						textDecorationColor: "#fff",
						transition: "all .3s ease-in",
					}}
					minW="25%"
					p="10"
					as="a"
					href="/services-hikan-datalabs/mobile"
					fontSize="x-large"
					fontWeight="500"
				>
					Mobile <br /> Development
				</Text>
				<Text
					data-aos="fade-left"
					data-aos-delay="100"
					textDecoration="underline"
					textUnderlineOffset="6px"
					textDecorationColor="transparent"
					_hover={{
						textDecoration: "underline",
						textDecorationColor: "#fff",
						transition: "all .3s ease-in",
					}}
					minW="25%"
					p="10"
					as="a"
					href="/services-hikan-datalabs/web"
					fontSize="x-large"
					fontWeight="500"
				>
					Web <br /> Development
				</Text>
				<Text
					data-aos="fade-left"
					data-aos-delay="150"
					textDecoration="underline"
					textUnderlineOffset="6px"
					textDecorationColor="transparent"
					_hover={{
						textDecoration: "underline",
						textDecorationColor: "#fff",
						transition: "all .3s ease-in",
					}}
					minW="25%"
					p="10"
					as="a"
					href="/services-hikan-datalabs/#agile"
					fontSize="x-large"
					fontWeight="500"
				>
					Team <br /> Extension
				</Text>
				<Text
					data-aos="fade-left"
					data-aos-delay="200"
					textDecoration="underline"
					textUnderlineOffset="6px"
					textDecorationColor="transparent"
					_hover={{
						textDecoration: "underline",
						textDecorationColor: "#fff",
						transition: "all .3s ease-in",
					}}
					minW="25%"
					p="10"
					as="a"
					pointerEvents={"none"}
					href="/"
					fontSize="x-large"
					fontWeight="500"
				>
					Graphic
					<br /> Designing
				</Text>
				<Text
					data-aos="fade-left"
					data-aos-delay="250"
					textDecoration="underline"
					textUnderlineOffset="6px"
					textDecorationColor="transparent"
					_hover={{
						textDecoration: "underline",
						textDecorationColor: "#fff",
						transition: "all .3s ease-in",
					}}
					minW="25%"
					p="10"
					as="a"
					href="/"
					fontSize="x-large"
					fontWeight="500"
					pointerEvents={"none"}
				>
					Ui <br /> Ux
				</Text>

				<Text
					data-aos="fade-left"
					data-aos-delay="350"
					textDecoration="underline"
					textDecorationColor="transparent"
					textUnderlineOffset="6px"
					_hover={{
						textDecoration: "underline",
						textDecorationColor: "#fff",
						transition: "all .3s ease-in",
					}}
					minW="25%"
					p="10"
					as="a"
					href="/"
					fontSize="x-large"
					fontWeight="500"
					pointerEvents={"none"}
				>
					3D Model
					<br /> Designs
				</Text>
				{/* <Text
					data-aos="fade-left"
					data-aos-delay="300"
					textDecoration="underline"
					textUnderlineOffset="6px"
					textDecorationColor="transparent"
					_hover={{
						textDecoration: "underline",
						textDecorationColor: "#fff",
						transition: "all .3s ease-in",
					}}
					minW="25%"
					p="10"
					as="a"
					opacity={0}
					href="/"
					fontSize="x-large"
					fontWeight="500"
				>
					Autocad <br /> Designs
				</Text> */}
			</Flex>

			<Button
				as="a"
				href="/services-hikan-datalabs"
				borderRadius="0"
				variant="outline"
				borderColor="#000"
				fontWeight="300"
				bg="#FFF"
				fontSize="medium"
				transform="all 1s ease-in"
				boxShadow="5px 5px 0px 0px  #fff"
				_hover={{
					bg: "#fff",
					color: "#000",
					transform: "all 1s ease-in",
					boxShadow: "3px 2px 0px 0px  #fff",
				}}
				padding="5"
				data-aos="fade-up"
				color="#000"
				data-aos-delay="80"
			>
				{`See all services ->`}
			</Button>
		</Flex>
	);
}
