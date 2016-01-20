Keyboards['la-senze'] = {
  label: 'Lao',
  shortLabel: 'La',
  menuLabel: 'ລາວ', /*ไทย*/
  basicLayoutKey: 'ກຂຄ', /*กขค*/
  imEngine: 'thai',
  types: ['text', 'url', 'email'],
  autoCorrectLanguage: 'la',
  autoCorrectPunctuation: false,
  lang: 'la',
  pages: [ 
    {                    // default page
      width: 12,
      secondLayout: true,
      keys: [
        [
          { value: 'ຢ' }, { value: 'ຟ' }, { value: 'ໂ' }, { value: 'ຖ' },
          { value: 'ຸ' }, { value: 'ູ' }, { value: 'ຄ' }, { value: 'ຕ' },
          { value: 'ຈ' }, { value: 'ຂ' },
          { value: 'ຊ'}, { value: 'ໍ'}
        ], [
          { value: 'ົ' }, { value: 'ໄ' }, { value: 'ຳ' }, { value: 'ພ' },
          { value: 'ະ' }, { value: 'ິ' }, { value: 'ີ' }, { value: 'ຮ' },
          { value: 'ນ' }, { value: 'ຍ' }, { value: 'ບ' }, { value: 'ລ' }
        ], [
          { value: 'ັ' }, { value: 'ຫ' }, { value: 'ກ' }, { value: 'ດ' },
          { value: 'ເ' }, { value: '້' }, { value: '່' }, { value: 'າ' },
          { value: 'ສ' }, { value: 'ວ' }, { value: 'ງ' }
        ], [
          { value: '⇪', keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
          { value: 'ຜ' }, { value: 'ປ' }, { value: 'ແ' },
          { value: 'ອ' }, { value: 'ຶ' }, { value: 'ື' },
          { value: 'ທ' }, { value: 'ມ' },
          { value: 'ໃ' }, { value: 'ຝ' },
          { value: '⌫', keyCode: KeyEvent.DOM_VK_BACK_SPACE }
        ], [
          { value: '&nbsp', ratio: 6, keyCode: KeyboardEvent.DOM_VK_SPACE },
          { value: '×', ratio: 2, keyCode: KeyEvent.DOM_VK_CANCEL },
          { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
        ]
      ],
      upperCase: {
        'ຢ': '໑',
        'ຟ': '໒',
        'ໂ': '໓',
        'ຖ': '໔',
        'ຸ': '໌',
        'ູ': 'ຼ',
        'ຄ': '໕',
        'ຕ': '໖',
        'ຈ': '໗',
        'ຂ': '໘',
        'ຊ': '໙',
        'ໍ': 'ໍ່',
        'ົ': 'ົ້',
        'ໄ': '໐',
        'ຳ': 'ຳ້',
        'ั': 'ํ',
        'ี': '๊',
        'ພ': '_',
        'ະ': '+',
        'ິ': 'ິ້',
        'ີ': 'ີ້',
        'ຮ': 'ຣ',
        'ນ': 'ໜ',
        'ຍ': 'ຽ',
        'ບ': '-',
        'ລ': 'ຫຼ',
        'ັ': 'ັ້',
        'ກ': '.',
        'ດ': ',',
        'ເ': ':',
        '້': '໊',
        '່': '໋',
        'າ': '!',
        'ສ': '?',
        'ວ': '%',
        'ງ': '=',
        'ຜ': '₭',
        'ປ': '(',
        'ແ': 'ຯ',
        'ອ': 'x',
        'ຶ': 'ຶ້',
        'ື': 'ື້',
        'ທ': 'ໆ',
        'ມ': 'ໝ',
        'ໃ': '$',
        'ຝ': ')'
      }
    }
  ]
};
