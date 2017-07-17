/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */
var Mock = require('mockjs')
// var Random = Mock.Random

module.exports = {
  api: '/api/content',
  response: function (req, res) {
    res.send([
      {
        contentId: 0,
        title: '丽江周边游有哪些必体验？（附香格里拉、拉市海、泸沽湖等详细路线）',
        subtitle: '丽江周边',
        picLink: 'http://n4-s.mafengwo.net/c_lfill,w_320,h_170,q_100/s9/M00/44/1F/wKgBs1gsIX6AF-cs' +
            'ACBTr0gfrMs37.jpeg',
            content:'<p>丽江的名声很大，绯闻很多，每每提起它，脑海中浮现的总是艳遇、泡吧、发呆、晒太阳...其实，以丽江为中心的云南滇西风景区，基本上囊括了中国大陆的各色景观，作为一个在滇西旅居多年的行者，我深爱着丽江，爱这儿的蓝天绿水，更爱这暖人的一米阳光，所以，我想把最接地气的玩法推荐给你。不管是自由行还是跟团，都希望你可以在出门之前做到心中有数，给自己一场最完美的旅程。<p>',
        classify: 'domestic',
        number: 'first',
        name: 'guides',
        // name2: '张家界', name3: '三亚',
        RouterName: '/guides'
      }, {
        contentId: 1,
        title: '第一次来西藏怎么玩儿？一看就懂！',
        subtitle: '开篇：西藏旅行实问实答',
        picLink: 'http://c4-q.mafengwo.net/s9/M00/FD/B7/wKgBs1cyrTuAW5VIADotVkVwuyo87.jpeg?imageMo' +
            'gr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2' +
            'F100',
        content:'<p>每人都有个关于旅行的梦，那悠长的梦中肯定有一站叫西藏。西藏是万千旅行者心目中纯净的雪域高原，那里有珠穆朗玛，有神山圣湖，有圣城拉萨，有白云蓝天。我想亲口尝一尝青稞酒酥油茶，亲耳听一听喇嘛们认真的辩经，亲身走一走虔诚的转经路，亲眼望一望那浮着云朵的湛蓝天空。于是，我说，我必须去一次西藏！这一去，就是八年。没错，我在西藏已经待了八年。期间，不少人问我西藏安全吗？西藏到底怎么玩儿？怎么包车？怎么安排行程路线？需要多少天？要不要办边防证？高反了怎么办？我干脆用这篇攻略一一给你解答！</p><h4>开篇：西藏旅行实问实答</h4><p>Q1:西藏怎么去？</p><p>A：这个问题，可以说有N种方法。只要你想来！自驾、骑行、火车、飞机都可以，通常来西藏都选择拉萨作为首站。自驾和骑行可以走川藏（318国道）、滇藏、青藏或新藏公路。川藏和滇藏公路的风景最好，走的人也最多，这两条线走完一半，进入藏区之后，会汇合成一条路。青藏相对好走，但景色不如川滇；新藏公路比较远且艰难，走的人最少。火车的话，北京/上海/广州/西宁/兰州/成都/重庆都有始发至拉萨的Z字头直达车次；买机票，可以飞到拉萨贡嘎机场。补充：暑期来了，拉萨火车票真是一票难求，建议在西安、兰州或者西宁中转一下，买到火车票的几率会大一些。说一下这几种进藏方式的高反情况。自驾和骑行在旅途中都需要很长时间，而且海拔缓慢升高，有较长的适应过程；火车进藏一般是40多个小时，飞机的话就更短了，青藏铁路线从2800米的格尔木开始要慢慢上升到5200米的唐古拉山口，之后海拔又慢慢下降。从格尔木开始，火车头会换成动力超强的从美国进口的NJ2，车厢也开始供氧。但是火车上仍会有人出现初步的头疼头晕等高原反应。这时候注意心态放松，海拔下降了就慢慢好了。</p><p>Q2:西藏怎么玩？至少玩几天？</p><p>A：以拉萨为中心点，可以按东南西北的方位划分区块，每个区块里分布有相对成熟的景区和路线。①拉萨市及近郊：布达拉宫、大昭寺、哲蚌寺和色拉寺，建议游玩1-2天；②拉萨东线（林芝地区）：林芝、巴松措、雅鲁藏布大峡谷、鲁朗、卡定沟、墨脱。建议游玩3-4天；③拉萨南线（山南地区）：羊卓雍错（羊湖）、普莫雍错、桑耶寺、雍布拉康、拉姆拉措、达古峡谷、昌珠寺、哲古错。建议游玩4天；④拉萨西线（珠峰/阿里地区）：日喀则、珠峰大本营、扎什伦布寺、吉隆。常规的藏西珠峰线，一般是四日三晚的游玩时间；阿里地区也属于藏西，主要有冈仁波齐峰、玛旁雍措、古格王朝遗址、札达土林等，最短的阿里南线是8天，阿里小北线是10天，大北线是14天。阿里地区不推荐第一次进藏游玩，所以后面会有单独的阿里攻略给大家。⑤拉萨北部：纳木错、羊八井。建议游玩1-2天。拉萨出发，纳木错可以当天往返，也可以住一晚看日落和日出。综合上面的区块划分，你可以自由组合自己的西藏行程。五天的话，可以游玩拉萨市内和海拔低、氧气足的林芝地区；七天的话，可以再把北部的纳木错加上。不过既然车马劳顿来了，最好安排9-15天，可以把经典线路走一遍</p>',
        number: 'first',
        classify: 'domestic',
        name: 'guides',
        // name2: '张家界', name3: '三亚',
        RouterName: '/guides'
      }, {
        contentId: 2,
        title: '想去张家界？先看过这篇攻略（武陵源景区线路玩法大解析）',
        subtitle: '游玩前，一定要先弄清这些景区景点的关系！',
        picLink: 'http://n4-s.mafengwo.net/c_lfill,w_320,h_170,q_100/s9/M00/44/1F/wKgBs1gsIX6AF-cs' +
            'ACBTr0gfrMs37.jpeg',
        number: 'first',
        classify: 'domestic',
        name: 'guides',
        // name2: '张家界', name3: '三亚',
        RouterName: '/guides'
      }, {
        contentId: 3,
        title: '想去张家界？先看过这篇攻略（武陵源景区线路玩法大解析）',
        subtitle: '游玩前，一定要先弄清这些景区景点的关系！',
        picLink: 'http://n4-s.mafengwo.net/c_lfill,w_320,h_170,q_100/s9/M00/44/1F/wKgBs1gsIX6AF-cs' +
            'ACBTr0gfrMs37.jpeg',
        number: 'first',
        classify: 'domestic',
        name: 'guides',
        // name2: '张家界', name3: '三亚',
        RouterName: '/guides'
      }
    ]);
  }
}