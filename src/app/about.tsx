"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";


function About() {
    return (
        <div className="relative min-h-screen w-full">
            <header className="grid !min-h-[49rem] px-8">
                <div className="text-center">
                    <Typography variant="h1" color="gray" className="mb-4">
                        Orgonograma da empresa
                    </Typography>
                </div>
                <Image
                    width={3000}
                    height={3500}
                    src="/image/organograma.png"
                    alt="team work"
                    className=""
                />
            </header>
        </div>
    );
}
export default About;
