import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Member reputations'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className='bg-dark'>
        {children}
      </body>
    </html>
  );
}
