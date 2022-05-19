export interface Theme {
  fontFamily: {
    primary: string;
  };

  colors: {
    bg: string;
    font: string;
  };
}

export interface ServerError {
  statusCode: number;
  message: string;
}

export type LanguageOption = {
  value: string;
  label: string;
};
