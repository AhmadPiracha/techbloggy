"use client"
import App from "./App";
import {NextUIProvider} from "@nextui-org/react";



export default function Home() {
  return (
   <NextUIProvider>
    <App/>
    </NextUIProvider> 
   
  )
}
