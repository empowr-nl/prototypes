import * as React from 'react';
export interface CaseStatsProps {
  className?: string;
  style?: React.CSSProperties;
  expertInvolved?: boolean;
  relatedCases?: boolean;
}
export declare const CaseStats: React.FC<CaseStatsProps>;
export default CaseStats;
