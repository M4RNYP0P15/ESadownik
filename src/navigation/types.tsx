import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {
  DrawerScreenProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

export type RootStackParamList = {
  Drawer: undefined;
  Home: NavigatorScreenParams<HomeTabParamList>;
  // HomeScreen : undefined;
  Settings: undefined;
  // SettingsScreen : undefined;
  PlantCategories: undefined;
  PlantTypeScreen: {category: any};
  NotificationsScreen: undefined;
  PlantInfoScreen: {variety_params?: any; rodzaj: string; name: string};
  MyPlantsScreen: undefined;
  PostDetails: {id: string};
  MyTimetableScreen: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

// Tab example
export type HomeTabParamList = {
  Home: undefined;
  Content: undefined;
  Details: {
    name: string;
  };
};

//Drawer example
export type HomeDrawerParamList = {
  Home: undefined;
  Content: undefined;
  Details: {
    name: string;
  };
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeDrawerScreenProps<T extends keyof HomeDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<HomeDrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type ProfileScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Home'
>;
export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type SettingsProps = StackScreenProps<RootStackParamList, 'Settings'>;
export type PlantCategoriesProps = StackScreenProps<
  RootStackParamList,
  'PlantCategories'
>;
export type PlantTypesProps = StackScreenProps<
  RootStackParamList,
  'PlantTypeScreen'
>;
export type PlantScreenProps = StackScreenProps<
  RootStackParamList,
  'PlantInfoScreen'
>;
export type MyPlantsScreenProps = StackScreenProps<
  RootStackParamList,
  'MyPlantsScreen'
>;
export type MyTimeTableProps = StackScreenProps<
  RootStackParamList,
  'MyTimetableScreen'
>;

export type NotificationsScreenProps = StackScreenProps<
  RootStackParamList,
  'NotificationsScreen'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
