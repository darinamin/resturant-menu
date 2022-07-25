import Submenu from "@/components/views/Submenu";
import { Button } from "antd";
import Head from "next/head";
import Image from "next/image";

Home.layout = "main";
export default function Home() {
  return (
    <div>
      <Submenu />
    </div>
  );
}
