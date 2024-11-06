export interface Plan {
    level: string;
    price: number;
    credits: number;
    desc: string;
}

export const plans: Plan[] = [
    {
        level: 'Basic',
        price: 10,
        credits: 100,
        desc: 'Best for personal use.'
    },
    {
        level: 'Advanced',
        price: 50,
        credits: 500,
        desc: 'Best for business use.'
    },
    {
        level: 'Business',
        price: 250,
        credits: 5000,
        desc: 'Best for enterprise use.'
    },
]