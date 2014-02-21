Intégration Maboumine
=====================
*(dernier mise à jour 13/01/2014)*




Grunt
-----
- Ce projet utilise Grunt :
    - Installer Grunt si pas déjà installé : [documentation](http://docs.tki.la/docs/tequila-divers/tools/grunt)
    - Installer les dépendances du projet : lancer "npm install" dans une ligne de
      commande ouverte à la racine de l'inté.
- Pour compiler les fichiers Sass :
    - Lancer "grunt" dans une ligne de commande à la racine de l'inté. Les modifications
      css/js/img/php sont injectées automatiquement dans le navigateur.

### Pour réaliser les tâches indépendamment :
- Pour compiler les fichiers Sass (sans les commentaires de débug) :
    - lancer "grunt css".
- Pour optimiser les images du projet :
    - Lancer "grunt img".
- Pour concatener et minifier les fichiers js du thème après modification des sources :
    - Lancer "grunt js".
- Pour vérifier le code js avec jsHint :
    - Lancer "grunt jshint".

### Pour la mise en prod :
- Pour préparer le thème (css/js/img) avant de commiter :
    - Lancer "grunt theme".