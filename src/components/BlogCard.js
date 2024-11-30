import { Button, Flex, HStack, Heading, Tag } from "@chakra-ui/react";

export default function BlogCard({
	title,
	bgImage = "/people.jpg",
	tags,
	width = "100%",
	slug,
}) {
	return (
		<Flex
			p={{ base: 4, md: "6" }}
			rounded={8}
			m={{ base: 2, md: "6" }}
			direction="column"
			width={{ base: "90%", lg: width }}
			bgImage={`linear-gradient(7deg, rgba(2,0,36,1) 20%, rgba(39,17,68,1) 26%, rgba(10,19,20,0.49343487394957986) 100%), url(${bgImage})`}
			bgSize="cover"
			color="#fff"
			data-aos="fade-up"
			data-aos-delay="20"
			minH="60vh"
			align="center"
			justify="space-between"
			_hover={{
				transition: "all .4s linear",
				bgImage: `linear-gradient(7deg, rgba(2,0,36,1) 0%, rgba(39,17,68,1) 0%, rgba(10,19,20,0.49343487394957986) 0%), url(${bgImage})`,
			}}
		>
			<HStack
				data-aos="fade-up"
				data-aos-delay="20"
				mt="5"
				spacing="3"
				wrap="wrap"
			>
				<Heading
					my="4"
					size="lg"
					data-aos="fade-up"
					data-aos-delay="40"
					fontWeight={500}
				>
					{`${title}`}
				</Heading>
				{tags?.map((item) => (
					<Tag
						data-aos="fade-up"
						data-aos-delay="40"
						key={item}
						color="#fff"
						rounded={4}
						bg="#000"
						fontWeight={400}
					>
						{`${item}`}
					</Tag>
				))}
			</HStack>

			<Button
				alignSelf="start"
				my="6"
				as="a"
				href={`/blog-hikan-datalabs/${slug}`}
				prefetch="true"
				data-aos="fade-up"
				data-aos-delay="20"
				variant="ghost"
				_hover={{
					transition: "all .3s ease-in",
					fontWeight: "500",
					bg: "#000",
					color: "#fff",
					rounded: "0",
					padding: 2,
					textDecor: "none",
				}}
				textUnderlineOffset="10px"
				color="#fff"
				textDecor="underline"
				size="md"
				fontWeight="400"
			>
				Read more &nbsp; &nbsp; {`->`}
			</Button>
		</Flex>
	);
}
