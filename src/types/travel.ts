export type Language = {
    id: number;
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

export type AttractionInfo = {
    id: number;
    attractionId: number;
    languageId: number;
    name: string;
    description: string;
};

export type AttractionCity = {
    id: number;
    countryId: number;
    slug: string;
    image: string;
};

export type AttractionListItem = {
    id: number;
    cityId: number;
    slug: string;
    image: string;
    latitude: number;
    longitude: number;
    address: string;
    website: string;
};

export type Attraction = {
    id: number;
    cityId: number;
    slug: string;
    image: string;
    latitude: number;
    longitude: number;
    address: string;
    website: string;
    city: AttractionCity;
    infos: AttractionInfo[];
};