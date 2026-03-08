
const LANG_KEY = "aoe4_lang";
const SITE_LANG_KEY = "lyralab_lang";
const SUPPORTED_LANGS = ["zh", "en", "ja"];

const civProfiles = {
  abbasid_dynasty:{zh:"阿拔斯王朝",en:"Abbasid Dynasty",villagerTrainSec:20,bias:{feudal_pressure:6,fast_castle:8,tc_boom:11,defensive_scale:8,trade_boom:7}},
  ayyubids:{zh:"阿尤布王朝",en:"Ayyubids",villagerTrainSec:20,bias:{feudal_pressure:12,fast_castle:8,tc_boom:5,defensive_scale:5,trade_boom:4}},
  byzantines:{zh:"拜占庭",en:"Byzantines",villagerTrainSec:20,bias:{feudal_pressure:10,fast_castle:8,tc_boom:7,defensive_scale:8,trade_boom:4}},
  chinese:{zh:"中国",en:"Chinese",villagerTrainSec:20,bias:{feudal_pressure:6,fast_castle:9,tc_boom:10,defensive_scale:8,trade_boom:6}},
  delhi_sultanate:{zh:"德里苏丹国",en:"Delhi Sultanate",villagerTrainSec:20,bias:{feudal_pressure:8,fast_castle:9,tc_boom:8,defensive_scale:8,trade_boom:4}},
  english:{zh:"英格兰",en:"English",villagerTrainSec:20,bias:{feudal_pressure:4,fast_castle:5,tc_boom:11,defensive_scale:12,trade_boom:4}},
  french:{zh:"法兰西",en:"French",villagerTrainSec:19,bias:{feudal_pressure:14,fast_castle:6,tc_boom:6,defensive_scale:3,trade_boom:8}},
  golden_horde:{zh:"金帐汗国",en:"Golden Horde",villagerTrainSec:20,bias:{feudal_pressure:14,fast_castle:9,tc_boom:5,defensive_scale:2,trade_boom:3}},
  holy_roman_empire:{zh:"神圣罗马帝国",en:"Holy Roman Empire",villagerTrainSec:20,bias:{feudal_pressure:7,fast_castle:10,tc_boom:8,defensive_scale:10,trade_boom:4}},
  house_of_lancaster:{zh:"兰开斯特家族",en:"House of Lancaster",villagerTrainSec:20,bias:{feudal_pressure:5,fast_castle:7,tc_boom:11,defensive_scale:11,trade_boom:4}},
  japanese:{zh:"日本",en:"Japanese",villagerTrainSec:20,bias:{feudal_pressure:8,fast_castle:10,tc_boom:10,defensive_scale:8,trade_boom:3}},
  jeanne_darc:{zh:"圣女贞德",en:"Jeanne d'Arc",villagerTrainSec:20,bias:{feudal_pressure:11,fast_castle:8,tc_boom:6,defensive_scale:5,trade_boom:4}},
  knights_templar:{zh:"圣殿骑士团",en:"Knights Templar",villagerTrainSec:20,bias:{feudal_pressure:6,fast_castle:9,tc_boom:10,defensive_scale:10,trade_boom:5}},
  macedonian_dynasty:{zh:"马其顿王朝",en:"Macedonian Dynasty",villagerTrainSec:20,bias:{feudal_pressure:8,fast_castle:10,tc_boom:8,defensive_scale:8,trade_boom:5}},
  malians:{zh:"马里",en:"Malians",villagerTrainSec:20,bias:{feudal_pressure:11,fast_castle:8,tc_boom:6,defensive_scale:5,trade_boom:7}},
  mongols:{zh:"蒙古",en:"Mongols",villagerTrainSec:20,bias:{feudal_pressure:10,fast_castle:8,tc_boom:4,defensive_scale:4,trade_boom:10}},
  order_of_the_dragon:{zh:"龙骑士团",en:"Order of the Dragon",villagerTrainSec:20,bias:{feudal_pressure:8,fast_castle:9,tc_boom:8,defensive_scale:9,trade_boom:4}},
  ottomans:{zh:"奥斯曼",en:"Ottomans",villagerTrainSec:20,bias:{feudal_pressure:6,fast_castle:8,tc_boom:10,defensive_scale:11,trade_boom:4}},
  rus:{zh:"罗斯",en:"Rus",villagerTrainSec:20,bias:{feudal_pressure:8,fast_castle:8,tc_boom:9,defensive_scale:9,trade_boom:6}},
  sengoku_daimyo:{zh:"战国大名",en:"Sengoku Daimyo",villagerTrainSec:20,bias:{feudal_pressure:13,fast_castle:8,tc_boom:4,defensive_scale:4,trade_boom:4}},
  tughlaq_dynasty:{zh:"图格鲁克王朝",en:"Tughlaq Dynasty",villagerTrainSec:20,bias:{feudal_pressure:11,fast_castle:8,tc_boom:6,defensive_scale:6,trade_boom:5}},
  zhu_xis_legacy:{zh:"朱熹遗产",en:"Zhu Xi's Legacy",villagerTrainSec:20,bias:{feudal_pressure:10,fast_castle:9,tc_boom:8,defensive_scale:6,trade_boom:5}}
};

