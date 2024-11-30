import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function TeamCard({ name, title, description, bgImage }) {
	return (
		<Flex
			direction="column"
			height="full"
			minW={{ base: "100%", lg: "30%" }}
			data-aos="fade-right"
			data-aos-delay="50"
			rounded={15}
			bg="black"
		>
			<Image
				src={bgImage}
				roundedTop={15}
				boxSize={{ base: 300, md: 400 }}
				objectFit="cover"
				data-aos="fade-right"
				data-aos-delay="70"
			></Image>
			<Box
				p="5"
				bg="#030303"
				color="#fff"
				data-aos="fade-right"
				data-aos-delay="40"
			>
				<Text
					textTransform="capitalize"
					data-aos="fade-right"
					fontWeight="500"
				>
					{name}
				</Text>
				<Text
					textTransform="capitalize"
					fontWeight="300"
					fontSize="large"
					data-aos="fade-right"
				>
					- {title}
				</Text>
			</Box>
		</Flex>
	);
}
