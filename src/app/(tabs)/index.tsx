import { DATA } from "@/utils/data";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Header } from "../components/header";
import { PageList } from "../components/page-list";
import { RecentList } from "../components/recent-list";

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 100,
        }}
      >
        <RecentList data={DATA.RECENT} />
        <PageList data={DATA.PAGES} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
});
