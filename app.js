'use strict';

/* ---------------------------------------------------------------
 * 词库：全部硬编码，生成时只做随机抽取，没有任何自定义入口。
 * --------------------------------------------------------------- */

const WORDS = {
  // 心情
  moods: [
    '冷静', '狂喜', '忧郁', '暴躁', '温柔', '无聊', '困倦', '焦虑', '崩溃', '佛系',
    '中二', '亢奋', '平静', '绝望', '幸福', '呆滞', '嚣张', '社恐', '社牛', '优雅',
    '狼狈', '高贵', '沙雕', '睿智', '懵懂', '摆烂', '躺平', '暴富', '清醒', '犯困',
    '迷茫', '上头', '破防', '膨胀', '低调', '稳重', '火大', '心累', '假装镇定', '精神内耗',
    '生无可恋', '元气满满', '半死不活', '想退休', '刚睡醒', '饿了', '快乐', '委屈', '兴奋', '高冷',
  ],
  // 颜色（“色”字随机出现，例如 白 / 白色）
  colors: [
    '白', '黑', '红', '蓝', '绿', '黄', '紫', '粉', '灰', '青',
    '橙', '棕', '米', '金', '银', '天蓝', '藏蓝', '墨绿', '鹅黄', '藕粉',
    '香槟', '彩虹', '焦糖', '奶油', '薄荷', '咖啡', '透明', '荧光',
  ],
  // 物品
  items: [
    '键盘', '鼠标', '显示器', '台灯', '马克杯', '微波炉', '橡皮筋', '电风扇', '计算器', '订书机',
    '扫把', '拖鞋', '热水壶', '吹风机', '充电宝', '数据线', '优盘', '手表', '眼镜', '雨伞',
    '背包', '篮球', '吉他', '口琴', '泡面', '薯片', '奶茶', '咖啡机', '按摩仪', '泡脚桶',
    '折叠椅', '便利贴', '双面胶', '圆规', '三角板', '显微镜', '望远镜', '电饭煲', '空气炸锅', '筋膜枪',
    '跑步机', '麻将', '扑克牌', '沙漏', '保温杯', '手电筒', '收音机', '磁带', '游戏机', '手柄',
    '拍立得', '打印机', '投影仪', '扫地机器人', '吸尘器', '加湿器', '电蚊拍', '指甲刀', '卷尺', '螺丝刀',
    '扳手', '打火机', '饭盒', '假发', '领带', '袜子', '围巾', '帽子', '帐篷', '睡袋',
    '尤克里里', '哑铃', '瑜伽垫', '呼啦圈',
  ],
  // 不及物动作
  actions: [
    '狂笑', '傻笑', '偷笑', '爆哭', '抽泣', '叹气', '发呆', '打滚', '装死', '抽搐',
    '蹦迪', '摸鱼', '打盹', '哼歌', '转圈', '抽风', '咳嗽', '苏醒', '沉睡', '爬行',
    '游荡', '蛰伏', '蹲守', '发抖', '咆哮', '低语', '打嗝', '打哈欠', '伸懒腰', '说梦话',
    '梦游', '尖叫', '暴走', '翻白眼', '冷笑', '喘气', '奔跑', '静坐', '漂浮', '倒地',
    '呢喃', '蹦跳', '踮脚', '摇头', '放空', '发癫', '抖腿', '碎碎念', '蜷缩', '傻站',
  ],
  // 名词（主语用）
  nouns: [
    '蛇', '蛇将', '蟹将', '虾兵', '猫', '橘猫', '柯基', '企鹅', '章鱼', '熊猫',
    '乌龟', '兔子', '刺猬', '水獭', '水母', '蜗牛', '考拉', '鹦鹉', '卡皮巴拉', '龙',
    '独角兽', '幽灵', '吸血鬼', '机器人', '外星人', '程序员', '甲方', '老板', '班主任', '外卖员',
    '快递员', '退休大爷', '小学生', '健身教练', '产品经理', '主播', '诗人', '和尚', '乞丐', '社畜',
    '投资人', '电竞选手', '食堂阿姨', '出租车司机', '幼儿园园长', '保安大叔', '图书馆管理员', '邻座同事',
  ],
  // 及物动词
  verbs: [
    '写', '啃', '熬', '炖', '炒', '蒸', '烤', '腌', '画', '弹',
    '唱', '撕', '揉', '捏', '盘', '修', '吹', '翻译', '点评', '改进',
    '重写', '背诵', '默写', '手搓', '拆解', '打包', '投喂', '收藏', '解构', '赏析',
    '朗读', '推销', '安慰', '嘲笑', '烘焙', '组装', '格式化', '复盘', '催更', '温习',
    '整理', '抢救',
  ],
  // 名词（宾语用）
  objects: [
    '散文', '代码', '火锅', '八阿哥', '幻灯片', '周报', '相声', '三明治', '珍珠奶茶', '麻将',
    '古诗', '白开水', '五线谱', '十字绣', '螺丝', '毛线', '豆腐', '键盘', '年终奖', '情书',
    '检讨书', '策划案', '简历', '日报', '绩效考核', '泡面', '螺蛳粉', '可乐', '论文', '情诗',
    '武侠小说', '说明书', '大饼', '煎饼果子', '佛经', '儿歌', '广告词', '盲盒', '手办', '红头文件',
    '会议纪要', '彩虹屁', '冷笑话', '泡菜', '蛋糕', '表情包', '工作流',
  ],
};

