import CoreValueCard from "@/components/CoreValueCard";
import { FaNode, FaReact } from "react-icons/fa6";
import { SiMysql, SiJavascript, SiNextdotjs, SiPython } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import { PiTargetLight } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaSpellCheck } from "react-icons/fa6";
import { FaAws, FaHeadSideVirus, FaPython, FaWordpress } from "react-icons/fa";

import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { MdOutlineEngineering } from "react-icons/md";
import {
	TbBrandFirebase,
	TbBrandFlutter,
	TbBrandReactNative,
	TbBrandTeams,
} from "react-icons/tb";
import { SiNginxproxymanager } from "react-icons/si";
import Link from "next/link";
import CustomButton from "@/components/partials/Button";

export default function Services() {
	return (
		<Layout>
			<Flex
				direction="column"
				justify="center"
				align="center"
				minH="90vh"
				margin="auto"
				width={{ base: "90%", md: "70%" }}
				textAlign="center"
				gap="5"
				mt="26"
			>
				<Heading
					color=" #EC1D24"
					as="h2"
					fontSize={{ base: "x-large" }}
				>
					A ONE-STOP-SHOP DEVELOPMENT PARTNER
				</Heading>
				<Heading
					as="h1"
					fontSize={{ base: "x-large", md: "xxx-large" }}
				>
					{`Custom software development services from professionals
					you’ll enjoy working with`}
				</Heading>
				<Text fontSize="large" fontWeight="300">
					{`Team up with superstar product designers, frontend/backend
					developers and DevOps.Diverse
					professionals. Numerous delivered projects. Full-cycle custom
					software development services powered by years of best
					practices.`}
				</Text>
			</Flex>
			<Flex
				direction="column"
				justify="center"
				align="center"
				minH="90vh"
				margin="auto"
				width={{ base: "90%", md: "80%" }}
				textAlign="center"
				gap="5"
				data-aos="fade-up"
			>
				<Heading
					as="h2"
					fontSize={{ base: "x-large", md: "xxx-large" }}
					data-aos="fade-up"
					data-aos-delay="200"
				>
					Our Software Application Development Services
				</Heading>
				<Flex
					data-aos="fade-up"
					data-aos-delay="200"
					justify="space-between"
					align="center"
					textAlign="start"
					p={{ base: 1, md: 6 }}
					my={{ base: 3, md: "10" }}
					direction={{ base: "column", md: "row" }}
				>
					<Flex
						direction="column"
						width={{ base: "90%", md: "50%" }}
						gap="5"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<Image
							src="/product-design.svg"
							alt="product-design"
							boxSize={"50px"}
						/>
						<Heading
							as="h2"
							_hover={{ color: " #EC1D24" }}
							cursor="pointer"
						>
							Digital Product Design
						</Heading>
						<Text fontWeight="500" fontSize="large">
							{`Turn a raw idea into a product millions can’t live without`}
						</Text>
						<Text fontSize="large" fontWeight="300">
							{`The Software House designed branding and UX/UI that
							impacted growth of financing platforms, educational
							services, and even a neo-bank. Practicality,
							repeated use, and A-grade speed are just a couple of
							Design Thinking rules our custom software
							development company lives by.`}
						</Text>
						<Link
							href="/services-hikan-datalabs/product"
							colorScheme=" #EC1D24"
						>
							{`Learn more ->`}
						</Link>
					</Flex>
					<Flex
						wrap="wrap"
						gap="3"
						justify={{ base: "space-between", md: "center" }}
						width={{ base: "90%", md: "50%" }}
						data-aos="fade-up"
						data-aos-delay="200"
						my={{ base: 5, md: "initial" }}
					>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							border="1px solid  #EC1D24"
							p="3"
							rounded="5"
						>
							<FaHeadSideVirus fontSize="30px" color=" #EC1D24" />
							<Text my="3">Empathize</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<PiTargetLight fontSize="40px" color=" #EC1D24" />
							<Text>Define</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<HiLightBulb fontSize="40px" color=" #EC1D24" />
							<Text>Ideate</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<LiaProjectDiagramSolid
								fontSize="40px"
								color=" #EC1D24"
							/>
							<Text>Prototype</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<FaSpellCheck fontSize="40px" color=" #EC1D24" />
							<Text>Test</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<MdSupportAgent fontSize="40px" color=" #EC1D24" />
							<Text>Maintain</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					justify="space-between"
					align="center"
					textAlign="start"
					p={{ base: 1, md: 6 }}
					my={{ base: 3, md: "10" }}
					data-aos="fade-up"
					data-aos-delay="200"
					direction={{ base: "column", md: "initial" }}
				>
					<Flex
						wrap="wrap"
						gap="3"
						justify="flex-start"
						width={{ base: "90%", md: "50%" }}
						data-aos="fade-up"
						data-aos-delay="200"
						my={{ base: 3, md: "initial" }}
					>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							border="1px solid  #EC1D24"
							p="3"
							rounded="5"
						>
							<FaNode fontSize="50px" color=" #EC1D24" />
							<Text my="3">NodeJS</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<FaReact fontSize="50px" color=" #EC1D24" />
							<Text>ReactJS</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<SiNextdotjs fontSize="50px" color=" #EC1D24" />
							<Text>NextJS</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<SiJavascript fontSize="50px" color=" #EC1D24" />
							<Text>Javascript</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<SiPython fontSize="50px" color=" #EC1D24" />
							<Text>Python</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<FaAws fontSize="50px" color=" #EC1D24" />
							<Text>AWS</Text>
						</Flex>
					</Flex>
					<Flex
						direction="column"
						width={{ base: "90%", md: "50%" }}
						gap="5"
						data-aos="fade-up"
						data-aos-delay="200"
						mt={{ base: 12, md: "initial" }}
					>
						<Image
							src="/web-development.svg"
							alt="web development"
							boxSize={"50px"}
						/>
						<Heading
							as="h2"
							_hover={{ color: " #EC1D24" }}
							cursor="pointer"
						>
							Web Development
						</Heading>
						<Text fontWeight="500" fontSize="large">
							{`Be certain the project is on track by choosing from
							numberous professionals available for every stage of the
							development process.`}
						</Text>
						<Text fontSize="large" fontWeight="300">
							{`We design, build, refactor, migrate, architect, and
							provide ongoing maintenance as part of custom
							software development services. No hot fixes — only
							scalable builds with technologies that stand the
							test of time.`}
						</Text>

						<Text fontSize="large" fontWeight="300">
							{`How much does performance matter to you? We aim for
							grade A and a maximum 1s loading time for each custom
							software solution.`}
						</Text>
						<Link
							href="/services-hikan-datalabs/web"
							colorScheme=" #EC1D24"
						>
							{`Learn more ->`}
						</Link>
					</Flex>
				</Flex>
				<Flex
					justify="space-between"
					align="center"
					textAlign="start"
					p={{ base: 1, md: 6 }}
					my={{ base: 3, md: "10" }}
					data-aos="fade-up"
					direction={{ base: "column", md: "row" }}
				>
					<Flex
						direction="column"
						width={{ base: "90%", md: "50%" }}
						gap="5"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<Image
							src="/product-design.svg"
							alt="product-design"
							boxSize={"50px"}
						/>
						<Heading
							as="h2"
							_hover={{ color: " #EC1D24" }}
							cursor="pointer"
						>
							Mobile Application Development
						</Heading>
						<Text fontWeight="500" fontSize="large">
							{`Turn a raw idea into a product millions can’t live without`}
						</Text>
						<Text fontSize="large" fontWeight="300">
							{`Leave your mobile app development tasks to us because we’ve been 
							   in the business long enough to create immersive UIs for iOS and
							 Android devices.`}
						</Text>
						<Link
							href="/services-hikan-datalabs/mobile"
							colorScheme=" #EC1D24"
						>
							{`Learn more ->`}
						</Link>
					</Flex>
					<Flex
						mt={{ base: 12, md: "initial" }}
						data-aos="fade-up"
						data-aos-delay="200"
						wrap="wrap"
						gap="3"
						justify="center"
						width={{ base: "90%", md: "50%" }}
					>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							border="1px solid  #EC1D24"
							p="3"
							rounded="5"
						>
							<TbBrandFirebase fontSize="60px" color=" #EC1D24" />
							<Text my="3">Firebase</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<TbBrandReactNative
								fontSize="60px"
								color=" #EC1D24"
							/>
							<Text>React Native</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<TbBrandFlutter fontSize="40px" color=" #EC1D24" />
							<Text>Flutter</Text>
						</Flex>
					</Flex>
				</Flex>

				<Flex
					justify="space-between"
					align="center"
					textAlign="start"
					p={{ base: 1, md: 6 }}
					my={{ base: 3, md: "10" }}
					data-aos="fade-up"
					direction={{ base: "column", md: "row" }}
				>
					<Flex
						data-aos="fade-up"
						data-aos-delay="200"
						wrap="wrap"
						gap="3"
						justify="flex-start"
						width={{ base: "90%", md: "50%" }}
					>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							border="1px solid  #EC1D24"
							p="3"
							rounded="5"
						>
							<FaNode fontSize="60px" color=" #EC1D24" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<FaReact fontSize="60px" color=" #EC1D24" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<FaPython fontSize="60px" color=" #EC1D24" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<SiJavascript fontSize="60px" color=" #EC1D24" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<SiMysql fontSize="60px" color=" #EC1D24" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width={{ base: "30%", md: "25%" }}
							rounded="5"
							border="1px solid  #EC1D24"
							p="3"
						>
							<FaWordpress fontSize="40px" color=" #EC1D24" />
						</Flex>
					</Flex>
					<Flex
						data-aos="fade-up"
						data-aos-delay="150"
						direction="column"
						width={{ base: "90%", md: "50%" }}
						gap="5"
						id="agile"
						mt={{ base: 12, md: "initial" }}
					>
						<Image
							src="/agile-development.svg"
							alt="agile-development"
							boxSize={"50px"}
						/>
						<Heading
							as="h2"
							_hover={{ color: " #EC1D24" }}
							cursor="pointer"
						>
							Agile Development Teams on Demand
						</Heading>
						<Text fontWeight="500" fontSize="large">
							{`Fill the talent gap for your custom software projects 
							    in a few weeks.`}
						</Text>
						<Text fontSize="large" fontWeight="300">
							{`With access to over 20+ proactive and social
							professionals, you can form a durable development
							team with frontend, backend, mobile or cloud services that
							can assist you for years.`}
						</Text>

						<Text fontSize="large" fontWeight="300">
							{`In their work, they follow multiple years of best custom
							software development practices we documented. You’ll
							be positively surprised with the very first sprint.`}
						</Text>
						<Link href="#" colorScheme=" #EC1D24">
							{`Learn more ->`}
						</Link>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				gap="5"
				p={{ base: 6, md: "12" }}
				width={{ base: "90%", md: "80%" }}
				rounded="14"
				bg="#f5f5f5"
				margin="auto"
				my="10"
				align="center"
				justify="center"
				minH="50vh"
				data-aos="fade-up"
				direction={{ base: "column", md: "row" }}
			>
				<Flex flexDir="column" gap="5">
					<Heading>{`“Stakeholders are extremely pleased“`}</Heading>
					<Text>
						{`That’s what Percent’s Division head thinks about our 2
						years of work. Need a development partner? Let’s have a
						free and confidential chat.`}
					</Text>
				</Flex>
				<Flex gap="5">
					<CustomButton
						rounded="20px"
						link={true}
						linkProps={{
							name: "Book free consultation",
							path: "/contact-hikan-datalabs",
						}}
						text="Book free consultation"
					/>
				</Flex>
			</Flex>
			<Flex
				width="100%"
				p={{ base: 0, md: "20" }}
				gap={{ base: 4, md: "15" }}
				height={{ base: "fit-content", md: "90vh" }}
				overflow="hidden"
				data-aos="fade-up"
			>
				<Image
					src="/people.jpg"
					width="750px"
					display={{ base: "none", md: "block" }}
					alt="teams"
					data-aos="fade-up"
					data-aos-delay="200"
				/>
				<Box p={{ base: "5", md: "10" }}>
					<Heading
						as="h2"
						data-aos="fade-up"
						data-aos-delay="20"
						fontSize={{ base: "x-large", md: "xxx-large" }}
						mb="5"
					>
						What We Do
					</Heading>
					<Text data-aos="fade-up" data-aos-delay="250">
						Product form and functionality alone are not enough to
						compete in an extremely competitive market. To stand
						out, we design smart, simple, and human-centric products
						based on user insight that connect with people on a
						deeper level.
					</Text>
				</Box>
			</Flex>
			<Flex
				data-aos="fade-up"
				wrap="wrap"
				p="6"
				my="10"
				align="center"
				justify="center"
				bg="#f5f5f9 "
			>
				<ServiceCard
					bg="#fff"
					color="#000"
					icon={<TbBrandTeams fontSize="4rem" />}
					heading="Dedicated Teams"
					text="We help you set up an agile team of developers, strategists & project manager around expertise you’re looking for. You’ll have full control over the extent of involvement of the team."
				/>
				<ServiceCard
					bg="#fff"
					color="#000"
					icon={<MdOutlineEngineering fontSize="4rem" />}
					heading="Remote Developers"
					text="We provide dedicated developers to those who prefer direct engagement without any management layers. They work exclusively for you, in any project you wish them to be in."
				/>
				<ServiceCard
					bg="#fff"
					color="#000"
					icon={<SiNginxproxymanager fontSize="4rem" />}
					heading="Managed Projects"
					text="Our managed projects model allows you to get your projects fully handled by our team selected by you. Share your requirements & get started now!"
				/>
			</Flex>

			{/* Approach */}
			<Box p={{ base: 2, md: "12" }} py={{ base: 0, md: "4" }}>
				<Heading
					p={{ base: 2, md: "12" }}
					py={{ base: 0, md: "4" }}
					as="h2"
					fontSize={{ base: "x-large", md: "xxx-large" }}
					pb="0"
					data-aos="fade-up"
				>
					Hikan Datalabs Client Approach
				</Heading>
				<Flex
					data-aos="fade-up"
					data-aos-delay="200"
					justifyContent="space-between"
					align="flex-start"
					p={{ base: 2, md: "12" }}
					my="3"
					gap={{ base: "3", md: "2" }}
					direction={{ base: "column", md: "row" }}
				>
					<Box width={{ base: "100%", md: "10%" }}>
						<Text>01</Text>
					</Box>
					<Box width={{ base: "100%", md: "20%" }}>
						<Text fontWeight="500" fontSize="x-large">
							Transparency <br /> Partnership
						</Text>
					</Box>
					<Text
						width={{ base: "100%", md: "60%" }}
						fontSize="large"
						fontWeight="300"
					>
						Our communication and intentions are honest, and we
						expect the same from your side. We are here to warn you
						about possible risks and challenges, and we expect the
						same from your side regarding any changes that might
						occur on the journey.
					</Text>
				</Flex>
				<Divider />
				<Flex
					data-aos="fade-up"
					justifyContent="space-between"
					align="flex-start"
					p={{ base: 2, md: "12" }}
					my="3"
					gap={{ base: "3", md: "2" }}
					direction={{ base: "column", md: "row" }}
				>
					<Box width={{ base: "100%", md: "10%" }}>
						<Text>02</Text>
					</Box>
					<Box width={{ base: "100%", md: "20%" }}>
						<Text fontWeight="500" fontSize="x-large">
							Digging Deeper
						</Text>
					</Box>
					<Text
						width={{ base: "100%", md: "60%" }}
						fontSize="large"
						fontWeight="300"
					>
						Our unique culture of creativity and collaboration
						drives innovative and better results for our clients.
						Having extensive experience across multiple industries,
						markets and always putting users first, we hold
						ourselves accountable for the solutions we put on the
						market.
					</Text>
				</Flex>
				<Divider />
				<Flex
					data-aos="fade-up"
					justifyContent="space-between"
					align="flex-start"
					p={{ base: 2, md: "12" }}
					my="3"
					gap={{ base: "3", md: "2" }}
					direction={{ base: "column", md: "row" }}
				>
					<Box width={{ base: "100%", md: "10%" }}>
						<Text>03</Text>
					</Box>
					<Box width={{ base: "100%", md: "20%" }}>
						<Text fontWeight="500" fontSize="x-large">
							Tailored Approach
						</Text>
					</Box>
					<Text
						width={{ base: "100%", md: "60%" }}
						fontSize="large"
						fontWeight="300"
					>
						Every project is unique and requires a tailored-made
						approach that acknowledges customer and market problems
						and needs.
					</Text>
				</Flex>
			</Box>

			{/* <Flex
				align="start"
				justify="space-between"
				p={{ base: 4, md: "24" }}
				gap="10"
				mt={{ base: 2, md: "5" }}
				direction={{ base: "column" }}
				data-aos="fade-up"
			>
				<Team />
			</Flex> */}
			{/* Why partner with us */}
			<Flex
				align="start"
				justify="space-between"
				p={{ base: 4, md: "24" }}
				gap="10"
				wrap="wrap"
				mt={{ base: 2, md: "5" }}
				direction={{ base: "column" }}
				data-aos="fade-up"
			>
				<Heading
					width="100%"
					data-aos="fade-up"
					as="h2"
					fontSize={{ base: "x-large", md: "xxx-large" }}
					alignSelf="flex-start"
					my="5"
					textAlign="start"
				>
					Why parter with Hikan Datalabs ?
				</Heading>
				<Flex wrap="wrap" gap="10" data-aos="fade-up">
					<CoreValueCard
						heading="Pixel-perfect designs"
						text={`We’re quality-oriented with great attention to detail and design accuracy.`}
					/>
					<CoreValueCard
						heading="Crystal clear processes"
						text={`We’re like an open book, not ashamed to show how we’re doing IT`}
					/>
					<CoreValueCard
						heading="On-point and fast communication"
						text={`Our teams are always in the loop of their projects, ready to keep the fast and on-point conversations.`}
					/>
					<CoreValueCard
						heading="Fully adjusted to operate internationally"
						text={`We can easily align communication within different time zones.`}
					/>
					<CoreValueCard
						heading="Flexible cooperation"
						text={`We’re adjustable to individual needs. Hitting your budget, deadlines, and overall business goals.`}
					/>
					<CoreValueCard
						heading="Dedication to innovation"
						text={`We make sure no industry update will go unnoticed past our experts, so you get a cutting-edge, personalized solution.`}
					/>
				</Flex>
			</Flex>
		</Layout>
	);
}
