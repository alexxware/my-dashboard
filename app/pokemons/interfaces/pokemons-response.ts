export interface PokemonsResponse {
    count: number;
    next: string;
    prevous: null;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}