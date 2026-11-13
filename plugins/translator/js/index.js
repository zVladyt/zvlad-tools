// Translator for Valenced: translates received and sent Discord messages.
// Source of the plugin (plain JS, no build-time dependencies).
var jsx = valenced.react.ReactJSXRuntime;

// Credits. Add one entry per plugin or idea this plugin was inspired by or fixes:
//   { name: 'Plugin name', author: 'Author', url: 'https://github.com/...' }
var CREDITS = {
  author: 'zVladyt',
  writtenWith: 'Claude (Anthropic)',
  inspiredBy: []
};

  var V = valenced;
  var PLUGIN_ID = 'zvladyt.tools.translator';
  var VERSION = '0.7.1';
  var ICON = 'data:image/png;base64,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';

  // ---------- Idiomas ----------
  var LANGS = [
    ['es','Español'],['en','English'],['pt','Português'],['fr','Français'],['de','Deutsch'],['it','Italiano'],
    ['ru','Русский'],['ja','日本語'],['ko','한국어'],['zh-CN','中文 (简体)'],['zh-TW','中文 (繁體)'],['ar','العربية'],
    ['hi','हिन्दी'],['tr','Türkçe'],['nl','Nederlands'],['pl','Polski'],['uk','Українська'],['id','Bahasa Indonesia'],
    ['vi','Tiếng Việt'],['th','ไทย'],['sv','Svenska'],['el','Ελληνικά'],['he','עברית'],['cs','Čeština'],['ro','Română']
  ];
  function langName(code) {
    if (code === 'auto') return N.anyLang;
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0] === code) return LANGS[i][1];
    return code;
  }

  // ---------- Textos de la interfaz (segun el idioma del telefono) ----------
  var STR = {
    es: { recv:'Mensajes recibidos', recvSw:'Traducir mensajes recibidos', recvSub:'Traduce automaticamente cualquier idioma al tuyo', recvLang:'Traducir a', send:'Mensajes enviados', sendSw:'Traducir mensajes que envio', sendSub:'Tambien puedes activarlo con el boton del chat', defLang:'Idioma por defecto al enviar', btn:'Boton del chat', btnSw:'Mostrar boton en el chat', btnSub:'Activa o desactiva la traduccion al enviar', btnColor:'Color del boton', status:'Estado', ok:'activo', choose:'Elige un idioma', btnFound:'Boton: colocado', btnMissing:'Boton: no se encontro donde ponerlo', colors:{pink:'Rosa',blurple:'Azul',green:'Verde',purple:'Morado',orange:'Naranja',white:'Blanco',red:'Rojo',cyan:'Cian'} },
    en: { recv:'Received messages', recvSw:'Translate received messages', recvSub:'Automatically translates any language into yours', recvLang:'Translate to', send:'Sent messages', sendSw:'Translate messages I send', sendSub:'You can also toggle it with the chat button', defLang:'Default language when sending', btn:'Chat button', btnSw:'Show button in chat', btnSub:'Turns translation on or off when sending', btnColor:'Button color', status:'Status', ok:'active', choose:'Choose a language', btnFound:'Button: placed', btnMissing:'Button: could not find where to place it', colors:{pink:'Pink',blurple:'Blue',green:'Green',purple:'Purple',orange:'Orange',white:'White',red:'Red',cyan:'Cyan'} },
    pt: { recv:'Mensagens recebidas', recvSw:'Traduzir mensagens recebidas', recvSub:'Traduz qualquer idioma para o seu automaticamente', recvLang:'Traduzir para', send:'Mensagens enviadas', sendSw:'Traduzir mensagens que envio', sendSub:'Voce tambem pode ativar pelo botao do chat', defLang:'Idioma padrao ao enviar', btn:'Botao do chat', btnSw:'Mostrar botao no chat', btnSub:'Liga ou desliga a traducao ao enviar', btnColor:'Cor do botao', status:'Estado', ok:'ativo', choose:'Escolha um idioma', btnFound:'Botao: colocado', btnMissing:'Botao: nao foi possivel posicionar', colors:{pink:'Rosa',blurple:'Azul',green:'Verde',purple:'Roxo',orange:'Laranja',white:'Branco',red:'Vermelho',cyan:'Ciano'} },
    fr: { recv:'Messages recus', recvSw:'Traduire les messages recus', recvSub:'Traduit automatiquement toutes les langues vers la votre', recvLang:'Traduire vers', send:'Messages envoyes', sendSw:'Traduire mes messages envoyes', sendSub:'Vous pouvez aussi l activer avec le bouton du chat', defLang:'Langue par defaut a l envoi', btn:'Bouton du chat', btnSw:'Afficher le bouton dans le chat', btnSub:'Active ou desactive la traduction a l envoi', btnColor:'Couleur du bouton', status:'Etat', ok:'actif', choose:'Choisissez une langue', btnFound:'Bouton : place', btnMissing:'Bouton : emplacement introuvable', colors:{pink:'Rose',blurple:'Bleu',green:'Vert',purple:'Violet',orange:'Orange',white:'Blanc',red:'Rouge',cyan:'Cyan'} },
    de: { recv:'Empfangene Nachrichten', recvSw:'Empfangene Nachrichten ubersetzen', recvSub:'Ubersetzt jede Sprache automatisch in deine', recvLang:'Ubersetzen nach', send:'Gesendete Nachrichten', sendSw:'Gesendete Nachrichten ubersetzen', sendSub:'Auch uber die Chat-Taste umschaltbar', defLang:'Standardsprache beim Senden', btn:'Chat-Taste', btnSw:'Taste im Chat anzeigen', btnSub:'Schaltet die Ubersetzung beim Senden ein oder aus', btnColor:'Tastenfarbe', status:'Status', ok:'aktiv', choose:'Sprache wahlen', btnFound:'Taste: platziert', btnMissing:'Taste: Platz nicht gefunden', colors:{pink:'Rosa',blurple:'Blau',green:'Grun',purple:'Lila',orange:'Orange',white:'Weiss',red:'Rot',cyan:'Cyan'} },
    it: { recv:'Messaggi ricevuti', recvSw:'Traduci i messaggi ricevuti', recvSub:'Traduce automaticamente ogni lingua nella tua', recvLang:'Traduci in', send:'Messaggi inviati', sendSw:'Traduci i messaggi che invio', sendSub:'Puoi attivarlo anche dal pulsante della chat', defLang:'Lingua predefinita all invio', btn:'Pulsante della chat', btnSw:'Mostra il pulsante nella chat', btnSub:'Attiva o disattiva la traduzione all invio', btnColor:'Colore del pulsante', status:'Stato', ok:'attivo', choose:'Scegli una lingua', btnFound:'Pulsante: posizionato', btnMissing:'Pulsante: posizione non trovata', colors:{pink:'Rosa',blurple:'Blu',green:'Verde',purple:'Viola',orange:'Arancione',white:'Bianco',red:'Rosso',cyan:'Ciano'} },
    ru: { recv:'Полученные сообщения', recvSw:'Переводить полученные сообщения', recvSub:'Автоматически переводит любой язык на ваш', recvLang:'Переводить на', send:'Отправленные сообщения', sendSw:'Переводить мои сообщения', sendSub:'Также можно включить кнопкой в чате', defLang:'Язык по умолчанию при отправке', btn:'Кнопка в чате', btnSw:'Показывать кнопку в чате', btnSub:'Включает или выключает перевод при отправке', btnColor:'Цвет кнопки', status:'Состояние', ok:'активно', choose:'Выберите язык', btnFound:'Кнопка: добавлена', btnMissing:'Кнопка: место не найдено', colors:{pink:'Розовый',blurple:'Синий',green:'Зелёный',purple:'Фиолетовый',orange:'Оранжевый',white:'Белый',red:'Красный',cyan:'Голубой'} },
    ja: { recv:'受信メッセージ', recvSw:'受信メッセージを翻訳', recvSub:'あらゆる言語を自動であなたの言語に翻訳します', recvLang:'翻訳先', send:'送信メッセージ', sendSw:'送信メッセージを翻訳', sendSub:'チャットのボタンでも切り替えできます', defLang:'送信時の既定の言語', btn:'チャットボタン', btnSw:'チャットにボタンを表示', btnSub:'送信時の翻訳をオン/オフします', btnColor:'ボタンの色', status:'状態', ok:'有効', choose:'言語を選択', btnFound:'ボタン: 配置済み', btnMissing:'ボタン: 配置場所が見つかりません', colors:{pink:'ピンク',blurple:'青',green:'緑',purple:'紫',orange:'オレンジ',white:'白',red:'赤',cyan:'シアン'} },
    ko: { recv:'받은 메시지', recvSw:'받은 메시지 번역', recvSub:'모든 언어를 자동으로 내 언어로 번역합니다', recvLang:'번역할 언어', send:'보낸 메시지', sendSw:'보내는 메시지 번역', sendSub:'채팅 버튼으로도 켜고 끌 수 있습니다', defLang:'보낼 때 기본 언어', btn:'채팅 버튼', btnSw:'채팅에 버튼 표시', btnSub:'전송 시 번역을 켜거나 끕니다', btnColor:'버튼 색상', status:'상태', ok:'활성', choose:'언어 선택', btnFound:'버튼: 배치됨', btnMissing:'버튼: 위치를 찾지 못함', colors:{pink:'분홍',blurple:'파랑',green:'초록',purple:'보라',orange:'주황',white:'흰색',red:'빨강',cyan:'청록'} },
    zh: { recv:'接收的消息', recvSw:'翻译接收的消息', recvSub:'自动将任何语言翻译成你的语言', recvLang:'翻译为', send:'发送的消息', sendSw:'翻译我发送的消息', sendSub:'也可以用聊天按钮开关', defLang:'发送时的默认语言', btn:'聊天按钮', btnSw:'在聊天中显示按钮', btnSub:'开启或关闭发送时的翻译', btnColor:'按钮颜色', status:'状态', ok:'已启用', choose:'选择语言', btnFound:'按钮：已放置', btnMissing:'按钮：找不到放置位置', colors:{pink:'粉色',blurple:'蓝色',green:'绿色',purple:'紫色',orange:'橙色',white:'白色',red:'红色',cyan:'青色'} }
  };
  function uiLang() {
    try {
      var l = String(Intl.DateTimeFormat().resolvedOptions().locale || 'en').toLowerCase();
      var s = l.split(/[-_]/)[0];
      return STR[s] ? s : 'en';
    } catch (e) { return 'en'; }
  }
  function deviceTarget() {
    try {
      var l = String(Intl.DateTimeFormat().resolvedOptions().locale || 'en');
      var low = l.toLowerCase();
      if (low.indexOf('zh-tw') === 0 || low.indexOf('zh-hant') === 0) return 'zh-TW';
      if (low.indexOf('zh') === 0) return 'zh-CN';
      var s = low.split(/[-_]/)[0];
      for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0] === s) return s;
    } catch (e) {}
    return 'en';
  }
  var NET = {
    es: ['Probar conexion', 'Comprueba si el telefono llega a los servicios de traduccion', 'Componentes vistos'],
    en: ['Test connection', 'Checks whether the phone can reach the translation services', 'Components seen'],
    pt: ['Testar conexao', 'Verifica se o telefone alcanca os servicos de traducao', 'Componentes vistos'],
    fr: ['Tester la connexion', 'Verifie que le telephone atteint les services de traduction', 'Composants vus'],
    de: ['Verbindung testen', 'Pruft, ob das Telefon die Ubersetzungsdienste erreicht', 'Gesehene Komponenten'],
    it: ['Prova connessione', 'Verifica se il telefono raggiunge i servizi di traduzione', 'Componenti visti'],
    ru: ['Проверить соединение', 'Проверяет, доступны ли сервисы перевода', 'Найденные компоненты'],
    ja: ['接続をテスト', '翻訳サービスに接続できるか確認します', '検出したコンポーネント'],
    ko: ['연결 테스트', '번역 서비스에 연결할 수 있는지 확인합니다', '감지된 구성요소'],
    zh: ['测试连接', '检查手机能否访问翻译服务', '检测到的组件']
  };
  var S = STR[uiLang()];
  (function () { var n = NET[uiLang()] || NET.en; S.net = n[0]; S.netSub = n[1]; S.seen = n[2]; })();

  var NEWS = {
    es: { anyLang: 'Cualquier idioma', inFrom: 'Traducir desde', menuTitle: 'Enviar mis mensajes en', menuHint: 'Toca el boton para activar o desactivar. Manten presionado para elegir el idioma.', done: 'Listo', back: 'Volver', colorHint: 'Toca o arrastra en el cuadro y en la barra de tono, o escribe el codigo hex.', quick: 'Colores rapidos', off: 'OFF' },
    en: { anyLang: 'Any language', inFrom: 'Translate from', menuTitle: 'Send my messages in', menuHint: 'Tap the button to turn it on or off. Long-press to choose the language.', done: 'Done', back: 'Back', colorHint: 'Tap or drag on the square and the hue bar, or type the hex code.', quick: 'Quick colors', off: 'OFF' },
    pt: { anyLang: 'Qualquer idioma', inFrom: 'Traduzir de', menuTitle: 'Enviar minhas mensagens em', menuHint: 'Toque no botao para ligar ou desligar. Segure para escolher o idioma.', done: 'Pronto', back: 'Voltar', colorHint: 'Toque ou arraste no quadrado e na barra de tom, ou digite o codigo hex.', quick: 'Cores rapidas', off: 'OFF' },
    fr: { anyLang: 'Toutes les langues', inFrom: 'Traduire depuis', menuTitle: 'Envoyer mes messages en', menuHint: 'Touchez le bouton pour activer ou desactiver. Appui long pour choisir la langue.', done: 'OK', back: 'Retour', colorHint: 'Touchez ou glissez sur le carre et la barre de teinte, ou saisissez le code hex.', quick: 'Couleurs rapides', off: 'OFF' }
  };
  Object.assign(NEWS.es, { apis: 'APIs de traduccion propias', builtin: 'Usar traductores integrados', builtinSub: 'Si lo apagas, solo se usan tus APIs', addApi: 'Agregar API', addApiSub: 'Tus APIs se prueban primero', apiName: 'Nombre', apiUrl: 'URL', apiMethod: 'Metodo', apiBody: 'Cuerpo (solo POST)', apiHeaders: 'Cabeceras (una por linea, Nombre: valor)', apiPath: 'Ruta de la traduccion en la respuesta', apiLang: 'Ruta del idioma detectado (opcional)', apiHelp: 'Usa {text} para el mensaje, {to} para el idioma destino (ej. es), {TO} en mayusculas y {from} para auto. La ruta es el camino dentro del JSON de respuesta, ej. data.translations.0.translatedText', presets: 'Plantillas', test: 'Probar', save: 'Guardar', del: 'Eliminar', cancel: 'Cancelar', testing: 'Probando...', enabled: 'Activada', disabled: 'Desactivada', lastOk: 'Ultimo proveedor usado', needUrl: 'Escribe la URL' });
  Object.assign(NEWS.en, { apis: 'Your own translation APIs', builtin: 'Use built-in translators', builtinSub: 'If off, only your APIs are used', addApi: 'Add API', addApiSub: 'Your APIs are tried first', apiName: 'Name', apiUrl: 'URL', apiMethod: 'Method', apiBody: 'Body (POST only)', apiHeaders: 'Headers (one per line, Name: value)', apiPath: 'Path to the translation in the response', apiLang: 'Path to the detected language (optional)', apiHelp: 'Use {text} for the message, {to} for the target language (e.g. es), {TO} uppercase and {from} for auto. The path is the way into the JSON response, e.g. data.translations.0.translatedText', presets: 'Templates', test: 'Test', save: 'Save', del: 'Delete', cancel: 'Cancel', testing: 'Testing...', enabled: 'Enabled', disabled: 'Disabled', lastOk: 'Last provider used', needUrl: 'Enter the URL' });
  var N = Object.assign({}, NEWS.en, NEWS[uiLang()] || {});
  var NEWS2 = {
    es: { services: 'Servicios de traduccion integrados', testAll: 'Probar todos los servicios', testAllSub: 'Mide la velocidad y muestra cuales funcionan en tu telefono', testingAll: 'Probando...' },
    en: { services: 'Built-in translation services', testAll: 'Test all services', testAllSub: 'Measures speed and shows which ones work on your phone', testingAll: 'Testing...' },
    pt: { services: 'Servicos de traducao integrados', testAll: 'Testar todos os servicos', testAllSub: 'Mede a velocidade e mostra quais funcionam no seu telefone', testingAll: 'Testando...' },
    fr: { services: 'Services de traduction integres', testAll: 'Tester tous les services', testAllSub: 'Mesure la vitesse et montre lesquels fonctionnent sur votre telephone', testingAll: 'Test en cours...' }
  };
  Object.assign(N, NEWS2.en, NEWS2[uiLang()] || {});

  // ---------- Colores del boton ----------
  var PALETTE = [['pink', '#FF8FB8'], ['blurple', '#5865F2'], ['green', '#3BA55D'], ['purple', '#A06BFF'], ['orange', '#FF9F43'], ['white', '#FFFFFF'], ['red', '#ED4245'], ['cyan', '#2CC5D6']];
  function colorHex(key) {
    if (typeof key === 'string' && /^#[0-9a-fA-F]{6}$/.test(key)) return key.toUpperCase();
    for (var i = 0; i < PALETTE.length; i++) if (PALETTE[i][0] === key) return PALETTE[i][1];
    return '#FF8FB8';
  }
  function hsvToHex(h, s, v) {
    h = ((h % 360) + 360) % 360;
    var c = v * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = v - c, r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; } else if (h < 120) { r = x; g = c; } else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; } else if (h < 300) { r = x; b = c; } else { r = c; b = x; }
    function p2(n) { var t = Math.round((n + m) * 255).toString(16); return t.length < 2 ? '0' + t : t; }
    return ('#' + p2(r) + p2(g) + p2(b)).toUpperCase();
  }
  function hexToHsv(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(String(hex || ''));
    if (!m) return { h: 340, s: 0.44, v: 1 };
    var n = parseInt(m[1], 16), r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn, h = 0;
    if (d) { if (mx === r) h = 60 * (((g - b) / d) % 6); else if (mx === g) h = 60 * ((b - r) / d + 2); else h = 60 * ((r - g) / d + 4); }
    if (h < 0) h += 360;
    return { h: h, s: mx ? d / mx : 0, v: mx };
  }

  // ---------- Estado ----------
  var cfg = { incoming: true, outgoing: true, inLang: deviceTarget(), inFrom: 'auto', outLang: 'en', showButton: true, color: '#FF8FB8', builtin: true, off: {}, apis: [] };
  var active = false;
  var unsubs = [];
  var dispatcher = null;
  var status = '...';
  var btnStatus = '';
  var listeners = [];
  var store = null;
  var lastOk = '';
  var editingApi = null;
  var menuOpen = false;                       // menu de idioma del boton (mantener presionado)
  var sendState = { phase: 'idle', lang: '' }; // idle | translating | done | same | fail
  var sendTimer = null;

  var cache = {};     // "lang|texto" -> { t, lang }
  var cacheKeys = [];
  var pending = {};
  var ours = {};      // textos que son traducciones nuestras

  function notify() { for (var i = 0; i < listeners.length; i++) try { listeners[i](); } catch (e) {} }
  function save() { try { if (store) store.set(JSON.parse(JSON.stringify(cfg))); } catch (e) {} }
  function setCfg(k, v) { cfg[k] = v; save(); notify(); }
  function setSend(phase, lang) {
    sendState = { phase: phase, lang: lang || '' };
    if (sendTimer) { clearTimeout(sendTimer); sendTimer = null; }
    if (phase === 'done' || phase === 'same' || phase === 'fail') {
      sendTimer = setTimeout(function () { sendTimer = null; sendState = { phase: 'idle', lang: '' }; notify(); }, 3500);
    }
    notify();
  }

  function putCache(k, v) {
    if (!(k in cache)) { cacheKeys.push(k); if (cacheKeys.length > 800) delete cache[cacheKeys.shift()]; }
    cache[k] = v;
  }

  // ---------- Motor de traduccion (varios proveedores + cola) ----------
  function protect(text) {
    var tokens = [];
    var out = text.replace(/```[\s\S]*?```|`[^`]*`|<a?:\w+:\d+>|<[@#!&][^>]*>|https?:\/\/\S+/g, function (m) {
      tokens.push(m); return '[[' + (tokens.length - 1) + ']]';
    });
    return { out: out, tokens: tokens };
  }
  function restore(text, tokens) {
    var ok = true;
    var res = text.replace(/\[\s*\[\s*(\d+)\s*\]\s*\]/g, function (_, i) { if (tokens[i] === undefined) { ok = false; return ''; } return tokens[i]; });
    for (var i = 0; i < tokens.length; i++) if (res.indexOf(tokens[i]) === -1) ok = false;
    return ok ? res : null;
  }
  function withTimeout(p, ms) {
    return new Promise(function (resolve, reject) {
      var t = setTimeout(function () { reject(new Error('timeout')); }, ms);
      p.then(function (v) { clearTimeout(t); resolve(v); }, function (e) { clearTimeout(t); reject(e); });
    });
  }
  function httpFail(r) {
    return r.text().then(function (b) { throw new Error('HTTP ' + r.status + (b ? ' ' + String(b).replace(/\s+/g, ' ').slice(0, 80) : '')); }, function () { throw new Error('HTTP ' + r.status); });
  }
  function getJSON(url) {
    return withTimeout(fetch(url).then(function (r) {
      if (!r.ok) return httpFail(r);
      return r.json();
    }), 5000);
  }
  var PROVIDERS = [
    function (text, tl) {
      return getJSON('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&dt=t&tl=' + encodeURIComponent(tl) + '&q=' + encodeURIComponent(text)).then(function (d) {
        return { text: (d[0] || []).map(function (s) { return s[0]; }).join(''), lang: d[2] };
      });
    },
    function (text, tl) {
      return getJSON('https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=' + encodeURIComponent(tl) + '&q=' + encodeURIComponent(text)).then(function (d) {
        return { text: (d.sentences || []).map(function (s) { return s.trans; }).join(''), lang: d.src };
      });
    },
    function (text, tl) {
      return getJSON('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text.slice(0, 480)) + '&langpair=Autodetect|' + encodeURIComponent(tl)).then(function (d) {
        var r = d && d.responseData;
        if (!r || !r.translatedText) throw new Error('mymemory');
        return { text: r.translatedText, lang: r.detectedLanguage };
      });
    },
    function (text, tl) {
      var code = tl === 'zh-CN' ? 'zh' : tl === 'zh-TW' ? 'zh_HANT' : tl;
      return getJSON('https://lingva.ml/api/v1/auto/' + encodeURIComponent(code) + '/' + encodeURIComponent(text.slice(0, 900))).then(function (d) {
        if (!d || !d.translation) throw new Error('lingva');
        return { text: d.translation, lang: d.info && d.info.detectedSource };
      });
    }
  ];
  var edgeTok = { v: '', exp: 0 };
  function edgeProvider(text, tl) {
    var code = tl === 'zh-CN' ? 'zh-Hans' : tl === 'zh-TW' ? 'zh-Hant' : tl;
    function tok() {
      if (edgeTok.v && edgeTok.exp > Date.now()) return Promise.resolve(edgeTok.v);
      return withTimeout(fetch('https://edge.microsoft.com/translate/auth').then(function (r) {
        if (!r.ok) return httpFail(r);
        return r.text();
      }), 5000).then(function (t) { edgeTok = { v: String(t).trim(), exp: Date.now() + 8 * 60 * 1000 }; return edgeTok.v; });
    }
    return tok().then(function (t) {
      return withTimeout(fetch('https://api-edge.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + encodeURIComponent(code), {
        method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + t }, body: JSON.stringify([{ Text: text }])
      }).then(function (r) {
        if (!r.ok) { edgeTok.exp = 0; return httpFail(r); }
        return r.json();
      }), 6000);
    }).then(function (d) {
      var x = d && d[0];
      if (!x || !x.translations || !x.translations[0]) throw new Error('edge: respuesta vacia');
      return { text: x.translations[0].text, lang: x.detectedLanguage && x.detectedLanguage.language };
    });
  }
  function lingvaAt(host) {
    return function (text, tl) {
      var code = tl === 'zh-CN' ? 'zh' : tl === 'zh-TW' ? 'zh_HANT' : tl;
      return getJSON(host + '/api/v1/auto/' + encodeURIComponent(code) + '/' + encodeURIComponent(text.slice(0, 900))).then(function (d) {
        if (!d || !d.translation) throw new Error('lingva');
        return { text: d.translation, lang: d.info && d.info.detectedSource };
      });
    };
  }
  var BUILTIN = [['google', PROVIDERS[0]], ['edge', edgeProvider], ['chrome', PROVIDERS[1]], ['mymemory', PROVIDERS[2]], ['lingva', PROVIDERS[3]],
    ['lingva-2', lingvaAt('https://lingva.garudalinux.org')], ['lingva-3', lingvaAt('https://translate.plausibility.cloud')]];
  var preferredName = '';

  // ---------- APIs propias ----------
  function fillTpl(tpl, text, tl, mode) {
    var up = tl === 'en' ? 'EN-US' : tl === 'pt' ? 'PT-BR' : tl.indexOf('zh') === 0 ? 'ZH' : String(tl).split('-')[0].toUpperCase();
    return String(tpl || '').replace(/\{(text|TO|to|from)\}/g, function (_, k) {
      if (k === 'text') return mode === 'json' ? JSON.stringify(String(text)).slice(1, -1) : encodeURIComponent(text);
      if (k === 'TO') return up;
      if (k === 'to') return tl;
      return 'auto';
    });
  }
  var AUTO_TEXT = ['translatedText', 'translation', 'translations.0.text', 'data.translations.0.translatedText', 'responseData.translatedText', 'text', 'result', 'output', 'sentences.0.trans', '0.translations.0.text', '0.0.0'];
  var AUTO_LANG = ['detectedLanguage.language', 'detectedLanguage', 'detected_language', 'translations.0.detected_source_language', 'data.translations.0.detectedSourceLanguage', 'info.detectedSource', 'src', 'source', '0.detectedLanguage.language'];
  function autoPick(d, list) {
    for (var i = 0; i < list.length; i++) { var v = getPath(d, list[i]); if (typeof v === 'string' && v) return v; }
    return undefined;
  }
  function getPath(o, path) {
    if (!path) return undefined;
    var parts = String(path).replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
    for (var i = 0; i < parts.length; i++) { if (o === null || o === undefined) return undefined; o = o[parts[i]]; }
    return o;
  }
  function customProvider(a) {
    return function (text, tl) {
      var url = fillTpl(a.url, text, tl, 'url');
      var headers = {}, hasCT = false;
      String(a.headers || '').split(/\r?\n/).forEach(function (line) {
        var i = line.indexOf(':'); if (i < 1) return;
        var k = line.slice(0, i).trim(), v = line.slice(i + 1).trim();
        if (k) { headers[k] = fillTpl(v, text, tl, 'url').replace(/%20/g, ' '); if (k.toLowerCase() === 'content-type') hasCT = true; }
      });
      var opts = { method: a.method === 'POST' ? 'POST' : 'GET', headers: headers };
      if (opts.method === 'POST') {
        var raw = String(a.body || '').trim();
        var json = raw.charAt(0) === '{' || raw.charAt(0) === '[';
        opts.body = fillTpl(a.body, text, tl, json ? 'json' : 'url');
        if (!hasCT) headers['Content-Type'] = json ? 'application/json' : 'application/x-www-form-urlencoded';
      }
      return withTimeout(fetch(url, opts).then(function (r) {
        if (!r.ok) return httpFail(r);
        return r.text();
      }), 12000).then(function (raw) {
        var d; try { d = JSON.parse(raw); } catch (e) { d = raw; }
        var t = a.path ? getPath(d, a.path) : (typeof d === 'string' ? d : autoPick(d, AUTO_TEXT));
        if (typeof t !== 'string' || !t) throw new Error('respuesta sin texto (ruta: ' + (a.path || 'auto') + ') -> ' + String(raw).replace(/\s+/g, ' ').slice(0, 140));
        var lg = a.langPath ? getPath(d, a.langPath) : (typeof d === 'object' ? autoPick(d, AUTO_LANG) : null);
        return { text: t, lang: lg ? String(lg) : undefined };
      });
    };
  }
  function activeProviders() {
    var list = [];
    (cfg.apis || []).forEach(function (a) { if (a && a.enabled !== false && a.url) list.push(['api:' + (a.name || a.id), customProvider(a)]); });
    if (cfg.builtin !== false || !list.length) {
      var onB = BUILTIN.filter(function (b) { return !(cfg.off && cfg.off[b[0]]); });
      (onB.length ? onB : BUILTIN).forEach(function (b) { list.push(b); });
    }
    return list;
  }
  var running = 0, queue = [];
  function schedule(fn, prio) {
    return new Promise(function (resolve) {
      var job = function () { fn().then(resolve, function () { resolve(null); }).then(function () { running--; pump(); }); };
      if (prio) queue.unshift(job); else queue.push(job);   // los mensajes que envias pasan primero
      pump();
    });
  }
  function pump() { while (running < 2 && queue.length) { running++; queue.shift()(); } }

  var cool = {};   // proveedor -> hasta cuando esta en pausa tras un error
  var stats = {};  // proveedor -> { ok, ms, err }
  var testing = false;
  async function callProviders(text, tl) {
    var errs = [], list = activeProviders(), now = Date.now();
    var ready = list.filter(function (p) { return !(cool[p[0]] > now); });
    if (!ready.length) ready = list;
    ready = ready.slice().sort(function (x, y) { return (x[0] === preferredName ? 0 : 1) - (y[0] === preferredName ? 0 : 1); });
    for (var k = 0; k < ready.length; k++) {
      var p = ready[k];
      var t0 = Date.now();
      try {
        var r = await p[1](text, tl);
        if (r && typeof r.text === 'string' && r.text) { preferredName = p[0]; r.via = p[0]; stats[p[0]] = { ok: true, ms: Date.now() - t0 }; return r; }
        errs.push(p[0] + ': vacio'); cool[p[0]] = Date.now() + 8000; stats[p[0]] = { ok: false, err: 'vacio' };
      } catch (e) {
        var msg = String(e && e.message ? e.message : e);
        cool[p[0]] = Date.now() + (msg.indexOf('429') >= 0 ? 30000 : 8000);
        errs.push(p[0] + ': ' + msg); stats[p[0]] = { ok: false, err: msg };
      }
    }
    throw new Error(errs.join(' | '));
  }

  // Devuelve { t: traduccion|null, lang: idiomaDetectado|null }
  function translate(text, tl, prio) {
    if (!text || !text.trim()) return Promise.resolve({ t: null, lang: null });
    var key = tl + '|' + text;
    if (key in cache) return Promise.resolve(cache[key]);
    var p = protect(text);
    if (!/[A-Za-z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u06FF\u0900-\u097F\u0E00-\u0E7F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/.test(p.out.replace(/\[\[\d+\]\]/g, ''))) return Promise.resolve({ t: null, lang: null });
    return schedule(async function () {
      try {
        var r = await callProviders(p.out, tl);
        lastOk = r.via || lastOk;
        var detected = r.lang ? String(r.lang) : null;
        var res = { t: null, lang: detected };
        var same = detected && detected.toLowerCase().split('-')[0] === tl.toLowerCase().split('-')[0];
        if (!same) {
          var fin = restore(r.text, p.tokens);
          if (fin && fin !== text) res.t = fin;
        }
        putCache(key, res);
        if (status.indexOf('red') === 0) { status = S.ok; notify(); }
        return res;
      } catch (e) {
        status = 'red: ' + String(e && e.message ? e.message : e);
        notify();
        return { t: null, lang: null, err: true };
      }
    }, prio).then(function (r) { return r || { t: null, lang: null }; });
  }

  // ---------- Mensajes recibidos ----------
  // 'auto' = cualquier idioma. Si se elige uno, solo se traducen los mensajes detectados en ese idioma.
  function srcOk(r) {
    if (!cfg.inFrom || cfg.inFrom === 'auto' || !r || !r.lang) return true;
    return String(r.lang).toLowerCase().split('-')[0] === String(cfg.inFrom).toLowerCase().split('-')[0];
  }
  function handleIncoming(msg) {
    if (!active || !cfg.incoming || !msg || typeof msg.content !== 'string' || !msg.content) return;
    if (ours[msg.content]) return;
    var tl = cfg.inLang;
    var key = tl + '|' + msg.content;
    if (key in cache) {
      var c = cache[key];
      if (c.t && srcOk(c)) { ours[c.t] = true; msg.content = c.t; }
      return;
    }
    if (pending[msg.id]) return;
    pending[msg.id] = true;
    var original = msg.content;
    translate(original, tl).then(function (r) {
      delete pending[msg.id];
      if (!active || !r.t || !srcOk(r) || !dispatcher) return;
      ours[r.t] = true;
      try {
        dispatcher.dispatch({ type: 'MESSAGE_UPDATE', message: Object.assign({}, msg, { content: r.t }), otherPluginBypass: true });
      } catch (e) { status = 'red: dispatch ' + String(e); notify(); }
    });
  }

  function hookFlux() {
    var f = V.discord.flux.onFluxEventDispatched;
    unsubs.push(f('MESSAGE_CREATE', function (e) { if (active && e && e.message) handleIncoming(e.message); return e; }));
    unsubs.push(f('MESSAGE_UPDATE', function (e) { if (active && e && e.message && !e.otherPluginBypass) handleIncoming(e.message); return e; }));
    unsubs.push(f('LOAD_MESSAGES_SUCCESS', function (e) {
      if (active && e && Array.isArray(e.messages)) e.messages.slice(0, 30).forEach(function (m) { handleIncoming(m); });
      return e;
    }));
  }

  // ---------- Mensajes enviados (idioma elegido a mano) ----------
  function hookSend(mod) {
    var orig = mod.sendMessage;
    if (typeof orig !== 'function' || orig.__tr) return;
    var wrapped = async function () {
      var args = Array.prototype.slice.call(arguments);
      try {
        var m = args[1];
        if (active && cfg.outgoing && cfg.outLang && m && typeof m.content === 'string' && m.content && m.content.charAt(0) !== '/') {
          var lg = cfg.outLang;
          setSend('translating', lg);
          var r = await translate(m.content, lg, true);
          if (r.t) { ours[r.t] = true; args[1] = Object.assign({}, m, { content: r.t }); setSend('done', lg); }
          else if (r.err) setSend('fail', lg);
          else setSend('same', lg);
        }
      } catch (e) { status = 'red: ' + String(e); setSend('fail', cfg.outLang); }
      return orig.apply(this, args);
    };
    wrapped.__tr = true;
    mod.sendMessage = wrapped;
    unsubs.push(function () { if (mod.sendMessage === wrapped) mod.sendMessage = orig; });
  }

  // ---------- Boton junto al campo de texto ----------
  // Toque: activa/desactiva. Mantener presionado: menu para elegir el idioma de envio.
  function cycleOutLang() {
    var i = 0; for (var k = 0; k < LANGS.length; k++) if (LANGS[k][0] === cfg.outLang) i = k;
    setCfg('outLang', LANGS[(i + 1) % LANGS.length][0]);
  }
  function useListener(R) {
    var st = R.useState(0), force = st[1];
    R.useEffect(function () {
      var l = function () { force(function (n) { return n + 1; }); };
      listeners.push(l);
      return function () { var i = listeners.indexOf(l); if (i >= 0) listeners.splice(i, 1); };
    }, []);
  }

  function LanguageMenu() {
    var R = V.react.React;
    useListener(R);
    var RN = (V.react.ReactNative || V.react.native || {});
    var Modal = RN.Modal, View = RN.View, Txt = RN.Text, Press = RN.Pressable || RN.TouchableOpacity, Scroll = RN.ScrollView;
    if (!active || !menuOpen || !Modal || !View || !Txt || !Press || !Scroll) return null;
    var color = colorHex(cfg.color);
    var h = (RN.Dimensions && RN.Dimensions.get('window').height) || 700;
    var close = function () { menuOpen = false; notify(); };
    var pick = function (code) { menuOpen = false; setCfg('outLang', code); };
    var rows = LANGS.map(function (l) {
      var sel = l[0] === cfg.outLang;
      return jsx.jsxs(Press, { onPress: function () { pick(l[0]); },
        style: { paddingVertical: 14, paddingHorizontal: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: sel ? 'rgba(255,255,255,0.08)' : 'transparent' },
        children: [
          jsx.jsx(Txt, { style: { color: '#F2F3F5', fontSize: 16 }, children: l[1] }, 'n'),
          jsx.jsx(Txt, { style: { color: color, fontSize: 17, fontWeight: 'bold' }, children: sel ? '\u2713' : '' }, 'c')
        ] }, l[0]);
    });
    var sheet = jsx.jsxs(View, { style: { backgroundColor: '#2B2D31', borderRadius: 16, width: '86%', maxWidth: 420, maxHeight: h * 0.72, overflow: 'hidden' }, children: [
      jsx.jsx(Txt, { style: { color: '#F2F3F5', fontSize: 17, fontWeight: 'bold', paddingHorizontal: 18, paddingTop: 16, paddingBottom: 4 }, children: N.menuTitle }, 't'),
      jsx.jsx(Txt, { style: { color: '#B5BAC1', fontSize: 12, paddingHorizontal: 18, paddingBottom: 10 }, children: N.menuHint }, 'h'),
      jsx.jsx(Scroll, { nestedScrollEnabled: true, showsVerticalScrollIndicator: true, keyboardShouldPersistTaps: 'handled', style: { maxHeight: h * 0.72 - 96 }, children: rows }, 's')
    ] });
    return jsx.jsx(Modal, { transparent: true, visible: true, animationType: 'fade', statusBarTranslucent: true, onRequestClose: close, children:
      jsx.jsxs(View, { style: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', justifyContent: 'center', alignItems: 'center' }, children: [
        jsx.jsx(Press, { onPress: close, style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 } }, 'bg'),
        sheet
      ] }) });
  }

  function TranslateButton() {
    var R = V.react.React;
    useListener(R);
    if (!active || !cfg.showButton) return null;
    var D = (V.discord.design && V.discord.design.Design) || {};
    var RN = (V.react.ReactNative || V.react.native || {});
    var color = colorHex(cfg.color);
    var on = cfg.outgoing;
    var press = function () { setCfg('outgoing', !cfg.outgoing); };
    var longPress = function () { if (RN.Modal) { menuOpen = true; notify(); } else cycleOutLang(); };
    var Press = RN.Pressable || RN.TouchableOpacity;
    var View = RN.View, Txt = RN.Text;
    var Frag = R.Fragment;

    var icon;
    if (RN.Image) {
      icon = jsx.jsx(RN.Image, { source: { uri: ICON }, style: { width: 24, height: 24, tintColor: color, opacity: on ? 1 : 0.4 } }, 'i');
    } else {
      var T = D.Text || Txt;
      if (!T) return null;
      icon = jsx.jsx(T, { style: { color: color, opacity: on ? 1 : 0.4, fontSize: 18, fontWeight: 'bold' }, children: '\u6587A' }, 'i');
    }

    // Indicador: traduciendo / traducido / sin cambios / error / idioma actual
    var phase = sendState.phase;
    var code = String(phase === 'idle' ? cfg.outLang : (sendState.lang || cfg.outLang)).split('-')[0].toUpperCase();
    var badge = null;
    if (View && Txt) {
      if (phase === 'translating' && RN.ActivityIndicator) {
        badge = jsx.jsx(View, { style: { position: 'absolute', right: 0, bottom: 2, width: 16, height: 16, borderRadius: 8, backgroundColor: '#1E1F22', alignItems: 'center', justifyContent: 'center' },
          children: jsx.jsx(RN.ActivityIndicator, { size: 'small', color: '#FFFFFF', style: { transform: [{ scale: 0.55 }] } }) }, 'b');
      } else {
        var label, bg;
        if (phase === 'done') { label = '\u2713 ' + code; bg = '#3BA55D'; }
        else if (phase === 'same') { label = '= ' + code; bg = '#4E5058'; }
        else if (phase === 'fail') { label = '! ' + code; bg = '#ED4245'; }
        else { label = on ? code : N.off; bg = on ? '#1E1F22' : '#4E5058'; }
        badge = jsx.jsx(View, { style: { position: 'absolute', right: -2, bottom: 2, minWidth: 16, height: 13, borderRadius: 7, paddingHorizontal: 3, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' },
          children: jsx.jsx(Txt, { style: { color: '#FFFFFF', fontSize: 8, fontWeight: 'bold' }, children: label }) }, 'b');
      }
    }

    var btn;
    if (Press) {
      btn = jsx.jsxs(Press, { onPress: press, onLongPress: longPress, delayLongPress: 350, hitSlop: 8,
        style: { minWidth: 40, minHeight: 40, paddingHorizontal: 6, justifyContent: 'center', alignItems: 'center' },
        children: [icon, badge] }, 'p');
    } else {
      btn = icon;
    }
    return jsx.jsxs(Frag, { children: [btn, jsx.jsx(LanguageMenu, {}, 'm')] });
  }

  var seen = {}, seenList = [];
  var target = { type: null, rank: 99, mode: 'before', name: '' };
  var PATTERNS = [
    [/^ChatInputTextInput$/, 'before'],
    [/ChatInput.*TextInput$/, 'before'],
    [/^ChatInputActions$/, 'after'],
    [/ChatInput.*(Attach|Actions|Plus|Add|Upload)/i, 'after']
  ];
  function nameOf(type) {
    try {
      if (!type || typeof type === 'string') return '';
      return type.displayName || type.name || (type.type && (type.type.displayName || type.type.name)) ||
        (type.render && (type.render.displayName || type.render.name)) || '';
    } catch (e) { return ''; }
  }
  function hookButton() {
    var rt = V.react.ReactJSXRuntime, Frag = V.react.React.Fragment;
    var origs = { jsx: rt.jsx, jsxs: rt.jsxs };
    ['jsx', 'jsxs'].forEach(function (k) {
      var orig = origs[k];
      if (typeof orig !== 'function' || orig.__trw) return;
      var w = function (type, props, key) {
        var el = orig.apply(this, arguments);
        try {
          if (!active) return el;
          var name = nameOf(type);
          if (!name) return el;
          if (!seen[name] && /Chat|Input|Attach|Upload|Plus|Composer|Textbox/i.test(name)) {
            seen[name] = 1; seenList.push(name); if (seenList.length > 50) seenList.shift();
          }
          for (var i = 0; i < PATTERNS.length; i++) {
            if (i < target.rank && PATTERNS[i][0].test(name)) { target = { type: type, rank: i, mode: PATTERNS[i][1], name: name }; break; }
          }
          if (cfg.showButton && type === target.type) {
            var btn = origs.jsx(TranslateButton, {}, 'translator-btn');
            return origs.jsxs.call(this, Frag, { children: target.mode === 'before' ? [btn, el] : [el, btn] }, key);
          }
        } catch (e) {}
        return el;
      };
      w.__trw = true;
      rt[k] = w;
      unsubs.push(function () { if (rt[k] === w) rt[k] = orig; });
    });
    if (rt.jsx.__trw === undefined) btnStatus = S.btnMissing;
  }
  function btnInfo() {
    if (target.type) return S.btnFound + ' (' + target.name + ')';
    return S.btnMissing + '\n' + S.seen + ': ' + (seenList.length ? seenList.join(', ') : '-');
  }

  // ---------- Probar todos los servicios ----------
  async function testAll() {
    if (testing) return;
    testing = true; notify();
    var all = [];
    (cfg.apis || []).forEach(function (a) { if (a && a.url) all.push(['api:' + (a.name || a.id), customProvider(a)]); });
    BUILTIN.forEach(function (b) { all.push(b); });
    var tl = cfg.inLang === 'en' ? 'es' : 'en';
    await Promise.all(all.map(async function (p) {
      var t0 = Date.now();
      try {
        var r = await p[1]('Hello, how are you today?', tl);
        stats[p[0]] = r && r.text ? { ok: true, ms: Date.now() - t0, sample: String(r.text).slice(0, 40) } : { ok: false, err: 'vacio' };
        if (r && r.text) delete cool[p[0]];
      } catch (e) { stats[p[0]] = { ok: false, err: String(e && e.message ? e.message : e) }; }
      notify();
    }));
    testing = false; notify();
  }
  function statText(name) {
    var st = stats[name];
    if (!st) return '';
    return st.ok ? '\u2713 ' + st.ms + ' ms' : '\u2717 ' + String(st.err || '').slice(0, 70);
  }

  // ---------- Prueba de red ----------
  var netReport = '';
  async function testNet() {
    netReport = '...'; notify();
    var tests = [
      ['google', 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=hello'],
      ['mymemory', 'https://api.mymemory.translated.net/get?q=hello&langpair=en|es'],
      ['discord', 'https://discord.com/api/v9/gateway'],
      ['example', 'https://example.com/']
    ];
    var lines = [];
    for (var i = 0; i < tests.length; i++) {
      try { var r = await withTimeout(fetch(tests[i][1]), 8000); lines.push(tests[i][0] + ': HTTP ' + r.status); }
      catch (e) { lines.push(tests[i][0] + ': ' + String(e && e.message ? e.message : e)); }
    }
    netReport = lines.join('\n'); notify();
  }

  // ---------- Ciclo de vida ----------
  function start() {
    active = true;
    status = S.ok;
    try {
      var js = V.jsonStorage;
      if (js && js.getJsonStorage && js.pluginStoragePathFor) {
        store = js.getJsonStorage(js.pluginStoragePathFor(PLUGIN_ID, 'settings.json'), { default: JSON.parse(JSON.stringify(cfg)) });
        store.get().then(function (v) { if (v) { Object.assign(cfg, v); delete cfg.matchReply; if (!cfg.outLang || cfg.outLang === 'off') cfg.outLang = 'en'; cfg.color = colorHex(cfg.color); if (!cfg.inFrom) cfg.inFrom = 'auto'; if (!Array.isArray(cfg.apis)) cfg.apis = []; if (!cfg.off || typeof cfg.off !== 'object') cfg.off = {}; notify(); } }, function () {});
      }
    } catch (e) {}
    try {
      var finders = V.modules.finders;
      unsubs.push(finders.getModules(finders.filters.withProps('dispatch', 'subscribe'), function (m) { dispatcher = m; }));
      unsubs.push(finders.getModules(finders.filters.withProps('sendMessage', 'receiveMessage'), hookSend));
      hookFlux();
    } catch (e) { status = 'red: ' + String(e); }
    try { hookButton(); } catch (e) { btnStatus = S.btnMissing; }
  }
  function stop() {
    active = false;
    for (var u of unsubs.splice(0)) try { u(); } catch (e) {}
    queue.length = 0;
  }

  // ---------- Selector de color tipo Discord (cuadro + tono + hex) ----------
  function ColorPicker() {
    var R = V.react.React, RN = (V.react.ReactNative || V.react.native || {});
    var View = RN.View, Txt = RN.Text, TI = RN.TextInput, Press = RN.Pressable || RN.TouchableOpacity;
    if (!View || !Txt) return null;
    var COLS = 20, ROWS = 14, SVH = 190, HUEH = 26;
    var s1 = R.useState(function () { return hexToHsv(cfg.color); }), hsv = s1[0], setHsv = s1[1];
    var s2 = R.useState(function () { return colorHex(cfg.color); }), hexText = s2[0], setHexText = s2[1];
    var s3 = R.useState(280), W = s3[0], setW = s3[1];
    var ref = R.useRef({ hsv: hsv, w: W });
    var pans = R.useRef(null);
    ref.current.hsv = hsv; ref.current.w = W;
    var clamp = function (x) { return Math.max(0, Math.min(1, x)); };
    function apply(h, commit) {
      ref.current.hsv = h; setHsv(h);
      var hex = hsvToHex(h.h, h.s, h.v);
      setHexText(hex);
      if (commit) setCfg('color', hex);
    }
    if (!pans.current && RN.PanResponder) {
      var make = function (kind) {
        var upd = function (e, commit) {
          var ne = e.nativeEvent, w = ref.current.w || 1, cur = ref.current.hsv;
          if (kind === 'sv') apply({ h: cur.h, s: clamp(ne.locationX / w), v: 1 - clamp(ne.locationY / SVH) }, commit);
          else apply({ h: Math.min(359.9, clamp(ne.locationX / w) * 360), s: cur.s, v: cur.v }, commit);
        };
        return RN.PanResponder.create({
          onStartShouldSetPanResponder: function () { return true; },
          onMoveShouldSetPanResponder: function () { return true; },
          onPanResponderTerminationRequest: function () { return false; },
          onPanResponderGrant: function (e) { upd(e, false); },
          onPanResponderMove: function (e) { upd(e, false); },
          onPanResponderRelease: function (e) { upd(e, true); }
        });
      };
      pans.current = { sv: make('sv'), hue: make('hue') };
    }
    var hueKey = Math.round(hsv.h);
    var grid = R.useMemo(function () {
      var rows = [];
      for (var r = 0; r < ROWS; r++) {
        var cells = [];
        for (var c = 0; c < COLS; c++) cells.push(jsx.jsx(View, { style: { flex: 1, backgroundColor: hsvToHex(hueKey, c / (COLS - 1), 1 - r / (ROWS - 1)) } }, c));
        rows.push(jsx.jsx(View, { style: { flex: 1, flexDirection: 'row' }, children: cells }, r));
      }
      return rows;
    }, [hueKey]);
    var strips = R.useMemo(function () {
      var out = [];
      for (var i = 0; i < 60; i++) out.push(jsx.jsx(View, { style: { flex: 1, backgroundColor: hsvToHex(i / 60 * 360, 1, 1) } }, i));
      return out;
    }, []);

    var cur = hsvToHex(hsv.h, hsv.s, hsv.v);
    var fill = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };
    var svProps = Object.assign({ onLayout: function (e) { setW(e.nativeEvent.layout.width); }, style: { height: SVH, borderRadius: 8, overflow: 'hidden' },
      children: [
        jsx.jsx(View, { pointerEvents: 'none', style: fill, children: grid }, 'g'),
        jsx.jsx(View, { pointerEvents: 'none', style: { position: 'absolute', left: hsv.s * W - 10, top: (1 - hsv.v) * SVH - 10, width: 20, height: 20, borderRadius: 10, borderWidth: 3, borderColor: '#FFFFFF', backgroundColor: cur } }, 'm')
      ] }, pans.current ? pans.current.sv.panHandlers : {});
    var hueProps = Object.assign({ style: { height: HUEH, borderRadius: 8, overflow: 'visible' },
      children: [
        jsx.jsx(View, { pointerEvents: 'none', style: Object.assign({ flexDirection: 'row', borderRadius: 8, overflow: 'hidden' }, fill), children: strips }, 's'),
        jsx.jsx(View, { pointerEvents: 'none', style: { position: 'absolute', left: hsv.h / 360 * W - 4, top: -3, width: 8, height: HUEH + 6, borderRadius: 4, borderWidth: 2, borderColor: '#FFFFFF', backgroundColor: hsvToHex(hsv.h, 1, 1) } }, 'm')
      ] }, pans.current ? pans.current.hue.panHandlers : {});

    var onHex = function (t) {
      var v = String(t).trim();
      setHexText(v.toUpperCase());
      if (/^#?[0-9a-fA-F]{6}$/.test(v)) {
        var hx = (v.charAt(0) === '#' ? v : '#' + v).toUpperCase();
        var h2 = hexToHsv(hx); ref.current.hsv = h2; setHsv(h2); setCfg('color', hx);
      }
    };
    var hexRow = jsx.jsxs(View, { style: { flexDirection: 'row', alignItems: 'center', gap: 12 }, children: [
      jsx.jsx(View, { style: { width: 44, height: 44, borderRadius: 8, backgroundColor: cur } }, 'p'),
      TI ? jsx.jsx(TI, { value: hexText, onChangeText: onHex, autoCapitalize: 'characters', autoCorrect: false, maxLength: 7, placeholder: '#RRGGBB', placeholderTextColor: '#80848E',
        style: { flex: 1, height: 44, borderRadius: 8, paddingHorizontal: 12, fontSize: 16, color: '#F2F3F5', backgroundColor: '#1E1F22' } }, 'h')
        : jsx.jsx(Txt, { style: { color: '#F2F3F5', fontSize: 16 }, children: cur }, 'h')
    ] }, 'hx');
    var quick = Press ? jsx.jsx(View, { style: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 }, children: PALETTE.map(function (c) {
      return jsx.jsx(Press, { onPress: function () { apply(hexToHsv(c[1]), true); }, style: { width: 30, height: 30, borderRadius: 15, backgroundColor: c[1], borderWidth: 2, borderColor: 'rgba(255,255,255,0.25)' } }, c[0]);
    }) }, 'q') : null;

    return jsx.jsxs(View, { style: { gap: 14 }, children: [
      jsx.jsx(Txt, { style: { color: '#B5BAC1', fontSize: 13 }, children: N.colorHint }, 'hint'),
      jsx.jsx(View, svProps, 'sv'),
      jsx.jsx(View, hueProps, 'hue'),
      hexRow,
      quick ? jsx.jsx(Txt, { style: { color: '#B5BAC1', fontSize: 12 }, children: N.quick }, 'qt') : null,
      quick
    ] });
  }

  // ---------- Editor de APIs propias ----------
  var API_PRESETS = [
    ['LibreTranslate', { method: 'POST', url: 'https://libretranslate.com/translate', body: '{"q":"{text}","source":"auto","target":"{to}","api_key":"TU_CLAVE"}', headers: '', path: 'translatedText', langPath: 'detectedLanguage.language' }],
    ['DeepL Free', { method: 'POST', url: 'https://api-free.deepl.com/v2/translate', body: '{"text":["{text}"],"target_lang":"{TO}"}', headers: 'Authorization: DeepL-Auth-Key TU_CLAVE', path: 'translations.0.text', langPath: 'translations.0.detected_source_language' }],
    ['Google Cloud', { method: 'GET', url: 'https://translation.googleapis.com/language/translate/v2?key=TU_CLAVE&q={text}&target={to}&format=text', body: '', headers: '', path: 'data.translations.0.translatedText', langPath: 'data.translations.0.detectedSourceLanguage' }],
    ['Lingva propio', { method: 'GET', url: 'https://TU-INSTANCIA/api/v1/auto/{to}/{text}', body: '', headers: '', path: 'translation', langPath: 'info.detectedSource' }]
  ];
  function ApiEditor(props) {
    var R = V.react.React, RN = (V.react.ReactNative || V.react.native || {});
    var View = RN.View, Txt = RN.Text, TI = RN.TextInput, Press = RN.Pressable || RN.TouchableOpacity;
    if (!View || !Txt || !TI || !Press) return null;
    var existing = null;
    (cfg.apis || []).forEach(function (a) { if (a && a.id === editingApi) existing = a; });
    var s1 = R.useState(function () {
      return existing ? Object.assign({}, existing) : { id: 'a' + Date.now().toString(36), name: '', enabled: true, method: 'GET', url: '', body: '', headers: '', path: '', langPath: '' };
    }), d = s1[0], setD = s1[1];
    var s2 = R.useState(''), out = s2[0], setOut = s2[1];
    var s3 = R.useState(''), outKind = s3[0], setOutKind = s3[1];
    function set(k, v) { setD(function (p) { var n = Object.assign({}, p); n[k] = v; return n; }); }
    var inputStyle = { color: '#F2F3F5', backgroundColor: '#1E1F22', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14 };
    var lbl = function (t, k) { return jsx.jsx(Txt, { style: { color: '#B5BAC1', fontSize: 12, marginBottom: 4 }, children: t }, k); };
    function field(label, key, multi, ph) {
      return jsx.jsxs(View, { children: [lbl(label, 'l'),
        jsx.jsx(TI, { value: d[key], onChangeText: function (t) { set(key, t); }, autoCapitalize: 'none', autoCorrect: false, placeholder: ph || '', placeholderTextColor: '#80848E',
          multiline: !!multi, style: multi ? Object.assign({ minHeight: 72, textAlignVertical: 'top' }, inputStyle) : inputStyle }, 'i')] }, key);
    }
    function btn(label, bg, onPress, key) {
      return jsx.jsx(Press, { onPress: onPress, style: { flex: 1, backgroundColor: bg, borderRadius: 8, paddingVertical: 12, alignItems: 'center' },
        children: jsx.jsx(Txt, { style: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 }, children: label }) }, key);
    }
    function chip(label, on, onPress, key) {
      return jsx.jsx(Press, { onPress: onPress, style: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 16, backgroundColor: on ? '#5865F2' : '#2B2D31' },
        children: jsx.jsx(Txt, { style: { color: '#FFFFFF', fontSize: 13 }, children: label }) }, key);
    }
    function validate() { if (!String(d.url || '').trim()) { setOutKind('err'); setOut(N.needUrl); return false; } return true; }
    function doTest() {
      if (!validate()) return;
      setOutKind(''); setOut(N.testing);
      customProvider(d)('Hello, how are you?', cfg.inLang).then(function (r) {
        setOutKind('ok'); setOut('\u2713 ' + r.text + (r.lang ? '  (' + r.lang + ')' : ''));
      }, function (e) { setOutKind('err'); setOut('\u2717 ' + String(e && e.message ? e.message : e)); });
    }
    function doSave() {
      if (!validate()) return;
      var item = Object.assign({}, d, { name: String(d.name || '').trim() || 'API', url: String(d.url).trim() });
      var list = (cfg.apis || []).filter(function (a) { return a && a.id !== item.id; });
      var idx = -1; (cfg.apis || []).forEach(function (a, i) { if (a && a.id === item.id) idx = i; });
      if (idx >= 0) list.splice(idx, 0, item); else list.push(item);
      setCfg('apis', list); props.onClose();
    }
    function doDelete() { setCfg('apis', (cfg.apis || []).filter(function (a) { return a && a.id !== d.id; })); props.onClose(); }

    return jsx.jsxs(View, { style: { gap: 14 }, children: [
      jsx.jsx(Txt, { style: { color: '#B5BAC1', fontSize: 12 }, children: N.apiHelp }, 'help'),
      lbl(N.presets, 'pl'),
      jsx.jsx(View, { style: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, children: API_PRESETS.map(function (pr) {
        return chip(pr[0], false, function () { setD(function (p) { return Object.assign({}, p, pr[1], { name: p.name || pr[0] }); }); }, pr[0]);
      }) }, 'presets'),
      field(N.apiName, 'name', false, 'Mi API'),
      jsx.jsxs(View, { children: [lbl(N.apiMethod, 'l'), jsx.jsxs(View, { style: { flexDirection: 'row', gap: 8 }, children: [
        chip('GET', d.method !== 'POST', function () { set('method', 'GET'); }, 'g'), chip('POST', d.method === 'POST', function () { set('method', 'POST'); }, 'p'),
        chip(d.enabled === false ? N.disabled : N.enabled, d.enabled !== false, function () { set('enabled', d.enabled === false); }, 'en')
      ] }, 'r')] }, 'method'),
      field(N.apiUrl, 'url', true, 'https://...'),
      d.method === 'POST' ? field(N.apiBody, 'body', true, '{"q":"{text}","target":"{to}"}') : null,
      field(N.apiHeaders, 'headers', true, 'Authorization: Bearer ...'),
      field(N.apiPath, 'path', false, 'translations.0.text'),
      field(N.apiLang, 'langPath', false, 'translations.0.detected_source_language'),
      out ? jsx.jsx(Txt, { style: { color: outKind === 'ok' ? '#3BA55D' : outKind === 'err' ? '#ED4245' : '#B5BAC1', fontSize: 13 }, children: out }, 'out') : null,
      jsx.jsxs(View, { style: { flexDirection: 'row', gap: 10 }, children: [btn(N.test, '#4E5058', doTest, 't'), btn(N.save, '#3BA55D', doSave, 's')] }, 'b1'),
      jsx.jsxs(View, { style: { flexDirection: 'row', gap: 10 }, children: [btn(N.cancel, '#4E5058', function () { props.onClose(); }, 'c'), existing ? btn(N.del, '#ED4245', doDelete, 'd') : null] }, 'b2')
    ] });
  }

  // ---------- Creditos ----------
  var INSPIRED = { es: 'Inspirado en', en: 'Inspired by', pt: 'Inspirado em', fr: 'Inspire de' };
  function creditsText() {
    var t = 'by ' + CREDITS.author + '  \u2022  ' + CREDITS.writtenWith;
    if (CREDITS.inspiredBy.length) {
      t += '\n' + (INSPIRED[uiLang()] || INSPIRED.en) + ': ' + CREDITS.inspiredBy.map(function (c) {
        return c.name + (c.author ? ' (' + c.author + ')' : '') + (c.url ? ' ' + c.url : '');
      }).join(', ');
    }
    return t;
  }

  // ---------- Pantalla de ajustes ----------
  function Settings() {
    var R = V.react.React;
    var st = R.useState(0), force = st[1];
    var pk = R.useState(null), picker = pk[0], setPicker = pk[1];
    R.useEffect(function () {
      var l = function () { force(function (n) { return n + 1; }); };
      listeners.push(l);
      return function () { var i = listeners.indexOf(l); if (i >= 0) listeners.splice(i, 1); };
    }, []);

    var D = (V.discord.design && V.discord.design.Design) || {};
    var RN = (V.react.ReactNative || V.react.native || {});
    var T = D.Text || RN.Text;
    var Box = D.Stack || RN.View;
    var Group = D.TableRowGroup, Row = D.TableRow, SwRow = D.TableSwitchRow, Btn = D.Button;
    if (!T || !Box) return null;
    var Scroll = RN.ScrollView;

    function sw(label, sub, value, onChange) {
      if (SwRow) return jsx.jsx(SwRow, { label: label, subLabel: sub, value: value, onValueChange: onChange }, label);
      return jsx.jsx(Btn || T, { text: label + ': ' + (value ? 'ON' : 'OFF'), onPress: function () { onChange(!value); }, children: label + ': ' + (value ? 'ON' : 'OFF') }, label);
    }
    function nav(label, sub, valueText, onPress, trailing) {
      if (Row) return jsx.jsx(Row, { label: label, subLabel: sub, arrow: true, onPress: onPress,
        trailing: trailing || jsx.jsx(T, { variant: 'text-md/medium', color: 'text-muted', children: valueText }) }, label);
      return jsx.jsx(Btn || T, { text: label + ': ' + valueText, onPress: onPress, children: label + ': ' + valueText }, label);
    }
    function group(title, children) {
      if (Group) return jsx.jsx(Group, { title: title, children: children }, title);
      return jsx.jsxs(Box, { children: [jsx.jsx(T, { children: title }), children] }, title);
    }

    var winH = (RN.Dimensions && RN.Dimensions.get('window').height) || 700;
    var content;
    if (picker === 'color') {
      content = jsx.jsxs(Box, { style: { gap: 16 }, children: [
        group('', [nav(N.back, undefined, '', function () { setPicker(null); })]),
        jsx.jsx(ColorPicker, {}, 'cp'),
        group('', [nav(N.done, undefined, '', function () { setPicker(null); })])
      ] });
    } else if (picker === 'api') {
      content = jsx.jsx(ApiEditor, { onClose: function () { setPicker(null); } }, 'ae');
    } else if (picker) {
      var base = picker === 'from' ? [['auto', N.anyLang]].concat(LANGS) : LANGS;
      var cfgKey = picker === 'in' ? 'inLang' : picker === 'out' ? 'outLang' : 'inFrom';
      var current = cfg[cfgKey];
      var items = [nav(N.back, undefined, '', function () { setPicker(null); })].concat(base.map(function (l) {
        return nav(l[1], undefined, l[0] === current ? '\u2713' : '', function () { setCfg(cfgKey, l[0]); setPicker(null); });
      }));
      content = jsx.jsxs(Box, { children: [group(S.choose, items)] });
    } else {
      content = jsxsList();
    }

    function jsxsList() {
      var hex = colorHex(cfg.color);
      var dotEl = jsx.jsx(Box, { style: { width: 22, height: 22, borderRadius: 6, backgroundColor: hex } });
      var statusText = S.status + ': ' + (status.indexOf('red:') === 0 ? status.slice(5) : status) + '  \u2022  v' + VERSION + '\n' + btnInfo() + (lastOk ? '\n' + N.lastOk + ': ' + lastOk : '') + (netReport ? '\n' + netReport : '');
      return jsx.jsxs(Box, { style: { gap: 16 }, children: [
        group(S.recv, [
          sw(S.recvSw, S.recvSub, cfg.incoming, function (v) { setCfg('incoming', v); }),
          nav(N.inFrom, undefined, langName(cfg.inFrom), function () { setPicker('from'); }),
          nav(S.recvLang, undefined, langName(cfg.inLang), function () { setPicker('in'); })
        ]),
        group(S.send, [
          sw(S.sendSw, S.sendSub, cfg.outgoing, function (v) { setCfg('outgoing', v); }),
          nav(S.defLang, undefined, langName(cfg.outLang), function () { setPicker('out'); })
        ]),
        group(S.btn, [
          sw(S.btnSw, N.menuHint, cfg.showButton, function (v) { setCfg('showButton', v); }),
          nav(S.btnColor, undefined, hex, function () { setPicker('color'); },
            jsx.jsxs(Box, { direction: 'horizontal', align: 'center', spacing: 10, children: [jsx.jsx(T, { variant: 'text-md/medium', color: 'text-muted', children: hex }), dotEl] }))
        ]),
        group(N.apis, [sw(N.builtin, N.builtinSub, cfg.builtin !== false, function (v) { setCfg('builtin', v); })]
          .concat((cfg.apis || []).map(function (a) { return nav(a.name || a.url, statText('api:' + (a.name || a.id)) || undefined, a.enabled === false ? 'OFF' : 'ON', function () { editingApi = a.id; setPicker('api'); }); }))
          .concat([nav(N.addApi, N.addApiSub, '', function () { editingApi = null; setPicker('api'); })])),
        group(N.services, BUILTIN.map(function (b) {
          var off = !!(cfg.off && cfg.off[b[0]]);
          return sw(b[0], statText(b[0]) || undefined, !off, function (v) {
            var o = Object.assign({}, cfg.off || {}); if (v) delete o[b[0]]; else o[b[0]] = true; setCfg('off', o);
          });
        }).concat([nav(testing ? N.testingAll : N.testAll, N.testAllSub, '', function () { testAll(); })])),
        group('', [nav(S.net, S.netSub, '', function () { testNet(); })]),
        jsx.jsx(T, { variant: 'text-sm/normal', color: 'text-muted', style: { paddingHorizontal: 4 }, children: statusText }),
        jsx.jsx(T, { variant: 'text-sm/normal', color: 'text-muted', style: { paddingHorizontal: 4 }, children: creditsText() })
      ] });
    }

    var body = jsx.jsx(Box, { style: { padding: 16 }, children: content });
    // Altura maxima explicita: asi el ScrollView siempre puede deslizar aunque el contenedor no le de alto.
    return Scroll ? jsx.jsx(Scroll, { nestedScrollEnabled: true, keyboardShouldPersistTaps: 'handled', showsVerticalScrollIndicator: true, style: { maxHeight: winH * 0.8 }, children: body }) : body;
  }

export default plugin({
  start() { start(); },
  stop() { stop(); },
  SettingsComponent: Settings,
});
