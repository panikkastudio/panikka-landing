"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge, Box, DataList, Flex, Grid, Text } from "@radix-ui/themes";

export default function LightItUp() {
    const progress = useMotionValue(0);
    const spring = useSpring(progress, { stiffness: 1000, damping: 50 });
    const boxShadow1 = useTransform(spring, [0, 1], ["0 0 0px 0px #FFFF", "0 0 8px 0px #FFFF"]);
    const boxShadow2 = useTransform(spring, [0, 1], ["0 0 0px 0px #FFFF, 0 0 0px 0px #FFFF", "0 0 8px 0px #FFFF, 0 0 32px 8px #FFFF"]);
    const boxShadow3 = useTransform( spring, [0, 1], ["0 0 0px 0px #FFFF, 0 0 0px 0px #FFFF, 0 0 0px 0px #FFFF", "0 0 8px 0px #FFFF, 0 0 32px 8px #FFFF, 0 0 128px 32px #FFFF"]); // prettier-ignore

    return (
        <div className="flex flex-col z-10 w-full max-w-screen-sm justify-between lg:flex space-y-8 p-4 mx-auto py-16">
            <Flex className="text-xs text-[--gray-10] justify-normal md:justify-between flex-col md:flex-row gap-12 md:gap-0">
                <Box className="space-y-6">
                    <motion.div
                        className="aspect-square bg-white rounded-lg z-10 w-[100px] h-[100px]"
                        onMouseEnter={() => progress.set(1)}
                        onMouseLeave={() => progress.set(0)}
                    />
                    <Box className="font-mono">
                        <Text className="title border-b border-[--gray-12] text-[--gray-12] w-full pb-2 mb-2 block">Rectangle</Text>

                        <Flex align="center" justify="between">
                            <Text>Height</Text>
                            <Text>100</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Width</Text>
                            <Text>100</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Radius</Text>
                            <Text>8</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Stroke</Text>
                            <Text>None</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Color</Text>
                            <Text>#FFFF</Text>
                        </Flex>
                    </Box>
                </Box>

                <Box className="space-y-6">
                    <motion.div
                        style={{ boxShadow: boxShadow1 }}
                        className="aspect-square bg-white rounded-lg  z-10 w-[100px] h-[100px]"
                        onMouseEnter={() => progress.set(1)}
                        onMouseLeave={() => progress.set(0)}
                    />
                    <Box className="font-mono">
                        <Text className="title border-b border-[--gray-12] text-[--gray-12] w-full pb-2 mb-2 block">Shadow 1</Text>
                        <Flex align="center" justify="between">
                            <Text>X</Text>
                            <Text>0</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Y</Text>
                            <Text>0</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Blur</Text>
                            <Text>8</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Spread</Text>
                            <Text>0</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Color</Text>
                            <Text>#FFFF</Text>
                        </Flex>
                    </Box>
                </Box>

                <Box className="space-y-6">
                    <motion.div
                        style={{ boxShadow: boxShadow2 }}
                        className="aspect-square bg-white rounded-lg z-10 w-[100px] h-[100px]"
                        onMouseEnter={() => progress.set(1)}
                        onMouseLeave={() => progress.set(0)}
                    />
                    <Box className="font-mono">
                        <Text className="title border-b border-[--gray-12] text-[--gray-12] w-full pb-2 mb-2 block">Shadow 2</Text>

                        <Flex align="center" justify="between">
                            <Text>X</Text>
                            <Text>0</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Y</Text>
                            <Text>0</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Blur</Text>
                            <Text>32</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Spread</Text>
                            <Text>8</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Color</Text>
                            <Text>#FFFF</Text>
                        </Flex>
                    </Box>
                </Box>

                <Box className="space-y-6">
                    <motion.div
                        style={{ boxShadow: boxShadow3 }}
                        className="aspect-square bg-white rounded-lg w-[100px] h-[100px]"
                        onMouseEnter={() => progress.set(1)}
                        onMouseLeave={() => progress.set(0)}
                        onClick={() => (spring.get() > 0 ? progress.set(0) : progress.set(1))}
                    />

                    <Box className="font-mono">
                        <Text className="title border-b border-[--gray-12] text-[--gray-12] w-full pb-2 mb-2 block">Shadow 3</Text>

                        <Flex align="center" justify="between">
                            <Text>X</Text>
                            <Text>0</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Y</Text>
                            <Text>0</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Blur</Text>
                            <Text>128</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Spread</Text>
                            <Text>32</Text>
                        </Flex>

                        <Flex align="center" justify="between">
                            <Text>Color</Text>
                            <Text>#FFFF</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>

            <Box>
                <a
                    target="_blank"
                    href="https://x.com/JoshGuoDesign/status/1817106127538258083"
                    className="text-xs text-[--gray-11] text-center px-4 py-1 bg-[--gray-2] rounded-full border border-[--gray-5] hover:bg-[--gray-3] hover:border-[--gray-6] cursor-pointer"
                >
                    Credit: @JoshGuoDesign
                </a>
            </Box>
        </div>
    );
}
