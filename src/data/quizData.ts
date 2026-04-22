export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: Record<string, QuizQuestion[]> = {

  // ================================================================
  // TOME 2 — Le Miroir de l'Âme (Ikhlas & Shukr)
  // ================================================================

  t2c1: [
    { question: "Comment s'appelle le nouveau garçon qui arrive à l'école de Chefchaouen ?", options: ["Karim", "Samir", "Kamal", "Youssef"], correctIndex: 1, explanation: "Samir vient de Tanger et ses parents se sont installés à Chefchaouen. Il excelle en mathématiques, en sport et même en calligraphie, ce qui éveille la jalousie chez Nawfel." },
    { question: "Quelle est l'ombre noire et mouvante que Nawfel aperçoit pour la première fois ?", options: ["Al-Ghadab", "Al-Jabbara", "Al-Hasad (الحسد)", "Al-Bukhl"], correctIndex: 2, explanation: "Al-Hasad (الحسد) est la jalousie. Nawfel la voit sous un figuier à l'école, puis dans le miroir du cordonnier. Elle grandit à chaque pensée envieuse." },
    { question: "Que signifie le mot Ikhlas (الإخلاص) ?", options: ["La patience", "La sincérité pure", "La gratitude", "Le courage"], correctIndex: 1, explanation: "L'Ikhlas est la sincérité pure — faire les choses uniquement pour le plaisir d'Allah, sans chercher la louange des gens. Nawfel montre les premiers signes d'Ikhlas en reconnaissant honnêtement sa jalousie." },
    { question: "Quel hadith Sidi Mu'adh cite-t-il à propos de la jalousie ?", options: ["La jalousie est une maladie du corps", "La jalousie consume les bonnes actions comme le feu consume le bois", "La jalousie est le pire des péchés", "La jalousie rend aveugle"], correctIndex: 1, explanation: "Le Prophète صلى الله عليه وسلم a dit que la jalousie consume les bonnes actions comme le feu consume le bois sec. C'est l'un des péchés du cœur les plus destructeurs." },
    { question: "Où Nawfel voit-il pour la première fois son ombre prendre forme ?", options: ["À la mosquée", "Dans la vitrine du cordonnier", "À l'école", "Chez Sidi Mu'adh"], correctIndex: 1, explanation: "En passant devant la boutique du vieux cordonnier, Nawfel voit son reflet dans un miroir ancien. Derrière lui, l'ombre noire d'Al-Hasad est visible avec un visage pâle et une bouche tordue." },
  ],

  // ================================================================
  // TOME 3 — Le Désert de l'Épreuve (Al-Tawadu' & Al-Karam)
  // ================================================================

  t3c1: [
    { question: "Comment s'appelle la sensation de sécheresse spirituelle que Nawfel ressent ?", options: ["Al-Qabd (la contraction)", "Al-Basr", "Al-Fath (l'expansion)", "Al-Huzn"], correctIndex: 0, explanation: "Al-Qabd (القبض) est la contraction du cœur — une période où les prières semblent vides et le dhikr ne produit plus sa douceur habituelle. Sidi Mu'adh explique que c'est une épreuve d'amour d'Allah." },
    { question: "Comment Wassim décrit-il le cœur de Nawfel quand il le voit avec sa Basira ?", options: ["Il est tout noir", "Il est tout gris, comme le sable sans eau", "Il est tout rouge", "Il brille comme le soleil"], correctIndex: 1, explanation: "Wassim dit : « Ton cœur est tout gris. Avant il était tout doré et lumineux. Maintenant il ressemble au sable quand il n'y a plus d'eau. » Sa Basira lui permet de voir l'état spirituel de Nawfel." },
    { question: "Quel hadith Sidi Mu'adh cite-t-il sur le cœur du croyant ?", options: ["« Le cœur du croyant est entre deux doigts du Tout Miséricordieux »", "« Le cœur du croyant est pur »", "« Le cœur du croyant est fort »", "« Le cœur du croyant est guidé »"], correctIndex: 0, explanation: "Le Prophète ﷺ a dit que le cœur du croyant est entre deux doigts du Tout Miséricordieux, et Il le retourne comme Il le souhaite. La sécheresse est un test de fidélité." },
    { question: "Quelle créature Nawfel rencontre-t-il dans le désert intérieur ?", options: ["Al-Jabbara", "Al-Bukhl (البخل) — le Ver de l'Avarice", "Al-Riya", "Al-Ghadab"], correctIndex: 1, explanation: "Al-Bukhl (البخل) est le Ver de l'Avarice, une créature faite de sable noir qui absorbe toute l'eau et la lumière de l'oasis, ne donnant jamais rien en retour." },
    { question: "Quelle sourate Nawfel récite-t-il avant de s'endormir pour le voyage intérieur ?", options: ["Al-Fatiha", "Al-Falaq", "Al-Ikhlas", "Al-Mulk"], correctIndex: 1, explanation: "Sidi Mu'adh lui enseigne de réciter la sourate Al-Falaq qui demande la protection d'Allah contre le mal des créatures et contre l'envie des envieux." },
  ],

  // ================================================================
  // TOME 4 — Le Voile et la Lumière (Hikma & Rahma)
  // ================================================================

  t4c1: [
    { question: "Quel nouveau monstre Nawfel découvre-t-il dans ce chapitre ?", options: ["Al-Bukhl", "Al-Riya (الرياء) — l'Ostentation", "Al-Ghadab", "Al-Hasad"], correctIndex: 1, explanation: "Al-Riya (الرياء) est l'ostentation — le désir d'être vu et admiré pour ses actes d'adoration. C'est un monstre qui se cache à l'intérieur du bien que Nawfel fait." },
    { question: "Que fait la vieille Fatima quand elle voit Nawfel ?", options: ["Elle l'ignore", "Elle l'appelle un wali (saint)", "Elle lui donne de l'argent", "Elle le gronde"], correctIndex: 1, explanation: "La vieille Fatima dit publiquement que Nawfel est un wali (un saint) car sa voix fait pleurer les oiseaux. Ces compliments réveillent l'orgueil caché de Nawfel." },
    { question: "Quelle question Sidi Mu'adh pose-t-il qui trouble Nawfel ?", options: ["« Sais-tu réciter le Coran ? »", "« Pour qui priais-tu quand tu as récité la sourate Al-Mulk ? »", "« Combien de prières as-tu faites ? »", "« As-tu jeûné le Ramadan ? »"], correctIndex: 1, explanation: "Quand Sidi Mu'adh demande pour qui Nawfel priait, il réalise qu'il priait en partie pour être admiré par Wassim. C'est le moment où il reconnaît Al-Riya en lui." },
    { question: "Comment Al-Riya apparaît-il dans le rêve de Nawfel ?", options: ["Comme un dragon noir", "Comme un ange de lumière avec des ailes blanches et des miroirs dorés", "Comme un vieillard", "Comme un serpent"], correctIndex: 1, explanation: "Al-Riya prend la forme d'un ange magnifique aux ailes blanches, entouré de miroirs dorés. Chaque miroir montre une version embellie de Nawfel — plus grand, plus sage, plus saint." },
    { question: "Comment Nawfel vainc-il Al-Riya ?", options: ["En détruisant les miroirs", "En détournant les yeux des miroirs et en affirmant : « Allah regarde le cœur, pas l'apparence »", "En priant très fort", "En s'enfuyant"], correctIndex: 1, explanation: "Quand Nawfel détourne les yeux des miroirs embellis et regarde la créature en face, la beauté se fissure et révèle le vide en dessous. Nawfel déclare : « Allah regarde le cœur, pas l'apparence. »" },
  ],

  // ================================================================
  // TOME 5 — Al-Mutma'inna (L'ultime épreuve)
  // ================================================================

  t5c1: [
    { question: "Quel est le nom complet du monstre suprême que Nawfel doit affronter ?", options: ["Al-Ghadab Al-Akbar", "Al-Nafs Al-Ammara Suprême (النفس الأمارة العظمى)", "Al-Jabbara le Suprême", "Al-Riya Al-Akbar"], correctIndex: 1, explanation: "Al-Nafs Al-Ammara Suprême est le commandant suprême de l'ego — la somme de toutes les peurs, attachements et désirs de Nawfel. Il existe depuis le premier jour où l'être humain a dit « moi »." },
    { question: "Quelle nouvelle méthode Sidi Mu'adh enseigne-t-il pour vaincre les monstres ?", options: ["Les combattre avec plus de force", "Ne pas les combattre mais les transformer", "Les ignorer complètement", "Les enfermer dans la forteresse"], correctIndex: 1, explanation: "Sidi Mu'adh révèle que chaque bataille menée contre les monstres a nourri leur version suprême. Le nouveau chemin n'est pas la destruction mais la transformation — regarder avec les yeux de la miséricorde." },
    { question: "Quelle inscription est gravée sur la porte de la forteresse ?", options: ["« Bismillah »", "« Celui qui y entre, la porte se referme sur lui »", "« Seul le brave peut entrer »", "« Allah est grand »"], correctIndex: 1, explanation: "L'inscription « من دخله أغلق عليه » signifie « Celui qui y entre, la porte se referme sur lui. » Nawfel pousse la porte et sent le battement de son propre cœur à travers le métal." },
    { question: "Que dit Mehdi à Nawfel sur la peur ?", options: ["« Un vrai homme n'a pas peur »", "« La peur n'est pas une faiblesse — même les prophètes ont eu peur »", "« Tu dois être fort devant ton frère »", "« La peur est un péché »"], correctIndex: 1, explanation: "Mehdi dit : « La peur n'est pas une faiblesse. Mūsā a tremblé en voyant le serpent, et Allah l'a quand même choisi. La vraie force, c'est de ressentir la peur et d'avancer quand même. »" },
    { question: "Quelle invocation Aziza récite-t-elle pour Nawfel ?", options: ["Al-Fatiha", "« Allahoumma la sahla illa ma ja'altahu sahla — Ô Allah, il n'y a de facilité que ce que Tu rends facile »", "Ayat al-Kursi", "La sourate Al-Mulk"], correctIndex: 1, explanation: "Aziza récite cette invocation prophétique pour demander à Allah de rendre l'épreuve facile pour son fils. Nawfel sent un filament de paix se tisser dans sa poitrine — la peur et la confiance peuvent coexister." },
  ],
};
