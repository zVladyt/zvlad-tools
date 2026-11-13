# zVlad's Tools

Plugins for [Valenced](https://github.com/Valenced/valenced) by **zVladyt**, built from the official plugin template.

> **Authorship:** the code of these plugins is **written by Claude** (an AI assistant made by Anthropic). The ideas, direction, testing and publishing are by **zVladyt**. Some plugins are original ideas of zVladyt; others are inspired by, or fix, plugins made by other people. Credit for those is given in [Credits](#credits) below and inside each plugin (in its settings screen), as it is added.

| Plugin | ID | Description |
| --- | --- | --- |
| **Translator** | `zvladyt.tools.translator` | Translates the messages you receive and the messages you send. |

## Install

1. In Valenced, open **Settings → Plugins → Advanced**.
2. Paste this URL in **Repository URL** and tap **Add repository**:

   ```
   https://zvladyt.github.io/zvlad-tools/index.json
   ```

3. Install **Translator** from the list.

Or download a `.zip` from the [Releases](../../releases) page and use **Install from file**.

## Translator

- **Received messages**: any language is detected and translated into yours. You can limit it to one source language.
- **Sent messages**: translated into the language you choose before sending.
- **Chat button** next to the text field: tap to turn sending translation on or off, long-press to pick the language. The icon colour is configurable.
- **Several services with automatic fallback**: Google, Microsoft Edge, MyMemory, Lingva and more. Each can be turned off, and a *Test all services* button shows which ones work on your phone and how fast.
- **Your own API**: add any translation API (LibreTranslate, DeepL, Google Cloud, a Lingva instance...). Presets included; the response path can be left empty and is detected automatically.
- **Interface** follows your phone language (es, en, pt, fr, de, it, ru, ja, ko, zh).
- Mentions, emojis, links and code blocks are never translated.

### Privacy: read this first

To translate, the plugin **sends the text of messages to third-party translation services** (by default Google, Microsoft, MyMemory and Lingva instances, or the API you configure). Those messages leave your phone and are processed under each provider's own policy. Do not use it in conversations you consider private or sensitive. Turn the plugin off, or disable the services you do not trust, in its settings.

### Known limitations

- The built-in services are public endpoints that are **not official, documented APIs**. They can change, rate-limit or stop working at any time. Add your own API for something stable.
- The chat button is placed by searching Discord's UI at runtime. A Discord update can move it. If it does not show up, the plugin settings list the components it saw; please open an issue with that list.
- Translations of received messages appear a moment after the original message.

## Credits

- **Author and maintainer:** [zVladyt](https://github.com/zVladyt), who provides the ideas, direction, testing and publishing.
- **Code:** written by Claude, an AI assistant by [Anthropic](https://www.anthropic.com), from zVladyt's instructions.

Plugins that are inspired by, or fix, the work of other people credit them here and in the plugin itself:

| Plugin | Original idea or inspiration | Author | Link |
| --- | --- | --- | --- |
| Translator | _original idea by zVladyt_ | zVladyt | - |

If you made something one of these plugins was inspired by and you are not credited, please open an issue and it will be fixed.

## Español

**Autoría:** el código de estos plugins lo escribe **Claude** (un asistente de IA creado por Anthropic). Las ideas, la dirección, las pruebas y la publicación son de **zVladyt**. Algunos plugins son ideas originales de zVladyt y otros están inspirados en, o arreglan, plugins de otras personas; los créditos se indican en la sección *Credits* y dentro de cada plugin (en su pantalla de ajustes).

Plugins para Valenced. **Traductor** traduce los mensajes que recibes (cualquier idioma al tuyo) y los que envías (al idioma que elijas), con botón junto al chat, varios servicios con respaldo automático y soporte para tu propia API.

**Privacidad:** para traducir, el plugin envía el texto de los mensajes a servicios de terceros (Google, Microsoft, MyMemory, Lingva o tu propia API). No lo uses en conversaciones privadas o sensibles. Puedes apagar el plugin o los servicios en sus ajustes.

**Instalar:** Ajustes → Plugins → Advanced → pega la URL de arriba en *Repository URL* → *Add repository* → instala **Traductor**.

## For maintainers

This repository follows the Valenced plugin template. Pushing a new `version` in a plugin's `manifest.json` to `main` builds and publishes it.

One-time setup:

1. Create the repository as `zvlad-tools` (or change the URL above).
2. Add the repository secret `READ_PACKAGES_TOKEN` (a token that can **only** read packages) so the build can download the Valenced API, and the variable `ACKNOWLEDGE_PR_SECURITY_WARNING=true` (see `.github/workflows/validate.yml`).
3. After the first release, enable **GitHub Pages** from the `gh-pages` branch.

Local build: `bun install && bun run build translator` (JS bundle) or `./gradlew packageAllPlugins` (ZIPs in `build/dist`).

## License

GPL-3.0, see [LICENSE](LICENSE).
