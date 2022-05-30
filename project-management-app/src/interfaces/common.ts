export interface Theme {
  fontFamily: {
    primary: string;
    title: string;
  };

  colors: {
    bg: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
    };

    border: {
      primary: string;
      secondary: string;
      error: string;
    };

    font: string;
    fontHover: string;

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

export interface Translation {
  boardsPage: {
    title: string;
  };
}
