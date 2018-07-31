# babylonjs hands-on

## 1. Vorbereitungen

### 1.1.Node installieren:

Windows: https://nodejs.org/en/download/

MAC: https://nodejs.org/en/download/package-manager/#macos (über brew)

Linux: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions (über apt-get)

### 1.2. Node-Modules installieren

Auf der Bash/Command-Line in das Verzeichnis navigieren, in welchem dieses Projekt liegt. Dort folgenden Befehl ausführen:

```javascript
npm install
```

### 1.3. Dev-Server starten

Der Dev-Server, auf welchem die Seite inklusive Java-Script ausgeführt wird, kann mit dem folgenden Befehl auf der 
Bash/CMD im Projekt-Verzeichnis gestartet werden:

```javascript
npm start
```

Der Server ist nun im Default-Zustand unter http://localhost:8080 erreichbar.

## 2. Was wird verwendet

npm - Package Manager von Node (https://docs.npmjs.com/)

Babylon.js - 3D Gameing Engine von Microsoft basierend auf WebGl (https://doc.babylonjs.com/)

Webpack - Build und Dev Server (https://webpack.js.org/configuration/dev-server/)

## 3. Aufgaben

### 3.1. Haus bauen

Baue dir ein einfaches Haus mit Babylon.js.
Dieses Haus sollte recht minialisitisch gehalten werden.
Es soll ein rotes Dach haben und auf einer grünen Fläche stehen, welche den Garten um das Haus darstellen soll.
Die Farbe der Wände kannst du frei wählen.

### 3.2. Nachbarschaft bauen

Baue um dein Haus das Dörfchens Minihausen auf.
Minihausen besteht aus 5 Häusern in denen 5 verschiedene Familien wohnen.
Das Dorf soll einheitlich aussehen, also sind alle Häuser vom selben Bautyp und aus den gleichen Materialien gebaut 
worden.

### 3.3. Haus-Daten anzeigen beim Klick auf ein Haus

Wenn auf ein Haus geklickt wird, soll die jeweilige Adresse und die Vornamen der Bewohner in einem extra Fenster 
angezeigt werden.
Das Fenster soll wieder über einen X-Button geschlossen werden können.

#### 3.4. Familien in Minihausen:

- Alfred und Magareth Hausen, Kleine Straße 1, 11009 Minihausen
- Mina, David, Alex, Lisa Tupper, Kleine Straße 3, 11009 Minihause
- Luke Wagner, Kleine Straße 2, 11009 Minihause
- Hildegard Tupper, Kleine Straße 4, 11009 Minihausen
- *Du*, Kleine Straße 5, 11009 Minihausen

### 3.5. Sonne hinzufügen

Erstelle nun eine Sonne.
Die Sonne sollte um das Dörfchen kreisen und je nach Lage die Häuser beleuchten bzw. im Dunkeln lassen.

### 3.6. Importieren von existierenden Haus

Es ist eine weitere Familie ins Dörfchen gezogen, die allerdings etwas speziell ist...
Importiere das Haus für Wilhelmine und Gerhard Dings von "https://models.babylonjs.com/haunted_house.glb" und füge es der Nachbarschaft 
hinzu.

### 3.7. Make it your own house

Füge deinem eigenen Haus oder Garten etwas Individuelles hinzu.