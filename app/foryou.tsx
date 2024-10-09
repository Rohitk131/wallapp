import { View, Text, TouchableOpacity } from "react-native";

export default function ForYou() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Header Section */}
      <View className="mt-10 mb-6">
        <Text className="text-3xl font-bold text-blue-700 text-center">
          For You
        </Text>
        <Text className="text-lg text-gray-600 text-center">
          Tailored content just for you
        </Text>
      </View>

      {/* Recommendations Section */}
      <View className="flex-1 justify-center items-center space-y-6">
        <TouchableOpacity className="bg-white p-4 w-64 rounded-xl shadow-lg">
          <Text className="text-lg font-semibold text-blue-600">Recommended Article 1</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white p-4 w-64 rounded-xl shadow-lg">
          <Text className="text-lg font-semibold text-blue-600">Recommended Video 2</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white p-4 w-64 rounded-xl shadow-lg">
          <Text className="text-lg font-semibold text-blue-600">Recommended Product 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
