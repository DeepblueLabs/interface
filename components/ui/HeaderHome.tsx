import { Logo } from '@/components/icons/Logo';
import { Container } from '@/components/ui/Container';

export const HomeNavbar = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b backdrop-blur-[12px] p-1">
      <Container className='flex mx-auto items-center justify-center'>
        <nav>
          <Logo />
        </nav>
      </Container>
    </header>
  );
};