/* ---------------------------------------------------------------
 * 两种格式。lit 是硬编码的连接词，key 指向词库，num 是 5~6 位数字，
 * suffix 表示后缀随机出现（例：白 / 白色）。
 * --------------------------------------------------------------- */

const FORMATS = {
  fury: {
    formula: ['心情', '的', '颜色', '物品', '5~6 位数字'],
    parts: [
      { label: '心情', key: 'moods', accent: 1 },
      { lit: '的' },
      { label: '颜色', key: 'colors', suffix: '色', accent: 2 },
      { label: '物品', key: 'items', accent: 3 },
      { label: '数字', num: true, accent: 4 },
    ],
  },
  act: {
    formula: ['不及物动作', '的', '名词', '及物动词', '名词'],
    parts: [
      { label: '不及物动作', key: 'actions', accent: 2 },
      { lit: '的' },
      { label: '名词', key: 'nouns', accent: 1 },
      { label: '及物动词', key: 'verbs', accent: 3 },
      { label: '名词', key: 'objects', accent: 4 },
    ],
  },
};

/* ---------------- 小工具 ---------------- */

const $ = (id) => document.getElementById(id);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function randomNumber() {
  const len = Math.random() < 0.5 ? 5 : 6;
  let out = String(randInt(1, 9));
  while (out.length < len) out += String(randInt(0, 9));
  return out;
}

/* ---------------- 生成 ---------------- */

function build(key) {
  const format = FORMATS[key];
  const segs = format.parts.map((part) => {
    if (part.lit) return { kind: 'lit', value: part.lit };
    if (part.num) return { kind: 'word', label: part.label, value: randomNumber(), accent: part.accent };
    const base = pick(WORDS[part.key]);
    const value = part.suffix && Math.random() < 0.5 ? base + part.suffix : base;
    return { kind: 'word', label: part.label, value, accent: part.accent };
  });
  return { key, id: segs.map((s) => s.value).join(''), segs };
}

/* ---------------- 状态 ---------------- */

const HISTORY_KEY = 'silly-id-history';
const THEME_KEY = 'silly-id-theme';

const state = {
  format: 'fury',   // fury | act | random
  shownFormat: 'fury',
  current: null,
  history: [],
  rolling: false,
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* 隐私模式下静默忽略 */ }
}

/* ---------------- 渲染 ---------------- */

const els = {
  resultText: $('resultText'),
  parts: $('parts'),
  charCount: $('charCount'),
  formula: $('formula'),
  history: $('history'),
  historyList: $('historyList'),
  toast: $('toast'),
  drawer: $('drawer'),
  scrim: $('scrim'),
};

function renderFormula(key) {
  const tokens = FORMATS[key].formula;
  els.formula.innerHTML = '';
  tokens.forEach((token, i) => {
    if (i > 0) {
      const sep = document.createElement('span');
      sep.className = 'sep';
      sep.textContent = '+';
      els.formula.append(sep);
    }
    const span = document.createElement('span');
    if (token === '的' || token === '将') { span.className = 'sep'; span.textContent = token; }
    else { const b = document.createElement('b'); b.textContent = token; span.append(b); }
    els.formula.append(span);
  });
}

