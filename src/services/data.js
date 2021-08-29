import {FaHome, FaPhone, FaMap, FaInfoCircle, FaSchool, FaInfo} from 'react-icons/fa'
export const menuItems = [
    {
        label: 'ご挨拶',
        icon: <FaHome/>

    },
    {
        label: '保育ルームのぞみの特徴',
        icon: <FaSchool/>

    },
    {
        label: '保育園概要',
        icon: <FaInfo/>

    },
    {
        label: 'アクセス',
        icon: <FaMap/>

    }
]

// title
export const Title = '保育ルームのぞみ';

// data 
export const homeData = { 
    text:'当園は保育士・看護師・職員が一体となって園児の健康・安全に心を配り 保護者が子育てしながら就労に専念できるよう 働くお父さん、お母さんのニーズに対応した保育を行っております',
    title: 'ご挨拶'
};

// feature data 
export const featureData = [
    {
        id: 1,
        text: '看護師が常駐しています 子ども達の毎日の健康管理はもちろん、急な発熱の対応やケガの応急処置なども行いますので、安心して園生活を送る事が出来ます。'
    },
    {
        id: 2,
        text: '英語教室があります。（無料）月1回外部から講師を招き、英語のレッスンを行っております。小さい内から英語に触れる事が大切だと言われており、ダンスをしたりゲームをしたりと子ども達はとても楽しそうです。'
        
    },
    {
        id: 3,
        text: 'お昼寝専用のお部屋があります 静かな環境の中で、ゆっくりと休む事が出来ます。保育士や看護師が常時見守りを行っているので、安心安全な環境です。'
    },
    {
        id: 4,
        text: 'お昼寝用布団の持ち込み不要 敷布団はレンタル利用しており、清潔なものを使用しております。'
    },
]

// basic info
export const basicInfo = [
    {
        name: 'Name',
        text: '保育ルームのぞみ' 
    },
    {
        name: 'Phone number（電話・FAX',
        text: '048-443-2059' 
    },
    {
        name: 'Foundation date （開設年月日)',
        text: '平成23年　9月1日' 
    },
    {
        name: 'Building （建物)',
        text: '鉄筋集合住宅　6階建1階分' 
    },
    {
        name: 'Capacity （定員数）',
        text: '19名' 
    },
    {
        name: 'Workers （職員）',
        text: '施設長、保育士、看護師、子育て支援員、保育補助者、調理員' 
    },
    {
        name: 'Acceptable ages (受け入れ年齢）',
        text: '生後42日〜2歳' 
    },
    {
        name: 'Opening hours （開園時間）',
        text: '月曜〜土曜日　7:30〜18:30'        
    },
    {
        name: 'Closed days （休園日）',
        text: 'Closed days （休園日）' 
    },
    

]

// address 
export const address = 
    {
    title: 'Address（所在地)',
    location: '〒335-0004 埼玉県蕨市中央5-20-23 アネックスアイ102号 蕨駅より徒歩16分 戸田駅より徒歩18分'
    }

