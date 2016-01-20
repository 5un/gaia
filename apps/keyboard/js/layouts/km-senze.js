Keyboards['km-senze'] = {
  label: 'Khmer',
  shortLabel: 'Km',
  menuLabel: 'ខ្មែរ', /*ไทย*/
  basicLayoutKey: 'ខ្មែរ', /*กขค*/
  imEngine: 'thai',
  types: ['text', 'url', 'email'],
  autoCorrectLanguage: 'km',
  autoCorrectPunctuation: false,
  lang: 'km',
  pages: [ 
    {                    // default page
      width: 12,
      secondLayout: true,
      keys: [
        [
          { value: '១' }, { value: '២' }, { value: '៣' }, { value: '៤' },
          { value: '៥' }, { value: '៦' }, { value: '៧' }, { value: '៨' },
          { value: '៩' }, { value: '០' },
          { value: 'គ'}, { value: 'ធ'}
        ], [
          { value: 'ឆ' }, { value: 'ឹ' }, { value: 'េ' }, { value: 'រ' },
          { value: 'ត' }, { value: 'យ' }, { value: 'ុ' }, { value: 'ិ' },
          { value: 'ោ' }, { value: 'ផ' }, { value: 'ៀ' }, { value: 'ឨ' }          
        ], [
          { value: 'ា' }, { value: 'ស' }, { value: 'ដ' }, { value: 'ថ' },
          { value: 'ង' }, { value: 'ហ' }, { value: '្' }, { value: 'ក' },
          { value: 'ល' }, { value: 'ើ' }, { value: '់' }, { value: 'ឮ' }
        ], [
          { value: '⇪', keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
          { value: 'ឋ' }, { value: 'ខ' }, { value: 'ច' }, { value: 'វ' }, 
          { value: 'ប' }, { value: 'ន' }, { value: 'ម' }, { value: 'ំុ' }, 
          { value: '។' }, { value: '៊' }, { value: '⌫', keyCode: KeyEvent.DOM_VK_BACK_SPACE }
        ], [
          { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
          { value: '×', ratio: 2, keyCode: KeyEvent.DOM_VK_CANCEL },
          { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
        ]
      ],
      upperCase: {
        '១':'!',
        '២':'ៗ',
        '៣':'"',
        '៤':'៛',
        '៥':'%',
        '៦':'៌',
        '៧':'័',
        '៨':'៏',
        '៩':'(',
        '០':')',
        'គ':'៝',
        'ធ':'ឪ',
        'ឆ':'ឈ',
        'ឹ':'ឺ',
        'េ':'ែ',
        'រ':'ឬ',
        'ត':'ទ',
        'យ':'ួ',
        'ុ':'ូ',
        'ិ':'ី',
        'ោ':'ៅ',
        'ផ':'ភ',
        'ៀ':'ឿ',
        'ឨ':'ឧ',
        'ឮ':'ឭ',
        'ា':'ាំ',
        'ស':'ៃ',
        'ដ':'ឌ',
        'ថ':'ធ',
        'ង':'ឣ',
        'ហ':'ះ',
        '្':'ញ',
        'ក':'គ',
        'ល':'ឡ',
        'ើ':'ោៈ',
        '់':'៉',
        'ឋ':'ឍ',
        'ខ':'ឃ',
        'ច':'ជ',
        'វ':'េះ',
        'ប':'ព',
        'ន':'ណ',
        'ម':'ំ',
        'ំុ':'ុះ',
        '។':'៕',
        '៊​':'?'

      }
    }
  ]
};
