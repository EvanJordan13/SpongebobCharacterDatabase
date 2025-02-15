import React, { ReactNode } from 'react'; // Import ReactNode for children typing
import { Box, Text } from '@chakra-ui/react';

// Define the type for Button props
interface ButtonProps {
    children: ReactNode; // Typing the 'children' prop
    onClick: () => void; // Ensure onClick is typed as a function that returns void
    [key: string]: any; // This allows for any other props that may be passed down
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
    return (
        <Box
            as="button" // We set the Box to behave like a button
            onClick={onClick}
            bg="yellow.400"
            color="black"
            p={3}
            borderRadius="sm"
            width="100%" // Set width to 100% of the parent container
            _hover={{
                bg: 'yellow.500',
            }}
            _active={{
                bg: 'yellow.500',
            }}
            // _focus={{
            //     boxShadow: 'outline',
            // }}
            transition="background 0.2s ease"
            {...props} // This allows for additional props to be passed to Box
        >
            <Text fontSize="lg" fontWeight="bold">
                {children}
            </Text>
        </Box>
    );
};

export default Button;
