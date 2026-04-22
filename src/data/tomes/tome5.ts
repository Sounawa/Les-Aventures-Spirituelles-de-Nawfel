import type { Tome } from '@/types/story';

export const tome5: Tome = {
  id: 'tome5',
  number: 5,
  title: 'Al-Mutma\'inna',
  titleAr: 'النفس المطمئنة',
  subtitle: 'Le voyage ultime vers la paix du cœur',
  description:
    "Le moment est venu. Après avoir traversé les épreuves de la colère, de l'avidité, de l'ostentation et de la confusion, Nawfel doit affronter l'ultime bataille — celle qui se déroule au cœur même de son être. Al-Nafs Al-Ammara Suprême, le maître suprême de l'ego, règne sur une forteresse impénétrable construite avec chaque peur, chaque attachement, chaque désir que Nawfel a jamais porté. Mais cette fois, Sidi Mu'adh lui révélera un secret ancien : les monstres ne doivent pas être détruits — ils doivent être transformés. C'est l'essence d'Al-Ihsan, l'excellence spirituelle, le plus haut niveau du cheminement. Le voyage de Nawfel touche à sa fin, et la paix du cœur attend.",
  theme: 'L\'ultime épreuve — la transformation complète du Nafs',
  coverImage: '/images/tome5-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — L'Appel Final (الدعوة الأخيرة)
    // ============================================================
    {
      id: 't5c1',
      tomeId: 'tome5',
      number: 1,
      title: "L'Appel Final",
      titleAr: 'الدعوة الأخيرة',
      scenes: [
        // --- t5c1s1: Une nuit sans lune ---
        {
          id: 't5c1s1',
          chapterId: 't5c1',
          title: 'Une nuit sans lune',
          narration: `La nuit était tombée sur Chefchaouen comme un voile de soie noire, sans une seule étoile pour percer l'obscurité. Nawfel était assis au bord de son lit, les yeux grands ouverts, incapable de dormir. Depuis des semaines, il ressentait quelque chose d'étrange — pas de la peur, pas de l'anxiété, mais une vibration profonde, comme si son cœur était accordé à une fréquence que ses oreilles ne pouvaient pas entendre.\n\nC'était un appel. Silencieux, insistants, et pourtant d'une douceur immense. Il venait de l'intérieur — de ce lieu mystérieux qu'il avait appris à connaître au fil de ses voyages dans son monde intérieur. Mais cette fois, l'appel était différent de tous ceux qu'il avait reçus auparavant. Il ne s'agissait pas d'une urgence, ni d'un cri de détresse. C'était une invitation. Un rendez-vous.\n\nLe vent souffla doucement à travers la fenêtre entrouverte, apportant avec lui le parfum des jasmins du jardin et une mélodie lointaine que Nawfel ne pouvait pas identifier. Il ferma les yeux et tendit l'oreille. La mélodie se rapprocha — c'était le son d'un tambourin, ou peut-être d'un cœur qui bat, ou peut-être des deux à la fois. Et avec le son vint une voix, pas dans ses oreilles mais dans sa poitrine, une voix qu'il connaissait mieux que la sienne propre.\n\n« Petit cœur... il est temps. »\n\nLes mots de Sidi Mu'adh résonnèrent dans tout son être comme un coup de gong dans une caverne. Nawfel ouvrit les yeux et regarda ses mains — elles tremblaient légèrement, mais ce n'était pas de la peur. C'était de l'anticipation, la sensation que l'on ressent la veille d'un grand voyage, quand on sait que le monde tel qu'on le connaît est sur le point de changer pour toujours.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... c'est toi ? Le moment est venu ? La bataille finale ?",
              emotion: 'determined',
            },
            {
              characterId: 'souhayl',
              text: "Nawfel ? Tu es encore éveillé ? Tu parles tout seul depuis cinq minutes...",
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s2',
          background: 'bedroom',
        },

        // --- t5c1s2: La dernière leçon ---
        {
          id: 't5c1s2',
          chapterId: 't5c1',
          title: 'La dernière leçon',
          narration: `Dès l'aube, Nawfel courut vers la zawiyah. Les rues de Chefchaouen étaient encore endormies, peintes dans ces nuances de bleu et de blanc qui faisaient la beauté du village, mais Nawfel ne les voyait pas. Son cœur battait trop fort pour qu'il prête attention aux couleurs du monde extérieur.\n\nQuand il arriva à la zawiyah, il trouva la porte entrouverte et une lumière dorée filtrant à travers l'interstice. Sidi Mu'adh était assis au centre de la pièce, ses mains posées sur ses genoux, ses yeux mi-clos dans cet état de contemplation paisible que Nawfel avait appris à reconnaître. Mais cette fois, il y avait quelque chose de différent dans l'atmosphère — une gravité, une solennité, comme si la zawiyah elle-même savait que ce jour était special.\n\n— Assieds-toi, petit cœur, dit Sidi Mu'adh sans ouvrir les yeux.\n\nNawfel s'assit en face de lui, croisant les jambes comme il l'avait fait tant de fois. Le silence dura un long moment — pas un silence vide, mais un silence plein, un silence qui contenait des milliers de mots non prononcés.\n\n— Ce que tu vas affronter, commença Sidi Mu'adh, est différent de tout ce que tu as connu. Les monstres que tu as combattus jusqu'ici — la colère, l'avidité, l'ostentation, la confusion — étaient des soldats. Des serviteurs. Ce que tu vas rencontrer maintenant est leur maître. Al-Nafs Al-Ammara Suprême — le commandant suprême de l'ego. Il est plus ancien que toi, plus ancien que tes peurs, plus ancien que tes désirs. Il existe depuis le premier jour où l'être humain a dit « moi » pour la première fois.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Al-Nafs Al-Ammara Suprême... je l'ai senti. Dans mes rêves, ces derniers temps. Il est comme une ombre géante derrière tout le reste.",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu le sens parce qu'il fait partie de toi, petit cœur. Il n'est pas un ennemi extérieur — il est l'expression la plus puissante de l'ego humain. Et pour le vaincre, tu devras apprendre quelque chose qu'aucun guerrier ne peut t'enseigner : la transformation.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s3',
          background: 'zawiyah',
        },

        // --- t5c1s3: La promesse avant le départ ---
        {
          id: 't5c1s3',
          chapterId: 't5c1',
          title: 'La promesse avant le départ',
          narration: `Nawfel rentra à la maison le cœur lourd d'une responsabilité qu'il avait du mal à porter. Sidi Mu'adh lui avait expliqué les rudiments de ce qui l'attendait — une forteresse immense au centre de son monde intérieur, construite siècle après siècle par les couches successives de son ego — mais il y avait tellement de choses que Nawfel ne comprenait pas encore.\n\nDans la cuisine, Aziza préparait le déjeuner. L'arôme du pain frais et du tajine de poux aux pruneaux emplissait la maison d'une chaleur réconfortante. Mehdi était assis à la table, lisant un livre avec l'attention concentrée qu'il mettait dans tout ce qu'il faisait. Wassim jouait dans un coin avec ses billes de verre, et Souhayl faisait ses devoirs sur le petit bureau près de la fenêtre.\n\nQuand Nawfel entra, tout le monde leva les yeux. Il y eut un silence — pas long, mais suffisant pour que chacun sente que quelque chose de différent planait dans l'air.\n\n— Nawfel, dit Aziza en posant sa cuillère en bois. Ton visage me dit que tu as des nouvelles. Assieds-toi, mon fils.\n\nNawfel s'assit à table et prit une grande inspiration. Il avait promis à Sidi Mu'adh de ne révéler les détails de la bataille finale qu'à sa famille, car cette épreuve concernait non seulement son cœur, mais le cœur de tous ceux qu'il aimait. Chaque membre de sa famille avait joué un rôle dans sa formation spirituelle, et Nawfel voulait qu'ils sachent combien leur amour et leur soutien avaient compté.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh m'a dit que le moment était venu. La bataille finale... elle va avoir lieu bientôt. C'est la dernière.",
              emotion: 'determined',
            },
            {
              characterId: 'wassim',
              text: "La dernière bataille ? Nawfel, tu vas te battre encore ? Mais tu as déjà battu tellement de monstres !",
              emotion: 'scared',
            },
            {
              characterId: 'aziza',
              text: "Mon cœur... chaque bataille que tu mènes, c'est toute notre famille qui se bat avec toi. Nous serons là, comme toujours.",
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 't5c1s3_c1',
              text: "Promettre à Wassim que tout ira bien",
              nextSceneId: 't5c1s4a',
            },
            {
              id: 't5c1s3_c2',
              text: "Admettre que cette fois, il a peur",
              nextSceneId: 't5c1s4b',
              isCorrect: true,
            },
          ],
          background: 'kitchen',
        },

        // --- t5c1s4a: La promesse de Nawfel ---
        {
          id: 't5c1s4a',
          chapterId: 't5c1',
          title: 'La promesse de Nawfel',
          narration: `Nawfel posa sa main sur l'épaule de Wassim et lui fit un sourire qu'il espérait rassurant. Il voulait protéger son petit frère de toute inquiétude, comme il l'avait toujours fait. Mais au moment où il ouvrit la bouche pour lui promettre que tout irait bien, les mots se bloquèrent dans sa gorge.\n\nMehdi leva les yeux de son livre et regarda Nawfel avec une intensité que le garçon n'avait pas souvent vue chez son père. Ce n'était pas un regard de reproche, mais un regard de vérité — le genre de regard qui voit à travers les masques, même les masques bien intentionnés.\n\n— Nawfel, dit Mehdi doucement. Tu n'as pas besoin d'être fort devant ton petit frère. Tu as le droit d'avoir peur. Même les prophètes ont eu peur, mon fils. Mūsā, lorsqu'il a vu le serpent, a tremblé. Et Allah l'a quand même choisi. La peur n'est pas une faiblesse — c'est la preuve que tu comprends l'importance de ce que tu vas affronter.\n\nAziza posa sa main sur la joue de Nawfel et ajouta, avec sa voix douce comme le miel :\n\n— La vraie force, mon fils, ce n'est pas de ne pas avoir peur. C'est de ressentir la peur et de quand même avancer. Et tu sais quoi ? Tu n'avances pas seul. Jamais. Chaque fois que tu entres dans ton monde intérieur, nos prières t'accompagnent comme des bougies allumées dans l'obscurité.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "La peur est un compagnon de route, Nawfel, pas un ennemi. Accueille-la, écoute ce qu'elle a à te dire, et ensuite avance. C'est ainsi que les croyants marchent sur le chemin.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Tu as raison, Baba. J'ai peur. Vraiment peur. Et je pense que c'est bien que je le dise.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s5',
          background: 'kitchen',
        },

        // --- t5c1s4b: L'honnêteté de Nawfel ---
        {
          id: 't5c1s4b',
          chapterId: 't5c1',
          title: "L'honnêteté de Nawfel",
          narration: `Nawfel baissa la tête et les mots sortirent d'eux-mêmes, comme l'eau d'une source qui ne peut plus être contenue.\n\n— J'ai peur, dit-il d'une voix tremblante. Cette fois, c'est différent. Sidi Mu'adh m'a dit que le monstre que je vais affronter... il n'est pas comme les autres. Il est en moi depuis toujours. Il fait partie de moi. Comment est-ce qu'on peut se battre contre quelque chose qui fait partie de soi ?\n\nLe silence qui suivit fut profond, mais ce n'était pas un silence froid — c'était un silence chaud, enveloppant, comme une couverture posée sur des épaules frissonnantes. Wassim quitta ses billes et vint s'asseoir sur les genoux de Nawfel, le serrant de ses petits bras.\n\n— Tu n'es pas seul, murmura Wassim. Je ne peux pas entrer dans ton monde intérieur, mais je peux prier pour toi. Et mes prières, elles sont très fortes, Nawfel. Sidi Mu'adh me l'a dit.\n\nAziza ferma les yeux un instant, et Nawfel vit les larmes briller sur ses joues avant qu'elle ne les essuie discrètement. Mehdi posa sa main sur la tête de son fils et murmura une invocation que Nawfel avait entendue mille fois sans jamais en comprendre toute la profondeur : « Allahoumma la sahla illa ma ja'altahu sahla. »\n\n« Ô Allah, il n'y a de facilité que ce que Tu rends facile. » Et Nawfel sentit, pour la première fois depuis que l'appel avait retenti dans son cœur, un filament de paix se tisser dans sa poitrine. Pas assez pour dissiper la peur, mais assez pour lui rappeler que la peur et la confiance en Allah pouvaient coexister.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Nawfel, tu es le plus courageux de tous les garçons du monde. Même si tu as peur, tu avances quand même. C'est ça, le vrai courage !",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Allahoumma la sahla illa ma ja'altahu sahla. Ô mon Seigneur, rends cette épreuve facile pour mon fils. Protège son cœur comme seule Ta miséricorde sait le faire.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s5',
          background: 'kitchen',
        },

        // --- t5c1s5: Le passage de la porte ---
        {
          id: 't5c1s5',
          chapterId: 't5c1',
          title: 'Le passage de la porte',
          narration: `Cette nuit-là, Nawfel s'installa dans son lit avec la certitude tranquille que le voyage allait commencer. Il ferma les yeux et prononça les mots que Sidi Mu'adh lui avait enseignés pour ouvrir la porte de son monde intérieur — une invocation simple mais puissante, une clé faite de souffle et de lumière.\n\nInstantanément, il se retrouva dans le paysage familier de son monde intérieur. Mais quelque chose avait changé — radicalement. Le jardin lumineux qu'il avait traversé tant de fois était devenu un désert vaste et silencieux. Les fleurs avaient laissé place à des dunes dorées, et les rivières de lumière s'étaient asséchées. Au loin, à l'horizon, une structure immense se dressait contre un ciel d'un noir absolu — une forteresse colossale, plus grande que n'importe quoi que Nawfel avait jamais vue, faite d'un matériau qui n'était ni pierre ni métal, mais quelque chose de plus ancien, de plus dense, de plus réel.\n\nLa forteresse pulsat doucement, comme un cœur. Chaque pulsation envoyait une onde de sombre énergie à travers le désert, faisant vibrer le sable sous les pieds de Nawfel. C'était vivant. La forteresse était vivante.\n\nNawfel sentit une présence derrière lui et se retourna. Sidi Mu'adh se tenait là, mais pas comme d'habitude — il était translucide, comme un hologramme fait de lumière et de prière. Ses yeux brillaient d'une intensité que Nawfel n'avait jamais vue.\n\n— Voici la forteresse d'Al-Nafs Al-Ammara Suprême, dit le shaykh. Chaque mur, chaque tour, chaque pierre a été construite avec tes peurs, tes attachements, tes désirs. C'est l'architecture de ton ego, Nawfel. Et tu dois y entrer.\n\n— Mais... comment ? demanda Nawfel en regardant les murs vertigineux qui semblaient s'élever jusqu'au ciel.\n\n— Pas en te battant, répondit Sidi Mu'adh. Jamais en te battant. En transformant.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Écoute bien, petit cœur, car c'est la leçon la plus importante de toutes. Les monstres que tu as combattus jusqu'ici... ils ne sont pas morts. Ils sont là, à l'intérieur de cette forteresse, renforcés par chaque bataille que tu as menée contre eux. Car chaque fois que tu as 'détruit' un monstre par la force, tu as en réalité nourri sa version suprême. Il y a un autre chemin.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Un autre chemin ? Mais Sidi Mu'adh, jusqu'ici on m'a appris à me battre contre les monstres intérieurs !",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Se battre, c'était le premier pas. Le第二步 est d'apprendre à les regarder avec les yeux de la miséricorde. Car ces monstres ne sont pas des ennemis, Nawfel. Ce sont des parties de toi qui souffrent.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s6',
          background: 'desert',
        },

        // --- t5c1s6: Le seuil de la forteresse ---
        {
          id: 't5c1s6',
          chapterId: 't5c1',
          title: 'Le seuil de la forteresse',
          narration: `Nawfel marcha à travers le désert, chaque pas l'enveloppant dans un silence de plus en plus profond. Le sable under ses pieds n'émettait aucun son, comme s'il marchait sur un tapis de velours. L'air lui-même semblait suspendu, immobile, comme si le temps avait arrêté de couler dans cette partie de son monde intérieur.\n\nÀ mesure qu'il s'approchait de la forteresse, il commença à voir des détails qui le firent frissonner. Les murs n'étaient pas faits d'une seule matière — ils étaient composés de milliers de fragments, chacun portant une image, un souvenir, une émotion. Nawfel reconnut certains d'entre eux : le jour où il avait frappé Souhayl par colère, le moment où il avait refusé de partager ses jouets avec Wassim, la fois où il avait menti à sa mère pour éviter une punition.\n\nChaque fragment était un moment où son Nafs avait eu le dessus — chaque souvenir une brique dans la construction de l'ego. Et ensemble, ils formaient un édifice d'une complexité vertigineuse, un labyrinthe de souvenirs et de désirs si dense qu'il semblait impossible à traverser.\n\nLa porte de la forteresse était massive — haute comme un immeuble de trois étages, faite d'un métal sombre qui semblait absorber la lumière plutôt que de la refléter. Au centre de la porte, une inscription brillait faiblement en lettres arabes : « من دخله أغلق عليه » — « Celui qui y entre, la porte se referme sur lui. »\n\nNawfel posa sa main sur la porte. Elle était tiède, presque vivante, et il sentit sous ses doigts un battement régulier — le battement de son propre cœur, amplifié et projeté à travers le métal sombre. Il prit une profonde inspiration, ferma les yeux, et poussa.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je ne suis pas un guerrier cette fois. Je suis... un guérisseur. Sidi Mu'adh m'a dit de ne pas me battre, mais de transformer. Allahoumma ihdina s-sirata l-mustaqim.",
              emotion: 'determined',
            },
          ],
          choices: [],
          background: 'door',
          isEnding: true,
          lesson: {
            title: "L'appel du cœur — L'éveil final",
            content:
              "Le cheminement spirituel passe par plusieurs étapes. Après avoir appris à reconnaître ses défauts et à se battre contre eux, le croyant atteint un niveau supérieur : celui où il comprend que les parts sombres de lui-même ne sont pas des ennemis à détruire, mais des blessures à guérir. C'est le début d'Al-Ihsan — l'excellence spirituelle — qui consiste à adorer Allah comme si on Le voyait, et à savoir que Lui nous voit.",
            quote: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
            source: 'Coran, Sourate At-Talaq (65:2)',
          },
        },
      ],
      lessons: [],
    },

  ],
};
