"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge, Box, DataList, Flex, Grid, Text } from "@radix-ui/themes";
import { useState } from "react";

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
                    <InfoBox
                        title="Rectangle"
                        properties={[
                            { title: "Height", value: "100" },
                            { title: "Width", value: "100" },
                            { title: "Radius", value: "8" },
                            { title: "Stroke", value: "None" },
                            { title: "Color", value: "#FFFF" },
                        ]}
                    />
                </Box>

                <Box className="space-y-6">
                    <motion.div
                        style={{ boxShadow: boxShadow1 }}
                        className="aspect-square bg-white rounded-lg  z-10 w-[100px] h-[100px]"
                        onMouseEnter={() => progress.set(1)}
                        onMouseLeave={() => progress.set(0)}
                    />
                    <InfoBox
                        title="Shadow 1"
                        properties={[
                            { title: "X", value: "0" },
                            { title: "Y", value: "0" },
                            { title: "Blur", value: "8" },
                            { title: "Spread", value: "0" },
                            { title: "Color", value: "#FFFF" },
                        ]}
                    />
                </Box>

                <Box className="space-y-6">
                    <motion.div
                        style={{ boxShadow: boxShadow2 }}
                        className="aspect-square bg-white rounded-lg z-10 w-[100px] h-[100px]"
                        onMouseEnter={() => progress.set(1)}
                        onMouseLeave={() => progress.set(0)}
                    />
                    <InfoBox
                        title="Shadow 2"
                        properties={[
                            { title: "X", value: "0" },
                            { title: "Y", value: "0" },
                            { title: "Blur", value: "32" },
                            { title: "Spread", value: "8" },
                            { title: "Color", value: "#FFFF" },
                        ]}
                    />
                </Box>

                <Box className="space-y-6">
                    <motion.div
                        style={{ boxShadow: boxShadow3 }}
                        className="aspect-square bg-white rounded-lg w-[100px] h-[100px]"
                        onMouseEnter={() => progress.set(1)}
                        onMouseLeave={() => progress.set(0)}
                        onClick={() => (spring.get() > 0 ? progress.set(0) : progress.set(1))}
                    />

                    <InfoBox
                        title="Shadow 3"
                        properties={[
                            { title: "X", value: "0" },
                            { title: "Y", value: "0" },
                            { title: "Blur", value: "128" },
                            { title: "Spread", value: "32" },
                            { title: "Color", value: "#FFFF" },
                        ]}
                    />
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

function InfoBox({ title, properties }: { title: string; properties: { title: string; value: string }[] }) {
    const [random] = useState(Math.random());

    return (
        <Box className="font-mono">
            <Text className="title border-b border-[--gray-12] text-[--gray-12] w-full pb-2 mb-2 block">{title}</Text>

            {properties.map(({ title, value }) => (
                <Flex key={`${random}-${title}-${value}`} align="center" justify="between">
                    <Text>{title}</Text>
                    <Text>{value}</Text>
                </Flex>
            ))}
        </Box>
    );
}
