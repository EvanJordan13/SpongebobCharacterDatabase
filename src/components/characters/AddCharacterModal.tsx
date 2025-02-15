import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    FormControl,
    FormErrorMessage,
    useDisclosure,
    Stack,
    Center,
} from '@chakra-ui/react'
import { useState } from 'react';
import { CreateCharacterInput } from '../../types/character';
import Button from '../ui/Button';

const AddCharacterModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [character, setCharacter] = useState<CreateCharacterInput>({
        name: '',
        species: '',
        occupation: '',
        residence: '',
        imageUrl: '',
        wikiUrl: '',
    });

    const [isValidName, setIsValidName] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCharacter({
            ...character,
            [name]: value
        });
    };

    const clearForm = () => {
        setCharacter({
            name: '',
            species: '',
            occupation: '',
            residence: '',
            imageUrl: '',
            wikiUrl: '',
        });
        setIsValidName(true);
    }

    const handleSubmit = () => {
        if (!character.name) {
            setIsValidName(false);
            return;
        }

        console.log(character);

        clearForm();
    };

    const handleClose = () => {
        onClose();
        clearForm();
    }

    return (
        <>
            <Center width={"150px"}>
                <Button onClick={onOpen} zIndex={100}>Add Character</Button>
            </Center >

            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent bg="black" color="white">
                    <ModalHeader fontSize="3xl">Add a Character</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isInvalid={!isValidName} mb={4}>
                            <Input
                                name="name"
                                placeholder="Name"
                                value={character.name}
                                onChange={handleChange}
                                isRequired
                                bg="gray.700"
                                color="white"
                                border="none"
                                borderRadius="2px"
                                _focus={{
                                    borderColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            />
                            {!isValidName && <FormErrorMessage>Name is required.</FormErrorMessage>}
                        </FormControl>

                        <FormControl mb={4}>
                            <Input
                                name="species"
                                placeholder="Species"
                                value={character.species}
                                onChange={handleChange}
                                isRequired
                                bg="gray.700"
                                color="white"
                                border="none"
                                borderRadius="2px"
                                _focus={{
                                    borderColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            />
                        </FormControl>

                        <Stack direction="row" spacing={4}>
                            <FormControl mb={4}>
                                <Input
                                    name="occupation"
                                    placeholder="Occupation"
                                    value={character.occupation}
                                    onChange={handleChange}
                                    isRequired
                                    bg="gray.700"
                                    color="white"
                                    border="none"
                                    borderRadius="2px"
                                    _focus={{
                                        borderColor: 'transparent',
                                        boxShadow: 'none',
                                    }}
                                />
                            </FormControl>

                            <FormControl mb={4}>
                                <Input
                                    name="residence"
                                    placeholder="Residence"
                                    value={character.residence}
                                    onChange={handleChange}
                                    isRequired
                                    bg="gray.700"
                                    color="white"
                                    border="none"
                                    borderRadius="2px"
                                    _focus={{
                                        borderColor: 'transparent',
                                        boxShadow: 'none',
                                    }}
                                />
                            </FormControl>
                        </Stack>

                        <FormControl mb={4}>
                            <Input
                                name="wikiUrl"
                                placeholder="Wiki URL"
                                value={character.wikiUrl}
                                onChange={handleChange}
                                isRequired
                                bg="gray.700"
                                color="white"
                                border="none"
                                borderRadius="2px"
                                _focus={{
                                    borderColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            />
                        </FormControl>

                        <FormControl mb={4}>
                            <Input
                                name="imageUrl"
                                placeholder="Image URL"
                                value={character.imageUrl}
                                onChange={handleChange}
                                isRequired
                                bg="gray.700"
                                color="white"
                                border="none"
                                borderRadius="2px"
                                _focus={{
                                    borderColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' onClick={handleSubmit}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddCharacterModal;
