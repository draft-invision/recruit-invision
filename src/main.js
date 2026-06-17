// ===== CONSTANTS =====
const STAGES=['書類選考','一次面談','二次面談','適性検査','最終面談','内定','入社','不採用','辞退'];
const STAGE_K=['一次面談','二次面談','最終面談'];
const NG=['返事なし','基準外','辞退','ミスマッチ','不合格','お祈り','現れず'];
function excl(a){return[a.s1,a.s3,a.s4,a.s5].some(function(v){return NG.indexOf(v)>=0;});}
const SC={'書類選考':'p-bl','一次面談':'p-tl','二次面談':'p-gr','適性検査':'p-am','最終面談':'p-am','内定':'p-gr','入社':'p-gr','不採用':'p-rd','辞退':'p-gy'};
const SRC={'Wantedly':'p-wa','Indeed':'p-in','HRハッカー':'p-hr','エアワーク':'p-tl','その他':'p-gy'};
const RC={'A':'p-gr','B':'p-tl','C':'p-am','D':'p-rd'};
const NC={'合格':'p-gr','不合格':'p-rd','保留':'p-am','再面接':'p-bl'};
const JC={'選考通過':'p-gr','一旦保留':'p-am','お祈り':'p-rd','合格':'p-gr','不合格':'p-rd','保留':'p-am'};

