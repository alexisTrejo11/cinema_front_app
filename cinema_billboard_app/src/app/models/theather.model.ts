export enum TheaterType {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  IMAX = 'IMAX',
  VIP = 'VIP',
  DOLBY_ATMOS = 'DOLBY_ATMOS'
}

export interface Theater {
  id?: number;
  cinema_id: number;
  name: string;
  capacity: number;
  theater_type: TheaterType;
  is_active: boolean;
  maintenance_mode: boolean;
}s