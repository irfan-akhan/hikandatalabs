import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import { useEffect } from "react";
const customeTheme = extendTheme({
	fonts: {
		heading: "Rubik",
		body: "Rubik",
	},
});
export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			offset: 120, // offset (in px) from the original trigger point
			delay: 10, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		});
	}, []);
	return (
		<ChakraProvider theme={customeTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
