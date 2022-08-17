import React from "react";

import { StyledTextInput } from './styled'

interface TextInputProps {
  id: string;
  variant: "outlined" | "filled" | "standard";
  placeholder: string;
  name: string;
  label: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  variant,
  placeholder,
  label,
  type = 'button',
}) => (
  <StyledTextInput
    id={id}
    variant={variant}
    placeholder={placeholder}
    label={label}
    type={type}
  />
);

export default TextInput;
