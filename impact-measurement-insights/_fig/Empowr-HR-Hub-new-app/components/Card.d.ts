import * as React from 'react';
export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "Default" | "Holiday Mode";
}
export declare const Card: React.FC<CardProps>;
export default Card;
