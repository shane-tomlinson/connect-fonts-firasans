const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-firasans",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-firasans",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-firasans.git",
    "bugsurl": "https://github.com/shane-tomlinson/connect-fonts-firasans/issues"
  },
  
  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson",
    "twitter": "@shane_tomlinson"
  },
  
  // package license info
  "license": {
    "name": "SIL Open Font License",
    "version": "1.1",
    "abbreviation": "OFL-1.1",
    "url": "http://scripts.sil.org/OFL",
    "text": "Copyright 2010, 2012 Adobe Systems Incorporated (http://www.adobe.com/), with Reserved Font Name 'Source'. Source is a trademark of Adobe Systems Incorporated in the United States and/or other countries.\n\nThis Font Software is licensed under the SIL Open Font License, Version 1.1.\n\nThis license is copied below, and is also available with a FAQ at: http://scripts.sil.org/OFL\n\n\n-----------------------------------------------------------\nSIL OPEN FONT LICENSE Version 1.1 - 26 February 2007\n-----------------------------------------------------------\n\nPREAMBLE\nThe goals of the Open Font License (OFL) are to stimulate worldwide\ndevelopment of collaborative font projects, to support the font creation\nefforts of academic and linguistic communities, and to provide a free and\nopen framework in which fonts may be shared and improved in partnership\nwith others.\n\nThe OFL allows the licensed fonts to be used, studied, modified and\nredistributed freely as long as they are not sold by themselves. The\nfonts, including any derivative works, can be bundled, embedded, \nredistributed and/or sold with any software provided that any reserved\nnames are not used by derivative works. The fonts and derivatives,\nhowever, cannot be released under any other type of license. The\nrequirement for fonts to remain under this license does not apply\nto any document created using the fonts or their derivatives.\n\nDEFINITIONS\n\"Font Software\" refers to the set of files released by the Copyright\nHolder(s) under this license and clearly marked as such. This may\ninclude source files, build scripts and documentation.\n\n\"Reserved Font Name\" refers to any names specified as such after the\ncopyright statement(s).\n\n\"Original Version\" refers to the collection of Font Software components as\ndistributed by the Copyright Holder(s).\n\n\"Modified Version\" refers to any derivative made by adding to, deleting,\nor substituting -- in part or in whole -- any of the components of the\nOriginal Version, by changing formats or by porting the Font Software to a\nnew environment.\n\n\"Author\" refers to any designer, engineer, programmer, technical\nwriter or other person who contributed to the Font Software.\n\nPERMISSION & CONDITIONS\nPermission is hereby granted, free of charge, to any person obtaining\na copy of the Font Software, to use, study, copy, merge, embed, modify,\nredistribute, and sell modified and unmodified copies of the Font\nSoftware, subject to the following conditions:\n\n1) Neither the Font Software nor any of its individual components,\nin Original or Modified Versions, may be sold by itself.\n\n2) Original or Modified Versions of the Font Software may be bundled,\nredistributed and/or sold with any software, provided that each copy\ncontains the above copyright notice and this license. These can be\nincluded either as stand-alone text files, human-readable headers or\nin the appropriate machine-readable metadata fields within text or\nbinary files as long as those fields can be easily viewed by the user.\n\n3) No Modified Version of the Font Software may use the Reserved Font\nName(s) unless explicit written permission is granted by the corresponding\nCopyright Holder. This restriction only applies to the primary font name as\npresented to the users.\n\n4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font\nSoftware shall not be used to promote, endorse or advertise any\nModified Version, except to acknowledge the contribution(s) of the\nCopyright Holder(s) and the Author(s) or with their explicit written\npermission.\n\n5) The Font Software, modified or unmodified, in part or in whole,\nmust be distributed entirely under this license, and must not be\ndistributed under any other license. The requirement for fonts to\nremain under this license does not apply to any document created\nusing the Font Software.\n\nTERMINATION\nThis license becomes null and void if any of the above conditions are\nnot met.\n\nDISCLAIMER\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT\nOF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE\nCOPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nINCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL\nDAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\nFROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM\nOTHER DEALINGS IN THE FONT SOFTWARE.\n"
  },

  // Common font information
  "font_common": {
    "names": "firasans-bold,firasans-bolditalic,firasans-book,firasans-bookitalic,firasans-eight,firasans-eightitalic,firasans-extrabold,firasans-extrabolditalic,firasans-extralight,firasans-extralightitalic,firasans-four,firasans-fouritalic,firasans-hair,firasans-hairitalic,firasans-heavy,firasans-heavyitalic,firasans-italic,firasans-light,firasans-lightitalic,firasans-medium,firasans-mediumitalic,firasans-regular,firasans-semibold,firasans-semibolditalic,firasans-thin,firasans-thinitalic,firasans-two,firasans-twoitalic,firasans-ultra,firasans-ultraitalic,firasans-ultralight,firasans-ultralightitalic",
    "family": "Fira Sans",
    "copyright": "Digitized data copyright © 2012-2014, The Mozilla Foundation and Telefonica S.A.",
    "trademark": "Fira Sans is a trademark of The Mozilla Corporation.",
    "manufacturer": "Carrois Corporate GbR & Edenspiekermann AG",
    "url_vendor": "http://www.carrois.com",
    "designer": "Carrois Corporate & Edenspiekermann AG",
    "url_designer": "http://www.carrois.com"
  },


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
      "firasans-book": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "350",
        "local": [ "Fira Sans Book", "FiraSans-Book" ]
      },
      "firasans-bookitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "350",
        "local": [ "Fira Sans Book Italic", "FiraSans-BookItalic" ]
      },
      "firasans-eight": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "80",
        "local": [ "Fira Sans Eight", "FiraSans-Eight" ]
      },
      "firasans-eightitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "80",
        "local": [ "Fira Sans Eight Italic", "FiraSans-EightItalic" ]
      },
      "firasans-extrabold": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "800",
        "local": [ "Fira Sans ExtraBold", "FiraSans-ExtraBold" ]
      },
      "firasans-extrabolditalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "800",
        "local": [ "Fira Sans ExtraBold Italic", "FiraSans-ExtraBoldItalic" ]
      },
      "firasans-extralight": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "250",
        "local": [ "Fira Sans ExtraLight", "FiraSans-ExtraLight" ]
      },
      "firasans-extralightitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "250",
        "local": [ "Fira Sans ExtraLight Italic", "FiraSans-ExtraLightItalic" ]
      },
      "firasans-four": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "40",
        "local": [ "Fira Sans Four", "FiraSans-Four" ]
      },
      "firasans-fouritalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "40",
        "local": [ "Fira Sans Four Italic", "FiraSans-FourItalic" ]
      },
      "firasans-hair": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "100",
        "local": [ "Fira Sans Hair", "FiraSans-Hair" ]
      },
      "firasans-hairitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "100",
        "local": [ "Fira Sans Hair Italic", "FiraSans-HairItalic" ]
      },
      "firasans-heavy": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "900",
        "local": [ "Fira Sans Heavy", "FiraSans-Heavy" ]
      },
      "firasans-heavyitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "900",
        "local": [ "Fira Sans Heavy Italic", "FiraSans-HeavyItalic" ]
      },
      "firasans-italic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Fira Sans Italic", "FiraSans-Italic" ]
      },
      "firasans-light": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Fira Sans Light", "FiraSans-Light" ]
      },
      "firasans-lightitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "300",
        "local": [ "Fira Sans Light Italic", "FiraSans-LightItalic" ]
      },
      "firasans-medium": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "500",
        "local": [ "Fira Sans Medium", "FiraSans-Medium" ]
      },
      "firasans-mediumitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "500",
        "local": [ "Fira Sans Medium Italic", "FiraSans-MediumItalic" ]
      },
      "firasans-regular": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Fira Sans", "FiraSans-Regular" ]
      },
      "firasans-semibold": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "600",
        "local": [ "Fira Sans SemiBold", "FiraSans-SemiBold" ]
      },
      "firasans-semibolditalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "600",
        "local": [ "Fira Sans SemiBold Italic", "FiraSans-SemiBoldItalic" ]
      },
      "firasans-thin": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "150",
        "local": [ "Fira Sans Thin", "FiraSans-Thin" ]
      },
      "firasans-thinitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "150",
        "local": [ "Fira Sans Thin Italic", "FiraSans-ThinItalic" ]
      },
      "firasans-two": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "20",
        "local": [ "Fira Sans Two", "FiraSans-Two" ]
      },
      "firasans-twoitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "20",
        "local": [ "Fira Sans Two Italic", "FiraSans-TwoItalic" ]
      },
      "firasans-ultra": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "950",
        "local": [ "Fira Sans Ultra", "FiraSans-Ultra" ]
      },
      "firasans-ultraitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "950",
        "local": [ "Fira Sans Ultra Italic", "FiraSans-UltraItalic" ]
      },
      "firasans-ultralight": {
        "fontFamily": "Fira Sans",
        "fontStyle": "normal",
        "fontWeight": "200",
        "local": [ "Fira Sans UltraLight", "FiraSans-UltraLight" ]
      },
      "firasans-ultralightitalic": {
        "fontFamily": "Fira Sans",
        "fontStyle": "italic",
        "fontWeight": "200",
        "local": [ "Fira Sans UltraLight Italic", "FiraSans-UltraLightItalic" ]
      }
  }
};
