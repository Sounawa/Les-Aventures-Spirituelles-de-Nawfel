import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome2: Tome = {
  id: 'tome2',
  number: 2,
  title: 'Le Miroir de l\'Âme',
  titleAr: 'مرآة الروح',
  subtitle: 'L\'épreuve de l\'orgueil et de la jalousie',
  description:
    "De retour à Chefchaouen après son premier voyage intérieur, Nawfel croise le chemin d'un nouveau camarade dont les talents éveillent en lui un sentiment qu'il n'avait jamais connu : la jalousie. Bientôt, une ombre silencieuse se glisse dans son cœur, tandis qu'une forteresse d'orgueil s'élève dans son monde intérieur. Pour vaincre ces deux nouveaux monstres — Al-Jabbara et Al-Hasad — Nawfel devra apprendre deux vertus essentielles : l'Ikhlas, la sincérité pure, et le Shukr, la gratitude profonde.",
  theme: 'Ikhlas & Shukr — Sincérité et Gratitude',
  coverImage: '/images/tome2-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Faux Miroir (المرآة الكاذبة)
    // ============================================================
    {
      id: 't2c1',
      tomeId: 'tome2',
      number: 1,
      title: 'Le Faux Miroir',
      titleAr: 'المرآة الكاذبة',
      scenes: [
        // --- t2c1s1: Un matin comme les autres ---
        {
          id: 't2c1s1',
          chapterId: 't2c1',
          title: 'Un matin comme les autres',
          narration: `Les ruelles de Chefchaouen baignaient dans cette lumière particulière de l'automne, quand le soleil matinal semble poser un voile doré sur chaque mur bleu et chaque toit de tuiles orangées. Le ciel était d'un bleu si pur qu'on aurait dit qu'Allah l'avait peint Lui-même pendant la nuit, d'un seul coup de pinceau infini. Les escaliers pavés de galets blancs montaient et descendaient entre les maisons comme les veines d'un cœur gigantesque, et Nawfel les gravissait deux par deux, son cartable usé battant contre son dos à chaque pas.\n\nDepuis son premier voyage dans le monde intérieur et ses rencontres avec Sidi Mu'adh, quelque chose avait changé en Nawfel. Il voyait le monde différemment — les fleurs sur les fenêtres lui semblaient plus colorées, le chant des oiseaux plus mélodieux, et même les ruelles qu'il connaissait par cœur lui paraissaient contenir des mystères invisibles. Souhayl avait remarqué ce changement et lui en avait taquiné gentiment, tandis que Wassim, avec sa intuition d'enfant, avait simplement dit : « Tu brilles un peu plus, Nawfel. »\n\nMais Nawfel portait aussi en lui une nervosité nouvelle. Sidi Mu'adh lui avait dit qu'autres monstres l'attendaient dans son monde intérieur, des monstres plus sournois que la colère, plus difficiles à reconnaître. « Tu sauras quand ils viendront, » avait dit le shaykh avec ce sourire qui en disait plus long que mille mots. « Car ils ne frapperont pas avec des griffes. Ils frapperont avec des pensées. »\n\nEn approchant de l'école du village — un petit bâtiment blanc avec un portail bleu et une cour intérieure ombragée de figuiers — Nawfel remarqua un attroupement inhabituel devant la grille. Les enfants murmuraient, les yeux tournés vers un garçon qu'il n'avait jamais vu. Il était debout près du portail, entouré d'une petite foule de camarades curieux, et quelque chose dans son attitude — une assurance tranquille, un sourire facile — attira immédiatement l'attention de Nawfel.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Qui c'est, celui-là ? Je ne l'ai jamais vu à l'école...",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s2',
          background: 'school',
        },

        // --- t2c1s2: Le nouveau venu ---
        {
          id: 't2c1s2',
          chapterId: 't2c1',
          title: 'Le nouveau venu',
          narration: `Le garçon s'appelait Samir. Il venait de Tanger, expliqua la maîtresse en l'introduisant dans la classe, et ses parents s'étaient installés à Chefchaouen il y a moins d'une semaine. Il avait le même âge que Nawfel — neuf ans tout juste — mais il y avait en lui une assurance, une aisance qui contrastait avec la timidité que Nawfel ressentait encore parfois.\n\nDès le premier cours de mathématiques, Nawfel comprit que Samir n'était pas un élève ordinaire. La maîtresse écrivit un problème au tableau — un problème que Nawfel avait trouvé difficile la semaine dernière — et Samir leva la main presque avant que la maîtresse n'ait fini d'écrire. Sa réponse fut non seulement correcte, mais il proposa une deuxième méthode de résolution que même la maîtresse n'avait pas envisagée.\n\nLa classe éclata de surprise. Des murmures admiratifs circulaient. « Il est génial ! » chuchotait une fille au premier rang. « C'est le plus fort de la classe, » dit un autre en secouant la tête avec admiration. Nawfel, lui, resta silencieux. Il sentit quelque chose d'étrange naître dans sa poitrine — pas de la colère, non, mais quelque chose de plus froid, plus subtil. Un resserrement, comme si une main invisible venait de presser son cœur.\n\nÀ la récréation, Nawfel regarda Samir de loin. Le nouveau jouait au football avec une grâce naturelle, marquant trois buts consécutifs. Puis, quand le groupe passa devant le mur d'escalade de la cour, Samir grimpa jusqu'au sommet en quelques secondes, là où Nawfel avait mis des semaines à réussir l'année précédente. Chaque exploit de Samir était comme un petit coup de poing dans le cœur de Nawfel — silencieux, invisible aux autres, mais douloureux.\n\nC'est alors que Nawfel le vit. Du coin de l'œil, dans l'ombre du figuier, une silhouette mouvante — noire, presque transparente, comme une tache d'encre dans l'eau. Elle bougeait doucement, et Nawfel réalisa avec horreur qu'elle ne bougeait pas seule : elle bougeait en même temps que lui, comme un reflet déformé dans un miroir brisé.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Samir est vraiment fort, hein ? Il a résolu le problème de maths en deux secondes. C'est impressionnant. On pourrait lui demander de nous aider pour les devoirs, non ?",
              emotion: 'neutral',
            },
            {
              characterId: 'nawfel',
              text: "Oui... c'est vrai qu'il est fort...",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s3',
          background: 'school',
        },

        // --- t2c1s3: L'ombre qui grandit ---
        {
          id: 't2c1s3',
          chapterId: 't2c1',
          title: 'L\'ombre qui grandit',
          narration: `Les jours passèrent, et avec eux, la présence de Samir à l'école devint de plus en plus éclatante. Il excellait dans tout — les mathématiques, la lecture, le sport, et même la calligraphie arabe, cette discipline que Nawfel aimait par-dessus tout et dans laquelle il se croyait le meilleur de la classe. Quand le maître de calligraphie afficha les travaux des élèves au mur, c'est celui de Samir qui reçut la place d'honneur, avec un système d'étoile dorée que tout le monde pouvait voir.\n\nNawfel, qui avait reçu une étoile d'argent pour son propre travail, sentit la main invisible dans sa poitrine se serrer un peu plus. Et l'ombre — cette silhouette noire et mouvante qu'il avait aperçue sous le figuier — grandissait. Elle ne le quittait plus. Nawfel la voyait dans les coins de son champ de vision, comme un spectre silencieux qui le suivait partout. Les autres enfants ne semblaient rien remarquer, mais Nawfel, lui, la sentait. Il la sentait comme on sent un courant d'air froid dans une pièce chauffée — une présence discordante, anormale.\n\nUn soir, en rentrant chez lui, Nawfel passa devant la boutique du vieux cordonnier du quartier. La vitrine était couverte de miroirs de toutes tailles — des miroirs anciens aux cadres en bois sculpté, des miroirs ovales, des miroirs ronds. Et dans l'un d'eux, Nawfel s'arrêta net. Son reflet était là, normal, immobile. Mais juste derrière lui, presque collée à son épaule, l'ombre noire était visible. Elle avait pris forme : un visage pâle aux yeuxvides, une bouche tordue en un rictus silencieux. Et elle grandissait, grandissait à chaque pensée de jalousie qui traversait l'esprit de Nawfel.\n\nNawfel sursauta et s'éloigna en courant, le cœur battant. Il comprenait maintenant. Cette ombre, c'était un monstre — un monstre que Sidi Mu'adh lui avait dit de surveiller. Al-Hasad. الحسد. La jalousie.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... ce n'est pas possible... Je ne suis pas jaloux ! Je ne peux pas être jaloux ! Samir est simplement... simplement...",
              emotion: 'scared',
            },
            {
              characterId: 'nawfel',
              text: "Simplement meilleur que moi...",
              emotion: 'sad',
            },
          ],
          choices: [
            {
              id: 't2c1s3_c1',
              text: 'Aller voir Sidi Mu\'adh pour lui parler de cette ombre',
              nextSceneId: 't2c1s4a',
              badgeId: 'ikhlas',
              isCorrect: true,
            },
            {
              id: 't2c1s3_c2',
              text: 'Ignorer l\'ombre et essayer de battre Samir à son propre jeu',
              nextSceneId: 't2c1s4b',
            },
            {
              id: 't2c1s3_c3',
              text: 'Eviter Samir et se retirer en silence',
              nextSceneId: 't2c1s4c',
            },
          ],
          background: 'street',
        },

        // --- t2c1s4a: La sincérité du cœur ---
        {
          id: 't2c1s4a',
          chapterId: 't2c1',
          title: 'La sincérité du cœur',
          narration: `Nawfel courut vers la zawiyah, ses pieds heurtant les pavés des ruelles avec la précipitation d'un cœur affolé. Il avait pris l'habitude, depuis le premier tome, de se rendre auprès de Sidi Mu'adh chaque fois que quelque chose de troublant se produisait dans son monde intérieur, et cette fois, la urgence dans sa poitrine était plus forte que jamais.\n\nLa porte de la zawiyah s'ouvrit avant même qu'il ne frappe, comme toujours. L'intérieur baignait dans la lumière dorée du crépuscule qui filtrait par la fenêtre haute, et l'encens de cèdre emplissait l'air de cette odeur de paix que Nawfel commençait à connaître par cœur. Sidi Mu'adh était assis sur son tapis de prière, ses yeux mi-clos, ses lèvres remuant imperceptiblement dans le dhikr.\n\n— Petit cœur, dit le shaykh sans ouvrir les yeux. Tu es arrivé juste à temps. Je sentais une agitation dans ton âme depuis plusieurs jours.\n\nNawfel s'effondra sur le coussin devant le shaykh, ses yeux brillants de larmes qu'il s'efforçait de retenir. Il raconta tout — Samir, l'ombre noire, le miroir du cordonnier, la sensation horrible d'être rongé de l'intérieur par un sentiment qu'il ne voulait pas nommer.\n\nSidi Mu'adh ouvrit les yeux et posa sa main ridée sur l'épaule de Nawfel. Sa toucher était chaud, réconfortant, comme un rayon de soleil en plein hiver.\n\n— Ce que tu ressens, petit cœur, s'appelle Al-Hasad — la jalousie (الحسد). C'est l'un des monstres les plus dangereux du Nafs, car il se nourrit de l'incapacité à voir les blessings d'Allah chez les autres. Le Prophète صلى الله عليه وسلم a dit que la jalousie consume les bonnes actions comme le feu consume le bois sec. Mais tu as fait la chose la plus courageuse — tu es venu me voir avec honnêteté. Et cette honnêteté, c'est le premier pas vers l'Ikhlas — la sincérité. Un cœur sincère reconnaît ses faiblesses non pas pour se punir, mais pour se guérir.\n\nNawfel sentit un poids se lever de sa poitrine. Pas entièrement — l'ombre était toujours là — mais suffisamment pour respirer un peu mieux.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: 'Sidi Mu\'adh, je le hais... non, pas lui. Je hais ce que je ressens. Je ne veux pas être jaloux !',
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Le fait que tu dise cela, petit cœur, est déjà une victoire. L'Ikhlas commence par la reconnaissance sincère de ce qui habite ton cœur. Ne fuis pas ce sentiment — observe-le. Quand tu le nommes, il perd son pouvoir.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s5',
          background: 'zawiyah',
          earnedBadgeId: 'ikhlas',
          lesson: {
            title: 'L\'Ikhlas — La sincérité',
            content:
              "L'Ikhlas (الإخلاص) est la sincérité pure, le fait de faire les choses uniquement pour le plaisir d'Allah, sans chercher la louange des autres. Nawfel a montré les premiers signes d'Ikhlas en reconnaissant honnêtement sa jalousie au lieu de la cacher. Le Prophète صلى الله عليه وسلم a dit que la jalousie consume les bonnes actions comme le feu consume le bois.",
            quote: 'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- t2c1s4b: La compétition stérile ---
        {
          id: 't2c1s4b',
          chapterId: 't2c1',
          title: 'La compétition stérile',
          narration: `Nawfel serra les poings et décida qu'il ne laisserait pas un nouveau venu le surpasser. Il se mit à étudier plus, à s'entraîner plus, à travailler plus dur que jamais. Mais chaque effort, chaque victoire minuscule, lui laissait un goût amer — car ce n'était plus pour le plaisir d'apprendre qu'il travaillait, mais pour battre Samir. Et même quand il réussissait, il n'était jamais satisfait, car Samir réussissait toujours un peu mieux.\n\nL'ombre grandit encore. Nawfel la voyait désormais même dans sa chambre, lovée dans les coins sombres, ses yeuxvides le fixant avec une patience de prédateur. Elle se nourrissait de chaque pensée envieuse, de chaque comparaison amère, de chaque sourire forcé que Nawfel affichait quand les autres félicitaient Samir.\n\nUn soir, alors qu'il faisait ses devoirs sous la lampe de la table de la cuisine, Nawfel regarda ses mains — elles tremblaient de fatigue. Aziza s'approcha et posa doucement une tasse de thé à la menthe devant lui. Elle le regarda un long moment, et Nawfel comprit, comme toujours, que sa mère voyait au-delà des apparences.\n\n— Mon chéri, dit Aziza d'une voix douce, tu travailles trop. Ce n'est pas le travail qui me préoccupe — c'est la raison pour laquelle tu travailles. Ton cœur est lourd, Nawfel. Je peux le sentir.\n\nLes mots de sa mère frappèrent Nawfel comme une gifle silencieuse. Il baissa la tête et, pour la première fois depuis des jours, les larmes coulèrent librement sur ses joues.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Mon petit, rappelle-toi ce que disait le Prophète — qu'Allah ne regarde ni vos corps ni vos formes, mais Il regarde vos cœurs. Si tu travailles pour éclipser quelqu'un, ton cœur se vide de sa lumière. Si tu travailles pour Allah, ton cœur se remplit.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Mais maman... Samir est meilleur que moi en tout. Je n'arrive pas à ne pas le voir...",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s5',
          background: 'home',
        },

        // --- t2c1s4c: Le silence amer ---
        {
          id: 't2c1s4c',
          chapterId: 't2c1',
          title: 'Le silence amer',
          narration: `Nawfel choisit le repli. Il s'assit au fond de la classe, évita de lever la main, et se mit à parler de moins en moins. Quand Samir répondait correctement à une question, Nawfel baissait les yeux. Quand les autres élèves l'invitaient à jouer, il trouvait une excuse — un devoir, un livre à lire, un mal de tête. Le monde autour de lui semblait s'assombrir, comme si quelqu'un avait baissé le contraste de la réalité.\n\nL'ombre, en revanche, prospérait. Privé de la lumière du contact humain, privé de la chaleur de l'amitié, le cœur de Nawfel devenait un terrain fertile pour Al-Hasad. Le monstre ne disait rien — il n'en avait pas besoin. Il se contentait d'être là, silencieux et sombre, et sa simple présence suffisait à empoisonner chaque pensée de Nawfel.\n\nSouhayl remarqua le changement avec l'attention aiguisée qui caractérisait le grand frère. Un soir, alors que Nawfel se couchait sans manger — ce qui ne lui arrivait jamais — Souhayl vint s'asseoir au bord de son lit.\n\n— Nawfel, dit-il doucement. Je ne sais pas ce qui se passe, mais tu n'es plus toi-même. Tu te caches, tu te tais, tu t'effaces. Ce n'est pas toi. Tu es quelqu'un de lumineux, et depuis quelque temps, tu laisses quelqu'un d'autre éteindre ta lumière. Parle-moi. S'il te plaît.\n\nNawfel resta silencieux un long moment. Puis, dans un murmure à peine audible, il dit :\n\n— Je crois qu'il y a un monstre en moi, Souhayl. Et je ne sais pas comment le combattre.\n\nSouhayl ne rit pas. Il ne chercha pas à minimiser. Il posa simplement sa main sur celle de son petit frère et dit : Demain, nous allons voir Sidi Mu'adh.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Nawfel, tu n'as pas besoin d'être le meilleur pour avoir de la valeur. Papa nous a toujours dit que chaque personne porte en elle une lumière unique. La lumière de Samir ne peut pas éteindre la tienne.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s5',
          background: 'bedroom',
        },

        // --- t2c1s5: La porte intérieure ---
        {
          id: 't2c1s5',
          chapterId: 't2c1',
          title: 'La porte intérieure',
          narration: `Que Nawfel soit allé voir Sidi Mu'adh de lui-même, qu'il ait été guidé par sa mère ou par Souhayl, le résultat fut le même : le shaykh l'attendait, comme toujours, assis sur son tapis dans la lumière dorée de la zawiyah. L'encens de cèdre flottait dans l'air, et les panneaux de calligraphie sur les murs semblaient briller d'une lueur propre, comme si les versets du Coran vibraient d'une vie invisible.\n\nSidi Mu'adh écouta Nawfel en silence, ses yeux sombres et lumineux fixés sur le visage du garçon. Quand Nawfel eut fini de parler — des mots qui sortaient dans un désordre d'émotions, de la jalousie à la honte, de la confusion à la peur — le shaykh resta un instant silencieux, puis il sourit. Pas un sourire de moquerie, ni même de réconfort. Un sourire de reconnaissance, comme s'il voyait en Nawfel quelque chose de précieux.\n\n— Petit cœur, dit-il finally, ce que tu rencontres n'est pas un ennemi extérieur. C'est Al-Hasad (الحسد) — la jalousie — et elle est née de ton propre Nafs. Mais ne te décourage pas. Le fait que tu la voies, que tu la nommes, que tu viennes me la confier — tout cela prouve que ton cœur est en train de s'éveiller. Le Problème n'est pas d'avoir Al-Hasad en soi. Le problème est de l'ignorer.\n\nLe shaykh se leva et marcha vers une armoire en bois que Nawfel n'avait jamais remarquée. Il en sortit un petit miroir — pas plus grand que la paume d'une main — encadré d'argent gravé de motifs arabes. Il le posa devant Nawfel.\n\n— Ce miroir est spécial, petit cœur. Il ne montre pas ton visage. Il montre ton cœur. Quand tu seras prêt, tu devras le regarder. Mais d'abord, il y a quelque chose d'autre que tu dois affronter. Quelque chose de plus grand, de plus lourd. L'ombre de la jalousie n'est que le serviteur d'un maître bien plus puissant. Son nom est Al-Jabbara (الجبّارة) — le Tyran de l'orgueil. Et il t'attend dans ton monde intérieur.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Al-Jabbara ? L'orgueil ? Mais je ne suis pas orgueilleux...",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "L'orgueil, petit cœur, est le plus trompeur de tous les monstres. Il ne se montre jamais tel qu'il est. Il se cache derrière des pensées comme « je mérite mieux » ou « ce n'est pas juste » ou « pourquoi lui et pas moi ? ». Ces pensées semblent raisonnables, n'est-ce pas ? Mais derrière chacune d'elles se cache Al-Jabbara, le roi des illusions.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'zawiyah',
          isEnding: true,
          lesson: {
            title: 'La jalousie et ses racines',
            content:
              "Al-Hasad (الحسد) — la jalousie — est l'un des péchés du cœur les plus destructeurs en Islam. Le Prophète صلى الله عليه وسلم a dit que la jalousie consume les bonnes actions comme le feu consume le bois sec. La jalousie naît de l'incapacité à reconnaître les blessings d'Allah chez autrui, et sa racine la plus profonde est l'orgueil — le sentiment que l'on mérite plus que ce que l'on a reçu.",
            quote: 'إياكم والحسد فإن الحسد يأكل الحسنات كما تأكل النار الحطب',
            source: 'Hadith — Sunan Abi Dawud',
          },
        },
      ],
      lessons: [],
    },

  ],
};
