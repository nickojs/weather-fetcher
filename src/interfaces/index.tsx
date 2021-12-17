export interface Display { 
  main: string;
  description: string;
  icon: string;
  city: string;
}

export interface WeatherData { 
  temp: number;
  tempFeel: number;
  pressure: number;
  humidity: number;
  speed: number;
  direction: number;
}

export interface WeatherProps {
  display: Display
  data: WeatherData
}

export interface ReverseGeoLocationResponse { 
  name: string;
}

export interface WeatherAPIResponse { 
  weather: Record<string, unknown>[];
  main: Record<string, unknown>;
  wind: Record<string, unknown>;
}

export interface LatLon { 
  lat: number;
  lon: number;
}

// UI
export enum ErrorType {
  NETWORK, 
  REFUSED,
}

export interface ErrorCardProps {
  type: ErrorType;
  extraInfo?: string;
}

export enum LoadingType {
  NETWORK, 
  USERINPUT,
}

export interface LoadingProps {
  type: LoadingType,
}
