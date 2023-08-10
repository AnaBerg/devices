import { PropsWithChildren } from "react";

import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

interface ButtonProps extends PropsWithChildren {
  onPress: (event: GestureResponderEvent) => void;
  variant?: "contained" | "outline" | "text";
}

const Button = ({ children, onPress, variant = "contained" }: ButtonProps) => {
  const buttonStyle = style[variant as keyof typeof style];
  const textStyle = style[`${variant}Text` as keyof typeof style];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  contained: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#1F3B87",
  },
  containedText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#ffffff",
  },
  outline: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#ffffff",
    borderColor: "#F9EA31",
    borderWidth: 2,
  },
  outlineText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#000000",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#ffffff",
  },
  textText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#1F3B87",
  },
});

export default Button;
