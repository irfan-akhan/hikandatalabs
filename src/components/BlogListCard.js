import {
	Box,
	Button,
	Center,
	Heading,
	HStack,
	Tag,
	Text,
} from "@chakra-ui/react";

export function BlogListCard({ title, tags, subHeading, slug }) {
	return (
		<Center
			as="section"
			m="4"
			boxShadow="0px 0px 5px 3px  #e8e8e8"
			data-aos="fade-up"
		>
			<Box
				maxW="360px"
				bg="white"
				p="12"
				data-aos="fade-up"
				data-aos-delay="20"
			>
				{/* <Image
					src="https://images.unsplash.com/photo-1667420170858-39d40cb413e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
					alt="Svartifoss Waterfall"
					borderRadius="xl"
					objectFit="contain"
					 mx="auto"
				/> */}
				<HStack
					data-aos="fade-up"
					data-aos-delay="20"
					mt="5"
					spacing="3"
					wrap="wrap"
				>
					{tags?.map((item) => (
						<Tag
							data-aos="fade-up"
							data-aos-delay="40"
							key={item}
							variant="outline"
						>
							{item}
						</Tag>
					))}
				</HStack>
				<Heading
					my="4"
					size="lg"
					data-aos="fade-up"
					data-aos-delay="20"
				>
					{title ? title : "Svartifoss Waterfall"}
				</Heading>
				{subHeading && (
					<Text data-aos="fade-up" data-aos-delay="30">
						{subHeading.heading} <br />
						{subHeading.text.slice(0, 120)}
					</Text>
				)}

				<Button
					my="6"
					as="a"
					href={`/blog-hikan-datalabs/${slug}`}
					prefetch="true"
					colorScheme="red"
					data-aos="fade-up"
					data-aos-delay="20"
				>
					Read more
				</Button>
			</Box>
		</Center>
	);
}
