import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {HeroUIProvider} from '@heroui/react'
import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function App({ Component, pageProps }: AppProps) {
  return( <HeroUIProvider>
    <main className={cn(inter.className,
      "flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10 lg:py")}>
<Component {...pageProps}/>
    </main>
    </HeroUIProvider>
    )
};
