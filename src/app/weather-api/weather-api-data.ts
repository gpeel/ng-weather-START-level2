export interface WeatherApiData {
  name: string;
  weather: Array<{
    main: string;
    icon: string;
  }>;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}
