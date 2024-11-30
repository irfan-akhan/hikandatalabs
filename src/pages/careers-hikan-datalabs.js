import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import OurStack from "@/components/OurStack";
import PositionCard from "@/components/PositionCard";
import RecruitmentCard from "@/components/RecruitmentCard";
// import Team from "@/components/Team";
import ValueCard from "@/components/ValueCard";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";

export default function Careers() {
	const openPositions = [];
	return (
		<Layout>
			<Hero
				heading="Shape the Future of Digital Products"
				text="Hikan Datalabs is home to more than 50+ fast learners and experts helping brands make the world more digitalized."
				linkProps={{ name: "View open positions", path: "#positions" }}
				imgUrl="/teams.jpg"
			/>

			<Flex
				width="80%"
				p={{ base: 2, md: "6" }}
				m="auto"
				gap={{ base: 3, md: "15" }}
				height={{ base: "initial", md: "90vh" }}
				overflow="hidden"
				direction={{ base: "column", md: "row" }}
				data-aos="fade-up"
			>
				<Image
					src="/teams.jpg"
					width={{ base: "250px", md: "950px" }}
					alt="team"
					data-aos="fade-up"
					data-aos-delay="20"
					objectFit="cover"
				/>
				<Box p={{ base: 2, md: "10" }} width="80%">
					<Heading
						mb="5"
						fontSize={{ base: "medium", md: "xx-large" }}
						data-aos="fade-up"
						data-aos-delay="20"
					>
						Be a Part of Something Big!
					</Heading>
					<Text
						data-aos="fade-up"
						data-aos-delay="30"
						fontSize={{ base: "large", md: "x-large" }}
					>
						Our team is always looking for extraordinary talent,
						motivated, passionate, and creative team players with
						the desire to bring their ideas to life and positively
						impact society.
					</Text>
				</Box>
			</Flex>

			<OurStack />
			<Flex
				direction="column"
				p={{ base: 4, md: "24" }}
				textAlign="center"
				w={{ base: "100%", md: "90%" }}
				mx="auto"
				align="center"
				justify="center"
			>
				<Text
					mb="3"
					textTransform="capitalize"
					fontSize={{ base: "large", md: "xxx-large" }}
				>
					Become a part of Hikan Datalabs
				</Text>

				<Text
					fontSize={{
						base: "medium",
						md: "x-large",
					}}
					textTransform="capitalize"
				>
					Have you applied ?
				</Text>
				<Text
					fontSize={{
						base: "medium",
						md: "large",
					}}
				>
					Great, this is your first step to joining our team! This
					will be your further path in our recruitment process
				</Text>
				<RecruitmentCard
					heading="Phone Interview"
					step="1"
					text={`Our Recruiter - Ania - will contact you to briefly
            tell you about our company and position. You can
            also expect a few questions related to your
            experience and expectations.`}
				/>
				<RecruitmentCard
					heading="Meeting with the Manager/TL
					"
					step="2"
					text={`You will have the opportunity to meet your future Manager or 
					Team Leader. We will want to get to know your competencies better, 
					understand your role so far and talk about your aspirations in terms 
					of further development.`}
				/>
				<RecruitmentCard
					heading="Technical meeting/task"
					step="3"
					text={`You are already at the final stage in our recruitment process, congratulations! 
					Now we would like to confirm your skills in a practically. We will invite you to a 
					workshop where you will have the opportunity to work on a task typical for the position
					you applied for. In the case of some positions, instead of a workshop, the last stage of 
					recruitment will be a task. You will receive enough time for its execution to calmly 
					prepare it and at the same time its execution will not be time-consuming for you`}
				/>
				<RecruitmentCard
					heading="Feedback & Decision"
					step="4"
					text={`After the last stage of recruitment, we need about 2 days to provide you with 
					the final decision, you will be informed about the waiting time for the decision during
				    the last stage of the recruitment. 
					You will always receive feedback from us, no matter what decision we make`}
				/>
				<Text fontSize={{ base: "large", md: "xx-large" }}>
					Become a part of IT. Become a part of Hikan Datalabs.
				</Text>
			</Flex>
			<Flex
				direction="column"
				w={{ base: "100%", md: "90%" }}
				p={{ base: 4, md: "16" }}
				justify="center"
				m="auto"
				data-aos="fade-up"
			>
				<Heading
					as="h3"
					my="5"
					fontSize={{ base: "large", md: "xx-large" }}
					data-aos="fade-up"
					data-aos-delay="20"
				>
					Hikan Datalabs Values
				</Heading>
				<Box bg="#000">
					<ValueCard
						heading="Move Fast.
					"
						step="01"
						text={`Think fast and act fast.`}
						subText={`Be pragmatic, use Occam's razor.`}
					/>
					<ValueCard
						heading="Be Kind."
						step="02"
						text={`Never lose a good heart.`}
						subText={`Think big but stay humble.`}
					/>
					<ValueCard
						heading="Do More."
						step="03"
						text={`Always do more than people expect.`}
						subText={`Be passionate, take the initiative.`}
					/>
				</Box>
			</Flex>
			{/* <Flex
				direction="column"
				w={{ base: "100%", md: "90%" }}
				p={{ base: 4, md: "16" }}
				justify="center"
				m="auto"
				data-aos="fade-up"
			>
				<Team />
			</Flex> */}
			<Heading
				as="h3"
				margin="auto"
				width={{ base: "100%", md: "80%" }}
				px={{ base: 4 }}
				data-aos="fade-up"
				fontSize={{ base: "large", md: "xx-large" }}
			>
				Open Positions
			</Heading>
			{openPositions?.length ? (
				<Flex
					direction="column"
					w="90%"
					p={{ base: 4, md: "16" }}
					justify="center"
					m="auto"
					id="positions"
					data-aos="fade-up"
					data-aos-delay="20"
				>
					<Box>
						<PositionCard
							title="Full Stack Developer"
							position="remote"
							location="Srinagar"
						/>
						<PositionCard
							title="WordPress (PHP) Developer"
							position="remote"
							location="Srinagar"
						/>
						<PositionCard
							title="Data Engineer"
							position="remote"
							location="Srinagar"
						/>

						<PositionCard
							title="Senior React Developer"
							position="remote"
							location="Srinagar"
						/>
						<PositionCard
							title="Solution Architect"
							position="remote"
							location="Srinagar"
						/>
					</Box>
				</Flex>
			) : (
				<Flex
					id="positions"
					direction="column"
					w={{ base: "90%", md: "80%" }}
					p={{ base: 4, md: "16" }}
					border="2px solid #000"
					justify="center"
					align="center"
					m="auto"
					data-aos="fade-up"
					data-aos-delay="20"
					my={{ base: 2, md: "10" }}
				>
					<Heading
						as="h2"
						fontWeight="500"
						data-aos="fade-up"
						data-aos-delay="40"
						fontSize={{ base: "large", md: "xx-large" }}
					>
						{`We currently don't have any career opportunities.`}
					</Heading>
					<Text my="3" data-aos="fade-up" data-aos-delay="50">
						Please check next time, we are always looking to build
						teams with freash talent.
					</Text>
				</Flex>
			)}
			<Flex
				direction="column"
				w={{ base: "100%", md: "90%" }}
				p={{ base: 4, md: "16" }}
				justify="center"
				m="auto"
				id="positions"
				data-aos="fade-up"
			>
				<Heading
					as="h3"
					my="5"
					fontSize={{ base: "large", md: "xx-large" }}
					data-aos="fade-up"
					data-aos-delay="20"
				>
					FAQs
				</Heading>
				<Box>
					<Accordion allowMultiple>
						<AccordionItem data-aos="fade-up" data-aos-delay="20">
							{({ isExpanded }) => (
								<>
									<h2>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												fontWeight="500"
												fontSize={{
													base: "medium",
													md: "large",
												}}
											>
												Will I be recruited for a
												specific role ?
											</Box>
											{isExpanded ? (
												<MinusIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											) : (
												<AddIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											)}
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										No, we are looking for candidates to
										join us for long-term cooperation, not
										for a specific project. Projects are
										allocated immediately after you join the
										team, as agreed between you, your Team
										Leader and the Talent Allocation
										Specialist.
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
						<AccordionItem data-aos="fade-up" data-aos-delay="20">
							{({ isExpanded }) => (
								<>
									<h2>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												fontWeight="500"
												fontSize={{
													base: "medium",
													md: "large",
												}}
											>
												What does the onboarding process
												look like ?
											</Box>
											{isExpanded ? (
												<MinusIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											) : (
												<AddIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											)}
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										{`We want you to start working at
										Hikan Datalabs equipped with the broadest
										possible knowledge and tools that will
										enable you to smoothly join the team.
										For the first three days, we will invite
										you to the office in Poznan, so that you
										can meet the team face-to-face, get to
										know our office and feel the vibe of
										Hikan Datalabs a little better. Then, with
										the support of the team and Team Leader
										/ Manager, you will gradually learn your
										responsibilities and tasks for the role.`}
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
						<AccordionItem data-aos="fade-up" data-aos-delay="20">
							{({ isExpanded }) => (
								<>
									<h2>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												fontWeight="500"
												fontSize={{
													base: "medium",
													md: "large",
												}}
											>
												How can I develop my skills
												working at Hikan Datalabs ?
											</Box>
											{isExpanded ? (
												<MinusIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											) : (
												<AddIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											)}
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										{`At Hikan Datalabs, we strive to ensure that
										you can constantly develop your
										competencies, we place great emphasis on
										continuous learning and improvement of
										hard and soft skills.Career paths will
										be the first signposts for your
										development, according to which,
										together with your Team Leader or
										Manager, you will plan the next steps
										and goals of your professional
										development. Our regular internal events
										such as DevTalk, QAtalk, Product Talk,
										Knowledge Shot, and Coffee break will
										help you acquire useful technical
										knowledge and develop your soft skills.`}
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
						<AccordionItem data-aos="fade-up" data-aos-delay="20">
							{({ isExpanded }) => (
								<>
									<h2>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												fontWeight="500"
												fontSize={{
													base: "medium",
													md: "large",
												}}
											>
												How can I develop my skills
												working at Hikan Datalabs ?
											</Box>
											{isExpanded ? (
												<MinusIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											) : (
												<AddIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											)}
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										{`At Hikan Datalabs, we strive to ensure that
										you can constantly develop your
										competencies, we place great emphasis on
										continuous learning and improvement of
										hard and soft skills.Career paths will
										be the first signposts for your
										development, according to which,
										together with your Team Leader or
										Manager, you will plan the next steps
										and goals of your professional
										development. Our regular internal events
										such as DevTalk, QAtalk, Product Talk,
										Knowledge Shot, and Coffee break will
										help you acquire useful technical
										knowledge and develop your soft skills.`}
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
						<AccordionItem data-aos="fade-up" data-aos-delay="20">
							{({ isExpanded }) => (
								<>
									<h2>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												fontWeight="500"
												fontSize={{
													base: "medium",
													md: "large",
												}}
											>
												Can I work part-time ?
											</Box>
											{isExpanded ? (
												<MinusIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											) : (
												<AddIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											)}
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										{`Ultimately, we are looking for people to
										join us full-time, which is related to
										the business needs and those of our
										clients. However, there are exceptions -
										if you know that the situation is
										temporary, because, for example, you
										finish your studies and will become
										available full-time for a few / several
										weeks, it is worth trying. There is a
										chance that we will find an optimal
										solution for both parties.`}
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
						<AccordionItem data-aos="fade-up" data-aos-delay="20">
							{({ isExpanded }) => (
								<>
									<h2>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												fontWeight="500"
												fontSize={{
													base: "medium",
													md: "large",
												}}
											>
												Are there any internships at
												Hikan Datalabs ?
											</Box>
											{isExpanded ? (
												<MinusIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											) : (
												<AddIcon
													fontSize={{
														base: "10px",
														md: "18px",
													}}
												/>
											)}
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										{`Due to the degree of difficulty and
										advancement of the projects implemented
										at Apptension, internships are organized
										very rarely. In most cases, we are
										looking for candidates who have already
										gained at least several months of
										commercial experience.`}
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
					</Accordion>
				</Box>
			</Flex>
		</Layout>
	);
}
