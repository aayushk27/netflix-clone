import React from "react";
import {
   Container,
   Base,
   Error,
   Title,
   Text,
   TextSmall,
   Link,
   Input,
   Submit,
} from "./styles/form";

export default function Form({ children, ...RestProps }) {
   return <Container {...RestProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...RestProps }) {
   return <Base {...RestProps}>{children}</Base>;
};

Form.Error = function FormError({ children, ...RestProps }) {
   return <Error {...RestProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...RestProps }) {
   return <Title {...RestProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...RestProps }) {
   return <Text {...RestProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...RestProps }) {
   return <TextSmall {...RestProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...RestProps }) {
   return <Link {...RestProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...RestProps }) {
   return <Input {...RestProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...RestProps }) {
   return <Submit {...RestProps}>{children}</Submit>;
};
