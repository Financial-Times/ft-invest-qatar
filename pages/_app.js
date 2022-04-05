import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/Layout';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps, router }) {
	ReactGA.initialize('UA-93924635-35');

	useEffect(() => {
		TagManager.initialize({ gtmId: 'GTM-T66ZTL5' });
	}, []);

	useEffect(() => {
		ReactGA.pageview(document.location.href);
		router.events.on('routeChangeComplete', () => {
			ReactGA.pageview(document.location.href);
		});

		return () => {
			router.events.off('routeChangeComplete', ReactGA.pageview(router.asPath));
		};
	}, [router]);

	return (
		<Layout>
			<Component {...pageProps} key={router.route} />
		</Layout>
	);
}

export default MyApp;
