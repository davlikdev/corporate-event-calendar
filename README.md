# React Event Calendar

Dies ist eine Webanwendung zur Veranstaltungsplanung und Verwaltung eines persönlichen Kalenders. Das Projekt wurde entwickelt, um Fähigkeiten in der Arbeit mit React, strikter Typisierung durch TypeScript und globalem State-Management mit Redux zu demonstrieren.

[Demo ansehen](https://davlikdev.github.io/corporate-event-calendar)

## 📋 Funktionen

* **Authentifizierung:** Simulation der Anmeldung mit Validierung von Benutzername und Passwort.
* **Veranstaltungskalender:** Interaktiver Kalender (basierend auf Ant Design) mit Umschaltmöglichkeit zwischen Monaten und Jahren.
* **Erstellung von Ereignissen:** Hinzufügen von Terminen an einem bestimmten Datum über ein Modal-Fenster.
* **Gastzugriff:** Möglichkeit, Gäste zu einem Ereignis einzuladen (das Ereignis wird sowohl im Kalender des Autors als auch des ausgewählten Gastes angezeigt).
* **Validierung:** Überprüfung von Formularen auf Pflichtfelder und Sperre für die Erstellung von Ereignissen in der Vergangenheit.
* **Datenspeicherung:** Alle Ereignisse und der Authentifizierungsstatus werden im `localStorage` gespeichert, sodass keine Daten beim Neuladen der Seite verloren gehen.

## 🛠 Technologien

Das Projekt verwendet folgenden Technologie-Stack:

* **[React](https://reactjs.org/):** JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen.
* **[TypeScript](https://www.typescriptlang.org/):** Strenge Typisierung für erhöhte Code-Zuverlässigkeit und Wartbarkeit.
* **[Redux](https://redux.js.org/):** State-Manager zur Verwaltung des globalen Anwendungszustands (Benutzer, Ereignisse, Fehler).
* **[Ant Design](https://ant.design/):** UI-Framework für React (vorgefertigte Komponenten: Kalender, Formulare, Modals, Buttons).
* **[React Router DOM](https://reactrouter.com/):** Routing für die Navigation zwischen Login- und Kalenderseiten.
* **Moment.js:** Bibliothek für die Arbeit mit Datum und Zeit.

## 🚀 Installation und Start

Befolgen Sie diese Schritte, um das Projekt lokal auszuführen:

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/dein-nutzername/repo-name.git](https://github.com/dein-nutzername/repo-name.git)
    ```

2.  **In das Projektverzeichnis wechseln:**
    ```bash
    cd repo-name
    ```

3.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

4.  **Entwicklungsserver starten:**
    ```bash
    npm start
    ```

Die Anwendung wird unter `http://localhost:3000` verfügbar sein.

## 🔐 Zugangsdaten für Testzwecke

Da das Backend im Projekt simuliert wird (Mock-Daten), verwenden Sie bitte folgende Zugangsdaten für den Login (basierend auf der Datei `users.json`):

| Benutzername | Passwort |
| :--- | :--- |
| **user** | `123` |
| **Аксенов Лаврентий Тимурович** | `OcVF4lIU184PLeu` |
| **Иларион Гаврилович Фадеев** | `2uFkTnblaGWnd4E` |
| **Гришин Эмиль Иосипович** | `yP5oAJI0xV93xmB` |
