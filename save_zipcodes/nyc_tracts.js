var nycGeoids = ['36005000100', '36005000200', '36005000400', '36005001600', '36005001900', '36005002000', '36005002300', '36005002400', '36005002500', '36005002701', '36005002702', '36005002800', '36005003100', '36005003300', '36005003500', '36005003700', '36005003800', '36005003900', '36005004001', '36005004100', '36005004200', '36005004300', '36005004400', '36005004600', '36005004800', '36005005001', '36005005002', '36005005100', '36005005200', '36005005300', '36005005400', '36005005600', '36005005902', '36005006000', '36005006100', '36005006200', '36005006300', '36005006400', '36005006500', '36005006700', '36005006800', '36005006900', '36005007000', '36005007100', '36005007200', '36005007300', '36005007400', '36005007500', '36005007600', '36005007700', '36005007800', '36005007900', '36005008300', '36005008400', '36005008500', '36005008600', '36005008700', '36005008900', '36005009000', '36005009200', '36005009300', '36005009600', '36005009800', '36005011000', '36005011502', '36005011700', '36005011800', '36005011900', '36005012101', '36005012102', '36005012300', '36005012500', '36005012701', '36005012901', '36005013000', '36005013100', '36005013200', '36005013300', '36005013500', '36005013800', '36005014100', '36005014300', '36005014400', '36005014500', '36005014701', '36005014702', '36005014900', '36005015100', '36005015200', '36005015300', '36005015500', '36005015700', '36005015800', '36005015900', '36005016000', '36005016100', '36005016200', '36005016300', '36005016400', '36005016500', '36005016600', '36005016700', '36005016900', '36005017100', '36005017300', '36005017500', '36005017701', '36005017702', '36005017901', '36005017902', '36005018101', '36005018102', '36005018301', '36005018302', '36005018400', '36005018500', '36005018900', '36005019300', '36005019400', '36005019500', '36005019700', '36005019900', '36005020000', '36005020100', '36005020200', '36005020400', '36005020501', '36005020502', '36005020601', '36005020900', '36005021001', '36005021002', '36005021100', '36005021200', '36005021301', '36005021302', '36005021501', '36005021502', '36005021601', '36005021602', '36005021700', '36005021800', '36005021900', '36005022000', '36005022101', '36005022102', '36005022200', '36005022300', '36005022401', '36005022403', '36005022404', '36005022500', '36005022701', '36005022702', '36005022703', '36005022800', '36005022901', '36005022902', '36005023000', '36005023100', '36005023200', '36005023301', '36005023302', '36005023501', '36005023502', '36005023600', '36005023702', '36005023703', '36005023704', '36005023800', '36005023900', '36005024000', '36005024100', '36005024300', '36005024400', '36005024501', '36005024502', '36005024600', '36005024700', '36005024800', '36005024900', '36005025000', '36005025100', '36005025200', '36005025300', '36005025400', '36005025500', '36005025600', '36005025700', '36005026100', '36005026300', '36005026400', '36005026500', '36005026601', '36005026602', '36005026701', '36005026702', '36005026900', '36005027300', '36005027401', '36005027402', '36005027600', '36005027700', '36005027900', '36005028100', '36005028300', '36005028400', '36005028500', '36005028600', '36005028700', '36005028800', '36005028900', '36005029301', '36005029302', '36005029500', '36005029600', '36005029700', '36005030000', '36005030100', '36005030200', '36005030701', '36005030900', '36005031000', '36005031200', '36005031400', '36005031600', '36005031800', '36005031900', '36005032300', '36005032400', '36005032600', '36005032800', '36005033000', '36005033201', '36005033202', '36005033400', '36005033500', '36005033600', '36005033700', '36005033800', '36005034000', '36005034200', '36005034300', '36005034400', '36005034500', '36005034800', '36005035000', '36005035100', '36005035600', '36005035800', '36005035900', '36005036000', '36005036100', '36005036300', '36005036400', '36005036501', '36005036502', '36005036700', '36005036800', '36005036901', '36005036902', '36005037000', '36005037100', '36005037200', '36005037300', '36005037400', '36005037504', '36005037600', '36005037800', '36005037900', '36005038000', '36005038100', '36005038200', '36005038301', '36005038302', '36005038500', '36005038600', '36005038700', '36005038800', '36005038900', '36005039000', '36005039100', '36005039200', '36005039300', '36005039400', '36005039500', '36005039600', '36005039700', '36005039800', '36005039901', '36005039902', '36005040100', '36005040302', '36005040303', '36005040304', '36005040400', '36005040501', '36005040502', '36005040600', '36005040701', '36005040702', '36005040800', '36005040900', '36005041100', '36005041300', '36005041400', '36005041500', '36005041800', '36005041900', '36005042000', '36005042100', '36005042200', '36005042300', '36005042400', '36005042500', '36005042600', '36005042800', '36005042901', '36005042902', '36005043000', '36005043100', '36005043400', '36005043500', '36005043600', '36005044200', '36005044400', '36005044800', '36005044901', '36005044902', '36005045101', '36005045102', '36005045600', '36005045800', '36005046000', '36005046201', '36005046202', '36005048400', '36005050400', '36005051600', '36047000100', '36047000200', '36047000301', '36047000501', '36047000502', '36047000700', '36047000900', '36047001100', '36047001300', '36047001500', '36047001800', '36047002000', '36047002100', '36047002200', '36047002300', '36047002901', '36047003000', '36047003100', '36047003300', '36047003400', '36047003500', '36047003600', '36047003700', '36047003800', '36047003900', '36047004100', '36047004300', '36047004400', '36047004500', '36047004600', '36047004700', '36047004900', '36047005000', '36047005100', '36047005201', '36047005202', '36047005300', '36047005400', '36047005601', '36047005602', '36047005800', '36047005900', '36047006000', '36047006200', '36047006300', '36047006400', '36047006500', '36047006600', '36047006700', '36047006800', '36047006900', '36047007000', '36047007100', '36047007200', '36047007400', '36047007500', '36047007600', '36047007700', '36047007800', '36047008000', '36047008200', '36047008400', '36047008500', '36047008600', '36047008800', '36047009000', '36047009200', '36047009400', '36047009600', '36047009800', '36047010000', '36047010100', '36047010200', '36047010400', '36047010600', '36047010800', '36047011000', '36047011200', '36047011400', '36047011600', '36047011700', '36047011800', '36047011900', '36047012000', '36047012100', '36047012200', '36047012600', '36047012700', '36047012801', '36047012901', '36047012902', '36047013000', '36047013100', '36047013200', '36047013300', '36047013400', '36047013500', '36047013600', '36047013700', '36047013800', '36047013900', '36047014000', '36047014100', '36047014200', '36047014300', '36047014500', '36047014700', '36047014800', '36047014900', '36047015000', '36047015100', '36047015200', '36047015300', '36047015400', '36047015500', '36047015700', '36047015900', '36047016000', '36047016100', '36047016200', '36047016300', '36047016400', '36047016500', '36047016600', '36047016700', '36047016800', '36047016900', '36047017000', '36047017100', '36047017200', '36047017400', '36047017500', '36047017600', '36047017700', '36047017800', '36047017900', '36047018000', '36047018100', '36047018200', '36047018300', '36047018400', '36047018501', '36047018600', '36047018700', '36047018800', '36047019000', '36047019100', '36047019200', '36047019300', '36047019400', '36047019500', '36047019600', '36047019700', '36047019800', '36047019900', '36047020000', '36047020100', '36047020200', '36047020300', '36047020400', '36047020500', '36047020600', '36047020700', '36047020800', '36047021000', '36047021100', '36047021200', '36047021300', '36047021400', '36047021500', '36047021600', '36047021700', '36047021800', '36047021900', '36047022000', '36047022100', '36047022200', '36047022400', '36047022600', '36047022700', '36047022800', '36047022900', '36047023000', '36047023100', '36047023200', '36047023300', '36047023400', '36047023500', '36047023600', '36047023800', '36047024000', '36047024100', '36047024200', '36047024300', '36047024400', '36047024500', '36047024600', '36047024700', '36047024800', '36047024900', '36047025000', '36047025100', '36047025200', '36047025300', '36047025400', '36047025500', '36047025600', '36047025700', '36047025800', '36047025901', '36047025902', '36047026000', '36047026100', '36047026200', '36047026300', '36047026400', '36047026500', '36047026600', '36047026700', '36047026800', '36047026900', '36047027000', '36047027100', '36047027200', '36047027300', '36047027400', '36047027500', '36047027600', '36047027700', '36047027800', '36047027900', '36047028000', '36047028100', '36047028200', '36047028300', '36047028400', '36047028501', '36047028502', '36047028600', '36047028700', '36047028800', '36047028900', '36047029000', '36047029100', '36047029200', '36047029300', '36047029400', '36047029500', '36047029600', '36047029700', '36047029800', '36047029900', '36047030000', '36047030100', '36047030200', '36047030300', '36047030400', '36047030500', '36047030600', '36047030700', '36047030800', '36047030900', '36047031100', '36047031300', '36047031400', '36047031500', '36047031701', '36047031702', '36047031900', '36047032100', '36047032300', '36047032500', '36047032600', '36047032700', '36047032800', '36047032900', '36047033000', '36047033100', '36047033300', '36047033500', '36047033600', '36047033700', '36047033900', '36047034000', '36047034100', '36047034200', '36047034300', '36047034500', '36047034700', '36047034800', '36047034900', '36047035000', '36047035100', '36047035200', '36047035300', '36047035400', '36047035500', '36047035601', '36047035602', '36047035700', '36047035900', '36047036001', '36047036002', '36047036100', '36047036200', '36047036300', '36047036400', '36047036501', '36047036502', '36047036600', '36047036700', '36047036900', '36047037000', '36047037100', '36047037300', '36047037401', '36047037402', '36047037500', '36047037700', '36047037900', '36047038100', '36047038200', '36047038300', '36047038500', '36047038600', '36047038700', '36047038800', '36047038900', '36047039000', '36047039100', '36047039200', '36047039300', '36047039400', '36047039500', '36047039600', '36047039700', '36047039800', '36047039900', '36047040000', '36047040100', '36047040200', '36047040300', '36047040400', '36047040500', '36047040600', '36047040700', '36047040800', '36047040900', '36047041000', '36047041100', '36047041200', '36047041300', '36047041401', '36047041402', '36047041500', '36047041600', '36047041700', '36047041800', '36047041900', '36047042000', '36047042100', '36047042200', '36047042300', '36047042400', '36047042500', '36047042600', '36047042700', '36047042800', '36047042900', '36047043000', '36047043100', '36047043200', '36047043300', '36047043400', '36047043500', '36047043600', '36047043700', '36047043800', '36047043900', '36047044000', '36047044100', '36047044200', '36047044300', '36047044400', '36047044500', '36047044600', '36047044700', '36047044800', '36047044900', '36047045000', '36047045200', '36047045300', '36047045400', '36047045600', '36047045800', '36047046000', '36047046201', '36047046202', '36047046400', '36047046800', '36047047000', '36047047200', '36047047400', '36047047600', '36047047700', '36047047800', '36047048000', '36047048100', '36047048200', '36047048400', '36047048500', '36047048600', '36047048800', '36047048900', '36047049000', '36047049100', '36047049200', '36047049300', '36047049400', '36047049500', '36047049600', '36047049700', '36047049800', '36047049900', '36047050000', '36047050100', '36047050202', '36047050300', '36047050400', '36047050500', '36047050600', '36047050700', '36047050801', '36047050803', '36047050804', '36047050900', '36047051001', '36047051002', '36047051100', '36047051200', '36047051300', '36047051400', '36047051500', '36047051601', '36047051602', '36047051700', '36047051800', '36047051900', '36047052000', '36047052300', '36047052500', '36047052600', '36047052700', '36047052800', '36047052900', '36047053000', '36047053100', '36047053200', '36047053300', '36047053400', '36047053500', '36047053700', '36047053800', '36047053900', '36047054200', '36047054300', '36047054400', '36047054500', '36047054600', '36047054700', '36047054800', '36047054900', '36047055000', '36047055100', '36047055200', '36047055300', '36047055400', '36047055500', '36047055600', '36047055700', '36047055800', '36047056000', '36047056100', '36047056200', '36047056300', '36047056400', '36047056500', '36047056600', '36047056800', '36047056900', '36047057000', '36047057100', '36047057200', '36047057300', '36047057400', '36047057500', '36047057600', '36047057800', '36047057900', '36047058000', '36047058200', '36047058400', '36047058600', '36047058800', '36047058900', '36047059000', '36047059100', '36047059200', '36047059300', '36047059401', '36047059402', '36047059600', '36047059800', '36047060000', '36047060600', '36047060800', '36047061002', '36047061003', '36047061004', '36047061200', '36047061600', '36047062000', '36047062200', '36047062600', '36047062800', '36047063200', '36047063600', '36047063800', '36047064000', '36047064200', '36047064400', '36047064600', '36047064800', '36047065000', '36047065200', '36047065400', '36047065600', '36047065800', '36047066000', '36047066200', '36047066600', '36047067000', '36047067200', '36047067400', '36047067600', '36047067800', '36047068000', '36047068200', '36047068600', '36047068800', '36047069000', '36047069200', '36047069601', '36047069602', '36047069800', '36047070000', '36047070201', '36047070202', '36047070203', '36047070600', '36047072000', '36047072200', '36047072400', '36047072600', '36047072800', '36047073000', '36047073200', '36047073400', '36047073600', '36047073800', '36047074000', '36047074200', '36047074400', '36047074600', '36047074800', '36047075000', '36047075200', '36047075400', '36047075600', '36047075800', '36047076000', '36047076200', '36047076400', '36047076600', '36047076800', '36047077000', '36047077200', '36047077400', '36047077600', '36047078000', '36047078200', '36047078400', '36047078600', '36047078800', '36047079000', '36047079200', '36047079400', '36047079601', '36047079602', '36047079801', '36047079802', '36047080000', '36047080200', '36047080400', '36047080600', '36047080800', '36047081000', '36047081400', '36047081600', '36047081800', '36047082000', '36047082200', '36047082400', '36047082600', '36047082800', '36047083000', '36047083200', '36047083400', '36047083600', '36047083800', '36047084000', '36047084600', '36047084800', '36047085000', '36047085200', '36047085400', '36047085600', '36047085800', '36047086000', '36047086200', '36047086400', '36047086600', '36047086800', '36047087000', '36047087200', '36047087401', '36047087600', '36047087800', '36047088000', '36047088200', '36047088400', '36047088600', '36047088800', '36047089000', '36047089200', '36047089400', '36047089600', '36047089800', '36047090000', '36047090200', '36047090600', '36047090800', '36047091000', '36047091200', '36047091600', '36047091800', '36047092000', '36047092200', '36047092400', '36047092800', '36047093000', '36047093200', '36047093400', '36047093600', '36047093800', '36047094401', '36047094402', '36047094600', '36047095000', '36047095400', '36047095600', '36047095800', '36047096000', '36047096200', '36047096400', '36047096600', '36047096800', '36047097000', '36047097400', '36047098200', '36047098400', '36047098600', '36047098800', '36047099000', '36047099200', '36047099400', '36047099600', '36047099800', '36047100400', '36047100600', '36047100800', '36047101000', '36047101200', '36047101400', '36047101600', '36047101800', '36047102000', '36047102200', '36047102400', '36047102600', '36047102800', '36047103400', '36047105801', '36047105804', '36047107000', '36047107800', '36047109800', '36047110400', '36047110600', '36047111000', '36047111600', '36047111800', '36047112000', '36047112200', '36047112400', '36047112600', '36047112800', '36047113000', '36047113200', '36047113400', '36047114201', '36047114202', '36047114400', '36047114600', '36047115000', '36047115200', '36047115600', '36047115800', '36047116000', '36047116200', '36047116400', '36047116600', '36047116800', '36047117000', '36047117201', '36047117202', '36047117400', '36047117601', '36047117602', '36047117800', '36047118000', '36047118201', '36047118202', '36047118400', '36047118600', '36047118800', '36047119000', '36047119200', '36047119400', '36047119600', '36047119800', '36047120000', '36047120200', '36047120800', '36047121000', '36047121400', '36047122000', '36047123700', '36047150200', '36047152200', '36047990100', '36061000100', '36061000201', '36061000202', '36061000500', '36061000600', '36061000800', '36061000900', '36061001001', '36061001002', '36061001200', '36061001300', '36061001401', '36061001402', '36061001501', '36061001502', '36061001600', '36061001800', '36061002000', '36061002100', '36061002201', '36061002202', '36061002400', '36061002500', '36061002601', '36061002602', '36061002700', '36061002800', '36061002900', '36061003001', '36061003002', '36061003100', '36061003200', '36061003300', '36061003400', '36061003601', '36061003602', '36061003700', '36061003800', '36061003900', '36061004000', '36061004100', '36061004200', '36061004300', '36061004400', '36061004500', '36061004700', '36061004800', '36061004900', '36061005000', '36061005200', '36061005400', '36061005501', '36061005502', '36061005600', '36061005700', '36061005800', '36061005900', '36061006000', '36061006100', '36061006200', '36061006300', '36061006400', '36061006500', '36061006600', '36061006700', '36061006800', '36061006900', '36061007000', '36061007100', '36061007200', '36061007300', '36061007400', '36061007500', '36061007600', '36061007700', '36061007800', '36061007900', '36061008000', '36061008100', '36061008200', '36061008300', '36061008400', '36061008601', '36061008602', '36061008603', '36061008700', '36061008800', '36061008900', '36061009000', '36061009100', '36061009200', '36061009300', '36061009400', '36061009500', '36061009600', '36061009700', '36061009800', '36061009900', '36061010000', '36061010100', '36061010200', '36061010300', '36061010400', '36061010601', '36061010602', '36061010800', '36061010900', '36061011000', '36061011100', '36061011201', '36061011202', '36061011203', '36061011300', '36061011401', '36061011402', '36061011500', '36061011600', '36061011700', '36061011800', '36061011900', '36061012000', '36061012100', '36061012200', '36061012400', '36061012500', '36061012600', '36061012700', '36061012800', '36061012900', '36061013000', '36061013100', '36061013200', '36061013300', '36061013400', '36061013500', '36061013600', '36061013700', '36061013800', '36061013900', '36061014000', '36061014200', '36061014300', '36061014401', '36061014402', '36061014500', '36061014601', '36061014602', '36061014700', '36061014801', '36061014802', '36061014900', '36061015001', '36061015002', '36061015100', '36061015200', '36061015300', '36061015400', '36061015500', '36061015601', '36061015602', '36061015700', '36061015801', '36061015802', '36061015900', '36061016001', '36061016002', '36061016100', '36061016200', '36061016300', '36061016400', '36061016500', '36061016600', '36061016700', '36061016800', '36061016900', '36061017000', '36061017100', '36061017200', '36061017300', '36061017401', '36061017402', '36061017500', '36061017700', '36061017800', '36061017900', '36061018000', '36061018100', '36061018200', '36061018300', '36061018400', '36061018500', '36061018600', '36061018700', '36061018800', '36061018900', '36061019000', '36061019100', '36061019200', '36061019300', '36061019400', '36061019500', '36061019600', '36061019701', '36061019702', '36061019800', '36061019900', '36061020000', '36061020101', '36061020102', '36061020300', '36061020500', '36061020600', '36061020701', '36061020800', '36061020901', '36061021000', '36061021100', '36061021200', '36061021303', '36061021400', '36061021500', '36061021600', '36061021703', '36061021800', '36061021900', '36061022000', '36061022102', '36061022200', '36061022301', '36061022302', '36061022400', '36061022500', '36061022600', '36061022700', '36061022800', '36061022900', '36061023000', '36061023100', '36061023200', '36061023300', '36061023400', '36061023501', '36061023502', '36061023600', '36061023700', '36061023801', '36061023802', '36061023900', '36061024000', '36061024100', '36061024200', '36061024301', '36061024302', '36061024500', '36061024700', '36061024900', '36061025100', '36061025300', '36061025500', '36061025700', '36061025900', '36061026100', '36061026300', '36061026500', '36061026700', '36061026900', '36061027100', '36061027300', '36061027500', '36061027700', '36061027900', '36061028100', '36061028300', '36061028500', '36061028700', '36061029100', '36061029300', '36061029500', '36061029700', '36061029900', '36061030300', '36061030700', '36061030900', '36061031100', '36061031703', '36061031704', '36061031900', '36081000100', '36081000200', '36081000400', '36081000600', '36081000700', '36081000800', '36081001000', '36081001200', '36081001400', '36081001600', '36081001800', '36081001900', '36081002000', '36081002200', '36081002400', '36081002500', '36081002600', '36081002800', '36081003000', '36081003100', '36081003200', '36081003300', '36081003400', '36081003600', '36081003700', '36081003800', '36081003900', '36081004001', '36081004002', '36081004200', '36081004300', '36081004401', '36081004500', '36081004700', '36081005000', '36081005100', '36081005200', '36081005300', '36081005400', '36081005500', '36081005700', '36081005800', '36081005900', '36081006100', '36081006201', '36081006202', '36081006300', '36081006501', '36081006502', '36081006900', '36081007100', '36081007300', '36081007500', '36081007700', '36081007900', '36081008100', '36081008300', '36081008500', '36081008600', '36081008700', '36081008800', '36081009100', '36081009400', '36081009500', '36081009600', '36081009700', '36081009800', '36081009900', '36081010000', '36081010100', '36081010200', '36081010300', '36081010400', '36081010500', '36081010600', '36081010701', '36081010800', '36081011000', '36081011100', '36081011200', '36081011300', '36081011400', '36081011500', '36081011600', '36081011700', '36081011800', '36081011900', '36081012000', '36081012100', '36081012200', '36081012301', '36081012400', '36081012500', '36081012601', '36081012602', '36081012800', '36081013000', '36081013200', '36081013400', '36081013500', '36081013600', '36081013700', '36081013800', '36081014000', '36081014100', '36081014201', '36081014202', '36081014300', '36081014400', '36081014500', '36081014700', '36081014800', '36081014900', '36081015000', '36081015100', '36081015200', '36081015300', '36081015400', '36081015500', '36081015600', '36081015700', '36081015801', '36081015802', '36081015900', '36081016100', '36081016300', '36081016400', '36081016600', '36081016800', '36081016900', '36081017000', '36081017100', '36081017200', '36081017400', '36081017600', '36081017800', '36081017900', '36081018000', '36081018101', '36081018102', '36081018200', '36081018300', '36081018401', '36081018402', '36081018501', '36081018502', '36081018600', '36081018700', '36081018800', '36081018900', '36081019000', '36081019200', '36081019400', '36081019600', '36081019800', '36081019900', '36081020200', '36081020400', '36081020500', '36081020600', '36081020800', '36081021200', '36081021400', '36081021600', '36081021900', '36081022001', '36081022002', '36081022900', '36081023000', '36081023200', '36081023500', '36081023600', '36081023800', '36081024000', '36081024300', '36081024500', '36081024600', '36081024700', '36081024900', '36081025100', '36081025301', '36081025302', '36081025400', '36081025500', '36081025700', '36081025800', '36081025900', '36081026000', '36081026100', '36081026200', '36081026300', '36081026400', '36081026500', '36081026600', '36081026700', '36081026901', '36081026902', '36081027000', '36081027100', '36081027200', '36081027300', '36081027400', '36081027500', '36081027600', '36081027700', '36081027800', '36081027900', '36081028000', '36081028100', '36081028200', '36081028300', '36081028400', '36081028500', '36081028700', '36081028800', '36081028900', '36081029100', '36081029300', '36081029400', '36081029500', '36081029700', '36081029900', '36081030600', '36081030902', '36081030903', '36081030904', '36081031700', '36081032000', '36081032700', '36081032800', '36081032900', '36081033000', '36081033100', '36081033401', '36081033402', '36081033700', '36081033900', '36081034700', '36081035100', '36081035200', '36081035300', '36081035700', '36081035800', '36081036100', '36081036300', '36081036500', '36081036600', '36081036700', '36081036800', '36081037100', '36081037300', '36081037500', '36081037600', '36081037700', '36081037900', '36081038100', '36081038301', '36081038302', '36081038400', '36081039400', '36081039800', '36081039900', '36081040000', '36081040100', '36081040200', '36081040300', '36081040400', '36081040500', '36081040700', '36081040900', '36081041100', '36081041300', '36081041400', '36081041500', '36081042400', '36081042600', '36081042700', '36081043200', '36081043400', '36081043701', '36081043702', '36081043900', '36081044000', '36081044301', '36081044302', '36081044400', '36081044601', '36081044602', '36081044800', '36081045000', '36081045200', '36081045400', '36081045500', '36081045600', '36081045700', '36081045800', '36081045900', '36081046000', '36081046100', '36081046200', '36081046300', '36081046400', '36081046500', '36081046600', '36081046700', '36081046800', '36081046900', '36081047000', '36081047100', '36081047200', '36081047300', '36081047500', '36081047600', '36081047800', '36081047900', '36081048000', '36081048100', '36081048200', '36081048300', '36081048400', '36081048500', '36081048900', '36081049200', '36081049301', '36081049302', '36081049500', '36081049600', '36081049700', '36081049900', '36081050000', '36081050201', '36081050202', '36081050400', '36081050500', '36081050600', '36081050700', '36081050800', '36081051000', '36081051100', '36081051200', '36081051300', '36081051500', '36081051600', '36081051700', '36081051800', '36081052000', '36081052100', '36081052200', '36081052400', '36081052500', '36081052600', '36081052800', '36081053000', '36081053100', '36081053200', '36081053401', '36081053500', '36081053601', '36081053800', '36081053900', '36081054000', '36081054200', '36081054500', '36081054700', '36081054800', '36081054900', '36081055100', '36081055200', '36081055300', '36081055400', '36081055500', '36081055600', '36081055700', '36081055800', '36081055900', '36081056000', '36081056100', '36081056200', '36081056400', '36081056500', '36081056600', '36081056700', '36081056800', '36081057700', '36081057900', '36081058000', '36081058100', '36081058200', '36081058300', '36081058500', '36081058700', '36081058900', '36081059000', '36081059100', '36081059200', '36081059300', '36081059400', '36081059500', '36081059600', '36081059800', '36081059900', '36081060000', '36081060100', '36081060300', '36081060600', '36081060701', '36081060800', '36081061000', '36081061200', '36081061301', '36081061302', '36081061400', '36081061601', '36081061602', '36081061800', '36081061900', '36081062000', '36081062100', '36081062200', '36081062300', '36081062400', '36081062500', '36081062600', '36081062700', '36081062900', '36081063000', '36081063200', '36081063301', '36081063302', '36081063500', '36081063700', '36081063800', '36081063900', '36081064101', '36081064102', '36081064500', '36081064600', '36081065000', '36081065400', '36081065501', '36081065600', '36081065702', '36081065703', '36081065900', '36081066000', '36081066100', '36081066300', '36081066400', '36081066501', '36081066701', '36081066900', '36081067100', '36081067700', '36081067900', '36081068000', '36081068200', '36081068300', '36081068700', '36081069000', '36081069300', '36081069400', '36081069500', '36081069701', '36081069702', '36081070300', '36081070700', '36081070900', '36081071100', '36081071303', '36081071304', '36081071305', '36081071306', '36081071600', '36081071701', '36081071702', '36081071900', '36081072100', '36081072300', '36081072900', '36081073100', '36081073700', '36081073900', '36081074100', '36081074300', '36081074500', '36081074700', '36081074900', '36081075701', '36081075702', '36081076901', '36081076902', '36081077300', '36081077500', '36081077902', '36081077903', '36081077904', '36081077905', '36081077906', '36081077907', '36081077908', '36081078800', '36081079000', '36081079200', '36081079300', '36081079701', '36081079702', '36081079900', '36081080301', '36081080302', '36081080900', '36081081400', '36081081800', '36081083700', '36081083800', '36081084000', '36081084500', '36081084601', '36081084602', '36081084900', '36081085300', '36081085500', '36081085700', '36081085900', '36081086100', '36081086300', '36081086400', '36081086500', '36081086900', '36081087100', '36081088400', '36081088901', '36081089200', '36081090700', '36081091601', '36081091602', '36081091800', '36081091900', '36081092200', '36081092500', '36081092800', '36081092900', '36081093401', '36081093402', '36081093800', '36081093900', '36081094201', '36081094202', '36081094203', '36081094500', '36081094700', '36081095400', '36081096400', '36081097202', '36081097203', '36081097204', '36081097300', '36081098100', '36081098700', '36081099100', '36081099200', '36081099701', '36081099703', '36081099704', '36081099705', '36081099801', '36081099802', '36081099900', '36081100801', '36081100802', '36081101001', '36081101002', '36081101700', '36081102900', '36081103201', '36081103202', '36081103300', '36081103900', '36081104700', '36081105900', '36081107201', '36081107202', '36081108500', '36081109300', '36081109700', '36081109900', '36081111300', '36081112300', '36081112900', '36081113300', '36081113900', '36081114100', '36081114700', '36081115100', '36081115500', '36081115700', '36081115900', '36081116100', '36081116300', '36081116700', '36081117100', '36081117500', '36081118100', '36081118500', '36081118700', '36081118900', '36081119100', '36081119300', '36081119500', '36081119900', '36081120100', '36081120300', '36081120500', '36081120700', '36081121100', '36081121500', '36081122300', '36081122701', '36081122702', '36081124100', '36081124700', '36081125700', '36081126500', '36081126700', '36081127700', '36081128300', '36081129102', '36081129103', '36081129104', '36081130100', '36081133300', '36081133900', '36081134100', '36081134700', '36081136700', '36081137700', '36081138501', '36081138502', '36081139900', '36081140300', '36081140901', '36081140902', '36081141700', '36081142900', '36081143500', '36081144100', '36081144700', '36081145101', '36081145102', '36081145900', '36081146300', '36081146700', '36081147100', '36081147900', '36081148300', '36081150701', '36081150702', '36081152901', '36081152902', '36081155101', '36081155102', '36081156700', '36081157101', '36081157102', '36081157901', '36081157902', '36081157903', '36081161700', '36081162100', '36081990100', '36085000300', '36085000600', '36085000700', '36085000800', '36085000900', '36085001100', '36085001700', '36085001800', '36085002001', '36085002002', '36085002100', '36085002700', '36085002900', '36085003300', '36085003600', '36085003900', '36085004000', '36085004700', '36085005000', '36085005900', '36085006400', '36085006700', '36085007000', '36085007400', '36085007500', '36085007700', '36085008100', '36085008900', '36085009601', '36085009602', '36085009700', '36085010500', '36085011201', '36085011202', '36085011401', '36085011402', '36085012100', '36085012200', '36085012500', '36085012804', '36085012805', '36085012806', '36085013201', '36085013203', '36085013204', '36085013301', '36085013302', '36085013400', '36085013800', '36085014100', '36085014604', '36085014605', '36085014606', '36085014607', '36085014608', '36085014700', '36085015100', '36085015400', '36085015601', '36085015602', '36085015603', '36085016901', '36085017005', '36085017007', '36085017008', '36085017009', '36085017010', '36085017011', '36085017012', '36085017300', '36085017600', '36085017700', '36085018100', '36085018701', '36085018702', '36085018901', '36085018902', '36085019700', '36085019800', '36085020100', '36085020700', '36085020801', '36085020803', '36085020804', '36085021300', '36085022300', '36085022600', '36085022800', '36085023100', '36085023900', '36085024401', '36085024402', '36085024700', '36085024800', '36085025100', '36085027301', '36085027302', '36085027702', '36085027704', '36085027705', '36085027706', '36085027900', '36085029102', '36085029103', '36085029104', '36085030301', '36085030302', '36085031901', '36085031902', '36085032300', '36085990100']