const mapProfiles = {
  DryArabia:{zh:"干阿拉伯",en:"Dry Arabia",medianSec:1419,water:false,imageSrc:"./assets/maps/dry-arabia.svg"},
  RockyRiver:{zh:"岩石河",en:"Rocky River",medianSec:1488,water:false,imageSrc:"./assets/maps/rocky-river.svg"},
  Gorge:{zh:"峡谷",en:"Gorge",medianSec:1397,water:false,imageSrc:"./assets/maps/gorge.svg"},
  Cliffside:{zh:"悬崖边",en:"Cliffside",medianSec:1321,water:false,imageSrc:"./assets/maps/cliffside.svg"},
  HighView:{zh:"高地视野",en:"High View",medianSec:1437,water:false,imageSrc:"./assets/maps/high-view.svg"},
  Prairie:{zh:"草原",en:"Prairie",medianSec:1424,water:false,imageSrc:"./assets/maps/prairie.svg"},
  Confluence:{zh:"汇流",en:"Confluence",medianSec:1658,water:true,imageSrc:"./assets/maps/confluence.svg"},
  Socotra:{zh:"索科特拉",en:"Socotra",medianSec:1202,water:false,imageSrc:"./assets/maps/socotra.svg"},
  Baltic:{zh:"波罗的海",en:"Baltic",medianSec:1700,water:true,imageSrc:"./assets/maps/baltic.svg"},
  FourLakes:{zh:"四湖",en:"Four Lakes",medianSec:1497,water:true,imageSrc:"./assets/maps/four-lakes.svg"}
};

