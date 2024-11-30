import React from "react";
import Case from "./Case";
import { Box, Flex } from "@chakra-ui/react";
import CustomButton from "./partials/Button";
import projects from "../../lib/data.json";

const bg = ["#006699", "#000000", "#431547", "#EC1D24", "#e6007e"];
export default function CaseStudies({ showButton = true, limit }) {
	const data = limit
		? Object.keys(projects)
				.slice(0, limit)
				.map((name) => projects[name])
		: projects;
	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			p={{ base: 4, md: "10" }}
			data-aos="fade-up"
		>
			{Object.keys(data)?.map((item, idx) => (
				<Case
					key={idx}
					bg={bg[idx]}
					title={data[item].name}
					build={data[item].tagline}
					text={data[item].client}
					banner={data[item].banner}
					slug={data[item].slug}
				/>
			))}
			{showButton && (
				<Box my="16">
					<CustomButton
						link={true}
						linkProps={{
							name: "View all project",
							path: "/portfolio-hikan-datalabs",
						}}
					/>
				</Box>
			)}
		</Flex>
	);
}
