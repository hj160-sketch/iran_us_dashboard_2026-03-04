
const LANG_KEY = "aoe4_lang";
const SITE_LANG_KEY = "lyralab_lang";
const SUPPORTED_LANGS = ["zh", "en", "ja"];
const TIME_POINTS = [4, 6, 8, 10, 12, 14, 16, 18, 20];

const UNIT_TYPES = {
  spearman: { label: { zh: "矛兵", en: "Spearman", ja: "槍兵" }, cost: { food: 60, wood: 20, gold: 0, stone: 0 }, power: 1.0 },
  archer: { label: { zh: "弓兵", en: "Archer", ja: "弓兵" }, cost: { food: 30, wood: 50, gold: 0, stone: 0 }, power: 1.0 },
  horseman: { label: { zh: "骑手", en: "Horseman", ja: "騎兵" }, cost: { food: 100, wood: 20, gold: 0, stone: 0 }, power: 1.4 },
  man_at_arms: { label: { zh: "长剑兵", en: "Man-at-Arms", ja: "メンアットアームズ" }, cost: { food: 100, wood: 0, gold: 20, stone: 0 }, power: 1.6 },
  knight: { label: { zh: "骑士", en: "Knight", ja: "騎士" }, cost: { food: 140, wood: 0, gold: 100, stone: 0 }, power: 2.6 },
  crossbow: { label: { zh: "弩手", en: "Crossbow", ja: "石弓兵" }, cost: { food: 40, wood: 0, gold: 80, stone: 0 }, power: 1.8 }
};

const ECON_BUILDINGS = {
  none: { label: { zh: "无", en: "None", ja: "なし" }, cost: { food: 0, wood: 0, gold: 0, stone: 0 }, bonus: { food: 0, wood: 0, gold: 0, stone: 0 } },
  mill: { label: { zh: "磨坊", en: "Mill", ja: "粉ひき所" }, cost: { food: 0, wood: 50, gold: 0, stone: 0 }, bonus: { food: 0.05, wood: 0, gold: 0, stone: 0 } },
  lumber_camp: { label: { zh: "伐木场", en: "Lumber Camp", ja: "伐採所" }, cost: { food: 0, wood: 100, gold: 0, stone: 0 }, bonus: { food: 0, wood: 0.08, gold: 0, stone: 0 } },
  mining_camp: { label: { zh: "采矿营地（金）", en: "Mining Camp (Gold)", ja: "採掘所（金）" }, cost: { food: 0, wood: 100, gold: 0, stone: 0 }, bonus: { food: 0, wood: 0, gold: 0.1, stone: 0 } },
  stone_camp: { label: { zh: "采石营地", en: "Mining Camp (Stone)", ja: "採掘所（石）" }, cost: { food: 0, wood: 100, gold: 0, stone: 0 }, bonus: { food: 0, wood: 0, gold: 0, stone: 0.1 } }
};

const BASE = {
  tcCost: { wood: 400, stone: 300 },
  villagerTrainPerMinute: 3,
  incomePerVillagerPerMinute: 39,
  split: { food: 0.42, wood: 0.33, gold: 0.2, stone: 0.05 }
};

const EASTERN_DLC_PRESETS = {
  story: { label: { zh: "剧情/入门", en: "Story/Entry", ja: "ストーリー" }, defenseRatio: 0.85, waves: [{ minute: 8, enemyPower: 10 }, { minute: 12, enemyPower: 16 }, { minute: 16, enemyPower: 24 }, { minute: 20, enemyPower: 34 }] },
  easy: { label: { zh: "简单", en: "Easy", ja: "簡単" }, defenseRatio: 0.95, waves: [{ minute: 8, enemyPower: 14 }, { minute: 10, enemyPower: 18 }, { minute: 12, enemyPower: 24 }, { minute: 16, enemyPower: 36 }, { minute: 20, enemyPower: 50 }] },
  normal: { label: { zh: "标准", en: "Normal", ja: "標準" }, defenseRatio: 1.05, waves: [{ minute: 8, enemyPower: 18 }, { minute: 10, enemyPower: 24 }, { minute: 12, enemyPower: 32 }, { minute: 14, enemyPower: 40 }, { minute: 16, enemyPower: 54 }, { minute: 18, enemyPower: 70 }, { minute: 20, enemyPower: 88 }] },
  hard: { label: { zh: "困难", en: "Hard", ja: "難しい" }, defenseRatio: 1.15, waves: [{ minute: 8, enemyPower: 22 }, { minute: 10, enemyPower: 30 }, { minute: 12, enemyPower: 42 }, { minute: 14, enemyPower: 56 }, { minute: 16, enemyPower: 74 }, { minute: 18, enemyPower: 94 }, { minute: 20, enemyPower: 118 }] },
  brutal: { label: { zh: "极难", en: "Brutal", ja: "極難" }, defenseRatio: 1.25, waves: [{ minute: 8, enemyPower: 28 }, { minute: 10, enemyPower: 38 }, { minute: 12, enemyPower: 52 }, { minute: 14, enemyPower: 70 }, { minute: 16, enemyPower: 92 }, { minute: 18, enemyPower: 118 }, { minute: 20, enemyPower: 146 }] }
};

