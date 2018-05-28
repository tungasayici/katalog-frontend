import {Product} from '../models/Product'
import {Asset} from '../models/Asset';
import {Consumer} from '../models/Consumer';
import {InvestmentLog} from '../models/InvestmentLog';
import {Like} from '../models/Like';

export interface IProductItem {
    product: Product;
    consumer: Consumer;
    investmentLogList: InvestmentLog[];
    assetList: Asset[];
    likeList: Like[];
}
