import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const managementData = [
	{
		name: "Aqib Abbas",
		title: "co-Founder",
		picture: "/team/aqib-2.jpg",
		desc: `An energetic and passionate leader with a strong
        international background. With 10 years of executive
        experience, Filip can seal any deal. His attention to
        detail is causing many headaches, but that’s only
        because he’s a perfectionist in everything he does. He
        knows no limits, and for him, “boundaries” is just
        another word.`,
	},
	{
		name: "Rakib Abbas",
		title: "co-Founder",
		picture: "/team/rakib.jpg",
		desc: `Meet the driving force behind Hikan Datalabs our visionary leader.
		 A trailblazer in the industry, Rakib Abbas embodies the spirit of leadership, 
		 innovation, and unwavering dedication that defines our success story.
		With a keen eye for opportunities and a strategic mind, and charts the 
		course for our journey into the future.`,
	},
	{
		name: "Nadeem Hussain",
		title: "CMO",
		picture: "/team/nadeem.jpg",
		desc: ` With an unwavering passion for storytelling and a keen eye for market dynamics, 
		 leads our marketing efforts into uncharted territories of innovation and impact. Their 
		 visionary approach isn't just about campaigns; it's about crafting compelling narratives 
		 that resonate with our audience, driving engagement, and shaping our brand's identity. `,
	},
];

export default function ManagementCard() {
	const [activeTab, setActiveTab] = useState(0);
	const activeCard = managementData[activeTab];
	return (
		<>
			<Flex
				placeContent="center"
				width={{ base: "100%", md: "35%" }}
				display={{ base: "none", md: "initial" }}
				border="2px solid #EC1D2466"
				boxShadow="10px 10px 0px 2px #EC1D24"
				textAlign="center"
				height={"80vh"}
				overflow="hidden"
			>
				<Image
					src={activeCard.picture}
					objectFit={"cover"}
					alt={activeCard.name}
					width="100%"
					loading="eager"
				/>
			</Flex>
			<Flex
				mt={{ base: "2vh", md: "10vh" }}
				direction={"column"}
				width={{ base: "100%", md: "40%" }}
			>
				<Flex gap={{ base: "5", md: "20" }} justify="space-between">
					<Box>
						<Text
							data-aos="fade-up"
							fontWeight="400"
							textTransform="capitalize"
							fontSize={{ base: "large", md: "x-large" }}
						>
							{activeCard.name}
						</Text>
						<Text
							textTransform="capitalize"
							data-aos="fade-up"
							fontWeight="300"
							mb="10"
							fontSize={{ base: "medium" }}
						>
							{activeCard.title}
						</Text>
					</Box>
					<Flex gap="6">
						<Button
							_hover={{
								transform: "all 1s ease-in",
								bg: "##fff",
								boxShadow: "0px 0px 0px 0px",
							}}
							bg="#000"
							border="2px solid #fff"
							color="white"
							p="5"
							py="7"
							onClick={() => {
								setActiveTab(
									activeTab > 0
										? activeTab - 1
										: managementData.length - 1
								);
							}}
							boxShadow="5px 5px 0px 0px  #fff"
						>
							<FaArrowLeft />
						</Button>
						<Button
							_hover={{
								transform: "all 1s ease-in",
								bg: "##fff",
								boxShadow: "0px 0px 0px 0px",
							}}
							bg="#000"
							border="2px solid #fff"
							color="white"
							p="5"
							py="7"
							boxShadow="5px 5px 0px 0px  #fff"
							onClick={() => {
								setActiveTab(
									activeTab < managementData.length - 1
										? activeTab + 1
										: 0
								);
							}}
						>
							<FaArrowRight />
						</Button>
					</Flex>
				</Flex>
				<Text
					data-aos="fade-up"
					fontWeight="300"
					mb="5"
					p={{ base: "4", md: "0" }}
					fontSize={{ base: "large", md: "large" }}
				>
					{activeCard.desc}
				</Text>
			</Flex>
		</>
	);
}
