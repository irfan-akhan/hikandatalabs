import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function StackCards() {
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
		infrastructure: [
			"docker.svg",
			"firebase.svg",
			"aws.svg",
			"serverless.svg",
		],
		design: [
			"figma.svg",
			"photoshop.svg",
			"illustrator.svg",
			"blender.svg",
			"after effects.svg",
		],
	};
	const [activeRole, setActiveRole] = useState("frontend");
	return (
		<Flex
			direction="column"
			align="center"
			justify="center"
			p={{ base: 4, md: "16" }}
			bg="#000"
			width={{ base: "100vw", md: "initial" }}
			my={{ base: 5, md: "12" }}
			data-aos="fade-up"
		>
			<Flex
				justify="center"
				align="center"
				wrap="wrap"
				p={{ base: 2, md: "5" }}
				gap={{ base: 3, md: "10" }}
				data-aos="fade-up"
				data-aos-deley="20"
			>
				{Object.keys(roles).map((role) => (
					<Button
						data-aos="fade-up"
						data-aos-deley="20"
						key={role}
						colorScheme="red"
						variant={activeRole == role ? "solid" : "ghost"}
						textTransform="capitalize"
						onClick={(e) => setActiveRole(role)}
					>
						{role}
					</Button>
				))}
			</Flex>
			<Flex
				my="3"
				px={{ base: 4, md: "24" }}
				py={{ base: 4, md: "10" }}
				justify="space-between"
				align="center"
				color="#fff"
				minW="80vw"
				wrap="wrap"
				data-aos="fade-up"
				data-aos-deley="20"
			>
				{roles && activeRole
					? roles[activeRole].map((roleDetails, idx) => (
							<Flex
								data-aos="fade-up"
								data-aos-deley="20"
								key={idx}
								align="center"
								direction="column"
								textAlign="center"
							>
								<Image
									boxSize={{ base: "40px", md: "70px" }}
									objectFit="contain"
									src={`/stack/${roleDetails}`}
									alt={`${roleDetails}`}
								/>
								<Text
									fontSize={{ base: "x-small", md: "small" }}
									textTransform="uppercase"
									my="3"
								>
									{roleDetails.split(".")[0]}
								</Text>
							</Flex>
					  ))
					: ""}
			</Flex>
		</Flex>
	);
}
