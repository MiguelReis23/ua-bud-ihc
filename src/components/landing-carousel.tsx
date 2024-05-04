"use client"

import React from "react"
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function LandingCarousel({ dictionary }: { dictionary: any }) {

    const plugin = React.useRef(
        Autoplay({ delay: 9000 })
    )

    return (
        <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                <CustomCarouselItem
                    src="/carousel/network.jpg"
                    alt="An of network equipment"
                    title={dictionary.carouselNetworksTitle}
                    description={dictionary.carouselNetworksDescription}
                />
                <CustomCarouselItem
                    src="/carousel/elearning.jpg"
                    alt="A laptop with moodle on the screen"
                    title={dictionary.carouselElearningTitle}
                    description={dictionary.carouselElearningDescription}
                />
                <CustomCarouselItem
                    src="/carousel/onlineforms.jpg"
                    alt="A form"
                    title={dictionary.carouselOnlineFormsTitle}
                    description={dictionary.carouselOnlineFormsDescription}
                />
                <CustomCarouselItem
                    src="/carousel/helpdesk.jpg"
                    alt="A helpdesk technician"
                    title={dictionary.carouselHelpdeskTitle}
                    description={dictionary.carouselHelpdeskDescription}
                />
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-8 transform -translate-y-1/2" variant="secondary" />
            <CarouselNext className="absolute top-1/2 right-8 transform -translate-y-1/2" variant="secondary" />
        </Carousel>
    )
}

function CustomCarouselItem({ src, alt, title, description }: { src: string, alt: string, title: string, description: string }) {
    return (
        <CarouselItem>
            <div className="relative w-full h-64 md:h-72 lg:h-96 xl:h-128">
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent" />
                <div className="absolute inset-y-1/4 left-32 max-w-xs space-y-4 text-white">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
        </CarouselItem>
    );
}
