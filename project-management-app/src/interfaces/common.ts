export interface Theme {
  fontFamily: {
    primary: string;
  };

  colors: {
    bg: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    border: {
      primary: string;
      secondary: string;
      error: string;
    };

    font: string;

    button: {
      primary: {
        bg: string;
        font: string;
        hover: string;
      };

      success: {
        bg: string;
        font: string;
        hover: string;
      };

      warning: {
        bg: string;
        font: string;
        hover: string;
      };
    };
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
