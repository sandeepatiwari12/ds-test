import React from "react";
import { Flex, Text, Link, Card, Box } from "rebass";

function Header() {
  return (
    <Card py={0} variant='navBar' px={30}>
        <Flex
          flexWrap={["wrap", "wrap", "nowrap"]}
          alignItems='center'
          height={60}>
          <Text p={2} fontWeight='bold'>
            <Link href='#' className='logo'>
              {'DisplaySweet'}
            </Link>
          </Text>
          <Box mx='auto' />
          <Text p={2} >
            <Link href='#'>
              {'Home'}
            </Link>
          </Text>
          <Text p={2} >
            <Link href='#'>
              {'About'}
            </Link>
          </Text>
          <Text p={2} >
            <Link href='#'>
              {'Contact'}
            </Link>
          </Text>
          <Text p={2} >
            <Link href='#'>
              {'Services'}
            </Link>
          </Text>
        </Flex>
    </Card>
  );
}

export default Header;