const METRIC_CONFIG = {
  incomePerMin: { label: { zh: "每分钟总收入", en: "Income/min", ja: "収入/分" }, color: "#1f6f78" },
  villagers: { label: { zh: "农民数", en: "Villagers", ja: "農民" }, color: "#3d7a2a" },
  armyUnits: { label: { zh: "累计兵量", en: "Army units", ja: "兵量" }, color: "#d16b43" },
  armyPower: { label: { zh: "累计兵力评分", en: "Army power", ja: "兵力点" }, color: "#c96480" },
  totalBank: { label: { zh: "总资源库存", en: "Total bank", ja: "総資源" }, color: "#7f6d34" }
};

const I18N = {
  zh: { pageTitle: "AoE4 时间线折线图模拟器", heroTitle: "时间线折线图模拟器", heroSubtitle: "在 4-20 分钟逐点设置出兵、TC 和经济设施，实时看曲线与防守压力。", btnBack: "返回主模拟器", langLabel: "语言", waiting: "等待计算...", noNewTc: "无新 TC", noNewEcon: "无新经济设施", tcBuilt: "下了 1 个 TC（2 分钟后生效）", overspend: "资源透支", chartPrefix: "当前折线图", defended: "可守", deficit: "缺口", econHint: "兵力点数为训练模型，用于估算每波防守阈值。", advice1: "有 {n} 个时间点出现资源透支，优先减少同一时点叠加。", advice2: "20 分钟农民偏少，建议减少高成本兵点，保持 TC 连续运作。", advice3: "当前方案已覆盖该难度全部波次门槛。", advice4: "曲线比较平衡，可继续细调 8-14 分钟兵种组合。", totalsFood: "食物", totalsWood: "木材", totalsGold: "黄金", totalsStone: "石头" },
  en: { pageTitle: "AoE4 Timeline Simulator", heroTitle: "Timeline Simulator", heroSubtitle: "Set unit production, TC timing, and eco buildings from 4-20 min.", btnBack: "Back to Main", langLabel: "Language", waiting: "Waiting...", noNewTc: "No new TC", noNewEcon: "No new eco building", tcBuilt: "Built 1 TC (active after 2 min)", overspend: "Overspend", chartPrefix: "Current chart", defended: "Defendable", deficit: "Deficit", econHint: "Power points are model values for defense threshold estimation.", advice1: "{n} time points have overspend; reduce stacked actions.", advice2: "Villager count at 20 min is low; cut some expensive unit spikes.", advice3: "Current plan passes all wave thresholds for this difficulty.", advice4: "Curve is balanced; fine-tune 8-14 min composition.", totalsFood: "Food", totalsWood: "Wood", totalsGold: "Gold", totalsStone: "Stone" },
  ja: { pageTitle: "AoE4 タイムラインシミュレーター", heroTitle: "タイムラインシミュレーター", heroSubtitle: "4-20分で出兵・TC・経済施設を設定して推移を確認。", btnBack: "メインへ戻る", langLabel: "言語", waiting: "計算待ち...", noNewTc: "新TCなし", noNewEcon: "新経済施設なし", tcBuilt: "TCを1つ建設（2分後反映）", overspend: "資源不足", chartPrefix: "現在のグラフ", defended: "防衛可", deficit: "不足", econHint: "兵力点は防衛目安のためのモデル値です。", advice1: "資源不足の時間点が {n} 個あります。", advice2: "20分時点の農民が少ないです。", advice3: "この難易度の全波を満たしています。", advice4: "バランスは良好。8-14分を微調整してください。", totalsFood: "食料", totalsWood: "木材", totalsGold: "金", totalsStone: "石" }
};

