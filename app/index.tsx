import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-lg font-semibold text-blue-600 text-center">
        Welcome to the App!
      </Text>
      <Text className="text-gray-500 text-center mt-2">
        Edit the file <Text className="font-bold">app/index.tsx</Text> to make changes to this screen.
      </Text>
    </View>
  );
}
