/* Tabletki.ua — дані застосунку.
   Ціни орієнтовні, з відкритих джерел (finance.ua, doc.ua, tabletki.ua), осінь 2026.
   Аптеки вигадані: це навчальний прототип, а не реальні дані аптек. */

const CATEGORIES = [
  { id:'pain',    name:'Біль і температура', icon:'thermometer', hint:'голова, зуби, температура' },
  { id:'cold',    name:'Застуда і грип',     icon:'snow',        hint:'ніс, горло, кашель' },
  { id:'allergy', name:'Алергія',            icon:'flower',      hint:'пилок, пил, тварини' },
  { id:'stomach', name:'Шлунок',             icon:'stomach',     hint:'печія, отруєння' },
  { id:'heart',   name:'Серце і тиск',       icon:'heart',       hint:'тиск, ритм' },
  { id:'anti',    name:'Антибіотики',        icon:'rx',          hint:'за рецептом' },
  { id:'vitamins',name:'Вітаміни',           icon:'sun',         hint:'D3, C, магній' },
  { id:'wound',   name:'Рани й антисептики', icon:'bandage',     hint:'йод, мазі' },
  { id:'kids',    name:'Дитячі',             icon:'baby',        hint:'сиропи, суспензії' },
];

const DRUGS = [
  // Біль і температура
  { id:'ibu400',  name:'Ібупрофен 400 мг',    maker:'Дарниця',       form:'Таблетки, вкриті оболонкою', pack:'№20',   cat:'pain', sub:'Ібупрофен',   price:89,  rx:false, keys:['ібупрофен','ибупрофен','ibuprofen'], use:'знеболювальне, жарознижувальне', dose:'1 таблетка до 3 разів на день, не довше 5 днів', food:'після їди, запиваючи водою' },
  { id:'ibu200',  name:'Ібупрофен 200 мг',    maker:'Дарниця',       form:'Таблетки, вкриті оболонкою', pack:'№50',   cat:'pain', sub:'Ібупрофен',   price:64,  rx:false, keys:['ібупрофен','ибупрофен','ibuprofen'], use:'знеболювальне, жарознижувальне', dose:'1–2 таблетки до 3 разів на день', food:'після їди' },
  { id:'nurofen', name:'Нурофен Форте 400 мг',maker:'Reckitt',       form:'Таблетки, вкриті оболонкою', pack:'№12',   cat:'pain', sub:'Ібупрофен',   price:121, rx:false, keys:['нурофен','nurofen'], use:'знеболювальне, жарознижувальне', dose:'1 таблетка до 3 разів на день', food:'після їди' },
  { id:'irfen',   name:'Ірфен-400',           maker:'Кусум Фарм',    form:'Таблетки',                   pack:'№30',   cat:'pain', sub:'Ібупрофен',   price:101, rx:false, keys:['ірфен','ирфен','irfen'], use:'знеболювальне, жарознижувальне', dose:'1 таблетка до 3 разів на день', food:'після їди' },
  { id:'para500', name:'Парацетамол 500 мг',  maker:'Дарниця',       form:'Таблетки',                   pack:'№10',   cat:'pain', sub:'Парацетамол', price:32,  rx:false, keys:['парацетамол','paracetamol'], use:'жарознижувальне, знеболювальне', dose:'1–2 таблетки до 4 разів на день', food:'незалежно від прийому їжі' },
  { id:'panadol', name:'Панадол 500 мг',      maker:'GSK',           form:'Таблетки, вкриті оболонкою', pack:'№12',   cat:'pain', sub:'Парацетамол', price:78,  rx:false, keys:['панадол','panadol'], use:'жарознижувальне, знеболювальне', dose:'1–2 таблетки до 4 разів на день', food:'незалежно від прийому їжі' },
  { id:'citramon',name:'Цитрамон-Д',          maker:'Дарниця',       form:'Таблетки',                   pack:'№10',   cat:'pain', sub:'Парацетамол + кофеїн', price:35, rx:false, keys:['цитрамон','citramon'], use:'головний біль', dose:'1 таблетка до 3 разів на день', food:'після їди' },
  { id:'nimesil', name:'Німесил 100 мг',      maker:'Menarini',      form:'Гранули для суспензії',      pack:'№9',    cat:'pain', sub:'Німесулід',   price:189, rx:false, keys:['німесил','нимесил','nimesil'], use:'сильний біль, запалення', dose:'1 пакет 2 рази на день, не довше 15 днів', food:'після їди' },
  { id:'noshpa',  name:'Но-шпа 40 мг',        maker:'Sanofi',        form:'Таблетки',                   pack:'№24',   cat:'pain', sub:'Дротаверин',  price:152, rx:false, keys:['но-шпа','ношпа','no-spa'], use:'спазми, біль у животі', dose:'1–2 таблетки до 3 разів на день', food:'незалежно від прийому їжі' },
  { id:'drotav',  name:'Дротаверин 40 мг',    maker:'Дарниця',       form:'Таблетки',                   pack:'№20',   cat:'pain', sub:'Дротаверин',  price:45,  rx:false, keys:['дротаверин','drotaverine'], use:'спазми, біль у животі', dose:'1–2 таблетки до 3 разів на день', food:'незалежно від прийому їжі' },
  { id:'spazm',   name:'Спазмалгон',          maker:'Actavis',       form:'Таблетки',                   pack:'№20',   cat:'pain', sub:'Метамізол + пітофенон', price:124, rx:false, keys:['спазмалгон','spazmalgon'], use:'біль зі спазмом', dose:'1–2 таблетки до 3 разів на день', food:'після їди' },
  { id:'aspirin', name:'Аспірин 500 мг',      maker:'Bayer',         form:'Таблетки',                   pack:'№20',   cat:'pain', sub:'Ацетилсаліцилова кислота', price:88, rx:false, keys:['аспірин','аспирин','aspirin'], use:'біль, температура', dose:'1 таблетка до 3 разів на день', food:'після їди, не на голодний шлунок' },
  { id:'lyrica',  name:'Лірика 75 мг',        maker:'Pfizer',        form:'Капсули',                    pack:'№14',   cat:'pain', sub:'Прегабалін',  price:548, rx:true,  keys:['лірика','лирика','lyrica','прегабалін','прегабалин','pregabalin'], use:'невропатичний біль', dose:'за призначенням лікаря, дозу не змінювати самостійно', food:'незалежно від прийому їжі' },
  { id:'pregab',  name:'Прегабалін 75 мг',    maker:'Фармекс Груп',  form:'Капсули',                    pack:'№14',   cat:'pain', sub:'Прегабалін',  price:312, rx:true,  keys:['прегабалін','прегабалин','pregabalin'], use:'невропатичний біль', dose:'за призначенням лікаря', food:'незалежно від прийому їжі' },
  // Застуда і грип
  { id:'ksylo',   name:'Ксилометазолін 0,1 %',maker:'Фармак',        form:'Спрей назальний',            pack:'10 мл', cat:'cold', sub:'Ксилометазолін', price:54, rx:false, keys:['ксилометазолін','ксилометазолин','xylometazoline'], use:'закладений ніс', dose:'1 впорскування 2–3 рази на день, не довше 5 днів', food:'незалежно від прийому їжі' },
  { id:'nazivin', name:'Називін 0,05 %',      maker:'Merck',         form:'Краплі назальні',            pack:'10 мл', cat:'cold', sub:'Оксиметазолін', price:121, rx:false, keys:['називін','називин','nazivin'], use:'закладений ніс', dose:'1–2 краплі 2–3 рази на день', food:'незалежно від прийому їжі' },
  { id:'neoangin',name:'Нео-ангін',           maker:'Klosterfrau',   form:'Льодяники',                  pack:'№24',   cat:'cold', sub:'Амілметакрезол', price:171, rx:false, keys:['нео-ангін','неоангин','neo-angin'], use:'біль у горлі', dose:'1 льодяник кожні 2–3 години', food:'після їди' },
  { id:'strepsils',name:'Стрепсілс',          maker:'Reckitt',       form:'Льодяники',                  pack:'№24',   cat:'cold', sub:'Амілметакрезол', price:162, rx:false, keys:['стрепсілс','стрепсилс','strepsils'], use:'біль у горлі', dose:'1 льодяник кожні 2–3 години', food:'після їди' },
  { id:'lizobakt',name:'Лізобакт',            maker:'Bosnalijek',    form:'Таблетки для розсмоктування',pack:'№30',   cat:'cold', sub:'Лізоцим',      price:224, rx:false, keys:['лізобакт','лизобакт','lizobact'], use:'запалення в роті й горлі', dose:'2 таблетки 3–4 рази на день', food:'після їди' },
  { id:'miramist',name:'Мірамістин 0,01 %',   maker:'Дарниця',       form:'Розчин, спрей',              pack:'50 мл', cat:'cold', sub:'Мірамістин',   price:123, rx:false, keys:['мірамістин','мирамистин','miramistin'], use:'антисептик для горла й ран', dose:'3–4 впорскування 3 рази на день', food:'після їди' },
  { id:'acc200',  name:'АЦЦ 200 мг',          maker:'Sandoz',        form:'Порошок для розчину',        pack:'№20',   cat:'cold', sub:'Ацетилцистеїн',price:201, rx:false, keys:['ацц','acc','ацетилцистеїн'], use:'вологий кашель', dose:'1 пакет 2–3 рази на день', food:'після їди, запиваючи водою' },
  { id:'ambrox',  name:'Амброксол',           maker:'Дарниця',       form:'Сироп',                      pack:'100 мл',cat:'cold', sub:'Амброксол',    price:72,  rx:false, keys:['амброксол','ambroxol'], use:'кашель з мокротинням', dose:'10 мл 3 рази на день', food:'після їди' },
  { id:'sinupret',name:'Синупрет',            maker:'Bionorica',     form:'Таблетки, вкриті оболонкою', pack:'№50',   cat:'cold', sub:'Рослинний комплекс', price:381, rx:false, keys:['синупрет','sinupret'], use:'синусит, нежить', dose:'2 таблетки 3 рази на день', food:'незалежно від прийому їжі' },
  // Алергія
  { id:'lorat',   name:'Лоратадин 10 мг',     maker:'Дарниця',       form:'Таблетки',                   pack:'№10',   cat:'allergy', sub:'Лоратадин', price:28,  rx:false, keys:['лоратадин','loratadine'], use:'алергія, не викликає сонливості', dose:'1 таблетка 1 раз на день', food:'незалежно від прийому їжі' },
  { id:'claritin',name:'Кларитин 10 мг',      maker:'Bayer',         form:'Таблетки',                   pack:'№10',   cat:'allergy', sub:'Лоратадин', price:189, rx:false, keys:['кларитин','claritin'], use:'алергія', dose:'1 таблетка 1 раз на день', food:'незалежно від прийому їжі' },
  { id:'cetirin', name:'Цетиризин 10 мг',     maker:'Фармак',        form:'Таблетки, вкриті оболонкою', pack:'№10',   cat:'allergy', sub:'Цетиризин', price:85,  rx:false, keys:['цетиризин','cetirizine'], use:'алергія на пилок, пил, тварин', dose:'1 таблетка 1 раз на день, увечері', food:'незалежно від прийому їжі' },
  { id:'suprast', name:'Супрастин 25 мг',     maker:'Egis',          form:'Таблетки',                   pack:'№20',   cat:'allergy', sub:'Хлоропірамін', price:132, rx:false, keys:['супрастин','suprastin'], use:'гостра алергія', dose:'1 таблетка 3 рази на день', food:'під час їди' },
  // Шлунок
  { id:'smecta',  name:'Смекта',              maker:'Ipsen',         form:'Порошок для суспензії',      pack:'№10',   cat:'stomach', sub:'Смектит',   price:211, rx:false, keys:['смекта','smecta'], use:'діарея, біль у животі', dose:'1 пакет 3 рази на день', food:'між прийомами їжі' },
  { id:'coal',    name:'Активоване вугілля',  maker:'Червона зірка', form:'Таблетки',                   pack:'№10',   cat:'stomach', sub:'Вугілля активоване', price:9, rx:false, keys:['вугілля','уголь','активоване'], use:'отруєння, здуття', dose:'1 таблетка на 10 кг ваги', food:'за 1 годину до їди' },
  { id:'sorbex',  name:'Сорбекс',             maker:'Борщагівський ХФЗ', form:'Капсули',                pack:'№20',   cat:'stomach', sub:'Вугілля активоване', price:62, rx:false, keys:['сорбекс','sorbex'], use:'отруєння, інтоксикація', dose:'2–4 капсули 3 рази на день', food:'за 1 годину до їди' },
  { id:'loperam', name:'Лоперамід 2 мг',      maker:'Дарниця',       form:'Капсули',                    pack:'№10',   cat:'stomach', sub:'Лоперамід', price:45,  rx:false, keys:['лоперамід','лоперамид','loperamide'], use:'діарея', dose:'2 капсули, далі по 1 після кожного випорожнення', food:'незалежно від прийому їжі' },
  { id:'linex',   name:'Лінекс',              maker:'Sandoz',        form:'Капсули',                    pack:'№16',   cat:'stomach', sub:'Пробіотик', price:216, rx:false, keys:['лінекс','линекс','linex'], use:'відновлення мікрофлори', dose:'2 капсули 3 рази на день', food:'після їди' },
  { id:'enterol', name:'Ентерол 250 мг',      maker:'Biocodex',      form:'Капсули',                    pack:'№10',   cat:'stomach', sub:'Сахароміцети', price:331, rx:false, keys:['ентерол','энтерол','enterol'], use:'діарея, пробіотик', dose:'1–2 капсули 2 рази на день', food:'за 1 годину до їди' },
  { id:'almagel', name:'Алмагель',            maker:'Balkanpharma',  form:'Суспензія',                  pack:'170 мл',cat:'stomach', sub:'Алгелдрат', price:141, rx:false, keys:['алмагель','almagel'], use:'печія, біль у шлунку', dose:'1–2 мірні ложки 4 рази на день', food:'за 30 хвилин до їди' },
  { id:'rennie',  name:'Ренні',               maker:'Bayer',         form:'Таблетки жувальні',          pack:'№24',   cat:'stomach', sub:'Кальцію карбонат', price:242, rx:false, keys:['ренні','ренни','rennie'], use:'печія', dose:'1–2 таблетки при печії', food:'після їди' },
  { id:'omeprazol',name:'Омепразол 20 мг',    maker:'Дарниця',       form:'Капсули',                    pack:'№30',   cat:'stomach', sub:'Омепразол', price:76,  rx:false, keys:['омепразол','omeprazole'], use:'печія, гастрит', dose:'1 капсула 1 раз на день, зранку', food:'до їди' },
  { id:'motilium',name:'Мотиліум 10 мг',      maker:'Johnson & Johnson', form:'Таблетки, вкриті оболонкою', pack:'№30', cat:'stomach', sub:'Домперидон', price:182, rx:false, keys:['мотиліум','мотилиум','motilium'], use:'нудота, здуття', dose:'1 таблетка 3 рази на день', food:'за 15–30 хвилин до їди' },
  // Серце і тиск
  { id:'korvalol',name:'Корвалол',            maker:'Фармак',        form:'Краплі оральні',             pack:'25 мл', cat:'heart', sub:'Фенобарбітал + ментол', price:55, rx:false, keys:['корвалол','korvalol'], use:'заспокійливе, серцебиття', dose:'15–30 крапель 3 рази на день', food:'до їди' },
  { id:'validol', name:'Валідол',             maker:'Дарниця',       form:'Таблетки під язик',          pack:'№10',   cat:'heart', sub:'Ментол',     price:16,  rx:false, keys:['валідол','валидол','validol'], use:'хвилювання, легкий біль у серці', dose:'1 таблетка під язик', food:'незалежно від прийому їжі' },
  { id:'enalapril',name:'Еналаприл 10 мг',    maker:'Дарниця',       form:'Таблетки',                   pack:'№20',   cat:'heart', sub:'Еналаприл',  price:36,  rx:true,  keys:['еналаприл','enalapril'], use:'високий тиск', dose:'за призначенням лікаря', food:'незалежно від прийому їжі' },
  { id:'bisopr',  name:'Бісопролол 5 мг',     maker:'Фармак',        form:'Таблетки, вкриті оболонкою', pack:'№30',   cat:'heart', sub:'Бісопролол', price:71,  rx:true,  keys:['бісопролол','бисопролол','bisoprolol'], use:'тиск, серцевий ритм', dose:'за призначенням лікаря', food:'зранку, до їди' },
  { id:'atorva',  name:'Аторвастатин 20 мг',  maker:'Київський ВЗ',  form:'Таблетки, вкриті оболонкою', pack:'№30',   cat:'heart', sub:'Аторвастатин', price:154, rx:true, keys:['аторвастатин','atorvastatin'], use:'високий холестерин', dose:'за призначенням лікаря', food:'увечері' },
  // Антибіотики
  { id:'amox',    name:'Амоксицилін 500 мг',  maker:'Київмедпрепарат', form:'Капсули',                  pack:'№16',   cat:'anti', sub:'Амоксицилін', price:142, rx:true, keys:['амоксицилін','амоксициллин','amoxicillin'], use:'антибіотик', dose:'за призначенням лікаря, курс пройти повністю', food:'незалежно від прийому їжі' },
  { id:'azitro',  name:'Азитроміцин 500 мг',  maker:'Фармак',        form:'Таблетки, вкриті оболонкою', pack:'№3',    cat:'anti', sub:'Азитроміцин', price:118, rx:true, keys:['азитроміцин','азитромицин','azithromycin'], use:'антибіотик', dose:'за призначенням лікаря', food:'за 1 годину до їди' },
  { id:'cefuro',  name:'Цефуроксим 500 мг',   maker:'Sandoz',        form:'Таблетки, вкриті оболонкою', pack:'№10',   cat:'anti', sub:'Цефуроксим',  price:298, rx:true, keys:['цефуроксим','cefuroxime'], use:'антибіотик', dose:'за призначенням лікаря', food:'після їди' },
  { id:'amoxclav',name:'Амоксиклав 875/125',  maker:'Sandoz',        form:'Таблетки, вкриті оболонкою', pack:'№14',   cat:'anti', sub:'Амоксицилін + клавуланова кислота', price:324, rx:true, keys:['амоксиклав','amoxiclav'], use:'антибіотик', dose:'за призначенням лікаря', food:'на початку їди' },
  // Вітаміни
  { id:'d3',      name:'Вітамін D3 2000 МО',  maker:'Київський ВЗ',  form:'Капсули',                    pack:'№60',   cat:'vitamins', sub:'Холекальциферол', price:284, rx:false, keys:['вітамін d','витамин d','d3','холекальциферол'], use:'профілактика дефіциту вітаміну D', dose:'1 капсула щодня, зранку', food:'під час їди з жирами' },
  { id:'vitc',    name:'Вітамін C 500 мг',    maker:'Київський ВЗ',  form:'Таблетки',                   pack:'№30',   cat:'vitamins', sub:'Аскорбінова кислота', price:92, rx:false, keys:['вітамін с','витамин ц','аскорбінка'], use:'підтримка імунітету', dose:'1 таблетка щодня', food:'після їди' },
  { id:'magneb6', name:'Магній B6',           maker:'Sanofi',        form:'Таблетки, вкриті оболонкою', pack:'№50',   cat:'vitamins', sub:'Магній + піридоксин', price:321, rx:false, keys:['магній','магний','magne b6'], use:'втома, судоми, стрес', dose:'2 таблетки 3 рази на день', food:'під час їди' },
  { id:'omega3',  name:'Омега-3 1000 мг',     maker:'Solgar',        form:'Капсули',                    pack:'№60',   cat:'vitamins', sub:'Омега-3',    price:452, rx:false, keys:['омега','omega'], use:'серце, судини, мозок', dose:'1–2 капсули щодня', food:'під час їди' },
  // Рани й антисептики
  { id:'iod',     name:'Йод 5 %',             maker:'Віола',         form:'Розчин спиртовий',           pack:'20 мл', cat:'wound', sub:'Йод',         price:25,  rx:false, keys:['йод','iod'], use:'обробка країв рани', dose:'змащувати ділянку', food:'—' },
  { id:'chlorh',  name:'Хлоргексидин 0,05 %', maker:'Дарниця',       form:'Розчин',                     pack:'100 мл',cat:'wound', sub:'Хлоргексидин',price:32,  rx:false, keys:['хлоргексидин','chlorhexidine'], use:'промивання ран, полоскання', dose:'промивати 2–3 рази на день', food:'—' },
  { id:'perek',   name:'Перекис водню 3 %',   maker:'Віола',         form:'Розчин',                     pack:'100 мл',cat:'wound', sub:'Перекис водню', price:45, rx:false, keys:['перекис','перекись'], use:'очищення забруднених ран', dose:'промивати за потреби', food:'—' },
  { id:'panthen', name:'Пантенол спрей',      maker:'Hemofarm',      form:'Піна нашкірна',              pack:'130 г', cat:'wound', sub:'Декспантенол',price:136, rx:false, keys:['пантенол','panthenol'], use:'опіки, подразнення', dose:'наносити 2–4 рази на день', food:'—' },
  { id:'levomek', name:'Левомеколь',          maker:'Дарниця',       form:'Мазь',                       pack:'40 г',  cat:'wound', sub:'Хлорамфенікол + метилурацил', price:76, rx:false, keys:['левомеколь','levomekol'], use:'гнійні рани, запалення', dose:'наносити на серветку 1 раз на день', food:'—' },
  // Дитячі
  { id:'ibukid',  name:'Ібупрофен для дітей', maker:'Дарниця',       form:'Суспензія 100 мг/5 мл',      pack:'100 мл',cat:'kids', sub:'Ібупрофен',   price:118, rx:false, keys:['ібупрофен для дітей','ибупрофен детский'], use:'температура й біль у дітей', dose:'за вагою дитини, див. інструкцію', food:'після їди' },
  { id:'parakid', name:'Парацетамол дитячий', maker:'Фармак',        form:'Сироп 120 мг/5 мл',          pack:'100 мл',cat:'kids', sub:'Парацетамол', price:71,  rx:false, keys:['парацетамол дитячий','парацетамол детский'], use:'температура в дітей', dose:'за вагою дитини, див. інструкцію', food:'після їди' },
  { id:'nurokid', name:'Нурофен для дітей',   maker:'Reckitt',       form:'Суспензія, полуниця',        pack:'100 мл',cat:'kids', sub:'Ібупрофен',   price:152, rx:false, keys:['нурофен для дітей','нурофен детский'], use:'температура й біль у дітей', dose:'за вагою дитини, див. інструкцію', food:'після їди' },
  { id:'aquamar', name:'Аква Маріс для дітей',maker:'Jadran',        form:'Спрей назальний',            pack:'50 мл', cat:'kids', sub:'Морська вода',price:198, rx:false, keys:['аква маріс','аквамарис'], use:'промивання носа', dose:'1–2 впорскування 3 рази на день', food:'—' },
];

