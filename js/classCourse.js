class Course {
    id;
    name;
    category;
    price;
    duration;
    description;
    rating;
    logoUrl;
    active;

    constructor(name, category, duration, price, rating) {
        this.id = null;
        this.name = name;
        this.category = category;
        this.duration = duration;
        this.price = price;
        this.rating = rating;
        this.logoUrl = "/logos/code.svg";
    }
}
