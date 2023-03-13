import { CarDTO } from "./../dtos/CarDTO";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      MyCars: undefined;
      Scheduling: { car: CarDTO };
      SchedulingComplete: undefined;
      SchedulingDetails: {
        car: CarDTO;
        dates: {};
      };
      CarDetails: { car: CarDTO };
      SignUpFirstStep: undefined;
    }
  }
}
