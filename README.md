# Kit Boussole : offres d'emploi à jour

Fichier `offres.json` : offres d'emploi **publiques** de l'Hérault (relevé France Travail + offres partenaires), par métier.
Il est lu par le Kit Boussole installé sur les PC des structures, quand il y a internet, pour mettre ses annonces à jour.
Mis à jour automatiquement le lundi et le jeudi matin. Aucune donnée sur les personnes accompagnées.

## Dossier `appli/` : le Kit Boussole installable

Le Kit Boussole et le Code de la route, en appli installable depuis Chrome (icône sur le bureau ou le téléphone, fenêtre à part, marche sans internet une fois ouverte).
Adresse (quand GitHub Pages est activé) : https://ingrid-y-r.github.io/kit-boussole-offre-d-emploie-mise-a-jour/appli/

- **Seulement le code et les images de l'appli.** Aucune donnée sur les personnes accompagnées n'est ici, ni aucun code d'échange de structure.
- **Les réponses restent sur l'appareil** (stockage local du navigateur). Les échanges avec la CIP passent par le fichier verrouillé, comme avant.
- **Le service worker** (`appli/sw.js`) garde sur l'appareil une copie des fichiers de l'appli, pour qu'elle s'ouvre sans internet. Il ne lit pas les données et n'envoie rien.
- **À savoir (RGPD)** : GitHub (société américaine) enregistre l'adresse IP des appareils qui ouvrent l'appli, pour sa sécurité. C'est écrit dans la fiche DPO et la notice.
- Le pack ACCES « sans serveur » (raccourci .bat) n'utilise pas ce dossier.
- Refaire le dossier : `gen_appli_installable.py` (dans le dossier de travail du Kit, `Appli-installable/scripts/`).
