Keyboards['th-senze'] = {
  label: 'Thai',
  shortLabel: 'Th',
  menuLabel: 'ไทย', /*ไทย*/
  basicLayoutKey: 'กขค', /*กขค*/
  imEngine: 'thai',
  types: ['text', 'url', 'email'],
  autoCorrectLanguage: 'th',
  autoCorrectPunctuation: false,
  lang: 'th-senze',
  disableAlternateLayout: true,
  pages: [ 
    {                    // default page
      width: 11,
      secondLayout: true,
      keys: [
        [
          { value: 'ก' }, { value: 'ฃ' }, { value: 'ค' }, { value: 'ง' },
          { value: 'จ' }, { value: 'ฉ' }, { value: 'ช' }, { value: 'ด' },
          { value: 'ต' }, { value: 'ถ' }, { value: 'ท' }
        ], [
          { value: 'ฟ' }, { value: 'น' }, { value: 'บ' }, { value: 'ป' }, 
          { value: 'ผ' }, { value: 'พ' }, { value: 'ม' }, { value: 'ย' }, 
          { value: 'ร' }, { value: 'ล' }, { value: 'ว' }
        ], [
          { value: 'ส' }, { value: 'ห' }, { value: 'อ' }, { value: 'ิ' },
          { value: 'ี' }, { value: 'ึ' }, { value: 'ื' }, { value: '่' },
          { value: '้' }, { value: 'เ' }, { value: 'แ' }
        ], [
          /* { value: '<<', keyCode: KeyEvent.DOM_VK_ALT, targetPage: 2 },*/
          { value: 'อื่นๆ', ratio: 1,keyCode: KeyEvent.DOM_VK_ALT, targetPage: 1 },
          { value: '&nbsp', ratio: 6, keyCode: KeyboardEvent.DOM_VK_SPACE },
          { value: 'ะ', ratio: 1 },
          { value: 'า', ratio: 1 },
          { value: '⌫', ratio: 1, keyCode: KeyEvent.DOM_VK_BACK_SPACE },
          { value: '↵', ratio: 1, keyCode: KeyEvent.DOM_VK_RETURN }
        ], [
          { value: '', ratio: 10 }
        ]
      ]
    },
    { // Char 2
      width: 11,
      secondLayout: true,
      keys: [
        [
          { value: 'ฆ' }, { value: 'ซ' }, { value: 'ฌ' }, { value: 'ฎ' },
          { value: 'ฏ' }, { value: 'ฐ' }, { value: 'ฑ' }, { value: 'ฒ' },
          { value: 'ณ' }, { value: 'ฝ' }, { value: 'ธ' }
        ], [
          { value: 'ศ' }, { value: 'ษ' }, { value: 'ฬ' }, { value: 'ฮ' }, 
          { value: '๊' }, { value: '๋' }, { value: '็' }, { value: 'โ' }, 
          { value: 'ั' }, { value: 'ำ' }, { value: 'ใ' }
        ], [
          { value: 'ไ' }, { value: 'ๆ' }, { value: '์' }, { value: 'ู' },
          { value: 'ุ' }, { value: 'ฤ' }, { value: 'ฦ' }, { value: '!' },
          { value: '?' }, { value: '@' }, { value: '=' }
        ], [
          /* { value: '<<', keyCode: KeyEvent.DOM_VK_ALT, targetPage: 2 },*/
          { value: 'อื่นๆ', ratio: 1,keyCode: KeyEvent.DOM_VK_ALT, targetPage: 2 },
          { value: '&nbsp', ratio: 6, keyCode: KeyboardEvent.DOM_VK_SPACE },
          { value: ',', ratio: 1 },
          { value: '/', ratio: 1 },
          { value: '⌫', ratio: 1, keyCode: KeyEvent.DOM_VK_BACK_SPACE },
          { value: '↵', ratio: 1, keyCode: KeyEvent.DOM_VK_RETURN }
        ], [
          { value: '', ratio: 10 }
        ]
      ]
    },
    { // Signs Page
      width: 11,
      secondLayout: true,
      keys: [
        [
          { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' },
          { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' },
          { value: '9' }, { value: '0' }, { value: '=' }
        ], [
          { value: '@' }, { value: '#' }, { value: '฿' }, { value: '%' }, 
          { value: '&' }, { value: '-' }, { value: '+' }, { value: '(' }, 
          { value: ')' }, { value: '*' }, { value: '"' }
        ], [
          { value: '\'' }, { value: ':' }, { value: ';' }, { value: '!' },
          { value: '?' },  { value: '<' }, { value: '>' }, 
          { value: '{' }, { value: '}' }, { value: '[' },  { value: ']' }
        ], [
          { value: 'อื่นๆ', ratio: 1,keyCode: KeyEvent.DOM_VK_ALT, targetPage: 0 },
          { value: '&nbsp', ratio: 6, keyCode: KeyboardEvent.DOM_VK_SPACE },
          { value: ',', ratio: 1 },
          { value: '/', ratio: 1 },
          { value: '⌫', ratio: 1, keyCode: KeyEvent.DOM_VK_BACK_SPACE },
          { value: '↵', ratio: 1, keyCode: KeyEvent.DOM_VK_RETURN }
        ], [
          { value: '', ratio: 10 }
        ]
      ]
    }
  ]
};
