
const LANG_KEY = "aoe4_lang";
const SUPPORTED_LANGS = ["zh", "en", "ja"];
const BASE_GATHER_RATE = { food: 40, wood: 38, gold: 36, stone: 32 };
const VILLAGER_TRAIN_PER_MIN = 3;

const civProfiles = {
  abbasid_dynasty:{zh:"阿拔斯王朝",en:"Abbasid Dynasty",bias:{feudal_pressure:6,fast_castle:8,tc_boom:11,defensive_scale:8,trade_boom:7}},
  ayyubids:{zh:"阿尤布王朝",en:"Ayyubids",bias:{feudal_pressure:12,fast_castle:8,tc_boom:5,defensive_scale:5,trade_boom:4}},
  byzantines:{zh:"拜占庭",en:"Byzantines",bias:{feudal_pressure:10,fast_castle:8,tc_boom:7,defensive_scale:8,trade_boom:4}},
  chinese:{zh:"中国",en:"Chinese",bias:{feudal_pressure:6,fast_castle:9,tc_boom:10,defensive_scale:8,trade_boom:6}},
  delhi_sultanate:{zh:"德里苏丹国",en:"Delhi Sultanate",bias:{feudal_pressure:8,fast_castle:9,tc_boom:8,defensive_scale:8,trade_boom:4}},
  english:{zh:"英格兰",en:"English",bias:{feudal_pressure:4,fast_castle:5,tc_boom:11,defensive_scale:12,trade_boom:4}},
  french:{zh:"法兰西",en:"French",bias:{feudal_pressure:14,fast_castle:6,tc_boom:6,defensive_scale:3,trade_boom:8}},
  golden_horde:{zh:"金帐汗国",en:"Golden Horde",bias:{feudal_pressure:14,fast_castle:9,tc_boom:5,defensive_scale:2,trade_boom:3}},
  holy_roman_empire:{zh:"神圣罗马帝国",en:"Holy Roman Empire",bias:{feudal_pressure:7,fast_castle:10,tc_boom:8,defensive_scale:10,trade_boom:4}},
  house_of_lancaster:{zh:"兰开斯特家族",en:"House of Lancaster",bias:{feudal_pressure:5,fast_castle:7,tc_boom:11,defensive_scale:11,trade_boom:4}},
  japanese:{zh:"日本",en:"Japanese",bias:{feudal_pressure:8,fast_castle:10,tc_boom:10,defensive_scale:8,trade_boom:3}},
  jeanne_darc:{zh:"圣女贞德",en:"Jeanne d'Arc",bias:{feudal_pressure:11,fast_castle:8,tc_boom:6,defensive_scale:5,trade_boom:4}},
  knights_templar:{zh:"圣殿骑士团",en:"Knights Templar",bias:{feudal_pressure:6,fast_castle:9,tc_boom:10,defensive_scale:10,trade_boom:5}},
  macedonian_dynasty:{zh:"马其顿王朝",en:"Macedonian Dynasty",bias:{feudal_pressure:8,fast_castle:10,tc_boom:8,defensive_scale:8,trade_boom:5}},
  malians:{zh:"马里",en:"Malians",bias:{feudal_pressure:11,fast_castle:8,tc_boom:6,defensive_scale:5,trade_boom:7}},
  mongols:{zh:"蒙古",en:"Mongols",bias:{feudal_pressure:10,fast_castle:8,tc_boom:4,defensive_scale:4,trade_boom:10}},
  order_of_the_dragon:{zh:"龙骑士团",en:"Order of the Dragon",bias:{feudal_pressure:8,fast_castle:9,tc_boom:8,defensive_scale:9,trade_boom:4}},
  ottomans:{zh:"奥斯曼",en:"Ottomans",bias:{feudal_pressure:6,fast_castle:8,tc_boom:10,defensive_scale:11,trade_boom:4}},
  rus:{zh:"罗斯",en:"Rus",bias:{feudal_pressure:8,fast_castle:8,tc_boom:9,defensive_scale:9,trade_boom:6}},
  sengoku_daimyo:{zh:"战国大名",en:"Sengoku Daimyo",bias:{feudal_pressure:13,fast_castle:8,tc_boom:4,defensive_scale:4,trade_boom:4}},
  tughlaq_dynasty:{zh:"图格鲁克王朝",en:"Tughlaq Dynasty",bias:{feudal_pressure:11,fast_castle:8,tc_boom:6,defensive_scale:6,trade_boom:5}},
  zhu_xis_legacy:{zh:"朱熹遗产",en:"Zhu Xi's Legacy",bias:{feudal_pressure:10,fast_castle:9,tc_boom:8,defensive_scale:6,trade_boom:5}}
};

