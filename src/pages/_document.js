import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One:ital@0;1&family=Montserrat:wght@200&family=Roboto:ital,wght@0,100;0,300;1,100&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:wght@300&display=swap"
					rel="stylesheet"
					crossOrigin="true"
				/>
				<Script
					src="/scripts/lang-config.js"
					strategy="beforeInteractive"
				/>
				<Script
					src="/scripts/translation.js"
					strategy="beforeInteractive"
				/>
				<Script
					src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
					strategy="afterInteractive"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
