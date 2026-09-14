export type Language = {
    code: string;
    name: string;
};

export type Info = {
    id: number;
    languageId: number;
    name: string;
    description: string;
    language: Language;
};

export type Country = {
    id: number;
    code: string;
    image: string;
    infos: Info[];
};

export type City = {
    id: number;
    countryId: number;
    slug: string;
    image: string;
    infos: Info[];
};