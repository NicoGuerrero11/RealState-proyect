import {Flex, Box, Text, Button} from '@chakra-ui/react';
import React from 'react';

const Banner = ({purpose}) => {
    return (
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
            {purpose}
        </Flex>
    );
};

export default Banner;