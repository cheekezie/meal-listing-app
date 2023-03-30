class Category {
  id: string;
  color: string;
  title: string;
  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.color = color;
    this.title = title;
  }
}

export default Category;

export interface CategoryItemI {
  id: string;
  title: string;
  color: string;
}
