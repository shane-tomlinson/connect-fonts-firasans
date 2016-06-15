# connect-fonts-firasans

Fira Sans fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-firasans");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/firasans-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/firasans-bold,firasans-bolditalic,firasans-book,firasans-bookitalic,firasans-eight,firasans-eightitalic,firasans-extrabold,firasans-extrabolditalic,firasans-extralight,firasans-extralightitalic,firasans-four,firasans-fouritalic,firasans-hair,firasans-hairitalic,firasans-heavy,firasans-heavyitalic,firasans-italic,firasans-light,firasans-lightitalic,firasans-medium,firasans-mediumitalic,firasans-regular,firasans-semibold,firasans-semibolditalic,firasans-thin,firasans-thinitalic,firasans-two,firasans-twoitalic,firasans-ultra,firasans-ultraitalic,firasans-ultralight,firasans-ultralightitalic/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* firasans-bold
* firasans-bolditalic
* firasans-book
* firasans-bookitalic
* firasans-eight
* firasans-eightitalic
* firasans-extrabold
* firasans-extrabolditalic
* firasans-extralight
* firasans-extralightitalic
* firasans-four
* firasans-fouritalic
* firasans-hair
* firasans-hairitalic
* firasans-heavy
* firasans-heavyitalic
* firasans-italic
* firasans-light
* firasans-lightitalic
* firasans-medium
* firasans-mediumitalic
* firasans-regular
* firasans-semibold
* firasans-semibolditalic
* firasans-thin
* firasans-thinitalic
* firasans-two
* firasans-twoitalic
* firasans-ultra
* firasans-ultraitalic
* firasans-ultralight
* firasans-ultralightitalic

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/firasans-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin

5. Set your CSS up to use the new font by using the "Fira Sans" font-family.
```
    body {
      font-family: 'Fira Sans', 'sans-serif', 'serif';
    }
```

## Font Info
Fira Sans

* Copyright: Digitized data copyright © 2012-2015, The Mozilla Foundation and Telefonica S.A.
* Trademark: Fira Sans is a trademark of The Mozilla Corporation.
* Designer: Carrois Corporate & Edenspiekermann AG
* Designer URL: http://www.carrois.com 
* Vendor: Carrois Corporate GbR & Edenspiekermann AG
* Vendor URL: http://www.carrois.com

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-firasans
* Repo: https://github.com/shane-tomlinson/connect-fonts-firasans.git
* Bugs: https://github.com/shane-tomlinson/connect-fonts-firasans/issues

## Font pack author
* Shane Tomlinson
* shane@shanetomlinson.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* @shane_tomlinson


## License

Fonts: Licensed under version 1.1 of the SIL Open Font License

  http://scripts.sil.org/OFL

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

