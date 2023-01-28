import { Hero } from 'components/ui/Hero';
import { HeroButton } from 'components/ui/Hero';
import { HeroTitle, HeroSubtitle } from 'components/ui/Hero';
import Link from 'next/link';

export const HomepageHero = () => {
	return (
		<>
			<Hero>
				<HeroTitle>
					SharkPunks Collection
				</HeroTitle>
				<HeroSubtitle>
					SharkPunks is a collection of 5000 randomly generated
					SharkPunks. <br /> Each SharkPunk has a unique DNA and is
					individually generated and stored on the Ethereum blockchain.
				</HeroSubtitle>
				<HeroButton>
					<Link href={'/mint'}>
						Mint SharkPunks
					</Link>
				</HeroButton>
			</Hero>
		</>
	);
};