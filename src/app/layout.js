import NavBar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter, Prompt } from 'next/font/google';
import Footer from '@/components/footer/Footer';

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Shop | Monogrim Consoles and Modules',
  description: 'A modular, freeform control surface for a better way to create',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${prompt.className} `}>
        <div className='container'>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
