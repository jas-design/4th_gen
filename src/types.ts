export type Page = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  title: string;
}
