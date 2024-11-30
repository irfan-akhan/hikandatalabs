import Layout from "@/components/Layout";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import blogPosts from "../../../lib/blog.json";
import BlogCard from "@/components/BlogCard";
export default function Blog() {
	return (
		<Layout>
			<Flex
				minHeight="70vh"
				align="center"
				justify="flex-start"
				margin="auto"
				width="80vw"
				gap="20"
				mt="20vh"
			>
				<Box width={{ base: "100%", md: "40vw" }}>
					<Heading
						fontSize={{ base: "xx-large", md: "xxx-large" }}
					>{`Hikan Datalabs's Journel...`}</Heading>
					<Text
						fontWeight="300"
						fontSize={{ base: "large", md: "x-large" }}
						mt="10"
					>
						{`Sharing is caring, so we do our best to keep you updated
						with relevant topics. Read about Qumans’ experience with
						various technologies and how they face daily challenges.`}
					</Text>
				</Box>
				<Box
					width={{ md: "50%" }}
					display={{ base: "none", md: "block" }}
					height="100%"
				>
					<Image
						src="/blog-banner.jpg"
						clipPath="polygon(15% 0, 100% 0%, 86% 100%, 0% 100%)"
						objectFit="fill"
					/>
				</Box>
			</Flex>
			<Flex
				direction={{ base: "column", md: "row" }}
				justify="center"
				wrap="wrap"
				minH="90vh"
				margin="auto"
				width="90%"
				gap="5"
				my={{ base: 0, md: "15vh" }}
			>
				{blogPosts?.map((post) => (
					<BlogCard
						width="26%"
						bgImage={post?.banner}
						key={post?.slug}
						subHeading={post?.content[0]}
						tags={[post?.tags[0], post?.tags[1], post?.tags[2]]}
						title={post?.title}
						content={post?.content}
						slug={post?.slug}
					/>
				))}
			</Flex>
		</Layout>
	);
}
