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
export interface Colors{
  '--color-login' : string;
  '--color-text-login' : string;
        '--color-hover-login' : string;
        '--color-register' : string;
        '--color-text-register' : string;
        '--color-hover-register' : string;
}
export interface ErrorAxios {
  response: object;  message: string; stack: string;
}