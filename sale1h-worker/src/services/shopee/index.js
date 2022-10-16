const sConfig = require('./config.js')
const httpGet = require('../../common/httpRequest.js');

async function getDataFlashes() {
    const data = await httpGet(
        sConfig.apiGetTimeListURL,
        {
          headers:{
            ...sConfig.requestHeader,
            'origin': 'https://shopee.vn/',
            'referer':'https://shopee.vn/'
          }
        }
      );
        
      let lsPromotion =[];
      let currentTime=0;
      let currentPromotion=0;
      if(data && data.data){
        currentTime = data.data.current_session_end_time
        lsPromotion = data.data.sessions.map((p,index) => ({
            name : p.name,
            start_time: p.start_time,
            end_time:p.end_time,
            promotionid:p.promotionid
        }));
        console.log(lsPromotion);
      }

      // Lấy danh sách toàn bộ ID
      //https://shopee.vn/api/v4/flash_sale/get_all_itemids?need_personalize=true&promotionid=116596249141249&sort_soldout=true
      lsPromotion.forEach(item => {
        if(item.end_time == currentTime){
            currentPromotion = item.promotionid;
        }
      });
      const lstId = await httpGet(
        sConfig.apiGetListID,
        {
            params: {
                "need_personalize": true,
                "promotionid": currentPromotion,
                "sort_soldout": true,
              },
          headers:{
            ...sConfig.requestHeader,
            'origin': 'https://shopee.vn/',
            'referer':'https://shopee.vn/'
          }
        }
      );

      console.log(lstId);
      
}

module.exports ={getDataFlashes}