const BASE_GATHER_RATE = { food:40, wood:38, gold:36, stone:32 };
const strategyDefs = {
  feudal_pressure:{label:{zh:"封建压制（单TC）",en:"Feudal Pressure (1TC)",ja:"封建圧（1TC）"},weights:{food:0.35,wood:0.35,gold:0.2,stone:0.1},mapBias:{fast:14,medium:5,slow:-8},allInResponse:10,tc2Penalty:10},
  fast_castle:{label:{zh:"快速城堡（稳防转质变）",en:"Fast Castle",ja:"高速城主"},weights:{food:0.4,wood:0.15,gold:0.4,stone:0.05},mapBias:{fast:-4,medium:9,slow:8},allInResponse:-8,tc2Penalty:6},
  tc_boom:{label:{zh:"双TC经济",en:"2TC Boom",ja:"2TCブーム"},weights:{food:0.3,wood:0.25,gold:0.1,stone:0.35},mapBias:{fast:-12,medium:4,slow:14},allInResponse:-16,tc2Penalty:-12},
  defensive_scale:{label:{zh:"防守运营到后期",en:"Defensive Scale",ja:"守備スケール"},weights:{food:0.3,wood:0.25,gold:0.3,stone:0.15},mapBias:{fast:-6,medium:6,slow:12},allInResponse:12,tc2Penalty:0},
  trade_boom:{label:{zh:"贸易与资源线扩张",en:"Trade Boom",ja:"交易ブーム"},weights:{food:0.2,wood:0.2,gold:0.5,stone:0.1},mapBias:{fast:-10,medium:4,slow:11},allInResponse:-12,tc2Penalty:0}
};
const I18N = {
  zh:{
    pageTitle:"AoE4 策略模拟器",heroTitle:"AoE4 策略模拟器",heroSubtitle:"选择文明、地图、科技和农民分配后，实时更新资源收入并推荐当前最优打法。",
    btnTimeline:"打开时间线折线图模拟器",btnBest:"打开最佳策略折线分析",langLabel:"语言",inputsTitle:"输入参数",outputsTitle:"模拟结果",
    bestTitle:"最佳策略建议",altTitle:"备选策略",normalizeBtn:"自动归一到 100%",labelCiv:"文明（含全部 DLC）",labelMap:"地图（当前图池）",
    labelAge:"时代",optAge2:"封建（II）",optAge3:"城堡（III）",optAge4:"帝王（IV）",labelVillagers:"当前农民",labelTcCount:"城镇中心数",labelEnemyAllIn:"对手封建 all-in",
    optNo:"否",optYes:"是",labelCurrentMinute:"当前分钟",labelHorizon:"模拟时长（分钟）",labelFarmShare:"食物来源中“农田占比”",techTitle:"科技与加成",labelAura:"日本农田光环",labelStock:"起始资源（各项）",
    kpiIncomeLabel:"当前总收入 / 分钟",kpiVillagerLabel:"模拟结束农民数",kpiScoreLabel:"策略建议置信分",resFoodLabel:"食物 / 分钟",resWoodLabel:"木材 / 分钟",resGoldLabel:"黄金 / 分钟",resStoneLabel:"石头 / 分钟",
    totalsTitle:"模拟期资源累计（含起始资源）",splitHint:"当前总和 {sum}%，建议点“自动归一到100%”。",tempoFast:"快图",tempoMedium:"中速图",tempoSlow:"慢图",
    waterYes:"含水域（可海战）",waterNo:"陆地图",mapMedian:"中位{m}分钟",mapInfo:"{water} · 中位时长 {m} 分钟 · {tempo}",
    reason:"当前地图是 {map}（{tempo}），你使用 {civ}。当前收入 F{f}/W{w}/G{g}/S{s} 每分钟，系统评分最高为“{best}”。",alt:"{label}（评分 {score}）",
    resFood:"食物",resWood:"木材",resGold:"黄金",resStone:"石头",warnAllIn:"对手 all-in 风险高，先切回防守与军力，再考虑贪经济。"
  },
  en:{
    pageTitle:"AoE4 Strategy Simulator",heroTitle:"AoE4 Strategy Simulator",heroSubtitle:"Pick civ, map, tech, and worker split to update eco income and strategy in real time.",
    btnTimeline:"Open Timeline Simulator",btnBest:"Open Best Strategy Analysis",langLabel:"Language",inputsTitle:"Inputs",outputsTitle:"Output",
    bestTitle:"Best Strategy",altTitle:"Alternatives",normalizeBtn:"Normalize to 100%",labelCiv:"Civilization (all DLC)",labelMap:"Map",labelAge:"Age",optAge2:"Feudal (II)",optAge3:"Castle (III)",optAge4:"Imperial (IV)",
    labelVillagers:"Current villagers",labelTcCount:"Town Centers",labelEnemyAllIn:"Enemy feudal all-in",optNo:"No",optYes:"Yes",labelCurrentMinute:"Current minute",labelHorizon:"Horizon (min)",labelFarmShare:"Farm share in food",
    techTitle:"Tech & bonuses",labelAura:"Japanese farm aura",labelStock:"Starting stock (each)",kpiIncomeLabel:"Total income / min",kpiVillagerLabel:"Projected villagers",kpiScoreLabel:"Strategy score",resFoodLabel:"Food / min",resWoodLabel:"Wood / min",resGoldLabel:"Gold / min",resStoneLabel:"Stone / min",
    totalsTitle:"Projected bank (including start stock)",splitHint:"Current sum is {sum}%. Normalize to 100%.",tempoFast:"fast map",tempoMedium:"medium map",tempoSlow:"slow map",waterYes:"water map",waterNo:"land map",mapMedian:"median {m} min",mapInfo:"{water} · median {m} min · {tempo}",
    reason:"You play {civ} on {map} ({tempo}). Income F{f}/W{w}/G{g}/S{s} per min. Top plan: {best}.",alt:"{label} (score {score})",resFood:"Food",resWood:"Wood",resGold:"Gold",resStone:"Stone",warnAllIn:"Enemy all-in risk is high. Stabilize defense first."
  },
  ja:{
    pageTitle:"AoE4 戦略シミュレーター",heroTitle:"AoE4 戦略シミュレーター",heroSubtitle:"文明・マップ・技術・配分で収入と推奨戦略をリアルタイム更新。",
    btnTimeline:"タイムラインを開く",btnBest:"最適戦略分析を開く",langLabel:"言語",inputsTitle:"入力",outputsTitle:"結果",bestTitle:"最適戦略",altTitle:"代替戦略",normalizeBtn:"100% に正規化",
    labelCiv:"文明（全DLC）",labelMap:"マップ",labelAge:"時代",optAge2:"封建（II）",optAge3:"城主（III）",optAge4:"帝王（IV）",labelVillagers:"現在の農民",labelTcCount:"TC数",labelEnemyAllIn:"敵封建 all-in",optNo:"いいえ",optYes:"はい",
    labelCurrentMinute:"現在分",labelHorizon:"時間（分）",labelFarmShare:"食料内の農場比率",techTitle:"技術とボーナス",labelAura:"日本農場オーラ",labelStock:"初期資源（各）",
    kpiIncomeLabel:"総収入 / 分",kpiVillagerLabel:"終了時農民",kpiScoreLabel:"戦略スコア",resFoodLabel:"食料 / 分",resWoodLabel:"木材 / 分",resGoldLabel:"金 / 分",resStoneLabel:"石 / 分",totalsTitle:"最終資源（初期込み）",
    splitHint:"現在の合計は {sum}% です。100% に正規化してください。",tempoFast:"速いマップ",tempoMedium:"中速マップ",tempoSlow:"遅いマップ",waterYes:"水域あり",waterNo:"陸マップ",mapMedian:"中央値 {m} 分",mapInfo:"{water} · {m} 分 · {tempo}",
    reason:"{map}（{tempo}）で {civ}。収入 F{f}/W{w}/G{g}/S{s}。最上位: {best}。",alt:"{label}（{score}）",resFood:"食料",resWood:"木材",resGold:"金",resStone:"石",warnAllIn:"敵 all-in の危険が高いです。まず防衛を優先。"
  }
};

