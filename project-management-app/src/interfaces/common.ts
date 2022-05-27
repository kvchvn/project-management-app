export interface Theme {
  fontFamily: {
    primary: string;
  };

  colors: {
    bg: string;
    font: string;
<<<<<<< HEAD
    bgHover: string;
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
=======
    bgWelcome: string;
    bgNavbar: string;
>>>>>>> f646924 (refactor: change styles in footer, welcome page and navbar)
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
