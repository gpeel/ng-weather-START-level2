export interface WeatherApi5DaysData {
  city: {
    name: string; // Miami
  };
  list: Array<{
    dt: number; // Date : "dt": 1643641200,
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      main: string; // "Rain
      icon: string; // "10d
    }>;
  }>;

}
