// Source: https://codesandbox.io/s/chakra-ui-gtwix?file=/src/useApp.tsx:40-278
import * as React from "react";
import {
    ChakraProvider,
    Stack,
    FormControl,
    FormLabel,
    Button,
    Grid,
    Center,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Heading,
    Link,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Paginated } from "@makotot/paginated";

const useApp = () => {
    const [currentPage, updateCurrentPage] = React.useState(1);
    const [totalPage, updateTotalPage] = React.useState(10);

    return {
        currentPage,
        updateCurrentPage,
        totalPage,
        updateTotalPage,
    };
};

export default function App() {
    const { currentPage, totalPage, updateCurrentPage, updateTotalPage } =
        useApp();
    return (
        <div
            style={{
                position: "fixed",
                width: "100vw",
                bottom: 0,
                boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                background: "white",
            }}
        >
            <ChakraProvider>
                <Stack p={2} spacing={4}>
                    <Paginated
                        currentPage={currentPage}
                        totalPage={totalPage}
                        siblingsSize={1}
                        boundarySize={1}
                    >
                        {({
                            pages,
                            currentPage,
                            hasPrev,
                            hasNext,
                            getFirstBoundary,
                            getLastBoundary,
                            isPrevTruncated,
                            isNextTruncated,
                        }) => (
                            <Grid
                                width="100%"
                                justifyContent="center"
                                alignItems="center"
                                gridTemplateColumns="min-content 1fr min-content"
                                gridGap={2}
                            >
                                <Stack direction="row">
                                    {hasPrev() && (
                                        <Button
                                            leftIcon={<ChevronLeftIcon />}
                                            colorScheme="blue"
                                            onClick={() =>
                                                updateCurrentPage(
                                                    currentPage - 1
                                                )
                                            }
                                        >
                                            Prev
                                        </Button>
                                    )}
                                </Stack>
                                <Center>
                                    <Stack direction="row">
                                        {getFirstBoundary().map((boundary) => (
                                            <Button
                                                key={boundary}
                                                colorScheme="blue"
                                                variant="outline"
                                                onClick={() =>
                                                    updateCurrentPage(boundary)
                                                }
                                            >
                                                {boundary}
                                            </Button>
                                        ))}
                                        {isPrevTruncated && <span>...</span>}
                                        {pages.map((page) => {
                                            return page === currentPage ? (
                                                <Button
                                                    key={page}
                                                    colorScheme="blue"
                                                    variant="solid"
                                                >
                                                    {page}
                                                </Button>
                                            ) : (
                                                <Button
                                                    key={page}
                                                    colorScheme="blue"
                                                    variant="outline"
                                                    onClick={() =>
                                                        updateCurrentPage(page)
                                                    }
                                                >
                                                    {page}
                                                </Button>
                                            );
                                        })}

                                        {isNextTruncated && <span>...</span>}
                                        {getLastBoundary().map((boundary) => (
                                            <Button
                                                key={boundary}
                                                colorScheme="blue"
                                                variant="outline"
                                                onClick={() =>
                                                    updateCurrentPage(boundary)
                                                }
                                            >
                                                {boundary}
                                            </Button>
                                        ))}
                                    </Stack>
                                </Center>

                                <Stack direction="row">
                                    {hasNext() && (
                                        <Button
                                            rightIcon={<ChevronRightIcon />}
                                            colorScheme="blue"
                                            onClick={() =>
                                                updateCurrentPage(
                                                    currentPage + 1
                                                )
                                            }
                                        >
                                            Next
                                        </Button>
                                    )}
                                </Stack>
                            </Grid>
                        )}
                    </Paginated>
                </Stack>
            </ChakraProvider>
        </div>
    );
}
