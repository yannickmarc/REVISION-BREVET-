# 🏆 Révision Brevet 2026 - Application Complète

## ✨ Fonctionnalités Principales

### 🎯 **Personnalisation Complète**
- ✅ **Choix du nombre de questions** : 20, 30 ou 40
- ✅ **Choix des disciplines** : Sélection manuelle ou aléatoire
- ✅ **1 à 6 disciplines** au choix
- ✅ **Questions mélangées** entre les disciplines sélectionnées

### 📊 **Base de Questions**
- ✅ **~200 questions de qualité** (actuellement)
- ✅ **Structure pour 1000+ questions** (facile à compléter)
- ✅ **6 disciplines complètes**

### 💾 **Système de Scores**
- ✅ Score par session
- ✅ Score total sauvegardé
- ✅ Résultats détaillés par discipline
- ✅ Statistiques de performance

## 📁 Structure du Projet

```
revision-brevet-1000q/
├── index.html         - Configuration du plan de révision
├── quiz.html          - Interface du quiz
├── questions.js       - Base de données des questions
└── README.md          - Ce fichier
```

**Taille totale : ~55 Ko** - Ultra-léger !

## 🎓 Contenu Pédagogique

### 📚 **Français** (~40 questions actuellement)
- Grammaire (COD, COI, nature des mots, propositions)
- Conjugaison (temps, modes, auxiliaires)
- Figures de style (métaphore, hyperbole, alexandrin, sonnet)
- Vocabulaire et orthographe

### 🔢 **Mathématiques** (~40 questions actuellement)
- Calcul numérique (racines, fractions, pourcentages, puissances)
- Géométrie (Pythagore, aires, volumes, angles)
- Algèbre (équations, développement, factorisation)
- Probabilités et statistiques

### 🌍 **Histoire-Géographie** (~40 questions actuellement)
- Révolution française et Empire napoléonien
- XIXe siècle (abolition esclavage, Jules Ferry, IIIe République)
- Guerres mondiales (1914-1918, 1939-1945)
- Géographie de France et du monde

### 🧪 **Sciences** (~40 questions actuellement)
- SVT (cellules, génétique, géologie, corps humain)
- Physique-Chimie (formules, états de la matière, électricité)
- Technologie (algorithmes, hardware, réseau)

### 🗣️ **Anglais** (~40 questions actuellement)
- Vocabulaire de base
- Grammaire (temps, conjugaison, pluriels)
- Compréhension et expressions courantes

### 🧠 **EMC** (~40 questions actuellement)
- République française (symboles, institutions)
- Citoyenneté (vote, Parlement, lois)
- Droits et devoirs
- Union Européenne et organisations internationales

## 🚀 Utilisation

### **Étape 1 : Configuration**
1. Choisis le **nombre de questions** (20, 30 ou 40)
2. Choisis le **mode de sélection** :
   - **Manuel** : Sélectionne 1 à 6 disciplines de ton choix
   - **Aléatoire** : Choisis combien de disciplines au hasard (1 à 6)

### **Étape 2 : Révision**
1. Réponds aux questions une par une
2. Valide chaque réponse pour voir l'explication
3. Progresse dans ton quiz personnalisé

### **Étape 3 : Résultats**
1. Consulte ton score global
2. Vois tes résultats **par discipline**
3. Lance une nouvelle révision !

## 📝 Comment Ajouter des Questions

### **Sur GitHub (Le plus simple)**

1. Va sur ton repository GitHub
2. Clique sur le fichier `questions.js`
3. Clique sur l'icône ✏️ "Edit this file"
4. Ajoute tes questions au bon endroit :

```javascript
// Dans la section "francais: [...]"
{
    q: "Ta nouvelle question ?",
    o: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    c: 2,  // Index de la bonne réponse (0, 1, 2 ou 3)
    e: "Explication de la réponse correcte."
},
```

5. Clique sur "Commit changes"
6. ✅ **C'est tout !** Les nouvelles questions apparaissent automatiquement

### **En Local**

1. Clone le repo : `git clone https://github.com/ton-username/revision-brevet.git`
2. Ouvre `questions.js` dans ton éditeur
3. Ajoute tes questions dans la bonne section
4. Sauvegarde le fichier
5. ```bash
   git add questions.js
   git commit -m "Ajout de 10 nouvelles questions en maths"
   git push
   ```

### **Format de Question**

