export interface TemplateButton {
  '--color': string;
  '--color-hover': string;
  '--color-text': string;
  height?: string;
  width?: string;
  'min-width'?: string;
  'border-radius'?: string;
  color?: string;
}
export interface ErrorAxios {
  response: object;  message: string; stack: string;
}