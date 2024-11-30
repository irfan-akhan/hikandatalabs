import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
const roles = {
	frontend: [
		"vue.svg",
		"react.svg",
		"gatsby.svg",
		"javascript.svg",
		"react native.svg",
		,
	],
	backend: [
		"python.svg",
		"node.svg",
		"grapghql.svg",
		"nest.png",
		"django.svg",
	],
	management: [
		"collab.svg",
		"agile pm.svg",
		"asana.svg",
		"trello.svg",
		"pmi.svg",
		"github.svg",
		"kanban.svg",
	],
	qa: ["sentry.svg", "cypress.svg", "testrail.svg"],
	infrastructure: ["docker.svg", "firebase.svg", "aws.svg", "serverless.svg"],
	design: [
		"figma.svg",
		"photoshop.svg",
		"illustrator.svg",
		"blender.svg",
		"after effects.svg",
	],
};
export default function ServicePageTechCard({
	heading,
	text,
	role,
	reverse = false,
}) {
	return (
		<Flex
			my={{ base: 2, md: "12" }}
			justify="space-between"
			align="center"
			data-aos="fade-up"
			direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
		>
			<Flex
				p={{ base: 0, md: "8" }}
				gap="6"
				direction="column"
				width={{ base: "100%", md: "50%" }}
				data-aos="fade-up"
				data-aos-deley="20"
			>
				<Heading
					as="h2"
					data-aos="fade-up"
					data-aos-deley="30"
					textTransform="capitalize"
					fontSize={{ base: "medium", md: "x-large" }}
				>
					{heading}
				</Heading>
				<Text
					data-aos="fade-up"
					data-aos-deley="30"
					textAlign="start"
					fontSize={{ base: "large", md: "x-large" }}
					fontWeight="300"
					width={{ base: "100%" }}
					mb="5"
				>
					{text}
				</Text>
			</Flex>
			<Flex
				wrap="wrap"
				gap="10"
				p="4"
				justify="center"
				bg="#292929"
				color="#fff"
				rounded={10}
				data-aos="fade-up"
				data-aos-deley="20"
			>
				{roles[role]?.map((stack, idx) => (
					<Flex
						data-aos="fade-up"
						data-aos-deley="30"
						key={idx}
						align="center"
						direction="column"
						textAlign="center"
					>
						<Image
							src={`/stack/${stack}`}
							boxSize={{ base: "40px", md: "70px" }}
							objectFit="contain"
							alt={`${stack}`}
						/>
						<Text
							fontSize={{ base: "small", md: "small" }}
							textTransform="capitalize"
							my="3"
						>
							{stack.split(".")[0]}
						</Text>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
}