const mapProfiles = {
  DryArabia:{zh:"干阿拉伯",en:"Dry Arabia",medianSec:1419,water:false},RockyRiver:{zh:"岩石河",en:"Rocky River",medianSec:1488,water:false},Gorge:{zh:"峡谷",en:"Gorge",medianSec:1397,water:false},Cliffside:{zh:"悬崖边",en:"Cliffside",medianSec:1321,water:false},HighView:{zh:"高地视野",en:"High View",medianSec:1437,water:false},Prairie:{zh:"草原",en:"Prairie",medianSec:1424,water:false},Confluence:{zh:"汇流",en:"Confluence",medianSec:1658,water:true},Socotra:{zh:"索科特拉",en:"Socotra",medianSec:1202,water:false},Baltic:{zh:"波罗的海",en:"Baltic",medianSec:1700,water:true},FourLakes:{zh:"四湖",en:"Four Lakes",medianSec:1497,water:true}
};

const strategyDefs = {
  feudal_pressure:{label:{zh:"封建压制（单TC）",en:"Feudal Pressure",ja:"封建圧"},mapBias:{fast:14,medium:5,slow:-8},allInResponse:10,tc2Penalty:10},
  fast_castle:{label:{zh:"快速城堡（稳防转质变）",en:"Fast Castle",ja:"高速城主"},mapBias:{fast:-4,medium:9,slow:8},allInResponse:-8,tc2Penalty:6},
  tc_boom:{label:{zh:"双TC经济",en:"2TC Boom",ja:"2TCブーム"},mapBias:{fast:-12,medium:4,slow:14},allInResponse:-16,tc2Penalty:-12},
  defensive_scale:{label:{zh:"防守运营到后期",en:"Defensive Scale",ja:"守備運営"},mapBias:{fast:-6,medium:6,slow:12},allInResponse:12,tc2Penalty:0},
  trade_boom:{label:{zh:"贸易与资源线扩张",en:"Trade Boom",ja:"交易ブーム"},mapBias:{fast:-10,medium:4,slow:11},allInResponse:-12,tc2Penalty:0}
};