const elements = Object.fromEntries(["langSelect","startVillagers","startTc","startFood","startWood","startGold","startStone","easternDifficulty","chartMetric","timelineBody","resetPlan","timelineChart","chartNote","finalVillagers","finalTc","finalArmyUnits","finalEconSummary","easternModelHint","easternWaveBody","finalDefendedWaves","maxPowerDeficit","criticalWaveMinute","finalBanks","timelineAdvice","timelineResultList"].map(id=>[id,document.getElementById(id)]));
let currentLang = "zh";
let plan = TIME_POINTS.map(() => ({ unitId: "spearman", unitCount: 0, buildTc: false, econId: "none", econCount: 0 }));

function t(k,v={}){let s=(I18N[currentLang]||I18N.zh)[k]||I18N.zh[k]||k;Object.entries(v).forEach(([a,b])=>{s=s.replaceAll(`{${a}}`,String(b));});return s;}
function locale(){return currentLang==="en"?"en-US":currentLang==="ja"?"ja-JP":"zh-CN";}
function fmt(n,d=1){return Number(n).toLocaleString(locale(),{maximumFractionDigits:d});}
function txt(obj){return obj?.[currentLang]||obj?.en||obj?.zh||"-";}
function clampInt(v,min,max,fb){const n=Number(v);if(!Number.isFinite(n))return fb;return Math.max(min,Math.min(max,Math.round(n)));}
function applyStaticText(){
  const map = { pageTitle:"pageTitle",heroTitle:"heroTitle",heroSubtitle:"heroSubtitle",btnBack:"btnBack",langLabel:"langLabel" };
  Object.entries(map).forEach(([id,key])=>{const n=document.getElementById(id);if(n)n.textContent=t(key);});
  document.title=t("pageTitle");
  document.documentElement.lang=currentLang==="zh"?"zh-CN":currentLang;
}

function refreshSelectOptionText(){
  Array.from(elements.easternDifficulty.options).forEach(op=>{const p=EASTERN_DLC_PRESETS[op.value];if(p)op.textContent=txt(p.label);});
  Array.from(elements.chartMetric.options).forEach(op=>{const m=METRIC_CONFIG[op.value];if(m)op.textContent=txt(m.label);});
}

function buildUnitOptions(){return Object.entries(UNIT_TYPES).map(([id,info])=>`<option value="${id}">${txt(info.label)}</option>`).join("");}
function buildEconOptions(){return Object.entries(ECON_BUILDINGS).map(([id,info])=>`<option value="${id}">${txt(info.label)}</option>`).join("");}

function createTimelineRows(){
  elements.timelineBody.innerHTML="";
  const unitOptions=buildUnitOptions();
  const econOptions=buildEconOptions();
  TIME_POINTS.forEach((minute,idx)=>{
    const tr=document.createElement("tr");
    tr.dataset.idx=String(idx);
    tr.innerHTML=`<td><span class="time-pill">${minute}:00</span></td><td><select data-field="unitId" aria-label="${minute} unit">${unitOptions}</select></td><td><input data-field="unitCount" type="number" min="0" max="80" step="1" value="0" aria-label="${minute} count"></td><td><input data-field="buildTc" type="checkbox" aria-label="${minute} tc"></td><td><select data-field="econId" aria-label="${minute} econ">${econOptions}</select></td><td><input data-field="econCount" type="number" min="0" max="5" step="1" value="0" aria-label="${minute} econ count"></td><td><span class="step-note" data-role="stepNote">${t("waiting")}</span></td>`;
    tr.querySelector('select[data-field="unitId"]').value=plan[idx].unitId;
    tr.querySelector('input[data-field="unitCount"]').value=String(plan[idx].unitCount);
    tr.querySelector('input[data-field="buildTc"]').checked=plan[idx].buildTc;
    tr.querySelector('select[data-field="econId"]').value=plan[idx].econId;
    tr.querySelector('input[data-field="econCount"]').value=String(plan[idx].econCount);
    tr.querySelectorAll("input,select").forEach(node=>{node.addEventListener("input",updatePlanFromDom);node.addEventListener("change",updatePlanFromDom);});
    elements.timelineBody.appendChild(tr);
  });
}

