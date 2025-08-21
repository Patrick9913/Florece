import { CardA } from "@/app/reUsableComponents/Cards/CardA";
import React from "react";

export const SectionA: React.FC = () => {

    const options = [
        { title: "Boda", content: "Delicadas y con diseño", bgSrc: "/flor2.jpg" },
        { title: "Ramos y obsequios", content: "Cualquier ocasión", bgSrc: "/flor2.jpg" },
        { title: "Eventos", content: "Ambientacioness", bgSrc: "/flor2.jpg" }
    ]

    return (
        <section className=" w-screen h-screen flex justify-center items-center gap-x-5">
            {
                options.map((option, index) => (
                    <CardA
                        key={index}
                        title={option.title}
                        content={option.content}
                        bgSrc={option.bgSrc}
                    />
                ))
            }
        </section>
    );
};