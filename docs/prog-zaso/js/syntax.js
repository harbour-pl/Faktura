'use strict';

(() => {
  const control = new Set('break case continue default do else for goto if return switch while'.split(' '));
  const keywords = new Set([
    'auto bool char const double enum extern float inline int long register restrict short signed',
    'sizeof static struct typedef union unsigned void volatile',
    '_Alignas _Alignof _Atomic _Bool _Complex _Generic _Noreturn _Static_assert _Thread_local',
    'App Win WinState WinAction WinValid Control ControlAction ControlValid Menu MenuAction StatusBar',
    'Sidebar SidebarAction SidebarItemAction BrowseMove BrowseSkip BrowsePosition BrowseEmpty',
    'BrowseText BrowseNumber BrowseCheck BrowseSetCheck',
    'Picture Timer TimerAction TreeItem Toolbar ToolbarAction SetSys Svg',
  ].join(' ').split(' '));
  const literals = new Set(['NULL', 'T', 'F', 'true', 'false']);

  // Klasy kolorów z xDev, reguły tokenów dla C.
  const tokenPatterns = [
    /(?<comment>\/\*[\s\S]*?(?:\*\/|$)|\/\/[^\n]*)/,
    /(?<directive>^[\t ]*#[\t ]*[a-z_]+\b)/,
    /(?<string>(?:u8|[LuU])?"(?:\\[\s\S]|[^"\\\n])*"|[LuU]?'(?:\\[\s\S]|[^'\\\n])*'|(?<=#[\t ]*include[\t ]*)<[^>\n]+>)/,
    /(?<number>\b0[xX][\da-fA-F]+[uUlL]*\b|(?:\b\d+(?:\.\d*)?|(?<![\w.])\.\d+)(?:[eE][+-]?\d+)?[fFuUlL]*)/,
    /(?<word>\b[a-zA-Z_]\w*\b)/,
    /(?<operator>->|<<|>>|&&|\|\||==|!=|<=|>=|\+\+|--|[+\-*/%&|^~=<>!?:;,.(){}\[\]])/,
  ];
  const tokens = new RegExp(tokenPatterns.map(pattern => pattern.source).join('|'), 'gm');

  function classify(match, source) {
    const { word } = match.groups;
    if (!word) {
      return Object.keys(match.groups).find(group => match.groups[group] !== undefined);
    }
    if (control.has(word)) return 'control';
    if (keywords.has(word)) return 'keyword';
    if (literals.has(word)) return 'literal';
    if (/^[A-Z][A-Z0-9_]+$/.test(word)) return 'constant';
    return /^\s*\(/.test(source.slice(match.index + word.length)) ? 'function' : 'variable';
  }

  for (const code of document.querySelectorAll('code.language-c')) {
    const source = code.textContent;
    const highlighted = document.createDocumentFragment();
    let offset = 0;

    for (const match of source.matchAll(tokens)) {
      const token = document.createElement('span');
      token.className = 'token-' + classify(match, source);
      token.textContent = match[0];
      highlighted.append(source.slice(offset, match.index), token);
      offset = match.index + match[0].length;
    }

    highlighted.append(source.slice(offset));
    code.replaceChildren(highlighted);
  }
})();