```javascript
{
    q: "La question complète ?",           // Question
    o: [                                    // Options (toujours 4)
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
    ],
    c: 1,                                   // Index bonne réponse (0-3)
    e: "Explication pédagogique complète." // Explication
}
```

**⚠️ Important :**
- Toujours **4 options**
- Index commence à **0** (A=0, B=1, C=2, D=3)
- Virgule **après chaque question** sauf la dernière

## 🎨 Personnalisation

### **Modifier les Couleurs**

Dans `index.html` et `quiz.html`, change le gradient :

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Couleurs suggérées :
- Bleu-violet : `#667eea 0%, #764ba2 100%`
- Orange-rose : `#f093fb 0%, #f5576c 100%`
- Vert-bleu : `#43e97b 0%, #38f9d7 100%`

### **Modifier les Nombres de Questions**

Dans `index.html`, ligne ~175 :

```html
<button class="option-btn" onclick="selectQuestionCount(20)">20 questions</button>
<button class="option-btn" onclick="selectQuestionCount(30)">30 questions</button>
<button class="option-btn" onclick="selectQuestionCount(40)">40 questions</button>
<!-- Ajoute tes propres valeurs ! -->
<button class="option-btn" onclick="selectQuestionCount(50)">50 questions</button>
```

## 🌐 Mise en Ligne

### **Option 1 : Netlify Drop** ⚡ (30 secondes)

1. Va sur https://app.netlify.com/drop
2. Glisse-dépose **tous les fichiers** du dossier
3. ✅ Ton site est en ligne avec un lien unique !

### **Option 2 : GitHub Pages** 🎯 (Recommandé)

1. Crée un repository sur GitHub
2. Upload tous les fichiers (index.html, quiz.html, questions.js)
3. Va dans **Settings** → **Pages**
4. Source : **main branch**
5. Ton site sera sur : `https://ton-username.github.io/revision-brevet/`

**Avantage** : Chaque modification sur GitHub met automatiquement à jour ton site !

### **Option 3 : Vercel**

1. Connecte ton repository GitHub à Vercel
2. ✅ Déploiement automatique à chaque commit

## 📱 Partage avec les Élèves

Une fois en ligne :
- 📧 **Email** : Envoie le lien par Pronote/email
- 📱 **QR Code** : Crée un QR code sur https://www.qr-code-generator.com
- 🔗 **ENT** : Intègre le lien dans ton ENT
- 💬 **Réseaux** : Partage sur les réseaux de l'établissement

## 🔧 Support Technique

### **L'application ne charge pas**
- Vérifie que tous les fichiers sont dans le même dossier
- Essaie avec un autre navigateur (Chrome, Firefox, Edge)
- Ouvre la console (F12) pour voir les erreurs

### **Les questions ne changent pas**
- Rafraîchis la page (F5 ou Ctrl+R)
- Vide le cache du navigateur

### **Le score ne se sauvegarde pas**
- Vérifie que les cookies sont autorisés
- Le mode navigation privée peut bloquer le localStorage

## 💡 Idées d'Amélioration

Tu peux facilement ajouter :
- ✨ **Plus de disciplines** (Physique, Chimie séparées)
- 🎯 **Niveaux de difficulté** (Facile, Moyen, Difficile)
- 📊 **Graphiques de progression**
- 🏅 **Badges et récompenses**
- ⏱️ **Mode chronomètre**
- 🌙 **Mode sombre**
- 🔊 **Mode audio**

## 📊 Progression de la Base

| Discipline | Questions actuelles | Objectif |
|------------|-------------------|----------|
| Français | ~40 | 150+ |
| Mathématiques | ~40 | 150+ |
| Histoire-Géo | ~40 | 150+ |
| Sciences | ~40 | 150+ |
| Anglais | ~40 | 150+ |
| EMC | ~40 | 150+ |
| **TOTAL** | **~240** | **1000+** |

## 🎯 Conformité Programmes

✅ **Programmes officiels du cycle 4** (5ème, 4ème, 3ème)  
✅ **Bulletins Officiels de l'Éducation Nationale**  
✅ **Niveau attendu pour le DNB 2026**  

## 📄 Licence

Application libre pour l'éducation 🎓  
Créée pour aider les élèves de 3ème à réviser le Brevet.

## 🙏 Contribution

N'hésite pas à :
- Ajouter des questions
- Corriger des erreurs
- Améliorer les explications
- Partager avec d'autres enseignants

---

**Bon courage pour le brevet ! 🌟**

*Version 1.0 - Février 2026*
