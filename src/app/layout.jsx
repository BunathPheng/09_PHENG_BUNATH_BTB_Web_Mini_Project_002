import { Toaster } from "react-hot-toast";
import "./globals.css";


export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default async function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.default}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