const STEP_TEXT = {
  feudal_pressure:{zh:["优先保证 8-12 军口常备军，不要提前贪双TC。","把木头转成前线产兵建筑，持续压制对手外矿与木线。","侦察到对手转经济时，立刻加一波兵量打 timing。"],en:["Keep 8-12 army supply before greed.","Convert wood to production and pressure outer resources.","Hit a timing when enemy turns eco."],ja:["常備軍 8-12 を維持。","木材を前線生産へ回す。","相手の経済移行に合わせて追加攻勢。"]},
  fast_castle:{zh:["先维持最低防守军力，避免被封建一波打断节奏。","把资源重心拉向食物+黄金，准备城堡时代关键单位。","升级后第一时间补反制单位，不要空档。"],en:["Keep minimum defense first.","Shift to food+gold for castle timing.","Add counter units right after age-up."],ja:["最低限の防衛を維持。","食料+金を優先して城主準備。","進化後すぐ対抗ユニット追加。"]},
  tc_boom:{zh:["确认对手不是 all-in 后再开第二TC，优先安全点位。","双TC期间保持最低防守兵线，避免被冲车直接打穿。","10-12 分钟后开始把经济优势转成军力优势。"],en:["Open 2nd TC after confirming no all-in.","Keep minimum army during 2TC.","Convert eco lead to army lead at 10-12 min."],ja:["all-in でないことを確認して 2TC。","2TC中も最低限の兵力維持。","10-12分以降に経済差を軍差へ変換。"]},
  defensive_scale:{zh:["先守关键资源点与 choke point，避免正面硬拼失误。","补齐关键科技和攻城反制，等对手失误再反推。","中后期用地标/圣地倒计时逼对手开团。"],en:["Hold key resources and chokes.","Finish key tech and anti-siege.","Force fights via win-condition timers."],ja:["要所資源とチョークを守る。","主要技術と対攻城を整える。","勝利条件タイマーで戦闘を強制。"]},
  trade_boom:{zh:["先确保商路安全，再逐步扩大贸易线路。","用机动小队清对手骚扰，保住贸易持续收益。","贸易成型后把黄金优势转换为高质量兵线。"],en:["Secure route first, then extend trade.","Use mobility to clear raids.","Convert gold lead into stronger army."],ja:["まず交易路の安全確保。","機動部隊でハラス対処。","金優位を高品質兵へ変換。"]}
};

