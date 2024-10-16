import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[100],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.gray[800],
          borderTopColor: colors.gray[400],
        },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.gray[800],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="inbox" color={color} size={size} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: colors.red[300],
            borderRadius: 5,
          },
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="edit" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
