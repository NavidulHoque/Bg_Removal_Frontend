import review1 from "@/public/images/review1.png"
import review2 from "@/public/images/review2.png"
import { StaticImageData } from "next/image";

export interface Review {
    id: number;
    text: string;
    author: string;
    image: StaticImageData;
    jobTitle: string;
}

export const reviews: Review[] = [
    {
        id: 1,
        text: "I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
        author: "Richard Nelson",
        image: review1,
        jobTitle:'Web Developer'
    },
    {
        id: 2,
        text: "I've been using bg.removal for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
        author: "Donald Jackman",
        image: review2,
        jobTitle:'UI Designer'
    },
];