const PHARMACIES = [
  { id:'zel', name:'Аптека на Зеленій, 12',  addr:'вул. Зелена, 12',            km:0.6, close:'22:00', k:1.03, bias:0.92, delivery:true  },
  { id:'fra', name:'Аптека на Франка',       addr:'вул. І. Франка, 28',         km:0.9, close:'20:00', k:0.98, bias:0.70, delivery:false },
  { id:'lnu', name:'Аптека біля ЛНУ',        addr:'вул. Університетська, 1',    km:1.2, close:'22:00', k:1.07, bias:0.78, delivery:true  },
  { id:'lyc', name:'Аптека «Медик»',         addr:'вул. Личаківська, 45',       km:1.8, close:'24:00', k:1.12, bias:0.88, delivery:true  },
  { id:'cho', name:'Аптека у Форумі',        addr:'просп. Чорновола, 7',        km:2.2, close:'22:00', k:1.05, bias:0.85, delivery:true  },
  { id:'gor', name:'Аптека на Городоцькій',  addr:'вул. Городоцька, 120',       km:2.6, close:'23:00', k:0.95, bias:0.82, delivery:true  },
  { id:'syh', name:'Аптека на Сихові',       addr:'просп. Червоної Калини, 60', km:3.4, close:'21:00', k:0.93, bias:0.75, delivery:false },
  { id:'zam', name:'Аптека на Замарстинові', addr:'вул. Замарстинівська, 83',   km:4.1, close:'21:00', k:0.91, bias:0.68, delivery:false },
];