const I18N = {
  zh:{pageTitle:"AoE4 最佳策略折线分析",heroTitle:"最佳策略折线分析",heroSubtitle:"自动推演从当前分钟到中期的最优节奏。",btnBack:"返回主模拟器",langLabel:"语言",notOpen:"不建议开",tempoFast:"快图",tempoMedium:"中速图",tempoSlow:"慢图",reason:"{civ} 在 {map}（{tempo}）下更适合走「{best}」。表里给出每个时间点 TC 和村民分工。",chartNote:"折线图主指标：{metric}。",mainLine:"推荐主线",tcMinute:"建议开 2TC 时间",endVill:"结束时农民",foodHintEarly:"优先羊/鹿（吃肉）",foodHintMid:"肉源转农田过渡",foodHintLate:"农田主供给",noteKey:"这一拍是关键经济拐点",noteRun:"按节奏执行",tableTitle:"时间点执行表",mistakeTitle:"错误示例与后果",mistakeBad:"错误示例",mistakeEffect:"后果"},
  en:{pageTitle:"AoE4 Best Strategy Analysis",heroTitle:"Best Strategy Analysis",heroSubtitle:"Auto-roll the best timeline from current minute to mid game.",btnBack:"Back to Main",langLabel:"Language",notOpen:"Not recommended",tempoFast:"fast map",tempoMedium:"medium map",tempoSlow:"slow map",reason:"{civ} on {map} ({tempo}) should prefer {best}. Table shows TC timing and worker split.",chartNote:"Main chart metric: {metric}.",mainLine:"Main Plan",tcMinute:"2TC timing",endVill:"Final villagers",foodHintEarly:"Sheep/Deer",foodHintMid:"Meat to farms",foodHintLate:"Farm economy",noteKey:"Key eco pivot",noteRun:"Follow rhythm",tableTitle:"Timeline Execution Table",mistakeTitle:"Mistake Examples & Consequences",mistakeBad:"Bad example",mistakeEffect:"Consequence"},
  ja:{pageTitle:"AoE4 最適戦略分析",heroTitle:"最適戦略分析",heroSubtitle:"現在分から中盤までの最適タイムラインを自動生成。",btnBack:"メインへ戻る",langLabel:"言語",notOpen:"非推奨",tempoFast:"速いマップ",tempoMedium:"中速マップ",tempoSlow:"遅いマップ",reason:"{map}（{tempo}）の {civ} は {best} が適性。表にTCと村民配分を表示。",chartNote:"主指標: {metric}",mainLine:"推奨主線",tcMinute:"2TCタイミング",endVill:"終了時農民",foodHintEarly:"羊/鹿",foodHintMid:"肉源から農場へ",foodHintLate:"農場主供給",noteKey:"経済の分岐点",noteRun:"この流れを維持",tableTitle:"時間別実行表",mistakeTitle:"ミス例と結果",mistakeBad:"ミス例",mistakeEffect:"結果"}
};

const elements = Object.fromEntries(["langSelect","bestCiv","bestMap","bestEnemyAllIn","bestCurrentMinute","bestEndMinute","bestStartVillagers","bestStartTc","bestChartMetric","bestPlanName","bestTcMinute","bestFinalVillagers","bestPlanReason","bestChartNote","bestPlanChart","bestPlanBody","bestMistakeExamples"].map(id=>[id,document.getElementById(id)]));
let currentLang = "zh";
function t(k,v={}){let s=(I18N[currentLang]||I18N.zh)[k]||I18N.zh[k]||k;Object.entries(v).forEach(([a,b])=>{s=s.replaceAll(`{${a}}`,String(b));});return s;}
function locale(){return currentLang==="en"?"en-US":currentLang==="ja"?"ja-JP":"zh-CN";}
function fmt(n,d=1){return Number(n).toLocaleString(locale(),{maximumFractionDigits:d});}
function civName(id){const c=civProfiles[id];if(!c)return id;return currentLang==="zh"?c.zh:c.en;}
function mapName(id){const m=mapProfiles[id];if(!m)return id;return currentLang==="zh"?m.zh:m.en;}
function tempoOf(mapId){const m=mapProfiles[mapId];if(!m)return"medium";if(m.medianSec<=1380)return"fast";if(m.medianSec<=1520)return"medium";return"slow";}
function tempoText(tp){return tp==="fast"?t("tempoFast"):tp==="slow"?t("tempoSlow"):t("tempoMedium");}
function applyStaticText(){
  const map={pageTitle:"pageTitle",heroTitle:"heroTitle",heroSubtitle:"heroSubtitle",btnBack:"btnBack",langLabel:"langLabel",kpiPlanLabel:"mainLine",kpiTcMinuteLabel:"tcMinute",kpiFinalVillagersLabel:"endVill",tableTitle:"tableTitle",mistakeTitle:"mistakeTitle"};
  Object.entries(map).forEach(([id,key])=>{const n=document.getElementById(id);if(n)n.textContent=t(key);});
  document.title=t("pageTitle");
  document.documentElement.lang=currentLang==="zh"?"zh-CN":currentLang;
}

function getMetricLabel(value){
  if(value==="incomePerMin")return currentLang==="zh"?"收入/分钟":currentLang==="ja"?"収入/分":"Income/min";
  if(value==="villagers")return currentLang==="zh"?"农民数":currentLang==="ja"?"農民":"Villagers";
  if(value==="armyPressure")return currentLang==="zh"?"兵力压力分":currentLang==="ja"?"兵力圧":"Army pressure";
  return currentLang==="zh"?"食物村民数":currentLang==="ja"?"食料村民":"Food villagers";
}