const elements = Object.fromEntries(["langSelect","civSelect","mapSelect","ageSelect","currentMinute","horizonMinutes","villagerCount","tcCount","enemyAllIn","foodPct","woodPct","goldPct","stonePct","normalizeBtn","splitHint","farmShare","farmShareValue","techHorticulture","techFertilization","techCrossBreeding","techAgriculture","granaryStacks","japaneseFarmAura","startingStock","totalIncomePerMin","projectedVillagers","bestScore","foodIncome","woodIncome","goldIncome","stoneIncome","barFood","barWood","barGold","barStone","projectedTotals","mapPreviewImage","mapPreviewTitle","mapPreviewInfo","bestStrategyName","bestStrategyReason","nextSteps","alternativeStrategies"].map(id=>[id,document.getElementById(id)]));

let currentLang = "zh";
const staticIdMap = {pageTitle:"pageTitle",heroTitle:"heroTitle",heroSubtitle:"heroSubtitle",btnTimeline:"btnTimeline",btnBest:"btnBest",langLabel:"langLabel",inputsTitle:"inputsTitle",outputsTitle:"outputsTitle",bestTitle:"bestTitle",altTitle:"altTitle",normalizeBtn:"normalizeBtn",labelCiv:"labelCiv",labelMap:"labelMap",labelAge:"labelAge",optAge2:"optAge2",optAge3:"optAge3",optAge4:"optAge4",labelVillagers:"labelVillagers",labelTcCount:"labelTcCount",labelEnemyAllIn:"labelEnemyAllIn",optNo:"optNo",optYes:"optYes",labelCurrentMinute:"labelCurrentMinute",labelHorizon:"labelHorizon",labelFarmShare:"labelFarmShare",techTitle:"techTitle",labelAura:"labelAura",labelStock:"labelStock",kpiIncomeLabel:"kpiIncomeLabel",kpiVillagerLabel:"kpiVillagerLabel",kpiScoreLabel:"kpiScoreLabel",resFoodLabel:"resFoodLabel",resWoodLabel:"resWoodLabel",resGoldLabel:"resGoldLabel",resStoneLabel:"resStoneLabel",totalsTitle:"totalsTitle"};