const DELIVERY_SLOTS = [
  { id:'now',  label:'Найближчі 2 години', price:69, note:'кур’єр забере в аптеці' },
  { id:'eve',  label:'Сьогодні, 18:00–21:00', price:49, note:'' },
  { id:'tmr',  label:'Завтра, 10:00–14:00',   price:39, note:'найдешевше' },
];

/* Детерміноване число з рядка: залишки й ціни не стрибають між перемальовуваннями. */
const seed = (s) => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return ((h >>> 0) % 1000) / 1000; };
const drugById = (id) => DRUGS.find(d => d.id === id);
const phById = (id) => PHARMACIES.find(p => p.id === id);

const stockOf = (drugId, phId) => {
  const ph = phById(phId), r = seed(drugId + phId);
  if (r > ph.bias) return 0;
  if (r > ph.bias - 0.1) return 1;
  return 2 + Math.floor(r * 8);
};
const priceOf = (drug, phId) => Math.round(drug.price * phById(phId).k * (0.96 + seed(drug.id + phId) * 0.1));
const analogsOf = (drug) => DRUGS.filter(d => d.sub === drug.sub && d.id !== drug.id);
const minPriceOf = (drug) => Math.min(...PHARMACIES.filter(p => stockOf(drug.id, p.id) > 0).map(p => priceOf(drug, p.id)).concat([drug.price]));
const countPh = (drug) => PHARMACIES.filter(p => stockOf(drug.id, p.id) > 0).length;

const AI_QA = [
  { q:'Чи можна з парацетамолом?', ref:'Розділ «Взаємодія з іншими лікарськими засобами»',
    a:(d) => `${d.name} містить діючу речовину «${d.sub}». Її часто приймають окремо від парацетамолу, але поєднувати препарати варто після консультації з лікарем або фармацевтом.` },
  { q:'До чи після їжі?', ref:'Розділ «Спосіб застосування та дози»',
    a:(d) => `За інструкцією препарат приймають ${d.food}.` },
  { q:'Скільки разів на день?', ref:'Розділ «Спосіб застосування та дози»',
    a:(d) => `${d.dose}. Не перевищуйте дозу без призначення лікаря.` },
  { q:'Чи можна за кермом?', ref:'Розділ «Вплив на здатність керувати транспортом»',
    a:(d) => `Інструкція не містить прямої заборони для препарату «${d.name}». Якщо відчуєте сонливість або запаморочення, за кермо сідати не варто.` },
];
