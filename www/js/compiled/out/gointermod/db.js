// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.db');
goog.require('cljs.core');
gointermod.db.default_db = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"selected-organism","selected-organism",-197871422),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"are-all-orthologs-selected?","are-all-orthologs-selected?",1752058993),true,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"ortholog-summary","ortholog-summary",289345828),new cljs.core.Keyword(null,"active-filter","active-filter",845441376),"biological_process",new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentArrayMap(null, 3, ["biological_process",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pretty-name","pretty-name",282563528),"Biological Process",new cljs.core.Keyword(null,"icon","icon",1679606541),"#icon-biological-process"], null),"molecular_function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pretty-name","pretty-name",282563528),"Molecular Function",new cljs.core.Keyword(null,"icon","icon",1679606541),"#icon-molecular-function"], null),"cellular_component",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pretty-name","pretty-name",282563528),"Cellular Component",new cljs.core.Keyword(null,"icon","icon",1679606541),"#icon-cellular-component"], null)], null),new cljs.core.Keyword(null,"organisms","organisms",-239799703),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"common","common",-1822281391),"Human",new cljs.core.Keyword(null,"output?","output?",911035219),true,new cljs.core.Keyword(null,"abbrev","abbrev",10803847),"H. sapiens",new cljs.core.Keyword(null,"mine","mine",-130428525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"HumanMine",new cljs.core.Keyword(null,"url","url",276297046),"beta.humanmine.org/beta",new cljs.core.Keyword(null,"service","service",-1963054559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),"beta.humanmine.org/beta"], null)], null)], null),new cljs.core.Keyword(null,"fly","fly",-1804296463),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fly","fly",-1804296463),new cljs.core.Keyword(null,"common","common",-1822281391),"Fly",new cljs.core.Keyword(null,"output?","output?",911035219),true,new cljs.core.Keyword(null,"abbrev","abbrev",10803847),"D. melanogaster",new cljs.core.Keyword(null,"mine","mine",-130428525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"FlyMine",new cljs.core.Keyword(null,"url","url",276297046),"beta.flymine.org/beta",new cljs.core.Keyword(null,"service","service",-1963054559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),"beta.flymine.org/beta"], null)], null)], null),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"common","common",-1822281391),"Mouse",new cljs.core.Keyword(null,"output?","output?",911035219),true,new cljs.core.Keyword(null,"abbrev","abbrev",10803847),"M. musculus",new cljs.core.Keyword(null,"mine","mine",-130428525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"MouseMine",new cljs.core.Keyword(null,"url","url",276297046),"www.mousemine.org/mousemine",new cljs.core.Keyword(null,"service","service",-1963054559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),"www.mousemine.org/mousemine"], null)], null)], null),new cljs.core.Keyword(null,"rat","rat",-1634528487),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rat","rat",-1634528487),new cljs.core.Keyword(null,"common","common",-1822281391),"Rat",new cljs.core.Keyword(null,"output?","output?",911035219),true,new cljs.core.Keyword(null,"abbrev","abbrev",10803847),"R. norvegicus",new cljs.core.Keyword(null,"mine","mine",-130428525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"RatMine",new cljs.core.Keyword(null,"url","url",276297046),"ratmine.mcw.edu/ratmine",new cljs.core.Keyword(null,"service","service",-1963054559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),"stearman.hmgc.mcw.edu/ratmine"], null)], null)], null),new cljs.core.Keyword(null,"zebrafish","zebrafish",1192394887),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"zebrafish","zebrafish",1192394887),new cljs.core.Keyword(null,"common","common",-1822281391),"Zebrafish",new cljs.core.Keyword(null,"output?","output?",911035219),true,new cljs.core.Keyword(null,"abbrev","abbrev",10803847),"D. rerio",new cljs.core.Keyword(null,"mine","mine",-130428525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"ZebraFishMine",new cljs.core.Keyword(null,"url","url",276297046),"www.zebrafishmine.org",new cljs.core.Keyword(null,"service","service",-1963054559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),"www.zebrafishmine.org"], null)], null)], null),new cljs.core.Keyword(null,"worm","worm",-1507166205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"worm","worm",-1507166205),new cljs.core.Keyword(null,"common","common",-1822281391),"Worm",new cljs.core.Keyword(null,"output?","output?",911035219),false,new cljs.core.Keyword(null,"abbrev","abbrev",10803847),"C. elegans",new cljs.core.Keyword(null,"mine","mine",-130428525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"WormMine",new cljs.core.Keyword(null,"url","url",276297046),"http://intermine.wormbase.org/tools/wormmine",new cljs.core.Keyword(null,"service","service",-1963054559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),"intermine.wormbase.org/tools/wormmine"], null)], null)], null),new cljs.core.Keyword(null,"yeast","yeast",-295610221),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"yeast","yeast",-295610221),new cljs.core.Keyword(null,"output?","output?",911035219),true,new cljs.core.Keyword(null,"common","common",-1822281391),"Yeast",new cljs.core.Keyword(null,"abbrev","abbrev",10803847),"S. cerevisiae",new cljs.core.Keyword(null,"mine","mine",-130428525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"YeastMine",new cljs.core.Keyword(null,"url","url",276297046),"yeastmine.yeastgenome.org/yeastmine",new cljs.core.Keyword(null,"service","service",-1963054559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),"yeastmine.yeastgenome.org/yeastmine"], null)], null)], null)], null),new cljs.core.Keyword(null,"evidence-codes","evidence-codes",1390569596),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Experiment (EXP)",new cljs.core.Keyword(null,"code","code",1586293142),"EXP",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Direct Assay (IDA)",new cljs.core.Keyword(null,"code","code",1586293142),"IDA",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Physical Interaction (IPI)",new cljs.core.Keyword(null,"code","code",1586293142),"IPI",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Mutant Phenotype (IMP)",new cljs.core.Keyword(null,"code","code",1586293142),"IMP",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Genetic Interaction (IGI)",new cljs.core.Keyword(null,"code","code",1586293142),"IGI",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Expression Pattern (IEP)",new cljs.core.Keyword(null,"code","code",1586293142),"IEP",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Sequence or structural Similarity (ISS)",new cljs.core.Keyword(null,"code","code",1586293142),"ISS",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Sequence Orthology (ISO)",new cljs.core.Keyword(null,"code","code",1586293142),"ISO",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Sequence Alignment (ISA)",new cljs.core.Keyword(null,"code","code",1586293142),"ISA",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Sequence Model (ISM)",new cljs.core.Keyword(null,"code","code",1586293142),"ISM",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Genomic Context (IGC)",new cljs.core.Keyword(null,"code","code",1586293142),"IGC",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Biological aspect of Ancestor (IBA)",new cljs.core.Keyword(null,"code","code",1586293142),"IBA",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Biological aspect of Descendant (IBD)",new cljs.core.Keyword(null,"code","code",1586293142),"IBD",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Key Residues (IKR)",new cljs.core.Keyword(null,"code","code",1586293142),"IKR",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Rapid Divergence(IRD)",new cljs.core.Keyword(null,"code","code",1586293142),"IRD",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Reviewed Computational Analysis (RCA)",new cljs.core.Keyword(null,"code","code",1586293142),"RCA",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Traceable Author Statement (TAS)",new cljs.core.Keyword(null,"code","code",1586293142),"TAS",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Non-traceable Author Statement (NAS)",new cljs.core.Keyword(null,"code","code",1586293142),"NAS",new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred by Curator (IC)",new cljs.core.Keyword(null,"code","code",1586293142),"IC",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"No biological Data available (ND) evidence code",new cljs.core.Keyword(null,"checked","checked",-50955819),false,new cljs.core.Keyword(null,"code","code",1586293142),"ND"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Inferred from Electronic Annotation (IEA)",new cljs.core.Keyword(null,"checked","checked",-50955819),false,new cljs.core.Keyword(null,"code","code",1586293142),"IEA"], null)], null),new cljs.core.Keyword(null,"expand-evidence-codes?","expand-evidence-codes?",-763768372),false], null);

//# sourceMappingURL=db.js.map?rel=1462895597405