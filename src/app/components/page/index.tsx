import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

type PageProps = {
  title: string;
};
export const Page = ({ title }: PageProps) => {
  return (
    <View style={s.container}>
      <Feather name="chevron-right" size={32} color={colors.gray[300]} />

      <Feather name="file-text" size={32} color={colors.gray[300]} />

      <Text style={s.title}> {title}</Text>
      <TouchableOpacity>
        <Feather name="plus" size={32} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
};
