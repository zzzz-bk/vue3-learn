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
    }
}

export default Mock;