function renderParts(result) {
  els.parts.innerHTML = '';
  result.segs.forEach((seg, i) => {
    if (seg.kind === 'lit') {
      const conn = document.createElement('span');
      conn.className = 'parts__conn';
      conn.textContent = seg.value;
      els.parts.append(conn);
      return;
    }
    const box = document.createElement('div');
    box.className = 'part';
    box.style.setProperty('--c', `var(--accent-${seg.accent})`);
    box.style.animationDelay = `${Math.min(i * 40, 200)}ms`;
    const label = document.createElement('span');
    label.className = 'part__label';
    label.textContent = seg.label;
    const value = document.createElement('span');
    value.className = 'part__value';
    value.textContent = seg.value;
    box.append(label, value);
    els.parts.append(box);
  });
}

function renderResult(result, { settle = true } = {}) {
  els.resultText.textContent = result.id;
  els.resultText.classList.remove('is-idle');
  els.charCount.textContent = `(${result.id.length})`;
  renderParts(result);
  if (settle && !reducedMotion) {
    els.resultText.classList.remove('is-settle');
    void els.resultText.offsetWidth;
    els.resultText.classList.add('is-settle');
  }
}

function pushHistory(result) {
  if (state.history[0] && state.history[0].id === result.id) return;
  state.history.unshift({ id: result.id, fmt: result.key, ts: Date.now() });
  state.history = state.history.slice(0, 15);
  saveJSON(HISTORY_KEY, state.history);
  renderHistory();
}

function timeLabel(ts) {
  const d = new Date(ts);
  const now = new Date();
  const hm = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  const sameDay = d.toDateString() === now.toDateString();
  const yesterday = new Date(now.getTime() - 86400000).toDateString() === d.toDateString();
  if (sameDay) return `今天 ${hm}`;
  if (yesterday) return `昨天 ${hm}`;
  return `${d.getMonth() + 1} 月 ${d.getDate()} 日 ${hm}`;
}

function renderHistory() {
  els.historyList.innerHTML = '';
  if (!state.history.length) {
    const li = document.createElement('li');
    li.className = 'history__empty';
    li.textContent = '还没有记录，摇一个试试。';
    els.historyList.append(li);
    return;
  }
  state.history.forEach((entry) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'history__item';
    btn.type = 'button';
    btn.title = '点击复制';
    const id = document.createElement('span');
    id.className = 'history__id';
    id.textContent = entry.id;
    const time = document.createElement('span');
    time.className = 'history__time';
    time.textContent = timeLabel(entry.ts);
    btn.append(id, time);
    btn.addEventListener('click', () => copyCurrent(entry.id));
    li.append(btn);
    els.historyList.append(li);
  });
}

/* ---------------- 生成流程 ---------------- */

function commit(result) {
  state.current = result;
  state.shownFormat = result.key;
  renderResult(result);
  renderFormula(result.key);
  pushHistory(result);
}

function roll({ animate = true } = {}) {
  if (state.rolling) return;
  const key = state.format === 'random' ? (Math.random() < 0.5 ? 'fury' : 'act') : state.format;
  const result = build(key);

  $('btnRoll').classList.remove('is-spinning');
  void $('btnRoll').offsetWidth;
  $('btnRoll').classList.add('is-spinning');

  if (!animate || reducedMotion) { commit(result); return; }

  state.rolling = true;
  els.resultText.classList.add('is-rolling');
  // 老虎机式收尾：间隔逐渐拉长，停在最终结果上
  const delays = [45, 45, 48, 56, 70, 92, 122, 160];
  let i = 0;
  const tick = () => {
    i += 1;
    if (i >= delays.length) {
      state.rolling = false;
      els.resultText.classList.remove('is-rolling');
      commit(result);
      return;
    }
    els.resultText.textContent = build(key).id;
    els.resultText.classList.remove('is-idle');
    window.setTimeout(tick, delays[i]);
  };
  window.setTimeout(tick, delays[0]);
}

/* ---------------- 复制 / 提示 ---------------- */

