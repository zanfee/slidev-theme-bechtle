---
theme: ./
layout: cover
class: border-15
---

# Entwicklung einer Lösung zum Monitoring von AFI Invoice

Eine Projektarbeit von Jan Fröhlich

Neckarsulm | 26.09.2022 | Bechtle AG

---

# Agenda

- Problemstellung
- Vorgehen
- Ergebnisse

---
layout: image-right
image: assets/bechtle.jpg
---

# Rechnungsverarbeitung

Bechtle ist ein IT-Handelsunternehmen

<div class="absolute bottom-25">
```mermaid
%%{init: {'theme':'forest'}}%%
flowchart TD
    B -- Produkte --> C
    B[Bechtle] -- Ausgangsrechnungen --> C[Kunden]
```
</div>

---
layout: image-right
image: assets/bechtle.jpg
---

# Rechnungsverarbeitung

Bechtle ist ein IT-Handelsunternehmen

<div class="absolute bottom-25">
```mermaid
%%{init: {'theme':'forest'}}%%
flowchart TD
    A -- Produkte --> B
    A[Lieferanten] -- Eingangsrechnungen --> B
    B -- Produkte --> C
    B[Bechtle] -- Ausgangsrechnungen --> C[Kunden]
```
</div>

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