function refreshMetricOptions(){
  const labels={incomePerMin:getMetricLabel("incomePerMin"),villagers:getMetricLabel("villagers"),armyPressure:getMetricLabel("armyPressure"),foodVillagers:getMetricLabel("foodVillagers")};
  Array.from(elements.bestChartMetric.options).forEach(op=>{if(labels[op.value])op.textContent=labels[op.value];});
}

function populateSelects(){
  const civVal=elements.bestCiv.value||"japanese";
  const mapVal=elements.bestMap.value||"Cliffside";
  elements.bestCiv.innerHTML="";
  Object.entries(civProfiles).forEach(([id,civ])=>{const op=document.createElement("option");op.value=id;op.textContent=currentLang==="zh"?`${civ.zh} (${civ.en})`:`${civ.en} (${civ.zh})`;elements.bestCiv.append(op);});
  elements.bestMap.innerHTML="";
  Object.entries(mapProfiles).forEach(([id,map])=>{const op=document.createElement("option");op.value=id;op.textContent=currentLang==="zh"?`${map.zh} (${map.en})`:`${map.en} (${map.zh})`;elements.bestMap.append(op);});
  elements.bestCiv.value=civProfiles[civVal]?civVal:"japanese";
  elements.bestMap.value=mapProfiles[mapVal]?mapVal:"Cliffside";
  refreshMetricOptions();
}

function scoreStrategies(input){
  const civ=civProfiles[input.civId]||civProfiles.japanese;const tempo=tempoOf(input.mapId);
  const rows=Object.entries(strategyDefs).map(([id,def])=>{let score=50+def.mapBias[tempo]+(civ.bias[id]||0);if(input.enemyAllIn)score+=def.allInResponse;if(input.startTc>=2)score-=def.tc2Penalty;return{id,label:def.label[currentLang]||def.label.zh,score:Math.round(score)};});
  rows.sort((a,b)=>b.score-a.score);return rows;
}