let toastTimer = null;
function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => els.toast.classList.remove('is-visible'), 1900);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch { /* 非安全上下文时退回 execCommand */ }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
  document.body.append(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch { ok = false; }
  ta.remove();
  return ok;
}

async function copyCurrent(id = state.current && state.current.id) {
  if (!id) { roll(); return; }
  const ok = await copyToClipboard(id);
  toast(ok ? `已复制：${id}` : '复制失败，手动选中吧');
}

/* ---------------- 主题 ---------------- */

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $('btnTheme').querySelector('use').setAttribute('href', theme === 'dark' ? '#i-moon' : '#i-sun');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#131314' : '#ffffff');
  $('btnTheme').setAttribute('aria-label', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
  saveJSON(THEME_KEY, theme);
}

/* ---------------- 抽屉 ---------------- */

let drawerTimer = null;
function openDrawer() {
  window.clearTimeout(drawerTimer);
  els.scrim.hidden = false;
  els.drawer.hidden = false;
  requestAnimationFrame(() => {
    els.drawer.classList.add('is-open');
    els.scrim.classList.add('is-open');
  });
  $('btnMenu').setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  els.drawer.classList.remove('is-open');
  els.scrim.classList.remove('is-open');
  $('btnMenu').setAttribute('aria-expanded', 'false');
  window.clearTimeout(drawerTimer);
  drawerTimer = window.setTimeout(() => {
    els.drawer.hidden = true;
    els.scrim.hidden = true;
  }, reducedMotion ? 0 : 300);
}

/* ---------------- 格式切换 ---------------- */

function setFormat(format, { reroll = true } = {}) {
  state.format = format;
  document.querySelectorAll('.chip[data-format]').forEach((chip) => {
    chip.classList.toggle('is-active', chip.dataset.format === format);
  });
  if (format !== 'random') renderFormula(format);
  else renderFormula(state.shownFormat);
  if (reroll) roll();
}

/* ---------------- 事件绑定 ---------------- */

document.querySelectorAll('.chip[data-format]').forEach((chip) => {
  chip.addEventListener('click', () => setFormat(chip.dataset.format));
});

document.querySelectorAll('.drawer__item[data-format]').forEach((item) => {
  item.addEventListener('click', () => {
    setFormat(item.dataset.format);
    closeDrawer();
  });
});

$('btnSwap').addEventListener('click', () => {
  setFormat(state.format === 'fury' ? 'act' : 'fury');
});

$('btnRoll').addEventListener('click', () => roll());
$('btnResult').addEventListener('click', () => roll());
$('btnCopy').addEventListener('click', () => copyCurrent());

/* 点 logo：小丑伸手捏自己的鼻子（动画类挂在 svg 上，CSS 选择器是 .clown.is-pinching） */
const clownBtn = $('clownLogo');
const clownSvg = clownBtn.querySelector('.clown');
let pinching = false;
clownBtn.addEventListener('click', () => {
  if (pinching) return;
  pinching = true;
  clownSvg.classList.add('is-pinching');
  window.setTimeout(() => clownSvg.classList.add('is-squeezing'), 340);
  window.setTimeout(() => clownSvg.classList.remove('is-squeezing'), 980);
  window.setTimeout(() => {
    clownSvg.classList.remove('is-pinching');
    pinching = false;
  }, 1250);
});

$('btnClearHistory').addEventListener('click', () => {
  state.history = [];
  saveJSON(HISTORY_KEY, state.history);
  renderHistory();
  toast('历史已清空');
});

$('btnTheme').addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

$('btnMenu').addEventListener('click', openDrawer);
$('btnDrawerClose').addEventListener('click', closeDrawer);
els.scrim.addEventListener('click', closeDrawer);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDrawer();
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  const typing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'A';
  if (((event.key === 'r' || event.key === 'R') || (event.key === ' ' && !typing)) && els.drawer.hidden) {
    event.preventDefault();
    roll();
  }
});

/* ---------------- 启动 ---------------- */

state.history = loadJSON(HISTORY_KEY, []);
applyTheme(loadJSON(THEME_KEY, 'dark') === 'light' ? 'light' : 'dark');
setFormat('fury', { reroll: false });
renderHistory();
roll({ animate: false });
