const birdsData = [
  [
    {
      id: 1,
      audio: "https://www.xeno-canto.org/sounds/uploaded/DLDERPOXJA/XC582696-200815-NFC-vanneau-05h20-2-Guerfand.mp3",
      name: "Чибис",
      species: "Vanellus vanellus",
      description: "Чибис величиной с галку или чуть поменьше. От других куликов он легко отличается своей чёрно-белой окраской и тупыми крыльями. Верхняя сторона с сильным металлическим зеленым, бронзовым и пурпурным блеском, грудь чёрная, бока тела, брюшко и бока головы белые.",
      image: "https://live.staticflickr.com/3932/33780976196_1c428def5f_n.jpg"
    },
    {
      id: 2,
      audio: "https://www.xeno-canto.org/sounds/uploaded/RVLNPQSYVW/XC571413-common%20kingfisher%2820.5.18.9.2%29.mp3",
      name: "Зимородок",
      species: "Alcedo atthis",
      description: "Имеет яркое оперение, сверху блестящее, голубовато-зелёное, с мелкими светлыми крапинками на голове и крыльях. Зимородки любят уединение, увидеть их удаётся редко. Голос — прерывистый писк «тиип-тиип-тиип».",
      image: "https://live.staticflickr.com/65535/49669389956_2f11d465f1_n.jpg"
    },
    {
      id: 3,
      audio: "https://www.xeno-canto.org/sounds/uploaded/IJRRKWZVQN/XC572417-Locflu%201.mp3",
      name: "Речной сверчок",
      species: "Locustella fluviatilis",
      description: "Маленькая птица, верхняя часть тела оливково-коричневого цвета. На горле и груди — тёмные, расплывчатые продольные пестрины. Нижняя часть тела грязно-белого цвета с оливково-коричневыми боковыми сторонами. «Бровь» грязно-белого цвета, окологлазное кольцо светлое. Хвост широкий, с закруглённым концом.",
      image: "https://live.staticflickr.com/65535/49977455303_0ee1747bb9_n.jpg"
    },
    {
      id: 4,
      audio: "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC571136-Pilgrimsfalk_12.mp3",
      name: "Сапсан",
      species: "Falco peregrinus",
      description: "Это самая быстрая птица в мире. Общее телосложение крепкое, характерное для активных хищных птиц — широкая грудь с твёрдыми и выпуклыми мышцами, сильные пальцы с острыми и круто согнутыми когтями, и короткий, серпообразно загнутый клюв",
      image: "https://live.staticflickr.com/7641/26186128614_b50951d51b_n.jpg"
    },
    {
      id: 5,
      audio: "https://www.xeno-canto.org/sounds/uploaded/IBLQAJNUOV/XC396375-Great%20Knot%20videosound%20CAJ16-R.mp3",
      name: "Большой песочник",
      species: "Calidris tenuirostris",
      description: "Самый крупный из песочников. Верхняя часть тела имеет тёмно-бурый фон, однако нередко значительное количество рыже-каштановых с чёрными вершинами перьев. В целом немногословная птица. Изредка издаёт двусложный крик, передаваемый как «нют-нют».",
      image: "https://live.staticflickr.com/65535/49836069676_b6854a5a7c_n.jpg"
    },
    {
      id: 6,
      audio: "https://www.xeno-canto.org/sounds/uploaded/LHCOINSOBZ/XC572730-200701_01Milvus%20migrans%20pousado%20no%20eucalipto%2C%20chamada%20con%20outro%20dando%20voltas%20arredor%20%2C%20Bra%C3%B1as%20de%20La%C3%AD%C3%B1o%2C%20Dodro%2C%209.30%20nubrado%20despois%20de%20chuvia.mp3",
      name: "Коршун",
      species: "Milvus migrans",
      description: "Cпинная сторона тёмно-бурая, темя иногда беловатое с черноватыми наствольными отметинами, перья маховые тёмно-бурые со светлыми основаниями внутренних опахал, рулевые бурые с тёмным поперечным рисунком. Клюв и ноги жёлтые. Радужка бледно-бурая или жёлто-бурая. Голос — мелодичная трель «юрль-ююррль-ююрррль» и частое «ки-ки-ки»",
      image: "https://live.staticflickr.com/65535/49670478112_a15f312be0_n.jpg"
    }
  ],
  [
    {
      id: 1,
      audio: "https://www.xeno-canto.org/sounds/uploaded/BBJSEFYVPV/XC580128-Wood%20Sand%2029th%20July%20audiomoth.mp3",
      name: "Фифи",
      species: "Tringa glareola",
      description: "Фифи — птица с чёрно-белым оперением, на спине есть коричневые или бурые крапления. Длина тела 15—25 см, у летящей птицы ноги заметно выдаются за край хвоста. Гнездится фифи на земле.",
      image: "https://live.staticflickr.com/1859/44083201382_92eff9ac4f_n.jpg"
    },
    {
      id: 2,
      audio: "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC384040-Storlom_4.mp3",
      name: "Чернозобая гагара",
      species: "Gavia arctica",
      description: "Гагара среднего размера (крупнее краснозобой, но заметно мельче белоклювой и темноклювой). Общая длина 58—75 см, размах крыльев 110—140 см. Голос чернозобой гагары очень разнообразен и трудно передаётся словами. В полёте наиболее часто можно слышать хриплое, постепенно убыстряющееся «га…га…га…га…гарррааа» или одиночное отрывистое «гак»",
      image: "https://live.staticflickr.com/65535/49047148303_a6ffa88698_n.jpg"
    },
    {
      id: 3,
      audio: "https://www.xeno-canto.org/sounds/uploaded/SNRCANJSRX/XC559261-Grus%20grus%20calls%20pair%20Store%20Mosse%20190417%20c.mp3",
      name: "Серый журавль",
      species: "Grus grus",
      description: "Длина тела 105-130 см, размах крыльев 200-245 см. Крупная птица характерного облика с длинной шеей и ногами. Окраска оперения самцов и самок в основном серая. На темени красная «шапочка» - участок голой бородавчатой кожи.",
      image: "https://live.staticflickr.com/65535/50011603591_f81f85b3f5_n.jpg"
    },
    {
      id: 4,
      audio: "https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC471104-06052019_002-konge%C3%B8rn-ravn_call.mp3",
      name: "Беркут",
      species: "Aquila chrysaetos",
      description: "Самый крупный представитель рода Aquila в Северной Палеарктике. Длина тела 75-88 см, размах крыльев 204-230 см. Взрослые птицы бурые, затылок и задняя сторона шеи («грива») золотисто-рыжие. У молодых птиц на крыльях снизу по центру по крупному белому пятну («зеркальцу») неправильной формы, хвост белый с широкой темной полосой по краю.",
      image: "https://live.staticflickr.com/65535/50025957082_de3a89393e_n.jpg"
    },
    {
      id: 5,
      audio: "https://www.xeno-canto.org/sounds/uploaded/MHVQXRLBKS/XC582023-Wulp%20200521%202320%201a.mp3",
      name: "Большой кроншнеп",
      species: "Numenius arquata",
      description: "Один из наиболее крупных куликов Западной Палеарктики, длина тела 50-70 см, размах крыльев 80-110 см. Окраска оперения серо-коричневая с темными пестринами, характерная особенность - светлая окраска нижней стороны крыльев, белая спина и крестец, длинные ноги и длинный загнутый книзу клюв.",
      image: "https://live.staticflickr.com/2869/34258353206_3cfe4b037f_n.jpg"
    },
    {
      id: 6,
      audio: "https://www.xeno-canto.org/sounds/uploaded/UUUYSSONMM/XC573905-R%C3%A1kosn%C3%ADk%20zp%C4%9Bvn%C3%BD%20%286%29%20MP3.mp3",
      name: "Камышевка",
      species: "Acrocephalus palustris",
      description: "Болотная камышовка длиной примерно 13 см, размах крыльев составляет от 17 до 21 см. Верхняя сторона буро-серая, а нижняя желтовато-белая. У птицы белёсое горло и острый клюв. Самец и самка имеют одинаковую окраску. Болотная камышовка ловко передвигается в густой растительности и может имитировать несколько голосов других видов птиц.",
      image: "https://live.staticflickr.com/65535/40860695853_0972503911_n.jpg"
    }
  ],
  [
    {
      id: 1,
      audio: "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC300328-LS_59840%20White-backed%20Vulture%20call%20A.mp3",
      name: "Африканский гриф",
      species: "Gyps africanus",
      description: "Длина крыла составляет 55—64 см, размах крыльев доходит до 218см. Длина хвоста — 24—27см, цевки — 8—12см. Средних размеров гриф, оперение коричневое и кремовое, причём взрослые птицы светлее молодых. Обычно птицы молчаливы. Их голоса можно услышать, когда идёт делёжка туши, при этом доминирующие птицы шипят, а остальные — издают визги.",
      image: "https://live.staticflickr.com/4232/35525257601_b1cc4becd4_n.jpg"
    },
    {
      id: 2,
      audio: "https://www.xeno-canto.org/sounds/uploaded/JDCTKFMBKV/XC518394-200108_0496.MP3",
      name: "Птица-секретарь",
      species: "Sagittarius serpentarius",
      description: "Крупная птица, похожа на аиста с коротким клювом. Длина птицы-секретаря насчитывает от 125 до 155 см, а масса достигает почти 4 кг. Размах крыльев составляет примерно 210 см. Самым заметным признаком являются чёрные перья на голове, которые поднимаются во время брачного периода. Птицы-секретари издают рычащие и каркающие звуки.",
      image: "https://live.staticflickr.com/4117/4894281150_1cb2837e40_n.jpg"
    },
    {
      id: 3,
      audio: "https://www.xeno-canto.org/sounds/uploaded/IGFROYWVEW/XC454909-ascalaphe.mp3",
      name: "Филин",
      species: "Bubo ascalaphus",
      description: "Взрослый фараонов филин — птица размером 46—50см. Общий цвет оперения варьирует от бледно-рыжего до песочного, с чёрными пятнами. Лицевой диск обрамлён узким тёмным ободком. Клюв чёрный. Имеет небольшие перьевые «ушки» и желтовато-оранжевые глаза.",
      image: "https://live.staticflickr.com/4899/40030522053_7386c46764_n.jpg"
    },
    {
      id: 4,
      audio: "https://www.xeno-canto.org/sounds/uploaded/GQMCPIVNXX/XC507927-Helmeted%20Guineafowl.mp3",
      name: "Цесарка",
      species: "Numida meleagris",
      description: "Цесарка отличается более или менее голой головой с разнообразными наростами или придатками, слегка крючковатым, сжатым с боков клювом умеренной величины, короткими, округлёнными крыльями и коротким хвостом, прикрытым кроющими перьями. Оперение однообразного тёмно-серого цвета с белыми круглыми пятнышками, окаймлёнными тёмными ободками.",
      image: "https://live.staticflickr.com/3114/2864990599_dc4afc32d8_n.jpg"
    },
    {
      id: 5,
      audio: "https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC516153-Struthio_camelus_australis-FL%20quiet%20calls%20imm%20Polokwane%20GameRes%2030Oct19%208.05am%20LS115271a.mp3",
      name: "Страус",
      species: "Struthio camelus",
      description: "Африканский страус — самая крупная из современных птиц: высотой до 270 см и массой до 156 кг. Страус имеет плотное телосложение, длинную шею и небольшую уплощённую голову. Клюв прямой и плоский, с роговым «когтем» на надклювье, довольно мягкий. Глаза большие, с густыми ресницами на верхнем веке.",
      image: "https://live.staticflickr.com/7909/47249052632_34020d689b_n.jpg"
    },
    {
      id: 6,
      audio: "https://www.xeno-canto.org/sounds/uploaded/CTBGPXUOSF/XC551006-Effraie%20des%20clochers-260420-030213.mp3",
      name: "Сипуха",
      species: "Tyto alba",
      description: "Хищная птица размером с галку. Среднего размера птица, со стройным телосложением и длинными ногами. Оперение очень мягкое, пушистое. От представителей семейства совиных сипух можно легко определить по форме лицевого диска, который у них имеет явно выраженные очертания в виде сердца.",
      image: "https://live.staticflickr.com/1921/44962285192_75b8793de2_n.jpg"
    }
  ],
  [
    {
      id: 1,
      audio: "https://www.xeno-canto.org/sounds/uploaded/DGVLLRYDXS/XC230179-OPIHOA03.mp3",
      name: "Гоацин",
      species: "Opisthocomus hoazin",
      description: "У нее зачаточный гребешок грудной кости и очень большой задний палец. Оперение на верхней стороне тела буро-коричневое (оливковое), со светло-жёлтыми (белыми) пестринками. Нижняя сторона тела беловатая, брюшко светло-ржавое (рыжеватое). На голове и затылке хохол из узких, заострённых перьев со светло-жёлтыми каёмками. Перья шеи также удлинены, узки и заострены. Щёки голые, красного цвета.",
      image: "https://live.staticflickr.com/1898/43876172985_3804eb006c_n.jpg"
    },
    {
      id: 2,
      audio: "https://www.xeno-canto.org/sounds/uploaded/FPDBIILGCX/Lotens_Sunbird.mp3",
      name: "Кустарниковая нектарница",
      species: "Cinnyris lotenius",
      description: "Небольшая птица. Крылья коричневые, на груди бордовая полоса или желтые пучки. Имеет своебразный клюв. Характерный крик - «жужжащие цвик-цвик», они также очень активны, часто кивают головой во время кормления.",
      image: "https://live.staticflickr.com/5058/5439616224_769ab3e60c_n.jpg"
    },
    {
      id: 3,
      audio: "https://www.xeno-canto.org/sounds/uploaded/JPBSNBUUEF/XC474795-Blue-and-yellow%20Macaw%2C%20flight%20call%2C%20190508-029.mp3",
      name: "Сине-желтый Ара",
      species: "Ara ararauna",
      description: "Средняя птица, верхняя часть оперения тела ярко-голубая, бока шеи, грудка и живот оранжево-жёлтые. Кроющие перья хвоста ярко-голубые. Горло чёрное. Щёки спереди неоперённые серо-белые с чёрными полосками. Лоб зелёный. Клюв чёрный, очень сильный и способен лущить орехи и перегрызать ветви деревьев. Ноги буровато-чёрные. Голос громкий и резкий, созвучен с названием птицы",
      image: "https://live.staticflickr.com/7436/9892323293_0a2d9c232d_n.jpg"
    },
    {
      id: 4,
      audio: "https://www.xeno-canto.org/sounds/uploaded/ZWAQHOJFLZ/XC216292-150303-calao%20%C3%A0%20casque%20jaune%40ta%C3%AF.mp3",
      name: "Златошлемный калао",
      species: "Ceratogymna elata",
      description: "Одна из крупнейших птиц Африки. Голова относительно размеров тела маленькая, хвост и шея — длинные, крылья довольно длинные, мощные, широкие и сильно округлённые, ноги очень короткие. Имеет рыже-золотое оперение на голове, и очень массивный клюв. ",
      image: "https://live.staticflickr.com/5626/23177206339_85a2129042_n.jpg"
    },
    {
      id: 5,
      audio: "https://www.xeno-canto.org/sounds/uploaded/WZSVLIHYQF/XC377215-Chrysolampis_mosquitus_24_Jun_2017_Ferreira_Gomes_AP_RSS.mp3",
      name: "Рубиновый колибри",
      species: "Chrysolampis mosquitus",
      description: "Это очень проворные и быстрые птицы, проводящие большую часть своей жизни в полёте.  Макушка и затылок ярко-красные, на горле и груди блестящие перья золотисто-оранжевого цвета. Остальная нижняя часть тела коричневого цвета. Потребляет энергии в 25 раз больше чем птица размером с голубя.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Ruby-topaz-hummingbird_chrysolampis-mosquitus-7042-cr1.jpg/480px-Ruby-topaz-hummingbird_chrysolampis-mosquitus-7042-cr1.jpg"
    },
    {
      id: 6,
      audio: "https://www.xeno-canto.org/sounds/uploaded/YESYDXYEZD/XC567950-flamant_rose_boulas.mp3",
      name: "Фламинго",
      species: "Phoenicopterus",
      description: "У фламинго тонкие длинные ноги, гибкая шея и оперенье, окраска которого варьирует от белого до красного цвета. Их особым отличительным признаком является массивный выгнутый вниз клюв, с помощью которого они фильтруют пищу из воды или ила. Цвет оперения зависит от потребляемой пищи.",
      image: "https://live.staticflickr.com/8247/8662392019_d97e0800be_n.jpg"
    }
  ],
  [
    {
      id: 1,
      name: "Свиристель",
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 2,
      name: "Воробей",
      species: 'Passer domesticus',
      description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
    },
    {
      id: 3,
      name: "Глухарь",
      species: "Tetrao urogallus",
      description: "Глухарь — самая крупная птица подсемейства тетеревиных. От других представителей подсемейства отличается сильно округлённым хвостом и удлинёнными перьями на горле. Обитает в хвойных, смешанных и лиственных лесах Евразии.",
      image: "https://live.staticflickr.com//8512/8514954831_f85aa22f0c_b.jpg",
      audio: "//www.xeno-canto.org/sounds/uploaded/VLLMNTIBZB/XC551836-20200426_Prealps_Capercaillie3.mp3"
    },
    {
      id: 4,
      name: "Клёст",
      species: 'Loxia curvirostra',
      description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
    },
    {
      id: 5,
      name: "Снегирь",
      species: "Pyrrhula pyrrhula",
      description: "Зимой стаи снегирей очень хорошо различимы, как и отдельные птички на безлиственных деревьях парка на белоснежном фоне. У самцов снегирей грудка розовато-красного цвета, у самок — буровато-серого. Снегирь относится к преимущественно оседлым птицам, полностью откочевывает на зиму только из северной тайги, на кочевках встречается до Средней Азии и Восточного Китая.",
      image: "https://live.staticflickr.com/810/41108789571_06d0870869_n.jpg",
      audio: "https://www.xeno-canto.org/sounds/uploaded/VLLMNTIBZB/XC551836-20200426_Prealps_Capercaillie3.mp3"
    },
    {
      id: 6,
      name: 'Синица',
      species: 'Parus major',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
    },    
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
    }
  ]
];

export default birdsData;