function updatePlanFromDom(){
  elements.timelineBody.querySelectorAll("tr").forEach((tr,idx)=>{
    plan[idx]={unitId:tr.querySelector('select[data-field="unitId"]').value,unitCount:clampInt(tr.querySelector('input[data-field="unitCount"]').value,0,80,0),buildTc:tr.querySelector('input[data-field="buildTc"]').checked,econId:tr.querySelector('select[data-field="econId"]').value,econCount:clampInt(tr.querySelector('input[data-field="econCount"]').value,0,5,0)};
  });
  render();
}

function readSetup(){
  return {villagers:clampInt(elements.startVillagers.value,10,200,22),tc:clampInt(elements.startTc.value,1,4,1),bank:{food:clampInt(elements.startFood.value,0,99999,150),wood:clampInt(elements.startWood.value,0,99999,200),gold:clampInt(elements.startGold.value,0,99999,100),stone:clampInt(elements.startStone.value,0,99999,100)}};
}

function subCost(bank,cost,count=1){bank.food-=(cost.food||0)*count;bank.wood-=(cost.wood||0)*count;bank.gold-=(cost.gold||0)*count;bank.stone-=(cost.stone||0)*count;}
function applyPlanCosts(bank,step){const unit=UNIT_TYPES[step.unitId]||UNIT_TYPES.spearman;subCost(bank,unit.cost,step.unitCount);if(step.buildTc)subCost(bank,BASE.tcCost,1);const econ=ECON_BUILDINGS[step.econId]||ECON_BUILDINGS.none;subCost(bank,econ.cost,step.econCount);return{unit,econ};}
function addEconBonus(active,econ,count){if(!econ||count<=0)return;active.food+=(econ.bonus.food||0)*count;active.wood+=(econ.bonus.wood||0)*count;active.gold+=(econ.bonus.gold||0)*count;active.stone+=(econ.bonus.stone||0)*count;}
function addIncome(bank,villagers,minutes,bonus){const total=villagers*BASE.incomePerVillagerPerMinute*minutes;bank.food+=total*BASE.split.food*(1+bonus.food);bank.wood+=total*BASE.split.wood*(1+bonus.wood);bank.gold+=total*BASE.split.gold*(1+bonus.gold);bank.stone+=total*BASE.split.stone*(1+bonus.stone);}
function cloneBonus(b){return {food:b.food,wood:b.wood,gold:b.gold,stone:b.stone};}

function simulate(){
  const setup=readSetup();let villagers=setup.villagers;let tc=setup.tc;let pendingTc=0;const bank={...setup.bank};const bonus={food:0,wood:0,gold:0,stone:0};const econBuilt={mill:0,lumber_camp:0,mining_camp:0,stone_camp:0};
  let armyUnits=0,armyPower=0,overspendSteps=0;const points=[];let prevMinute=TIME_POINTS[0];
  for(let i=0;i<TIME_POINTS.length;i+=1){const minute=TIME_POINTS[i];if(i>0){const delta=minute-prevMinute;if(pendingTc>0){tc+=pendingTc;pendingTc=0;}const startVill=villagers;villagers+=tc*BASE.villagerTrainPerMinute*delta;addIncome(bank,(startVill+villagers)/2,delta,bonus);}const step=plan[i]||{unitId:"spearman",unitCount:0,buildTc:false,econId:"none",econCount:0};const {unit,econ}=applyPlanCosts(bank,step);armyUnits+=step.unitCount;armyPower+=step.unitCount*unit.power;if(step.buildTc)pendingTc+=1;if(step.econId!=="none"&&step.econCount>0){addEconBonus(bonus,econ,step.econCount);if(Object.prototype.hasOwnProperty.call(econBuilt,step.econId))econBuilt[step.econId]+=step.econCount;}
    const negatives=Object.entries(bank).filter(([,v])=>v<0).map(([r])=>r);if(negatives.length>0)overspendSteps+=1;
    const incomePerMin=villagers*BASE.incomePerVillagerPerMinute*(BASE.split.food*(1+bonus.food)+BASE.split.wood*(1+bonus.wood)+BASE.split.gold*(1+bonus.gold)+BASE.split.stone*(1+bonus.stone));
    const tcText=step.buildTc?t("tcBuilt"):t("noNewTc");const econText=(step.econId==="none"||step.econCount===0)?t("noNewEcon"):`${txt(econ.label)} x${step.econCount}`;const note=negatives.length>0?`${t("overspend")}: ${negatives.join("/")} | ${econText}`:`${txt(unit.label)} x${step.unitCount} | ${tcText} | ${econText}`;
    points.push({minute,villagers,tc,armyUnits,armyPower,incomePerMin,totalBank:bank.food+bank.wood+bank.gold+bank.stone,bank:{...bank},activeBonus:cloneBonus(bonus),note});
    prevMinute=minute;
  }
  return {points,overspendSteps,econBuilt,finalBonus:cloneBonus(bonus)};
}

