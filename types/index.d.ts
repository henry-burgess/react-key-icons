declare module "react-key-icons" {};

declare type KeyProps = {
  value: string;
  state?: "success" | "error" | "pressed";
  size?: number;
  disabled? = false;
  showCursor? = false;
};
