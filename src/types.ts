export type MenuCategory = 'all' | 'starters' | 'mains' | 'drinks' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'drinks' | 'desserts';
  badge?: 'HOT' | 'FAV' | 'NEW' | 'LOCAL' | 'HOUSE';
  isSpicy?: boolean;
  calories?: string;
  allergens?: string[];
  image?: string;
}

export interface TapBeer {
  id: string;
  tapNumber: number;
  name: string;
  brewery: string;
  breweryCity: string;
  breweryState: string;
  style: string;
  abv: number;
  ibu?: number;
  untappdRating: number;
  untappdRatingCount: string;
  price16oz: number;
  priceTaster?: number;
  price20oz?: number;
  remainingPercent: number;
  description: string;
  colorHex: string;
  badge?: string;
  imageUrl?: string;
  breweryLogoUrl?: string;
  servingType?: 'CO2 Draft' | 'Nitro Draft' | 'Cask';
  temp?: string;
  untappdUrl?: string;
}

export interface ArcadeGame {
  id: string;
  title: string;
  year: number;
  genre: string;
  highScore: {
    score: number;
    initials: string;
    date: string;
  };
  description: string;
  players: string;
}

export interface PubEvent {
  id: string;
  day: string;
  time: string;
  title: string;
  category: 'trivia' | 'music' | 'sports' | 'pool' | 'special';
  description: string;
  featured?: boolean;
}

export interface CartItem {
  item: MenuItem | {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
  };
  quantity: number;
  instructions?: string;
}

export interface FacebookPost {
  id: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  imageUrl?: string;
  tag?: string;
}