function t(k,v={}){let s=(I18N[currentLang]||I18N.zh)[k]||I18N.zh[k]||k;Object.entries(v).forEach(([a,b])=>{s=s.replaceAll(`{${a}}`,String(b));});return s;}
function locale(){return currentLang==="en"?"en-US":currentLang==="ja"?"ja-JP":"zh-CN";}
function fmt(n,d=1){return Number(n).toLocaleString(locale(),{maximumFractionDigits:d});}
function getName(obj){if(currentLang==="zh")return obj.zh;return obj.en;}
function getTempo(mapId){const m=mapProfiles[mapId];if(!m)return"medium";if(m.medianSec<=1380)return"fast";if(m.medianSec<=1520)return"medium";return"slow";}
function tempoText(tk){return tk==="fast"?t("tempoFast"):tk==="slow"?t("tempoSlow"):t("tempoMedium");}
function applyLanguage(lang){
  currentLang = SUPPORTED_LANGS.includes(lang)?lang:"zh";
  try{localStorage.setItem(LANG_KEY,currentLang);}catch(e){}
  try{localStorage.setItem(SITE_LANG_KEY,currentLang);}catch(e){}
  if(elements.langSelect)elements.langSelect.value=currentLang;
  Object.entries(staticIdMap).forEach(([id,key])=>{const n=document.getElementById(id);if(n)n.textContent=t(key);});
  document.title=t("pageTitle");
  document.documentElement.lang=currentLang==="zh"?"zh-CN":currentLang;
  populateSelects();
  render();
}

function populateSelects(){
  const civVal=elements.civSelect.value||"japanese";
  const mapVal=elements.mapSelect.value||"Cliffside";
  elements.civSelect.innerHTML="";
  Object.entries(civProfiles).forEach(([id,civ])=>{const op=document.createElement("option");op.value=id;op.textContent=currentLang==="zh"?`${civ.zh} (${civ.en})`:`${civ.en} (${civ.zh})`;elements.civSelect.append(op);});
  elements.mapSelect.innerHTML="";
  Object.entries(mapProfiles).forEach(([id,map])=>{const op=document.createElement("option");op.value=id;op.textContent=`${getName(map)} (${t("mapMedian",{m:Math.round(map.medianSec/60)})})`;elements.mapSelect.append(op);});
  elements.civSelect.value=civProfiles[civVal]?civVal:"japanese";
  elements.mapSelect.value=mapProfiles[mapVal]?mapVal:"Cliffside";
}

function normalizePercentages(){
  const vals=[+elements.foodPct.value,+elements.woodPct.value,+elements.goldPct.value,+elements.stonePct.value];
  const sum=vals.reduce((a,b)=>a+b,0);
  if(sum<=0){[elements.foodPct.value,elements.woodPct.value,elements.goldPct.value,elements.stonePct.value]=[40,35,20,5];return;}
  const scaled=vals.map(v=>Math.round((v/sum)*100));
  scaled[0]+=100-scaled.reduce((a,b)=>a+b,0);
  [elements.foodPct.value,elements.woodPct.value,elements.goldPct.value,elements.stonePct.value]=scaled;
}

function foodMultiplier(input){
  let global=1;
  if(input.techHorticulture)global*=1.1;
  if(input.techFertilization)global*=1.1;
  if(input.techCrossBreeding)global*=1.1;
  let farm=1;
  if(input.techAgriculture&&input.civId==="abbasid_dynasty")farm*=1.15;
  if(input.civId==="japanese")farm*=1+input.japaneseAura;
  if(input.civId==="chinese"||input.civId==="zhu_xis_legacy")farm*=1+0.1*input.granaryStacks;
  if(input.civId==="english")farm*=1+(input.age===2?0.2:input.age===3?0.25:0.3);
  return global*((1-input.farmShare)+input.farmShare*farm);
}

function readInputs(){
  const split={food:+elements.foodPct.value/100,wood:+elements.woodPct.value/100,gold:+elements.goldPct.value/100,stone:+elements.stonePct.value/100};
  const sum=split.food+split.wood+split.gold+split.stone;
  elements.splitHint.textContent=sum===1?"":t("splitHint",{sum:Math.round(sum*100)});
  return {civId:elements.civSelect.value,mapId:elements.mapSelect.value,age:+elements.ageSelect.value,currentMinute:+elements.currentMinute.value,horizonMinutes:+elements.horizonMinutes.value,villagers:+elements.villagerCount.value,tcCount:+elements.tcCount.value,enemyAllIn:elements.enemyAllIn.value==="yes",split,farmShare:+elements.farmShare.value/100,techHorticulture:elements.techHorticulture.checked,techFertilization:elements.techFertilization.checked,techCrossBreeding:elements.techCrossBreeding.checked,techAgriculture:elements.techAgriculture.checked,granaryStacks:+elements.granaryStacks.value,japaneseAura:+elements.japaneseFarmAura.value,startingStock:+elements.startingStock.value};
}

