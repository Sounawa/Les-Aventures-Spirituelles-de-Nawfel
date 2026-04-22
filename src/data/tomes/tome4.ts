import type { Tome } from '@/types/story';

export const tome4: Tome = {
  id: 'tome4',
  number: 4,
  title: 'Le Voile et la Lumière',
  titleAr: 'الحجاب والنور',
  subtitle: 'Les obstacles subtils de l\'âme',
  description:
    "Après avoir vaincu les monstres de la colère et de la cupidité, Nawfel croit avoir atteint un niveau spirituel élevé. Mais les pièges les plus dangereux sont ceux qu'on ne voit pas. L'ostentation (Riya) et la confusion spirituelle s'infiltrent dans son cœur comme un voile invisible, lui faisant perdre de vue la véritable lumière. guidé par Sidi Mu'adh, Nawfel découvrira que la sagesse véritable et la miséricorde sont les clés qui dissolvent les illusions les plus subtiles.",
  theme: 'Hikma & Rahma — Sagesse et Miséricorde',
  coverImage: '/images/tome4-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Masque de la Piété (قناع التقوى)
    // ============================================================
    {
      id: 't4c1',
      tomeId: 'tome4',
      number: 1,
      title: 'Le Masque de la Piété',
      titleAr: 'قناع التقوى',
      scenes: [
        // --- t4c1s1: Les louanges du village ---
        {
          id: 't4c1s1',
          chapterId: 't4c1',
          title: 'Les louanges du village',
          narration: `Les ruelles de Chefchaouen bruissaient d'une excitation inhabituelle ce matin-là. Depuis que Nawfel avait commencé son cheminement spirituel sous la guidance de Sidi Mu'adh, tout le village semblait le regarder différemment. Les anciens s'arrêtaient pour lui sourire quand il passait, les femmes du quartier murmuraient des dou'as — des invocations — en le voyant prier à la mosquée, et même les enfants de son école le traitaient avec un respect nouveau.\n\nCe matin, alors que Nawfel marchait vers la zawiyah pour sa leçon habituelle, un groupe de voisins s'était attroupé devant la maison de son père. La vieille Fatima, celle qui vendait les herbes au marché, parlait avec animation à quiconque voulait l'écouter.\n\n— Vous savez, disait-elle en agitant la main comme pour ponctuer chaque mot, ce petit Nawfel, il n'est pas comme les autres enfants. L'autre jour, je l'ai vu réciter le Coran dans le jardin, et sa voix... Allahu Akbar, sa voix faisait pleurer les oiseaux ! C'est un wali, un saint, je vous le dis !\n\nNawfel s'arrêta net derrière le coin du mur, son cœur battant à tout rompre. Il n'avait pas entendu tout ce qu'elle avait dit, mais les mots « saint » et « wali » lui firent l'effet d'une douce chaleur qui se répandit dans sa poitrine. Il sentit un sourire fier étirer ses lèvres malgré lui. C'était agréable, cette sensation. Trop agréable.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: 'Un wali... moi ? C\'est vrai que je prie beaucoup, et que j\'ai vaincu des monstres intérieurs...',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s2',
          background: 'street',
        },

        // --- t4c1s2: Le sourire de l'orgueil ---
        {
          id: 't4c1s2',
          chapterId: 't4c1',
          title: 'Le sourire de l\'orgueil',
          narration: `À la zawiyah, Nawfel s'assit devant Sidi Mu'adh avec une assurance qu'il n'avait jamais eue auparavant. Ses épaules étaient relevées, son regard direct, et il y avait dans son sourire quelque chose de nouveau — un éclat qui n'avait rien à voir avec la lumière spirituelle qu'il avait appris à cultiver. C'était autre chose. Quelque chose de plus terne, de plus superficiel, comme une couche de vernis brillant sur du bois pourri.\n\nSidi Mu'adh le regarda longuement, sans dire un mot. Son visage impassible ne trahissait rien, mais ses yeux — ces yeux qui voyaient au-delà des apparences — brillaient d'une lueur que Nawfel ne savait pas encore interpréter. Le silence dura si longtemps que Nawfel finit par se sentir mal à l'aise.\n\n— Alors, petit cœur, dit enfin le shaykh d'une voix douce mais chargée d'une gravité inhabituelle. Raconte-moi ce que tu as accompli depuis notre dernière rencontre.\n\nNawfel se lança avec enthousiasme. Il parla de ses prières, de ses récitations du Coran, des dhikrs qu'il pratiquait chaque soir. Il décrivit comment il avait aidé un vieux monsieur à traverser la rue, comment il avait partagé son goûter avec un enfant pauvre, comment il avait pardonné à un camarade qui l'avait insulté. Chaque anecdote était embellie, chaque geste amplifié, chaque mot choisi pour montrer à quel point Nawfel avait progressé.\n\nSidi Mu'adh écoutait en silence, ses mains posées sur ses genoux, ses yeux mi-clos. Quand Nawfel eut terminé, un long silence s'installa de nouveau dans la zawiyah.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Et j'ai même récité la sourate Al-Mulk en entier hier soir sans me tromper une seule fois ! Wassim disait que j'avais une voix d'ange !",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "Je vois... tu as beaucoup accompli, petit cœur. Mais permets-moi de te poser une question : quand tu priais la sourate Al-Mulk hier soir, pour qui priais-tu ?",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 't4c1s2_c1',
              text: "Pour Allah, bien sûr. C'est évident.",
              nextSceneId: 't4c1s3a',
            },
            {
              id: 't4c1s2_c2',
              text: "Euh... pour Allah. Et aussi parce que Wassim m'écoutait.",
              nextSceneId: 't4c1s3b',
              isCorrect: true,
            },
          ],
          background: 'zawiyah',
        },

        // --- t4c1s3a: Le voile se tend ---
        {
          id: 't4c1s3a',
          chapterId: 't4c1',
          title: 'Le voile se tend',
          narration: `Nawfel répondit sans hésiter, avec une certitude qui sonnait presque comme de l'arrogance. Bien sûr qu'il priait pour Allah ! Pour qui d'autre aurait-il pu prier ? Mais au moment même où il prononça ces mots, quelque chose d'étrange se produisit dans la zawiyah. La lumière dorée qui filtrait par la petite fenêtre en hauteur sembla vaciller, comme si un nuage invisible était passé devant le soleil.\n\nSidi Mu'adh ne sourit pas. Il inclina légèrement la tête, et Nawfel vit, pour la première fois depuis qu'il connaissait le shaykh, une ombre de tristesse dans ses yeux.\n\n— Tu es sûr, petit cœur ? demanda doucement Sidi Mu'adh. Parce que quand tu m'as raconté tes exploits, tu ne m'as pas parlé d'Allah une seule fois. Tu m'as parlé de toi. De tes prières. De ta voix. De tes bonnes actions. Toi, toi, toi.\n\nLes mots tombèrent comme des pierres dans l'eau calme de la zawiyah. Nawfel ouvrit la bouche, puis la referma. Il voulut protester, mais les mots ne venaient pas. Parce que Sidi Mu'adh avait raison, et Nawfel le savait au plus profond de son cœur — ce cœur-là, le vrai, pas celui qu'il exhibait fièrement.\n\n— Quand la prière te fait te sentir supérieur aux autres, petit cœur, continua le shaykh, ce n'est plus une prière. C'est un masque. Et le plus dangereux des masques est celui que l'on porte sans savoir qu'on le porte.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Mais... j'ai quand même fait des bonnes actions ! Ce n'est pas rien, non ?",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Les bonnes actions sont précieuses, Nawfel. Mais l'intention qui les accompagne est encore plus précieuse. Une action faite pour être vue par les gens ne monte pas vers le ciel — elle reste sur terre, comme une pierre jetée dans la boue.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s4',
          background: 'zawiyah',
        },

        // --- t4c1s3b: L'honnêteté douloureuse ---
        {
          id: 't4c1s3b',
          chapterId: 't4c1',
          title: "L'honnêteté douloureuse",
          narration: `Nawfel baissa les yeux. La vérité, quand elle est dite à voix haute, a un poids écrasant. Il avait prié pour Allah, oui, mais en même temps, il avait été conscient que Wassim l'écoutait depuis le seuil de la porte. Il n'avait pas cherché à réduire sa voix. Au contraire, il l'avait embellie, l'avait rendue plus belle qu'elle ne l'était naturellement. Et quand Wassim avait murmuré « tu as une voix d'ange », Nawfel s'était senti envahi par une joie qui n'avait rien à voir avec la proximité d'Allah.\n\nSidi Mu'adh sourit, et cette fois, son sourire était different — c'était un sourire qui contenait de la tendresse mais aussi de la gravité, comme celui d'un père qui doit corriger son enfant par amour.\n\n— Tu as dit la vérité, petit cœur, et c'est la chose la plus difficile à faire. La plupart des adultes passent toute leur vie sans jamais admettre ce que tu viens de reconnaître en un instant. Tu viens de remporter ta première victoire contre un ennemi que très peu de gens voient.\n\nNawfel leva les yeux, confus.\n\n— Quel ennemi ?\n\n— Al-Riya, dit Sidi Mu'adh. L'ostentation. Le désir d'être vu, d'être admiré, d'être loué pour ses actes d'adoration. C'est un monstre d'une subtilité redoutable. Il ne te pousse pas à faire le mal — il se cache à l'intérieur du bien que tu fais. Il prend la forme de ton propre zèle, de ta propre piété, et il la transforme lentement en poison.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Al-Riya... je ne savais pas que c'était un monstre. Je pensais que les monstres étaient comme la colère ou l'avidité — des choses évidentes.",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Les monstres les plus puissants sont ceux que tu ne reconnais pas, Nawfel. Riya est un maître du déguisement. Il porte les vêtements de la piété, il parle le langage de la dévotion, et il sourit comme un saint. Mais sous ce masque, il est le destructeur silencieux des bonnes actions.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s4',
          background: 'zawiyah',
        },

        // --- t4c1s4: L'apparition d'Al-Riya ---
        {
          id: 't4c1s4',
          chapterId: 't4c1',
          title: "L'apparition d'Al-Riya",
          narration: `Cette nuit-là, Nawfel fit un rêve très différent de ceux qu'il avait coutume de faire. Il ne se retrouva pas dans le jardin lumineux qu'il aimait tant, ni sur le chemin de lumière qui menait à la porte de son cœur. Il se retrouva dans une salle immense, richement décorée de miroirs dorés qui couvraient chaque mur, chaque surface, chaque angle.\n\nAu centre de cette salle, une créature se tenait debout, immobile. Elle était magnifique — d'une beauté presque insoutenable. Elle ressemblait à un ange de lumière, avec des ailes blanches et irisées qui jetaient des reflets arc-en-ciel dans toutes les directions. Son visage était doux, souriant, ses yeux brillants de bonté. Elle portait des vêtements d'une blancheur éclatante, ornés de versets du Coran brodés en fil d'or.\n\nMais quand Nawfel regarda plus attentivement, il vit quelque chose qui lui glaça le sang. Chaque miroir ne reflétait pas Nawfel tel qu'il était — ils le reflétait comme une version idéalisée, embellie, irréelle. Dans un miroir, il était plus grand. Dans un autre, plus sage. Dans un troisième, plus saint. Et la créature au centre de la salle souriait, comme un artiste satisfait de son œuvre.\n\n— Bienvenue, Nawfel, dit la créature d'une voix suave comme du miel. Ne suis-je pas magnifique ? Ne suis-je pas la preuve que tu es special ? Viens, regarde-toi dans mes miroirs. Admire ce que tu es devenu. Tu es le meilleur de tous les enfants du village. Le plus pieux. Le plus pur. Tu le mérites, n'est-ce pas ?`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu es... magnifique. Mais quelque chose ne va pas. Ces miroirs... ce ne sont pas des reflets vrais.",
              emotion: 'scared',
            },
          ],
          choices: [
            {
              id: 't4c1s4_c1',
              text: "Détourner le regard des miroirs et regarder la créature en face",
              nextSceneId: 't4c1s5a',
              isCorrect: true,
            },
            {
              id: 't4c1s4_c2',
              text: "Approcher d'un miroir pour mieux admirer son reflet",
              nextSceneId: 't4c1s5b',
            },
          ],
          background: 'inner_world',
        },

        // --- t4c1s5a: Le visage sous le masque ---
        {
          id: 't4c1s5a',
          chapterId: 't4c1',
          title: 'Le visage sous le masque',
          narration: `Nawfel détourna les yeux des miroirs et fixa directement la créature. C'était l'une des choses les plus difficiles qu'il ait jamais faites, car les miroirs l'appelaient, le sollicitaient, murmuraient son nom avec des voix prometteuses de gloire et d'admiration. Mais Nawfel résista. Il regarda la créature en face, et lentement, très lentement, la beauté commença à se fissurer.\n\nLe sourire de la créature se crispa. Les ailes blanches tremblèrent, et sous la lumière éblouissante, Nawfel commença à voir ce qui se cachait en dessous. La blancheur des vêtements n'était pas celle de la pureté — c'était celle du vide. Les versets du Coran brodés en or n'étaient pas des versets du tout — c'étaient des mots vides, des coquilles creuses qui ressemblaient à des lettres arabes sans en avoir le sens. Et les yeux brillants de la créature n'étaient pas des yeux de bonté — c'étaient des miroirs encore plus petits, des miroirs qui ne reflétaient qu'une seule chose : la créature elle-même.\n\n— Tu oses me regarder en face ? siffla la créature, et sa voix suave se transforma en un murmure grinçant. Tu oses détourner les yeux de ta propre grandeur ? Moi, Al-Riya (الرياء), je suis celui qui te rend digne d'amour et de respect ! Sans moi, tu n'es rien ! Un enfant ordinaire, pas mieux que les autres !\n\nNawfel sentit les mots comme des coups, car ils touchaient exactement l'endroit où il avait peur — la peur d'être ordinaire, la peur de ne pas être special. Mais cette fois, au lieu de se laisser emporter, Nawfel prit une grande inspiration et murmura :\n\n— Allah ne regarde pas l'apparence. Allah regarde le cœur. Et mon cœur... mon cœur est à Lui, pas à toi.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu me montres une image embellie de moi-même. Mais ce n'est pas moi. C'est un mensonge. Allah connaît le vrai Nawfel, et c'est Lui seul qui juge.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s6',
          background: 'inner_world',
          lesson: {
            title: 'Le Riya — L\'ostentation',
            content:
              "Le Riya (الرياء) est l'ostentation, le fait d'accomplir des actes d'adoration pour être vu et loué par les gens plutôt que par sincérité envers Allah. Le Prophète ﷺ a dit que c'était le « shirk mineur » (l'association mineure), car il consiste à placer l'opinion des gens au même niveau que celle d'Allah.",
            quote: 'إِنِّي أَخْوَفُ عَلَيْكُمُ الشِّرْكَ الأَصْغَرَ. قَالُوا: وَمَا الشِّرْكُ الأَصْغَرُ؟ قَالَ: الرِّيَاءُ',
            source: 'Hadith — Ahmad',
          },
        },

        // --- t4c1s5b: Le piège du miroir ---
        {
          id: 't4c1s5b',
          chapterId: 't4c1',
          title: 'Le piège du miroir',
          narration: `Nawfel s'approcha du miroir le plus proche, attiré par son reflet comme un papillon par une flamme. Dans le miroir, il se voyait plus grand, plus sage, plus beau. Son sourire était parfait, ses yeux brillaient d'une lumière surnaturelle, et autour de lui, une aura dorée l'entourait comme celle des saints dans les livres d'histoires.\n\n— Regarde comme tu es beau, murmura la créature derrière lui. Regarde comme tu es special. Personne d'autre n'est comme toi, Nawfel. Tu es le choix d'Allah. Son préféré.\n\nEt Nawfel resta là, immobile, hypnotisé par sa propre image. Les secondes devinrent des minutes, les minutes devinrent des heures — ou peut-être était-ce l'inverse, car le temps dans ce monde n'obéissait pas aux mêmes règles. Plus il regardait, plus le refait devenait réel à ses yeux, et plus la créature derrière lui grandissait, se nourrissant de son admiration de lui-même.\n\nCe fut la voix de Sidi Mu'adh, résonnant comme un écho lointain dans le rêve, qui le tira de sa torpeur.\n\n— Nawfel ! Petit cœur ! Celui qui aime son image plus que la vérité est prisonnier de ses propres yeux ! Tourne-toi ! Regarde au-delà de la surface !\n\nD'un effort surhumain, Nawfel détourna les yeux du miroir. La salle trembla. Les miroirs se fissurèrent. Et Nawfel, tremblant, comprit à quel point il avait failli se perdre dans l'illusion de sa propre grandeur.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je... j'ai failli me perdre. Le miroir me montrait ce que je voulais voir, pas ce que je suis vraiment.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s6',
          background: 'inner_world',
        },

        // --- t4c1s6: La fissure dans le masque ---
        {
          id: 't4c1s6',
          chapterId: 't4c1',
          title: 'La fissure dans le masque',
          narration: `Nawfel se réveilla en sursaut, le cœur battant, les mains moites. La première lumière de l'aube filtrait à travers les volets, dessinant des rectangles pâles sur le sol de la chambre. À côté de lui, Souhayl dormait paisiblement, et Wassim murmurait quelque chose dans son sommeil, son doudou serré contre sa joue.\n\nNawfel resta immobile un long moment, fixant le plafond. Les paroles d'Al-Riya résonnaient encore dans son esprit — « Sans moi, tu n'es rien ! Un enfant ordinaire ! » — et malgré toute sa volonté, il sentait que ces mots avaient laissé une trace, une blessure profonde dans une partie de lui qu'il ne pouvait pas nommer.\n\nMais il y avait autre chose aussi. La leçon de Sidi Mu'adh. La vérité cruelle mais libératrice que le shaykh lui avait fait voir : quand les bonnes actions deviennent un moyen de se mettre en avant, elles perdent leur lumière. Nawfel ferma les yeux et murmura une prière qu'il n'avait jamais prononcée auparavant :\n\n— Allahoumma inni a'oudhou bika min an ushrika bika shay'an wa ana a'lam, wa astaghfiruka lima la a'lam.\n\n« Ô Allah, je cherche refuge auprès de Toi contre le fait de T'associer quoi que ce soit alors que je sais, et je Te demande pardon pour ce que je ne sais pas. » Les mots du Prophète ﷺ, que Sidi Mu'adh lui avait enseignés des semaines plus tôt, prirent soudain tout leur sens. Et Nawfel comprit que la véritable spiritualité n'était pas une scène de théâtre où l'on joue le rôle du saint, mais un dialogue intime et silencieux entre le serviteur et son Seigneur.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Allahoumma inni a'oudhou bika min an ushrika bika shay'an... Ô Allah, purifie mon intention. Que tout ce que je fasse soit pour Toi seul.",
              emotion: 'determined',
            },
            {
              characterId: 'souhayl',
              text: "Nawfel ? Tu parles dans ton sommeil encore ? Tout va bien ?",
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s7',
          background: 'bedroom',
        },

        // --- t4c1s7: L'épreuve du matin ---
        {
          id: 't4c1s7',
          chapterId: 't4c1',
          title: "L'épreuve du matin",
          narration: `Au petit-déjeuner, Nawfel fut mis à l'épreuve d'une manière qu'il n'avait pas anticipée. Sa mère Aziza, qui avait une façon de deviner les choses que personne ne lui disait, posa sa main sur l'épaule de son fils et lui demanda doucement comment s'était passée sa leçon avec Sidi Mu'adh.\n\nNawfel hésita. L'instinct — l'ancien instinct, celui qu'Al-Riya avait nourri — lui murmurait d'embellir l'histoire, de se présenter sous son meilleur jour, de dire que Sidi Mu'adh l'avait félicité, qu'il était sur le point d'atteindre un niveau spirituel extraordinaire. Mais cette fois, Nawfel reconnut cette voix pour ce qu'elle était — le murmure du masque.\n\nIl prit une grande inspiration et raconta la vérité. Il parla de son orgueil, de la façon dont il s'était vanté de ses prières, de la leçon douloureuse que Sidi Mu'adh lui avait apprise. Il parla du rêve avec les miroirs dorés et de la créature magnifique qui se cachait sous les apparences de la piété.\n\nAziza l'écouta sans l'interrompre, ses yeux brillants de fierté — non pas la fausse fierté que Al-Riya manipulait, mais une fierté profonde, maternelle, spirituelle. Quand Nawfel eut terminé, elle le serra contre elle et murmura :\n\n— Mon fils, ce que tu viens de faire est plus difficile que de combattre cent monstres. Admettre sa faiblesse, c'est le début de la véritable force. Sidi Mu'adh a raison : la sincérité est le plus beau des joyaux, et tu viens de le trouver.\n\nMehdi, qui avait écouté en silence, posa sa main sur la tête de Nawfel et ajouta, avec sa voix calme et profonde :\n\n— « Certes, les actions ne valent que par les intentions. » Ce hadith est le fondement de tout, Nawfel. Souviens-t'en toujours.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Mon fils, admettre son orgueil devant les autres demande plus de courage que n'importe quelle bataille. Je suis fière de toi — non pas pour tes exploits, mais pour ton honnêteté.",
              emotion: 'happy',
            },
            {
              characterId: 'mehdi',
              text: "Certes, les actions ne valent que par les intentions. Chaque acte que tu fais, Nawfel, garde ton intention pure. C'est ton bouclier contre Riya.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'kitchen',
          isEnding: true,
          lesson: {
            title: 'L\'intention sincère (Al-Ikhlas)',
            content:
              "L'Ikhlas (الإخلاص) est la sincérité dans l'adoration — faire chaque action uniquement pour Allah, sans chercher l'approbation des gens. Le Prophète ﷺ a dit : « Certes, les actions ne valent que par les intentions. » Nawfel a appris que reconnaître son orgueil est la première étape pour le dépasser.",
            quote: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ',
            source: 'Hadith — Sahih al-Bukhari',
          },
        },
      ],
      lessons: [],
    },

  ],
};
