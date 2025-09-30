export type Links = {
    url: string;
    label: string;
    active: boolean;
}

export type Meta = {
    links: Array<Links>;
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
}