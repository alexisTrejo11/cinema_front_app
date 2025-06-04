export interface Cinema {
  id?: number;
  image: string;
  name: string;
  email_contact: string;
  tax_number: string;
  is_active: boolean;
  status: 'open' | 'closed' | 'renovation';
  type: 'premuim' | 'standard' | 'imax' | 'classic';
  address: string;
  phone?: string;
  description?: string;
  opening_hours: string;
  closing_hours: string;
  screens: number;
  last_renovation?: string;
  
  location: {
    lat: number;
    lng: number;
  };
  
  social_media?: {
     facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  
  amenities?: {
    parking: boolean;
    food_court: boolean;
    disabled_access: boolean;
  };
  
}