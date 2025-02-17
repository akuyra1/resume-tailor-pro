import "./globals.css";


export const metadata = {
  title: "Resume-Tailor-Pro",
  description: "Tailor your resume and cover letter to land the job you want",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
