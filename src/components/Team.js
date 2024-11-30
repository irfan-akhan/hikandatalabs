import { Flex, Heading, Text } from "@chakra-ui/react";
import TeamCard from "./TeamCard";

const teams = [
	{
		name: "Wajid Kashoo",
		title: "Software developer",
		description: "lorem20",
		bgImage: "/team/wajid.jpg",
	},
	{
		name: "Iqbal Wali",
		title: "sr frontend engineer",
		description: "lorem20",
		bgImage: "/team/iqbal.jpg",
	},
	{
		name: "Rakib Hakim",
		title: "Lead generator",
		description: "lorem20",
		bgImage: "/rakib.jpg",
	},
	{
		name: "Khan Irfan",
		title: "Software developer",
		description: "lorem20",
		bgImage: "/team/irfan.jpg",
	},
	{
		name: "Nazim Hussain",
		title: "3D Animator & Designer",
		description: "lorem20",
		bgImage: "/team/nazim.jpg",
	},
];
export default function Team() {
	return (
		<Flex direction="column" width="80vw">
			<Heading
				width="100%"
				data-aos="fade-up"
				as="h2"
				fontSize={{ base: "x-large", md: "xxx-large" }}
				alignSelf="flex-start"
				my="5"
				textAlign="start"
			>
				Our People
			</Heading>
			<Text
				data-aos="fade-up"
				data-aos-delay="30"
				fontWeight="300"
				fontSize={{ base: "large", md: "x-large" }}
			>
				You will find our team working across Creative Web Design, Web
				Development, Branding, and Digital Marketing.
			</Text>
			<Flex
				my="12"
				flexWrap="nowrap"
				height={{ base: "85vh", md: "90vh" }}
				p={{ base: 3, md: 6 }}
				overflowX="scroll"
				overflowY="hidden"
				gap={12}
				data-aos="fade-up"
				data-aos-delay="40"
				css={{
					"&::-webkit-scrollbar": {
						width: "2px",
					},
					"&::-webkit-scrollbar-track": {
						width: "6px",
					},
					"&::-webkit-scrollbar-thumb": {
						background: "#EC1D24",
						borderRadius: "24px",
					},
				}}
				fontWeight="300"
				fontSize="large"
			>
				{teams.map((team, idx) => (
					<TeamCard
						key={idx}
						name={team.name}
						title={team.title}
						description={team.description}
						bgImage={team.bgImage}
					/>
				))}
			</Flex>{" "}
		</Flex>
	);
}
