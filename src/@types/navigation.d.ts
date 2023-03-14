import { CarDTO } from "./../dtos/CarDTO";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      MyCars: undefined;
      Scheduling: { car: CarDTO };
      Confirmation: {
        title: string;
        message: string;
        nextScreenRoute: string;
      };
      nextScreenRoute: string;
      SchedulingDetails: {
        car: CarDTO;
        dates: {};
      };
      CarDetails: { car: CarDTO };
      SignUpFirstStep: undefined;
      SignUpSecondStep: {
        user: {
          name: string;
          email: string;
          driverLicense: string;
        };
      };
    }
  }
}
