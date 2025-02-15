import React, { ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
    return (
        <Box
            as="button"
            onClick={onClick}
            bg="yellow.400"
            color="black"
            p={3}
            borderRadius="sm"
            width="100%"
            _hover={{
                bg: 'yellow.500',
            }}
            _active={{
                bg: 'yellow.500',
            }}
            transition="background 0.2s ease"
            {...props}
        >
            <Text fontSize="lg" fontWeight="bold">
                {children}
            </Text>
        </Box>
    );
};

export default Button;
