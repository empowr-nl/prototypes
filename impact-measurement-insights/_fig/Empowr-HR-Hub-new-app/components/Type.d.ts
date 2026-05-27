import * as React from 'react';
export interface TypeProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "Psycholoog" | "Coach";
  verified?: boolean;
}
export declare const Type: React.FC<TypeProps>;
export default Type;