function computeThreat(sim){const preset=EASTERN_DLC_PRESETS[elements.easternDifficulty.value]||EASTERN_DLC_PRESETS.normal;const byMinute=new Map(sim.points.map(p=>[p.minute,p]));const checks=preset.waves.map(w=>{const own=byMinute.get(w.minute)?.armyPower||0;const req=Math.ceil(w.enemyPower*preset.defenseRatio);return {minute:w.minute,enemyPower:w.enemyPower,requiredPower:req,ownPower:own,gap:own-req};});const defended=checks.filter(i=>i.gap>=0).length;const worst=checks.reduce((a,b)=>b.gap<a.gap?b:a,checks[0]||{minute:"-",gap:0});return {preset,checks,defended,total:checks.length,worstGap:worst.gap,criticalMinute:worst.minute};}

function updateStepNotes(points,threat){const threatMap=new Map((threat?.checks||[]).map(i=>[i.minute,i]));elements.timelineBody.querySelectorAll("tr").forEach((tr,idx)=>{const n=tr.querySelector('[data-role="stepNote"]');if(!n)return;const p=points[idx];const w=p?threatMap.get(p.minute):null;const extra=w?` | enemy ${fmt(w.enemyPower,0)} / need ${fmt(w.requiredPower,0)}`:"";const text=`${p?.note||t("waiting")}${extra}`;n.textContent=text;n.classList.toggle("warn",text.includes(t("overspend"))||Boolean(w&&w.gap<0));});}

function drawChart(points,metric){const canvas=elements.timelineChart;const ctx=canvas.getContext("2d");if(!ctx)return;const width=canvas.width,height=canvas.height,padLeft=56,padRight=26,padTop=22,padBottom=40,chartW=width-padLeft-padRight,chartH=height-padTop-padBottom;ctx.clearRect(0,0,width,height);ctx.fillStyle="#fff";ctx.fillRect(0,0,width,height);if(!points.length)return;const conf=METRIC_CONFIG[metric]||METRIC_CONFIG.incomePerMin;const values=points.map(p=>Number(p[metric]));const max=Math.max(...values,1);ctx.strokeStyle="#d7dfdd";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(padLeft,padTop);ctx.lineTo(padLeft,padTop+chartH);ctx.lineTo(padLeft+chartW,padTop+chartH);ctx.stroke();ctx.fillStyle="#60787d";ctx.font='12px "Noto Sans SC", sans-serif';ctx.textAlign="right";ctx.fillText("0",padLeft-8,padTop+chartH+4);ctx.fillText(fmt(max,0),padLeft-8,padTop+4);ctx.textAlign="center";points.forEach((p,i)=>{const x=padLeft+(i/Math.max(points.length-1,1))*chartW;ctx.fillText(`${p.minute}'`,x,height-12);});ctx.strokeStyle=conf.color;ctx.lineWidth=3;ctx.beginPath();points.forEach((p,i)=>{const x=padLeft+(i/Math.max(points.length-1,1))*chartW;const y=padTop+chartH-(Number(p[metric])/max)*chartH;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});ctx.stroke();}

function renderThreat(threat){elements.easternWaveBody.innerHTML=threat.checks.map(item=>{const ok=item.gap>=0;return `<tr><td>${item.minute}:00</td><td>${fmt(item.enemyPower,0)}</td><td data-col="required">${fmt(item.requiredPower,0)}</td><td>${fmt(item.ownPower,0)}</td><td class="${ok?"threat-ok":"threat-risk"}">${ok?t("defended"):`${t("deficit")} ${fmt(Math.abs(item.gap),0)}`}</td></tr>`;}).join("");elements.easternModelHint.textContent=`${txt(threat.preset.label)}. ${t("econHint")}`;elements.finalDefendedWaves.textContent=`${threat.defended}/${threat.total}`;elements.maxPowerDeficit.textContent=threat.worstGap<0?fmt(Math.abs(threat.worstGap),0):"0";elements.criticalWaveMinute.textContent=threat.worstGap<0?`${threat.criticalMinute}:00`:"-";}

