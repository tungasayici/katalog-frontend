import {Product} from '../../models/Product'
import {Asset} from '../../models/Asset';
import {Consumer} from '../../models/Consumer';
import {InvestmentLog} from '../../models/InvestmentLog';
import {Like} from '../../models/Like';
import {Tag} from '../../models/Tag';
import {Group} from '../../models/Group';
import {TagsGroups} from '../../models/TagsGroups';

export class ProductItem {
    product = new Product;
    consumer = new Consumer;
    investmentLogList = new Array<InvestmentLog>();
    assetList = new Array<Asset>();
    likeList = new Array<Like>();
    tags = new Array<Tag>();
    groups = new Array<Group>();
}

export class CreateProductItem {
    product  = new  Product;
    investmentLog = new InvestmentLog;
    assetList = new Array<Asset>();
    tagsGroups = new TagsGroups;
}

export class UpdateProductItem {
    product = new Product;
    investmentLog = new InvestmentLog;
    assetList = new Array<Asset>();
    tagsGroups = new TagsGroups;
}