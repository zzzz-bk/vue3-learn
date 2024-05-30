import mockjs from "mockjs";
const Mock = {
    getOrder(type){
        let array = []
        for (let i = 0;i<mockjs.Random.integer(5,10);i++){
            array.push(mockjs.mock({
                'name':(type==0?'普通商品':'秒杀商品')+i,
                'price':mockjs.Random.integer(20,500)+'元',
                'buyer':mockjs.Random.cname(),
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'role':mockjs.Random.boolean(),
                'state':mockjs.Random.boolean(),
                'payType':mockjs.Random.boolean(),
                'source':mockjs.Random.url(),
                'phone':mockjs.mock(/\d{11}/)
            }))
        }
        return array
    },
    getGoods(type){
        let array = []
        for(let i=0;i<mockjs.Random.integer(5,10);i++){
            array.push(mockjs.mock({
                'name':(type==0?'普通商品':type==1?'秒杀商品':'今日推荐')+i,
                'img':mockjs.Random.dataImage('60x100','商品实例图'),
                'price':mockjs.Random.integer(20,500)+'元',
                'sellCount':mockjs.Random.integer(10,100),
                'count':mockjs.Random.integer(10,100),
                'refund':mockjs.Random.integer(10,100),
                'refundAmount':mockjs.Random.integer(0,5000)+"元",
                'owner':mockjs.Random.cname(),
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'state':mockjs.Random.boolean()
            }))
        }
        return array;
    },
    getManagerList(){
        let array = []
        for(let i=0;i<mockjs.Random.integer(5,10);i++){
            array.push(mockjs.mock({
                'people':mockjs.Random.csentence(),
                'weixin':mockjs.Random.string(7,10),
                'state':mockjs.Random.boolean(),
                'income':mockjs.Random.integer(0,500000)+'元',
                'refund':mockjs.Random.integer(0,1000),
                'refundAmount':mockjs.Random.integer(0,5000)+'元',
                'source':'站内',
                'customer':mockjs.Random.integer(0,50),
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss')
            }))
        }
        return array
    },
    getManagerReqList(){
        let array = []
        for(let i=0;i<mockjs.Random.integer(5,20);i++){
            array.push(mockjs.mock({
                'userInfo':mockjs.Random.csentence(),
                'state':mockjs.Random.boolean(),
                'updatetime':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'createtime':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss')
            }))
        }
        return array;
    },
    getManagerOrderList(){
        let array = []
        for(let i=0;i<mockjs.Random.integer(5,20);i++){
            array.push(mockjs.mock({
                'type':mockjs.Random.integer(0,1),
                'orderName':mockjs.Random.csentence(),
                'orderNo':mockjs.Random.id(),
                'owner':mockjs.Random.cname(),
                'count':mockjs.Random.integer(100,999),
                'amount':mockjs.Random.integer(10000,999999)+'元',
                'fee':mockjs.Random.integer(1000,99999)+'元',
                'trxtime':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss')
            }))
        }
        return array;
    },
    getTrxinfoList(){
        let array = []
        for(let i=0;i<mockjs.Random.integer(5,20);i++){
            array.push(mockjs.mock({
                'orderName':mockjs.Random.csentence(),
                'orderNo':mockjs.Random.string(),
                'userName':mockjs.Random.cname(),
                'trxtype':mockjs.Random.boolean(),
                'trxtime':mockjs.Random.datetime()
            }))
        }
        return array
    },
    getReportList(type){
        let array = [];
        let YMDHMS = 'yyyy-MM-dd A HH:mm:ss';
        let Y4M2 = 'yyyy-MM';
        let Y4 = 'yyyy';
        for(let i=0;i<mockjs.Random.integer(5,20);i++){
            array.push(mockjs.mock({
                'date':type==0?mockjs.Random.datetime(YMDHMS):type==1?mockjs.Random.datetime(Y4M2):mockjs.Random.datetime(Y4),
                'incoming':mockjs.Random.integer(10000,999999)+'元',
                'outgoing':mockjs.Random.integer(10000,999999)+'元',
                'summary':mockjs.Random.csentence()
            }))
        }
        return array;
    },
    getChartsData(){
        let array = []
        for(let i=0;i<mockjs.Random.integer(6,20);i++){
            array.push(mockjs.Random.integer(0,100))
        }
        return array;
    },
    getTradeData(){
        return mockjs.mock({
            'allTra':mockjs.Random.integer(10000,50000),
            'speTra':mockjs.Random.integer(0,5000),
            'norTra':mockjs.Random.integer(0,5000),
            'userCount':mockjs.Random.integer(0,10000),
            'managerCount':mockjs.Random.integer(0,100),
            'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss')
        })
    }
}

export default Mock;