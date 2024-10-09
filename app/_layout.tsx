import { Link, Slot } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Navigation Container */}
      <View className="flex flex-row justify-around items-center mt-8 p-4 bg-blue-700/80 mx-2 rounded-xl shadow-xl ">
        {/* Navigation Links */}
        <Link href={'/foryou'} className="p-2">
          <Text className="text-white text-lg font-semibold">For You</Text>
        </Link>

        <Link href={'/explore'} className="p-2">
          <Text className="text-white text-lg font-semibold">Explore</Text>
        </Link>

        <Link href={'/account'} className="p-2">
          <Text className="text-white text-lg font-semibold">Account</Text>
        </Link>
      </View>

      {/* Main Content Area */}
      <View className="flex-1 justify-center items-center px-4">
        <Slot />
      </View>
    </SafeAreaView>
  );
}
