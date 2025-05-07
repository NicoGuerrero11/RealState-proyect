import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Button} from '@chakra-ui/react';
import Banner from '../Components/Banner';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>\
      <Banner purpose="For Sale"/>
      <Banner purpose="For Rent"/>
    </div>
  );
}
