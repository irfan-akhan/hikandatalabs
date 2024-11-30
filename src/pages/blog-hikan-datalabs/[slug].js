import {
	Flex,
	Image,
	Heading,
	Text,
	UnorderedList,
	ListItem,
	Avatar,
	HStack,
	Tag,
} from "@chakra-ui/react";
import blogPosts from "../../../lib/blog.json";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";

export default function Project({ blogPost, slug }) {
	const suggestedPosts = [blogPosts[0], blogPosts[1]];

	const { title, content, tags, publishDate, author, banner } = blogPost;

	return (
		<Layout>
			<Flex
				width={{ base: "80%", md: "65vw" }}
				margin="auto"
				gap="8"
				my="15vh"
				direction="column"
				data-aos="fade-up"
			>
				<Flex
					direction="column"
					gap="5"
					my={{ base: 1, md: 5 }}
					data-aos="fade-up"
					data-aos-delay="20"
				>
					<Heading
						textTransform="uppercase"
						data-aos="fade-up"
						data-aos-delay="30"
						fontSize={{ base: "large", md: "xx-large" }}
					>
						{`${title}`}
					</Heading>
					<Flex align="center" gap="2">
						<Avatar size="lg" name={author || ""} />
						<Text data-aos="fade-up" data-aos-delay="40">
							{author}
						</Text>
						<Text
							data-aos="fade-up"
							data-aos-delay="50"
							fontSize="x-small"
						>
							{publishDate}
						</Text>
					</Flex>
				</Flex>

				<HStack
					data-aos="fade-up"
					data-aos-delay="20"
					mt={{ base: 0, md: 5 }}
					spacing="3"
					wrap="wrap"
				>
					{tags?.map((item) => (
						<Tag
							px="3"
							py="1"
							fontSize="small"
							key={item}
							variant="solid"
							bg="black"
							data-aos="fade-up"
							data-aos-delay="30"
							rounded="3"
						>
							{`${item}`}
						</Tag>
					))}
				</HStack>

				<Image
					data-aos="fade-up"
					data-aos-delay="20"
					width={"100%"}
					alt="Segun Adebayo"
					src={banner ? banner : "/people.jpg"}
				/>
				<Flex
					direction="column"
					gap="12"
					data-aos="fade-up"
					data-aos-delay="20"
				>
					{content?.map((item, idx) => {
						return (
							<Flex
								key={idx}
								direction="column"
								gap={{ base: 0, md: 5 }}
								data-aos="fade-up"
								data-aos-delay="20"
							>
								<Heading
									data-aos="fade-up"
									data-aos-delay="30"
									fontWeight="400"
									textTransform="capitalize"
									fontSize={{
										base: "x-large",
										md: "xx-large",
									}}
								>
									{`${item.heading}`}
								</Heading>
								{item.text ? (
									<Text
										data-aos="fade-up"
										data-aos-delay="50"
										my={{ base: 0, md: "3" }}
										fontWeight="300"
										lineHeight={{
											base: "30px",
											md: "40px",
										}}
										fontSize={{
											base: "large",
											md: "x-large",
										}}
									>
										{`${item.text}`}
									</Text>
								) : item.bullets ? (
									<UnorderedList>
										{item.bullets.map((text) => (
											<ListItem
												key={text}
												data-aos="fade-up"
												data-aos-delay="40"
												my="3"
												fontWeight="300"
												lineHeight="40px"
												fontSize={{
													base: "large",
													md: "x-large",
												}}
											>
												{`${text}`}
											</ListItem>
										))}
									</UnorderedList>
								) : null}
							</Flex>
						);
					})}
				</Flex>
			</Flex>
			<Flex my="24" p={12} bg="#f5f5f5" justify="space-evenly">
				<Flex
					w={{ base: "100%", md: "80%" }}
					p={{ base: 0, md: 3 }}
					direction={{ base: "column", md: "initial" }}
					bg="#fff"
					justify="space-evenly"
				>
					{suggestedPosts?.map((post, idx) => (
						<BlogCard
							key={idx}
							bgImage={post?.banner}
							tags={[post?.tags[0], post?.tags[1], post?.tags[2]]}
							title={post?.title}
							slug={post?.slug}
						/>
					))}
				</Flex>
			</Flex>
		</Layout>
	);
}

export async function getStaticPaths(_ctx) {
	const slugs = blogPosts.map(({ slug }) => slug);
	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}
export async function getStaticProps({ params: { slug } }) {
	const blogPost = blogPosts?.find((item) => item.slug == slug);
	return { props: { blogPost: blogPost } };
}