function renderSummary(sim,threat){const points=sim.points,last=points[points.length-1];if(!last)return;elements.finalVillagers.textContent=fmt(last.villagers,0);elements.finalTc.textContent=fmt(last.tc,0);elements.finalArmyUnits.textContent=fmt(last.armyUnits,0);elements.finalEconSummary.textContent=`F+${fmt(sim.finalBonus.food*100,0)}% W+${fmt(sim.finalBonus.wood*100,0)}% G+${fmt(sim.finalBonus.gold*100,0)}% S+${fmt(sim.finalBonus.stone*100,0)}%`;elements.finalBanks.innerHTML=`<div class="item"><span class="name">${t("totalsFood")}</span><span class="num">${fmt(last.bank.food,0)}</span></div><div class="item"><span class="name">${t("totalsWood")}</span><span class="num">${fmt(last.bank.wood,0)}</span></div><div class="item"><span class="name">${t("totalsGold")}</span><span class="num">${fmt(last.bank.gold,0)}</span></div><div class="item"><span class="name">${t("totalsStone")}</span><span class="num">${fmt(last.bank.stone,0)}</span></div>`;
  const metric=elements.chartMetric.value,metricLabel=txt(METRIC_CONFIG[metric]?.label||METRIC_CONFIG.incomePerMin.label),first=points[0][metric],delta=last[metric]-first;elements.chartNote.textContent=`${t("chartPrefix")}：${metricLabel}，${TIME_POINTS[0]}-${TIME_POINTS[TIME_POINTS.length-1]} 分钟变化 ${delta>=0?`+${fmt(delta,0)}`:fmt(delta,0)}。`;
  renderThreat(threat);
  const adv=[];if(sim.overspendSteps>0)adv.push(t("advice1",{n:sim.overspendSteps}));if(last.villagers<95)adv.push(t("advice2"));if(threat.defended===threat.total&&threat.total>0)adv.push(t("advice3"));if(adv.length===0)adv.push(t("advice4"));elements.timelineAdvice.innerHTML=adv.map(x=>`<li>${x}</li>`).join("");
  const keyPoints=points.filter((_,i)=>i%2===0||i===points.length-1);elements.timelineResultList.innerHTML=keyPoints.map(p=>`<div class="timeline-point"><strong>${p.minute}:00</strong><p>V ${fmt(p.villagers,0)} | TC ${fmt(p.tc,0)} | Army ${fmt(p.armyUnits,0)} | Inc ${fmt(p.incomePerMin,0)}/min</p><p>${p.note}</p></div>`).join("");
}

function render(){const sim=simulate();const threat=computeThreat(sim);const metric=elements.chartMetric.value;drawChart(sim.points,metric);updateStepNotes(sim.points,threat);renderSummary(sim,threat);}

function applyLanguage(lang){currentLang=SUPPORTED_LANGS.includes(lang)?lang:"zh";try{localStorage.setItem(LANG_KEY,currentLang);}catch(e){}try{localStorage.setItem(SITE_LANG_KEY,currentLang);}catch(e){}if(elements.langSelect)elements.langSelect.value=currentLang;applyStaticText();refreshSelectOptionText();createTimelineRows();render();}

function bind(){[elements.startVillagers,elements.startTc,elements.startFood,elements.startWood,elements.startGold,elements.startStone,elements.easternDifficulty,elements.chartMetric].forEach(node=>{node.addEventListener("input",render);node.addEventListener("change",render);});elements.resetPlan.addEventListener("click",()=>{plan=TIME_POINTS.map(()=>({unitId:"spearman",unitCount:0,buildTc:false,econId:"none",econCount:0}));createTimelineRows();render();});if(elements.langSelect)elements.langSelect.addEventListener("change",()=>applyLanguage(elements.langSelect.value));}

bind();
let initLang="zh";try{const urlLang=new URLSearchParams(window.location.search).get("lang");const s=localStorage.getItem(LANG_KEY);const site=localStorage.getItem(SITE_LANG_KEY);if(SUPPORTED_LANGS.includes(urlLang))initLang=urlLang;else if(SUPPORTED_LANGS.includes(s))initLang=s;else if(SUPPORTED_LANGS.includes(site))initLang=site;}catch(e){}
applyLanguage(initLang);
