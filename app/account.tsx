import { View, Text } from "react-native";

export default function Account() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      {/* Account Information Container */}
      <View className="bg-white w-full max-w-md rounded-xl shadow-md p-6">
        <Text className="text-2xl font-bold text-blue-700 mb-4">
          Account Details
        </Text>

        <Text className="text-lg text-gray-700 mb-2">
          Username: johndoe
        </Text>
        <Text className="text-lg text-gray-700 mb-2">
          Email: johndoe@example.com
        </Text>
        <Text className="text-lg text-gray-700">
          Member Since: January 2023
        </Text>
      </View>
    </View>
  );
}
