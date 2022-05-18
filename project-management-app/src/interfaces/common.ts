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

export type DropdownOption = {
  value: string;
  label: string;
};