function perMin(v,s,r){return {food:v*s.food*r.food,wood:v*s.wood*r.wood,gold:v*s.gold*r.gold,stone:v*s.stone*r.stone};}
function simulate(input){
  const civ=civProfiles[input.civId]||civProfiles.japanese;const dt=10;const steps=Math.max(1,Math.round(input.horizonMinutes*60/dt));let v=input.villagers;
  const rates={food:BASE_GATHER_RATE.food*foodMultiplier(input),wood:BASE_GATHER_RATE.wood,gold:BASE_GATHER_RATE.gold,stone:BASE_GATHER_RATE.stone};
  const cur=perMin(v,input.split,rates);let f=input.startingStock,w=input.startingStock,g=input.startingStock,s=input.startingStock;
  for(let i=0;i<steps;i+=1){const inc=perMin(v,input.split,rates);f+=(inc.food/60)*dt;w+=(inc.wood/60)*dt;g+=(inc.gold/60)*dt;s+=(inc.stone/60)*dt;v+=(input.tcCount*dt)/civ.villagerTrainSec;}
  return {currentPerMin:cur,projected:{food:f,wood:w,gold:g,stone:s},projectedVillagers:v};
}

function scoreStrategies(input,sim){
  const civ=civProfiles[input.civId]||civProfiles.japanese;const tempo=getTempo(input.mapId);
  const rows=Object.entries(strategyDefs).map(([id,def])=>{let sc=0;sc+=sim.currentPerMin.food*def.weights.food+sim.currentPerMin.wood*def.weights.wood+sim.currentPerMin.gold*def.weights.gold+sim.currentPerMin.stone*def.weights.stone;sc/=12;sc+=def.mapBias[tempo];sc+=civ.bias[id]||0;if(input.enemyAllIn)sc+=def.allInResponse;if(input.tcCount===2)sc-=def.tc2Penalty;if(id==="trade_boom"&&!mapProfiles[input.mapId].water)sc-=8;if(id==="tc_boom"&&input.currentMinute<8&&tempo==="fast")sc-=10;if(id==="feudal_pressure"&&input.currentMinute>15)sc-=7;return{id,label:def.label[currentLang]||def.label.zh,score:Math.round(sc)};});
  rows.sort((a,b)=>b.score-a.score);return rows;
}

function mapFallback(map){const svg=`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"960\" height=\"540\"><rect width=\"960\" height=\"540\" fill=\"#d7e0de\"/><text x=\"48\" y=\"280\" font-size=\"44\" fill=\"#22363b\">${getName(map)}</text><text x=\"48\" y=\"330\" font-size=\"28\" fill=\"#335057\">${map.en}</text></svg>`;return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;}

function renderMap(mapId){
  const map=mapProfiles[mapId];if(!map)return;const tempo=tempoText(getTempo(mapId));const water=map.water?t("waterYes"):t("waterNo");
  let src=map.imageSrc;try{src=new URL(map.imageSrc,window.location.href).href;}catch(e){}
  elements.mapPreviewImage.onerror=()=>{elements.mapPreviewImage.onerror=null;elements.mapPreviewImage.src=mapFallback(map);};
  elements.mapPreviewImage.src=src;elements.mapPreviewImage.alt=`${getName(map)} preview`;elements.mapPreviewTitle.textContent=`${getName(map)} / ${map.en}`;elements.mapPreviewInfo.textContent=t("mapInfo",{water,m:Math.round(map.medianSec/60),tempo});
}

function nextSteps(id,input){const base=STEP_TEXT[id]?.[currentLang]||STEP_TEXT[id]?.zh||[];if(input.enemyAllIn&&(id==="tc_boom"||id==="trade_boom"))return[t("warnAllIn"),...base.slice(0,2)];return base;}