// ===== STATE =====
let apps=[
  {id:1,no:1,name:'松井 海',age:28,src:'Wantedly',job:'CS',date:'2026-04-01',title:'',s1:'返事なし',s3:'',s4:'',s5:'',memo:'',stage:'最終面談'},
  {id:2,no:2,name:'内藤 大揮',age:26,src:'Wantedly',job:'CS',date:'2026-04-02',title:'',s1:'通過',s3:'先方判断',s4:'ミスマッチ',s5:'',memo:'',stage:'二次面談'},
  {id:3,no:3,name:'Rene Tanaka',age:25,src:'Wantedly',job:'CS',date:'2026-04-03',title:'',s1:'基準外',s3:'',s4:'',s5:'',memo:'',stage:'不採用'},
  {id:4,no:4,name:'武田 祐香',age:29,src:'Wantedly',job:'CS',date:'2026-04-11',title:'',s1:'返事なし',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:5,no:5,name:'新井 里菜',age:34,src:'Wantedly',job:'CS',date:'2026-04-12',title:'',s1:'基準外',s3:'',s4:'',s5:'',memo:'',stage:'不採用'},
  {id:6,no:6,name:'河本 裕太',age:21,src:'Wantedly',job:'セールス',date:'2026-04-11',title:'',s1:'返事なし',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:7,no:7,name:'大高 ソフィアアントイネット',age:26,src:'Indeed',job:'事務',date:'2026-04-06',title:'',s1:'返事なし',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:8,no:8,name:'半田 真彩',age:23,src:'HRハッカー',job:'セールス',date:'2026-04-15',title:'',s1:'返事なし',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:9,no:9,name:'三村 千遥',age:21,src:'Wantedly',job:'新卒',date:'2026-05-01',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:10,no:10,name:'鈴木 慶佳',age:26,src:'Wantedly',job:'CS',date:'2026-05-11',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'',stage:'不採用'},
  {id:11,no:11,name:'長崎 涼',age:28,src:'Wantedly',job:'CS',date:'2026-05-13',title:'',s1:'送信済み',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'',stage:'不採用'},
  {id:12,no:12,name:'坂元 万桜',age:22,src:'Wantedly',job:'新卒',date:'2026-05-13',title:'',s1:'送信済み',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:13,no:13,name:'吉田 周平',age:33,src:'Wantedly',job:'セールス',date:'2026-05-20',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:14,no:14,name:'戸倉 有紀',age:41,src:'Wantedly',job:'CS',date:'2026-05-21',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'不採用'},
  {id:15,no:15,name:'横山千春',age:37,src:'Wantedly',job:'CS',date:'2026-05-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'不採用'},
  {id:16,no:16,name:'佐藤 浩之',age:55,src:'Wantedly',job:'セールス',date:'2026-05-24',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'不採用'},
  {id:17,no:17,name:'忠平 萌々子',age:27,src:'Wantedly',job:'CS',date:'2026-05-25',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:18,no:18,name:'二宮 香織',age:39,src:'Wantedly',job:'CS',date:'2026-05-28',title:'',s1:'送信済み',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:19,no:19,name:'Tomoko Ozaki',age:44,src:'Wantedly',job:'CS',date:'2026-05-31',title:'',s1:'送信済み',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:20,no:20,name:'柏木 侑作',age:40,src:'Indeed',job:'CS',date:'2026-05-29',title:'',s1:'送信済み',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:21,no:21,name:'菅沼 京華',age:23,src:'Indeed',job:'CS',date:'2026-05-31',title:'',s1:'送信済み',s2:'',s3:'',s4:'',s5:'',memo:'',stage:'書類選考'},
  {id:100,no:190,name:'大谷 悠里',age:0,src:'Wantedly',job:'セールス',date:'2025-04-03',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:101,no:191,name:'島崎 智幸',age:0,src:'Wantedly',job:'セールス',date:'2025-04-04',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:102,no:192,name:'加賀 孝博',age:0,src:'Wantedly',job:'セールス',date:'2025-04-01',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:103,no:193,name:'金山 遼太郎',age:0,src:'Wantedly',job:'セールス',date:'2025-04-08',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:104,no:194,name:'松田 一樹',age:0,src:'YOUTRUST',job:'セールス',date:'2025-04-09',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:105,no:195,name:'三浦 健文',age:0,src:'Indeed',job:'セールス',date:'2025-04-10',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:106,no:196,name:'崎 来',age:0,src:'Wantedly',job:'セールス',date:'2025-04-11',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:107,no:197,name:'鈴木 裕也',age:0,src:'Wantedly',job:'セールス',date:'2025-04-14',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:108,no:198,name:'粕川 大輝',age:0,src:'Wantedly',job:'セールス',date:'2025-04-14',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:109,no:199,name:'高久 将平',age:0,src:'Wantedly',job:'CS',date:'2025-04-20',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:110,no:200,name:'Hiroshi Katayama',age:0,src:'Wantedly',job:'セールス',date:'2025-04-24',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:111,no:201,name:'下山 聡史',age:0,src:'Wantedly',job:'セールス',date:'2025-05-03',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:112,no:202,name:'萩原 夏希',age:0,src:'Wantedly',job:'新卒',date:'2025-05-06',title:'',s1:'通過',s2:'',s3:'辞退',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:113,no:203,name:'有田 凌大',age:0,src:'Wantedly',job:'新卒',date:'2025-05-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:114,no:204,name:'大竹 菜々子',age:0,src:'Wantedly',job:'ライター',date:'2025-05-09',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:115,no:205,name:'尾崎 真紀',age:0,src:'Wantedly',job:'セールス',date:'2025-05-11',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:116,no:206,name:'Masahiro Kawamura',age:0,src:'Wantedly',job:'エンジニア',date:'2025-05-11',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:117,no:207,name:'嘉数',age:0,src:'Wantedly',job:'ライター',date:'2025-05-13',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:118,no:208,name:'今野 雄介',age:0,src:'Wantedly',job:'セールス',date:'2025-05-13',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:119,no:209,name:'小谷野 稜平',age:0,src:'Wantedly',job:'ライター',date:'2025-05-18',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:120,no:210,name:'後藤 久美子',age:0,src:'Wantedly',job:'ライター',date:'2025-05-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:121,no:211,name:'合田 ヌイ',age:0,src:'Wantedly',job:'ライター',date:'2025-05-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:122,no:212,name:'堀越 滉平',age:0,src:'Wantedly',job:'ライター',date:'2025-05-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:123,no:213,name:'根本 与一',age:0,src:'Wantedly',job:'エンジニア',date:'2025-05-21',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:124,no:214,name:'荒井 隆一',age:0,src:'Wantedly',job:'ライター',date:'2025-05-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:125,no:215,name:'kimu ryu',age:0,src:'Wantedly',job:'ライター',date:'2025-05-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:126,no:216,name:'えんどう しょうご',age:0,src:'Wantedly',job:'ライター',date:'2025-05-23',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:127,no:217,name:'増田 綾乃',age:0,src:'Wantedly',job:'ライター',date:'2025-05-24',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:128,no:218,name:'Takara Nakagawa',age:0,src:'Wantedly',job:'エンジニア',date:'2025-05-25',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:129,no:219,name:'品川健太郎',age:0,src:'HRハッカー',job:'新卒',date:'2025-05-25',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:130,no:220,name:'高橋由哲',age:0,src:'HRハッカー',job:'セールス',date:'2025-05-26',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:131,no:221,name:'青木 航太',age:0,src:'Wantedly',job:'ライター',date:'2025-05-27',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:132,no:222,name:'鎌田 直人',age:0,src:'Wantedly',job:'ライター',date:'2025-05-28',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:133,no:223,name:'荒井 真吾',age:0,src:'Wantedly',job:'ライター',date:'2025-05-29',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:134,no:224,name:'鈴木 洋平',age:0,src:'Wantedly',job:'ライター',date:'2025-05-31',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:135,no:225,name:'小栗 彩佳',age:0,src:'Wantedly',job:'CS',date:'2025-06-01',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:136,no:226,name:'栗原 ともこ',age:0,src:'Wantedly',job:'ライター',date:'2025-06-02',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:137,no:227,name:'城山 叶恋',age:0,src:'Wantedly',job:'ライター',date:'2025-06-03',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:138,no:228,name:'丸山 風音',age:0,src:'Wantedly',job:'ライター',date:'2025-06-04',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:139,no:229,name:'濱田 祥太郎',age:0,src:'Wantedly',job:'ライター',date:'2025-06-04',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:140,no:230,name:'本田 亜弓',age:0,src:'Wantedly',job:'セールス',date:'2025-06-04',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:141,no:231,name:'シェリ ジュリアン',age:0,src:'Wantedly',job:'セールス',date:'2025-06-05',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:142,no:232,name:'石居 英二',age:0,src:'Indeed',job:'セールス',date:'2025-06-05',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:143,no:233,name:'佐藤 凌我',age:0,src:'Wantedly',job:'ライター',date:'2025-06-06',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:144,no:234,name:'奥野 秀幸',age:0,src:'Indeed',job:'セールス',date:'2025-06-09',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:145,no:235,name:'藤川 香織',age:0,src:'Wantedly',job:'CS',date:'2025-06-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:146,no:236,name:'林 遼河',age:0,src:'Wantedly',job:'CS',date:'2025-06-11',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:147,no:237,name:'畠山 美咲',age:0,src:'Wantedly',job:'ライター',date:'2025-06-11',title:'',s1:'通過',s2:'',s3:'返事なし',s4:'',s5:'',memo:'18期',stage:'一次面談'},
  {id:148,no:238,name:'岸 くるみ',age:0,src:'Wantedly',job:'新卒',date:'2025-06-14',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:149,no:239,name:'Takeshi Iwata',age:0,src:'Wantedly',job:'ライター',date:'2025-06-15',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:150,no:240,name:'八鍬 悟志',age:0,src:'Indeed',job:'CS',date:'2025-06-13',title:'',s1:'通過',s2:'',s3:'返事なし',s4:'',s5:'',memo:'18期',stage:'一次面談'},
  {id:151,no:241,name:'本田 江里',age:0,src:'Wantedly',job:'CS',date:'2025-06-19',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:152,no:242,name:'久郷 マサコ',age:0,src:'Wantedly',job:'ライター',date:'2025-06-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:153,no:243,name:'高橋 慶',age:0,src:'Indeed',job:'CS',date:'2025-06-23',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:154,no:244,name:'植松 賢二',age:0,src:'Indeed',job:'CS',date:'2025-06-23',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:155,no:245,name:'羽澤 綾乃',age:0,src:'Indeed',job:'CS',date:'2025-06-24',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:156,no:246,name:'内田 香帆',age:0,src:'エアワーク',job:'新卒',date:'2025-06-23',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:157,no:247,name:'安藤 由一真',age:0,src:'エアワーク',job:'新卒',date:'2025-06-25',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:158,no:248,name:'森内 愛実',age:0,src:'Wantedly',job:'ライター',date:'2025-06-25',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:159,no:249,name:'松井 映奈',age:0,src:'エアワーク',job:'新卒',date:'2025-06-27',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:160,no:250,name:'せた ともき',age:0,src:'Wantedly',job:'ライター',date:'2025-06-27',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:161,no:251,name:'古積 あすか',age:0,src:'Indeed',job:'CS',date:'2025-06-26',title:'',s1:'通過',s2:'',s3:'辞退',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:162,no:252,name:'浅野詞珠',age:0,src:'HRハッカー',job:'新卒',date:'2025-06-30',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'不合格',memo:'18期',stage:'不採用'},
  {id:163,no:253,name:'ジョン ハンギョル',age:0,src:'HRハッカー',job:'新卒',date:'2025-06-30',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:164,no:254,name:'阿部 瑞樹',age:0,src:'エアワーク',job:'新卒',date:'2025-07-01',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:165,no:255,name:'須田 知佳',age:0,src:'Indeed',job:'セールス',date:'2025-07-01',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:166,no:256,name:'nagata kanaho',age:0,src:'Wantedly',job:'ライター',date:'2025-07-01',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:167,no:257,name:'土屋舞里子',age:0,src:'HRハッカー',job:'新卒',date:'2025-07-01',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:168,no:258,name:'伊藤 定夫',age:0,src:'Indeed',job:'セールス',date:'2025-07-01',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:169,no:259,name:'小川 帆奈美',age:0,src:'Wantedly',job:'ライター',date:'2025-07-02',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:170,no:260,name:'中野 瑞希',age:0,src:'Wantedly',job:'CS',date:'2025-07-03',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:171,no:261,name:'卜部 奏音',age:0,src:'Wantedly',job:'ライター',date:'2025-07-03',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:172,no:262,name:'松本 史',age:0,src:'Wantedly',job:'ライター',date:'2025-07-06',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:173,no:263,name:'井口 英実',age:0,src:'HRハッカー',job:'新卒',date:'2025-07-07',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:174,no:264,name:'小島 昭',age:0,src:'Wantedly',job:'ライター',date:'2025-07-09',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:175,no:265,name:'大信 英次',age:0,src:'Indeed',job:'CS',date:'2025-07-13',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:176,no:266,name:'中尾 一貴',age:0,src:'Indeed',job:'セールス',date:'2025-07-11',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:177,no:267,name:'小高 純男',age:0,src:'Indeed',job:'CS',date:'2025-07-14',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:178,no:268,name:'藤田 健登',age:0,src:'Indeed',job:'セールス',date:'2025-07-15',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:179,no:269,name:'津村 宗志',age:0,src:'Wantedly',job:'CS',date:'2025-07-16',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:180,no:270,name:'植松 賢二',age:0,src:'Indeed',job:'セールス',date:'2025-07-16',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:181,no:271,name:'黒澤 宏之',age:0,src:'Indeed',job:'CS',date:'2025-07-15',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:182,no:272,name:'山野 圭二',age:0,src:'Indeed',job:'セールス',date:'2025-07-15',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:183,no:273,name:'金岡 晃佑',age:0,src:'Wantedly',job:'新卒',date:'2025-07-15',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:184,no:274,name:'中尾 一貴',age:0,src:'Indeed',job:'セールス',date:'2025-07-19',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:185,no:275,name:'大園 玲子',age:0,src:'Indeed',job:'CS',date:'2025-07-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:186,no:276,name:'海野 直也',age:0,src:'Indeed',job:'CS',date:'2025-07-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:187,no:277,name:'Y.S様',age:0,src:'その他',job:'CS',date:'2025-07-07',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:188,no:278,name:'K.R様',age:0,src:'その他',job:'セールス',date:'2025-07-16',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:189,no:279,name:'冨山 大暉',age:0,src:'Indeed',job:'セールス',date:'2025-07-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:190,no:280,name:'加藤 健太郎',age:0,src:'Indeed',job:'セールス',date:'2025-07-23',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:191,no:281,name:'中川 佑一',age:0,src:'Indeed',job:'セールス',date:'2025-07-23',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:192,no:282,name:'宮下 絵理',age:0,src:'Indeed',job:'CS',date:'2025-07-23',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:193,no:283,name:'谷川 博美',age:0,src:'Wantedly',job:'ライター',date:'2025-07-22',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:194,no:284,name:'久保 綾香',age:0,src:'Wantedly',job:'CS',date:'2025-07-22',title:'',s1:'通過',s2:'',s3:'返事なし',s4:'',s5:'',memo:'18期',stage:'一次面談'},
  {id:195,no:285,name:'尾田 ニコ',age:0,src:'Wantedly',job:'ライター',date:'2025-07-24',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:196,no:286,name:'大信 英次',age:0,src:'Wantedly',job:'セールス',date:'2025-07-24',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:197,no:287,name:'土居智葉',age:0,src:'HRハッカー',job:'新卒',date:'2025-07-24',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:198,no:288,name:'福永 将秀',age:0,src:'Indeed',job:'セールス',date:'2025-07-25',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:199,no:289,name:'細野 幸一',age:0,src:'Indeed',job:'セールス',date:'2025-07-26',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:200,no:290,name:'池田遥',age:0,src:'HRハッカー',job:'新卒',date:'2025-07-26',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:201,no:291,name:'川島 誠',age:0,src:'Indeed',job:'セールス',date:'2025-07-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:202,no:292,name:'黒井 正行',age:0,src:'Indeed',job:'セールス',date:'2025-07-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:203,no:293,name:'千葉 洋志',age:0,src:'Indeed',job:'セールス',date:'2025-07-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:204,no:294,name:'黒木 敬士',age:0,src:'Indeed',job:'セールス',date:'2025-07-30',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:205,no:295,name:'森本 馨',age:0,src:'Indeed',job:'セールス',date:'2025-07-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:206,no:296,name:'伊藤 定夫',age:0,src:'Indeed',job:'セールス',date:'2025-07-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:207,no:297,name:'小山 雅章',age:0,src:'Indeed',job:'セールス',date:'2025-07-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:208,no:298,name:'浅井 浩美',age:0,src:'Indeed',job:'セールス',date:'2025-07-31',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:209,no:299,name:'吉田風花',age:0,src:'HRハッカー',job:'新卒',date:'2025-07-31',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:210,no:300,name:'小谷野 竣',age:0,src:'Wantedly',job:'新卒',date:'2025-08-03',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:211,no:301,name:'大信 英次',age:0,src:'Indeed',job:'セールス',date:'2025-08-03',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:212,no:302,name:'中島 健介',age:0,src:'Indeed',job:'セールス',date:'2025-08-03',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:213,no:303,name:'千葉 洋志',age:0,src:'Indeed',job:'セールス',date:'2025-08-02',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:214,no:304,name:'中島 珠希',age:0,src:'Indeed',job:'セールス',date:'2025-08-05',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:215,no:305,name:'大西 洋輝',age:0,src:'Wantedly',job:'CS',date:'2025-08-05',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:216,no:306,name:'神戸 亜莉沙',age:0,src:'Indeed',job:'新卒',date:'2025-08-09',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:217,no:307,name:'松岡 晶',age:0,src:'Indeed',job:'CS',date:'2025-08-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:218,no:308,name:'内屋敷 浩一',age:0,src:'Indeed',job:'セールス',date:'2025-08-10',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:219,no:309,name:'浅田愛美',age:0,src:'Indeed',job:'新卒',date:'2025-08-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:220,no:310,name:'原 浩二',age:0,src:'Indeed',job:'セールス',date:'2025-08-13',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:221,no:311,name:'斎 しん',age:0,src:'Indeed',job:'CS',date:'2025-08-13',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:222,no:312,name:'斎藤公也',age:0,src:'Wantedly',job:'CS',date:'2025-08-14',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:223,no:313,name:'恒松 奈於',age:0,src:'Wantedly',job:'CS',date:'2025-08-14',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:224,no:314,name:'芳野 祐子',age:0,src:'Indeed',job:'セールス',date:'2025-08-17',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:225,no:315,name:'渡部公希',age:0,src:'HRハッカー',job:'新卒',date:'2025-08-18',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:226,no:316,name:'戸田 修',age:0,src:'Indeed',job:'セールス',date:'2025-08-18',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:227,no:317,name:'加藤 真奈',age:0,src:'Indeed',job:'CS',date:'2025-08-19',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:228,no:318,name:'小森 篤',age:0,src:'Indeed',job:'セールス',date:'2025-08-18',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:229,no:319,name:'畑中 郁人',age:0,src:'Indeed',job:'セールス',date:'2025-08-21',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:230,no:320,name:'尾上 陽采',age:0,src:'Indeed',job:'セールス',date:'2025-08-19',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:231,no:321,name:'軽部 三重子',age:0,src:'Wantedly',job:'CS',date:'2025-08-19',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:232,no:322,name:'亀井 君典',age:0,src:'Wantedly',job:'CS',date:'2025-08-20',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:233,no:323,name:'山田 雅子',age:0,src:'Wantedly',job:'セールス',date:'2025-08-22',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:234,no:324,name:'山元智尋',age:0,src:'HRハッカー',job:'セールス',date:'2025-08-24',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'辞退',s5:'',memo:'18期',stage:'不採用'},
  {id:235,no:325,name:'横堀 邦尚',age:0,src:'Indeed',job:'CS',date:'2025-08-25',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:236,no:326,name:'中井 彩乃',age:0,src:'Indeed',job:'セールス',date:'2025-08-27',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:237,no:327,name:'中村 洋一',age:0,src:'Indeed',job:'セールス',date:'2025-08-27',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:238,no:328,name:'岩本 樹',age:0,src:'Indeed',job:'CS',date:'2025-08-27',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:239,no:329,name:'加藤 大心',age:0,src:'Indeed',job:'セールス',date:'2025-08-28',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:240,no:330,name:'井上 みつき',age:0,src:'Wantedly',job:'CS',date:'2025-08-28',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:241,no:331,name:'高橋 良斗',age:0,src:'Indeed',job:'CS',date:'2025-08-29',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:242,no:332,name:'植松 賢二',age:0,src:'Indeed',job:'セールス',date:'2025-08-31',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:243,no:333,name:'工藤 和孝',age:0,src:'Indeed',job:'セールス',date:'2025-09-01',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:244,no:334,name:'神田 里佳子',age:0,src:'Wantedly',job:'CS',date:'2025-09-02',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:245,no:335,name:'高枝 まりん',age:0,src:'Wantedly',job:'事務',date:'2025-09-01',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:246,no:336,name:'和田さん',age:0,src:'その他',job:'ライター',date:'2025-08-08',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:247,no:337,name:'伊藤 風太',age:0,src:'Wantedly',job:'CS',date:'2025-09-03',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:248,no:338,name:'千葉 滉介',age:0,src:'Indeed',job:'セールス',date:'2025-09-04',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:249,no:339,name:'今井 広大郎',age:0,src:'Indeed',job:'新卒',date:'2025-09-04',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:250,no:340,name:'桜井 一毅',age:0,src:'Wantedly',job:'CS',date:'2025-09-04',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:251,no:341,name:'公文 悠貴',age:0,src:'Indeed',job:'セールス',date:'2025-09-06',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:252,no:342,name:'富樫 俊介',age:0,src:'Wantedly',job:'CS',date:'2025-09-06',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:253,no:343,name:'大川 航平',age:0,src:'Wantedly',job:'CS',date:'2025-09-06',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:254,no:344,name:'迫田 朱理',age:0,src:'Wantedly',job:'CS',date:'2025-09-07',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:255,no:345,name:'豊嶋 柊人',age:0,src:'Indeed',job:'CS',date:'2025-09-07',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:256,no:346,name:'河辺 萌花',age:0,src:'Indeed',job:'新卒',date:'2025-09-09',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:257,no:347,name:'竹中 純平',age:0,src:'Wantedly',job:'CS',date:'2025-09-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:258,no:348,name:'山口 帆乃夏',age:0,src:'Wantedly',job:'CS',date:'2025-09-10',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:259,no:349,name:'佐藤咲稀',age:0,src:'Indeed',job:'CS',date:'2025-09-10',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:260,no:350,name:'Oberhellman Ian',age:0,src:'Indeed',job:'新卒',date:'2025-09-10',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:261,no:351,name:'勝部 浩明',age:0,src:'Indeed',job:'セールス',date:'2025-09-09',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:262,no:352,name:'松隈 早希',age:0,src:'Indeed',job:'CS',date:'2025-09-11',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:263,no:353,name:'西優月',age:0,src:'HRハッカー',job:'新卒',date:'2025-09-11',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:264,no:354,name:'原田 秀馬',age:0,src:'Indeed',job:'CS',date:'2025-09-12',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:265,no:355,name:'本嶋 一輝',age:0,src:'Indeed',job:'セールス',date:'2025-09-16',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:266,no:356,name:'山本一誓',age:0,src:'HRハッカー',job:'新卒',date:'2025-09-16',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:267,no:357,name:'羽太 雅年',age:0,src:'Indeed',job:'セールス',date:'2025-09-17',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:268,no:358,name:'根岸優菜',age:0,src:'Offerbox',job:'新卒',date:'2025-09-17',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:269,no:359,name:'金東煥',age:0,src:'Offerbox',job:'新卒',date:'2025-09-17',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:270,no:360,name:'鷹取 心',age:0,src:'Indeed',job:'CS',date:'2025-09-17',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:271,no:361,name:'仁田 琢也',age:0,src:'Indeed',job:'セールス',date:'2025-09-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:272,no:362,name:'大平 拓哉',age:0,src:'Wantedly',job:'CS',date:'2025-09-19',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:273,no:363,name:'小野澤 猛',age:0,src:'Indeed',job:'セールス',date:'2025-09-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:274,no:364,name:'伊藤 夏希',age:0,src:'Wantedly',job:'CS',date:'2025-09-24',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:275,no:365,name:'早野絵梨佳',age:0,src:'Offerbox',job:'新卒',date:'2025-09-23',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:276,no:366,name:'小栗 拓也',age:0,src:'Indeed',job:'セールス',date:'2025-09-30',title:'',s1:'通過',s2:'',s3:'返事なし',s4:'',s5:'',memo:'18期',stage:'一次面談'},
  {id:277,no:367,name:'定方 俊',age:0,src:'Indeed',job:'事務',date:'2025-10-01',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:278,no:368,name:'小山 笑璃',age:0,src:'Indeed',job:'新卒',date:'2025-10-01',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:279,no:369,name:'河崎 崇磨',age:0,src:'エアワーク',job:'セールス',date:'2025-10-01',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:280,no:370,name:'成田 幸穂',age:0,src:'エアワーク',job:'事務',date:'2025-10-02',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:281,no:371,name:'林 美空',age:0,src:'エアワーク',job:'事務',date:'2025-10-03',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:282,no:372,name:'鎌田 みなみ',age:0,src:'エアワーク',job:'事務',date:'2025-10-05',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:283,no:373,name:'木村 優奈',age:0,src:'エアワーク',job:'事務',date:'2025-10-05',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:284,no:374,name:'中山 志乃',age:0,src:'その他',job:'事務',date:'2025-10-05',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:285,no:375,name:'原 大空翔',age:0,src:'エアワーク',job:'事務',date:'2025-10-08',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:286,no:376,name:'佐藤 敦子',age:0,src:'エアワーク',job:'事務',date:'2025-10-08',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:287,no:377,name:'武田 和美',age:0,src:'エアワーク',job:'事務',date:'2025-10-08',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:288,no:378,name:'曺 俊錫',age:0,src:'エアワーク',job:'事務',date:'2025-10-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:289,no:379,name:'益嶋 由紀子',age:0,src:'エアワーク',job:'セールス',date:'2025-10-13',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:290,no:380,name:'大田 浩',age:0,src:'エアワーク',job:'事務',date:'2025-10-16',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:291,no:381,name:'橋本 聰',age:0,src:'エアワーク',job:'CS',date:'2025-10-17',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:292,no:382,name:'宮下 絵理',age:0,src:'エアワーク',job:'CS',date:'2025-10-18',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:293,no:383,name:'小谷野 稜平',age:0,src:'Wantedly',job:'CS',date:'2025-10-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:294,no:384,name:'竹中 純平',age:0,src:'Wantedly',job:'ライター',date:'2025-10-18',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:295,no:385,name:'関谷 啓介',age:0,src:'エアワーク',job:'CS',date:'2025-10-20',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:296,no:386,name:'渡邊 晴久',age:0,src:'エアワーク',job:'事務',date:'2025-10-20',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:297,no:387,name:'水落 こうき',age:0,src:'Wantedly',job:'事務',date:'2025-10-21',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:298,no:388,name:'相澤 真嬉',age:0,src:'エアワーク',job:'CS',date:'2025-10-22',title:'',s1:'通過',s2:'',s3:'返事なし',s4:'',s5:'',memo:'18期',stage:'一次面談'},
  {id:299,no:389,name:'佐藤 詩織',age:0,src:'エアワーク',job:'CS',date:'2025-10-22',title:'',s1:'通過',s2:'',s3:'返事なし',s4:'',s5:'',memo:'18期',stage:'一次面談'},
  {id:300,no:390,name:'山口 由馬',age:0,src:'エアワーク',job:'CS',date:'2025-10-23',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:301,no:392,name:'ANJU NAGAI',age:0,src:'Wantedly',job:'新卒',date:'2025-10-22',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:302,no:393,name:'坂口 天斗',age:0,src:'エアワーク',job:'CS',date:'2025-10-23',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:303,no:394,name:'長谷川あゆみ',age:0,src:'エアワーク',job:'CS',date:'2025-10-24',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:304,no:395,name:'岸 明日翔',age:0,src:'エアワーク',job:'新卒',date:'2025-10-26',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:305,no:396,name:'正木聡一郎',age:0,src:'Infra',job:'新卒',date:'2025-10-26',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:306,no:397,name:'清水小太郎',age:0,src:'Infra',job:'新卒',date:'2025-10-27',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:307,no:398,name:'喜多 雅明',age:0,src:'エアワーク',job:'CS',date:'2025-10-27',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:308,no:399,name:'北村 和孝',age:0,src:'エアワーク',job:'CS',date:'2025-10-27',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:309,no:400,name:'一木 昭克',age:0,src:'エアワーク',job:'CS',date:'2025-10-28',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:310,no:401,name:'樋口万里花',age:0,src:'Offerbox',job:'新卒',date:'2025-10-29',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:311,no:402,name:'橋本沙紀',age:0,src:'Infra',job:'新卒',date:'2025-10-29',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'ミスマッチ',s5:'',memo:'18期',stage:'不採用'},
  {id:312,no:403,name:'石井 ジョゼ',age:0,src:'Wantedly',job:'ライター',date:'2025-10-30',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:313,no:404,name:'Nana Iwamoto',age:0,src:'Wantedly',job:'CS',date:'2025-10-31',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:314,no:405,name:'赤穂莉子',age:0,src:'HRハッカー',job:'新卒',date:'2025-10-31',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:315,no:406,name:'渡邊 宗一',age:0,src:'Wantedly',job:'CS',date:'2025-11-02',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:316,no:407,name:'内田 雄介',age:0,src:'エアワーク',job:'CS',date:'2025-11-03',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:317,no:408,name:'渡邊 宗一',age:0,src:'Wantedly',job:'CS',date:'2025-11-02',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:318,no:409,name:'中村茉広',age:0,src:'Offerbox',job:'新卒',date:'2025-11-04',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:319,no:410,name:'保科 優花',age:0,src:'Indeed',job:'CS',date:'2025-11-04',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:320,no:411,name:'牛久保 巧輝',age:0,src:'Wantedly',job:'新卒',date:'2025-11-05',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:321,no:412,name:'牧野 佐千子',age:0,src:'Wantedly',job:'ライター',date:'2025-11-05',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:322,no:413,name:'若林琉青',age:0,src:'Infra',job:'新卒',date:'2025-11-05',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'ミスマッチ',s5:'不合格',memo:'18期',stage:'不採用'},
  {id:323,no:414,name:'二宮結',age:0,src:'Infra',job:'新卒',date:'2025-11-07',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:324,no:415,name:'日塔真桜',age:0,src:'Infra',job:'新卒',date:'2025-11-07',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:325,no:416,name:'土井栄輝',age:0,src:'Infra',job:'新卒',date:'2025-11-08',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:326,no:417,name:'キョウ ホウセツ',age:0,src:'エアワーク',job:'新卒',date:'2025-11-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:327,no:418,name:'秋山 弘征',age:0,src:'Wantedly',job:'ライター',date:'2025-11-11',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:328,no:419,name:'高橋 慶',age:0,src:'Indeed',job:'事務',date:'2025-11-11',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:329,no:420,name:'馬場 楓',age:0,src:'Wantedly',job:'新卒',date:'2025-11-14',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:330,no:421,name:'関 真理子',age:0,src:'Wantedly',job:'ライター',date:'2025-11-17',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:331,no:422,name:'吉田 一貴',age:0,src:'Wantedly',job:'事務',date:'2025-11-18',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:332,no:423,name:'高谷春菜',age:0,src:'Wantedly',job:'新卒',date:'2025-11-18',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:333,no:424,name:'前田 真子',age:0,src:'Infra',job:'新卒',date:'2025-11-18',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:334,no:426,name:'重南帆希',age:0,src:'Infra',job:'新卒',date:'2025-11-18',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:335,no:427,name:'島田朔太郎',age:0,src:'Infra',job:'新卒',date:'2025-11-18',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:336,no:428,name:'長谷川太郎',age:0,src:'Offerbox',job:'新卒',date:'2025-11-20',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:337,no:429,name:'前野 翔大',age:0,src:'Indeed',job:'事務',date:'2025-11-20',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:338,no:430,name:'坂本 楓美',age:0,src:'Indeed',job:'セールス',date:'2025-11-21',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:339,no:431,name:'増田 綾乃',age:0,src:'Wantedly',job:'CS',date:'2025-11-22',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:340,no:432,name:'横塚迦憐',age:0,src:'Infra',job:'新卒',date:'2025-11-22',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:341,no:433,name:'高橋力',age:0,src:'Indeed',job:'セールス',date:'2025-11-23',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:342,no:434,name:'橋本 遼',age:0,src:'Wantedly',job:'CS',date:'2025-11-23',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:343,no:435,name:'井口 翔成',age:0,src:'Indeed',job:'新卒',date:'2025-11-24',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:344,no:436,name:'土屋 航大',age:0,src:'Wantedly',job:'事務',date:'2025-11-24',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:345,no:437,name:'宮下采音',age:0,src:'Infra',job:'新卒',date:'2025-11-25',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:346,no:438,name:'清水悠帆',age:0,src:'その他',job:'CS',date:'2025-11-25',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:347,no:439,name:'西垣樹',age:0,src:'Offerbox',job:'新卒',date:'2025-11-25',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:348,no:440,name:'宮部幸大',age:0,src:'Offerbox',job:'新卒',date:'2025-11-25',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:349,no:441,name:'神倉利羽',age:0,src:'Infra',job:'新卒',date:'2025-11-26',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:350,no:442,name:'フライリング愛鈴',age:0,src:'Infra',job:'新卒',date:'2025-11-27',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:351,no:443,name:'中村 麻莉唯',age:0,src:'Infra',job:'新卒',date:'2025-11-28',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:352,no:444,name:'東海林秀侑',age:0,src:'Infra',job:'新卒',date:'2025-11-28',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:353,no:445,name:'菊池悠吾',age:0,src:'Infra',job:'新卒',date:'2025-11-28',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:354,no:446,name:'岩坂 新太',age:0,src:'Infra',job:'新卒',date:'2025-11-28',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:355,no:447,name:'佐々木羽奈',age:0,src:'Offerbox',job:'新卒',date:'2025-11-28',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:356,no:448,name:'栗林 さおり',age:0,src:'Indeed',job:'事務',date:'2025-11-30',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:357,no:449,name:'八木沼 千尋',age:0,src:'Indeed',job:'新卒',date:'2025-11-30',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:358,no:450,name:'岩崎 美空',age:0,src:'エアワーク',job:'新卒',date:'2025-11-30',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:359,no:451,name:'Takuya Kobayasi',age:0,src:'Wantedly',job:'CS',date:'2025-12-01',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:360,no:452,name:'飯山 粋衣',age:0,src:'Wantedly',job:'新卒',date:'2025-12-02',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:361,no:453,name:'藤村 怜生',age:0,src:'Wantedly',job:'新卒',date:'2025-12-02',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:362,no:454,name:'大嶺貴子',age:0,src:'Indeed',job:'事務',date:'2025-12-03',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'ミスマッチ',s5:'不合格',memo:'18期',stage:'不採用'},
  {id:363,no:455,name:'安田唯子',age:0,src:'Wantedly',job:'新卒',date:'2025-12-04',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:364,no:456,name:'渡邊 綾',age:0,src:'Indeed',job:'CS',date:'2025-12-05',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:365,no:457,name:'木内 義喜',age:0,src:'Indeed',job:'事務',date:'2025-12-06',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:366,no:458,name:'大田 浩',age:0,src:'Indeed',job:'事務',date:'2025-12-08',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:367,no:459,name:'ウ テスン',age:0,src:'Indeed',job:'CS',date:'2025-12-10',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:368,no:460,name:'黒川 哲郎',age:0,src:'Wantedly',job:'CS',date:'2025-12-11',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:369,no:461,name:'合田 彩歩',age:0,src:'Infra',job:'新卒',date:'2025-12-11',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:370,no:462,name:'遠藤哲也',age:0,src:'Indeed',job:'CS',date:'2025-12-11',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:371,no:463,name:'對馬 裕樹',age:0,src:'Indeed',job:'セールス',date:'2025-12-12',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:372,no:464,name:'萩原 弘',age:0,src:'Indeed',job:'事務',date:'2025-12-14',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:373,no:465,name:'日野 あゆみ',age:0,src:'Indeed',job:'事務',date:'2025-12-15',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:374,no:466,name:'wakita takahiro',age:0,src:'Wantedly',job:'CS',date:'2025-12-16',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:375,no:467,name:'孫 君逸',age:0,src:'Indeed',job:'セールス',date:'2025-12-24',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:376,no:468,name:'水谷 恵理',age:0,src:'Wantedly',job:'CS',date:'2025-12-26',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:377,no:469,name:'丹野 萌夏',age:0,src:'Wantedly',job:'CS',date:'2025-12-29',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:378,no:470,name:'あさの かざのぼ',age:0,src:'Indeed',job:'事務',date:'2026-01-05',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:379,no:471,name:'日野 あゆみ',age:0,src:'Indeed',job:'事務',date:'2026-01-05',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:380,no:472,name:'藤木 由衣',age:0,src:'Indeed',job:'事務',date:'2026-01-06',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:381,no:473,name:'山谷 力',age:0,src:'Wantedly',job:'CS',date:'2026-01-07',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:382,no:474,name:'服部 真由子',age:0,src:'Indeed',job:'事務',date:'2026-01-08',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:383,no:475,name:'須林 龍也',age:0,src:'Indeed',job:'事務',date:'2026-01-08',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:384,no:476,name:'谷澤 澪奈',age:0,src:'Wantedly',job:'CS',date:'2026-01-08',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:385,no:477,name:'宮道 卓',age:0,src:'Wantedly',job:'CS',date:'2026-01-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:386,no:478,name:'安間 志乃',age:0,src:'Indeed',job:'セールス',date:'2026-01-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:387,no:479,name:'仲本 玲奈',age:0,src:'Indeed',job:'事務',date:'2026-01-11',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:388,no:480,name:'劉 東岳',age:0,src:'Indeed',job:'CS',date:'2026-01-13',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:389,no:481,name:'伊藤ひかり',age:0,src:'Indeed',job:'CS',date:'2026-01-13',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:390,no:482,name:'矢部 香織',age:0,src:'Indeed',job:'事務',date:'2026-01-13',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:391,no:483,name:'伊藤 朱音',age:0,src:'Wantedly',job:'CS',date:'2026-01-14',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:392,no:484,name:'根本 美羽',age:0,src:'Indeed',job:'CS',date:'2026-01-16',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:393,no:485,name:'西 佑真',age:0,src:'Indeed',job:'CS',date:'2026-01-17',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:394,no:486,name:'佐野 冬馬',age:0,src:'Indeed',job:'CS',date:'2026-01-17',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:395,no:487,name:'Maherpour Rohina',age:0,src:'Indeed',job:'事務',date:'2026-01-17',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:396,no:488,name:'Ye Hongjuan',age:0,src:'Indeed',job:'新卒',date:'2026-01-18',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:397,no:489,name:'春本 楓',age:0,src:'Indeed',job:'CS',date:'2026-01-18',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:398,no:490,name:'Sharma Prasanna',age:0,src:'Indeed',job:'新卒',date:'2026-01-18',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:399,no:491,name:'Deshpande Parth',age:0,src:'Indeed',job:'新卒',date:'2026-01-19',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:400,no:492,name:'山田 莉加',age:0,src:'Indeed',job:'CS',date:'2026-01-20',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:401,no:493,name:'石毛 公揮',age:0,src:'Indeed',job:'セールス',date:'2026-01-20',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:402,no:494,name:'本間 明',age:0,src:'Indeed',job:'CS',date:'2026-01-20',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:403,no:495,name:'商 崇恩',age:0,src:'Indeed',job:'新卒',date:'2026-01-21',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:404,no:496,name:'鄭 奈緒',age:0,src:'Indeed',job:'CS',date:'2026-01-20',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:405,no:497,name:'冨塚 鉄雄',age:0,src:'Indeed',job:'CS',date:'2026-01-21',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:406,no:498,name:'林 彩加',age:0,src:'Indeed',job:'CS',date:'2026-01-22',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:407,no:499,name:'コ カヨウ',age:0,src:'Indeed',job:'新卒',date:'2026-01-22',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:408,no:500,name:'植木 裕哉',age:0,src:'Indeed',job:'新卒',date:'2026-01-23',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:409,no:501,name:'奥谷 康',age:0,src:'Indeed',job:'事務',date:'2026-01-23',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:410,no:502,name:'萩尾 太晴',age:0,src:'Indeed',job:'事務',date:'2026-01-22',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:411,no:503,name:'今村 元紀',age:0,src:'Indeed',job:'CS',date:'2026-01-23',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:412,no:504,name:'山澤 菜夏葉',age:0,src:'Indeed',job:'新卒',date:'2026-01-23',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:413,no:505,name:'みい',age:0,src:'Wantedly',job:'CS',date:'2026-01-25',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:414,no:506,name:'アレマガル サハラ',age:0,src:'Indeed',job:'新卒',date:'2026-01-24',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:415,no:507,name:'登丸 良平',age:0,src:'Indeed',job:'CS',date:'2026-01-25',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:416,no:508,name:'西本 友',age:0,src:'Wantedly',job:'CS',date:'2026-01-27',title:'',s1:'通過',s2:'',s3:'お祈り',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:417,no:509,name:'田中 亜利沙',age:0,src:'Indeed',job:'事務',date:'2026-01-28',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:418,no:510,name:'秋田 祐志',age:0,src:'その他',job:'CS',date:'2026-01-26',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:419,no:511,name:'五十嵐',age:0,src:'Indeed',job:'CS',date:'2026-01-29',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:420,no:512,name:'ゲン コウ',age:0,src:'Indeed',job:'新卒',date:'2026-02-01',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:421,no:513,name:'佐野 統輝',age:0,src:'HRハッカー',job:'新卒',date:'2026-02-02',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'ミスマッチ',s5:'',memo:'18期',stage:'不採用'},
  {id:422,no:514,name:'齊藤 太郎',age:0,src:'Indeed',job:'CS',date:'2026-02-02',title:'',s1:'通過',s2:'',s3:'辞退',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:423,no:515,name:'田中佑大',age:0,src:'HRハッカー',job:'セールス',date:'2026-02-02',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'選考通過！',s5:'合格',memo:'18期',stage:'入社'},
  {id:424,no:516,name:'鈴木 勇輝',age:0,src:'Indeed',job:'事務',date:'2026-02-02',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:425,no:517,name:'ホサイン エムディー ノール',age:0,src:'Indeed',job:'新卒',date:'2026-02-02',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:426,no:518,name:'ラム 未生',age:0,src:'Wantedly',job:'CS',date:'2026-02-03',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:427,no:519,name:'堀田 秀弥',age:0,src:'Indeed',job:'CS',date:'2026-02-03',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:428,no:520,name:'海野 唯',age:0,src:'Indeed',job:'CS',date:'2026-02-05',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:429,no:521,name:'藤野 昂太',age:0,src:'Indeed',job:'CS',date:'2026-02-04',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:430,no:522,name:'沼崎 希',age:0,src:'Indeed',job:'CS',date:'2026-02-04',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:431,no:523,name:'大森 夏葉',age:0,src:'Indeed',job:'事務',date:'2026-02-03',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:432,no:524,name:'長谷川 睦',age:0,src:'Indeed',job:'CS',date:'2026-02-05',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:433,no:525,name:'伊藤 美土里',age:0,src:'Indeed',job:'CS',date:'2026-02-06',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:434,no:526,name:'関森 蒼依',age:0,src:'Indeed',job:'CS',date:'2026-02-07',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:435,no:527,name:'汪楼 佳',age:0,src:'Indeed',job:'CS',date:'2026-02-09',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:436,no:528,name:'河辺 萌花',age:0,src:'Indeed',job:'新卒',date:'2026-02-06',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:437,no:529,name:'藤井 麻里子',age:0,src:'Indeed',job:'事務',date:'2026-02-07',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:438,no:530,name:'松本 一弥',age:0,src:'Indeed',job:'CS',date:'2026-02-09',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:439,no:531,name:'古市 祐菜',age:0,src:'Indeed',job:'事務',date:'2026-02-09',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:440,no:532,name:'喜多 雅明',age:0,src:'Indeed',job:'CS',date:'2026-02-09',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:441,no:533,name:'竹内ひかる',age:0,src:'HRハッカー',job:'セールス',date:'2026-02-09',title:'',s1:'通過',s2:'',s3:'選考通過！',s4:'辞退',s5:'不合格',memo:'18期',stage:'不採用'},
  {id:442,no:534,name:'外岡 杏菜',age:0,src:'Indeed',job:'CS',date:'2026-02-09',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:443,no:535,name:'櫛間 れいん',age:0,src:'Indeed',job:'新卒',date:'2026-02-10',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:444,no:536,name:'千葉 洋志',age:0,src:'Indeed',job:'セールス',date:'2026-02-10',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:445,no:537,name:'石井 拓実',age:0,src:'Indeed',job:'事務',date:'2026-02-10',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:446,no:538,name:'古藤 優駿',age:0,src:'Indeed',job:'セールス',date:'2026-02-10',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:447,no:539,name:'半田 一成',age:0,src:'Indeed',job:'CS',date:'2026-02-11',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:448,no:540,name:'内池 結',age:0,src:'Indeed',job:'新卒',date:'2026-02-12',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:449,no:541,name:'神長 舞',age:0,src:'Indeed',job:'事務',date:'2026-02-12',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:450,no:542,name:'内海 由佳',age:0,src:'Indeed',job:'CS',date:'2026-02-14',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:451,no:543,name:'JEONG JAEYEOP',age:0,src:'Indeed',job:'新卒',date:'2026-02-13',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:452,no:544,name:'濱田 美香',age:0,src:'Indeed',job:'CS',date:'2026-02-14',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:453,no:545,name:'Rosa Sthefany',age:0,src:'Indeed',job:'新卒',date:'2026-02-14',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:454,no:546,name:'松田 優',age:0,src:'Indeed',job:'CS',date:'2026-02-15',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:455,no:547,name:'新村 賢太',age:0,src:'Indeed',job:'CS',date:'2026-02-16',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:456,no:548,name:'ロハニ 美羅樹',age:0,src:'Indeed',job:'CS',date:'2026-02-16',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:457,no:549,name:'高山 栄男',age:0,src:'Wantedly',job:'CS',date:'2026-02-17',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:458,no:550,name:'大野 翔',age:0,src:'Indeed',job:'セールス',date:'2026-02-17',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:459,no:551,name:'當瀨 このみ',age:0,src:'Indeed',job:'事務',date:'2026-02-17',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:460,no:552,name:'石井 敬祥',age:0,src:'Indeed',job:'セールス',date:'2026-02-18',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:461,no:553,name:'長沢 舞衣',age:0,src:'Indeed',job:'事務',date:'2026-02-18',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:462,no:554,name:'トランヴゥアンチ',age:0,src:'Indeed',job:'新卒',date:'2026-02-19',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:463,no:555,name:'湯川 拓哉',age:0,src:'Indeed',job:'セールス',date:'2026-02-21',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:464,no:556,name:'洗川 修一',age:0,src:'エアワーク',job:'新卒',date:'2026-02-22',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:465,no:557,name:'ピョン ゴンウ',age:0,src:'Indeed',job:'セールス',date:'2026-02-22',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:466,no:558,name:'三澤 一孔',age:0,src:'Indeed',job:'CS',date:'2026-02-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:467,no:559,name:'岡田 明',age:0,src:'Wantedly',job:'CS',date:'2026-02-21',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:468,no:560,name:'大塚 祐佳',age:0,src:'Wantedly',job:'CS',date:'2026-02-21',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:469,no:561,name:'鈴木 裕己',age:0,src:'Indeed',job:'新卒',date:'2026-02-22',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:470,no:562,name:'萩原 弘',age:0,src:'Indeed',job:'事務',date:'2026-02-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:471,no:563,name:'ピョン ギョンファン',age:0,src:'Indeed',job:'新卒',date:'2026-02-23',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:472,no:564,name:'高田 真里奈',age:0,src:'Indeed',job:'新卒',date:'2026-02-24',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:473,no:565,name:'江原 達也',age:0,src:'Indeed',job:'CS',date:'2026-02-24',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:474,no:566,name:'池田聡',age:0,src:'Indeed',job:'セールス',date:'2026-02-24',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:475,no:567,name:'金澤 樹',age:0,src:'Indeed',job:'CS',date:'2026-02-26',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:476,no:568,name:'竹山 智恵',age:0,src:'Indeed',job:'CS',date:'2026-02-26',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:477,no:569,name:'倉増 美空',age:0,src:'エアワーク',job:'新卒',date:'2026-02-28',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:478,no:570,name:'田野 滉大',age:0,src:'Indeed',job:'セールス',date:'2026-02-28',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:479,no:571,name:'工藤 里美',age:0,src:'Indeed',job:'CS',date:'2026-02-28',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:480,no:572,name:'中沢 文子',age:0,src:'Indeed',job:'CS',date:'2026-03-01',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:481,no:573,name:'村田 和歌子',age:0,src:'Indeed',job:'事務',date:'2026-03-01',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:482,no:574,name:'吉田 朋世',age:0,src:'Indeed',job:'CS',date:'2026-03-02',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:483,no:575,name:'小泉 元暉',age:0,src:'Indeed',job:'CS',date:'2026-03-04',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:484,no:576,name:'杉山 陽菜',age:0,src:'Wantedly',job:'新卒',date:'2026-03-04',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:485,no:577,name:'種山 颯太',age:0,src:'Indeed',job:'CS',date:'2026-03-05',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:486,no:578,name:'積田 美歩',age:0,src:'エアワーク',job:'新卒',date:'2026-03-05',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:487,no:579,name:'江口 洋平',age:0,src:'Indeed',job:'CS',date:'2026-03-06',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:488,no:580,name:'大澤 文夫',age:0,src:'Indeed',job:'CS',date:'2026-03-09',title:'',s1:'ミスマッチ',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:489,no:581,name:'大黒 漣',age:0,src:'Indeed',job:'セールス',date:'2026-03-09',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:490,no:582,name:'十文字 聡美',age:0,src:'Indeed',job:'事務',date:'2026-03-09',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:491,no:583,name:'福田 奈々',age:0,src:'Indeed',job:'セールス',date:'2026-03-10',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:492,no:584,name:'山崎 陽大',age:0,src:'Indeed',job:'事務',date:'2026-03-12',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:493,no:585,name:'飯島 寿々佳',age:0,src:'Indeed',job:'CS',date:'2026-03-12',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:494,no:586,name:'鎌田 大輝',age:0,src:'Wantedly',job:'CS',date:'2026-03-12',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:495,no:587,name:'中尾 収',age:0,src:'エアワーク',job:'新卒',date:'2026-03-12',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:496,no:588,name:'阿部 翔一郎',age:0,src:'Indeed',job:'CS',date:'2026-03-13',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:497,no:589,name:'吉建輔',age:0,src:'Indeed',job:'CS',date:'2026-03-13',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:498,no:590,name:'岡田 安奈',age:0,src:'Indeed',job:'セールス',date:'2026-03-15',title:'',s1:'辞退',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:499,no:591,name:'森尾 隆志',age:0,src:'Indeed',job:'CS',date:'2026-03-16',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:500,no:592,name:'藤井大喜',age:0,src:'Indeed',job:'新卒',date:'2026-03-17',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:501,no:593,name:'古市 慎之介',age:0,src:'Indeed',job:'事務',date:'2026-03-17',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:502,no:594,name:'竹田 響',age:0,src:'Indeed',job:'事務',date:'2026-03-17',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:503,no:595,name:'貝津 美里',age:0,src:'Wantedly',job:'CS',date:'2026-03-18',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:504,no:596,name:'槇 陸人',age:0,src:'Wantedly',job:'CS',date:'2026-03-18',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:505,no:597,name:'黄 智焕',age:0,src:'Indeed',job:'新卒',date:'2026-03-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:506,no:598,name:'森尾 隆志',age:0,src:'Wantedly',job:'CS',date:'2026-03-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:507,no:599,name:'福島 祐希',age:0,src:'Wantedly',job:'新卒',date:'2026-03-22',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:508,no:600,name:'本長 孝之',age:0,src:'Wantedly',job:'CS',date:'2026-03-21',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:509,no:601,name:'谷繁 勇太',age:0,src:'Wantedly',job:'セールス',date:'2026-03-22',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:510,no:602,name:'田代 奈都江',age:0,src:'Wantedly',job:'CS',date:'2026-03-20',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:511,no:603,name:'厳 汝玉',age:0,src:'Indeed',job:'セールス',date:'2026-03-19',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:512,no:604,name:'遊免 大夢',age:0,src:'Indeed',job:'セールス',date:'2026-03-20',title:'',s1:'現れず',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:513,no:605,name:'須田 晃舟',age:0,src:'Indeed',job:'セールス',date:'2026-03-20',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:514,no:606,name:'吉津 佳恵',age:0,src:'Indeed',job:'事務',date:'2026-03-21',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:515,no:607,name:'大井川 慎吾',age:0,src:'Indeed',job:'セールス',date:'2026-03-22',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:516,no:608,name:'李 佳書',age:0,src:'エアワーク',job:'新卒',date:'2026-03-23',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:517,no:609,name:'チン ケンコウ',age:0,src:'Indeed',job:'セールス',date:'2026-03-23',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:518,no:610,name:'李 佳書',age:0,src:'Indeed',job:'新卒',date:'2026-03-23',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:519,no:611,name:'井奥 知可',age:0,src:'Wantedly',job:'セールス',date:'2026-03-24',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:520,no:612,name:'篠田 健二',age:0,src:'Indeed',job:'CS',date:'2026-03-25',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:521,no:613,name:'米田 昌浩',age:0,src:'Indeed',job:'CS',date:'2026-03-25',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:522,no:614,name:'酒向 凌平',age:0,src:'Indeed',job:'CS',date:'2026-03-25',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:523,no:615,name:'丸井 隆三',age:0,src:'Indeed',job:'CS',date:'2026-03-24',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:524,no:616,name:'時 泰崇',age:0,src:'Indeed',job:'セールス',date:'2026-03-24',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'},
  {id:525,no:617,name:'小林 基広',age:0,src:'Indeed',job:'事務',date:'2026-03-25',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:526,no:618,name:'山ノ内 はる香',age:0,src:'Wantedly',job:'CS',date:'2026-03-25',title:'',s1:'通過',s2:'',s3:'ミスマッチ',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:527,no:619,name:'尾島 良介',age:0,src:'Indeed',job:'新卒',date:'2026-03-25',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:528,no:620,name:'森 英恵',age:0,src:'Indeed',job:'セールス',date:'2026-03-25',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:529,no:621,name:'松井 清',age:0,src:'Indeed',job:'事務',date:'2026-03-27',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:530,no:622,name:'高橋 峰之',age:0,src:'Indeed',job:'CS',date:'2026-03-26',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:531,no:623,name:'上田 あつこ',age:0,src:'Wantedly',job:'CS',date:'2026-03-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:532,no:624,name:'綾部 明子',age:0,src:'Indeed',job:'CS',date:'2026-03-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:533,no:625,name:'河田 朋裕',age:0,src:'Indeed',job:'CS',date:'2026-03-30',title:'',s1:'基準外',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'不採用'},
  {id:534,no:626,name:'岩田 雅矢',age:0,src:'Indeed',job:'CS',date:'2026-03-31',title:'',s1:'返事なし',s2:'',s3:'',s4:'',s5:'',memo:'18期',stage:'書類選考'}

];
let nxtId=22;
let sheets=[];
let nxtK=13;
var taskTemplates={
  pre:[
    {id:'p1',name:'Welcome Invisionシート送信',detail:'welcomeシート',owner:'安田',done:false},
    {id:'p2',name:'条件すり合わせ面談の日程を決める',detail:'入社条件すり合わせ',owner:'貞光&日下',done:false},
    {id:'p3',name:'Welcome invisionチャット作成',detail:'',owner:'日下',done:false},
    {id:'p4',name:'入社書類の準備および送付（採用通知書・入社誓約書・労働条件通知書・雇用契約書など）',detail:'',owner:'日下',done:false},
    {id:'p5',name:'勘情屋に共有（所属・雇用形態・給与・制度など）',detail:'',owner:'貞光→日下',done:false},
    {id:'p6',name:'組織図入れこみ',detail:'組織図',owner:'貞光→安田',done:false},
    {id:'p7',name:'新メンバー紹介新聞 記入依頼・顔写真もらう',detail:'',owner:'安田',done:false},
    {id:'p8',name:'新メンバー紹介新聞 作成依頼',detail:'',owner:'安田→ゆう',done:false},
    {id:'p9',name:'名刺用写真 依頼・作成（インターン除く）',detail:'',owner:'安田→ゆう',done:false},
    {id:'p10',name:'入社日のご案内メール送る',detail:'',owner:'安田',done:false},
    {id:'p11',name:'出社日をALLカレンダーに入れる',detail:'',owner:'安田',done:false},
    {id:'p12',name:'ペネ相手決定・会議体に名前追加',detail:'',owner:'貞光(安田)',done:false},
    {id:'p13',name:'席の確保',detail:'座席表',owner:'田野',done:false},
    {id:'p14',name:'アカウント発行（G Suite・チャットワーク・freee・カオナビ・kintone）',detail:'',owner:'日下',done:false},
    {id:'p15',name:'グループチャット招待',detail:'',owner:'日下',done:false},
    {id:'p16',name:'BGMセット',detail:'',owner:'田野→小山',done:false},
    {id:'p17',name:'[1週間前] 改めて入社日案内（駅にお迎えの時間・持ち物）',detail:'社内ツール編 ダシの素',owner:'安田',done:false},
    {id:'p18',name:'[前日までに] メンバー紹介ページと組織図の印刷',detail:'',owner:'日下',done:false},
    {id:'p19',name:'[前日までに] 新メンバー紹介新聞張り出し・垂れ幕準備・welcomeボード準備',detail:'',owner:'ゆう/田野→チーム',done:false},
    {id:'p20',name:'Welcome状準備・渡すセット用意',detail:'',owner:'貞光(田野)',done:false},
  ],
  day1:[
    {id:'d1',name:'駅までお出迎え',detail:'',owner:'チームメンバー',done:false},
    {id:'d2',name:'Welcome状渡す＆一言もらう',detail:'',owner:'田野',done:false},
    {id:'d3',name:'社内ツアー（トイレ・自販機・冷蔵庫・しずかちゃん・ゴミ箱・喫煙所）',detail:'',owner:'田野',done:false},
    {id:'d4',name:'名刺を渡す（インターン除く）',detail:'',owner:'誠吾さん',done:false},
    {id:'d5',name:'ウェルカムランチ',detail:'',owner:'チームメンバー',done:false},
    {id:'d6',name:'労務手続き（書類回収・健康保険証・源泉徴収票・年金手帳・マイナンバーなど）',detail:'',owner:'日下',done:false},
    {id:'d7',name:'社内ツール研修',detail:'社内ツール編 ダシの素',owner:'日下',done:false},
    {id:'d8',name:'ハウスルール研修（電話対応・勤怠・有給・経費申請など）',detail:'ハウスルール ダシの素',owner:'日下',done:false},
    {id:'d9',name:'礼節一覧共有',detail:'全社戦略シート',owner:'日下',done:false},
    {id:'d10',name:'新人チーム親睦ランチ',detail:'',owner:'各チーム',done:false},
    {id:'d11',name:'PC・スマホ Wi-Fi接続・プリンター設定・必要サイトのログイン確認',detail:'',owner:'貞光',done:false},
    {id:'d12',name:'Chatworkアカウント設定・アイコン設定',detail:'',owner:'本人',done:false},
    {id:'d13',name:'研修：行動習慣プロジェクト',detail:'行動喚起する魔法',owner:'吉田',done:false},
    {id:'d14',name:'研修：初めてのインビジョン〜心：ブランド理解編〜',detail:'インビジョンブランドガイドライン',owner:'吉田',done:false},
    {id:'d15',name:'研修：初めてのインビジョン〜響：広報戦略理解編〜',detail:'全社戦略シート【7】',owner:'吉田',done:false},
    {id:'d16',name:'研修：初めてのインビジョン〜技：事業理解編〜',detail:'中期経営計画まとめ',owner:'石井',done:false},
    {id:'d17',name:'研修：初めてのインビジョン〜体：組織理解編〜',detail:'組織図・全社戦略シート',owner:'貞光',done:false},
    {id:'d18',name:'研修：目標設定',detail:'評価制度・ペネシート',owner:'貞光',done:false},
    {id:'d19',name:'研修：ペネ＆振り返り研修',detail:'1on1のやり方 ダシトレ',owner:'貞光',done:false},
    {id:'d20',name:'研修：行動指針シート作成＆チームでワーク',detail:'行動指針ワーク',owner:'貞光',done:false},
    {id:'d21',name:'茶豆日誌（皆への心をこめた挨拶）',detail:'',owner:'本人',done:false},
  ],
  monthly:[
    {id:'m1',name:'入社1週間以内：メンバーページ執筆依頼・チェック',detail:'CL_メンバー紹介ページ下書き',owner:'安田・貞光',done:false},
    {id:'m2',name:'1ヶ月目：コラム「インビジョンとシンクロすること」',detail:'コーポレートコラム骨子',owner:'吉田',done:false},
    {id:'m3',name:'1ヶ月目：メンバー紹介ページ制作',detail:'',owner:'',done:false},
    {id:'m4',name:'1ヶ月目：インビジョン通信',detail:'広報ALL',owner:'吉田',done:false},
    {id:'m5',name:'1ヶ月目：採用課題の特定',detail:'採用課題特定スゴロクの素',owner:'貞光',done:false},
    {id:'m6',name:'1ヶ月目：議事録研修・議事録検定合格',detail:'議事録 ダシの素',owner:'貞光',done:false},
    {id:'m7',name:'1ヶ月目：HR業界・HRテック理解（自主学習）',detail:'全社共通研修動画④',owner:'本人',done:false},
    {id:'m8',name:'1ヶ月目：プロダクト研修（自主学習）',detail:'全社共通研修動画②',owner:'本人',done:false},
    {id:'m9',name:'1ヶ月目：HRハッカー研修（自主学習）',detail:'',owner:'本人',done:false},
    {id:'m10',name:'1ヶ月目：Indeed研修（自主学習）',detail:'Indeed運用 ダシの素',owner:'本人',done:false},
    {id:'m11',name:'1ヶ月目：Wantedly研修（自主学習）',detail:'Wantedly ダシの素',owner:'本人',done:false},
    {id:'m12',name:'1ヶ月目：原稿作成の基礎知識（自主学習）',detail:'全社共通研修動画⑥',owner:'本人',done:false},
    {id:'m13',name:'〜2ヶ月目：既存ハッカーの提案同席 5社',detail:'',owner:'各チーム上長',done:false},
    {id:'m14',name:'〜2ヶ月目：新規商談同席 5社',detail:'',owner:'各チーム上長',done:false},
    {id:'m15',name:'〜3ヶ月目：ペルコンワーク同席・コンセプトシート 3社',detail:'',owner:'各チーム上長',done:false},
    {id:'m16',name:'〜3ヶ月目：採用広報コンテンツ制作 5本',detail:'',owner:'各チーム上長',done:false},
    {id:'m17',name:'〜3ヶ月目：求人原稿作成 10本',detail:'',owner:'各チーム上長',done:false},
    {id:'m18',name:'入社1ヶ月後面談',detail:'入社後_一ヶ月面談',owner:'吉田・貞光',done:false},
    {id:'m19',name:'入社3ヶ月後面談（正社員化確認）',detail:'',owner:'吉田・貞光',done:false},
    {id:'m20',name:'入社6ヶ月後面談',detail:'',owner:'吉田・貞光',done:false},
  ],
};
let curV='dash', curAId=null;

// ===== 選考フロー グローバルデータ =====
var flowSteps=[
  {no:'STEP 1',name:'応募 → 書類選考',online:'',color:'#E6F1FB',tc:'#185FA5',
   what:'サンキューメールとともに書類選考フォームを送付して選考',
   judge:'明確な志望理由があるか\n言葉を大切にしているかジャッジ',
   who:'安田',whoC:'p-bl'},
  {no:'STEP 2',name:'一次面接',online:'【オンライン】',color:'#eaf3de',tc:'#3B6D11',
   what:'面談アンケートを深掘り\n「なぜインビジョン？」など基礎的な質問\nインビジョンを知ってもらう',
   judge:'インビジョンマッチ度をはかる',
   who:'田野',whoC:'p-tl'},
  {no:'STEP 3',name:'書類提出（選考あり）',online:'',color:'#faeeda',tc:'#854F0B',
   what:'☑ 顔付き履歴書\n☑ 職務経歴書（中途のみ）\n☑ 生き様グラフ（A4・1枚・PDF）',
   judge:'書類を通じて人となりを確認',
   who:'貞光',whoC:'p-am'},
  {no:'STEP 4',name:'二次面談',online:'【オンライン】',color:'#eaf3de',tc:'#3B6D11',
   what:'生き様グラフをもとに価値観がマッチするか確認\n貞光によるフリー面談',
   judge:'己自身を振り返り、課題を見つけて具体的なアクションに落とせているか',
   who:'貞光',whoC:'p-am'},
  {no:'STEP 5',name:'適性テスト',online:'',color:'#e1f5ee',tc:'#0F6E56',
   what:'① IQテスト（Lスカウター）約30分\n② EQテスト 約15分\n事前に受検してもらう',
   judge:'IQ / 地頭\nEQ / 心の知能指数\nやり抜く力 / 価値観シンクロ率',
   who:'',whoC:'p-gy'},
  {no:'STEP 6',name:'最終面談',online:'【来社】',color:'#faeeda',tc:'#854F0B',
   what:'人生レポートをもとに面談\nお題：これまでの人生を振り返り、今自分自身に必要なネクストアクションは何か（1000字以内・PDF提出）',
   judge:'営業スキル / 身なり（美しさ・清潔感）\nIQ/EQ・やり抜く力・価値観シンクロ率',
   who:'代表',whoC:'p-rd'},
];
var _editFlowIdx=null;


// ===== HELPERS =====
const p=(t,c)=>`<span class="p ${c||'p-gy'}">${t}</span>`;
const fd=d=>d?d.replace(/-/g,'/'):'—';
const today=()=>new Date().toISOString().slice(0,10);
function snC(v){
  if(!v)return'';
  // グレー（文字黒・背景ライトグレー）
  if(['返事なし','基準外','現れず','辞退'].includes(v))return'sn-gray';
  // 青（白字・青背景）
  if(['ミスマッチ','不合格'].includes(v))return'sn-blue';
  // 赤（白字・赤背景）
  if(['通過','選考通過！','合格'].includes(v))return'sn-red';
  // ライトブルー（青字・ライトブルー背景）
  if(['先方判断','リスケ調整中'].includes(v))return'sn-lblue';
  // ライトグリーン（緑字・ライトグリーン背景）
  if(['書類選考依頼済み','連絡済み','送信済み','日程調整中','入社条件すり合わせ','連絡済','送信済','書類依頼済'].includes(v))return'sn-green';
  return'sn-gray';
}
function snCell(v){return v?`<span class="sc2 ${snC(v)}">${v}</span>`:`<span class="se">—</span>`;}
function autoStage(d){if(d.s5==='不合格')return'不採用';if(d.s5==='合格'||d.s5==='内定')return'内定';if(d.s5)return'最終面談';if(d.s4==='ミスマッチ'||d.s4==='辞退')return'不採用';if(d.s4)return'二次面談';if(d.s3==='ミスマッチ'||d.s3==='辞退'||d.s3==='お祈り'||d.s3==='現れず')return'不採用';if(d.s3)return'一次面談';if(d.s1==='基準外'||d.s1==='返事なし')return'書類選考';return'書類選考';}
function badge(){}
function getSheet(aid){return sheets.find(s=>s.aid===aid);}

// ===== NAV =====
function openD(id){curAId=id;go('detail');}
function go(v){
  curV=v;
  ['dash','sp','kakegai','emails','training','flow','jobs','kpi','criteria','persona'].forEach(n=>{const e=document.getElementById('nav-'+n);if(e)e.classList.toggle('active',n===v);});
  const T={dash:'ダッシュボード',sp:'応募管理表',kakegai:'お掛け合いシート',emails:'メールテンプレート',training:'研修フロー',flow:'選考フロー',criteria:'採用基準',persona:'ペルソナ & JD/JS',jobs:'掲載原稿一覧',kpi:'予実管理',detail:'応募者詳細'};
  document.getElementById('ttl').textContent=T[v]||v;
  render(v);badge();
}
function render(v){
  const c=document.getElementById('mc'),ta=document.getElementById('ta');
  ta.innerHTML='';
  if(v==='dash')rDash(c,ta);
  else if(v==='sp')rSP(c,ta);
  else if(v==='kakegai')rKakegai(c,ta);
  else if(v==='detail')rDetail(c,ta);
  else if(v==='emails')rEmails(c,ta);
  else if(v==='training')rTraining(c,ta);
  else if(v==='flow')rFlow(c,ta);
  else if(v==='jobs')rJobs(c,ta);
  else if(v==='kpi')rKpi(c,ta);
  else if(v==='criteria')rCriteria(c,ta);
  else if(v==='persona')rPersona(c,ta);
}

// ===== DASHBOARD =====
function rDash(c,ta){
  // 年度フィルタリング
  var ff=(kpiG&&kpiG.fiscalFrom)||'', ft=(kpiG&&kpiG.fiscalTo)||'';
  var fyApps=ff&&ft?apps.filter(function(a){return a.date>=ff&&a.date<=ft;}):apps;
  const active=fyApps.filter(a=>!['入社','不採用','辞退','返事なし','基準外','保留','お祈り','ミスマッチ','不合格','現れず'].includes(a.stage)&&a.s1!=='返事なし'&&!['ミスマッチ','辞退','お祈り','不合格','現れず'].includes(a.s3)&&!['ミスマッチ','辞退','お祈り','不合格'].includes(a.s4)&&!['不合格'].includes(a.s5));
  // 要アクション = 書類依頼済のみ（返事なしは除外）
  const action=fyApps.filter(a=>a.s3==='書類依頼済'||a.s3==='書類選考依頼済み'||a.s4==='書類選考依頼済み');
  c.innerHTML=`
  <div class="sg">
    <div class="sc"><div class="lbl">総応募者数</div><div class="val">${fyApps.length}</div><div class="sub">${ff?ff.slice(0,7).replace('-','/')+"〜"+ft.slice(0,7).replace('-','/'):'累計'}</div></div>
    <div class="sc"><div class="lbl">選考中</div><div class="val">${active.length}</div><div class="sub">アクティブ候補者</div></div>
    <div class="sc"><div class="lbl">書類提出待ち</div><div class="val" style="color:var(--amber)">${action.length}</div><div class="sub">書類依頼済み・待ち</div></div>
  </div>
  <div class="shd"><div><div class="sttl">選考ステージ別</div></div></div>
  <div class="kw k5" style="margin-bottom:20px">
    ${STAGE_K.map(s=>{const cs=apps.filter(a=>a.stage===s&&!excl(a));return`<div class="kcol">
      <div class="kch"><span class="nm">${s}</span><span class="cnt">${cs.length}</span></div>
      ${cs.length===0?`<div class="empty" style="padding:10px;font-size:11px">なし</div>`:''}
      ${cs.map(a=>`<div class="kcard" onclick="openD(${a.id})">
        <div class="kn">${a.name}</div><div class="ks">${a.age}歳 / ${a.job}</div>
        <div class="km">${p(a.src,SRC[a.src]||'p-gy')}<span class="kd">${fd(a.date)}</span></div>
      </div>`).join('')}
    </div>`;}).join('')}
  </div>
  ${action.length>0?`
  <div class="div-lbl">要アクション — 書類提出待ち</div>
  <div class="tw"><table><thead><tr><th>名前</th><th>ステージ</th><th>状況</th><th>応募日</th><th></th></tr></thead>
  <tbody>${action.map(a=>`<tr>
    <td class="tl" onclick="openD(${a.id})">${a.name}</td>
    <td>${p(a.stage,SC[a.stage]||'p-gy')}</td>
    <td><span class="sn sn-b">書類依頼済 — 提出待ち</span></td>
    <td>${fd(a.date)}</td>
    <td><button class="btn btn-s btn-sm" onclick="openK(${a.id})">お掛け合い記録</button></td>
  </tr>`).join('')}</tbody></table></div>`:'<div class="div-lbl">要アクションの候補者はいません</div>'}`;
}

// ===== SPREADSHEET =====
function rSP(c,ta){
  ta.innerHTML=`<div style="display:flex;gap:8px;align-items:center"><button class="btn btn-s" id="ta-settings">⚙ 媒体・職種を設定</button><button class="btn btn-p" onclick="openM()">＋ 応募者を追加</button></div>`;
  // ============ フィルター適用 ============
  // spFilter が空の場合は全件表示（年度フィルターは使わない）
  var hasDateFilter = !!(spFilter.from || spFilter.to);
  var hasSrcFilter  = !!spFilter.src;
  var hasJobFilter  = !!spFilter.job;
  var hasFilter     = hasDateFilter || hasSrcFilter || hasJobFilter || spFilter.activeOnly;

  var filtered = [...apps].filter(function(a){
    if(hasDateFilter){
      if(spFilter.from && a.date < spFilter.from) return false;
      if(spFilter.to   && a.date > spFilter.to)   return false;
    }
    if(hasSrcFilter && a.src !== spFilter.src) return false;
    if(hasJobFilter && a.job !== spFilter.job) return false;
    // 通過者フィルター：全ステージでネガティブ結果がなく選考継続中の人のみ
    if(spFilter.activeOnly){
      var NEG=['返事なし','基準外','辞退','ミスマッチ','不合格','お祈り','現れず'];
      if(NEG.includes(a.s1)||NEG.includes(a.s3)||NEG.includes(a.s4)||NEG.includes(a.s5)) return false;
      if(['不採用','入社','辞退'].includes(a.stage)) return false;
      if(!a.s1||a.s1==='送信済み') return false; // 書類選考前は除外
    }
    return true;
  }).sort(function(a,b){ return b.date.localeCompare(a.date); });

  var srcOpts='<option value="">全応募経由</option>'+SRCS.map(function(s){return'<option value="'+s+'"'+(spFilter.src===s?' selected':'')+'>'+s+'</option>';}).join('');
  var jobOpts='<option value="">全職種</option>'+JOBS.map(function(j){return'<option value="'+j+'"'+(spFilter.job===j?' selected':'')+'>'+j+'</option>';}).join('');

  c.innerHTML=`
  <div class="shd"><div><div class="sttl">応募管理表</div><div class="ssub">全${apps.length}名中 ${filtered.length}名表示 — 行をクリックで詳細・編集</div></div></div>
  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 0;margin-bottom:8px;border-bottom:1px solid var(--bd)">
    <div style="display:flex;align-items:center;gap:4px">
      <span style="font-size:11px;color:var(--tx3);white-space:nowrap">📅 期間</span>
      <input type="date" id="sp-from" value="${spFilter.from}" class="fi" style="font-size:11px;padding:4px 6px;width:130px">
      <span style="font-size:11px;color:var(--tx3)">〜</span>
      <input type="date" id="sp-to" value="${spFilter.to}" class="fi" style="font-size:11px;padding:4px 6px;width:130px">
    </div>
    <select id="sp-src" class="fi" style="font-size:11px;padding:4px 6px;width:120px">${srcOpts}</select>
    <select id="sp-job" class="fi" style="font-size:11px;padding:4px 6px;width:100px">${jobOpts}</select>
    <button id="sp-active" class="btn ${spFilter.activeOnly?'btn-p':'btn-s'} btn-sm" style="font-size:11px">✅ 通過者</button>
    <button id="sp-apply" class="btn btn-p btn-sm" style="font-size:11px">絞り込む</button>
    ${hasFilter ? '<button id="sp-reset" class="btn btn-s btn-sm" style="font-size:11px;color:var(--red)">✕ リセット</button>' : ''}
  </div>
  <div class="spw"><table class="spt">
    <thead><tr><th class="no-c">No</th><th>日時</th><th>名前</th><th>年齢</th><th>応募経由</th><th>職種</th><th style="max-width:140px">応募原稿</th><th>書類選考</th><th>一次面接</th><th>二次面接</th><th>最終面接</th></tr></thead>
    <tbody>
    <tr onclick="openM()" style="cursor:pointer"><td class="no-c" style="color:var(--tx3)">＋</td><td colspan="9" style="color:var(--tx3);font-size:11px">クリックして新しい応募者を追加...</td></tr>
    ${filtered.map((a,i)=>`<tr onclick="openD(${a.id})" style="cursor:pointer">
      <td class="no-c">${i+1}</td>
      <td style="white-space:nowrap">${fd(a.date)}</td>
      <td style="font-weight:500;max-width:6em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</td>
      <td style="text-align:center">${a.age||'—'}</td>
      <td>${p(a.src,SRC[a.src]||'p-gy')}</td>
      <td style="font-size:11px;color:var(--tx2);white-space:nowrap">${a.job}</td>
      <td style="font-size:10px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.title?(a.titleUrl?`<a href="${a.titleUrl}" target="_blank" onclick="event.stopPropagation()" style="color:var(--blue);text-decoration:none" title="${a.title}">🔗 ${a.title}</a>`:`<span title="${a.title}">${a.title}</span>`):'<span style="color:var(--tx3)">—</span>'}</td>
      <td onclick="quickStage(event,${a.id},'s1')" style="cursor:pointer" title="クリックで変更">${snCell(a.s1)}</td>
      <td onclick="quickStage(event,${a.id},'s3')" style="cursor:pointer" title="クリックで変更">${snCell(a.s3)}</td>
      <td onclick="quickStage(event,${a.id},'s4')" style="cursor:pointer" title="クリックで変更">${snCell(a.s4)}</td>
      <td onclick="quickStage(event,${a.id},'s5')" style="cursor:pointer" title="クリックで変更">${snCell(a.s5)}</td>
    </tr>`).join('')}
    </tbody>
  </table></div>`;

  // ===== フィルターボタンのイベントバインド =====
  var _applyBtn = document.getElementById('sp-apply');
  if(_applyBtn) _applyBtn.addEventListener('click', function(){
    spFilter.from = (document.getElementById('sp-from')||{}).value || '';
    spFilter.to   = (document.getElementById('sp-to')||{}).value   || '';
    spFilter.src  = (document.getElementById('sp-src')||{}).value  || '';
    spFilter.job  = (document.getElementById('sp-job')||{}).value  || '';
    render('sp');
  });

  var _resetBtn = document.getElementById('sp-reset');
  if(_resetBtn) _resetBtn.addEventListener('click', function(){
    spFilter = {src:'',job:'',from:'',to:''};
    render('sp');
  });

  var _settingsBtn = document.getElementById('ta-settings');
  if(_settingsBtn) _settingsBtn.addEventListener('click', function(){ openSrcJobSettings(); });

  // 通過者トグルボタン（クリックで即切り替え）
  var _activeBtn = document.getElementById('sp-active');
  if(_activeBtn) _activeBtn.addEventListener('click', function(){
    spFilter.activeOnly = !spFilter.activeOnly;
    render('sp');
  });

  // quickStage・行クリックのonclickはHTML属性で動作
}

// ===== KANBAN =====
function rDetail(c,ta){
  const a=apps.find(x=>x.id===curAId);if(!a){go('sp');return;}
  const sh=getSheet(a.id);
  ta.innerHTML=`<div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-s btn-sm" onclick="openGcal(${a.id})">📅 面談をカレンダーに追加</button><button class="btn btn-s btn-sm" onclick="editA(${a.id})">編集</button><button class="btn btn-s btn-sm" onclick="openK(${a.id})">${sh?'お掛け合いを見る':'＋ お掛け合い記録'}</button></div>`;
  c.innerHTML=`
  <div class="back" onclick="go('sp')">← 応募管理表に戻る</div>
  <div style="font-size:20px;font-weight:700;margin-bottom:3px">${a.name}</div>
  <div style="font-size:12px;color:var(--tx3);margin-bottom:18px">${a.age}歳 / ${a.job} / ${a.src} / 応募日 ${fd(a.date)}</div>
  <div class="dl">
    <div>
      <div class="pl" style="margin-bottom:16px">
        <div class="pr"><span class="pk">現在ステージ</span><span class="pv">${p(a.stage,SC[a.stage]||'p-gy')}</span></div>
        <div class="pr"><span class="pk">書類選考</span><span class="pv">${a.s1?`<span class="sc2 ${snC(a.s1)}">${a.s1}</span>`:'—'}</span></div>
        <div class="pr"><span class="pk">一次面接</span><span class="pv">${a.s3?`<span class="sc2 ${snC(a.s3)}">${a.s3}</span>`:'—'}</span></div>
        <div class="pr" style="background:var(--sf2)"><span class="pk" style="color:var(--tx3);font-size:10px">一次面接日</span><span class="pv"><input type="date" value="${a.d3||''}" style="border:none;background:transparent;font-size:12px;color:var(--tx)" onchange="saveIntDate(${a.id},'d3',this.value)"></span></div>
        <div class="pr"><span class="pk">二次面接</span><span class="pv">${a.s4?`<span class="sc2 ${snC(a.s4)}">${a.s4}</span>`:'—'}</span></div>
        <div class="pr" style="background:var(--sf2)"><span class="pk" style="color:var(--tx3);font-size:10px">二次面接日</span><span class="pv"><input type="date" value="${a.d4||''}" style="border:none;background:transparent;font-size:12px;color:var(--tx)" onchange="saveIntDate(${a.id},'d4',this.value)"></span></div>
        <div class="pr"><span class="pk">最終面接</span><span class="pv">${a.s5?`<span class="sc2 ${snC(a.s5)}">${a.s5}</span>`:'—'}</span></div>
        <div class="pr" style="background:var(--sf2)"><span class="pk" style="color:var(--tx3);font-size:10px">最終面接日</span><span class="pv"><input type="date" value="${a.d5||''}" style="border:none;background:transparent;font-size:12px;color:var(--tx)" onchange="saveIntDate(${a.id},'d5',this.value)"></span></div>

        ${a.memo?`<div class="pr"><span class="pk">メモ</span><span class="pv" style="white-space:pre-wrap;line-height:1.7">${a.memo}</span></div>`:''}
      </div>
      ${sh?`
      <div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">お掛け合いシート — 担当者判定</div>
      <div class="judge-grid" style="margin-bottom:16px">
        <div class="judge-card">
          <div class="judge-name">一次面接結果</div>
          <div class="judge-result">${sh.t1r?p(sh.t1r,JC[sh.t1r]||'p-gy'):'—'}</div>
          ${sh.t1f?`<div style="font-size:11px;color:var(--tx2)">${sh.t1f}</div>`:''}
          ${sh.t1g?`<div style="font-size:11px;color:var(--teal);margin-top:3px">◎ ${sh.t1g}</div>`:''}
        </div>
        <div class="judge-card">
          <div class="judge-name">二次面接結果</div>
          <div class="judge-result">${sh.s1r?p(sh.s1r,JC[sh.s1r]||'p-gy'):'—'}</div>
          ${sh.s1f?`<div style="font-size:11px;color:var(--tx2)">${sh.s1f}</div>`:''}
          ${sh.s1g?`<div style="font-size:11px;color:var(--teal);margin-top:3px">◎ ${sh.s1g}</div>`:''}
        </div>
        <div class="judge-card">
          <div class="judge-name">最終面接結果</div>
          <div class="judge-result">${sh.y1r?p(sh.y1r,JC[sh.y1r]||'p-gy'):'—'}</div>
          ${sh.y1f?`<div style="font-size:11px;color:var(--tx2)">${sh.y1f}</div>`:''}
        </div>
      </div>`:'<div class="empty">お掛け合いシートがまだありません</div>'}
    </div>
    <div>
      <div class="scard">
        <div class="stitle">ステージを変更</div>
        ${STAGES.map(s=>`<button class="stage-btn ${s===a.stage?'cur':''}" onclick="chStage(${a.id},'${s}')">${s}</button>`).join('')}
      </div>
      <div class="scard">
        <div class="stitle">メールテンプレート</div>
        ${TPLS.slice(0,5).map(t=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--bd)">
          <div style="font-size:11px;color:var(--tx2)">${t.step}. ${t.name.slice(0,14)}…</div>
          <button class="btn btn-s btn-sm" onclick="copyT('${t.id}')">コピー</button>
        </div>`).join('')}
        <div style="margin-top:8px;text-align:center"><button class="btn btn-s btn-sm" onclick="go('emails')">全テンプレートを見る →</button></div>
      </div>
    </div>
  </div>`;
}
function chStage(id,s){const a=apps.find(x=>x.id===id);if(a){a.stage=s;render('detail');badge();}}
function quickStage(event,id,field){
  event.stopPropagation();
  var a=apps.find(function(x){return x.id===id;});if(!a)return;
  var opts={'s1':['送信済み','通過','返事なし','基準外'],'s3':['連絡済み','選考通過！','ミスマッチ','リスケ調整中','先方判断','現れず','辞退'],'s4':['書類選考依頼済み','選考通過！','ミスマッチ','辞退'],'s5':['入社条件すり合わせ','日程調整中','合格','不合格']};
  var choices=opts[field]||[];
  // 既存のポップアップを削除
  var old=document.getElementById('qs-pop');if(old)old.remove();
  var pop=document.createElement('div');
  pop.id='qs-pop';
  pop.style.cssText='position:fixed;z-index:9999;background:var(--bg);border:1px solid var(--bd);border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);padding:4px;min-width:140px';
  var rows=choices.map(function(c){
    var btn=document.createElement('div');
    btn.textContent=c;
    btn.style.cssText='padding:7px 12px;font-size:12px;cursor:pointer;border-radius:5px';
    btn.onmouseenter=function(){this.style.background='var(--sf2)';};
    btn.onmouseleave=function(){this.style.background='';};
    btn.onclick=function(){setQuickStage(id,field,c);};
    return btn;
  });
  var hdr=document.createElement('div');
  hdr.textContent='ステータスを選択';
  hdr.style.cssText='font-size:10px;color:var(--tx3);padding:4px 8px 6px;font-weight:700';
  pop.appendChild(hdr);
  rows.forEach(function(r){pop.appendChild(r);});
  var clr=document.createElement('div');
  clr.textContent='— クリア';
  clr.style.cssText='padding:7px 12px;font-size:12px;cursor:pointer;color:var(--tx3);border-radius:5px;border-top:1px solid var(--bd);margin-top:2px';
  clr.onmouseenter=function(){this.style.background='var(--sf2)';};
  clr.onmouseleave=function(){this.style.background='';};
  clr.onclick=function(){setQuickStage(id,field,'');};
  pop.appendChild(clr);
  var rect=event.target.getBoundingClientRect();
  pop.style.top=(rect.bottom+4)+'px';
  pop.style.left=rect.left+'px';
  document.body.appendChild(pop);
  setTimeout(function(){document.addEventListener('click',function rm(){document.getElementById('qs-pop')&&document.getElementById('qs-pop').remove();document.removeEventListener('click',rm);});},10);
}
function setQuickStage(id,field,val){
  var a=apps.find(function(x){return x.id===id;});
  if(!a)return;
  a[field]=val;
  a.stage=autoStage(a);
  badge();render('sp');
  var pop=document.getElementById('qs-pop');if(pop)pop.remove();
}

// ===== お掛け合いシート一覧 =====

function openK(aid){
  const sel=document.getElementById('ka');
  // datalist更新
  const dl=document.getElementById('ka-list');
  dl.innerHTML=apps.map(a=>`<option value="${a.name}" data-id="${a.id}">`).join('');
  const kaInput=document.getElementById('ka-input');
  kaInput.value=aid?apps.find(x=>x.id===aid)?.name||'':'';
  document.getElementById('ka').value=aid||'';
  document.getElementById('kaid').value='';
  // ktypeをjobで自動セット
  if(aid){
    var aJob=apps.find(function(x){return x.id===aid;});
    if(aJob){var ktEl=document.getElementById('ktype');if(ktEl)ktEl.value=aJob.job||'セールス';}
  }
  // Clear all fields
  ['kc1','kc2','kc3','kc4','kc5','ky','kc6','kc7','kq1','kq2','kq3','kq4','kq5','kq6','kq7','kq8','kt1f','kt1g','kt1u','ks1f','ks1g','ks1u','ky1f','ki2','ka-input'].forEach(i=>{const el=document.getElementById(i);if(el)el.value='';}); document.getElementById('ka').value='';
  ['kt1','ks1','ky1','ktype'].forEach(i=>{const el=document.getElementById(i);if(el)el.value='';});
  // Pre-fill if sheet exists
  if(aid){
    const sh=getSheet(aid);
    if(sh){
      document.getElementById('kaid').value=sh.id;
      document.getElementById('mktitle').textContent='お掛け合いシート — 編集';
      fillSheet(sh);
    } else {
      document.getElementById('mktitle').textContent='お掛け合いシート — 新規作成';
      const a=apps.find(x=>x.id===aid);
      if(a)document.getElementById('ktype').value=a.job||'セールス';
    }
  }
  document.getElementById('mk').classList.add('open');
}
function editK(sid){
  const sh=sheets.find(s=>s.id===sid);if(!sh)return;
  const sel=document.getElementById('ka');
  sel.innerHTML=apps.map(a=>`<option value="${a.id}" ${a.id===sh.aid?'selected':''}>${a.name}</option>`).join('');
  document.getElementById('kaid').value=sh.id;
  document.getElementById('mktitle').textContent='お掛け合いシート — 編集';
  fillSheet(sh);
  document.getElementById('mk').classList.add('open');
}
function fillSheet(sh){
  const fields={kc1:sh.kc1,kc2:sh.kc2,kc3:sh.kc3,kc4:sh.kc4,kc5:sh.kc5,ky:sh.ky,kq1:sh.kq1,kq2:sh.kq2,kq3:sh.kq3,kq4:sh.kq4,kq5:sh.kq5,kq6:sh.kq6,kq7:sh.kq7,kq8:sh.kq8,kt1f:sh.t1f,kt1g:sh.t1g,kt1u:sh.t1u,ks1f:sh.s1f,ks1g:sh.s1g,ks1u:sh.s1u,ky1f:sh.y1f,ki2:sh.ki2,kc6:sh.kc6,kc7:sh.kc7};
  Object.entries(fields).forEach(([k,v])=>{const el=document.getElementById(k);if(el&&v)el.value=v;});
  if(sh.type)document.getElementById('ktype').value=sh.type||sh.job||'セールス';
  if(sh.t1r)document.getElementById('kt1').value=sh.t1r;
  if(sh.s1r)document.getElementById('ks1').value=sh.s1r;
  if(sh.y1r)document.getElementById('ky1').value=sh.y1r;
}
function saveK(){
  const aid=parseInt(document.getElementById('ka').value);
  const kid=document.getElementById('kaid').value;
  const get=id=>document.getElementById(id)?.value||'';
  const data={
    aid,job:get('ktype'),type:get('ktype'),
    kc1:get('kc1'),kc2:get('kc2'),kc3:get('kc3'),kc4:get('kc4'),kc5:get('kc5'),kc6:get('kc6'),kc7:get('kc7'),ky:get('ky'),
    kq1:get('kq1'),kq2:get('kq2'),kq3:get('kq3'),kq4:get('kq4'),kq5:get('kq5'),kq6:get('kq6'),kq7:get('kq7'),kq8:get('kq8'),
    t1r:get('kt1'),t1f:get('kt1f'),t1g:get('kt1g'),t1u:get('kt1u'),
    s1r:get('ks1'),s1f:get('ks1f'),s1g:get('ks1g'),s1u:get('ks1u'),
    y1r:get('ky1'),y1f:get('ky1f'),
    ki2:get('ki2'),
  };
  if(kid){const s=sheets.find(x=>x.id===parseInt(kid));if(s)Object.assign(s,data);}
  else{sheets.push({id:nxtK++,...data});}
  cm('mk');render(curV);
}

// ===== APPLICANT MODAL =====
function openM(){
  // 応募経由・職種を動的生成
  document.getElementById('fs').innerHTML=SRCS.map(function(s){return'<option>'+s+'</option>';}).join('');
  document.getElementById('fj').innerHTML=JOBS.map(function(j){return'<option>'+j+'</option>';}).join('');
  document.getElementById('mtitle').textContent='応募者を追加';
  document.getElementById('eid').value='';
  document.getElementById('delbtn').classList.remove('open');
  ['fn','fa','fm'].forEach(i=>document.getElementById(i).value='');
  document.getElementById('fs').value='Indeed';
  document.getElementById('fj').value='セールス';
  document.getElementById('fd').value=today();
  ['f1','f3','f4','f5'].forEach(i=>document.getElementById(i).value='');
  // 掲載中原稿でプルダウン生成
  var sel=document.getElementById('ftitle');
  sel.innerHTML='<option value="">— 選択してください —</option>';
  jobList.filter(function(j){return j.status==='掲載中';}).forEach(function(j){
    var opt=document.createElement('option');
    opt.value=j.name+'|||'+j.url;
    opt.textContent='['+j.media+'] '+j.name;
    sel.appendChild(opt);
  });
  document.getElementById('ma').classList.add('open');
}
function editA(id){
  const a=apps.find(x=>x.id===id);if(!a)return;
  document.getElementById('mtitle').textContent='応募者を編集';
  document.getElementById('eid').value=id;
  document.getElementById('delbtn').style.display='inline-flex';
  document.getElementById('fn').value=a.name;
  document.getElementById('fa').value=a.age||'';
  document.getElementById('fs').value=a.src;
  document.getElementById('fj').value=a.job;
  document.getElementById('fd').value=a.date;
  // プルダウン再生成して既存値を復元
  var sel2=document.getElementById('ftitle');
  sel2.innerHTML='<option value="">— 選択してください —</option>';
  jobList.filter(function(j){return j.status==='掲載中';}).forEach(function(j){
    var opt=document.createElement('option');
    opt.value=j.name+'|||'+j.url;
    opt.textContent='['+j.media+'] '+j.name;
    sel2.appendChild(opt);
  });
  // 保存済みのtitleに一致するoptionを選択
  if(a.title){
    var found=Array.from(sel2.options).find(function(o){return o.value.startsWith(a.title+'|||')||o.textContent.indexOf(a.title)>=0;});
    if(found)sel2.value=found.value;else{
      var opt2=document.createElement('option');
      opt2.value=a.title+'|||'+(a.titleUrl||'');opt2.textContent=a.title;opt2.selected=true;
      sel2.appendChild(opt2);
    }
  }
  ['f1','f3','f4','f5'].forEach(i=>{const k=i==='f1'?'s1':i==='f3'?'s3':i==='f4'?'s4':'s5';document.getElementById(i).value=a[k]||'';});
  document.getElementById('fm').value=a.memo||'';
  document.getElementById('ma').classList.add('open');
}
function saveA(){
  const name=document.getElementById('fn').value.trim();
  if(!name){alert('氏名を入力してください');return;}
  const eid=document.getElementById('eid').value;
  const d={name,age:parseInt(document.getElementById('fa').value)||document.getElementById('fa').value||'',src:document.getElementById('fs').value,job:document.getElementById('fj').value,date:document.getElementById('fd').value,title:(function(){var v=document.getElementById('ftitle').value;return v?v.split('|||')[0]:'';}()),
    titleUrl:(function(){var v=document.getElementById('ftitle').value;return v&&v.indexOf('|||')>=0?v.split('|||')[1]:'';}()),s1:document.getElementById('f1').value,s3:document.getElementById('f3').value,s4:document.getElementById('f4').value,s5:document.getElementById('f5').value,memo:document.getElementById('fm').value};
  d.stage=autoStage(d);
  if(eid){const a=apps.find(x=>x.id===parseInt(eid));if(a)Object.assign(a,d);}
  else{apps.push({id:nxtId++,no:apps.length+1,...d});}
  cm('ma');badge();render(curV);
}
function delA(){
  const eid=parseInt(document.getElementById('eid').value);
  if(!confirm('この応募者を削除しますか？'))return;
  apps=apps.filter(x=>x.id!==eid);apps.forEach((a,i)=>a.no=i+1);
  cm('ma');badge();go('sp');
}
function cm(id){document.getElementById(id).classList.remove('open');}

// ===== SELECTION FLOW =====

function rTraining(c,ta){
  ta.innerHTML='<button class="btn btn-p" onclick="openAddMemberModal()">+ 内定者を追加</button>';
  if(!trainMembers.length){
    c.innerHTML='<div class="shd"><div><div class="sttl">研修フロー / オンボーディング</div><div class="ssub">内定者ごとにチェックリストを管理</div></div></div>'
      +'<div class="empty" style="padding:48px;border:1px dashed var(--bd2);border-radius:var(--rl)">内定者がいません<br><span style="font-size:12px">「+ 内定者を追加」から追加してください</span></div>';
    return;
  }
  // 内定者セレクタ
  var selHtml='<div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;background:var(--sf);border:1px solid var(--bd);border-radius:var(--rl);padding:12px 16px">';
  selHtml+='<span style="font-size:12px;color:var(--tx3);white-space:nowrap">内定者</span>';
  selHtml+='<div style="display:flex;gap:6px;flex-wrap:wrap">';
  trainMembers.forEach(function(m){
    var isCur=m.id===curTrainMemberId;
    selHtml+='<button class="btn btn-'+(isCur?'p':'s')+' btn-sm" onclick="selectTrainMember(\''+m.id+'\')">'+m.name+'</button>';
  });
  selHtml+='</div>';
  var cm=getCurMember();
  if(cm){
    selHtml+='<div style="margin-left:auto;display:flex;gap:6px">';
    selHtml+='<button class="btn btn-s btn-sm" onclick="openEditMemberModal(\''+cm.id+'\')">編集</button>';
    selHtml+='<button class="btn btn-d btn-sm" onclick="deleteTrainMember(\''+cm.id+'\')">削除</button>';
    selHtml+='</div>';
  }
  selHtml+='</div>';
  if(!cm){c.innerHTML=selHtml;return;}
  // 進捗集計
  var phases=[
    {key:'pre',label:'入社前（序）',icon:'📋',col:'var(--blue)'},
    {key:'day1',label:'入社日（破）',icon:'🎉',col:'var(--green)'},
    {key:'monthly',label:'入社後（急）',icon:'🚀',col:'var(--amber)'},
  ];
  var totalAll=0,doneAll=0;
  phases.forEach(function(ph){cm.tasks[ph.key].forEach(function(t){totalAll++;if(t.done)doneAll++;});});
  var pctAll=totalAll?Math.round(doneAll/totalAll*100):0;
  var statsHtml='<div style="display:flex;gap:10px;margin-bottom:16px">';
  phases.forEach(function(ph){
    var arr=cm.tasks[ph.key],tot=arr.length,dn=arr.filter(function(t){return t.done;}).length;
    statsHtml+='<div class="sc" style="flex:1"><div class="lbl">'+ph.label+'</div><div class="val">'+dn+'<span style="font-size:13px;color:var(--tx3)"> / '+tot+'</span></div>';
    statsHtml+='<div style="background:var(--sf2);border-radius:20px;height:6px;overflow:hidden;margin-top:4px"><div style="background:'+ph.col+';height:6px;width:'+(tot?Math.round(dn/tot*100):0)+'%;border-radius:20px"></div></div></div>';
  });
  statsHtml+='<div class="sc" style="flex:1"><div class="lbl">全体進捗</div><div class="val">'+pctAll+'<span style="font-size:13px;color:var(--tx3)">%</span></div>';
  statsHtml+='<div style="background:var(--sf2);border-radius:20px;height:6px;overflow:hidden;margin-top:4px"><div style="background:var(--teal);height:6px;width:'+pctAll+'%;border-radius:20px"></div></div></div></div>';
  // フェーズタブ
  var tabsHtml='<div style="display:flex;gap:6px;margin-bottom:14px">';
  phases.forEach(function(ph,i){
    tabsHtml+='<button class="btn btn-'+(i===0?'p':'s')+' btn-sm train-tab" data-ph="'+ph.key+'">'+ph.icon+' '+ph.label+'</button>';
  });
  tabsHtml+='</div>';
  // フェーズごとのテーブル
  var phaseDivs='';
  phases.forEach(function(ph,pi){
    var arr=cm.tasks[ph.key];
    var rows='';
    arr.forEach(function(t,ti){
      var st=t.done?'opacity:.45':'';
      var nm=t.done?('<del>'+t.name+'</del>'):t.name;
      rows+='<tr style="'+st+'"><td style="width:36px;text-align:center;padding:6px">';
      rows+='<input type="checkbox" '+(t.done?'checked':'')+' onchange="toggleTask(\''+cm.id+'\',\''+ph.key+'\',\''+t.id+'\')" style="cursor:pointer;width:15px;height:15px"></td>';
      rows+='<td style="font-size:12px;padding:7px 10px">'+nm+'</td>';
      rows+='<td style="font-size:11px;color:var(--tx3);padding:7px 10px;white-space:nowrap">'+(t.detail||'—')+'</td>';
      rows+='<td style="font-size:11px;color:var(--tx2);padding:7px 10px;white-space:nowrap">'+(t.owner||'')+'</td>';
      rows+='<td style="text-align:right;padding:4px 8px;white-space:nowrap">';
      rows+='<button class="btn btn-s btn-sm" style="font-size:10px;padding:2px 7px" onclick="openEditTaskModal(\''+cm.id+'\',\''+ph.key+'\',\''+t.id+'\')">✎</button> ';
      rows+='<button class="btn btn-s btn-sm" style="font-size:10px;padding:2px 7px;color:var(--red)" onclick="deleteTask(\''+cm.id+'\',\''+ph.key+'\',\''+t.id+'\')">✕</button>';
      rows+='</td></tr>';
    });
    phaseDivs+='<div class="train-ph" id="tph-'+ph.key+'" style="display:'+(pi===0?'block':'none')+'">';
    phaseDivs+='<div class="tw">';
    phaseDivs+='<table style="width:100%;border-collapse:collapse">';
    phaseDivs+='<thead><tr>';
    phaseDivs+='<th style="font-size:10px;font-weight:700;color:var(--tx3);padding:6px 10px;border-bottom:1px solid var(--bd);background:var(--sf2);width:36px">完了</th>';
    phaseDivs+='<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:6px 10px;border-bottom:1px solid var(--bd);background:var(--sf2)">TODO</th>';
    phaseDivs+='<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:6px 10px;border-bottom:1px solid var(--bd);background:var(--sf2)">資料・リンク</th>';
    phaseDivs+='<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:6px 10px;border-bottom:1px solid var(--bd);background:var(--sf2)">担当者</th>';
    phaseDivs+='<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:right;padding:6px 10px;border-bottom:1px solid var(--bd);background:var(--sf2)">操作</th>';
    phaseDivs+='</tr></thead><tbody>'+rows+'</tbody>';
    // 追加ボタン行
    phaseDivs+='<tfoot><tr><td colspan="5" style="padding:8px 10px;border-top:1px solid var(--bd)">';
    phaseDivs+='<button class="btn btn-s btn-sm" onclick="openAddTaskModal(\''+cm.id+'\',\''+ph.key+'\')">+ タスクを追加</button>';
    phaseDivs+='</td></tr></tfoot>';
    phaseDivs+='</table></div></div>';
  });
  c.innerHTML='<div class="shd"><div><div class="sttl">研修フロー / オンボーディング</div><div class="ssub">'+cm.name+' さん'+(cm.joinDate?' — 初出社日: '+cm.joinDate:'')+'</div></div></div>'
    +selHtml+statsHtml+tabsHtml+phaseDivs;
}
function selectTrainMember(id){curTrainMemberId=id;render('training');}
function deleteTrainMember(id){
  if(!confirm('この内定者のシートを削除しますか？'))return;
  trainMembers=trainMembers.filter(function(m){return m.id!==id;});
  curTrainMemberId=trainMembers.length?trainMembers[0].id:null;
  render('training');
}
function showTrainPhase(key){
  ['pre','day1','monthly'].forEach(function(k){
    var el=document.getElementById('tph-'+k);if(el)el.style.display=k===key?'block':'none';
  });
  document.querySelectorAll('.train-tab').forEach(function(btn){
    btn.className='btn btn-'+(btn.getAttribute('data-ph')===key?'p':'s')+' btn-sm train-tab';
  });
}
function toggleTask(memberId,phase,taskId){
  var m=trainMembers.find(function(x){return x.id===memberId;});
  if(!m)return;
  var t=m.tasks[phase].find(function(x){return x.id===taskId;});
  if(t)t.done=!t.done;
  render('training');
}
function deleteTask(memberId,phase,taskId){
  var m=trainMembers.find(function(x){return x.id===memberId;});
  if(!m)return;
  if(!confirm('このタスクを削除しますか？'))return;
  m.tasks[phase]=m.tasks[phase].filter(function(t){return t.id!==taskId;});
  render('training');
}
// タスク追加・編集
var editTaskCtx={memberId:null,phase:null,taskId:null};
function openAddTaskModal(memberId,phase){
  editTaskCtx={memberId:memberId,phase:phase,taskId:null};
  document.getElementById('et-name').value='';
  document.getElementById('et-detail').value='';
  document.getElementById('et-owner').value='';
  document.getElementById('et-ttl').textContent='タスクを追加 — '+({pre:'入社前',day1:'入社日',monthly:'入社後'}[phase]);
  document.getElementById('modal-etask').classList.add('open');
}
function openEditTaskModal(memberId,phase,taskId){
  var m=trainMembers.find(function(x){return x.id===memberId;});
  if(!m)return;
  var t=m.tasks[phase].find(function(x){return x.id===taskId;});
  if(!t)return;
  editTaskCtx={memberId:memberId,phase:phase,taskId:taskId};
  document.getElementById('et-name').value=t.name;
  document.getElementById('et-detail').value=t.detail||'';
  document.getElementById('et-owner').value=t.owner||'';
  document.getElementById('et-ttl').textContent='タスクを編集';
  document.getElementById('modal-etask').classList.add('open');
}
function saveTask(){
  var name=document.getElementById('et-name').value.trim();
  if(!name){alert('タスク名を入力してください');return;}
  var m=trainMembers.find(function(x){return x.id===editTaskCtx.memberId;});
  if(!m)return;
  var d={name:name,detail:document.getElementById('et-detail').value,owner:document.getElementById('et-owner').value,done:false};
  if(editTaskCtx.taskId){
    var t=m.tasks[editTaskCtx.phase].find(function(x){return x.id===editTaskCtx.taskId;});
    if(t){t.name=d.name;t.detail=d.detail;t.owner=d.owner;}
  } else {
    d.id='t'+Date.now();
    m.tasks[editTaskCtx.phase].push(d);
  }
  document.getElementById('modal-etask').classList.remove('open');
  render('training');
}
// 内定者追加・編集
var editMemberId=null;
function openAddMemberModal(){
  editMemberId=null;
  document.getElementById('nm-name').value='';
  document.getElementById('nm-date').value='';
  document.getElementById('nm-role').value='';
  document.getElementById('nm-ttl').textContent='内定者を追加';
  var cpLabel=document.getElementById('nm-copy-label'); if(cpLabel) cpLabel.style.display='flex';
  document.getElementById('nm-copy').value=trainMembers.length?trainMembers[0].id:'none';
  // コピー元セレクト更新
  var sel=document.getElementById('nm-copy');
  sel.innerHTML='<option value="none">テンプレートから新規作成</option>';
  trainMembers.forEach(function(m){sel.innerHTML+='<option value="'+m.id+'">'+m.name+' さんからコピー</option>';});
  document.getElementById('modal-member').classList.add('open');
}
function openEditMemberModal(id){
  var m=trainMembers.find(function(x){return x.id===id;});if(!m)return;
  editMemberId=id;
  document.getElementById('nm-name').value=m.name;
  document.getElementById('nm-date').value=m.joinDate||'';
  document.getElementById('nm-role').value=m.role||'';
  document.getElementById('nm-ttl').textContent='内定者情報を編集';
  document.getElementById('nm-copy-label').style.display='none';
  document.getElementById('modal-member').classList.add('open');
}
function saveMember(){
  var name=document.getElementById('nm-name').value.trim();
  if(!name){alert('名前を入力してください');return;}
  if(editMemberId){
    var m=trainMembers.find(function(x){return x.id===editMemberId;});
    if(m){m.name=name;m.joinDate=document.getElementById('nm-date').value;m.role=document.getElementById('nm-role').value;}
  } else {
    var copyFrom=document.getElementById('nm-copy').value;
    var newTasks;
    if(copyFrom!=='none'){
      var src=trainMembers.find(function(x){return x.id===copyFrom;});
      if(src){
        // タスクをコピー（完了状態はリセット）
        newTasks={pre:[],day1:[],monthly:[]};
        ['pre','day1','monthly'].forEach(function(ph){
          src.tasks[ph].forEach(function(t){newTasks[ph].push({id:t.id+'_'+Date.now(),name:t.name,detail:t.detail,owner:t.owner,done:false});});
        });
      }
    }
    var m2={id:'m'+nxtMemberId++,name:name,joinDate:document.getElementById('nm-date').value,role:document.getElementById('nm-role').value,tasks:newTasks||deepCopyTasks()};
    trainMembers.push(m2);
    curTrainMemberId=m2.id;
  }
  document.getElementById('modal-member').classList.remove('open');
  render('training');
}

// mvTask/addTask は toggleTask/showTrainPhaseに統合

function updateKaId(name){
  const a=apps.find(x=>x.name===name);
  if(a) document.getElementById('ka').value=a.id;
}

// ===== 研修フロー: 内定者管理 =====
var trainMembers=[];  // [{id, name, joinDate, tasks:{pre:[...], day1:[...], monthly:[...]}}]
var curTrainMemberId=null;
var nxtMemberId=1;

function deepCopyTasks(){
  var obj={pre:[],day1:[],monthly:[]};
  ['pre','day1','monthly'].forEach(function(ph){
    taskTemplates[ph].forEach(function(t){
      obj[ph].push({id:t.id,name:t.name,detail:t.detail,owner:t.owner,done:false});
    });
  });
  return obj;
}
function addTrainMember(name, joinDate){
  var m={id:'m'+nxtMemberId++,name:name,joinDate:joinDate||'',tasks:deepCopyTasks()};
  trainMembers.push(m);
  curTrainMemberId=m.id;
  return m;
}
function getCurMember(){
  return trainMembers.find(function(m){return m.id===curTrainMemberId;})||null;
}
// ===== INIT =====
document.addEventListener('click',e=>{
  if(e.target===document.getElementById('ma'))cm('ma');
  if(e.target===document.getElementById('mk'))cm('mk');
  if(e.target===document.getElementById('modal-job'))document.getElementById('modal-job').classList.remove('open');
  if(e.target===document.getElementById('modal-goal'))document.getElementById('modal-goal').classList.remove('open');
  if(e.target===document.getElementById('modal-tpl'))document.getElementById('modal-tpl').classList.remove('open');
  if(e.target===document.getElementById('modal-member'))document.getElementById('modal-member').classList.remove('open');
  if(e.target===document.getElementById('modal-etask'))document.getElementById('modal-etask').classList.remove('open');
  if(e.target===document.getElementById('modal-goal'))document.getElementById('modal-goal').classList.remove('open');
});
document.getElementById('fd').value=today();
document.addEventListener('click',function(e){if(e.target&&e.target.classList.contains('train-tab')){showTrainPhase(e.target.getAttribute('data-ph'));}});
go('dash');

// ===== 掲載原稿一覧 =====
var jobList=[
  {media:'HRハッカー',type:'正社員',job:'セールス',name:'伝統企業の未来共創クリエイティブプランナー',url:'https://hr-hacker.com/invision/job-offers/show/11134808',status:'掲載中',updated:'2025/12/06'},
  {media:'HRハッカー',type:'正社員',job:'セールス',name:'HRハッカー 総合職',url:'https://hr-hacker.com/invision/job-offers/show/11053662',status:'掲載中',updated:'2025/12/16'},
  {media:'HRハッカー',type:'正社員',job:'CS',name:'粋なチームの生き様を届けるライター・編集者',url:'https://hr-hacker.com/invision/job-offers/show/10334365',status:'掲載中',updated:'2026/01/09'},
  {media:'HRハッカー',type:'アルバイト',job:'事務',name:'求人制作・広告運用アシスタント',url:'https://hr-hacker.com/invision/job-offers/show/10774623',status:'掲載中',updated:'2025/12/06'},
  {media:'HRハッカー',type:'正社員',job:'新卒',name:'新卒27卒 100年先まで承継する粋なチームを育てる総合職',url:'https://hr-hacker.com/invision/job-offers/show/10985226',status:'掲載中',updated:'2025/12/06'},
  {media:'HRハッカー',type:'正社員',job:'新卒',name:'新卒26卒 100年先まで承継する粋なチームを育てる総合職',url:'https://hr-hacker.com/invision/job-offers/show/10383546',status:'非公開',updated:'2025/10/30'},
  {media:'Wantedly',type:'正社員',job:'セールス',name:'5年で地方新聞社20社と提携！伝統企業の未来共創クリエイティブプランナー',url:'https://www.wantedly.com/projects/2292833',status:'掲載中',updated:'2026/01/15'},
  {media:'Wantedly',type:'正社員',job:'CS',name:'粋なチームの生き様を届ける広報コンテンツを作ってみよう ライター・編集者',url:'https://www.wantedly.com/projects/2276679',status:'掲載中',updated:'2025/12/06'},
  {media:'Wantedly',type:'アルバイト',job:'事務',name:'広告運用サポート事務スタッフ 100億円より100年続く企業を目指す',url:'https://www.wantedly.com/projects/2185805',status:'掲載中',updated:'2025/12/06'},
  {media:'Wantedly',type:'正社員',job:'新卒',name:'2027年卒 100年先まで承継する粋なチームを育てる HR企業・総合職',url:'https://www.wantedly.com/projects/392642',status:'掲載中',updated:'2025/12/06'},
  {media:'エアワーク',type:'正社員',job:'新卒',name:'【正社員】新卒27卒 100年先まで承継する粋なチームを育てる総合職',url:'https://ats.rct.airwork.net/job_offers/8838330/edit_preview',status:'掲載中',updated:'2025/10/28'},
  {media:'マイナビ',type:'インターン',job:'インターン',name:'粋なチームの価値を継承する新規メディア企画・運営',url:'https://job.mynavi.jp/27/',status:'非公開',updated:'2025/06/06'},
  {media:'その他',type:'正社員',job:'新卒',name:'大切なのは志と本質的な人のつながり「仕事って面白いぞ」を伝えていきます。',url:'https://corp.uc.career-tasu.jp/',status:'掲載中',updated:'2025/06/06'}
];
var _editJobIdx=null;

function rJobs(c,ta){
  ta.innerHTML='<button class="btn btn-p" onclick="openJobModal()">+ 原稿を追加</button>';
  var mColors={HRハッカー:'p-hr',Wantedly:'p-wa',エアワーク:'p-tl',マイナビ:'p-gr','その他':'p-gy'};
  var jColors={セールス:'p-bl',CS:'p-tl',事務:'p-am',新卒:'p-gr',インターン:'p-gy'};
  var medias=['HRハッカー','Wantedly','エアワーク','Indeed','マイナビ','その他'];
  var active=0;for(var i=0;i<jobList.length;i++){if(jobList[i].status==='掲載中')active++;}
  var rows='';
  medias.forEach(function(med){
    var jbs=[];for(var i=0;i<jobList.length;i++){if(jobList[i].media===med)jbs.push({j:jobList[i],idx:i});}
    if(!jbs.length)return;
    rows+='<div style="margin-bottom:20px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">';
    rows+='<span class="p '+(mColors[med]||'p-gy')+'" style="font-size:12px;padding:3px 12px">'+med+'</span>';
    rows+='<span style="font-size:12px;color:var(--tx3)">'+jbs.length+'件</span></div>';
    rows+='<div class="tw"><table><thead><tr><th>雇用形態</th><th>職種</th><th>原稿タイトル</th><th>状態</th><th>更新日</th><th></th></tr></thead><tbody>';
    jbs.forEach(function(item){
      var j=item.j,idx=item.idx;
      rows+='<tr><td style="font-size:11px;white-space:nowrap">'+j.type+'</td>';
      rows+='<td><span class="p '+(jColors[j.job]||'p-gy')+'" style="font-size:10px">'+j.job+'</span></td>';
      rows+='<td><a href="'+j.url+'" target="_blank" style="color:var(--blue);font-size:12px;text-decoration:none">'+j.name+'</a></td>';
      rows+='<td><span class="p '+(j.status==='掲載中'?'p-gr':'p-gy')+'">'+j.status+'</span></td>';
      rows+='<td style="font-size:11px;color:var(--tx3);white-space:nowrap">'+j.updated+'</td>';
      rows+='<td style="white-space:nowrap"><button class="btn btn-s btn-sm" onclick="editJobModal('+idx+')">編集</button> <button class="btn btn-s btn-sm" onclick="toggleJob('+idx+')">'+(j.status==='掲載中'?'非公開に':'掲載再開')+'</button></td></tr>';
    });
    rows+='</tbody></table></div></div>';
  });
  c.innerHTML='<div class="sg" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px">'+
    '<div class="sc"><div class="lbl">掲載中</div><div class="val" style="color:var(--green)">'+active+'</div><div class="sub">アクティブ原稿</div></div>'+
    '<div class="sc"><div class="lbl">非公開</div><div class="val" style="color:var(--tx3)">'+(jobList.length-active)+'</div><div class="sub">停止中</div></div>'+
    '<div class="sc"><div class="lbl">合計</div><div class="val">'+jobList.length+'</div><div class="sub">登録原稿数</div></div></div>'+rows;
}
function toggleJob(idx){if(jobList[idx])jobList[idx].status=jobList[idx].status==='掲載中'?'非公開':'掲載中';render('jobs');}
function openJobModal(){
  _editJobIdx=null;
  document.getElementById('jm-media').value='HRハッカー';
  document.getElementById('jm-type').value='正社員';
  document.getElementById('jm-job').value='セールス';
  document.getElementById('jm-name').value='';
  document.getElementById('jm-url').value='';
  document.getElementById('jm-status').value='掲載中';
  document.getElementById('jm-updated').value=today();
  document.getElementById('jm-ttl').textContent='原稿を追加';
  document.getElementById('modal-job').classList.add('open');
}
function editJobModal(idx){
  _editJobIdx=idx;var j=jobList[idx];
  document.getElementById('jm-media').value=j.media;
  document.getElementById('jm-type').value=j.type;
  document.getElementById('jm-job').value=j.job;
  document.getElementById('jm-name').value=j.name;
  document.getElementById('jm-url').value=j.url;
  document.getElementById('jm-status').value=j.status;
  document.getElementById('jm-updated').value=j.updated.replace(/\//g,'-');
  document.getElementById('jm-ttl').textContent='原稿を編集';
  document.getElementById('modal-job').classList.add('open');
}
function saveJob(){
  var d={media:document.getElementById('jm-media').value,type:document.getElementById('jm-type').value,job:document.getElementById('jm-job').value,name:document.getElementById('jm-name').value,url:document.getElementById('jm-url').value,status:document.getElementById('jm-status').value,updated:document.getElementById('jm-updated').value.replace(/-/g,'/')};
  if(!d.name){alert('タイトルを入力してください');return;}
  if(_editJobIdx!==null){jobList[_editJobIdx]=d;}else{jobList.push(d);}
  document.getElementById('modal-job').classList.remove('open');render('jobs');
}




// ===== 予実管理 (刷新版) =====
var kpiRange={from:'',to:''};
var kpiCostFilter={from:'',to:'',_showAll:false};
var spFilter={src:'',job:'',from:'',to:'',activeOnly:false};
function rKpi(c,ta){
  ta.innerHTML='<button class="btn btn-s btn-sm" onclick="openGoalModal()">目標を編集</button>';
  var now=new Date(),nM=now.getMonth(),nY=now.getFullYear();
  var fM=apps.filter(function(a){var d=new Date(a.date);return d.getMonth()===nM&&d.getFullYear()===nY;});
  var ws=new Date(now);ws.setDate(now.getDate()-now.getDay()+1);ws.setHours(0,0,0,0);
  var fW=apps.filter(function(a){return new Date(a.date)>=ws;});
  var mItv=fM.filter(function(a){return a.s3&&a.s3!=='書類選考依頼済み'&&a.s3!=='連絡済み';}).length;
  var mths=[];for(var i=5;i>=0;i--){var d2=new Date(nY,nM-i,1);mths.push({lbl:(d2.getMonth()+1)+'月',y:d2.getFullYear(),m:d2.getMonth()});}
  var trend=mths.map(function(mn){return apps.filter(function(a){var d3=new Date(a.date);return d3.getMonth()===mn.m&&d3.getFullYear()===mn.y;}).length;});
  var maxT=Math.max.apply(null,trend.concat([1]));
  function pct(v,g2){return Math.min(Math.round(v/g2*100),100);}
  function bar(v,g2,col){return '<div style="background:var(--sf2);border-radius:20px;height:8px;overflow:hidden;margin-top:4px"><div style="background:'+col+';height:8px;width:'+pct(v,g2)+'%;border-radius:20px"></div></div>';}
  var rfrom=kpiRange.from,rto=kpiRange.to;
  var fR=apps.slice();
  if(rfrom)fR=fR.filter(function(a){return a.date>=rfrom;});
  if(rto)fR=fR.filter(function(a){return a.date<=rto;});
  var jobs2=['セールス','CS','事務','新卒','インターン'];
  var jRows='';jobs2.forEach(function(j){
    var cnt=fR.filter(function(a){return a.job===j;}).length;
    var w=fR.length?Math.round(cnt/fR.length*100):0;
    jRows+='<tr><td style="font-size:12px;padding:7px 10px">'+j+'</td><td style="padding:7px 10px;font-size:12px;font-weight:500">'+cnt+'名</td><td style="padding:7px 10px"><div style="background:var(--sf2);border-radius:20px;height:14px;overflow:hidden;min-width:60px"><div style="background:var(--blue-bg);height:14px;width:'+w+'%"></div></div></td></tr>';
  });
  var tBars='';trend.forEach(function(v,i){tBars+='<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px"><div style="font-size:10px;color:var(--tx3)">'+v+'</div><div style="width:100%;background:'+(i===5?'var(--blue)':'var(--blue-bg)')+';border-radius:4px 4px 0 0;height:'+(v?Math.max(Math.round(v/maxT*64),8):2)+'px"></div><div style="font-size:10px;color:var(--tx3)">'+mths[i].lbl+'</div></div>';});
  var jobMonthRows='';var mJobMap={};
  fM.forEach(function(a){mJobMap[a.job]=(mJobMap[a.job]||0)+1;});
  jobs2.forEach(function(j){var cnt=mJobMap[j]||0;if(cnt)jobMonthRows+='<tr><td style="font-size:12px;padding:6px 10px">'+j+'</td><td style="font-size:12px;padding:6px 10px;font-weight:500">'+cnt+'名</td></tr>';});
  c.innerHTML=
    '<div style="display:flex;gap:10px;margin-bottom:20px">'
    +'<div class="sc" style="flex:1"><div class="lbl">今月の応募数</div><div class="val">'+fM.length+'<span style="font-size:13px;color:var(--tx3)"> / '+kpiG.ma+'</span></div>'+bar(fM.length,kpiG.ma,'var(--blue)')+'<div class="sub">'+pct(fM.length,kpiG.ma)+'% 達成</div></div>'
    +'<div class="sc" style="flex:1"><div class="lbl">今月の一次面談数</div><div class="val">'+mItv+'<span style="font-size:13px;color:var(--tx3)"> / '+kpiG.mi+'</span></div>'+bar(mItv,kpiG.mi,'var(--teal)')+'<div class="sub">'+pct(mItv,kpiG.mi)+'% 達成</div></div>'
    +'<div class="sc" style="flex:1"><div class="lbl">今週の応募数</div><div class="val">'+fW.length+'</div><div class="sub">今週累計</div></div>'
    +'<div class="sc" style="flex:1"><div class="lbl">月次目標 (応募 / 面談)</div><div class="val" style="font-size:18px;margin-top:4px">'+kpiG.ma+' / '+kpiG.mi+'</div></div>'
    +'</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">'
    +'<div class="tw" style="padding:16px"><div style="font-size:13px;font-weight:700;margin-bottom:12px">応募数 — 過去6ヶ月推移</div><div style="display:flex;align-items:flex-end;gap:6px;height:90px">'+tBars+'</div></div>'
    +'<div class="tw" style="padding:16px"><div style="font-size:13px;font-weight:700;margin-bottom:12px">今月 — 職種別</div>'
    +(fM.length?'<table style="width:100%;border-collapse:collapse"><thead><tr><th style="font-size:10px;font-weight:700;color:var(--tx3);padding:4px 10px;border-bottom:1px solid var(--bd);text-align:left">職種</th><th style="font-size:10px;font-weight:700;color:var(--tx3);padding:4px 10px;border-bottom:1px solid var(--bd);text-align:left">応募数</th></tr></thead><tbody>'+jobMonthRows+'</tbody></table>':'<div style="color:var(--tx3);font-size:12px">今月のデータなし</div>')
    +'</div></div>'
    +'<div class="tw" style="padding:16px">'
    +'<div style="font-size:13px;font-weight:700;margin-bottom:12px">期間指定集計 — 職種別応募数</div>'
    +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">'
    +'<label style="font-size:12px;color:var(--tx3)">期間</label>'
    +'<input type="date" class="fi" id="kpi-from" value="'+rfrom+'" style="width:148px;padding:6px 10px">'
    +'<span style="color:var(--tx3)">〜</span>'
    +'<input type="date" class="fi" id="kpi-to" value="'+rto+'" style="width:148px;padding:6px 10px">'
    +'<button class="btn btn-p btn-sm" onclick="applyKR()">集計する</button>'
    +'<button class="btn btn-s btn-sm" onclick="clearKR()">クリア</button>'
    +'<span style="font-size:12px;color:var(--tx3)">合計: <strong style="color:var(--tx)">'+fR.length+'名</strong></span>'
    +'</div>'
    +'<table style="width:100%;border-collapse:collapse"><thead><tr>'
    +'<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:6px 10px;border-bottom:1px solid var(--bd);background:var(--sf2)">職種</th>'
    +'<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:6px 10px;border-bottom:1px solid var(--bd);background:var(--sf2)">応募数</th>'
    +'<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:6px 10px;border-bottom:1px solid var(--bd);background:var(--sf2)">割合</th>'
    +'</tr></thead><tbody>'+jRows+'</tbody></table>'
    +'</div>'
;
  // ===== 採用コスト・採用単価 セクション =====
  var costs=kpiG.costs||[];
  var totalAnnual=costs.reduce(function(s,mc){return s+(mc.monthly||[]).reduce(function(a,b){return a+b;},0);},0);
  // 期間フィルター
  var _cf=kpiCostFilter||{};
  var _cff=_cf.from||kpiG.fiscalFrom||'';
  var _cft=_cf.to||kpiG.fiscalTo||'';
  var costApps=apps.filter(function(a){
    if(_cff&&a.date<_cff)return false;
    if(_cft&&a.date>_cft)return false;
    return true;
  });
  // 実績累計コスト：期間内の月数 × 月額
  // 財政年度開始からの経過月数を計算（4月=0番目）
  function calcYTDCost(from, to, costList){
    if(!from||!to)return 0;
    // funnelHistoryの期間と一致する場合はtotalCostを返す
    var fh=(funnelHistory||[]).find(function(d){
      return d.totalCost&&d.dateFrom&&d.dateTo&&
             Math.abs(new Date(d.dateFrom)-new Date(from))<864e5*15&&
             Math.abs(new Date(d.dateTo)-new Date(to))<864e5*15;
    });
    if(fh)return fh.totalCost;
    // それ以外はmonthly配列からfilter fromを起点に計算
    var fiscal_start=new Date(from);
    var range_from=new Date(from);
    var range_to=new Date(to);
    var total=0;
    costList.forEach(function(mc){
      var monthly=mc.monthly||[];
      if(!monthly.length)return;
      for(var mi=0;mi<12;mi++){
        var mDate=new Date(fiscal_start.getFullYear(),fiscal_start.getMonth()+mi,1);
        if(mDate>=range_from&&mDate<=range_to)total+=(monthly[mi]||0);
      }
    });
    return total;
  }
  var totalYTD = calcYTDCost(_cff, _cft, costs);
  var totalHire=costApps.filter(function(a){return a.stage==='入社';}).length;
  var costPerHire=totalHire>0&&totalYTD>0?Math.round(totalYTD/totalHire):0;
  var costPerApp=costApps.length>0&&totalYTD>0?Math.round(totalYTD/costApps.length):0;
  var PRIMARY_MEDIA=['Wantedly','HRハッカー','Indeed'];
  var _costShowAll=kpiCostFilter._showAll||false;
  var costRows='';
  var costRowsExtra='';
  costs.forEach(function(mc){
    var srcApps=costApps.filter(function(a){return a.src===mc.name;}).length;
    var srcHire=costApps.filter(function(a){return a.src===mc.name&&a.stage==='入社';}).length;
    var annual=(mc.monthly||[]).reduce(function(a,b){return a+b;},0);
    var cpa=srcApps>0&&annual>0?Math.round(annual/srcApps):0;
    var cph=srcHire>0&&annual>0?Math.round(annual/srcHire):0;
    var row='<tr>'
      +'<td style="padding:8px 12px"><span style="font-size:12px;font-weight:600;color:var(--blue)">'+mc.name+'</span></td>'
      +'<td style="padding:8px 12px;color:var(--tx2);font-size:12px">'+(mc.fee?'¥'+mc.fee.toLocaleString():'—')+'</td>'
      +'<td style="padding:8px 12px;color:var(--tx2);font-size:12px">'+(annual?'¥'+annual.toLocaleString():'—')+'</td>'
      +'<td style="padding:8px 12px;font-size:12px">'+srcApps+'名</td>'
      +'<td style="padding:8px 12px;font-size:12px">'+srcHire+'名</td>'
      +'<td style="padding:8px 12px;font-size:12px">'+(cpa?'¥'+cpa.toLocaleString():'—')+'</td>'
      +'<td style="padding:8px 12px;font-size:12px">'+(cph?'¥'+cph.toLocaleString():'—')+'</td>'
      +'<td style="padding:8px 12px;display:flex;gap:4px"><button class="btn btn-s btn-sm cost-edit-btn" data-name="'+mc.name+'" style="font-size:10px">編集</button><button class="btn btn-s btn-sm cost-del-btn" data-name="'+mc.name+'" style="font-size:10px;color:var(--red)">✕</button></td>'
      +'</tr>';
    if(PRIMARY_MEDIA.indexOf(mc.name)>=0)costRows+=row;
    else costRowsExtra+=row;
  });
  var extraCount=costs.filter(function(mc){return PRIMARY_MEDIA.indexOf(mc.name)<0;}).length;
  c.innerHTML+=
    '<div class="tw" style="padding:16px;margin-top:20px">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:14px">'    +'<div style="font-size:13px;font-weight:700">採用コスト・採用単価（年間）</div>'    +'<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">'    +'<span style="font-size:11px;color:var(--tx3)">📅 期間</span>'    +'<input type="date" id="cost-filter-from" value="'+(_cff||'')+'" class="fi" style="font-size:11px;padding:4px 6px;width:130px">'    +'<span style="font-size:11px;color:var(--tx3)">〜</span>'    +'<input type="date" id="cost-filter-to" value="'+(_cft||'')+'" class="fi" style="font-size:11px;padding:4px 6px;width:130px">'    +'<button id="cost-filter-btn" class="btn btn-p btn-sm" style="font-size:11px">絞り込む</button>'    +(_cff&&_cft?'<button id="cost-filter-reset" class="btn btn-s btn-sm" style="font-size:11px;color:var(--red)">✕</button>':'')    +'<button id="cost-add-btn" class="btn btn-s btn-sm">+ 媒体を追加</button>'    +'</div>'    +'</div>'
    // サマリーカード
    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:16px">'
    +'<div class="sc"><div class="lbl">実績累計コスト</div><div class="val" style="font-size:20px">'+(totalYTD?'¥'+totalYTD.toLocaleString():'¥—')+'</div><div class="sub" style="font-size:10px">年間予算 ¥'+totalAnnual.toLocaleString()+'</div></div>'
    +'<div class="sc"><div class="lbl">採用単価</div><div class="val" style="font-size:20px">'+(costPerHire?'¥'+costPerHire.toLocaleString():'<span style="color:var(--tx3)">—</span>')+'</div><div class="sub">採用'+totalHire+'名</div></div>'
    +'<div class="sc"><div class="lbl">応募単価</div><div class="val" style="font-size:20px;color:var(--teal)">'+(costPerApp?'¥'+costPerApp.toLocaleString():'<span style="color:var(--tx3)">—</span>')+'</div><div class="sub">応募'+apps.length+'名</div></div>'
    +'</div>'
    // 媒体テーブル
    +'<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">'
    +'<thead><tr style="border-bottom:2px solid var(--bd)">'
    +'<th style="text-align:left;padding:6px 12px;font-size:11px;color:var(--tx3);font-weight:600">媒体</th>'
    +'<th style="text-align:left;padding:6px 12px;font-size:11px;color:var(--tx3);font-weight:600">月額費用</th>'
    +'<th style="text-align:left;padding:6px 12px;font-size:11px;color:var(--tx3);font-weight:600">年間費用</th>'
    +'<th style="text-align:left;padding:6px 12px;font-size:11px;color:var(--tx3);font-weight:600">応募数</th>'
    +'<th style="text-align:left;padding:6px 12px;font-size:11px;color:var(--tx3);font-weight:600">採用数</th>'
    +'<th style="text-align:left;padding:6px 12px;font-size:11px;color:var(--tx3);font-weight:600">応募単価</th>'
    +'<th style="text-align:left;padding:6px 12px;font-size:11px;color:var(--tx3);font-weight:600">採用単価</th>'
    +'<th></th>'
    +'</tr></thead>'
    +'<tbody>'+costRows
    +(extraCount>0?'<tr><td colspan="8" id="cost-toggle-cell" style="padding:8px 14px;cursor:pointer;color:var(--blue);font-size:12px;border-top:1px dashed var(--bd2);user-select:none">'
      +(_costShowAll?'▲ 折りたたむ':'▼ 他 '+extraCount+' 媒体を表示')+'</td></tr>':'')
    +(_costShowAll?costRowsExtra:'')
    +'</tbody>'
    +'</table></div>'
    +'</div>'
    +'<div class="tw" style="padding:16px;margin-top:20px">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">'
    +'<div style="font-size:13px;font-weight:700">採用ファンネル — 年度別推移</div>'
    +'<button id="funnel-add-btn" class="btn btn-s btn-sm">+ 年度を追加</button>'
    +'</div>'
    +'<div id="funnel-chart-area"></div>'
    +'</div>';
  // イベントバインド
  document.getElementById('funnel-add-btn').addEventListener('click',function(){openFunnelEdit();});
  var _cfBtn=document.getElementById('cost-filter-btn');
  if(_cfBtn)_cfBtn.addEventListener('click',function(){
    kpiCostFilter.from=document.getElementById('cost-filter-from').value;
    kpiCostFilter.to=document.getElementById('cost-filter-to').value;
    render('kpi');
  });
  var _cfReset=document.getElementById('cost-filter-reset');
  if(_cfReset)_cfReset.addEventListener('click',function(){
    kpiCostFilter={from:'',to:''};render('kpi');
  });
  document.getElementById('cost-add-btn').addEventListener('click',function(){
    var n=prompt('追加する媒体名を入力してください:');
    if(!n||!n.trim())return;
    if(kpiG.costs.find(function(x){return x.name===n.trim();})){alert('同じ名前の媒体が既に存在します');return;}
    kpiG.costs.push({name:n.trim(),fee:0});render('kpi');
  });
  document.querySelectorAll('.cost-edit-btn').forEach(function(b){
    b.addEventListener('click',function(){openCostEdit(this.getAttribute('data-name'));});
  });
  // 削除ボタン
  document.querySelectorAll('.cost-del-btn').forEach(function(b){
    b.addEventListener('click',function(){
      var name=this.getAttribute('data-name');
      if(!confirm(name+' を削除しますか？'))return;
      kpiG.costs=kpiG.costs.filter(function(x){return x.name!==name;});
      render('kpi');
    });
  });
  // 折りたたみトグル
  var _toggleCell=document.getElementById('cost-toggle-cell');
  if(_toggleCell)_toggleCell.addEventListener('click',function(){
    kpiCostFilter._showAll=!kpiCostFilter._showAll;
    render('kpi');
  });
  // ファンネルグラフ描画（年間総コストを自動連携）
  funnelHistory.forEach(function(d){if(!d.totalCost)d._autoTotalCost=totalAnnual;});
  var fc=document.getElementById('funnel-chart-area');
  if(fc)rFunnel(fc,totalAnnual);
}
function applyKR(){kpiRange.from=document.getElementById('kpi-from').value;kpiRange.to=document.getElementById('kpi-to').value;render('kpi');}
function clearKR(){kpiRange={from:'',to:''};render('kpi');}
function openGoalModal(){
  // fiscalFromをYYYY-MM-DD形式で設定（kpiGに保存されている値）
  document.getElementById('gm-from').value=kpiG.fiscalFrom||'2026-04-01';
  document.getElementById('gm-to').value=kpiG.fiscalTo||'2027-03-31';
  document.getElementById('gm-srcs').value=SRCS.join(',');
  document.getElementById('gm-jobs').value=JOBS.join(',');
  document.getElementById('gm-ma').value=kpiG.ma;
  document.getElementById('gm-mi').value=kpiG.mi;
  document.getElementById('modal-goal').classList.add('open');
}
function saveGoal(){
  kpiG.fiscalFrom=document.getElementById('gm-from').value;
  var newSrcs=document.getElementById('gm-srcs').value.split(',').map(function(s){return s.trim();}).filter(Boolean);
  if(newSrcs.length)SRCS=newSrcs;
  var newJobs=document.getElementById('gm-jobs').value.split(',').map(function(s){return s.trim();}).filter(Boolean);
  if(newJobs.length)JOBS=newJobs;
  kpiG.fiscalTo=document.getElementById('gm-to').value;
  kpiG.ma=parseInt(document.getElementById('gm-ma').value)||30;
  kpiG.mi=parseInt(document.getElementById('gm-mi').value)||15;
  document.getElementById('modal-goal').classList.remove('open');
  // 保存後は現在のページを再描画（ダッシュボードなら即反映）
  // localStorage に永続保存
  try {
    localStorage.setItem('invision_settings', JSON.stringify({
      fiscalFrom: kpiG.fiscalFrom,
      fiscalTo:   kpiG.fiscalTo,
      srcs: SRCS,
      jobs: JOBS,
      ma: kpiG.ma,
      mi: kpiG.mi,
      mg: kpiG.mg,
      mg_mi: kpiG.mg_mi
    }));
  } catch(e){}
  render(curV);
  setTimeout(function(){go('dash');},100);
}

// ===== テンプレート編集 =====
function openTplEdit(id){
  var t=TPLS.find(function(x){return x.id===id;});if(!t)return;
  document.getElementById('te-id').value=id;
  document.getElementById('te-name').value=t.name;
  document.getElementById('te-hint').value=t.hint;
  document.getElementById('te-subj').value=t.subj;
  document.getElementById('te-body').value=t.body;
  document.getElementById('te-tag').value=t.tag;
  document.getElementById('te-step').value=t.step;
  document.getElementById('modal-tpl').classList.add('open');
}
function saveTplEdit(){
  var id=document.getElementById('te-id').value;
  var t=TPLS.find(function(x){return x.id===id;});if(!t)return;
  t.name=document.getElementById('te-name').value;
  t.hint=document.getElementById('te-hint').value;
  t.subj=document.getElementById('te-subj').value;
  t.body=document.getElementById('te-body').value;
  t.tag=document.getElementById('te-tag').value;
  t.step=document.getElementById('te-step').value;
  document.getElementById('modal-tpl').classList.remove('open');
  render('emails');
}

// ===== お掛け合いシート一覧 (刷新版) =====
function rKakegai(c,ta){
  ta.innerHTML='<button class="btn btn-p" onclick="openK()">+ シートを作成</button><a href="https://docs.google.com/presentation/d/1Ao6K0geH1rBVYEYd05A0jX4kFJncRLE4lVfw4q5O6HE/edit?slide=id.g3ddfecdc086_0_0#slide=id.g3ddfecdc086_0_0" target="_blank" class="btn btn-s" style="margin-left:8px">📋 構造化面談 参考資料</a>';
  if(!sheets.length){
    c.innerHTML='<div class="shd"><div><div class="sttl">お掛け合いシート</div></div></div><div class="empty" style="padding:40px;border:1px dashed var(--bd2);border-radius:var(--rl)">シートがありません<br><span style="font-size:12px">「+ シートを作成」から追加してください</span></div>';
    return;
  }
  var act=sheets.filter(function(sh){var a=apps.find(function(x){return x.id===sh.aid;});return a&&!excl(a);});
  var excl2=sheets.filter(function(sh){var a=apps.find(function(x){return x.id===sh.aid;});return !a||excl(a);});
  function renderSh(sh,gray){
    var a=apps.find(function(x){return x.id===sh.aid;});if(!a)return'';
    var gst=gray?'opacity:.4':'';
    var r='<div class="ksheet" style="'+gst+'">';
    r+='<div class="ksec-hd" onclick="'+(!gray?'toggleK(\'k'+sh.id+'\')':'void(0)')+'">';
    r+='<div style="display:flex;align-items:center;gap:10px;flex:1">';
    r+='<div style="font-size:13px;font-weight:500">'+a.name+'</div>';
    r+='<div style="display:flex;gap:4px">';
    if(sh.t1r)r+=p('一次:'+sh.t1r,JC[sh.t1r]||'p-gy')+' ';
    if(sh.s1r)r+=p('二次:'+sh.s1r,JC[sh.s1r]||'p-gy')+' ';
    if(sh.y1r)r+=p('最終:'+sh.y1r,JC[sh.y1r]||'p-gy');
    r+='</div>';
    if(gray)r+='<span class="p p-gy" style="font-size:10px">選考終了</span>';
    r+='</div>';
    r+='<div style="display:flex;gap:6px;align-items:center">';
    if(!gray)r+='<button class="btn btn-s btn-sm" onclick="event.stopPropagation();editK('+sh.id+')">編集</button>';
    if(!gray)r+='<span class="chev" id="kchev'+sh.id+'">▼</span>';
    r+='</div></div>';
    if(!gray){
      r+='<div class="ksec-body" id="k'+sh.id+'" style="display:none">';
      // 👥 担当者別 合否判定（応募者情報の直後）
      r+='<div style="font-size:14px;font-weight:700;color:var(--tx);margin:14px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--bd2)">👥 担当者別 合否判定</div>';
      r+='<div class="judge-grid" style="margin-bottom:10px">';
      r+='<div class="judge-card"><div class="judge-name">一次面談</div><div class="judge-result">'+(sh.t1r?p(sh.t1r,JC[sh.t1r]||'p-gy'):'—')+'</div>'+(sh.t1f?'<div style="font-size:11px;color:var(--tx2);margin-top:4px">'+sh.t1f+'</div>':'')+'</div>';
      r+='<div class="judge-card"><div class="judge-name">二次面談</div><div class="judge-result">'+(sh.s1r?p(sh.s1r,JC[sh.s1r]||'p-gy'):'—')+'</div>'+(sh.s1f?'<div style="font-size:11px;color:var(--tx2);margin-top:4px">'+sh.s1f+'</div>':'')+'</div>';
      r+='<div class="judge-card"><div class="judge-name">最終面談</div><div class="judge-result">'+(sh.y1r?p(sh.y1r,JC[sh.y1r]||'p-gy'):'—')+'</div>'+(sh.y1f?'<div style="font-size:11px;color:var(--tx2);margin-top:4px">'+sh.y1f+'</div>':'')+'</div>';
      r+='</div>';
      if(sh.ki2)r+='<div style="margin-bottom:12px"><a href="'+sh.ki2+'" target="_blank" style="color:var(--blue);font-size:12px">🔗 提出書類フォルダを開く</a></div>';
      // 📋 STEP1 書類選考
      if(sh.kc1||sh.kc2||sh.kc3||sh.kc4||sh.ky){
        r+='<div style="font-size:14px;font-weight:700;color:var(--tx);margin:14px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--bd2)">📋 STEP1　書類選考</div>';
        if(sh.kc1)r+='<div class="kq"><div class="ql">応募前・応募後に見たコンテンツ</div><div class="qa">'+sh.kc1+'</div></div>';
        if(sh.kc2)r+='<div class="kq"><div class="ql">具体的に印象に残っている内容</div><div class="qa">'+sh.kc2+'</div></div>';
        if(sh.kc3)r+='<div class="kq"><div class="ql">インビジョンの印象・合いそうな部分</div><div class="qa">'+sh.kc3+'</div></div>';
        if(sh.kc4)r+='<div class="kq"><div class="ql">大切にしているキーワード（３つ）</div><div class="qa">'+sh.kc4+'</div></div>';
        if(sh.kc5)r+='<div class="kq"><div class="ql">心が動く「モノ・コト」</div><div class="qa">'+sh.kc5+'</div></div>';
        if(sh.ky)r+='<div class="kq"><div class="ql">【任意】職務経歴</div><div class="qa">'+sh.ky+'</div></div>';
      }
      if(sh.kq1||sh.kq2||sh.kq3||sh.kq8){
        r+='<div style="font-size:14px;font-weight:700;color:var(--tx);margin:14px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--bd2)">🍑 STEP2　一次面談</div>';
        if(sh.kq1)r+='<div class="kq"><div class="ql">職歴や具体的にやってきたこと</div><div class="qa">'+sh.kq1+'</div></div>';
        if(sh.kq2)r+='<div class="kq"><div class="ql">インビジョンを知ったきっかけ</div><div class="qa">'+sh.kq2+'</div></div>';
        if(sh.kq3)r+='<div class="kq"><div class="ql">刺さった原稿・コンテンツ</div><div class="qa">'+sh.kq3+'</div></div>';
        if(sh.kq8)r+='<div class="kq"><div class="ql">話してみて印象が変わったこと</div><div class="qa">'+sh.kq8+'</div></div>';
      }

      r+='</div>';
    }
    r+='</div>';
    return r;
  }
  var out='<div class="shd"><div><div class="sttl">お掛け合いシート</div><div class="ssub">選考中: '+act.length+'件 / 選考終了: '+excl2.length+'件</div></div><a href="https://docs.google.com/presentation/d/1Ao6K0geH1rBVYEYd05A0jX4kFJncRLE4lVfw4q5O6HE/edit?slide=id.g3ddfecdc086_0_0#slide=id.g3ddfecdc086_0_0" target="_blank" style="font-size:12px;color:var(--blue);display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border:1px solid var(--bd);border-radius:var(--r);text-decoration:none">📋 構造化面談 参考資料</a></div>';
  out+='<div style="display:flex;flex-direction:column;gap:8px">';
  if(act.length)out+=act.map(function(sh){return renderSh(sh,false);}).join('');
  else out+='<div style="color:var(--tx3);font-size:12px;padding:8px 0">選考中のシートはありません</div>';
  if(excl2.length){
    out+='<div class="div-lbl" style="margin-top:8px">選考終了（ミスマッチ・辞退・不合格）</div>';
    out+=excl2.map(function(sh){return renderSh(sh,true);}).join('');
  }
  out+='</div>';
  c.innerHTML=out;
}
function rFlow(c,ta){
  ta.innerHTML='<button class="btn btn-p btn-sm" onclick="openFlowAdd()">+ ステップを追加</button>';
  var s='<div class="shd"><div><div class="sttl">選考フロー</div><div class="ssub">ステップの追加・編集・削除が可能です</div></div></div>';
  s+='<div class="tw"><table style="width:100%;border-collapse:collapse"><thead><tr>';
  s+='<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:8px 14px;border-bottom:1px solid var(--bd);background:var(--sf2)">ステップ</th>';
  s+='<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:8px 14px;border-bottom:1px solid var(--bd);background:var(--sf2)">内容</th>';
  s+='<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:8px 14px;border-bottom:1px solid var(--bd);background:var(--sf2)">見極めポイント</th>';
  s+='<th style="font-size:10px;font-weight:700;color:var(--tx3);text-align:left;padding:8px 14px;border-bottom:1px solid var(--bd);background:var(--sf2)">担当</th>';
  s+='<th style="padding:8px 14px;border-bottom:1px solid var(--bd);background:var(--sf2)"></th>';
  s+='</tr></thead><tbody>';
  for(var i=0;i<flowSteps.length;i++){
    var st=flowSteps[i];
    s+='<tr>';
    s+='<td style="padding:12px 14px;vertical-align:top;white-space:nowrap">';
    s+='<div style="display:flex;align-items:center;gap:8px">';
    s+='<div style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:'+st.color+';color:'+st.tc+';font-size:11px;font-weight:700">'+st.no.replace('STEP ','')+' </div>';
    s+='<div><div style="font-size:13px;font-weight:700">'+st.name+'</div>';
    if(st.online)s+='<div style="font-size:10px;color:var(--tx3)">'+st.online+'</div>';
    s+='</div></div></td>';
    s+='<td style="font-size:12px;padding:12px 14px;color:var(--tx2);line-height:1.75;vertical-align:top;white-space:pre-line;max-width:220px">'+st.what+'</td>';
    s+='<td style="font-size:12px;padding:12px 14px;color:var(--tx2);line-height:1.75;vertical-align:top;white-space:pre-line;max-width:200px">'+st.judge+'</td>';
    s+='<td style="padding:12px 14px;vertical-align:top">'+(st.who?'<span class="p '+st.whoC+'">'+st.who+'</span>':'')+'</td>';
    s+='<td style="padding:12px 14px;vertical-align:top;text-align:right;white-space:nowrap">';
    s+='<button class="btn btn-s btn-sm" style="margin-right:4px" onclick="openFlowEdit('+i+')">✎ 編集</button>';
    s+='<button class="btn btn-s btn-sm" style="color:var(--red)" onclick="delFlowStep('+i+')">削除</button>';
    s+='</td></tr>';
  }
  s+='</tbody></table></div>';
  c.innerHTML=s;
}
function openFlowEdit(idx){
  if(!flowSteps||!flowSteps[idx])return;
  _editFlowIdx=idx;
  var s=flowSteps[idx];
  var el;
  el=document.getElementById('fe-no');if(el)el.value=s.no||'';
  el=document.getElementById('fe-name');if(el)el.value=s.name||'';
  el=document.getElementById('fe-online');if(el)el.value=s.online||'';
  el=document.getElementById('fe-what');if(el)el.value=s.what||'';
  el=document.getElementById('fe-judge');if(el)el.value=s.judge||'';
  el=document.getElementById('fe-who');if(el)el.value=s.who||'';
  el=document.getElementById('fe-ttl');if(el)el.textContent='ステップを編集';
  var mo=document.getElementById('modal-flow');if(mo)mo.classList.add('open');
}
function openFlowAdd(){
  _editFlowIdx=null;
  var el;
  el=document.getElementById('fe-no');if(el)el.value='STEP '+(flowSteps.length+1);
  el=document.getElementById('fe-name');if(el)el.value='';
  el=document.getElementById('fe-online');if(el)el.value='';
  el=document.getElementById('fe-what');if(el)el.value='';
  el=document.getElementById('fe-judge');if(el)el.value='';
  el=document.getElementById('fe-who');if(el)el.value='';
  el=document.getElementById('fe-ttl');if(el)el.textContent='ステップを追加';
  var mo=document.getElementById('modal-flow');if(mo)mo.classList.add('open');
}
function saveFlowStep(){
  var name=document.getElementById('fe-name').value.trim();
  if(!name){alert('ステップ名を入力してください');return;}
  var d={
    no:document.getElementById('fe-no').value.trim(),
    name:name,
    online:document.getElementById('fe-online').value.trim(),
    what:document.getElementById('fe-what').value,
    judge:document.getElementById('fe-judge').value,
    who:document.getElementById('fe-who').value.trim(),
    color:'#eaf3de',tc:'#3B6D11',whoC:'p-tl'
  };
  if(_editFlowIdx!==null){flowSteps[_editFlowIdx]=d;}
  else{flowSteps.push(d);}
  document.getElementById('modal-flow').classList.remove('open');
  render('flow');
}
function delFlowStep(idx){
  if(!confirm('このステップを削除しますか？'))return;
  flowSteps.splice(idx,1);
  render('flow');
}

function rJobs(c,ta){
  ta.innerHTML='<button class="btn btn-p" onclick="openJobModal()">+ 原稿を追加</button>';
  var mColors={HRハッカー:'p-hr',Wantedly:'p-wa',エアワーク:'p-tl',マイナビ:'p-gr','その他':'p-gy'};
  var jColors={セールス:'p-bl',CS:'p-tl',事務:'p-am',新卒:'p-gr',インターン:'p-gy'};
  var medias=['HRハッカー','Wantedly','エアワーク','Indeed','マイナビ','その他'];
  var active=0;for(var i=0;i<jobList.length;i++){if(jobList[i].status==='掲載中')active++;}
  var rows='';
  medias.forEach(function(med){
    var jbs=[];for(var i=0;i<jobList.length;i++){if(jobList[i].media===med)jbs.push({j:jobList[i],idx:i});}
    if(!jbs.length)return;
    rows+='<div style="margin-bottom:20px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">';
    rows+='<span class="p '+(mColors[med]||'p-gy')+'" style="font-size:12px;padding:3px 12px">'+med+'</span>';
    rows+='<span style="font-size:12px;color:var(--tx3)">'+jbs.length+'件</span></div>';
    rows+='<div class="tw"><table><thead><tr><th>雇用形態</th><th>職種</th><th>原稿タイトル</th><th>状態</th><th>更新日</th><th></th></tr></thead><tbody>';
    jbs.forEach(function(item){
      var j=item.j,idx=item.idx;
      rows+='<tr><td style="font-size:11px;white-space:nowrap">'+j.type+'</td>';
      rows+='<td><span class="p '+(jColors[j.job]||'p-gy')+'" style="font-size:10px">'+j.job+'</span></td>';
      rows+='<td><a href="'+j.url+'" target="_blank" style="color:var(--blue);font-size:12px;text-decoration:none">'+j.name+'</a></td>';
      rows+='<td><span class="p '+(j.status==='掲載中'?'p-gr':'p-gy')+'">'+j.status+'</span></td>';
      rows+='<td style="font-size:11px;color:var(--tx3);white-space:nowrap">'+j.updated+'</td>';
      rows+='<td style="white-space:nowrap"><button class="btn btn-s btn-sm" onclick="editJobModal('+idx+')">編集</button> <button class="btn btn-s btn-sm" onclick="toggleJob('+idx+')">'+(j.status==='掲載中'?'非公開に':'掲載再開')+'</button></td></tr>';
    });
    rows+='</tbody></table></div></div>';
  });
  c.innerHTML='<div class="sg" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px">'+
    '<div class="sc"><div class="lbl">掲載中</div><div class="val" style="color:var(--green)">'+active+'</div><div class="sub">アクティブ原稿</div></div>'+
    '<div class="sc"><div class="lbl">非公開</div><div class="val" style="color:var(--tx3)">'+(jobList.length-active)+'</div><div class="sub">停止中</div></div>'+
    '<div class="sc"><div class="lbl">合計</div><div class="val">'+jobList.length+'</div><div class="sub">登録原稿数</div></div></div>'+rows;
}
function toggleJob(idx){if(jobList[idx])jobList[idx].status=jobList[idx].status==='掲載中'?'非公開':'掲載中';render('jobs');}
function openJobModal(){
  _editJobIdx=null;
  document.getElementById('jm-media').value='HRハッカー';
  document.getElementById('jm-type').value='正社員';
  document.getElementById('jm-job').value='セールス';
  document.getElementById('jm-name').value='';
  document.getElementById('jm-url').value='';
  document.getElementById('jm-status').value='掲載中';
  document.getElementById('jm-updated').value=today();
  document.getElementById('jm-ttl').textContent='原稿を追加';
  document.getElementById('modal-job').classList.add('open');
}
function editJobModal(idx){
  _editJobIdx=idx;var j=jobList[idx];
  document.getElementById('jm-media').value=j.media;
  document.getElementById('jm-type').value=j.type;
  document.getElementById('jm-job').value=j.job;
  document.getElementById('jm-name').value=j.name;
  document.getElementById('jm-url').value=j.url;
  document.getElementById('jm-status').value=j.status;
  document.getElementById('jm-updated').value=j.updated.replace(/\//g,'-');
  document.getElementById('jm-ttl').textContent='原稿を編集';
  document.getElementById('modal-job').classList.add('open');
}
function saveJob(){
  var d={media:document.getElementById('jm-media').value,type:document.getElementById('jm-type').value,job:document.getElementById('jm-job').value,name:document.getElementById('jm-name').value,url:document.getElementById('jm-url').value,status:document.getElementById('jm-status').value,updated:document.getElementById('jm-updated').value.replace(/-/g,'/')};
  if(!d.name){alert('タイトルを入力してください');return;}
  if(_editJobIdx!==null){jobList[_editJobIdx]=d;}else{jobList.push(d);}
  document.getElementById('modal-job').classList.remove('open');render('jobs');
}




// ===== 予実管理 (刷新版) =====
var SRCS=['Indeed','Wantedly','エアワーク','HRハッカー','Offerbox','Infra','YOUTRUST','その他'];
var JOBS=['セールス','CS','事務','新卒','ライター','エンジニア'];
var kpiG={ma:30,mi:15,ya:10,fiscalFrom:'2026-04-01',fiscalTo:'2027-03-31',mg:[30,30,30,30,30,30,30,30,30,30,30,30],mg_mi:[15,15,15,15,15,15,15,15,15,15,15,15],costs:[
    {name:'Wantedly',     fee:49500,  monthly:[49500,49500,49500,49500,49500,49500,49500,49500,49500,49500,49500,49500]},
    {name:'HRハッカー',   fee:0,      monthly:[0,0,0,0,0,0,0,0,0,0,0,0]},
    {name:'Indeed',       fee:0,      monthly:[0,0,100000,204107,316722,0,0,0,0,0,0,0]},
    {name:'YOUTRUST',     fee:50000,  monthly:[50000,50000,0,0,0,0,0,0,0,0,0,0]},
    {name:'エアワーク',   fee:0,      monthly:[0,0,0,0,0,0,210000,0,0,0,0,0]},
    {name:'マイナビ',     fee:0,      monthly:[0,0,195000,0,0,0,0,0,0,0,0,0]},
    {name:'オファーボックス',fee:0,   monthly:[0,0,0,0,300000,0,0,0,0,0,0,0]},
    {name:'Infra',        fee:90000,  monthly:[0,0,0,0,0,0,90000,0,90000,0,0,0]},
  ]};


var kpiRange={from:kpiG.fiscalFrom||'',to:kpiG.fiscalTo||''};
var kpiCostFilter={from:'',to:'',_showAll:false};
var spFilter={src:'',job:'',from:'',to:'',activeOnly:false};
var SRCS=['Indeed','Wantedly','エアワーク','HRハッカー','Offerbox','Infra','YOUTRUST','その他'];
var JOBS=['セールス','CS','事務','新卒','ライター','エンジニア'];


function openCostEdit(name){
  var mc=(kpiG.costs||[]).find(function(x){return x.name===name;});if(!mc)return;
  // monthly配列がない場合は初期化
  if(!mc.monthly)mc.monthly=Array(12).fill(mc.fee||0);
  document.getElementById('cost-edit-name').textContent=name;
  document.getElementById('cost-edit-name-hidden').value=name;
  var months=['4月','5月','6月','7月','8月','9月','10月','11月','12月','1月','2月','3月'];
  var total=mc.monthly.reduce(function(a,b){return a+b;},0);
  months.forEach(function(m,i){
    var el=document.getElementById('ce-m'+i);
    if(el){el.value=mc.monthly[i]||0;}
  });
  updateCostTotal();
  document.getElementById('modal-cost-edit').classList.add('open');
}
function updateCostTotal(){
  var total=0;
  for(var i=0;i<12;i++){
    var el=document.getElementById('ce-m'+i);
    if(el)total+=parseInt(el.value)||0;
  }
  var el=document.getElementById('cost-edit-total');
  if(el)el.textContent='年間合計：¥'+total.toLocaleString();
}
function saveCostEdit(){
  var name=document.getElementById('cost-edit-name-hidden').value;
  var mc=(kpiG.costs||[]).find(function(x){return x.name===name;});if(!mc)return;
  mc.monthly=[];
  for(var i=0;i<12;i++){
    var el=document.getElementById('ce-m'+i);
    mc.monthly.push(el?parseInt(el.value)||0:0);
  }
  mc.fee=0;
  document.getElementById('modal-cost-edit').classList.remove('open');
  render('kpi');
}
function openCostAdd(){
  var n=prompt('媒体名を入力してください:');if(!n||!n.trim())return;
  var f=parseInt(prompt(n+' の月額費用（円）:','0'))||0;
  if(!kpiG.costs)kpiG.costs=[];
  kpiG.costs.push({name:n.trim(),fee:f});render('kpi');
}
function applyKR(){kpiRange.from=document.getElementById('kpi-from').value;kpiRange.to=document.getElementById('kpi-to').value;render('kpi');}
function clearKR(){kpiRange={from:'',to:''};render('kpi');}
function openGoalModal(){
  document.getElementById('gm-ya').value=kpiG.ya||10;
  var mg=kpiG.mg||[30,30,30,30,30,30,30,30,30,30,30,30];
  var mg_mi=kpiG.mg_mi||[15,15,15,15,15,15,15,15,15,15,15,15];
  for(var i=0;i<12;i++){
    var em=document.getElementById('gm-m'+i);if(em)em.value=mg[i]||30;
    var ei=document.getElementById('gi-m'+i);if(ei)ei.value=mg_mi[i]||15;
  }
  document.getElementById('modal-goal').classList.add('open');
}
function saveGoal(){
  kpiG.ya=parseInt(document.getElementById('gm-ya').value)||10;
  if(!kpiG.mg)kpiG.mg=[30,30,30,30,30,30,30,30,30,30,30,30];
  if(!kpiG.mg_mi)kpiG.mg_mi=[15,15,15,15,15,15,15,15,15,15,15,15];
  for(var i=0;i<12;i++){
    var em=document.getElementById('gm-m'+i);if(em)kpiG.mg[i]=parseInt(em.value)||30;
    var ei=document.getElementById('gi-m'+i);if(ei)kpiG.mg_mi[i]=parseInt(ei.value)||15;
  }
  var now=new Date(),nM=now.getMonth();
  var mIdx=nM>=3?nM-3:nM+9;
  kpiG.ma=kpiG.mg[mIdx]||30;
  kpiG.mi=kpiG.mg_mi[mIdx]||15;
  document.getElementById('modal-goal').classList.remove('open');
  // 保存後は現在のページを再描画（ダッシュボードなら即反映）
  // localStorage に永続保存
  try {
    localStorage.setItem('invision_settings', JSON.stringify({
      fiscalFrom: kpiG.fiscalFrom,
      fiscalTo:   kpiG.fiscalTo,
      srcs: SRCS,
      jobs: JOBS,
      ma: kpiG.ma,
      mi: kpiG.mi,
      mg: kpiG.mg,
      mg_mi: kpiG.mg_mi
    }));
  } catch(e){}
  render(curV);
  setTimeout(function(){go('dash');},100);
}


var TPLS=[
  {id:'t1',step:'1',name:'サンクスメール（書類選考フォームのご案内）',hint:'応募直後・全員へ',sBg:'#E6F1FB',sC:'#185FA5',tag:'全員',tagC:'p-bl',ok:true,
   subj:'（媒体のメッセージ機能 / 件名なし）',
   body:`初めまして^^\nインビジョン戦略人事の田野です。\nこちらの求人にご応募ありがとうございます！\n（求人名）\n（URL）\n\nつきましては書類選考をさせていただきたく、\n下記入力をお願いできますでしょうか？\nhttps://forms.gle/YKriGwrkChhbkCWD8\n\nフォーム入力完了しましたら、下記アドレスに終わりました旨、お知らせください。\nrecruit@invision-inc.jp\n通過者のみ１週間以内に日程のご連絡をさせていただきます。\n\n田野\n━━ インビジョンの人気コンテンツ  一覧 ━━\n　　https://www.invision-inc.jp/media/\n━━━━━━━━━━━━━━━━━━━━`},
  {id:'t1b',step:'1.5',name:'書類提出のお礼',hint:'履歴書・生き様グラフ受領後に送る',sBg:'#eaf3de',sC:'#3B6D11',tag:'書類受領後',tagC:'p-gr',ok:true,
   subj:'【インビジョン】書類のご提出ありがとうございます',
   body:`履歴書、生き様グラフのご提出ありがとうございました！\n確かに受け取りましたので、\nこちらをじっくり拝見し、選考させていただきます。\n\n本当にありがとうございます・・・！！\n\n合否につきましては１週間以内にメールにてお送りいたします。\nしばらくお待ちくださいませ。`},
  {id:'t2',step:'2',name:'一次面談のご案内',hint:'通過者のみ・日程候補を送る',sBg:'#eaf3de',sC:'#3B6D11',tag:'通過者のみ',tagC:'p-gr',ok:true,
   subj:'（媒体のメッセージ機能 / 件名なし）',
   body:`インビジョン戦略人事の田野です。\n先日は応募書類へのエントリーありがとうございました。\n⚫︎⚫︎さんが入力してくださった言葉に、込み上げる嬉しさを抑えながら読ませていただきました。\nぜひ面接に進んでいただきたいと思っていますが\n下記日程の中でご都合いかがでしょうか？\n（面談はオンラインで1時間となります）\n・\n・\n・\nこの日程以外でも再来週の平日でしたら調整可能ですので、\nお気軽におっしゃってくださいね。\nご返信お待ちしております！`},
  {id:'t25',step:'2.5',name:'面談日程確定のご連絡（Google Meet URL付き）',hint:'日程が決まったら送る',sBg:'#E6F1FB',sC:'#185FA5',tag:'日程確定後',tagC:'p-bl',ok:true,
   subj:'（媒体のメッセージ機能 / 件名なし）',
   body:`早速、日程のご連絡ありがとうございます。\n___________________________________________\n\nGoogleミーツのビデオ通話リンクを貼り付ける\n___________________________________________\n時間になりましたら上記URLにアクセスください。\nリラックスした中で仲良くなれればと思っていますので私服で大丈夫です。\nインビジョンのことで知りたいことがあれば何でも聞いてくださいね！\n【お願い】YouTubeのチャンネル登録お願いします...！！\nhttps://www.youtube.com/@invision625\nまた以下、面談前にチェックしていただければお話しスムーズかと思います。\n▶︎コーポレートサイト https://www.invision-inc.jp/\n▶︎採用サイト https://www.invision-inc.jp/recruit/\n▶︎メンバー紹介 https://www.invision-inc.jp/member/\n▶︎インビジョンBOOK https://speakerdeck.com/kantaarai/invision-book-2025\n→制作過程の裏話はこちら https://www.invision-inc.jp/column/20250729-invisionbook/`},
  {id:'t28',step:'朝',name:'面談当日リマインドメール',hint:'面談当日 朝8時に送信',sBg:'#e1f5ee',sC:'#0F6E56',tag:'当日朝',tagC:'p-tl',ok:true,reminder:true,
   subj:'（媒体のメッセージ機能 / 件名なし）',
   body:`お約束していた面談が本日でしたので、確認の連絡をさせていただきました。\nオンラインですので服装はいつも通りのリラックスした格好で大丈夫です！\n日程の変更、キャンセル以外はお返事不要です。\nお話しできることを楽しみにしております！`},
  {id:'t3',step:'3',name:'面談後お礼メール＆二次選考書類のご案内',hint:'一次面談後・選考希望の方のみ',sBg:'#E6F1FB',sC:'#185FA5',tag:'希望者のみ',tagC:'p-am',ok:true,
   subj:'（媒体のメッセージ機能 / 件名なし）',
   body:`本日は面談のために貴重なお時間をつくってくださり、ありがとうございました。\nインビジョンの理解は進みましたでしょうか？\nインビジョンでは、お互いに取り繕わずに腹を割る採用を大事にしておりまして\n⚫︎⚫︎さんのことをもっと深く知りたいので、下記2点のご提出をお願いいたします！\n________________________________________\n①生き様グラフ\nhttps://onl.sc/jyFkkTs\nこちらを参考に、A4サイズ1枚で表現してください。\n提出書類は「生き様グラフ_〇〇〇〇(フルネーム)」にし、PDFに変換をお願いします。\n②顔写真付履歴書\n______________________\nこれらを下記メールに添付いただいて書類選考とさせていただきます。\nrecruit@invision-inc.jp\n※インビジョン　戦略人事　安田宛でお願いします。\n【提出期限】本日より１週間以内とさせていただきます。\n履歴書をご提出するにあたってこちら大切な個人情報になりますので、\n取り扱いについてこちらをお読みいただき同意の有無をご選択お願いします。\nhttps://forms.gle/57XUJfWznGJpppW2A\nご提出後、１週間以内に必ずお返事いたします。\nご不明点がございましたらお気軽におっしゃってくださいね。\n楽しみにお待ちしております！\n田野`},
  {id:'t4',step:'4',name:'二次面談のご案内（取締役面談）',hint:'書類提出後・通過者のみ',sBg:'#eaf3de',sC:'#3B6D11',tag:'通過者のみ',tagC:'p-gr',ok:false,
   subj:'【インビジョン】二次面談（役員面談）のご案内',
   body:`お返事ありがとうございます。\n\nでは取締役の貞光との面接はオンラインでお願いします。\n________________________________________\n\nGoogleミーツのビデオ通話リンクを貼り付ける\n________________________________________\n時間になりましたら上記URLにアクセスください。\nオンラインですので服装はいつも通りのリラックスした格好で大丈夫ですよ！\n\n面談までお時間ありますので下記巡ってみて下さい。\n　↓　↓　↓　↓　↓　↓　↓　↓　↓\n━━ インビジョンの人気コンテンツ ━━\n【youtube 】公式チャンネル\nhttps://www.youtube.com/@invision625\n【音声配信】気まぐれ経営ドキュメンタリー\nhttps://www.invision-inc.jp/column/20251121-kimagure/\n【メディア 】むかしむかしのことじゃった\nhttps://www.invision-inc.jp/column/20251111-mukashimukashi_launch/\n【　書籍　】幻冬舎『弊社ダシ屋と申します』\nhttps://amzn.asia/d/7TrpwWi\n【インスタ】公式インスタ\nhttps://www.instagram.com/invision_inc/`},
  {id:'t5',step:'5',name:'選考通過と適性検査のご案内',hint:'二次面談通過者のみ',sBg:'#e1f5ee',sC:'#0F6E56',tag:'通過者のみ',tagC:'p-tl',ok:false,
   subj:'【インビジョン】適性検査受検のご案内',
   body:`先日は貞光との面談ありがとうございました。\n\n次回は最終面接となりまして、\n対面で代表の吉田に直接会っていただきたいです！\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n吉田紹介ページ→\nhttps://www.invision-inc.jp/our-dashi/_seigo-yoshida/\n\n【オフィス】\n東京都目黒区上目黒1丁目3−7 VORT代官山3階\n最寄駅：中目黒から徒歩３分\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n当日は手ぶらでいらしていただくのですが、事前に提出していただきたいレポートがあります。\n\nご存知の通り、インビジョンの志は「働く幸せを感じるかっこいい大人を増やす」です。\nそのためには己自身のアップデートが必須だと感じていているので人生レポート（※）をご提出いただきたいと思っています！\n\n※人生レポートとは？\nこれまでの人生を振り返り、自分自身に今必要なネクストアクションは何か教えてください。\n（ドキュメントやWord等で作成し、PDFに変換して提出ください）\n\n人生レポート（1000字以内)\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n提出先メールアドレス\n recruit@invision-inc.jp\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n※提出期限は面談日の前日まで\n\n下記日程のいずれかのご都合いかがでしょうか？\n・\n・\n・\nご希望の日程を連絡いただくタイミングでオンラインの適性検査のご案内もさせていただきますね。\n\nお返事お待ちしています！`},
  {id:'t6',step:'6',name:'最終面談・来社のご案内（代表）',hint:'適性検査通過者のみ',sBg:'#faeeda',sC:'#854F0B',tag:'通過者のみ',tagC:'p-am',ok:false,
   subj:'【インビジョン】最終面談（代表面談）のご案内',
   body:`お返事ありがとうございます。\n\nでは○月○日（○）00:00　オフィスでお待ちしています。\n___________________________________\n【オフィス】\n東京都目黒区上目黒1丁目3−7 VORT代官山3階\n最寄駅：中目黒から徒歩３分\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n当日、交通トラブル等で遅れる場合は遠慮なくオフィスにお電話ください。\n東京本社：03-5794-5433\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n【服装】\nリラックスできるいつも通りの格好で大丈夫です。\n（インビジョン社員はかなりカジュアルなので）\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n【持ち物】\n特にありません。前日までに人生レポートをご提出ください。\n前もって吉田に内容を共有させていただきます。\n___________________________________\nまた前回、面談前に適性検査を受講してほしいとお願いしたと思いますが、\n検査はIQ、EQテストの２種類になります。\n\nまずIQテストについては下記にアクセスください。\n制限時間が30分と決まっているので、得意な分野からなるべく多く解いてくださいね。\n１度始めるとやり直しができないので始める前に下記注意事項をお読み下さい。\n\n（IQテストURLをここに記載）\n\nそしてEQテストについてはこちらの問いに答えていただく形になります。\nhttps://forms.gle/siFEAFgemHhTQM6z5\n時間制限はありませんが目安は15分程度で終わる内容です。\n\nIQ、EQテストは吉田との面談前日までに完了いただき、\n受講が終わりましたらメールにて報告をいただければと思います。\nrecruit@invision-inc.jp\n\nよろしくお願いします。`},
  {id:'t7',step:'7',name:'内定通知・条件擦り合わせ面談のご案内',hint:'最終合格者のみ',sBg:'#eaf3de',sC:'#3B6D11',tag:'内定通知',tagC:'p-gr',ok:true,
   subj:'【インビジョン】内定のご通知と条件確認面談のご案内',
   body:`先日は吉田との最終面談にご来社くださりありがとうございました！\n全員一致で〇〇さんと働きたい！という結論に至りました。\n\nインビジョンを見つけてくれて、好きになってくれて、改めて本当にありがとうございます。\n\nつきましては、スタッフ名簿を作るにあたって、お手隙でかまわないので、welcome invisionシートに記載をお願いします。\nhttps://onl.sc/v6UB8i8\n入力後はメールにてご一報ください。\n\n労務関係の詳しい条件については取締役の貞光（さだみつ）と総務の日下（くさか）と一緒に条件面談ですり合わせをお願いできますでしょうか？\nオンラインで30分ほどお時間いただきたいです。\n\nどうぞよろしくお願いします。`},
  {id:'tA',step:'辞',name:'辞退受理メール',hint:'全ステージ共通',sBg:'#f2f0ea',sC:'#6b6860',tag:'辞退者へ',tagC:'p-gy',ok:true,
   subj:'【インビジョン】ご連絡いただきありがとうございます',
   body:`{{氏名}} 様\n\nご連絡いただきありがとうございます。\n\n今回一緒に働くという結果にはなりませんでしたが、\nこれも出会うべくして出会ったご縁だと思っています。\n\nこれからも、何らかの機会があれば、一つのつながりとして、\nインビジョンのことを思い出してもらえると嬉しいです。\n\nこれからの仕事、人生が、より幸せなものになりますよう。\nインビジョンを知り、少しでも好きになっていただき、\n本当にありがとうございました。\n\n田野\n━━━━━━━━━━━━━━━━━\nインビジョン 採用担当 / recruit@invision-inc.jp\n━━━━━━━━━━━━━━━━━`},
  {id:'tB',step:'否',name:'不採用通知メール',hint:'面談以降の不採用',sBg:'#fcebeb',sC:'#A32D2D',tag:'不採用者へ',tagC:'p-rd',ok:true,
   subj:'【インビジョン】選考結果のご連絡',
   body:`{{氏名}} 様\n\n先日はお時間をいただきありがとうございました。\n\n私たち人事の中でも話し合った結果、\n今回は、期待に添えないことになりました。\n\n今回一緒に働くという結果にはなりませんでしたが、\nこれも出会うべくして出会ったご縁だと思っています。\n\nこれからも、何らかの機会があれば、一つのつながりとして、\nインビジョンのことを思い出してもらえると嬉しいです。\n\nまた、詳細の選考理由につきましては開示を控えさせて\nいただいておりますので、併せてご了承ください。\n\nこれからの仕事、人生が、より幸せなものになりますよう。\nインビジョンを知り、少しでも好きになっていただき、\n本当にありがとうございました。\n\n田野\n━━━━━━━━━━━━━━━━━\nインビジョン 採用担当 / recruit@invision-inc.jp\n━━━━━━━━━━━━━━━━━`},
];
function rEmails(c,ta){
  c.innerHTML=`
  <div class="shd"><div><div class="sttl">メールテンプレート</div><div class="ssub">全12通 — クリックで展開・コピー</div></div></div>
  <div style="font-size:10px;
  c.querySelectorAll('[data-tpl-edit]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      openTplEdit(this.getAttribute('data-tpl-edit'));
    });
  });font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">選考フロー</div>
  <div class="el">${TPLS.filter(t=>t.id!=='tA'&&t.id!=='tB').map(eCard).join('')}</div>
  <div style="margin:16px 0 8px;font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.06em">辞退受理 / 不採用通知</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${TPLS.filter(t=>t.id==='tA'||t.id==='tB').map(eCard).join('')}</div>`;
  c.addEventListener('click',function(e){
    var btn=e.target.closest('[data-tpl-edit]');
    if(btn){e.stopPropagation();openTplEdit(btn.getAttribute('data-tpl-edit'));return;}
  });
}
function eCard(t){return `<div class="ec" id="ec${t.id}">
  <div class="ehd" onclick="toggleE('${t.id}')">
    <div class="estep" style="background:${t.sBg};color:${t.sC}">${t.step}</div>
    <div class="einfo"><div class="en">${t.name}</div><div class="eh">${t.hint}</div></div>
    <div style="display:flex;gap:5px;align-items:center">${p(t.tag,t.tagC)}
      <button class="btn btn-s btn-sm" style="margin-left:4px;font-size:11px;padding:3px 10px;border-color:var(--amber);color:var(--amber)" onclick="event.stopPropagation();openTplEdit('${t.id}')">✎ 編集</button>
    </div>
    <span class="chev" id="chev${t.id}">▼</span>
  </div>
  <div class="ebody" id="eb${t.id}">
    ${t.reminder?`<div class="rbox">⏰ 面談日プロパティに「当日 8:00」リマインド → 通知が届いたら送信</div>`:''}
    <div class="subj">件名：<span>${t.subj}</span></div>
    <div class="btext" id="bt${t.id}">${t.body}</div>
    <div class="cpr"><span class="vn">{{変数}}を実際の情報に差し替えて送信</span><button class="btn btn-s btn-sm" onclick="copyT('${t.id}')">📋 コピー</button></div>
  </div>
</div>`;}
function selectTrainMember(id){curTrainMemberId=id;render('training');}
function deleteTrainMember(id){
  if(!confirm('この内定者のシートを削除しますか？'))return;
  trainMembers=trainMembers.filter(function(m){return m.id!==id;});
  curTrainMemberId=trainMembers.length?trainMembers[0].id:null;
  render('training');
}
function showTrainPhase(key){
  ['pre','day1','monthly'].forEach(function(k){
    var el=document.getElementById('tph-'+k);if(el)el.style.display=k===key?'block':'none';
  });
  document.querySelectorAll('.train-tab').forEach(function(btn){
    btn.className='btn btn-'+(btn.getAttribute('data-ph')===key?'p':'s')+' btn-sm train-tab';
  });
}
function toggleTask(memberId,phase,taskId){
  var m=trainMembers.find(function(x){return x.id===memberId;});
  if(!m)return;
  var t=m.tasks[phase].find(function(x){return x.id===taskId;});
  if(t)t.done=!t.done;
  render('training');
}
function deleteTask(memberId,phase,taskId){
  var m=trainMembers.find(function(x){return x.id===memberId;});
  if(!m)return;
  if(!confirm('このタスクを削除しますか？'))return;
  m.tasks[phase]=m.tasks[phase].filter(function(t){return t.id!==taskId;});
  render('training');
}
// タスク追加・編集
var editTaskCtx={memberId:null,phase:null,taskId:null};
function openAddTaskModal(memberId,phase){
  editTaskCtx={memberId:memberId,phase:phase,taskId:null};
  document.getElementById('et-name').value='';
  document.getElementById('et-detail').value='';
  document.getElementById('et-owner').value='';
  document.getElementById('et-ttl').textContent='タスクを追加 — '+({pre:'入社前',day1:'入社日',monthly:'入社後'}[phase]);
  document.getElementById('modal-etask').classList.add('open');
}
function openEditTaskModal(memberId,phase,taskId){
  var m=trainMembers.find(function(x){return x.id===memberId;});
  if(!m)return;
  var t=m.tasks[phase].find(function(x){return x.id===taskId;});
  if(!t)return;
  editTaskCtx={memberId:memberId,phase:phase,taskId:taskId};
  document.getElementById('et-name').value=t.name;
  document.getElementById('et-detail').value=t.detail||'';
  document.getElementById('et-owner').value=t.owner||'';
  document.getElementById('et-ttl').textContent='タスクを編集';
  document.getElementById('modal-etask').classList.add('open');
}
function saveTask(){
  var name=document.getElementById('et-name').value.trim();
  if(!name){alert('タスク名を入力してください');return;}
  var m=trainMembers.find(function(x){return x.id===editTaskCtx.memberId;});
  if(!m)return;
  var d={name:name,detail:document.getElementById('et-detail').value,owner:document.getElementById('et-owner').value,done:false};
  if(editTaskCtx.taskId){
    var t=m.tasks[editTaskCtx.phase].find(function(x){return x.id===editTaskCtx.taskId;});
    if(t){t.name=d.name;t.detail=d.detail;t.owner=d.owner;}
  } else {
    d.id='t'+Date.now();
    m.tasks[editTaskCtx.phase].push(d);
  }
  document.getElementById('modal-etask').classList.remove('open');
  render('training');
}
// 内定者追加・編集
var editMemberId=null;
function openAddMemberModal(){
  editMemberId=null;
  document.getElementById('nm-name').value='';
  document.getElementById('nm-date').value='';
  document.getElementById('nm-role').value='';
  document.getElementById('nm-ttl').textContent='内定者を追加';
  var cpLabel=document.getElementById('nm-copy-label'); if(cpLabel) cpLabel.classList.add('open');
  document.getElementById('nm-copy').value=trainMembers.length?trainMembers[0].id:'none';
  // コピー元セレクト更新
  var sel=document.getElementById('nm-copy');
  sel.innerHTML='<option value="none">テンプレートから新規作成</option>';
  trainMembers.forEach(function(m){sel.innerHTML+='<option value="'+m.id+'">'+m.name+' さんからコピー</option>';});
  document.getElementById('modal-member').classList.add('open');
}
function openEditMemberModal(id){
  var m=trainMembers.find(function(x){return x.id===id;});if(!m)return;
  editMemberId=id;
  document.getElementById('nm-name').value=m.name;
  document.getElementById('nm-date').value=m.joinDate||'';
  document.getElementById('nm-role').value=m.role||'';
  document.getElementById('nm-ttl').textContent='内定者情報を編集';
  document.getElementById('nm-copy-label').classList.remove('open');
  document.getElementById('modal-member').classList.add('open');
}
function saveMember(){
  var name=document.getElementById('nm-name').value.trim();
  if(!name){alert('名前を入力してください');return;}
  if(editMemberId){
    var m=trainMembers.find(function(x){return x.id===editMemberId;});
    if(m){m.name=name;m.joinDate=document.getElementById('nm-date').value;m.role=document.getElementById('nm-role').value;}
  } else {
    var copyFrom=document.getElementById('nm-copy').value;
    var newTasks;
    if(copyFrom!=='none'){
      var src=trainMembers.find(function(x){return x.id===copyFrom;});
      if(src){
        // タスクをコピー（完了状態はリセット）
        newTasks={pre:[],day1:[],monthly:[]};
        ['pre','day1','monthly'].forEach(function(ph){
          src.tasks[ph].forEach(function(t){newTasks[ph].push({id:t.id+'_'+Date.now(),name:t.name,detail:t.detail,owner:t.owner,done:false});});
        });
      }
    }
    var m2={id:'m'+nxtMemberId++,name:name,joinDate:document.getElementById('nm-date').value,role:document.getElementById('nm-role').value,tasks:newTasks||deepCopyTasks()};
    trainMembers.push(m2);
    curTrainMemberId=m2.id;
  }
  document.getElementById('modal-member').classList.remove('open');
  render('training');
}

// mvTask/addTask は toggleTask/showTrainPhaseに統合

function updateKaId(name){
  const a=apps.find(x=>x.name===name);
  if(a) document.getElementById('ka').value=a.id;
}

// ===== 研修フロー: 内定者管理 =====
var trainMembers=[];  // [{id, name, joinDate, tasks:{pre:[...], day1:[...], monthly:[...]}}]
var curTrainMemberId=null;
var nxtMemberId=1;

function deepCopyTasks(){
  var obj={pre:[],day1:[],monthly:[]};
  ['pre','day1','monthly'].forEach(function(ph){
    taskTemplates[ph].forEach(function(t){
      obj[ph].push({id:t.id,name:t.name,detail:t.detail,owner:t.owner,done:false});
    });
  });
  return obj;
}
function addTrainMember(name, joinDate){
  var m={id:'m'+nxtMemberId++,name:name,joinDate:joinDate||'',tasks:deepCopyTasks()};
  trainMembers.push(m);
  curTrainMemberId=m.id;
  return m;
}
function getCurMember(){
  return trainMembers.find(function(m){return m.id===curTrainMemberId;})||null;
}
// ===== INIT =====
document.addEventListener('click',e=>{
  if(e.target===document.getElementById('ma'))cm('ma');
  if(e.target===document.getElementById('mk'))cm('mk');
  if(e.target===document.getElementById('modal-job'))document.getElementById('modal-job').classList.remove('open');
  if(e.target===document.getElementById('modal-goal'))document.getElementById('modal-goal').classList.remove('open');
  if(e.target===document.getElementById('modal-tpl'))document.getElementById('modal-tpl').classList.remove('open');
  if(e.target===document.getElementById('modal-member'))document.getElementById('modal-member').classList.remove('open');
  if(e.target===document.getElementById('modal-etask'))document.getElementById('modal-etask').classList.remove('open');
  if(e.target===document.getElementById('modal-goal'))document.getElementById('modal-goal').classList.remove('open');
});
document.getElementById('fd').value=today();
document.addEventListener('click',function(e){if(e.target&&e.target.classList.contains('train-tab')){showTrainPhase(e.target.getAttribute('data-ph'));}});



// ===== 採用基準 =====
var criteriaItems=[
  {id:'c1',category:'基本項目',name:'IQ / 地頭',
   desc:'言語理解・知覚推理・ワーキングメモリー・処理速度が一定以上の水準',
   levels:[
     {lv:5,label:'かなり地頭良い',score:'IQテスト結果 61点〜',
      desc:'1を言うだけで10理解し、重要ポイントだけ確認しつつ基本自走する。結果、成果物のレベルも高い。\n話を聞いた後に「これってつまり〜〜」などと自分の解釈をすり合わせる。\n自分が本当に腹落ちしている認識でいるため、ちゃんと理解するまでインプット＆解釈しようとする。\nwhy？true？を問い、課題を根本まで深掘りし、課題解決できる。'},
     {lv:4,label:'平均よりも高い',score:'IQテスト結果 55〜60点',
      desc:'常に「ならばこれやった方がいいだろう」などとアクションを先読みし実行する。\n一度フィードバックしたことは改善するため、同じフィードバックをすることがない。\n言語化や議事録などの文章がまとまっていてわかりやすい（言語化、構造化）。'},
     {lv:3,label:'平均前後',score:'IQテスト結果 48〜54点',
      desc:'大きな問題はあるわけではないが超えているレベルではなく、諸々サポートが必要と感じさせる。\n（基本的な理解力はあるが、筋のいい解釈力や思考体力が伸び代）'},
     {lv:2,label:'平均をまあまあ下回る',score:'IQテスト結果 41〜47点',
      desc:'指示や話を理解するのに時間がかかり、予想よりコミュニケーション工数がかかる。\nすぐに「うわ〜自分には無理だ」「難しい」「すごい」などと言う。\n話を聞いたことに満足し、さも理解できた風で解釈もアウトプットもしない。\n課題の深掘りがふわふわ。'},
     {lv:1,label:'良くない',score:'IQテスト結果 40点以下',
      desc:'目の前のタスクしか考えておらず、少し先に何が必要か先読みができない。\n一度言ったことを中々改善せず、同じことを何度もフィードバックしなければならない。\n議事録などの文章が構造化できておらずわかりにくい（文章が変に繋がっている、カテゴライズが下手等）。\n簡単に価値観180度変わる。うんうん聞いてるけど改めて噛み砕いたり調べたりしない。'},
   ],
   questions:'Q最近読んでる本は？その理由は？\nQ普段浴びている情報のリソースって何？\nQ最近引っ掛かったのはどの情報？これはなぜ？どういうことがわかったの？\nQ今までで一番ズシッときたフィードバックは？これに対してどう行動した？\nQ今まで課題を解決した経験を挙げるなら？この思考プロセスは？\nQ前職で感じていた組織の課題は？また、これを解決するには？'},
  {id:'c2',category:'基本項目',name:'EQ / 心の知能指数（愛嬌）',
   desc:'自己認識・自己統制・動機づけ・共感・ソーシャルスキルが一定以上の水準',
   levels:[
     {lv:5,label:'かなりEQ高い',score:'EQテスト結果 高い',
      desc:'言動が人に影響を与え、誰かの行動を変えるきっかけになっている。\n周りにファンがいる。'},
     {lv:4,label:'平均よりも高い',score:'EQテスト結果 やや高い',
      desc:'節目の時にお世話になってる人にメッセージを送ってしまう。\nサッと二日酔いの人にヘパリーゼ差し出す。\n五常を大事にしている。\nギバーになろうとするまでもなくギバー。\n歴史まで遡って人間の心を探求している。\n相手のためならいうべきことは言う。'},
     {lv:3,label:'平均前後',score:'EQテスト結果 普通',
      desc:'いいやつだが、やっていることが相手のためになっていない。'},
     {lv:2,label:'平均をまあまあ下回る',score:'EQテスト結果 低め',
      desc:'承認欲求が強い。リターンを求める。\nどう思われるかを気にして相手に合わせた発言をする。\nみていて痛いくらいのオーバーな気遣いをする。\n周りがコミュニケーションに気を遣う。'},
     {lv:1,label:'良くない',score:'EQテスト結果 低い',
      desc:'お礼や挨拶、謝罪をしないなど礼儀がない。\n周りにネガティブな影響を及ぼす。'},
   ],
   questions:'Q自分のEQ項目をそれぞれ10点満点で表すと？これはなぜ？\nQ仕事してる中で、忠恕濃いめの関係だと誰？社内外含めて。\nQ人と信頼関係を築くためにやっていることやこだわりは？これはなぜ？\nQチームの中での自分のポジションは？どんなところを信頼されてると挙げるとしたら？\nQ仮に自分が周りに信頼されてないとしたら、これはなぜ？\nQ前職との繋がりはどう？（不義理✖）'},
  {id:'c3',category:'基本項目',name:'やり抜く力',
   desc:'過去、ストイックに何かに向き合った経験があるか',
   levels:[
     {lv:5,label:'こちらがリスペクトしてしまうレベル',score:'',
      desc:'ストイックにやり切ることが当たり前で、この姿が周りにまで影響を与えている。\n話を聞いていると、自分もまだまだだなもっとやろうという気持ちにさせられる。'},
     {lv:4,label:'考え抜きやり切り成果を残してきている',score:'',
      desc:'やり切ることが習慣化している。己に打ち勝つ克己心がある。\n自分の弱さを知っているが故の建設的な思考・行動をする。\n自分の役割以外の領域でも、必要だと思えば相手が誰であれ進言したり実行したりする。\n本や動画、人に会うなどして、必要だと思ったことを自走してインプット＆アウトプットする。'},
     {lv:3,label:'人並みには向き合ってきたが平均の域を出ない、ソコソコ',score:'',
      desc:'頑張ったのはわかるが、どこかで聞いたようなエピソードが出てくる。\n努力のレベルが想像の域を超えない。単発で終わる。'},
     {lv:2,label:'やり切りたい気持ちだけはある',score:'',
      desc:'理想は語るが行動は伴わない。\n愚痴を吐く。「自分は◯◯したのに、…」的な発言をする。'},
     {lv:1,label:'やり切れないし、やり切ろうとも思っていない',score:'',
      desc:'周りを批判し攻撃する。相談ばかりで行動を起こさない。\n自分は認められていないなどと嘆き、被害妄想をする。'},
   ],
   questions:'Qこれまでの社会人人生を振り返り、自分自身に必要なネクストアクションは何か？また、過去の自分にアドバイスするとしたら？（自責か他責か）\nQリーダー経験として今までにある？リーダーになった理由は？\nQマジできつかったけど、やり抜いたら楽しくなった/成し遂げたことってなに？（コミット力）\nQ非日常的な自分が起こした経験ってある？これはなぜ？'},
  {id:'c4',category:'基本項目',name:'価値観のシンクロ率',
   desc:'インビジョンのカルチャーに価値観が合っているか',
   levels:[
     {lv:5,label:'共鳴レベル。この人となら本気で一緒にいいチームを作れそう',score:'',
      desc:'知る前からインビジョンと同じような想いを持っていて、インビジョンを知った時に「ここしかない！見つけた！」と心臓が踊った人。\n選考中、こんな驚きと感動の感情を熱く語っている人。\nインビジョン側が早く一緒に働きたいと思える。'},
     {lv:4,label:'インビジョンの価値観に共感していて、一緒に働くイメージが湧く',score:'',
      desc:'志だけでなく、この裏側の義憤についても深く解釈し、自身の経験を交えながら共感の姿勢を示す。'},
     {lv:3,label:'比較的共感してくれているが、ソコソコ',score:'',
      desc:'「働く幸せを感じるかっこいい大人を増やす」という言葉に惹かれ、共感の姿勢を示すものの、自らの経験に基づいた深い解釈は語れない。\nカルチャーに対しては「許容範囲」的なリアクション。'},
     {lv:2,label:'合わない部分があり、ところどころズレが起きそう',score:'',
      desc:'志について話題を振ると「共感します」などと言うが、自らの経験に基づいた深い解釈は語れないし、この裏の義憤も理解していない。\nカルチャーに対し、多少のズレはありそう。'},
     {lv:1,label:'インビジョンの価値観とは全く相反する、合わなそうに辞めそう',score:'',
      desc:'「志…すみません、どんなのでしたっけ？」というレベルの理解の浅さ。\nカルチャー的にも他の会社の方が合いそうだと感じる。'},
   ],
   questions:'Q企業選びで譲れない条件って？逆に合わないところは？\nQなぜインビジョン？他に受けているところは？\nQ志共感度を10点満点で表すと？これはなぜ？\nQ行動指針への共感度を10点満点で表すと？これはなぜ？\nQ会社ビジョンの重要度どんくらい？\nQ何がきっかけ/どういう体験があってこう思ったの？\nQインビジョンの持ってる義憤って何かわかる？これに対してどう思った？'},
  {id:'c5',category:'基本項目',name:'感性の豊かさ',
   desc:'ヒト・モノ・コトを浴び、感じたことを言霊/構造化できるか',
   levels:[
     {lv:5,label:'なんでもない日常にひそむ気配をすくい上げ、クリエイティブに落とせる',score:'',
      desc:'習慣的に自らディープなカルチャーを浴びに行き、クリエイティブに昇華し続けている。\n感じたことを何らかの形で発信し、誰かに影響を与えている。ファンがいる。'},
     {lv:4,label:'知らなかったヒト・モノ・コトにも直感が働き、自然と反応してしまう',score:'',
      desc:'興味のある分野からの気づきをエッセイや詩、記事、デザインで表現し続けている。\n元々興味のないテーマでも浴びに行き、感じたことを言い当てられる。\n関わる相手に憑依し、深いインサイトを言語化できる。'},
     {lv:3,label:'興味のあるカルチャーを深く探索し、何に心が動いたかを言い当てられる',score:'',
      desc:'習慣的に何らかの興味をもつ分野を浴びている。\n体験から「この部分が心に残った。なぜなら…」と具体的に言い当てられる。\n感じたことを、自分の考えと照らし合わせて咀嚼できる。'},
     {lv:2,label:'強い言葉や出来事に反応はするが、深掘りはしない',score:'',
      desc:'※1〜2は何を考えているか分からないことが多い。\n何かを浴びて感情は動くけど、何が刺さったかは曖昧。\nSNSで流れてきたトピックに「いいね」するだけ。'},
     {lv:1,label:'目の前の現象に意味を見出せず、通り過ぎていく',score:'',
      desc:'自然にも芸術にもスポーツにもあまり触れない。\nニュースや社会問題にも無関心。\n人の表情や空気の変化に気づかない。'},
   ],
   questions:'Q最近、何か心がざわついたり、違和感を覚えた出来事はありますか？この理由を言語化できますか？\nQこのとき感じたことを、自分の価値観や考え方にどう結びつけましたか？\nQ感動や怒りを覚えた場面を、自分なりにどう意味づけましたか？\nQ誰かの発言や作品で、自分の行動が変わった体験はありますか？\nQ感じたことを、誰かに伝えたり共有した経験はありますか？\nQ自分が心を動かされた経験を、自分なりに形にしたことはありますか？（文章、イラスト、音楽などジャンル不問）\nQ月に何回くらい映画や本、展示などに触れていますか？どうやって選んでいますか？\nQ最近観た映画や読んだ本で、印象に残っているものはありますか？なぜ印象に残ったのですか？\nQ美術館やライブ、演劇など、直近でリアルなカルチャー体験をしたことはありますか？どう感じましたか？\nQ感じたことや考えたことを記録していますか？（例：日記、SNS、ブログなど）'},
  {id:'c6',category:'基本項目',name:'身なり（美しさ・清潔感）',
   desc:'身なりに清潔感があり、相手に与える印象が良いか',
   levels:[
     {lv:5,label:'惚れ惚れしてしまうレベル',score:'（初めて会った時の第一印象）',
      desc:'見られ方を心得ていて、細部までの気遣いが見て取れる。'},
     {lv:4,label:'身なりに気をつけており、第一印象がとても心地よい',score:'',
      desc:'見た目に気遣っているのがわかる。'},
     {lv:3,label:'人並みレベル、特段いいわけではないが問題はない',score:'',
      desc:'良くも悪くも普通。常識の範囲といった感じ。問題はない。'},
     {lv:2,label:'ちょっとどうなの？と引っかかる部分がある',score:'',
      desc:'服がよれていたり靴が汚かったりと、ちょっと気になる部分がある。'},
     {lv:1,label:'不快な印象を与える',score:'',
      desc:'明らかに見た目＝見られ方を気にしていない。不潔。'},
   ],
   questions:'（初めて会った時の第一印象で判断）'},
  {id:'c7',category:'営業',name:'営業スキル',
   desc:'ビジネス的にも人間的にも濃い営業ができそうか',
   levels:[
     {lv:5,label:'経営者を相手にできるほどのビジネス力と人間力を兼ね備えている',score:'',
      desc:'ビジネスを浴びているので経営者を相手にできる。\nセミナー登壇も任されるタイプ。\n経営や組織に関する本を年間50冊以上は読んでいる。'},
     {lv:4,label:'達成は当たり前で、組織の責任者クラスは相手にできる一人前の営業マン',score:'',
      desc:'経営者レベルのビジネス理解はまだ難しいが、商材の枠を越えヒトに関する相談は浴びてきたタイプ。\n営業としていかに成長するかという視点は強く持って改善を回してきた。\nプレイヤーとしての数字へのコミット癖はついている。'},
     {lv:3,label:'ある程度数字達成はするが、ビジネス面または人間面で問題がある',score:'',
      desc:'いつも3位以内に入るタイプではある。\n無難に成果を出してきたがもう少し欲深ければいいのにと思われがち。'},
     {lv:2,label:'数字を達成しないことがしばしばあり、営業マンとしては半人前',score:'',
      desc:'数字への貪欲さがここまでない。\n小規模の店長レベルor大規模の担当者レベルと長期的に付き合ってきたタイプ。\n商材中心の会話が多いので、広いビジネスについて浴びた経験はあまりない。'},
     {lv:1,label:'営業は無理そう',score:'',
      desc:'他の職種の方が向いていそう。インビジョンの営業ではなさそう。'},
   ],
   questions:'Qなぜ転職？いつくらいには転職したい？\nQ営業経験年数は？今までの職歴、具体的な仕事内容は？\nQ新規or既存？この手法は？\nQ顧客単価、年間売上どのくらい？\nQ達成率どのくらい？達成している営業の割合はいかほど？\nQ何か受賞歴ってある？\nQヒアリングの幅、提案内容は？\nQ得意な業界は？\nQ営業スタイル・営業としての強み・こだわりって？\nQ今後やっていきたいことって？\nQ現在のお客さんとの関係性（今も繋がってるのはどれくらい？）'},
  {id:'c8',category:'NG項目',name:'これに当てはまったら採用しない',
   desc:'下記のいずれかに当てはまる場合は採用しない',
   levels:[],
   questions:'',
   ngItems:['同世代の人としかコミュニケーションとらない','モチベーションに左右される（セルフコントロール、胆力）','オンライン営業ばっかりやっていて、これに対して何の違和感もない','何か一つでもネガティブ要素のある人']},
];

// ===== 採用ファンネル履歴 =====
var funnelHistory=[
  {
    id:'f1',
    year:'18期',
    period:'2025年4月〜2026年3月',
    obo:434,
    doc:137,
    int1:61,
    int2:16,
    offer:11,
    join:11,
    totalCost:2199829,
    dateFrom:'2025-04-01',
    dateTo:'2026-03-31'
  }
];

function rFunnel(container,autoTotalCost){
  if(!funnelHistory||!funnelHistory.length){
    container.innerHTML='<div style="color:var(--tx3);font-size:12px;padding:8px 0">データがありません。「+ 年度を追加」から登録してください。</div>';
    return;
  }
  var CHART_H=120; // バー最大高さ
  var TOP_PAD=80;  // バー上部のパディング（バブル+人数用）
  var BOT_PAD=28;  // ラベル用
  var TOTAL_H=CHART_H+TOP_PAD+BOT_PAD;
  var out='';
  funnelHistory.slice().sort(function(a,b){
      var ai=funnelHistory.indexOf(a), bi=funnelHistory.indexOf(b);
      var aD=a.dateFrom&&a.dateFrom!='', bD=b.dateFrom&&b.dateFrom!='';
      // dateFromあり → 上（新しい順）
      if(aD&&bD)return b.dateFrom.localeCompare(a.dateFrom);
      if(aD)return -1;
      if(bD)return 1;
      // どちらもdateFromなし → 後から追加したものを上（インデックス大きい方が先）
      return bi-ai;
    }).forEach(function(d){
    var steps=[
      {label:'応募',    val:d.obo,  prev:d.obo,  col:'#c8d0da', orange:false},
      {label:'書類通過',val:d.doc,  prev:d.obo,  col:'#bfdbfe', orange:false},
      {label:'一次合格',val:d.int1, prev:d.doc,  col:'#93c5fd', orange:false},
      {label:'二次合格',val:d.int2, prev:d.int1, col:'#60a5fa', orange:false},
      {label:'内定',    val:d.offer,prev:d.int2, col:'#fb923c', orange:true},
      {label:'入社',    val:d.join, prev:d.offer,col:'#ea580c', orange:true},
    ];
    var maxVal=d.obo||1;
    out+='<div style="margin-bottom:32px">';
    // ヘッダー
    out+='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">';
    out+='<div><div style="font-size:14px;font-weight:700">'+d.year;
    if(d.period)out+=' <span style="font-size:11px;color:var(--tx3);font-weight:400">'+d.period+'</span>';
    out+='</div><div style="font-size:12px;color:var(--tx3);margin-top:3px">応募 <strong>'+d.obo+'</strong>人 ｜ 採用 <strong>'+d.join+'</strong>人 ｜ 採用単価 <strong>'+(d.join>0&&d.totalCost>0?'¥'+Math.round(d.totalCost/d.join).toLocaleString():d.join>0&&autoTotalCost>0?'¥'+Math.round(autoTotalCost/d.join).toLocaleString():'¥—')+'</strong></div></div>';
    out+='<button class="btn btn-s btn-sm funnel-edit-btn" data-fid="'+d.id+'">✎ 編集</button>';
    out+='</div>';
    // チャートコンテナ
    out+='<div style="display:flex;gap:8px;height:'+TOTAL_H+'px;align-items:flex-end">';
    steps.forEach(function(s,idx){
      var barH=Math.max(Math.round(s.val/maxVal*CHART_H), s.val>0?4:2);
      var pct=s.prev>0?Math.round(s.val/s.prev*1000)/10:100;
      var showPct=idx>0;
      var bubbleCol=s.orange?'#f97316':'#3b82f6';
      // 各ステップのカラム: flex-directionをcolumnにして、上から: [余白][バブル][人数][バー][ラベル]
      out+='<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end">';
      // バブル＋人数＋バー＋ラベルをまとめたブロック
      out+='<div style="display:flex;flex-direction:column;align-items:center;width:100%">';
      // バブル
      if(showPct){
        out+='<div style="background:'+bubbleCol+';color:#fff;border-radius:10px;padding:2px 9px;font-size:11px;font-weight:700;white-space:nowrap;margin-bottom:2px">'+pct+'%</div>';
        out+='<div style="width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid '+bubbleCol+';margin-bottom:2px"></div>';
      } else {
        out+='<div style="height:24px"></div>';
      }
      // 人数
      out+='<div style="font-size:11px;color:var(--tx2);font-weight:600;margin-bottom:4px">'+s.val+'人</div>';
      // バー
      out+='<div style="width:80%;height:'+barH+'px;background:'+s.col+';border-radius:3px 3px 0 0;margin-bottom:0"></div>';
      out+='</div>';
      // ラベル
      out+='<div style="font-size:11px;color:var(--tx2);white-space:nowrap;font-weight:500;padding-top:6px;text-align:center">'+s.label+'</div>';
      out+='</div>';
    });
    out+='</div>';
    out+='</div>';
    if(funnelHistory.length>1)out+='<hr style="border:none;border-top:1px solid var(--bd);margin:8px 0 24px">';
  });
  container.innerHTML=out;
  container.querySelectorAll('.funnel-edit-btn').forEach(function(b){
    b.addEventListener('click',function(){openFunnelEdit(this.getAttribute('data-fid'));});
  });
}

function openFunnelEdit(id){
  var d=id?funnelHistory.find(function(x){return x.id===id;}):null;
  document.getElementById('fe2-id').value=d?d.id:'f'+Date.now();
  document.getElementById('fe2-year').value=d?d.year:'';
  document.getElementById('fe2-from').value=d&&d.dateFrom?d.dateFrom:'';
  document.getElementById('fe2-to').value=d&&d.dateTo?d.dateTo:'';
  document.getElementById('fe2-obo').value=d?d.obo:'';
  document.getElementById('fe2-doc').value=d?d.doc:'';
  document.getElementById('fe2-int1').value=d?d.int1:'';
  document.getElementById('fe2-int2').value=d?d.int2:'';
  document.getElementById('fe2-offer').value=d?d.offer:'';
  document.getElementById('fe2-join').value=d?d.join:'';
  document.getElementById('fe2-cost').value=d&&d.totalCost?d.totalCost:'';
  document.getElementById('fe2-ttl').textContent=d?'年度データを編集':'年度を追加';
  // 自動計算ボタンの表示制御
  updateAutoCalcBtn();
  document.getElementById('modal-funnel').classList.add('open');
}
function updateAutoCalcBtn(){
  var from=document.getElementById('fe2-from').value;
  var to=document.getElementById('fe2-to').value;
  var btn=document.getElementById('fe2-auto-btn');
  if(btn)btn.disabled=!(from&&to);
}
function autoCalcFunnel(){
  var from=document.getElementById('fe2-from').value;
  var to=document.getElementById('fe2-to').value;
  if(!from||!to)return;
  var filtered=apps.filter(function(a){return a.date>=from&&a.date<=to;});
  var negS=['ミスマッチ','不合格','お祈り','辞退','基準外','返事なし','現れず'];
  var obo=filtered.length;
  var doc=filtered.filter(function(a){return a.s1==='通過';}).length;
  // 一次合格: 書類通過後、一次面接の結果が「通過」または二次面接以降に進んでいる
  var int1=filtered.filter(function(a){
    return a.s1==='通過'&&(a.s3==='通過'||(!negS.includes(a.s4)&&a.s4)||['二次面談','適性検査','最終面談','内定','入社'].includes(a.stage));
  }).length;
  // 二次合格: 二次面接の結果が「通過」または最終面談以降
  var int2=filtered.filter(function(a){
    return a.s4==='通過'||['最終面談','内定','入社'].includes(a.stage);
  }).length;
  var offer=filtered.filter(function(a){return a.stage==='内定'||a.stage==='入社';}).length;
  var join=filtered.filter(function(a){return a.stage==='入社';}).length;
  document.getElementById('fe2-obo').value=obo;
  document.getElementById('fe2-doc').value=doc;
  document.getElementById('fe2-int1').value=int1;
  document.getElementById('fe2-int2').value=int2;
  document.getElementById('fe2-offer').value=offer;
  document.getElementById('fe2-join').value=join;
  // 自動計算された期間テキストを生成
  var fy=from.replace(/-/g,'/');var ty=to.replace(/-/g,'/');
  if(!document.getElementById('fe2-year').value){
    document.getElementById('fe2-year').value=fy.slice(0,7)+'〜'+ty.slice(0,7);
  }
}
function saveFunnel(){
  var id=document.getElementById('fe2-id').value;
  var from=document.getElementById('fe2-from').value;
  var to=document.getElementById('fe2-to').value;
  // periodテキストを日付から自動生成
  function toJp(d){if(!d)return'';var p=d.split('-');return p[0]+'年'+(parseInt(p[1]))+'月';}
  var period=from&&to?toJp(from)+'〜'+toJp(to):'';
  var d={
    id:id,
    year:document.getElementById('fe2-year').value,
    period:period,
    dateFrom:from,
    dateTo:to,
    obo:parseInt(document.getElementById('fe2-obo').value)||0,
    doc:parseInt(document.getElementById('fe2-doc').value)||0,
    int1:parseInt(document.getElementById('fe2-int1').value)||0,
    int2:parseInt(document.getElementById('fe2-int2').value)||0,
    offer:parseInt(document.getElementById('fe2-offer').value)||0,
    join:parseInt(document.getElementById('fe2-join').value)||0,
    totalCost:parseInt(document.getElementById('fe2-cost').value)||0
  };
  var idx=funnelHistory.findIndex(function(x){return x.id===id;});
  if(idx>=0){funnelHistory[idx]=d;}else{funnelHistory.push(d);}
  document.getElementById('modal-funnel').classList.remove('open');
  render('kpi');
  // 保存後にファンネルグラフへスクロール
  setTimeout(function(){
    var fc=document.getElementById('funnel-chart-area');
    if(fc)fc.scrollIntoView({behavior:'smooth',block:'start'});
  },100);
}


// ===== localStorage 設定復元 =====
(function(){
  try {
    var saved = localStorage.getItem('invision_settings');
    if(saved){
      var s = JSON.parse(saved);
      if(s.fiscalFrom) kpiG.fiscalFrom = s.fiscalFrom;
      if(s.fiscalTo)   kpiG.fiscalTo   = s.fiscalTo;
      if(s.srcs && s.srcs.length) SRCS = s.srcs;
      if(s.jobs && s.jobs.length) JOBS = s.jobs;
      if(s.ma)  kpiG.ma  = s.ma;
      if(s.mi)  kpiG.mi  = s.mi;
      if(s.mg)  kpiG.mg  = s.mg;
      if(s.mg_mi) kpiG.mg_mi = s.mg_mi;
      kpiRange.from = kpiG.fiscalFrom||'';
      kpiRange.to   = kpiG.fiscalTo||'';
    }
  } catch(e){}
})();

go('kpi');

// ===== 掲載原稿一覧 =====
var jobList=[
  {media:'HRハッカー',type:'正社員',job:'セールス',name:'伝統企業の未来共創クリエイティブプランナー',url:'https://hr-hacker.com/invision/job-offers/show/11134808',status:'掲載中',updated:'2025/12/06'},
  {media:'HRハッカー',type:'正社員',job:'セールス',name:'HRハッカー 総合職',url:'https://hr-hacker.com/invision/job-offers/show/11053662',status:'掲載中',updated:'2025/12/16'},
  {media:'HRハッカー',type:'正社員',job:'CS',name:'粋なチームの生き様を届けるライター・編集者',url:'https://hr-hacker.com/invision/job-offers/show/10334365',status:'掲載中',updated:'2026/01/09'},
  {media:'HRハッカー',type:'アルバイト',job:'事務',name:'求人制作・広告運用アシスタント',url:'https://hr-hacker.com/invision/job-offers/show/10774623',status:'掲載中',updated:'2025/12/06'},
  {media:'HRハッカー',type:'正社員',job:'新卒',name:'新卒27卒 100年先まで承継する粋なチームを育てる総合職',url:'https://hr-hacker.com/invision/job-offers/show/10985226',status:'掲載中',updated:'2025/12/06'},
  {media:'HRハッカー',type:'正社員',job:'新卒',name:'新卒26卒 100年先まで承継する粋なチームを育てる総合職',url:'https://hr-hacker.com/invision/job-offers/show/10383546',status:'非公開',updated:'2025/10/30'},
  {media:'Wantedly',type:'正社員',job:'セールス',name:'5年で地方新聞社20社と提携！伝統企業の未来共創クリエイティブプランナー',url:'https://www.wantedly.com/projects/2292833',status:'掲載中',updated:'2026/01/15'},
  {media:'Wantedly',type:'正社員',job:'CS',name:'粋なチームの生き様を届ける広報コンテンツを作ってみよう ライター・編集者',url:'https://www.wantedly.com/projects/2276679',status:'掲載中',updated:'2025/12/06'},
  {media:'Wantedly',type:'アルバイト',job:'事務',name:'広告運用サポート事務スタッフ 100億円より100年続く企業を目指す',url:'https://www.wantedly.com/projects/2185805',status:'掲載中',updated:'2025/12/06'},
  {media:'Wantedly',type:'正社員',job:'新卒',name:'2027年卒 100年先まで承継する粋なチームを育てる HR企業・総合職',url:'https://www.wantedly.com/projects/392642',status:'掲載中',updated:'2025/12/06'},
  {media:'エアワーク',type:'正社員',job:'新卒',name:'【正社員】新卒27卒 100年先まで承継する粋なチームを育てる総合職',url:'https://ats.rct.airwork.net/job_offers/8838330/edit_preview',status:'掲載中',updated:'2025/10/28'},
  {media:'マイナビ',type:'インターン',job:'インターン',name:'粋なチームの価値を継承する新規メディア企画・運営',url:'https://job.mynavi.jp/27/',status:'非公開',updated:'2025/06/06'},
  {media:'その他',type:'正社員',job:'新卒',name:'大切なのは志と本質的な人のつながり「仕事って面白いぞ」を伝えていきます。',url:'https://corp.uc.career-tasu.jp/',status:'掲載中',updated:'2025/06/06'}
];
var _editJobIdx=null;

function openTplEdit(id){
  var t=TPLS.find(function(x){return x.id===id;});if(!t)return;
  document.getElementById('te-id').value=id;
  document.getElementById('te-name').value=t.name;
  document.getElementById('te-hint').value=t.hint;
  document.getElementById('te-subj').value=t.subj;
  document.getElementById('te-body').value=t.body;
  document.getElementById('te-tag').value=t.tag;
  document.getElementById('te-step').value=t.step;
  document.getElementById('modal-tpl').classList.add('open');
}
function saveTplEdit(){
  var id=document.getElementById('te-id').value;
  var t=TPLS.find(function(x){return x.id===id;});if(!t)return;
  t.name=document.getElementById('te-name').value;
  t.hint=document.getElementById('te-hint').value;
  t.subj=document.getElementById('te-subj').value;
  t.body=document.getElementById('te-body').value;
  t.tag=document.getElementById('te-tag').value;
  t.step=document.getElementById('te-step').value;
  document.getElementById('modal-tpl').classList.remove('open');
  render('emails');
}

// ===== お掛け合いシート一覧 (刷新版) =====
function rKakegai(c,ta){
  ta.innerHTML='<button class="btn btn-p" onclick="openK()">+ シートを作成</button><a href="https://docs.google.com/presentation/d/1Ao6K0geH1rBVYEYd05A0jX4kFJncRLE4lVfw4q5O6HE/edit?slide=id.g3ddfecdc086_0_0#slide=id.g3ddfecdc086_0_0" target="_blank" class="btn btn-s" style="margin-left:8px">📋 構造化面談 参考資料</a>';
  if(!sheets.length){
    c.innerHTML='<div class="shd"><div><div class="sttl">お掛け合いシート</div></div></div><div class="empty" style="padding:40px;border:1px dashed var(--bd2);border-radius:var(--rl)">シートがありません<br><span style="font-size:12px">「+ シートを作成」から追加してください</span></div>';
    return;
  }
  var act=sheets.filter(function(sh){var a=apps.find(function(x){return x.id===sh.aid;});return a&&!excl(a);});
  var excl2=sheets.filter(function(sh){var a=apps.find(function(x){return x.id===sh.aid;});return !a||excl(a);});
  function renderSh(sh,gray){
    var a=apps.find(function(x){return x.id===sh.aid;});if(!a)return'';
    var gst=gray?'opacity:.4':'';
    var r='<div class="ksheet" style="'+gst+'">';
    r+='<div class="ksec-hd" onclick="'+(!gray?'toggleK(\'k'+sh.id+'\')':'void(0)')+'">';
    r+='<div style="display:flex;align-items:center;gap:10px;flex:1">';
    r+='<div style="font-size:13px;font-weight:500">'+a.name+'</div>';
    r+='<div style="display:flex;gap:4px">';
    if(sh.t1r)r+=p('一次:'+sh.t1r,JC[sh.t1r]||'p-gy')+' ';
    if(sh.s1r)r+=p('二次:'+sh.s1r,JC[sh.s1r]||'p-gy')+' ';
    if(sh.y1r)r+=p('最終:'+sh.y1r,JC[sh.y1r]||'p-gy');
    r+='</div>';
    if(gray)r+='<span class="p p-gy" style="font-size:10px">選考終了</span>';
    r+='</div>';
    r+='<div style="display:flex;gap:6px;align-items:center">';
    if(!gray)r+='<button class="btn btn-s btn-sm" onclick="event.stopPropagation();editK('+sh.id+')">編集</button>';
    if(!gray)r+='<span class="chev" id="kchev'+sh.id+'">▼</span>';
    r+='</div></div>';
    if(!gray){
      r+='<div class="ksec-body" id="k'+sh.id+'" style="display:none">';
      // 👥 担当者別 合否判定（応募者情報の直後）
      r+='<div style="font-size:14px;font-weight:700;color:var(--tx);margin:14px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--bd2)">👥 担当者別 合否判定</div>';
      r+='<div class="judge-grid" style="margin-bottom:10px">';
      r+='<div class="judge-card"><div class="judge-name">一次面談</div><div class="judge-result">'+(sh.t1r?p(sh.t1r,JC[sh.t1r]||'p-gy'):'—')+'</div>'+(sh.t1f?'<div style="font-size:11px;color:var(--tx2);margin-top:4px">'+sh.t1f+'</div>':'')+'</div>';
      r+='<div class="judge-card"><div class="judge-name">二次面談</div><div class="judge-result">'+(sh.s1r?p(sh.s1r,JC[sh.s1r]||'p-gy'):'—')+'</div>'+(sh.s1f?'<div style="font-size:11px;color:var(--tx2);margin-top:4px">'+sh.s1f+'</div>':'')+'</div>';
      r+='<div class="judge-card"><div class="judge-name">最終面談</div><div class="judge-result">'+(sh.y1r?p(sh.y1r,JC[sh.y1r]||'p-gy'):'—')+'</div>'+(sh.y1f?'<div style="font-size:11px;color:var(--tx2);margin-top:4px">'+sh.y1f+'</div>':'')+'</div>';
      r+='</div>';
      if(sh.ki2)r+='<div style="margin-bottom:12px"><a href="'+sh.ki2+'" target="_blank" style="color:var(--blue);font-size:12px">🔗 提出書類フォルダを開く</a></div>';
      // 📋 STEP1 書類選考
      if(sh.kc1||sh.kc2||sh.kc3||sh.kc4||sh.ky){
        r+='<div style="font-size:14px;font-weight:700;color:var(--tx);margin:14px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--bd2)">📋 STEP1　書類選考</div>';
        if(sh.kc1)r+='<div class="kq"><div class="ql">応募前・応募後に見たコンテンツ</div><div class="qa">'+sh.kc1+'</div></div>';
        if(sh.kc2)r+='<div class="kq"><div class="ql">具体的に印象に残っている内容</div><div class="qa">'+sh.kc2+'</div></div>';
        if(sh.kc3)r+='<div class="kq"><div class="ql">インビジョンの印象・合いそうな部分</div><div class="qa">'+sh.kc3+'</div></div>';
        if(sh.kc4)r+='<div class="kq"><div class="ql">大切にしているキーワード（３つ）</div><div class="qa">'+sh.kc4+'</div></div>';
        if(sh.kc5)r+='<div class="kq"><div class="ql">心が動く「モノ・コト」</div><div class="qa">'+sh.kc5+'</div></div>';
        if(sh.ky)r+='<div class="kq"><div class="ql">【任意】職務経歴</div><div class="qa">'+sh.ky+'</div></div>';
      }
      if(sh.kq1||sh.kq2||sh.kq3||sh.kq8){
        r+='<div style="font-size:14px;font-weight:700;color:var(--tx);margin:14px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--bd2)">🍑 STEP2　一次面談</div>';
        if(sh.kq1)r+='<div class="kq"><div class="ql">職歴や具体的にやってきたこと</div><div class="qa">'+sh.kq1+'</div></div>';
        if(sh.kq2)r+='<div class="kq"><div class="ql">インビジョンを知ったきっかけ</div><div class="qa">'+sh.kq2+'</div></div>';
        if(sh.kq3)r+='<div class="kq"><div class="ql">刺さった原稿・コンテンツ</div><div class="qa">'+sh.kq3+'</div></div>';
        if(sh.kq8)r+='<div class="kq"><div class="ql">話してみて印象が変わったこと</div><div class="qa">'+sh.kq8+'</div></div>';
      }

      r+='</div>';
    }
    r+='</div>';
    return r;
  }
  var out='<div class="shd"><div><div class="sttl">お掛け合いシート</div><div class="ssub">選考中: '+act.length+'件 / 選考終了: '+excl2.length+'件</div></div></div>';
  out+='<div style="display:flex;flex-direction:column;gap:8px">';
  if(act.length)out+=act.map(function(sh){return renderSh(sh,false);}).join('');
  else out+='<div style="color:var(--tx3);font-size:12px;padding:8px 0">選考中のシートはありません</div>';
  if(excl2.length){
    out+='<div class="div-lbl" style="margin-top:8px">選考終了（ミスマッチ・辞退・不合格）</div>';
    out+=excl2.map(function(sh){return renderSh(sh,true);}).join('');
  }
  out+='</div>';
  c.innerHTML=out;
}

// ===== 採用基準 =====
function rCriteria(c,ta){
  ta.innerHTML='<button class="btn btn-s btn-sm" onclick="openCriteriaEdit()">+ 項目を追加</button>';
  var cats={};
  criteriaItems.forEach(function(item){
    if(!cats[item.category])cats[item.category]=[];
    cats[item.category].push(item);
  });
  var s='<div class="shd"><div><div class="sttl">採用基準</div><div class="ssub">各項目をクリックすると詳細・質問例を確認できます</div></div></div>';
  Object.keys(cats).forEach(function(cat){
    s+='<div style="font-size:11px;font-weight:700;color:var(--tx3);letter-spacing:.08em;margin:20px 0 10px;text-transform:uppercase">'+cat+'</div>';
    cats[cat].forEach(function(item){
      var isNG=item.id==='c8';
      s+='<div class="tw" style="margin-bottom:12px">';
      // ヘッダー
      s+='<div style="padding:14px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between">';
      s+='<div><div style="font-size:14px;font-weight:700;color:var(--tx)">'+item.name+'</div>';
      if(item.desc)s+='<div style="font-size:11px;color:var(--tx3);margin-top:3px">'+item.desc+'</div>';
      s+='</div>';
      s+='<button class="btn btn-s btn-sm crit-edit" data-cid="'+item.id+'">✎ 編集</button>';
      s+='</div>';
      // NG項目
      if(isNG&&item.ngItems){
        s+='<div style="padding:14px 16px">';
        item.ngItems.forEach(function(ng){
          s+='<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--bd2)">';
          s+='<span style="color:var(--red);font-size:14px">✕</span>';
          s+='<span style="font-size:12px;color:var(--tx)">'+ng+'</span>';
          s+='</div>';
        });
        s+='</div>';
      } else if(item.levels&&item.levels.length){
        // レベル表
        s+='<div class="crit-body" id="cb-'+item.id+'" style="display:none">';
        s+='<div style="padding:0 16px 8px">';
        item.levels.forEach(function(lv){
          var col=lv.lv>=4?'var(--green)':lv.lv===3?'var(--amber)':'var(--red)';
          s+='<div style="padding:10px 0;border-bottom:1px solid var(--bd2)">';
          s+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">';
          s+='<div style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:'+col+';color:#fff;font-size:11px;font-weight:700;flex-shrink:0">'+lv.lv+'</div>';
          s+='<div style="font-size:12px;font-weight:700;color:var(--tx)">'+lv.label+(lv.score?'<span style="font-size:10px;font-weight:400;color:var(--tx3);margin-left:6px">'+lv.score+'</span>':'')+'</div>';
          s+='</div>';
          if(lv.desc)s+='<div style="font-size:11px;color:var(--tx2);line-height:1.6;margin-left:30px">'+lv.desc+'</div>';
          s+='</div>';
        });
        s+='</div>';
        // 質問例
        if(item.questions){
          s+='<div style="background:var(--sf2);padding:12px 16px;margin:0 0 0 0">';
          s+='<div style="font-size:10px;font-weight:700;color:var(--tx3);margin-bottom:6px">質問例</div>';
          s+='<div style="font-size:11px;color:var(--tx2);line-height:1.8;white-space:pre-line">'+item.questions+'</div>';
          s+='</div>';
        }
        s+='</div>';
        // 折りたたみトグル
        s+='<div style="padding:8px 16px;text-align:center;border-top:1px solid var(--bd)">';
      s+='<button class="btn btn-s btn-sm crit-toggle" style="font-size:10px;width:100%" data-cid="'+item.id+'">▼ 詳細を見る</button>';
        s+='</div>';
      }
      s+='</div>';
    });
  });
  c.innerHTML=s;
  c.querySelectorAll('.crit-edit').forEach(function(b){b.addEventListener('click',function(){openCriteriaEdit(this.getAttribute('data-cid'));});});
  c.querySelectorAll('.crit-toggle').forEach(function(b){b.addEventListener('click',function(){toggleCrit(this.getAttribute('data-cid'));});});
}
function toggleCrit(id){
  var body=document.getElementById('cb-'+id);
  var btn=body?body.nextElementSibling:null;
  if(!body)return;
  var isOpen=body.style.display!=='none';
  body.style.display=isOpen?'none':'block';
  if(btn){var b=btn.querySelector('button');if(b)b.textContent=isOpen?'▼ 詳細を見る':'▲ 閉じる';}
}
// 採用基準 編集モーダル
var _editCriteriaId=null;
function openCriteriaEdit(id){
  _editCriteriaId=id||null;
  var item=id?criteriaItems.find(function(x){return x.id===id;}):null;
  document.getElementById('cr-id').value=item?item.id:'c'+Date.now();
  document.getElementById('cr-cat').value=item?item.category:'基本項目';
  document.getElementById('cr-name').value=item?item.name:'';
  document.getElementById('cr-desc').value=item?item.desc:'';
  document.getElementById('cr-ttl').textContent=item?'採用基準を編集':'項目を追加';
  // レベル編集エリア
  var lvHtml='';
  var lvs=item?item.levels:[{lv:5,label:'',score:'',desc:'',examples:''},{lv:4,label:'',score:'',desc:'',examples:''},{lv:3,label:'',score:'',desc:'',examples:''},{lv:2,label:'',score:'',desc:'',examples:''},{lv:1,label:'',score:'',desc:'',examples:''}];
  lvs.forEach(function(lv){
    var col=lv.lv>=4?'var(--green)':lv.lv===3?'var(--amber)':'var(--red)';
    lvHtml+='<div style="border:1px solid var(--bd);border-radius:6px;padding:10px;margin-bottom:8px">';
    lvHtml+='<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px"><div style="width:22px;height:22px;border-radius:50%;background:'+col+';color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center">'+lv.lv+'</div><span style="font-size:11px;font-weight:700">レベル'+lv.lv+'</span></div>';
    lvHtml+='<input class="fi" placeholder="ラベル（例：かなり地頭良い）" value="'+lv.label.replace(/"/g,'&quot;')+'" id="cr-lv'+lv.lv+'-label" style="margin-bottom:4px;font-size:12px">';
    lvHtml+='<input class="fi" placeholder="スコア（例：IQテスト61点〜）" value="'+lv.score.replace(/"/g,'&quot;')+'" id="cr-lv'+lv.lv+'-score" style="margin-bottom:4px;font-size:12px">';
    lvHtml+='<textarea class="fi" placeholder="説明・行動特性" id="cr-lv'+lv.lv+'-desc" style="min-height:50px;font-size:12px;margin-bottom:0">'+lv.desc+'</textarea>';
    lvHtml+='</div>';
  });
  document.getElementById('cr-levels').innerHTML=lvHtml;
  // 質問例
  document.getElementById('cr-questions').value=item?item.questions:'';
  // NG項目
  document.getElementById('cr-ng').value=item&&item.ngItems?item.ngItems.join('\n'):'';
  document.getElementById('modal-criteria').classList.add('open');
}
function saveCriteria(){
  var id=document.getElementById('cr-id').value;
  var levels=[];
  [5,4,3,2,1].forEach(function(n){
    var lbl=document.getElementById('cr-lv'+n+'-label');
    var sc=document.getElementById('cr-lv'+n+'-score');
    var ds=document.getElementById('cr-lv'+n+'-desc');
    if(lbl)levels.push({lv:n,label:lbl.value,score:sc?sc.value:'',desc:ds?ds.value:'',examples:''});
  });
  var ngVal=document.getElementById('cr-ng').value;
  var item={
    id:id,
    category:document.getElementById('cr-cat').value,
    name:document.getElementById('cr-name').value,
    desc:document.getElementById('cr-desc').value,
    levels:levels,
    questions:document.getElementById('cr-questions').value,
    ngItems:ngVal?ngVal.split('\n').filter(function(x){return x.trim();}):undefined
  };
  var idx=criteriaItems.findIndex(function(x){return x.id===id;});
  if(idx>=0){criteriaItems[idx]=item;}else{criteriaItems.push(item);}
  document.getElementById('modal-criteria').classList.remove('open');
  render('criteria');
}
function deleteCriteria(id){
  if(!confirm('この項目を削除しますか？'))return;
  criteriaItems=criteriaItems.filter(function(x){return x.id!==id;});
  render('criteria');
}


// ===== ペルソナ & JD/JS =====
var personaList=[
  {
    id:'p1',job:'CS',icon:'🤝',nickname:'脈々 こと子',
    persona:{
      nickname:'脈々 こと子',
      catchcopy:'脈々続く文化をリスペクトする憑依型コンテンツメーカー',
      motivationType:'仕事型',
      moyamoya:'つまらないコンテンツだらけの世の中\n・制約が多く、ナチュラルな本音を載せられない制作環境にうんざり\n・行動し努力してきたが、今の自分のままじゃ足りない\n・1 of themにはなりたくない\n・世の中に対して影響力を持ちたいが、自分がどう価値を発揮できるかは見えていない\n・強いチームで前進する環境に飢えている',
      seeking:'100年先に承継する、粋なコンテンツを世の中に発信したい\n・受け継がれるものにロマンを感じし、その一部になりたい\n・相手・文化の成り立ちを深く理解し、言葉に載せてアウトプットしたい\n・とにかく、人の心に響くコンテンツを作りたい\n・ビジネスで地域・社会・日本を変革したい\n・志に向かって本気で前進するチームで一緒にやりたい\n・仕事もプライベートでも、なんでもやってゴリゴリ成長したい\n・いくらでもフィードバックが欲しい',
      values_like:'・顧客と受け継がれるカルチャー\n・魂のこったコンテンツ\n・個人よりチームで成果を上げること\n・対面での人とのつながり\n・ポジティブな意見交換\n・顧客と受け継がれていくものに貢献する上での成長実感、自己価値の発見\n・成長のための帰れるフィードバック',
      values_dislike:'・オリジナリティ、リスペクトのないクリエイティブ\n・一貫性がない、本質的じゃないコンテンツ\n・現状維持の環境（脈々と続いていくものにはポジティブな変革も必要だと知っている）',
      stance:'#脈々 #ルーツ #リスペクト #型があっての型破り #オリジナル\n・仕事における自分の理想基準を持っている\n・どうせやるなら自分が誇れるまでやり切る\n・成長も人生も自分次第\n・やり方よりあり方を磨き込む\n・チームでやるのが面白い',
      habits:'・何かに興味を持ったら、そのルーツや背景まで調べないと気が済まない\n・何かを具体的・抽象的どちらもアウトプットしないと気が済まない\n・いいコンテンツに出会ったら、制作意図や背景を分析しがち\n・美しい構造物・クリエイティブを写真に納めがち\n・相手の気持ちを観察し先回りして準備しがち\n・やると決めたらどんだけでも努力する\n・お礼、節目の挨拶は必ずする',
      experience:'・幼少期から、周りの大人からリスペクトを浴びてきた\n・音楽・映画・美術・ファッション・文学・地域・神社仏閣...歴史あるものに触れてきた\n・自分の頭と体で追体験した経験がある（ex. その道の専門家、コミュニティ、体験プログラム、論文）\n・家族・兄弟・友人・先輩誰でもいいが、年上と深いつながりを持ってきた\n・何らかを改善すべく提案するのは当たり前\n・自己決定で己の人生に影響する何らかの選択をし、行動→体験を自己解釈し血肉にしている',
      skills:'・IQ（考える力）×EQ（人間力）×AQ（やり切る力）\n・自社/他社の価値観への解像度を自ら上げる（憑依）'
    },
    jd:{
      title:'カスタマーサクセス',employment:'正社員',
      location:'〒153-0051 東京都目黒区上目黒1-3-7 VORT代官山3F',
      station:'中目黒駅 徒歩5分',
      hours:'フルフレックス制（月168時間）例：9:00〜18:00 または 10:00〜19:00（実働8時間／休憩60分）',
      mission:'超温速で伴走しお客さんの採用成功を実現させる',
      work:'【目指す先】#採用のプロといえば私たち\nデータを分析しながら脳に汗かきお客さんと一緒に採用成功というゴールに向かう。求人コンテンツの作成や広告運用はもちろん、採用目標達成のための課題特定と改善策を実行。実績や事例・ノウハウを蓄積し、採用成功に伴走する姿は、さながらインビジョンイチ頼れる採用のプロ。\n\n【業務内容】\n①求人コンテンツの作成（ヒアリングで企業らしさを引き出し、ターゲットに届けるための求人原稿や記事コンテンツ作成）\n②求人広告の運用（Indeedやその他検索エンジンの運用、データ分析・レポート作成・改善を実行）\n③コーディネート提案（採用目標達成のために課題に対する企画提案）\n④採用サイトの制作（HRハッカープラスを使って、お客様のらしさを発信するための採用サイトを制作・ディレクション）\n⑤プロジェクトマネジメント（採用広報コンテンツの制作やプロジェクトの進行管理）\n⑥顧客マネジメント（お客様との打ち合わせや定例MTG、オンボーディング）\n⑦ノウハウシェアリング（実績・事例を蓄積し、ノウハウをチーム内や顧客に共有・活用）\n⑧社内・パートナー連携（IndeedのCS・渉外担当との連携など、社内外然るべき人とコミュニケーションをとり連携）',
      onboarding:'STEP1（入社日〜1週間後）：ハウスルールや自社理解、業界や商材理解のための研修\nSTEP2（〜1ヶ月）：クライアント引き継ぎ、独り立ち\nあいちゃんこと相坂がメインの教育担当としてサポート。鼓舞屋メンバーもサポートします。',
      goals:'・応募者管理入力数〇%\n・採用目標kintone or HRハッカー入力率100%\n・強固な実績紹介記事をコーポレートサイトに7本アップ'
    },
    js:{
      required:'学歴・性別・経験不問！ブランクOK\n業界問わずカスタマーサクセスの経験がある方歓迎\nExcel、Wordを使用した実務経験や営業経験のある方は尚歓迎',
      preferred:'カスタマーサクセス経験、Excel/Word実務経験、営業経験',
      knowledge:'言霊・原理・構造のどれかに強い',
      base_skills:'IQ×EQ×やり切る力\n自社の価値観への解像度を自ら上げる',
      likes:'・お客様のために・チームのためにを純度100%のこころで考えられる仕事がしたい人\n・仕事をやり遂げるのは当たり前。その上で「本当に相手のためになることは何か」を考えられる人\n・人には優しいけど自分には少し厳しいくらいの人\n・自分の機嫌を自分で取れる人\n・期待値を超える仕事を心掛けられる人',
      dislikes:'・意志のない人\n・周りに流される人\n・利益だけを追求する組織\n・っぽいこと言う大人\n・受け身なスタンス\n・相手へのリスペクトがない人',
      habits:'・わからないことは一旦ググる癖のある人\n・難しく考えすぎずとりあえずやってみる！ができる人\n・どっちでもよくても「どっちでもいい」と言わない人'
    }
  },
  {
    id:'p2',job:'営業',icon:'💼',nickname:'脈々 粋てる',
    persona:{
      nickname:'脈々 粋てる',
      catchcopy:'脈々続く文化をリスペクトする粋なコミット系サバイバー',
      motivationType:'組織型',
      moyamoya:'ソースオブエナジーを共にする粋な大人が周りにいない\n・何某かの物事の成り立ちをリスペクトし、100年先まで見据えて働く大人が周りにいない\n・行動し努力してきたが、今の自分のままじゃ足りない\n・1 of themにはなりたくない\n・世の中に対して影響力を持ちたいが、自分がどう価値を発揮できるかは見えていない\n・強いチームで前進する環境に飢えている',
      seeking:'100年先に承継する、粋なチームを作りたい\n・受け継がれるものにロマンを感じし、その一部になりたい\n・ビジネスで地域・社会・日本を愛したい\n・生き様に影響するようなカッコイイ仲間と働きたい\n・志に向かって本気で前進するチームで一緒にやりたい\n・仕事もプライベートでも、なんでもやってゴリゴリ成長したい\n・いくらでもフィードバックが欲しい',
      values_like:'・顧客と受け継がれるカルチャー\n・個人よりチームで成果を上げること\n・対面での人とのつながり\n・ポジティブな意見交換\n・顧客と受け継がれていくものに貢献する上での成長実感、自己価値の発見\n・成長のための帰れるフィードバック',
      values_dislike:'・オリジナリティ、リスペクトのないクリエイティブ\n・一貫性がない、本質的じゃないコンテンツ\n・現状維持の環境',
      stance:'#脈々 #ルーツ #リスペクト #型があっての型破り #オリジナル\n・仕事における自分の理想基準を持っている\n・どうせやるなら自分が誇れるまでやり切る\n・成長も人生も自分次第\n・やり方よりあり方を磨き込む\n・チームでやるのが面白い',
      habits:'・何かに興味を持ったら、そのルーツや背景まで調べないと気が済まない\n・アッパーな目標を自分に課し、ストイックに達成してきた\n・うまくいったことや作戦をシェアせずにいられない→パートナー？\n・マグマがある人を何とかして助けたい\n・相手の気持ちを観察し先回りして準備しがち\n・お礼、節目の挨拶は必ずする',
      experience:'・幼少期から、周りの大人からリスペクトを浴びてきた\n・音楽・映画・美術・ファッション・文学・地域・神社仏閣...歴史あるものに触れてきた\n・その道の専門家に会いにいく、自分でもやってみるなど、自分の頭と体で追体験した経験がある\n・家族・兄弟・友人・先輩誰でもいいが、年上と深いつながりを持ってきた\n・何らかを改善すべく提案するのは当たり前\n・自己決定で己の人生に影響する何らかの選択をし、行動→体験を自己解釈し血肉にしている',
      skills:'・IQ（考える力）×EQ（人間力）×AQ（やり切る力）\n・自社/他社の価値観への解像度を自ら上げる（憑依）'
      },
    jd:{
      title:'セールス',employment:'正社員',
      location:'〒153-0051 東京都目黒区上目黒1-3-7 VORT代官山3F',
      station:'中目黒駅 徒歩5分',
      hours:'10:00〜19:00（実働8時間／休憩60分）原則出社',
      mission:'強固な雇用を創出する',
      work:'【目指す先】#御社にハマる人採用します\n沸騰屋はただの雇用の創出するチームではない。"強固"な雇用を生み出す採用戦略を描き、伴走していくチームである。強固な採用とは労働条件のみではなく、価値観でつながる採用だ。お客さんの事業計画/価値観を頭、腹、肌で理解し、経営者の次に思考する。右脳＝自社コンテンツを生み出すクリエイティビティと、左脳＝定量データに裏付けされた分析・改善提案で、強固な採用を創出し、働くかっこいい大人を増やしていく。\n\n【関わる領域】採用コンサル・採用広報支援・採用コンテンツ制作・採用広告運用・組織コンサル・ブランディングコンサル\n\n【業務内容】商談相手：企業の採用担当者、人事責任者、経営者\n◆インプット：利益構造理解、ビジネスプロセス理解、組織体制理解、取扱い商材理解、競合理解、未来の事業計画\n◆営業活動：商談設定、お客様との商談・打ち合わせ、採用戦略立案と提案（課題抽出→解決策考察→企画書作成→議事録作成→プレゼンテーション）、クロージング\n◆プロジェクト進行：採用予実管理、納品RM作成、スケジュール進捗管理、CSチームと改善提案作成、お客さんと定例MTG',
      onboarding:'STEP1（入社日〜1週間後）：ハウスルールや自社理解、業界や商材理解のための研修\nSTEP2（〜1ヶ月）：商談同席（約50商談）\nSTEP3（2ヶ月目以降）：クライアント引き継ぎ、独り立ち、実際に予算目標を持って営業\nOJTにて佐々木が教育担当として1on1や商談の同行など、戦力化に伴走します。',
      goals:'粗利目標達成率100%\n目標設定企業率100%（KPIを最低1つ決定）\n採用課題の仮説設定ミーティング50社（1人10社）'
    },
    js:{
      required:'BtoBの営業経験（年数・業界不問）※学歴・性別・資格不問',
      preferred:'HR業界での勤務経験、無形商材を扱った経験',
      knowledge:'言霊・原理・構造のどれかに強い',
      base_skills:'IQ×EQ×やり切る力\n自社の価値観への解像度を自ら上げる',
      likes:'・人生を自己決定で生きてる人\n・人間臭いごきげんな大人\n・自走\n・信頼という名の丸投げ\n・程よい自責\n・自分の頭で考えぬくこと\n・本質的な話\n・社内・社外でチームで乗り越えること\n・直接現場に出て人と接すること',
      dislikes:'・意志のない人\n・周りに流される人\n・利益だけを追求する組織\n・っぽいこと言う大人\n・体験してないのにわかった風な人\n・受け身なスタンス\n・相手へのリスペクトがない人\n・他責思考\n・モチベーション（セルフコントロールしとけよ）',
      habits:'・ナマの体験を自ら浴びにいく\n・学びや思考を紙とペンで整理・構造化する\n・基本的な礼儀が備わっている\n・約束を守る\n・本を読む\n・議事録を必ず取る\n・お礼、節目の挨拶は必ずする'
    }
  },
  {
    id:'p3',job:'営業',icon:'2025.12',nickname:'ちょいボン　ピン太',
    persona:{
      nickname:'ちょいボン　ピン太',
      catchcopy:'トップラインが見えた人',
      motivationType:'',
      moyamoya:'・今の延長線上にトップラインが見えた\n・本当に改善したいならやればよくない？！\n・改善回している風の会議\n・馬車馬のように働け！→自分の寿命の中だけ\n・現状維持\n・ここにいる自分の将来像が見えた（ワクワクしない）\n・感じたギャップ「実際働いてみると猫かぶってる」\n・一歩目のセンス（1社目が携帯ショップはセンスがない）\n・抜け感があるかどうか\n・自分が関わらないと5年先まであるかわからない\n・一緒に整えることにロマンを感じる',
      seeking:'・自分の寿命を超えていくチームってやばいな\n・本物の価値は残る\n・チームで難易度の高い仕事をやりたい\n・自分のためを突き詰めると相手のためになる',
      values_like:'',
      values_dislike:'',
      stance:'#サバイブ経験　#生命力　#良い人を巻き込む\n・小さい頃から仕事って面白いを浴びてきた\n・大人がガチなピンチを楽しみながら越える姿を見てきた\n・すごいことをニコニコしながらやっている\n・強固なつながりを知っている\n・ガチで目標を追うチームをしっている',
      habits:'・何かに興味を持ったら、そのルーツや背景まで調べないと気が済まない\n・アッパーな目標を自分に課し、ストイックに達成してきた\n・マグマがある人を何とかして助けたい\n・相手の気持ちを観察し先回りして準備しがち\n・お礼、節目の挨拶は必ずする',
      experience:'・小さい頃から心から楽しんでいる大人を浴びてきた（エンタメ系会社を営む父、神社前でお茶屋さんを営む祖母）\n・大人がガチなピンチを楽しみながら越える姿を見てきた\n・強固なつながりを知っている\n・ガチで目標を追うチームをしっている\n・「お前らここにいたんだ」と思える仲間に会えたことがある',
      skills:'・IQ（考える力）×EQ（人間力）×AQ（やり切る力）\n・自社/他社の価値観への解像度を自ら上げる（憑依）'
      },
    jd:{
      title:'セールス',employment:'正社員',
      location:'〒153-0051 東京都目黒区上目黒1-3-7 VORT代官山3F',
      station:'中目黒駅 徒歩5分',
      hours:'10:00〜19:00（実働8時間／休憩60分）原則出社',
      mission:'強固な雇用を創出する',
      work:'【目指す先】#御社にハマる人採用します\n沸騰屋はただの雇用の創出するチームではない。"強固"な雇用を生み出す採用戦略を描き、伴走していくチームである。強固な採用とは労働条件のみではなく、価値観でつながる採用だ。お客さんの事業計画/価値観を頭、腹、肌で理解し、経営者の次に思考する。右脳＝自社コンテンツを生み出すクリエイティビティと、左脳＝定量データに裏付けされた分析・改善提案で、強固な採用を創出し、働くかっこいい大人を増やしていく。\n\n【関わる領域】採用コンサル・採用広報支援・採用コンテンツ制作・採用広告運用・組織コンサル・ブランディングコンサル\n\n【業務内容】商談相手：企業の採用担当者、人事責任者、経営者\n◆インプット：利益構造理解、ビジネスプロセス理解、組織体制理解、取扱い商材理解、競合理解、未来の事業計画\n◆営業活動：商談設定、お客様との商談・打ち合わせ、採用戦略立案と提案（課題抽出→解決策考察→企画書作成→議事録作成→プレゼンテーション）、クロージング\n◆プロジェクト進行：採用予実管理、納品RM作成、スケジュール進捗管理、CSチームと改善提案作成、お客さんと定例MTG',
      onboarding:'STEP1（入社日〜1週間後）：ハウスルールや自社理解、業界や商材理解のための研修\nSTEP2（〜1ヶ月）：商談同席（約50商談）\nSTEP3（2ヶ月目以降）：クライアント引き継ぎ、独り立ち、実際に予算目標を持って営業\nOJTにて佐々木が教育担当として1on1や商談の同行など、戦力化に伴走します。',
      goals:'粗利目標達成率100%\n目標設定企業率100%（KPIを最低1つ決定）\n採用課題の仮説設定ミーティング50社（1人10社）'
    },
    js:{
      required:'BtoBの営業経験（年数・業界不問）※学歴・性別・資格不問',
      preferred:'HR業界での勤務経験、無形商材を扱った経験',
      knowledge:'言霊・原理・構造のどれかに強い',
      base_skills:'IQ×EQ×やり切る力\n自社の価値観への解像度を自ら上げる',
      likes:'・人生を自己決定で生きてる人\n・人間臭いごきげんな大人\n・自走\n・信頼という名の丸投げ\n・程よい自責\n・自分の頭で考えぬくこと\n・本質的な話\n・社内・社外でチームで乗り越えること\n・直接現場に出て人と接すること',
      dislikes:'・意志のない人\n・周りに流される人\n・利益だけを追求する組織\n・っぽいこと言う大人\n・体験してないのにわかった風な人\n・受け身なスタンス\n・相手へのリスペクトがない人\n・他責思考\n・モチベーション（セルフコントロールしとけよ）',
      habits:'・ナマの体験を自ら浴びにいく\n・学びや思考を紙とペンで整理・構造化する\n・基本的な礼儀が備わっている\n・約束を守る\n・本を読む\n・議事録を必ず取る\n・お礼、節目の挨拶は必ずする'
    }
  }
];;
var _curPersonaId=personaList.length?personaList[0].id:'p1';
var _curPersonaTab='persona'; // 'persona' | 'jd' | 'js'

function rPersona(c,ta){
  ta.innerHTML='<button class="btn btn-p btn-sm" onclick="openPersonaEdit()">+ ペルソナを追加</button>';
  var s='<div class="shd"><div><div class="sttl">ペルソナ &amp; JD/JS</div><div class="ssub">職種ごとにペルソナ・職務定義書・スペックを管理</div></div></div>';
  // ペルソナタブ（5個ずつ折り返し）
  s+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px">';
  personaList.forEach(function(p){
    var isCur=p.id===_curPersonaId;
    var _isDate = p.icon && p.icon.length > 2;
    var _tabInner = _isDate
      ? '<div style="font-size:12px;font-weight:600;line-height:1.3">'+(p.nickname||p.job)+'</div><div style="font-size:10px;color:'+(isCur?'rgba(255,255,255,0.8)':'var(--tx3)')+';margin-top:1px">'+p.icon+'</div>'
      : p.icon+' '+(p.nickname||p.job);
    s+='<button class="btn btn-'+(isCur?'p':'s')+' pjob-tab" data-pid="'+p.id+'" style="flex:0 0 calc(20% - 7px);justify-content:center;flex-direction:column;padding:6px 8px;min-height:40px">'+_tabInner+'</button>';
  });
  s+='</div>';
  var cur=personaList.find(function(p){return p.id===_curPersonaId;});
  if(!cur){c.innerHTML=s;return;}
  // サブタブ
  var tabs=[{k:'persona',l:'👤 ペルソナ'},{k:'jd',l:'📋 JD'},{k:'js',l:'📐 JS'}];
  s+='<div style="display:flex;gap:6px;margin-bottom:16px;border-bottom:2px solid var(--bd);padding-bottom:10px">';
  tabs.forEach(function(t){
    var isCur=t.k===_curPersonaTab;
    s+='<button class="btn btn-'+(isCur?'p':'s')+' btn-sm psubtab" data-tab="'+t.k+'">'+t.l+'</button>';
  });
  s+='<div style="margin-left:auto"><button class="btn btn-s btn-sm pcur-edit">✎ 編集</button> <button class="btn btn-s btn-sm pcur-del" style="color:var(--red)">削除</button></div>';
  s+='</div>';
  // コンテンツ
  if(_curPersonaTab==='persona'){
    var pe=cur.persona||{};
    var blocks=[
      {title:'😤 モヤモヤ（現状への違和感・悩み・課題）',key:'moyamoya',col:'var(--red)'},
      {title:'✨ 求めていること',key:'seeking',col:'var(--blue)'},
      {title:'💙 好き（価値観）',key:'values_like',col:'var(--teal)'},
      {title:'💢 嫌い',key:'values_dislike',col:'var(--amber)'},
      {title:'🧭 スタンス・行動の軸',key:'stance',col:'var(--green)'},
      {title:'🔄 習慣',key:'habits',col:'var(--blue)'},
      {title:'🌱 経験',key:'experience',col:'var(--teal)'},
      {title:'⚡ スキル',key:'skills',col:'var(--amber)'},
    ];
    s+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
    s+='<div class="tw" style="padding:16px;grid-column:1/-1">';
    s+='<div style="font-size:20px;font-weight:800;margin-bottom:4px">'+cur.icon+' '+(cur.nickname||cur.job)+'</div>';
    if(pe.catchcopy)s+='<div style="font-size:13px;color:var(--blue);font-weight:600;margin-bottom:8px">'+pe.catchcopy+'</div>';
    if(pe.motivationType)s+='<div style="font-size:11px;color:var(--tx3)">モチベーションタイプ：<span style="font-weight:700;color:var(--tx)">'+pe.motivationType+'</span></div>';
    s+='</div>';
    blocks.forEach(function(b){
      if(!pe[b.key])return;
      s+='<div class="tw" style="padding:14px"><div style="font-size:11px;font-weight:700;color:'+b.col+';margin-bottom:8px">'+b.title+'</div>';
      s+='<div style="font-size:12px;color:var(--tx2);line-height:1.8;white-space:pre-line">'+pe[b.key]+'</div></div>';
    });
    s+='</div>';
  } else if(_curPersonaTab==='jd'){
    var jd=cur.jd||{};
    s+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
    s+='<div class="tw" style="padding:16px;grid-column:1/-1"><div style="font-size:16px;font-weight:700;margin-bottom:12px">📋 JD — '+(jd.title||cur.nickname||cur.job)+'</div>';
    [{l:'雇用形態',v:jd.employment},{l:'勤務地',v:jd.location},{l:'最寄駅',v:jd.station},{l:'勤務時間',v:jd.hours},{l:'チームミッション',v:jd.mission?'「'+jd.mission+'」':''}].forEach(function(r){if(!r.v)return;s+='<div style="display:flex;gap:12px;padding:8px 0;border-bottom:1px solid var(--bd2)"><div style="font-size:11px;font-weight:700;color:var(--tx3);white-space:nowrap;min-width:100px">'+r.l+'</div><div style="font-size:12px;color:var(--tx)">'+r.v+'</div></div>';});
    s+='</div>';
    [{t:'仕事内容',v:jd.work},{t:'入社後の流れ',v:jd.onboarding},{t:'目標',v:jd.goals}].forEach(function(b){if(!b.v)return;s+='<div class="tw" style="padding:14px"><div style="font-size:12px;font-weight:700;margin-bottom:8px;color:var(--tx)">'+b.t+'</div><div style="font-size:12px;color:var(--tx2);line-height:1.8;white-space:pre-line">'+b.v+'</div></div>';});
    s+='</div>';
  } else {
    var js=cur.js||{};
    s+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
    [{t:'必須経験',v:js.required,col:'var(--red)'},{t:'あれば活かせる経験',v:js.preferred,col:'var(--amber)'},{t:'知識',v:js.knowledge,col:'var(--blue)'},{t:'基礎スキル',v:js.base_skills,col:'var(--teal)'},{t:'好き',v:js.likes,col:'var(--green)'},{t:'嫌い',v:js.dislikes,col:'var(--red)'},{t:'習慣',v:js.habits,col:'var(--blue)'}].forEach(function(b){if(!b.v)return;s+='<div class="tw" style="padding:14px"><div style="font-size:11px;font-weight:700;color:'+b.col+';margin-bottom:8px">'+b.t+'</div><div style="font-size:12px;color:var(--tx2);line-height:1.8;white-space:pre-line">'+b.v+'</div></div>';});
    s+='</div>';
  }
  c.innerHTML=s;
  c.querySelectorAll('.pjob-tab').forEach(function(b){b.addEventListener('click',function(){_curPersonaId=this.getAttribute('data-pid');render('persona');});});
  c.querySelectorAll('.psubtab').forEach(function(b){b.addEventListener('click',function(){_curPersonaTab=this.getAttribute('data-tab');render('persona');});});
  var editBtn=c.querySelector('.pcur-edit');
  if(editBtn)editBtn.addEventListener('click',function(){openPersonaEdit(_curPersonaId);});
  var delBtn=c.querySelector('.pcur-del');
  if(delBtn)delBtn.addEventListener('click',function(){deletePersona(_curPersonaId);});
}

function openPersonaEdit(id){
  var p=id?personaList.find(function(x){return x.id===id;}):null;
  var tab=_curPersonaTab;
  document.getElementById('pe-id').value=p?p.id:'p'+Date.now();
  document.getElementById('pe-job').value=p?p.job:'';
  document.getElementById('pe-nickname').value=p?(p.nickname||p.job):'';
  document.getElementById('pe-icon').value=p?p.icon:'💼';
  document.getElementById('pe-ttl').textContent=p?'ペルソナを編集':'ペルソナを追加';
  // コピー元選択（新規追加のみ表示）
  var cpRow=document.getElementById('pe-copy-row');
  var cpSel=document.getElementById('pe-copy-from');
  if(cpRow)cpRow.style.display=p?'none':'flex';
  if(cpSel&&!p){
    cpSel.innerHTML='<option value="">— コピーしない —</option>';
    personaList.forEach(function(x){cpSel.innerHTML+='<option value="'+x.id+'">'+x.icon+' '+(x.nickname||x.job)+'</option>';});
  }
  var pe=p&&p.persona?p.persona:{};
  ['nickname','catchcopy','motivationType','moyamoya','seeking','values_like','values_dislike','stance','habits','experience','skills'].forEach(function(k){
    var el=document.getElementById('pe-'+k);if(el)el.value=pe[k]||'';
  });
  var jd=p&&p.jd?p.jd:{};
  ['title','employment','location','station','hours','mission','work','onboarding','goals'].forEach(function(k){
    var el=document.getElementById('pejd-'+k);if(el)el.value=jd[k]||'';
  });
  var js=p&&p.js?p.js:{};
  ['required','preferred','knowledge','base_skills','likes','dislikes','habits'].forEach(function(k){
    var el=document.getElementById('pejs-'+k);if(el)el.value=js[k]||'';
  });
  ['persona','jd','js'].forEach(function(t){
    var el=document.getElementById('pe-tab-'+t);if(el)el.style.display=t===tab?'block':'none';
    var btn=document.getElementById('pe-tabBtn-'+t);if(btn)btn.className='btn btn-'+(t===tab?'p':'s')+' btn-sm';
  });
  document.getElementById('modal-persona').classList.add('open');
}
function applyPersonaCopy(){
  var srcId=document.getElementById('pe-copy-from').value;
  if(!srcId)return;
  var src=personaList.find(function(x){return x.id===srcId;});
  if(!src)return;
  // JD/JSをコピー
  var jd=src.jd||{};
  ['title','employment','location','station','hours','mission','work','onboarding','goals'].forEach(function(k){
    var el=document.getElementById('pejd-'+k);if(el)el.value=jd[k]||'';
  });
  var js=src.js||{};
  ['required','preferred','knowledge','base_skills','likes','dislikes','habits'].forEach(function(k){
    var el=document.getElementById('pejs-'+k);if(el)el.value=js[k]||'';
  });
}

function switchPersonaEditTab(t){
  ['persona','jd','js'].forEach(function(k){
    var el=document.getElementById('pe-tab-'+k);if(el)el.style.display=k===t?'block':'none';
    var btn=document.getElementById('pe-tabBtn-'+k);if(btn)btn.className='btn btn-'+(k===t?'p':'s')+' btn-sm';
  });
}
function savePersona(){
  var id=document.getElementById('pe-id').value;
  var pe={};
  ['nickname','catchcopy','motivationType','moyamoya','seeking','values_like','values_dislike','stance','habits','experience','skills'].forEach(function(k){
    var el=document.getElementById('pe-'+k);pe[k]=el?el.value:'';
  });
  var jd={};
  ['title','employment','location','station','hours','mission','work','onboarding','goals'].forEach(function(k){
    var el=document.getElementById('pejd-'+k);jd[k]=el?el.value:'';
  });
  var js={};
  ['required','preferred','knowledge','base_skills','likes','dislikes','habits'].forEach(function(k){
    var el=document.getElementById('pejs-'+k);js[k]=el?el.value:'';
  });
  var item={id:id,job:document.getElementById('pe-job').value,nickname:document.getElementById('pe-nickname').value,icon:document.getElementById('pe-icon').value,persona:pe,jd:jd,js:js};
  var idx=personaList.findIndex(function(x){return x.id===id;});
  if(idx>=0){personaList[idx]=item;}else{personaList.push(item);_curPersonaId=id;}
  document.getElementById('modal-persona').classList.remove('open');
  render('persona');
}
function deletePersona(id){
  if(!confirm('この職種を削除しますか？'))return;
  personaList=personaList.filter(function(x){return x.id!==id;});
  if(personaList.length)_curPersonaId=personaList[0].id;
  render('persona');
}








// ===== 全文検索 =====
function doSearch(q){
  var box=document.getElementById('sb-results');
  if(!box)return;
  q=(q||'').trim();
  if(q.length<1){box.style.display='none';box.innerHTML='';return;}
  var lq=q.toLowerCase();
  var results=[];

  // ① 応募者（基本情報 + メモ）
  apps.forEach(function(a){
    var base=[a.name,a.job,a.src,a.stage,a.s1,a.s3,a.s4,a.s5,a.memo||'',a.title||''].join(' ');
    if(base.toLowerCase().indexOf(lq)>=0){
      results.push({type:'👤 応募者',label:a.name+' / '+a.job+' / '+a.stage,
        sub:'',action:function(id){return function(){openD(id);_closeSearch();};}(a.id)});
    }
  });

  // ② お掛け合いシート（面談内容フリーワード検索）
  sheets.forEach(function(sh){
    var a=apps.find(function(x){return x.id===sh.aid;});
    var shText=[
      sh.kc1,sh.kc2,sh.kc3,sh.kc4,sh.kc5,sh.kc6,sh.kc7,sh.ky,
      sh.kq1,sh.kq2,sh.kq3,sh.kq4,sh.kq5,sh.kq6,sh.kq7,sh.kq8,
      sh.t1r,sh.t1g,sh.t1u,sh.s1r,sh.s1g,sh.s1u,sh.y1r
    ].filter(Boolean).join(' ');
    if(shText.toLowerCase().indexOf(lq)>=0){
      var name=a?a.name:'不明';
      results.push({type:'📝 お掛け合い',label:name+' のシートに一致',
        sub:_snippet(shText,lq),action:function(id){return function(){if(id){openD(id);} _closeSearch();};}(a?a.id:null)});
    }
  });

  // ③ メールテンプレート
  TPLS.forEach(function(t){
    if((t.title+' '+t.body).toLowerCase().indexOf(lq)>=0){
      results.push({type:'✉️ テンプレ',label:t.title,
        sub:_snippet(t.body,lq),action:function(){go('emails');_closeSearch();}});
    }
  });

  // ④ 採用基準
  (criteriaItems||[]).forEach(function(c){
    var txt=[c.name||c.title||'',c.desc||'',c.category||'',c.label||''].join(' ');
    if(txt.toLowerCase().indexOf(lq)>=0){
      results.push({type:'🎯 採用基準',label:c.name||c.title||'',
        sub:_snippet(c.desc||'',lq),action:function(){go('criteria');_closeSearch();}});
    }
  });

  // ⑤ 掲載原稿
  (jobList||[]).forEach(function(j){
    var txt=[j.media||'',j.name||'',j.job||'',j.type||'',j.status||''].join(' ');
    if(txt.toLowerCase().indexOf(lq)>=0){
      results.push({type:'📄 掲載原稿',label:(j.media||'')+'：'+(j.name||''),
        sub:(j.job||'')+(j.type?' / '+j.type:'')+(j.status?' ('+j.status+')':''),
        action:function(){go('jobs');_closeSearch();}});
    }
  });

  // ⑥ ペルソナ & JD/JS
  (personaList||[]).forEach(function(p){
    var pe=p.persona||{};
    var jd=p.jd||{};
    var js=p.js||{};
    var txt=[p.nickname,p.job,pe.catchcopy,pe.moyamoya,pe.seeking,pe.stance,pe.habits,pe.experience,
             jd.work,jd.mission,jd.goals,js.required,js.preferred].filter(Boolean).join(' ');
    if(txt.toLowerCase().indexOf(lq)>=0){
      results.push({type:'👥 ペルソナ',label:(p.nickname||p.job)+' に一致',
        sub:_snippet(txt,lq),action:function(){go('persona');_closeSearch();}});
    }
  });

  // ⑦ 選考フロー
  (flowSteps||[]).forEach(function(f){
    if((f.name+' '+(f.desc||'')).toLowerCase().indexOf(lq)>=0){
      results.push({type:'🔀 選考フロー',label:f.name,
        sub:_snippet(f.desc||'',lq),action:function(){go('flow');_closeSearch();}});
    }
  });

  // ⑧ ページ名
  var menus=[
    {k:'kpi',l:'予実管理'},{k:'dash',l:'ダッシュボード'},{k:'sp',l:'応募管理表'},
    {k:'kakegai',l:'お掛け合いシート'},{k:'emails',l:'メールテンプレート'},
    {k:'training',l:'研修フロー'},{k:'flow',l:'選考フロー'},{k:'jobs',l:'掲載原稿一覧'},
    {k:'criteria',l:'採用基準'},{k:'persona',l:'ペルソナ & JD/JS'}
  ];
  menus.forEach(function(m){
    if(m.l.toLowerCase().indexOf(lq)>=0){
      results.push({type:'📂 ページ',label:m.l,sub:'',
        action:function(key){return function(){go(key);_closeSearch();};}(m.k)});
    }
  });

  // 結果表示
  if(!results.length){
    box.innerHTML='<div style="padding:10px 12px;font-size:12px;color:var(--tx3)">「'+q+'」に一致する結果がありません</div>';
    box.style.display='block';return;
  }
  var h='<div style="padding:6px 12px;font-size:10px;font-weight:700;color:var(--tx3);border-bottom:1px solid var(--bd2)">'+results.length+'件見つかりました</div>';
  results.slice(0,15).forEach(function(r,idx){
    h+='<div class="sr-item" data-idx="'+idx+'" style="padding:7px 12px;cursor:pointer;border-bottom:1px solid var(--bd2)">'
      +'<div style="display:flex;gap:6px;align-items:center">'
      +'<span style="font-size:10px;background:var(--sf2);padding:2px 5px;border-radius:3px;white-space:nowrap;color:var(--tx3)">'+r.type+'</span>'
      +'<span style="font-size:12px;color:var(--tx);font-weight:500">'+r.label+'</span></div>'
      +(r.sub?'<div style="font-size:11px;color:var(--tx3);margin-top:2px;padding-left:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:220px">'+r.sub+'</div>':'')
      +'</div>';
  });
  if(results.length>15)h+='<div style="padding:6px 12px;font-size:11px;color:var(--tx3)">他 '+(results.length-15)+'件...</div>';
  box.innerHTML=h;
  box.style.display='block';
  box.querySelectorAll('.sr-item').forEach(function(el,idx){
    el.addEventListener('click',function(){results[idx].action();});
    el.addEventListener('mouseenter',function(){this.style.background='var(--sf2)';});
    el.addEventListener('mouseleave',function(){this.style.background='';});
  });
}
function _snippet(text,q){
  var idx=text.toLowerCase().indexOf(q.toLowerCase());
  if(idx<0)return '';
  var start=Math.max(0,idx-15);
  var end=Math.min(text.length,idx+q.length+30);
  return (start>0?'…':'')+text.slice(start,end)+(end<text.length?'…':'');
}
function _closeSearch(){
  var inp=document.getElementById('sb-search');
  var box=document.getElementById('sb-results');
  if(inp)inp.value='';
  if(box){box.style.display='none';box.innerHTML='';}
}
// 検索ボックス外クリックで閉じる
document.addEventListener('click',function(e){
  var box=document.getElementById('sb-results');
  var inp=document.getElementById('sb-search');
  if(box&&inp&&!box.contains(e.target)&&e.target!==inp){box.style.display='none';}
});


function openSrcJobSettings(){
  document.getElementById('sj-srcs').value=SRCS.join(',');
  document.getElementById('sj-jobs').value=JOBS.join(',');
  document.getElementById('modal-srcjob').classList.add('open');
}
function saveSrcJobSettings(){
  var ns=document.getElementById('sj-srcs').value.split(',').map(function(s){return s.trim();}).filter(Boolean);
  var nj=document.getElementById('sj-jobs').value.split(',').map(function(s){return s.trim();}).filter(Boolean);
  if(ns.length)SRCS=ns;
  if(nj.length)JOBS=nj;
  try{localStorage.setItem('invision_settings',JSON.stringify({fiscalFrom:kpiG.fiscalFrom,fiscalTo:kpiG.fiscalTo,srcs:SRCS,jobs:JOBS,ma:kpiG.ma,mi:kpiG.mi,mg:kpiG.mg,mg_mi:kpiG.mg_mi}));}catch(e){}
  document.getElementById('modal-srcjob').classList.remove('open');
  render('sp');
}


// ===== Googleカレンダー連携 =====
function openGcal(appId){
  var a=apps.find(function(x){return x.id===appId;});
  if(!a)return;
  // 次の面接種別を判定
  var stageLabel='面接';
  var dateField='d3';
  if(!a.s3){stageLabel='一次面接';dateField='d3';}
  else if(!a.s4){stageLabel='二次面接';dateField='d4';}
  else if(!a.s5){stageLabel='最終面接';dateField='d5';}
  // イベントタイトル
  var title='['+stageLabel+'] '+a.name+' / '+a.job+(a.src?' / '+a.src:'');
  // 詳細テキスト（お掛け合いシートリンクを含む）
  var details=[
    '■ 応募者：'+a.name,
    '■ 職種：'+a.job,
    '■ 応募経由：'+a.src,
    '■ 応募日：'+a.date,
    '■ 現在ステージ：'+a.stage,
    '',
    '📋 お掛け合いシート：',
    'https://docs.google.com/spreadsheets/d/1sM1tCBebkqmwG5H-fZzfryVXFDgamavOGI4KYhRUpIk/edit?gid=470491840#gid=470491840',
    '',
    '※ Google Meetのリンクはカレンダー保存時に自動生成されます'
  ].join('\n');
  // 既に面接日が設定済みならその日、なければ翌営業日
  var pad=function(n){return String(n).padStart(2,'0');};
  var d;
  if(a[dateField]){
    d=new Date(a[dateField]);
  } else {
    d=new Date();
    d.setDate(d.getDate()+1);
    if(d.getDay()===0)d.setDate(d.getDate()+1);
    if(d.getDay()===6)d.setDate(d.getDate()+2);
  }
  var ds=d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate());
  var start=ds+'T100000';
  var end=ds+'T110000';
  var url='https://calendar.google.com/calendar/render?action=TEMPLATE'
    +'&text='+encodeURIComponent(title)
    +'&details='+encodeURIComponent(details)
    +'&dates='+start+'/'+end;
  window.open(url,'_blank');
}
// 面接日を保存する関数
function saveIntDate(appId, field, val){
  var a=apps.find(function(x){return x.id===appId;});
  if(!a)return;
  a[field]=val;
  render('detail');
}

