import {Header, Footer} from '@/components/layout'
export default function ContentRootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
