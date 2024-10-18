import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

export default function Explore() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <View className="mt-10 mb-6">
        <Text className="text-3xl font-bold text-blue-700 text-center">
          Explore
        </Text>
        <Text className="text-lg text-gray-600 text-center">
          Spot potholes, improve roads
        </Text>
      </View>

      {/* Category Cards */}
      <View className="flex-1 justify-center items-center space-y-6">
        <TouchableOpacity className="bg-white p-4 w-64 rounded-xl shadow-lg">
          <Text className="text-lg font-semibold text-blue-600">
            Your Submissions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white p-4 w-64 rounded-xl shadow-lg">
          <Text className="text-lg font-semibold text-blue-600">Heatmap</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white p-4 w-64 rounded-xl shadow-lg">
          <Text className="text-lg font-semibold text-blue-600">
            Potholes near you
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
