import * as React from 'react';
export interface LocationProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "Desktop Expanded" | "Desktop Collapsed" | "Mobile" | "Mobile Active" | "Desktop Active";
}
export declare const Location: React.FC<LocationProps>;
export default Location;
