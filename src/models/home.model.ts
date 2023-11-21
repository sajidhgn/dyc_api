import mongoose, {Schema, Document} from 'mongoose';

interface IBannerslider {
    title: string;
    estimatebtnlink: string;
    casestudybtnlink: string;
}
interface IBannersliderlogos {
    img: string;
}
interface IIndustrylist {
    title:string;
}
interface IBusinesslist {
    title:string;
}
interface IPickyourindustry {
    title:string;
    description:string;
    industrylist:IIndustrylist[];
    businesslist:IBusinesslist[];
}
export interface IHomepage extends Document {
    bannervideo:string;
    bannervideoposter:string;
    bannerslider:IBannerslider[];
    bannersliderlogos: IBannersliderlogos[];
    industrypicker:IPickyourindustry[];
}

const HomepageSchema: Schema = new Schema({

    bannervideo: {
        type: String,
    },
    bannervideoposter: {
        type: String,
    },
    bannerslider: [],
    bannersliderlogos: [],
    industrypicker: []

}, {timestamps: true});

export const HomeModel = mongoose.model<IHomepage>('homepage', HomepageSchema);