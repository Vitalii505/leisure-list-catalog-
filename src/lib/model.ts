export type LeisureList = {
    films: items[];
    books: items[];
    podcast: items[];
    music: items[];
};

export type items = {
    id: string;
    genre: string;
    details?: string;
    tags: string[];
};

export class Model {
    listData: LeisureList = {
        films: [
            {
                id: "film1",
                genre: "Фентези",
                tags: ["#Фильм", "#Фентези"],
            },
            {
                id: "film2",
                genre: "Боевик",
                tags: ["#Фильм", "#Боевик"],
            },
            {
                id: "film3",
                genre: "Комедия",
                tags: ["#Фильм", "#Комедия"],
            },
            {
                id: "film4",
                genre: "Ужасы",
                tags: ["#Фильм", "#Ужасы"],
            },
        ],
        books: [
            {
                id: "book1",
                genre: "Фентези",
                tags: ["#Книга", "#Фентези"],
            },
            {
                id: "book2",
                genre: "Детектив",
                tags: ["#Книга", "#Детектив"],
            },
            {
                id: "book3",
                genre: "Наука",
                tags: ["#Книга", "#Наука"],
            },
            {
                id: "book4",
                genre: "История",
                tags: ["#Книга", "#История"],
            },
        ],
        podcast: [
			{
				id: "podcast1",
                genre: "Наука",
                tags: ["#Подкаст", "#Наука"],
            },
			{
				id: "podcast2",
                genre: "Приключения",
                tags: ["#Подкаст", "#Приключения"],
            },
			{
				id: "podcast3",
                genre: "Драма",
                tags: ["#Подкаст", "#Драма"],
            },
			{
				id: "podcast4",
                genre: "Культура",
                tags: ["#Подкаст", "#Культура"],
            },
        ],
        music: [
            {
                id: "track1",
                genre: "Техно",
                tags: ["#Музыка", "#Техно"],
            },
            {
                id: "track2",
                genre: "RNB",
                tags: ["#Музыка", "#RNB"],
            },
            {
                id: "track3",
                genre: "Реп",
                tags: ["#Музыка", "#Реп"],
            },
            {
                id: "track1",
                genre: "Рок",
                tags: ["#Музыка", "#Рок"],
            },
        ],
    };
	constructor() {
		console.log(this.listData);
	}
    getData(): LeisureList {
        return this.listData;
    };
}