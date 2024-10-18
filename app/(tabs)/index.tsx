import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Suggested from "../Suggested";
import Liked from "../Liked";
import Library from "../Library";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}
