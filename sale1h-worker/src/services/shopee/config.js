const globalConfig =require('../../config');

const config = {
    ...globalConfig,
    apiGetTimeListURL: 'https://shopee.vn/api/v4/flash_sale/get_all_sessions',
    apiGetListID: 'https://shopee.vn/api/v4/flash_sale/get_all_itemids',
    apiGetListItem: 'https://shopee.vn/api/v4/flash_sale/flash_sale_batch_get_items', //
}
module.exports = config;
//categoryid,itemids,promotionid,with_dp_items:true