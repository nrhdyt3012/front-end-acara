import Image from "next/image";
import { Inter } from "next/font/google";
import {Button} from "@heroui/react";
import PageHead from "@/components/commons/PageHead";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
<PageHead title="BOLLEP"/> 
  <Button color="primary">Button</Button>;
  </main>
  );
}
