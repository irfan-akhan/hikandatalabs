import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTC from "./CTC";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<Box mt={{ base: "15vh" }}>{children}</Box>
			<CTC />
			<Footer />
		</>
	);
}
