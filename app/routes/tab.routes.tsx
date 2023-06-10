import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home as HomeIcon,
  Bookmark as BookmarkIcon,
  Settings as SettingsIcon,
} from "lucide-react-native";
import { ColorText, ColorTextTerciary } from "../../constants/colors";
import Home from "../screens/Home";
import Bookmarks from "../screens/Bookmarks";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: ColorText,
        tabBarInactiveTintColor: ColorTextTerciary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          tabBarIcon: ({ size, color }) => (
            <BookmarkIcon size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SettingsIcon size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
