import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg={"blue.300"} p={4}>
      <Flex justifyContent={"space-between"} fontSize={20}>
        <Link to="/">My Store</Link>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </Flex>
    </Box>
  );
}

export default Navbar