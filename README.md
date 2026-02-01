# 🏆 Révision Brevet 2026 - Version Multi-Fichiers

## ✅ Avantages de cette version

- **📁 Fichiers légers** : Chaque fichier fait environ 14 Ko
- **⚡ Chargement rapide** : Pas besoin de charger toutes les matières d'un coup
- **🔄 Navigation facile** : Liens entre les pages
- **💾 Score sauvegardé** : Ton score total persiste entre les sessions
- **🎲 Questions aléatoires** : 10 questions différentes à chaque fois

## 📦 Contenu

```
📁 revision-brevet-multi/
├── index.html          (7,6 Ko)  - Page d'accueil
├── francais.html       (15 Ko)   - Quiz Français
├── maths.html          (14 Ko)   - Quiz Mathématiques
├── histoire-geo.html   (14 Ko)   - Quiz Histoire-Géo
├── sciences.html       (14 Ko)   - Quiz Sciences
├── anglais.html        (14 Ko)   - Quiz Anglais
└── emc.html            (15 Ko)   - Quiz EMC
```

**Total : 94 Ko seulement !**

## 🚀 Utilisation

### Option 1 : Utilisation locale (hors ligne)

1. **Télécharge** le dossier complet
2. **Ouvre** `index.html` dans ton navigateur
3. **Clique** sur une matière pour commencer
4. **Profite** ! Ça fonctionne même sans internet

### Option 2 : Mise en ligne

#### A. GitHub Pages (Recommandé)

1. Crée un repository sur GitHub
2. Upload tous les fichiers HTML
3. Active GitHub Pages dans Settings
4. Ton site sera sur : `https://ton-username.github.io/nom-repo/`

#### B. Netlify Drop (Ultra-rapide)

1. Va sur https://app.netlify.com/drop
2. Glisse-dépose **TOUT LE DOSSIER** `revision-brevet-multi`
3. Ton site est en ligne en 30 secondes !

⚠️ **Important** : Il faut uploader **tous les fichiers ensemble**, pas un seul !

## 💡 Fonctionnalités

### Pour les élèves

- ✅ 6 matières complètes (90 questions au total)
- ✅ 10 questions aléatoires par quiz
- ✅ Explications détaillées pour chaque réponse
- ✅ Système de points (10 points par bonne réponse)
- ✅ Score total cumulé sauvegardé
- ✅ Design moderne et responsive
- ✅ Fonctionne sur mobile, tablette, ordinateur

### Navigation

- **Page d'accueil** → Choix de la matière
- **Page de quiz** → 10 questions avec validation
- **Bouton "Retour"** → Revenir à l'accueil
- **"Nouvelles questions"** → Refaire la même matière

## 🎯 Comparaison des versions

| Caractéristique | Version 1 fichier | Version multi-fichiers |
|----------------|-------------------|------------------------|
| Taille totale | 91 Ko | 94 Ko |
| Taille par page | 91 Ko | 7-15 Ko |
| Chargement | Plus lent | Ultra-rapide |
| Navigation | Interne | Entre pages |
| Facilité maintenance | Difficile | Facile |
| **Recommandation** | ❌ | ✅ **Meilleure option** |

## 🔧 Personnalisation

### Ajouter des questions

Ouvre le fichier de la matière (ex: `francais.html`)

Trouve la section `const questions = [...]`

Ajoute une nouvelle question :
```javascript
{
    q: "Ma nouvelle question ?",
    o: ["Option A", "Option B", "Option C", "Option D"],
    c: 2,  // Index de la bonne réponse (0-3)
    e: "Explication de la réponse."
}
```

### Changer les couleurs

Dans chaque fichier HTML, modifie la ligne :
```css
background: linear-gradient(135deg, #couleur1 0%, #couleur2 100%);
```

## 📱 Partage avec tes élèves

Une fois en ligne, tu peux :

1. **Envoyer le lien** par email ou Pronote
2. **Créer un QR code** avec https://www.qr-code-generator.com
3. **Intégrer** dans ton ENT
4. **Partager** sur les réseaux sociaux de l'établissement

## ❓ Besoin d'aide ?

Si tu as des questions ou des problèmes :
- Vérifie que tous les fichiers sont dans le même dossier
- Ouvre la console du navigateur (F12) pour voir les erreurs
- Teste d'abord en local avant de mettre en ligne

## 📄 Licence

Application libre pour l'éducation 🎓

Bon courage pour le brevet ! 🌟
