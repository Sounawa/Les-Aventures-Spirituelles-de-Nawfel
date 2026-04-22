import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome3: Tome = {
  id: 'tome3',
  number: 3,
  title: 'Le Désert de l\'Épreuve',
  titleAr: 'صحراء الابتلاء',
  subtitle: 'Nawfel affronte l\'avarice et la colère au cœur du désert spirituel',
  description:
    "Des semaines ont passé depuis le premier voyage intérieur de Nawfel, et le jardin merveilleux de son cœur semble s'être asséché. À Chefchaouen, entre les ruelles bleues et les leçons de Sidi Mu'adh, le jeune garçon découvre que le cheminement spirituel n'est pas un long fleuve tranquille. Deux nouveaux monstres l'attendent dans un désert brûlant : Al-Bukhl, le ver de l'avarice qui amasse toute la lumière du cœur, et Al-Ghadab Al-Akbar, la Colère Invincible qui consume tout sur son passage. Pour survivre, Nawfel devra apprendre la leçon la plus difficile de toutes : l'humilité.",
  theme: 'Al-Tawadu\' & Al-Karam — Humilité et Générosité',
  coverImage: '/images/tome3-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — La Sécheresse du Cœur (جفاف القلب)
    // ============================================================
    {
      id: 't3c1',
      tomeId: 'tome3',
      number: 1,
      title: 'La Sécheresse du Cœur',
      titleAr: 'جفاف القلب',
      scenes: [
        // --- t3c1s1: Un matin différent ---
        {
          id: 't3c1s1',
          chapterId: 't3c1',
          title: 'Un matin différent',
          narration: `Les semaines avaient filé comme des grains de sable entre les doigts, et quelque chose avait changé dans la maison Benali, quelque chose de subtil, d'insaisissable, comme une couleur qui s'estompe lentement d'un tableau qu'on regarde tous les jours sans vraiment le voir. Nawfel s'assit au bord de son lit, les yeux mi-clos, et sentit aussitôt cette sensation étrange — un vide, une sécheresse au creux de sa poitrine, comme si le petit jardin intérieur qu'il avait autrefois visité avait été frappé d'une longue et silencieuse sécheresse.\n\nDehors, Chefchaouen brillait sous un soleil d'été impitoyable. Les murs blancs et bleus étincelaient, les escaliers pavés renvoyaient une lumière crue qui obligait les passants à plisser les yeux. Un âne chargé de paniers de figues fraîches descendait lentement la rue principale, guidé par un vieil homme au visage tanné par le soleil et le vent. Le marché du matin était en pleine effervescence — les voix des marchands criaient les prix des pastèques, des dattes fraîches et du fromage de chèvre, tandis que les femmes en haïk blanc circulaient entre les étals comme des fantômes gracieux.\n\nMais Nawfel ne trouvait aucune joie dans cette lumière éclatante. Depuis plusieurs jours, ses prières lui semblaient plates, comme de l'eau sans saveur. Les mots du Coran glissaient sur sa langue sans toucher son cœur. Même le dhikr, ces invocations que Sidi Mu'adh lui avait enseignées et qu'il récitait chaque soir, ne produisait plus en lui cette chaleur familière, cette douce quiétude qui l'apaisait autrefois.\n\nIl y avait un mot que Sidi Mu'adh avait prononcé un jour, un mot que Nawfel n'avait pas vraiment compris à l'époque mais qui lui revenait maintenant en mémoire comme un écho lointain : Qabd — la contraction, le resserrement. Le shaykh avait dit que le cœur du croyant connaît parfois des périodes de sécheresse, comme la terre connaît la sécheresse, et que ces moments étaient en réalité des épreuves de l'amour divin, des tests de patience envoyés par Allah pour voir si le serviteur resterait fidèle même quand la douceur disparaît.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Nawfel, tu viens ? L'école ne va pas attendre. Et maman a dit qu'il fallait aider Wassim à boutonner sa chemise.",
              emotion: 'neutral',
            },
            {
              characterId: 'nawfel',
              text: "Oui... j'arrive. Juste une seconde.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s2',
          background: 'bedroom',
        },

        // --- t3c1s2: L'école du village ---
        {
          id: 't3c1s2',
          chapterId: 't3c1',
          title: "L'école du village",
          narration: `L'école du village de Chefchaouen n'était pas grande — deux salles de classe, une cour pavée où poussaient un olivier centenaire et quelques lauriers-roses, et un petit minaret en briques rouges qui servait de repère visuel à toute la vallée. Mais ce matin, Nawfel la trouvait encore plus étroite, plus étouffante que d'habitude. Les murs blancs semblaient se rapprocher, et le bourdonnement des voix de ses camarades lui donnait mal à la tête.\n\nLe maître, un homme sec et exigeant du nom de Moulay Hicham, dictait une leçon de grammaire arabe que Nawfel aurait normalement trouvée intéressante. Les mots de la langue sacrée, les racines trilitères, les déclinaisons complexes — tout cela le passionnait d'ordinaire. Mais aujourd'hui, chaque mot glissait sur son esprit comme de l'eau sur la pierre, sans laisser de trace. Son cahier restait ouvert sur une page blanche, et son stylo, posé en travers du bureau, n'avait pas écrit une seule ligne.\n\nÀ la récréation, ses amis l'invitèrent à jouer au football dans la cour, mais Nawfel déclina d'un geste las. Il s'assit à l'ombre de l'olivier, le dos contre le tronc rugueux, et fixa le ciel d'un bleu implacable. C'est là que Wassim vint le rejoindre, son petit visage soucieux collé contre le sien, ses grands yeux lumineux fixant son grand frère avec cette prescience étrange qui le caractérisait.\n\nWassim possédait ce don que Sidi Mu'adh appelait la Basira — la vision du cœur. Il ne pouvait pas pénétrer dans le monde intérieur comme Nawfel, mais il percevait les couleurs de l'âme, les nuances invisibles de l'esprit. Et en ce moment, ce qu'il voyait chez Nawfel le troublait profondément.\n\n— Ton cœur est tout gris, dit Wassim d'une voix petite et sérieuse. Avant, il était tout doré et lumineux. Maintenant, il ressemble au sable quand il n'y a plus d'eau. Nawfel... tu es malade ?`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Ton cœur est tout gris, Nawfel. Avant il était tout doré. Maintenant il ressemble au sable quand il n'y a plus d'eau. Tu es malade ?",
              emotion: 'sad',
            },
            {
              characterId: 'nawfel',
              text: "Non, Wassim, je ne suis pas malade. C'est juste que... c'est compliqué. Les choses ne sont plus comme avant.",
              emotion: 'sad',
            },
            {
              characterId: 'wassim',
              text: "Tu devrais parler à Sidi Mu'adh. Lui, il sait soigner les cœurs.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s3',
          background: 'school',
        },

        // --- t3c1s3: Retour à la zawiyah ---
        {
          id: 't3c1s3',
          chapterId: 't3c1',
          title: 'Retour à la zawiyah',
          narration: `Ce soir-là, après la prière du Maghrib, Mehdi emmena Nawfel à la zawiyah de Sidi Mu'adh. La route habituelle leur sembla plus longue que d'habitude, les ruelles plus sombres, les ombres plus épaisses. Nawfel marchait en silence, les yeux baissés, les sandales claquant doucement sur les pavés humides de la rosée du soir. Son père ne disait rien non plus, mais sa présence — solide, chaude, rassurante — était comme un rempart contre le vide qui menaçait d'engloutir le cœur du garçon.\n\nLa zawiyah était exactement comme Nawfel se la rappelait : le bois de cèdre, l'encens, les tapis berbères, les panneaux de calligraphie, et cette lumière oblique qui descendait de la petite fenêtre en hauteur comme un cadeau du ciel. Mais Nawfel ne ressentit pas cette fois le même émerveillement que lors de sa première visite. Son cœur restait fermé, hermétique, comme une porte rouillée que plus rien ne pouvait ouvrir.\n\nSidi Mu'adh les attendait, assis sur son tapis de prière dans la même posture immobile que toujours. Quand Nawfel s'assit devant lui, le shaykh ne lui demanda pas comment il allait. Il ne lui dit pas non plus que tout allait s'arranger. Il le regarda longuement, avec ces yeux qui voyaient l'invisible, et puis il sourit — un sourire si doux, si immense, que Nawfel sentit quelque chose frémir au fond de lui, comme une étincelle dans les cendres d'un feu éteint.\n\n— Ah, dit Sidi Mu'adh d'une voix murmureuse, te revoilà, petit cœur. Tu es venu me voir parce que ton cœur est devenu comme un désert, n'est-ce pas ? Ne t'inquiète pas. Ce que tu ressens est non seulement normal, mais nécessaire. Dans la voie spirituelle — la Tariqa — il y a des moments d'expansion et des moments de contraction. Le Prophète ﷺ a dit que le cœur du croyant est entre deux des doigts du Tout Miséricordieux, et Il le retourne comme Il le souhaite. Ta sécheresse n'est pas un abandon d'Allah. C'est une épreuve — une Ibtila'. Et l'épreuve, petit cœur, est la preuve que Allah t'aime.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... mes prières sont vides. Le Coran ne me touche plus. Même le dhikr... je le dis, mais c'est comme si les mots ne vont nulle part. J'ai peur d'avoir fait quelque chose de mal.",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu n'as rien fait de mal, petit cœur. Ce que tu vis s'appelle Qabd — la contraction du cœur. C'est une station du voyage spirituel, une vallée que traverse tout chercheur de vérité. Les Soufis disent : « Si tu goûtes à la douceur de la prière un jour, et que le lendemain tu ne la goûtes plus, ne désespère pas. Continue, car Allah te teste. »",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Une épreuve ? Mais pourquoi Allah m'éprouverait-Il ? Je ne suis qu'un enfant.",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Allah éprouve ceux qu'Il aime, Nawfel. Un orfèvre ne purifie l'or que en le passant dans le feu. Et plus l'or est précieux, plus le feu doit être fort. Tu es précieux aux yeux d'Allah, et cette sécheresse va te rendre encore plus fort — si tu la traverses avec patience.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s4',
          background: 'zawiyah',
        },

        // --- t3c1s4: La leçon du désert ---
        {
          id: 't3c1s4',
          chapterId: 't3c1',
          title: 'La leçon du désert',
          narration: `Sidi Mu'adh se leva et marcha lentement vers la fenêtre en hauteur de la zawiyah. De là, on apercevait les toits de Chefchaouen et, au-delà, les montagnes du Rif qui se découpaient contre un ciel de nuit parsemé d'étoiles. Le shaykh resta un long moment silencieux, contemplant l'horizon comme s'il y lisait quelque chose que personne d'autre ne pouvait voir.\n\nPuis il se retourna vers Nawfel, et son visage portait une expression que le garçon n'avait jamais vue chez lui — quelque chose entre la gravité et la tendresse, comme un père qui doit envoyer son enfant au loin.\n\n— Cette nuit, petit cœur, dit le shaykh, tu vas retourner dans ton monde intérieur. Mais ce que tu y verras sera différent du jardin que tu as visité la première fois. Le paysage intérieur change avec l'état de ton cœur, et en ce moment, ton cœur est en sécheresse. Tu verras un désert — un vaste désert de sable doré sous un ciel de feu. N'aie pas peur. Le désert n'est pas vide. Il est plein de leçons que l'oasis ne peut pas t'enseigner.\n\nSidi Mu'adh prit la main de Nawfel et ferma les yeux. Sa voix devint un murmure, presque un chant, une incantation ancienne dont les mots arabes résonnaient comme des gouttes d'eau dans une caverne souterraine.\n\n— Rappelle-toi, petit cœur : dans le désert, le voyageur ne survit pas en courant. Il survit en marchant, un pas après l'autre, avec patience et confiance en Allah. L'eau que tu cherches ne se trouve pas au bout du désert. Elle se trouve en toi — dans ta capacité à être patient, à être généreux même quand tu n'as rien, à rester humble même quand ton ego te crie de t'enorgueillir. Ce sont ces qualités que le désert va tester. Sois prêt.\n\nNawfel sentit ses paupières devenir lourdes. Les murs de la zawiyah commencèrent à vaciller, à se dissoudre, comme une peinture à l'eau sous la pluie. La dernière chose qu'il vit avant de sombrer dans le sommeil fut le visage de Sidi Mu'adh, ses yeux brillant d'une lueur d'or tendu, et ses lèvres qui murmuraient une invocation que Nawfel connaissait par cœur : « Allahoumma ya muqallibal-qulub, thabbit qalbi 'ala dinik — Ô Allah, Toi qui retournes les cœurs, affermis mon cœur sur Ta religion. »`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Cette nuit, tu vas retourner dans ton monde intérieur. Mais tu verras un désert, pas un jardin. Le paysage change avec ton cœur, Nawfel. N'aie pas peur — le désert est plein de leçons que l'oasis ne peut pas t'enseigner.",
              emotion: 'wise',
            },
            {
              characterId: 'mehdi',
              text: "Sidi Mu'adh... est-ce sûr ? Mon fils est encore si jeune.",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Mehdi, Allah ne met sur le cœur d'aucun serviteur un fardeau qu'il ne peut porter. Nawfel est prêt. Il l'a toujours été. C'est nous qui devons lui faire confiance.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s5',
          background: 'zawiyah',
        },

        // --- t3c1s5: Le désert intérieur ---
        {
          id: 't3c1s5',
          chapterId: 't3c1',
          title: 'Le désert intérieur',
          narration: `Nawfel ouvrit les yeux et se retrouva debout au milieu d'un désert d'une immensité à couper le souffle. Le sable s'étendait dans toutes les directions, une mer dorée et infinie, ondulée de dunes hautes comme des vagues figées dans le temps. Le ciel au-dessus de lui n'était pas bleu — il était d'un jaune orangé brûlant, comme si le soleil et le ciel n'en faisaient qu'un, une voûte incandescente qui faisait trembler l'air et déformer l'horizon en mirages fantomatiques.\n\nCe n'était plus le jardin merveilleux de son premier voyage. Les arbres dorés avaient disparu, les fleurs chantantes s'étaient fanées, la porte avec « قلب » gravé dessus s'était effacée comme un rêve sous le soleil. À la place, il y avait ce désert — aride, silencieux, terrifiant dans sa beauté implacable. Nawfel sentit la chaleur lui brûler la peau, dessécher sa gorge. Chaque respiration était un effort, chaque battement de cœur un tambour qui résonnait dans le vide.\n\nMais au milieu de cette immensité stérile, Nawfel remarqua quelque chose. À ses pieds, dans le sable, il y avait des traces — des empreintes de pas anciennes, à moitié enfouies par le vent. Quelqu'un d'autre était passé ici avant lui. Les traces formaient un chemin sinueux qui serpentait entre les dunes, et Nawfel, poussé par un instinct qu'il ne pouvait pas nommer, décida de les suivre.\n\nÀ mesure qu'il avançait, le vent se leva, soufflant des nuages de sable fin qui lui piquaient le visage et lui remplissaient les yeux. Nawfel plissa les paupières, leva sa main pour protéger son visage, et continua à marcher. La sécheresse du désert reflétait la sécheresse de son cœur, et Nawfel comprit avec une clarté soudaine que ce paysage n'était pas un lieu extérieur — c'était lui-même, son propre intérieur vu de l'extérieur, avec toute sa solitude, sa peur et sa soif.\n\n— Il faut marcher, murmura-t-il pour se donner du courage. Un pas après l'autre. Comme Sidi Mu'adh l'a dit. Un pas après l'autre.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Un pas après l'autre... Bismillah...",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s6',
          background: 'desert',
        },

        // --- t3c1s6: La sablifère de la soif ---
        {
          id: 't3c1s6',
          chapterId: 't3c1',
          title: 'La sablifère de la soif',
          narration: `Le chemin d'empreintes mena Nawfel au sommet d'une dune immense, et de là, il vit quelque chose qui le glaça jusqu'aux os malgré la chaleur accablante. Au pied de la dune, dans une cuvette naturelle entre les vagues de sable, se trouvait ce qui ressemblait à une oasis — des palmiers, de l'eau claire, de l'ombre fraîche. Mais quelque chose n'allait pas. L'eau était entourée d'une sorte de barrière invisible, et les palmiers, bien que verts et luxuriants, avaient un éclat étrange, presque métallique, comme s'ils n'étaient pas tout à fait réels.\n\nNawfel descendit la dune en courant, la soif lui brûlant la gorge, le désir d'eau pure le consumant. Mais à mesure qu'il approchait, il vit la vérité. L'oasis était gardée. Non pas par une sentinelle humaine, mais par une créature — ou plutôt, par une absence, un vide vivant, une entité faite de manque et de rétention. Elle était assise au milieu de l'eau comme un crapaud énorme fait de sable noir, et autour d'elle, des volutes de lumière liquide s'enroulaient et disparaissaient dans son corps informe, avalant chaque goutte, chaque rayon, chaque souffle de vie.\n\nL'eau de l'oasis, Nawfel le comprit, ne s'évaporait pas naturellement. Elle était bue, absorbée, engloutie par cette chose — cette chose qui ne prenait que, qui ne donnait jamais, qui accumulait sans partage. Les palmiers étaient verts parce qu'ils absorbaient la lumière que la créature ne pouvait pas voler, mais même leurs racines semblaient luttent, blanches et tendues, comme des doigts qui cherchent désespérément l'eau que le monstre leur refusait.\n\n— Qui es-tu ? cria Nawfel, sa voix se perdant dans l'immensité du désert.\n\nLa créature tourna lentement sa tête — si l'on pouvait appeler cela une tête. Elle n'avait pas de visage, pas d'yeux, juste une ouverture noire, un trou béant qui ressemblait à une gueule et d'où s'échappa un son grave, guttural, comme le grondement lointain d'un tremblement de terre.\n\n— Je suis ce que tu refuses de voir en toi, dit la voix. Je suis Al-Bukhl — l'Avarice, le Hoarding Worm, البخل. Et cette eau... cette lumière... tout cela est à moi. À moi seul.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Rends-moi l'eau ! L'eau n'appartient pas à un seul être ! C'est un don d'Allah !",
              emotion: 'angry',
            },
          ],
          choices: [
            {
              id: 't3c1s6_c1',
              text: "Essayer de forcer le passage pour atteindre l'eau",
              nextSceneId: 't3c2s1',
            },
            {
              id: 't3c1s6_c2',
              text: "Rester immobile et observer Al-Bukhl, chercher sa faiblesse",
              nextSceneId: 't3c2s1',
              badgeId: 'sabr',
              isCorrect: true,
            },
          ],
          background: 'desert',
          isEnding: true,
          lesson: {
            title: 'Al-Qabd — La contraction du cœur',
            content:
              "La sécheresse spirituelle (Qabd) est une épreuve commune sur le chemin de la connaissance d'Allah. Les grands maîtres spirituels, comme Ibn Ata'illah al-Iskandari, enseignent que ces moments de vide ne sont pas des punitions mais des tests d'amour. Le voyageur sincère continue à prier et à faire le dhikr même quand il ne ressent rien, car sa foi repose sur la certitude et non sur les sentiments.",
            quote: 'إن لله أقواماً اختصهم بالبلاء لأذاقهم حلاوة الإيمان',
            source: 'Hadith rapporté par At-Tirmidhi',
          },
        },
      ],
      lessons: [],
    },

  ],
};
