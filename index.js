const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "firasans-bold": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Fira Sans Bold", "FiraSans-Bold" ]
      },
      "firasans-bolditalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "700",
        "local": [ "Fira Sans Bold Italic", "FiraSans-BoldItalic" ]
      },
      "firasans-light": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Fira Sans Light", "FiraSansLight" ]
      },
      "firasans-lightitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "300",
        "local": [ "Fira Sans Light Italic", "FiraSansLight-Italic" ]
      },
      "firasans-medium": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "500",
        "local": [ "Fira Sans Medium", "FiraSansMedium" ]
      },
      "firasans-mediumitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "500",
        "local": [ "Fira Sans Medium Italic", "FiraSansMedium-Italic" ]
      },
      "firasans-regular": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Fira Sans", "FiraSans" ]
      },
      "firasans-regularitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Fira Sans Italic", "FiraSans-Italic" ]
      }
  }
};