function secondTcMinute(strategyId,input){if(input.startTc>=2)return null;const s=input.currentMinute;if(strategyId==="tc_boom")return input.enemyAllIn?s+6:s+2;if(strategyId==="defensive_scale")return input.enemyAllIn?s+8:s+4;if(strategyId==="fast_castle")return s+6;if(strategyId==="trade_boom")return s+6;if(strategyId==="feudal_pressure")return s+10;return null;}
function splitFor(strategyId,minute){if(strategyId==="feudal_pressure"){if(minute<10)return{food:0.46,wood:0.38,gold:0.14,stone:0.02};if(minute<14)return{food:0.42,wood:0.34,gold:0.2,stone:0.04};return{food:0.38,wood:0.3,gold:0.26,stone:0.06};}if(strategyId==="fast_castle"){if(minute<10)return{food:0.5,wood:0.24,gold:0.24,stone:0.02};if(minute<14)return{food:0.44,wood:0.2,gold:0.32,stone:0.04};return{food:0.38,wood:0.22,gold:0.34,stone:0.06};}if(strategyId==="tc_boom"){if(minute<10)return{food:0.44,wood:0.34,gold:0.14,stone:0.08};if(minute<14)return{food:0.4,wood:0.34,gold:0.18,stone:0.08};return{food:0.36,wood:0.3,gold:0.24,stone:0.1};}if(strategyId==="defensive_scale"){if(minute<10)return{food:0.42,wood:0.32,gold:0.2,stone:0.06};if(minute<14)return{food:0.38,wood:0.3,gold:0.24,stone:0.08};return{food:0.34,wood:0.28,gold:0.3,stone:0.08};}if(minute<10)return{food:0.36,wood:0.34,gold:0.24,stone:0.06};if(minute<14)return{food:0.32,wood:0.3,gold:0.3,stone:0.08};return{food:0.3,wood:0.28,gold:0.32,stone:0.1};}
function splitVillagers(total,split){const r={food:Math.round(total*split.food),wood:Math.round(total*split.wood),gold:Math.round(total*split.gold),stone:Math.round(total*split.stone)};const sum=r.food+r.wood+r.gold+r.stone;r.food+=total-sum;if(r.food<0)r.food=0;return r;}
function armyPressure(strategyId,minute){if(strategyId==="feudal_pressure")return minute<12?75:minute<16?66:62;if(strategyId==="fast_castle")return minute<12?44:minute<16?68:74;if(strategyId==="tc_boom")return minute<12?38:minute<16?54:66;if(strategyId==="defensive_scale")return minute<12?52:minute<16?63:72;return minute<12?46:minute<16?58:70;}
function actionText(strategyId,minute,tcMinute){if(tcMinute&&minute===tcMinute)return currentLang==="zh"?"补第二个 TC 并稳住防线":currentLang==="ja"?"2TCを追加して防衛維持":"Add second TC and hold defense";if(strategyId==="feudal_pressure")return minute<12?(currentLang==="zh"?"持续封建出兵压制":"Keep feudal pressure"):(currentLang==="zh"?"转反制兵种控图":"Switch counters and map control");if(strategyId==="fast_castle")return minute<12?(currentLang==="zh"?"攒食物黄金准备升本":"Stock food+gold for age-up"):(currentLang==="zh"?"城堡质量兵发力":"Castle unit power spike");if(strategyId==="tc_boom")return minute<12?(currentLang==="zh"?"保命小兵+补经济":"Minimal army + eco"):(currentLang==="zh"?"把经济差转为兵差":"Convert eco lead to army lead");if(strategyId==="defensive_scale")return minute<12?(currentLang==="zh"?"补塔点和防守兵线":"Fortify and defend"):(currentLang==="zh"?"守反一体推进":"Defend and counter-push");return minute<12?(currentLang==="zh"?"控商路和关键资源":"Secure trade route/resources"):(currentLang==="zh"?"贸易转高质量兵线":"Trade into quality army");}
function foodSource(minute){if(minute<10)return t("foodHintEarly");if(minute<14)return t("foodHintMid");return t("foodHintLate");}

function generatePlan(input,best){const points=[];const stepMin=2;let villagers=input.startVillagers;let tc=input.startTc;const tcMinute=secondTcMinute(best.id,input);for(let minute=input.currentMinute;minute<=input.endMinute;minute+=stepMin){if(tcMinute&&minute===tcMinute)tc=Math.max(tc,2);if(minute>input.currentMinute)villagers+=tc*VILLAGER_TRAIN_PER_MIN*stepMin;const split=splitFor(best.id,minute);const workers=splitVillagers(villagers,split);const income=workers.food*BASE_GATHER_RATE.food+workers.wood*BASE_GATHER_RATE.wood+workers.gold*BASE_GATHER_RATE.gold+workers.stone*BASE_GATHER_RATE.stone;points.push({minute,action:actionText(best.id,minute,tcMinute),tc,villagers,foodVillagers:workers.food,woodVillagers:workers.wood,goldVillagers:workers.gold,stoneVillagers:workers.stone,foodSource:foodSource(minute),incomePerMin:income,armyPressure:armyPressure(best.id,minute),note:tcMinute&&minute===tcMinute?t("noteKey"):t("noteRun")});}return {points,secondTcMinute:tcMinute};}

