import * as React from 'react';
export interface ContactCardProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "Default" | "Hover";
}
export declare const ContactCard: React.FC<ContactCardProps>;
export default ContactCard;
