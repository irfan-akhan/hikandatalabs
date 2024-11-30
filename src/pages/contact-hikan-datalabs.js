import Layout from "@/components/Layout";
import SalesContactCard from "@/components/SalesContactCard";
import {
	Box,
	Flex,
	Image,
	Heading,
	Text,
	VStack,
	FormControl,
	InputGroup,
	InputLeftElement,
	Input,
	Button,
	Textarea,
	FormLabel,
	Checkbox,
	CheckboxGroup,
	Stack,
} from "@chakra-ui/react";
import { BsPerson, BsLink } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useRef, useState } from "react";

export default function ContactUs() {
	const fNameRef = useRef(null);
	const lNameRef = useRef(null);
	const emailRef = useRef(null);
	const messageRef = useRef(null);
	const businessEmailRef = useRef(null);
	const [emailError, setEmailError] = useState(false);
	const [alertState, setAlertState] = useState(false);

	function onSubmitHandler(e) {
		e.preventDefault();
		const data = {
			lastName: lNameRef.current.value,
			firstName: fNameRef.current.value,
			email: emailRef.current.value,
			businessEmail: businessEmailRef.current.value,
			message: messageRef.current.value,
		};
		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.status === 200) {
					setAlertState(true);
					setInterval(() => {
						setAlertState(false);
					}, 5000);
					emailRef.current.value = "";
					lNameRef.current.value = "";
					fNameRef.current.value = "";
					businessEmailRef.current.value = "";
					messageRef.current.value = "";
				} else {
					setEmailError(true);
					setAlertState(true);
					setInterval(() => {
						setEmailError(false);
						setAlertState(false);
					}, 5000);
				}
			})
			.catch((err) => {
				setEmailError(true);
				console.log("err email", err);
				setAlertState(true);
				setInterval(() => {
					setEmailError(false);
					setAlertState(false);
				}, 5000);
			});
	}
	return (
		<Layout>
			<Flex
				p={{ base: 4, md: "16" }}
				mb={{ base: 12 }}
				align="flex-start"
				justify="space-between"
				height={{ base: "fit-content", md: "90vh" }}
				overflow="hidden"
				direction={{ base: "column", md: "row" }}
			>
				<Box
					minW={{ base: "100%", md: "60%" }}
					p={{ base: 4, md: "16" }}
				>
					<Heading
						data-aos="fade-up"
						textTransform="uppercase"
						as="h1"
						fontSize={{ base: "x-large", md: "4rem" }}
					>
						Get in touch
					</Heading>
					<Text
						data-aos="fade-up"
						mb={{ base: 5, md: 12 }}
						fontWeight="300"
						fontSize={{ base: "large" }}
					>
						*We would love to hear from you
					</Text>
					<Text
						data-aos="fade-up"
						fontWeight="300"
						fontSize={{ base: "large", md: "x-large" }}
					>
						{`Let’s get the ball rolling! Please fill in the form below so we can
					learn more about you and your project or just schedule a
					call.`}
					</Text>
				</Box>
				<Box
					display={{ base: "none", md: "block" }}
					data-aos="fade-left"
				>
					<Image
						clipPath="polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
						src="/srinagar.jpg"
						alt="srinagar office"
					/>
				</Box>
			</Flex>

			<Flex p={{ base: 4, md: "16" }} align="center" data-aos="fade-up">
				<Box p={{ base: 6, md: "16" }} border="2px solid #000" w="100%">
					<form action="">
						<VStack spacing={10} align="start">
							<Flex
								minW="100%"
								gap="10"
								direction={{ base: "column", md: "row" }}
							>
								<Flex
									width={{ base: "100%", md: "60%" }}
									flexDirection="column"
									gap="10"
									data-aos="fade-up"
								>
									<FormControl data-aos="fade-up" isRequired>
										<FormLabel>First Name</FormLabel>

										<InputGroup>
											<InputLeftElement>
												<BsPerson />
											</InputLeftElement>
											<Input
												borderColor={"#000"}
												borderRadius={0}
												focusBorderColor="#000"
												type="text"
												name="firstName"
												ref={fNameRef}
												placeholder="Your First Name"
											/>
										</InputGroup>
									</FormControl>
									<FormControl data-aos="fade-up" isRequired>
										<FormLabel>Last Name</FormLabel>

										<InputGroup>
											<InputLeftElement>
												<BsPerson />
											</InputLeftElement>
											<Input
												borderColor={"#000"}
												borderRadius={0}
												focusBorderColor="#000"
												type="text"
												name="lastName"
												ref={lNameRef}
												placeholder="Your Last Name"
											/>
										</InputGroup>
									</FormControl>

									<FormControl data-aos="fade-up" isRequired>
										<FormLabel>Email Address</FormLabel>
										<InputGroup>
											<InputLeftElement>
												<MdOutlineEmail />
											</InputLeftElement>
											<Input
												borderColor={"#000"}
												borderRadius={0}
												focusBorderColor="#000"
												type="email"
												ref={emailRef}
												name="email"
												placeholder="Your Email address"
											/>
										</InputGroup>
									</FormControl>
									<FormControl data-aos="fade-up">
										<FormLabel>Business Url</FormLabel>
										<InputGroup>
											<InputLeftElement>
												<BsLink />
											</InputLeftElement>
											<Input
												borderColor={"#000"}
												borderRadius={0}
												focusBorderColor="#000"
												type="text"
												name="website"
												ref={businessEmailRef}
												placeholder="Your website/social link"
											/>
										</InputGroup>
									</FormControl>
								</Flex>
								<Flex
									direction="column"
									align="flex-start"
									p={{ base: 1, md: "5" }}
								>
									<FormControl isRequired>
										<FormLabel data-aos="fade-up">
											What are you interested in?
										</FormLabel>
										<CheckboxGroup
											data-aos="fade-up"
											colorScheme="red"
											defaultValue={[
												"Web_Development",
												"UX_UI",
											]}
										>
											<Stack
												data-aos="fade-up"
												textAlign="start"
												spacing={[1, 3]}
												direction={["column"]}
											>
												<Checkbox
													textAlign="start"
													value="App_Development"
												>
													App Development
												</Checkbox>
												<Checkbox
													textAlign="start"
													value="Web_Development"
												>
													Web Development
												</Checkbox>
												<Checkbox value="UX_UI">
													UX & UI Design
												</Checkbox>
												<Checkbox value="Team_Scaling">
													Team Scaling
												</Checkbox>
												<Checkbox value="Strategic_Support">
													Strategic Support
												</Checkbox>
												<Checkbox value="Other">
													Other
												</Checkbox>
											</Stack>
										</CheckboxGroup>
									</FormControl>
								</Flex>
							</Flex>
							<FormControl isRequired data-aos="fade-up">
								<FormLabel>
									Tell us more about your project
								</FormLabel>

								<Textarea
									data-aos="fade-up"
									focusBorderColor="#000"
									name="message"
									borderColor={"#000"}
									borderRadius={0}
									placeholder="Project Details/Query"
									rows={6}
									ref={messageRef}
								/>
							</FormControl>
						</VStack>
						<Text data-aos="fade-up" my="10" alignSelf="flex-start">
							{`Let's get started! Please fill in the form below so
							we can learn more about you and your project or just
							schedule a call.`}
						</Text>
						<Button
							borderRadius="0"
							variant="outline"
							borderColor="#000"
							fontWeight="500"
							fontSize="medium"
							transform="all 1s ease-in"
							boxShadow="5px 5px 0px 0px #EC1D24"
							_hover={{
								bg: "#fff",
								color: "#000",
								transform: "all 1s ease-in",
								boxShadow: "3px 2px 0px 0px   #EC1D24",
							}}
							onClick={onSubmitHandler}
							padding="5"
							px="10"
							data-aos="fade-up"
							color="#000"
							data-aos-delay="0"
							type="submit"
						>
							{`Send ->`}
						</Button>
					</form>
				</Box>
			</Flex>
			<Flex
				my={{ base: 12, md: "initial" }}
				data-aos="fade-up"
				p={{ base: 4, md: "16" }}
				align="center"
				direction={{ base: "column", md: "row" }}
			>
				<Box
					mWidth={{ base: "100%", md: "60%" }}
					p={{ base: 0, md: "16" }}
				>
					<Text
						mb="8"
						data-aos="fade-up"
						fontWeight="300"
						fontSize={{ base: "large", md: "x-large" }}
					>
						Stop by for coffee and snacks at
					</Text>
					<Heading
						as="h2"
						mb="4"
						data-aos="fade-up"
						fontSize={{ base: "x-large", md: "xxx-large" }}
					>
						Our <br /> Headquarters
					</Heading>
					<Flex
						gap={{ base: 2, md: 5 }}
						my={{ base: 5, md: 12 }}
						data-aos="fade-up"
					>
						<Box maxWidth="50%">
							<Heading
								data-aos="fade-up"
								as="h2"
								mb="4"
								fontWeight="400"
								fontSize={{ base: "large", md: "x-large" }}
							>
								Japan HQ
							</Heading>
							<Text data-aos="fade-up" fontWeight="300">
								9813602, Miyagi ken kurokawa district, Ohira
							</Text>
						</Box>
						<Box maxWidth="50%">
							<Heading
								as="h2"
								mb="4"
								data-aos="fade-up"
								fontWeight="400"
								fontSize={{ base: "large", md: "x-large" }}
							>
								Srinagar HQ
							</Heading>
							<Text data-aos="fade-up" fontWeight="300">
								190010, Karan Nagar
							</Text>
						</Box>
					</Flex>
				</Box>
				<Flex
					overflow="hidden"
					width={{ base: "100%", md: "50%" }}
					gap={{ base: 5, md: "10" }}
					align="center"
				>
					<Image
						data-aos="fade-up"
						src="/japan.jpg"
						width="45%"
						border="1px solid #000"
						p="1"
						alt="office"
						transform="all 1s ease-in"
						boxShadow="5px 5px 0px 0px  #030303"
					/>
					<Image
						data-aos="fade-up"
						src="/srinagar.jpg"
						width="45%"
						border="1px solid #000"
						p="1"
						alt="office"
						boxShadow="5px 5px 0px 0px  #030303"
					/>
				</Flex>
			</Flex>
			<Flex
				align="center"
				justify="space-around"
				p={{ base: 4, md: "16" }}
				bg="#f9f9f9"
				gap="5"
				data-aos="fade-up"
				direction={{ base: "column" }}
			>
				<Text
					data-aos="fade-up"
					fontWeight="400"
					textTransform="capitalize"
					fontSize={{ base: "large", md: "xx-large" }}
				>
					Feel free to contact us.
				</Text>
				<Text
					data-aos="fade-up"
					fontWeight="300"
					fontSize={{ base: "large", md: "large" }}
				>
					Need further assistance or have additional questions, send
					us an email.
				</Text>
				<Flex gap="30" direction={{ base: "column", md: "initial" }}>
					<SalesContactCard
						email="sales@hikandatalabs.com"
						heading="CX/Sales"
						imageUrl="/contact.jpg"
						subText="Sales Team"
					/>
					{/* <SalesContactCard
						heading={"Hakim Qayid"}
						subText="Co Founder"
						email="@hikandatalabs.com"
						imageUrl="/rakib.jpg"
					/> */}
				</Flex>
			</Flex>
		</Layout>
	);
}
