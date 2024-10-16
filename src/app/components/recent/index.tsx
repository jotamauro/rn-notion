import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

type RecentProps = {
  data: {
    title: string;
    cover?: string;
  };
};
export const Recent = ({ data }: RecentProps) => {
  return (
    <TouchableOpacity style={s.container}>
      <Image source={{ uri: data.cover }} style={s.cover} />
      <View style={s.content}>
        <Feather
          name="file-text"
          size={32}
          color={colors.gray[300]}
          style={s.icon}
        />
        <Text style={s.title} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