function drawChart(points,metric){const canvas=elements.bestPlanChart;const ctx=canvas.getContext("2d");if(!ctx||!points.length)return;const width=canvas.width,height=canvas.height,padLeft=56,padRight=24,padTop=20,padBottom=40,chartW=width-padLeft-padRight,chartH=height-padTop-padBottom;ctx.clearRect(0,0,width,height);ctx.fillStyle="#fff";ctx.fillRect(0,0,width,height);const lines=[{key:metric,color:"#1f6f78"},{key:"villagers",color:"#3d7a2a"},{key:"armyPressure",color:"#c96480"}];const max=Math.max(...points.flatMap(p=>lines.map(l=>Number(p[l.key]||0))),1);ctx.strokeStyle="#d7dfdd";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(padLeft,padTop);ctx.lineTo(padLeft,padTop+chartH);ctx.lineTo(padLeft+chartW,padTop+chartH);ctx.stroke();ctx.fillStyle="#60787d";ctx.font='12px "Noto Sans SC", sans-serif';ctx.textAlign="right";ctx.fillText("0",padLeft-8,padTop+chartH+4);ctx.fillText(fmt(max,0),padLeft-8,padTop+4);ctx.textAlign="center";points.forEach((p,i)=>{const x=padLeft+(i/Math.max(points.length-1,1))*chartW;ctx.fillText(`${p.minute}'`,x,height-12);});lines.forEach(line=>{ctx.strokeStyle=line.color;ctx.lineWidth=2.4;ctx.beginPath();points.forEach((p,i)=>{const x=padLeft+(i/Math.max(points.length-1,1))*chartW;const y=padTop+chartH-((Number(p[line.key])||0)/max)*chartH;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});ctx.stroke();});}

function renderTable(points){elements.bestPlanBody.innerHTML=points.map(p=>`<tr><td>${p.minute}:00</td><td>${p.action}</td><td>${p.tc}</td><td>${p.foodVillagers}（${p.foodSource}）</td><td>${p.woodVillagers}</td><td>${p.goldVillagers}</td><td>${p.stoneVillagers}</td><td>${fmt(p.incomePerMin,0)}</td><td>${fmt(p.armyPressure,0)}</td><td>${p.note}</td></tr>`).join("");}

function mistakeTemplates(){
  if(currentLang==="en"){
    return {
      tooEarlyTc:{bad:"Opening second TC too early on fast/all-in maps (before 10:00).",effect:"Army count dips, you can die to a ram timing push."},
      lowFood:{bad:"Too few food villagers before 10:00.",effect:"TC/unit production idles and age-up timing is delayed."},
      lowGold:{bad:"Gold workers stay too low after 12:00.",effect:"You cannot sustain high-gold units or core upgrades."},
      overStone:{bad:"Over-committing villagers to stone before key timings.",effect:"Wood/food get starved, slowing production and map control."},
      generic1:{bad:"Stacking greedy eco actions in one timing window.",effect:"Short-term military vacuum gives opponent a free attack window."},
      generic2:{bad:"No transition from eco lead into army lead around 12-16 min.",effect:"You float resources and lose initiative."}
    };
  }
  if(currentLang==="ja"){
    return {
      tooEarlyTc:{bad:"速いマップ/相手all-inで10分前に2TCを開く。",effect:"兵力が薄くなり、ラム押しで崩されやすい。"},
      lowFood:{bad:"10分前の食料村民が少なすぎる。",effect:"TCと出兵が止まり、進化タイミングが遅れる。"},
      lowGold:{bad:"12分以降も金村民が不足。",effect:"高金ユニットと主要アップグレードを維持できない。"},
      overStone:{bad:"重要時間前に石へ寄せすぎる。",effect:"木材/食料が不足し、生産とマップ支配が遅れる。"},
      generic1:{bad:"同じ時間帯に欲張り行動を重ねる。",effect:"一時的な兵力空白で攻め込まれる。"},
      generic2:{bad:"12-16分で経済優位を軍優位へ変換しない。",effect:"資源が余るだけで主導権を失う。"}
    };
  }
  return {
    tooEarlyTc:{bad:"快图或对手 all-in 时，10:00 前硬开第二个 TC。",effect:"前线兵量断档，容易被冲车或 timing 一波打穿。"},
    lowFood:{bad:"10:00 前食物村民比例过低。",effect:"TC 和出兵会断粮，升本和补兵都变慢。"},
    lowGold:{bad:"12:00 后黄金村民长期不足。",effect:"高金单位（骑士/弩手）和关键科技跟不上。"},
    overStone:{bad:"关键时间点前石头采集过重。",effect:"木材和食物被拖垮，建筑节奏和控图能力下降。"},
    generic1:{bad:"同一时间点叠加太多贪经济动作。",effect:"短时战力真空，给对手白送进攻窗口。"},
    generic2:{bad:"12-16 分钟不把经济优势转成兵力优势。",effect:"资源浮在仓库里，主动权会丢失。"}
  };
}

