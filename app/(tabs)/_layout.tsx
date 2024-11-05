import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunity from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={22} style={{ marginBottom: -3 }} {...props} />;
}

interface Tab {
  name: string;
  title: string;
  icon: any;
}

const tabs: Tab[] = [
  { name: 'home', title: 'Home', icon: 'home' },
  { name: 'matches', title: 'Matches', icon: 'home' },
  { name: 'series', title: 'Series', icon: 'home' },
  { name: 'stream', title: 'Stream', icon: 'home' },
  { name: 'more', title: 'More', icon: 'home' },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: '#A4B7D2',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, false),
        tabBarStyle: { borderTopWidth: 0 },
        tabBarLabelStyle: { fontSize: 12 },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather size={22} style={{ marginBottom: -3 }} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          tabBarIcon: ({ color }) => (
            <MaterialCommunity
              size={22}
              style={{ marginBottom: -3 }}
              name="cricket"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          title: 'Series',
          tabBarIcon: ({ color }) => (
            <MaterialCommunity
              size={22}
              style={{ marginBottom: -3 }}
              name="tournament"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stream"
        options={{
          title: 'Stream',
          tabBarIcon: ({ color }) => (
            <Feather size={22} style={{ marginBottom: -3 }} name="radio" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => (
            <Feather size={22} style={{ marginBottom: -3 }} name="more-vertical" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
