export interface IconProps {
  fill?: string;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  margin?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  padding?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  onClick?: () => void;
}

export const FONTSIZE: Record<Required<IconProps>['fontSize'], string> = {
  '2xl': '40px',
  '3xl': '64px',
  lg: '24px',
  md: '20px',
  sm: '16px',
  xl: '28px',
  xs: '14px',
};