function buildMistakes(input,plan){
  const tpl=mistakeTemplates();
  const points=plan.points||[];
  const mistakes=[];
  const tempo=tempoOf(input.mapId);
  const early=points.find(p=>p.minute<=10)||points[0];
  const at12=points.find(p=>p.minute>=12)||points[points.length-1];
  const overStonePoint=points.find(p=>p.minute<=12&&p.stoneVillagers>Math.round(p.villagers*0.22));

  if(plan.secondTcMinute&&plan.secondTcMinute<=10&&(tempo==="fast"||input.enemyAllIn))mistakes.push(tpl.tooEarlyTc);
  if(early&&early.foodVillagers<Math.max(8,Math.round(early.villagers*0.3)))mistakes.push(tpl.lowFood);
  if(at12&&at12.goldVillagers<6)mistakes.push(tpl.lowGold);
  if(overStonePoint)mistakes.push(tpl.overStone);

  [tpl.generic1, tpl.generic2, tpl.lowFood].forEach(item => {
    if (mistakes.length < 3) mistakes.push(item);
  });
  return mistakes.slice(0,4);
}

function renderMistakes(input,plan){
  const mistakes=buildMistakes(input,plan);
  if(!elements.bestMistakeExamples)return;
  elements.bestMistakeExamples.innerHTML=mistakes.map(item=>`<li><span class="mistake-tag">${t("mistakeBad")}：</span>${item.bad}<br><span class="mistake-tag">${t("mistakeEffect")}：</span>${item.effect}</li>`).join("");
}

function readInput(){const currentMinute=Math.max(2,Math.min(18,Number(elements.bestCurrentMinute.value)||6));const endMinuteRaw=Math.max(10,Math.min(30,Number(elements.bestEndMinute.value)||20));const endMinute=endMinuteRaw<=currentMinute?currentMinute+4:endMinuteRaw;return {civId:elements.bestCiv.value,mapId:elements.bestMap.value,enemyAllIn:elements.bestEnemyAllIn.value==="yes",currentMinute,endMinute,startVillagers:Math.max(8,Number(elements.bestStartVillagers.value)||24),startTc:Math.max(1,Math.min(2,Number(elements.bestStartTc.value)||1))};}

function render(){const input=readInput();const ranked=scoreStrategies(input);const best=ranked[0];const plan=generatePlan(input,best);const points=plan.points;const metric=elements.bestChartMetric.value;elements.bestPlanName.textContent=best.label;elements.bestTcMinute.textContent=plan.secondTcMinute?`${plan.secondTcMinute}:00`:t("notOpen");elements.bestFinalVillagers.textContent=fmt(points[points.length-1]?.villagers||0,0);elements.bestPlanReason.textContent=t("reason",{civ:civName(input.civId),map:mapName(input.mapId),tempo:tempoText(tempoOf(input.mapId)),best:best.label});elements.bestChartNote.textContent=t("chartNote",{metric:getMetricLabel(metric)});drawChart(points,metric);renderTable(points);renderMistakes(input,plan);}

function applyLanguage(lang){currentLang=SUPPORTED_LANGS.includes(lang)?lang:"zh";try{localStorage.setItem(LANG_KEY,currentLang);}catch(e){}if(elements.langSelect)elements.langSelect.value=currentLang;applyStaticText();populateSelects();render();}
function bind(){["bestCiv","bestMap","bestEnemyAllIn","bestCurrentMinute","bestEndMinute","bestStartVillagers","bestStartTc","bestChartMetric"].forEach(k=>{elements[k].addEventListener("input",render);elements[k].addEventListener("change",render);});if(elements.langSelect)elements.langSelect.addEventListener("change",()=>applyLanguage(elements.langSelect.value));}

bind();
let initLang="zh";try{const s=localStorage.getItem(LANG_KEY);if(SUPPORTED_LANGS.includes(s))initLang=s;}catch(e){}
applyLanguage(initLang);
