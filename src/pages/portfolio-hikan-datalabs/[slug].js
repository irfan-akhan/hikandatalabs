import {
	Box,
	Flex,
	Image,
	Heading,
	Text,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import data from "../../../lib/data.json";
import Layout from "@/components/Layout";
import CoreValueCard from "@/components/CoreValueCard";

export default function Project({ caseStudy }) {
	const {
		name,
		tagline,
		services,
		team_size,
		client,
		industry,
		objective,
		background,
		timeline,
		banner,
		technologies_used = {},
		features = {},
		results = [],
		deliverables = null,
		imageSet = {},
		future_enhancements,
	} = caseStudy;

	return (
		<Layout>
			<Box width="80vw" margin="auto">
				<Flex>
					<Flex
						direction="column"
						my={{ base: 5, md: "24" }}
						minH="90vh"
						gap="5"
						data-aos="fade-up"
					>
						<Flex
							direction={{ base: "column", md: "row" }}
							data-aos="fade-up"
							data-aos-delay="200"
						>
							{imageSet?.logo && (
								<Image
									src={imageSet.logo}
									alt={name}
									width="150px"
									mr="5"
								/>
							)}
							<Heading
								as="h1"
								my={{ base: "4", md: 0 }}
								fontSize={{ base: "x-large", md: "xxx-large" }}
							>
								{name}
							</Heading>
						</Flex>
						<Text
							data-aos="fade-up"
							data-aos-delay="200"
							fontSize="large"
						>
							{client}
						</Text>
						<Image
							data-aos="fade-up"
							data-aos-delay="200"
							src={banner}
							alt={name}
						/>
					</Flex>
				</Flex>
				<Flex
					data-aos="fade-up"
					direction="column"
					my={{ base: 6, md: "24" }}
					gap="5"
				>
					<Heading
						data-aos="fade-up"
						data-aos-delay="200"
						as="h1"
						fontSize={{ base: "x-large", md: "xxx-large" }}
						textTransform="capitalize"
					>
						What we did
					</Heading>
					<Flex my="5" data-aos="fade-up" data-aos-delay="200">
						<Box>
							<UnorderedList spacing="5">
								{services?.map((service) => (
									<ListItem
										data-aos="fade-up"
										data-aos-delay="200"
										key={service}
									>
										{service}
									</ListItem>
								))}
							</UnorderedList>
						</Box>
						<Box
							ml="auto"
							px="3"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<Text
								fontSize={{ base: "small", md: "large" }}
								textTransform="uppercase"
								fontWeight="600"
							>
								Industry
							</Text>
							<Text textTransform="capitalize" my="5">
								{industry}
							</Text>
						</Box>
						<Box mx="8">
							<Text
								fontSize={{ base: "small", md: "large" }}
								textTransform="uppercase"
								fontWeight="600"
							>
								Team Size
							</Text>
							<Text textTransform="capitalize" my="5">
								{team_size} people
							</Text>
						</Box>
					</Flex>
				</Flex>
				<Flex
					data-aos="fade-up"
					direction="column"
					my={{ base: 6, md: "24" }}
					gap="20"
				>
					<Box>
						<Heading
							my="5"
							fontSize={{ base: "x-large", md: "xxx-large" }}
							as="h2"
							fontWeight="600"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							Objective
						</Heading>
						<Text
							fontWeight="300"
							fontSize="large"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							{objective}
						</Text>
					</Box>
					<Box>
						<Heading
							my="5"
							fontSize={{ base: "x-large", md: "xxx-large" }}
							as="h2"
							fontWeight="600"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							Background
						</Heading>
						<Text
							fontWeight="300"
							fontSize="large"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							{background}
						</Text>
					</Box>
				</Flex>
				<Box
					data-aos="fade-up"
					my={{ base: 6, md: "24" }}
					height="90vh"
				>
					<Image
						src="/project-timeline.png"
						alt="project timeline"
						data-aos="fade-up"
						data-aos-delay="200"
					/>
					<Flex
						justify="space-between"
						px={{ base: 2, md: "16" }}
						fontWeight="600"
						color="gray"
						mt="4"
					>
						{timeline.map((time, idx) => (
							<Text
								data-aos="fade-up"
								data-aos-delay="200"
								key={idx}
							>
								{time} weeks
							</Text>
						))}
					</Flex>
				</Box>
				<Box data-aos="fade-up" my={{ base: 6, md: "24" }}>
					<Heading
						fontSize={{ base: "x-large", md: "xxx-large" }}
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						What we build
					</Heading>
					<Flex
						gap="24"
						direction={{ base: "column", md: "initial" }}
					>
						<Text
							width={{ base: "100%", md: "70%" }}
							data-aos="fade-up"
							data-aos-delay="200"
							fontWeight="300"
							fontSize="large"
						>
							Through collaboration with Q, The Times Travel was
							able to implement and create a new web app with a
							diverse approach to the traveling experience.
							Implementing UX and UI design, developing custom
							WordPress themes, SEO optimization and the overall
							web infrastructure were all done in just 6 months.
						</Text>
						<Box>
							<Heading
								as="h3"
								mb="4"
								fontWeight="400"
								fontSize="x-large"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								Deliverables
							</Heading>
							<UnorderedList spacing="3">
								{deliverables ? (
									deliverables.map((item) => (
										<ListItem
											data-aos="fade-up"
											data-aos-delay="200"
											key={item}
											fontWeight="300"
											fontSize="large"
										>
											{item}
										</ListItem>
									))
								) : (
									<>
										<ListItem
											data-aos="fade-up"
											data-aos-delay="200"
											fontWeight="300"
											fontSize="large"
										>
											Web app
										</ListItem>
										<ListItem
											data-aos="fade-up"
											data-aos-delay="200"
											fontWeight="300"
											fontSize="large"
										>
											Admin dashboard
										</ListItem>
									</>
								)}
							</UnorderedList>
						</Box>
					</Flex>
				</Box>
				<Box data-aos="fade-up" my={{ base: 6, md: "24" }}>
					<Heading
						fontSize={{ base: "x-large", md: "xxx-large" }}
						as="h2"
						fontWeight="600"
						data-aos="fade-up"
						data-aos-delay="200"
						mb="12"
						textTransform="capitalize"
					>
						Tech Stack
					</Heading>
					{Object.keys(technologies_used)?.map((area) => (
						<Flex
							my="3"
							direction={{ base: "column", md: "row" }}
							key={area}
						>
							<Text
								data-aos="fade-up"
								data-aos-delay="200"
								mr="5"
								fontWeight={600}
								textTransform="capitalize"
							>
								{area}
							</Text>
							<Text
								fontWeight="300"
								fontSize="large"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								{technologies_used[area]}
							</Text>
						</Flex>
					))}
				</Box>
				<Flex
					data-aos="fade-up"
					direction="column"
					my={{ base: 6, md: "24" }}
				>
					<Heading
						data-aos="fade-up"
						data-aos-delay="200"
						fontSize={{ base: "x-large", md: "xxx-large" }}
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
					>
						Features
					</Heading>
					<Flex
						data-aos="fade-up"
						data-aos-delay="200"
						wrap="wrap"
						gap="8"
					>
						{Object.keys(features)?.map((feature, idx) => (
							<CoreValueCard
								key={idx}
								heading={feature}
								text={features[feature]}
							/>
						))}
					</Flex>
				</Flex>
				<Flex
					data-aos="fade-up"
					direction="column"
					my={{ base: 6, md: "24" }}
				>
					<Heading
						data-aos="fade-up"
						data-aos-delay="200"
						fontSize={{ base: "x-large", md: "xxx-large" }}
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
					>
						Visuals and Wireframes
					</Heading>
					<Flex wrap="wrap" gap="8">
						{imageSet?.gallery.map((url, idx) => (
							<Image
								border="1px solid #000"
								data-aos="fade-up"
								data-aos-delay="200"
								src={url}
								key={idx}
								alt={name}
							/>
						))}
					</Flex>
				</Flex>
				<Flex
					data-aos="fade-up"
					direction="column"
					my={{ base: 6, md: "24" }}
				>
					<Heading
						data-aos="fade-up"
						data-aos-delay="200"
						fontSize={{ base: "x-large", md: "xxx-large" }}
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
					>
						Conclusion
					</Heading>
					{results?.map((result, idx) => (
						<Text
							data-aos="fade-up"
							data-aos-delay="200"
							fontSize="large"
							key={idx}
							fontWeight="300"
							my="2"
						>
							{result}
						</Text>
					))}
				</Flex>
			</Box>
		</Layout>
	);
}
export async function getStaticPaths(_ctx) {
	const slugs = Object.keys(data);
	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}
export async function getStaticProps({ params: { slug } }) {
	const caseStudy = data[slug];
	return { props: { caseStudy } };
}