function render(){
  const input=readInputs();const sim=simulate(input);const ranked=scoreStrategies(input,sim);const best=ranked[0];renderMap(input.mapId);
  const total=sim.currentPerMin.food+sim.currentPerMin.wood+sim.currentPerMin.gold+sim.currentPerMin.stone;
  elements.totalIncomePerMin.textContent=fmt(total);elements.projectedVillagers.textContent=fmt(sim.projectedVillagers);elements.bestScore.textContent=String(best.score);
  elements.foodIncome.textContent=fmt(sim.currentPerMin.food);elements.woodIncome.textContent=fmt(sim.currentPerMin.wood);elements.goldIncome.textContent=fmt(sim.currentPerMin.gold);elements.stoneIncome.textContent=fmt(sim.currentPerMin.stone);
  elements.farmShareValue.textContent=`${Math.round(input.farmShare*100)}%`;
  const max=Math.max(sim.currentPerMin.food,sim.currentPerMin.wood,sim.currentPerMin.gold,sim.currentPerMin.stone,1);
  elements.barFood.style.width=`${sim.currentPerMin.food/max*100}%`;elements.barWood.style.width=`${sim.currentPerMin.wood/max*100}%`;elements.barGold.style.width=`${sim.currentPerMin.gold/max*100}%`;elements.barStone.style.width=`${sim.currentPerMin.stone/max*100}%`;
  elements.projectedTotals.innerHTML=`<div class=\"item\"><span class=\"name\">${t("resFood")}</span><span class=\"num\">${fmt(sim.projected.food)}</span></div><div class=\"item\"><span class=\"name\">${t("resWood")}</span><span class=\"num\">${fmt(sim.projected.wood)}</span></div><div class=\"item\"><span class=\"name\">${t("resGold")}</span><span class=\"num\">${fmt(sim.projected.gold)}</span></div><div class=\"item\"><span class=\"name\">${t("resStone")}</span><span class=\"num\">${fmt(sim.projected.stone)}</span></div>`;
  elements.bestStrategyName.textContent=best.label;
  elements.bestStrategyReason.textContent=t("reason",{map:getName(mapProfiles[input.mapId]),tempo:tempoText(getTempo(input.mapId)),civ:getName(civProfiles[input.civId]),f:fmt(sim.currentPerMin.food),w:fmt(sim.currentPerMin.wood),g:fmt(sim.currentPerMin.gold),s:fmt(sim.currentPerMin.stone),best:best.label});
  elements.nextSteps.innerHTML=nextSteps(best.id,input).map(x=>`<li>${x}</li>`).join("");
  elements.alternativeStrategies.innerHTML=ranked.slice(1,4).map(x=>`<li>${t("alt",{label:x.label,score:x.score})}</li>`).join("");
}

function wire(){
  ["civSelect","mapSelect","ageSelect","currentMinute","horizonMinutes","villagerCount","tcCount","enemyAllIn","foodPct","woodPct","goldPct","stonePct","farmShare","techHorticulture","techFertilization","techCrossBreeding","techAgriculture","granaryStacks","japaneseFarmAura","startingStock"].forEach(k=>{elements[k].addEventListener("input",render);elements[k].addEventListener("change",render);});
  elements.normalizeBtn.addEventListener("click",()=>{normalizePercentages();render();});
  if(elements.langSelect)elements.langSelect.addEventListener("change",()=>applyLanguage(elements.langSelect.value));
}

wire();
let initLang="zh";
try{
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const saved = localStorage.getItem(LANG_KEY);
  const siteSaved = localStorage.getItem(SITE_LANG_KEY);
  if(SUPPORTED_LANGS.includes(urlLang)) initLang = urlLang;
  else if(SUPPORTED_LANGS.includes(saved)) initLang = saved;
  else if(SUPPORTED_LANGS.includes(siteSaved)) initLang = siteSaved;
}catch(e){}
applyLanguage(initLang);
