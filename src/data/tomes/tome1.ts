import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome1: Tome = {
  id: 'tome1',
  number: 1,
  title: "L'Éveil",
  titleAr: 'الصحوة',
  subtitle: 'Le voyage intérieur de Nawfel',
  description:
    "Dans un petit village au pied des montagnes du Rif, un garçon de huit ans découvre que son cœur recèle un monde invisible. Entre rêves mystérieux et l'enseignement d'un sage shaykh, Nawfel apprend que le plus grand des combats est celui que l'on mène contre soi-même. Ce premier tome l'initie aux trois états du Nafs et au premier des monstres intérieurs : la colère.",
  theme: 'Tawakkul & Sabr — Foi et Patience',
  coverImage: '/images/tome1-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Rêve Étrange (الحلم الغريب)
    // ============================================================
    {
      id: 't1c1',
      tomeId: 'tome1',
      number: 1,
      title: 'Le Rêve Étrange',
      titleAr: 'الحلم الغريب',
      scenes: [
        // --- t1c1s1: Une nuit particulière ---
        {
          id: 't1c1s1',
          chapterId: 't1c1',
          title: 'Une nuit particulière',
          narration: `La maison de la famille Benali était plongée dans un silence doux, ce genre de silence qui ne se trouve qu'au cœur de la nuit, quand le monde entier semble retenir son souffle. Dehors, le ciel de Chefchaouen était parsemé d'étoiles si nombreuses qu'on aurait dit que Allah avait déversé un sac de diamants sur un velours bleu foncé. Le vent soufflait doucement entre les ruelles blanches et bleues du village, portant avec lui le parfum des jasmins qui grimpaient le long des murettes anciennes.\n\nNawfel, allongé dans son lit étroit, fixait le plafond de sa petite chambre qu'il partageait avec ses deux frères. Souhayl, l'aîné de dix ans, dormait déjà dans le lit voisin, son visage paisible illuminé par la lune qui filtrait à travers les volets en bois sculpté. Wassim, le plus jeune à six ans, était blotti contre lui, sa main petite serrée sur le coin de la couverture, comme s'il tenait quelque chose de précieux.\n\nNawfel, lui, ne trouvait pas le sommeil. Il y avait quelque chose de différent ce soir, une étrange sensation, comme si l'air lui-même vibrait d'une énergie invisible. Son cœur battait un peu plus vite que d'habitude, non pas de peur, mais d'une attente qu'il ne pouvait pas nommer. Il se tourna sur le côté, fermant les yeux, et commença à réciter doucement la sourate Al-Fatiha, comme sa mère Aziza lui avait appris à le faire chaque soir avant de dormir. Les mots familiers coulaient sur ses lèvres comme de l'eau fraîche, et peu à peu, la fatigue finit par l'emporter. Ses paupières devinrent lourdes, et le monde réel commença à s'effacer doucement, laissant place à quelque chose d'entièrement nouveau.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Bismillah... Allahoumma bismika amoutou wa ahya...",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s2',
          background: 'bedroom',
        },

        // --- t1c1s2: Le jardin magique ---
        {
          id: 't1c1s2',
          chapterId: 't1c1',
          title: 'Le jardin magique',
          narration: `Nawfel se retrouva debout, non pas dans sa chambre, mais dans un jardin d'une beauté surnaturelle qui lui coupa le souffle. Tout autour de lui s'étendait un paysage qui ne ressemblait à rien de ce qu'il avait jamais vu, même dans les plus beaux livres que possédait l'école du village. Le sol sous ses pieds était d'un vert émeraude si profond qu'il semblait lumineux de lui-même, comme si la terre elle-même était vivante et respirait.\n\nDes arbres immenses s'élevaient vers un ciel qui n'était ni bleu ni noir, mais d'un violet doré, parsemé de lumières dansantes qui ressemblaient à des étoiles, mais qui bougeaient et tournoyaient comme des lucioles géantes. Les feuilles de ces arbres n'étaient pas vertes : elles étaient faites d'or fin, et quand le vent — un vent chaud et parfumé — les faisait frissonner, elles produisaient un son délicat, une mélodie cristalline qui ressemblait au doux tintement de milliers de petites clochettes.\n\nAu centre de ce jardin merveilleux, des fleurs d'une taille extraordinaire poussaient en cercles parfaits. Leurs pétales étaient de toutes les couleurs imaginables et certaines qu'on ne pouvait même pas décrire avec des mots. Et ces fleurs chantaient. Oui, elles chantaient vraiment. Chaque pétale, en s'ouvrant et en se refermant doucement, émettait une note de musique si pure, si douce, que Nawfel sentit des larmes de joie monter à ses yeux sans savoir pourquoi.\n\nMais ce qui attira le plus son attention, c'était la grande porte qui se dressait au bout d'un chemin de lumière blanche. Elle était immense, faite d'un bois sombre veiné d'or et d'argent, et elle irradiait une chaleur qui ressemblait à celle d'un foyer en hiver. Au-dessus de la porte, gravé dans une calligraphie d'une beauté à couper le souffle, un mot brillait d'une lumière propre, comme un soleil miniature : « قلب » — le cœur. Nawfel sentit que cette porte était importante, qu'elle attendait quelque chose de lui, ou plutôt, qu'elle attendait lui.`,
          dialogues: [],
          choices: [],
          nextSceneId: 't1c1s3',
          background: 'inner_world',
        },

        // --- t1c1s3: La voix mystérieuse ---
        {
          id: 't1c1s3',
          chapterId: 't1c1',
          title: 'La voix mystérieuse',
          narration: `Alors que Nawfel avançait lentement sur le chemin de lumière, ses pieds nus effleurant le sol tiède et vivant, une voix se fit entendre. Elle ne venait d'aucune direction précise. Elle semblait naître de partout à la fois — du ciel, de la terre, des arbres dorés, des fleurs chantantes — comme si le jardin entier parlait d'une seule et même voix.\n\nC'était une voix douce, infiniment douce, mais qui portait en elle une profondeur qui faisait trembler légèrement l'air autour de Nawfel. Ce n'était pas une voix d'homme ni de femme, pas tout à fait. C'était quelque chose de plus ancien, de plus vaste, comme le murmure de l'océan quand la nuit est calme et que les vagues caressent le rivage sans se presser.\n\n— Nawfel... dit la voix, et Nawfel frissonna de la tête aux pieds, car elle prononçait son nom comme personne ne l'avait jamais fait, avec une tendresse et une connaissance qui dépassaient tout ce qu'il avait connu.\n\nLe garçon s'arrêta net. Son cœur battait si fort qu'il l'entendait dans ses oreilles. Devant lui, la grande porte avec « قلب » gravé dessus pulse doucement, comme un cœur vivant, et la lumière qui en émanait semblait l'appeler, l'inviter à avancer. Mais quelque chose en lui — un instinct, une intuition — lui disait qu'il devait choisir comment répondre à cette invitation. Ce choix, même s'il ne le savait pas encore, serait le premier d'une longue série de choix qui allaient définir qui il allait devenir.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: 'Qui... qui es-tu ? Où suis-je ?',
              emotion: 'scared',
            },
          ],
          choices: [
            {
              id: 't1c1s3_c1',
              text: "S'avancer courageusement vers la voix et la porte",
              nextSceneId: 't1c1s4a',
              badgeId: 'tawakkul',
              isCorrect: true,
            },
            {
              id: 't1c1s3_c2',
              text: "Attendre patiemment sans bouger, en silence",
              nextSceneId: 't1c1s4b',
              badgeId: 'sabr',
              isCorrect: true,
            },
            {
              id: 't1c1s3_c3',
              text: "Reculer, cette situation est trop étrange",
              nextSceneId: 't1c1s4c',
            },
          ],
          background: 'inner_world',
        },

        // --- t1c1s4a: Le cœur qui s'ouvre ---
        {
          id: 't1c1s4a',
          chapterId: 't1c1',
          title: 'Le cœur qui s\'ouvre',
          narration: `Nawfel prit une grande inspiration, sentant l'air parfumé du jardin remplir ses poumons, et il fit un pas en avant. Puis un autre. Puis un autre encore. Chaque pas semblait plus léger que le précédent, comme si le jardin lui-même le portait, l'encourageait à avancer. La peur n'avait pas disparu — elle était toujours là, tapie dans un coin de son esprit — mais Nawfel avait pris la décision de ne pas l'écouter. Et c'était suffisant.\n\nÀ mesure qu'il approchait de la porte, la chaleur qui en émanait augmenta, mais c'était une chaleur bienfaisante, comme celle d'un rayon de soleil en plein hiver, ou celle des bras de sa mère quand il revait d'être petit. Les caractères « قلب » au-dessus de la porte commencèrent à briller plus intensément, et Nawfel distingua, dans leur lumière dorée, ce qui ressemblait à des arabesques infinies, des motifs qui se déplaçaient et se transformaient comme les vagues de la mer.\n\nLa voix parla de nouveau, et cette fois, Nawfel sentit que les mots ne venaient pas seulement de l'extérieur mais résonnaient à l'intérieur de lui, dans son propre cœur.\n\n— Tu as choisi de venir vers moi avec courage, petit cœur. Sache que le courage n'est pas l'absence de peur. Le courage, c'est avancer malgré la peur, en faisant confiance à Celui qui a tout créé. C'est cela, le Tawakkul — la confiance totale en Allah. Quand tu te sens petit et perdu, souviens-toi que Celui qui a créé les étoiles et les océans ne t'abandonnera jamais. Tu es plus précieux à Ses yeux que tu ne pourrais jamais l'imaginer.\n\nNawfel sentit ses yeux se mouiller de larmes. Il ne comprenait pas tout ce que la voix disait, mais il sentait que chaque mot était vrai, d'une vérité qui venait du plus profond de l'univers.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je n'ai pas peur. Enfin... si, un peu. Mais je veux savoir.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s5',
          background: 'inner_world',
          earnedBadgeId: 'tawakkul',
          lesson: {
            title: 'Le Tawakkul — La confiance en Allah',
            content:
              "Le Tawakkul, c'est placer sa confiance totale en Allah. Ce n'est pas de la passivité — c'est faire de son mieux tout en sachant que c'est Allah qui décide de l'issue. Nawfel a avancé malgré sa peur parce que son cœur portait en lui la certitude qu'il n'était jamais seul.",
            quote: 'ومن يتوكل على الله فهو حسبه',
            source: 'Coran, Sourate At-Talaq (65:3)',
          },
        },

        // --- t1c1s4b: Les noms d'Allah ---
        {
          id: 't1c1s4b',
          chapterId: 't1c1',
          title: "Les noms d'Allah",
          narration: `Nawfel décida de ne pas bouger. Il s'assit sur le sol tiède, ses jambes croisées, exactement comme il le faisait pendant les prières, et il attendit. Il n'avait aucune idée de ce qui allait se passer, mais quelque chose au fond de lui lui disait que la patience était la bonne réponse. Le temps, dans ce jardin, semblait différent — les secondes s'étiraient comme du miel chaud, et chaque instant contenait une plénitude que Nawfel n'avait jamais ressentie.\n\nAlors qu'il attendait, immobile et silencieux, les caractères « قلب » au-dessus de la porte commencèrent à changer. Le mot se transforma lentement, et Nawfel vit apparaître, l'un après l'autre, les plus beaux noms qu'il ait jamais lus : Ar-Rahman — le Tout Miséricordieux, Ar-Rahim — le Très Miséricordieux, Al-Wadud — le plein d'amour, As-Sabur — le Patient, Al-Hakim — le Sage. Chaque nom apparaissait dans une lumière différente, et Nawfel sentait que chacun d'entre eux résonnait dans une partie différente de son corps, comme si son cœur était un instrument de musique et que les noms d'Allah en jouaient les cordes.\n\nLa voix se fit entendre de nouveau, et elle semblait sourire — oui, Nawfel pouvait sentir le sourire dans la voix, même s'il n'en voyait pas le visage.\n\n— Tu as choisi la patience, petit cœur, et c'est un choix que très peu de gens de ton âge sont capables de faire. Le Sabr — la patience — n'est pas simplement attendre sans rien faire. C'est attendre avec le cœur ouvert, avec l'espoir intact, en sachant que la promesse d'Allah est vraie. Ceux qui sont patients recevront la meilleure des récompenses, car Allah est avec ceux qui font preuve de patience. Les noms que tu vois sur cette porte sont les clés de ton cœur. Un jour, tu apprendras à les utiliser.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "J'attends. Je sais que quelque chose de beau va venir.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s5',
          background: 'inner_world',
          earnedBadgeId: 'sabr',
          lesson: {
            title: 'Le Sabr — La patience',
            content:
              "Le Sabr est l'une des plus grandes vertus en Islam. Ce n'est pas de la résignation, mais une patience active et pleine d'espoir. Nawfel a choisi d'attendre avec confiance, et sa patience a été récompensée par la révélation des noms d'Allah sur la porte de son cœur.",
            quote: 'إنما يوفي الصابرون أجرهم بغير حساب',
            source: 'Coran, Sourate Az-Zumar (39:10)',
          },
        },

        // --- t1c1s4c: La leçon de la peur ---
        {
          id: 't1c1s4c',
          chapterId: 't1c1',
          title: 'La leçon de la peur',
          narration: `Nawfel recula d'un pas, puis deux, puis trois. Son cœur battait à tout rompre et ses jambes tremblaient comme des brindilles dans le vent. Ce jardin était trop beau, cette voix trop étrange, cette porte trop imposante. Tout cela dépassait ce qu'un garçon de son âge pouvait comprendre, et la peur — la vraie peur, celle qui vous noue le ventre et vous serre la gorge — prit le dessus.\n\nÀ mesure qu'il reculait, quelque chose de terrible se produisit. Les fleurs chantantes se mirent à se faner, leurs pétales colorés tombant un à un sur le sol comme des larmes silencieuses. Les arbres dorés perdirent leur éclat, leurs feuilles devenant ternes et grises. Le ciel violet se couvrit de nuages sombres, et la mélodie cristalline qui emplissait le jardin se transforma en un silence oppressant, lourd et froid.\n\nLa voix parla une dernière fois, et cette fois, elle portait une tristesse infinie, comme celle d'une mère qui regarde son enfant se perdre.\n\n— La peur, petit cœur, est le plus grand voile entre toi et la vérité. Quand tu laisses la peur te guider, tu éteins la lumière autour de toi. Mais ne t'inquiète pas — même ceux qui reculent peuvent revenir. La porte du cœur reste ouverte pour ceux qui sont prêts à revenir avec courage.\n\nLe jardin devint noir, et Nawfel sentit qu'il tombait dans un sommeil encore plus profond, emporté par des rêves vides et froids.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... c'est trop... je ne suis pas prêt pour ça...",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s5',
          background: 'inner_world',
        },

        // --- t1c1s5: Le réveil ---
        {
          id: 't1c1s5',
          chapterId: 't1c1',
          title: 'Le réveil',
          narration: `Nawfel ouvrit les yeux en sursaut. La lumière grise de l'aube filtrait à travers les volets en bois de la chambre, dessinant des lignes dorées sur les murs blancs. Son cœur battait encore vite, et pendant un instant, il ne sut pas où il était. Puis la réalité revint : les murs familiers de sa chambre, la couverture froissée sur son lit, et la respiration régulière de Wassim qui dormait encore profondément à côté de lui.\n\nMais quelque chose avait changé. Nawfel le sentait d'une manière qu'il ne pouvait pas expliquer, comme si une porte invisible s'était entrouverte quelque part à l'intérieur de lui et que de la lumière en filtrait encore. Il porta la main à sa poitrine et resta un instant immobile, écoutant son propre cœur, cherchant à retrouver l'écho de cette voix mystérieuse.\n\nSoudain, une main le toucha à l'épaule. Nawfel sursauta et tourna la tête. Souhayl était assis sur le bord de son propre lit, les yeux mi-clos mais un sourire espiègle aux lèvres. Il avait l'air de s'amuser beaucoup.\n\nDe l'autre côté de la chambre, Wassim commença à remuer dans son lit. Il ouvrit un œil, puis l'autre, et ses yeux s'illuminèrent immédiatement quand il vit que ses deux frères étaient déjà réveillés. Il s'assit d'un bond, ses cheveux en bataille, et regarda Nawfel avec une curiosité insatiable.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Hé, le rêveur ! Tu parlais dans ton sommeil. Tu disais des trucs bizarres, genre « la porte » et « le cœur ». Tu allais voir quoi cette nuit ?",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Moi aussi j'ai fait un rêve bizarre ! Y'avait un jardin tout doré et des fleurs qui chantaient ! C'était trop beau, Nawfel !",
              emotion: 'surprised',
            },
            {
              characterId: 'nawfel',
              text: 'Tu... tu as vu le même jardin ? C\'est pas possible...',
              emotion: 'surprised',
            },
          ],
          choices: [
            {
              id: 't1c1s5_c1',
              text: "Tout raconter à ses frères — ils méritent de savoir",
              nextSceneId: 't1c1s6a',
            },
            {
              id: 't1c1s5_c2',
              text: "Garder le secret — c'est peut-être une affaire d'adultes",
              nextSceneId: 't1c1s6b',
            },
          ],
          background: 'bedroom',
        },

        // --- t1c1s6a: Confidences fraternelles ---
        {
          id: 't1c1s6a',
          chapterId: 't1c1',
          title: 'Confidences fraternelles',
          narration: `Nawfel prit une grande inspiration et commença à parler. Les mots sortirent d'eux-mêmes, comme un fleuve qui a été bloqué trop longtemps et qui finit par trouver une brèche. Il raconta tout — le jardin merveilleux avec ses arbres dorés et ses fleurs chantantes, le chemin de lumière, la grande porte avec « قلب » gravé dessus, et surtout, la voix. Cette voix douce et profonde qui avait prononcé son nom comme personne d'autre ne l'avait jamais fait.\n\nSouhayl l'écouta en silence, les bras croisés, le visage sérieux. C'était son rôle d'aîné — écouter d'abord, analyser ensuite. Il fronça les sourcils à plusieurs reprises, et Nawfel put voir que son frère jonglait entre le scepticisme naturel d'un garçon de dix ans et le soutien indéfectible qu'il portait à son petit frère.\n\nWassim, lui, n'avait aucun scepticisme. Ses yeux brillaient d'excitation, et à chaque détail du rêve, il poussait un petit cri de admiration, serrant les genoux contre sa poitrine comme s'il regardait le plus beau des spectacles. Quand Nawfel mentionna les fleurs qui chantaient, Wassim frappa dans ses mains avec enthousiasme.\n\nCe qui surprit le plus Nawfel, c'est que Wassim confirma certains détails que lui seul aurait dû connaître — la couleur exacte du ciel, la sensation du sol sous les pieds, le parfum de l'air. Les deux frères se regardèrent, émerveillés et troublés, comme si un fil invisible les reliait dans ce monde de rêves.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Attends, attends. Tu me dis qu'une voix t'a appelé par ton nom ? Dans un rêve ? Et Wassim aurait vu la même chose ? C'est quand même très bizarre, Nawfel. Mais... je te crois. Je ne sais pas pourquoi, mais je te crois.",
              emotion: 'neutral',
            },
            {
              characterId: 'wassim',
              text: "Et les fleurs ! Les fleurs qui chantaient ! C'est ça que j'ai vu aussi ! Nawfel, on doit retourner dans ce jardin ! C'est le plus bel endroit du monde !",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s7',
          background: 'bedroom',
        },

        // --- t1c1s6b: Un secret gardé ---
        {
          id: 't1c1s6b',
          chapterId: 't1c1',
          title: 'Un secret gardé',
          narration: `Nawfel secoua la tête et murmura qu'il ne s'était rien passé de spécial, juste un rêve un peu étrange, rien de plus. Mais en disant ces mots, il sentit quelque chose de désagréable dans sa poitrine — un poids, comme s'il portait une pierre invisible. Le secret était là, tapi entre lui et ses frères, et Nawfel réalisa pour la première fois de sa vie que garder un secret pouvait être aussi lourd que de le révéler.\n\nSouhayl le regarda un long moment, comme s'il lisait au-delà des mots. Il ne dit rien, mais son regard disait clairement : « Je sais que tu mens, mais je ne vais pas te forcer à parler. » Wassim, lui, avait l'air déçu, comme un enfant à qui on refuse un jouet. Il baissa la tête et se recoucha en silence.\n\nNawfel resta seul avec son secret, et pendant que ses frères se rendormaient ou faisaient semblant de le faire, il repensa à la voix du jardin. Elle lui avait dit que la peur était un voile. Et maintenant, en choisissant de garder ce secret par peur d'être incompris, il sentait qu'il tissait un nouveau voile autour de lui. Une leçon silencieuse, mais une leçon tout de même.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "D'accord. Si tu changes d'avis, tu sais où me trouver. Je suis ton grand frère, Nawfel. C'est mon travail de te protéger, même de tes propres secrets.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s7',
          background: 'bedroom',
        },

        // --- t1c1s7: Le petit-déjeuner ---
        {
          id: 't1c1s7',
          chapterId: 't1c1',
          title: 'Le petit-déjeuner',
          narration: `La cuisine de la maison Benali sentait le pain frais et le miel d'eucalyptus que le père de Mehdi rapportait chaque semaine du marché du village. La table était dressée avec soin — coupes de lait tiède, bols de msemen dorés, plats de zaalouk aux aubergines, et une théière d'argent d'où s'échappait un filet de vapeur parfumée à la menthe fraîche.\n\nMehdi, le père, était assis à sa place habituelle, à la tête de la table. C'était un homme au visage doux et au regard profond, dont la barbe grisonnante et le sourire bienveillant en disaient long sur sa sagesse. Il lisait le Coran sur son téléphone, comme chaque matin, ses lèvres remuant silencieusement. Aziza, la mère, vaquait entre la cuisine et la table, ses mains habiles disposant les plats avec une grâce naturelle, son hijab d'un bleu lavande encadrant un visage illuminé par la bonté.\n\nQuand Nawfel descendit avec ses frères, il trouva ses parents déjà éveillés, comme toujours. L'atmosphère était chaude, familiale, rassurante. Mais Nawfel portait toujours en lui le poids de la nuit passée. Il regarda son père, hésitant, puis se rappela ce que Souhayl avait dit — « Je suis ton grand frère, c'est mon travail de te protéger » — et Nawfel comprit qu'il y avait quelqu'un de encore plus qualifié pour cela.\n\nNawfel s'assit, prit une bouchée de msemen, et d'une voix qu'il tenta de rendre la plus naturelle possible, commença à raconter son rêve. Au début, ses mots étaient hésitants, mais à mesure qu'il parlait, l'histoire prit forme et conviction. Son père écoutait avec une attention totale, ses mains posées à plat sur la table, ses yeux brillants d'une lueur que Nawfel n'avait jamais vue auparavant — ni peur, ni incrédulité, mais de la reconnaissance, comme si Mehdi attendait ce moment depuis longtemps.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Mon chéri, tu veux un peu plus de lait ? Tu as l'air fatigué ce matin. As-tu bien dormi ?",
              emotion: 'neutral',
            },
            {
              characterId: 'nawfel',
              text: 'Maman, papa... j\'ai besoin de vous raconter quelque chose. Cette nuit, j\'ai fait un rêve. Enfin... je ne sais pas si c\'était vraiment un rêve.',
              emotion: 'determined',
            },
            {
              characterId: 'mehdi',
              text: "Ce n'est pas un simple rêve, mon fils. Sidi Mu'adh nous a parlé de cela. Il disait que certains cœurs sont choisis par Allah pour voir ce que les yeux ordinaires ne peuvent pas voir. Allah a choisi ton cœur, Nawfel. Il y a un chemin qui s'ouvre devant toi, un chemin intérieur. Ce soir, après la prière du Maghrib, je t'emmènerai voir quelqu'un qui pourra t'aider à comprendre.",
              emotion: 'wise',
            },
            {
              characterId: 'aziza',
              text: "Mon petit... tu es béni. Alhamdulillah. Mais surtout, n'aie pas peur. Celui qui t'a montré ce jardin ne te montrera rien qui puisse te faire du mal.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'kitchen',
          isEnding: true,
          lesson: {
            title: 'Les signes divins',
            content:
              "Dans la tradition islamique, les rêves véridiques (ru'yâ ṣâdiqah) sont considérés comme une des quarante-six parties de la prophétie. Ils sont un moyen par lequel Allah guide Ses serviteurs. Un enfant avec un cœur pur peut recevoir de tels signes, et il est du devoir des parents de l'accompagner avec sagesse.",
            quote: 'الرؤيا الصالحة من الله',
            source: 'Hadith — Sahih al-Bukhari',
          },
        },
      ],
      lessons: [],
    },

  ],
};
