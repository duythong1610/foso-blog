import { Author } from "./author";
import { Category } from "./category";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: Category;
  author: Author;
  createdAt: string;
  updatedAt: string;
  readingTime: number; // phút đọc
  thumbnail: string; // URL hình ảnh
  shortDescription: string;
  content: string;
}
