import { AjaxHelper, IJQueryAjaxResponse } from "../Infrastructure/jQueryAjaxHelper";

export class SomeDataApi {
    public static getHomeInfo(data: IPostData): Promise<ISomeData[]> {

        const a1 = AjaxHelper.postJson<ISomeData[]>("/api/SomeData/FirstTest", data);

        const a2 = a1.then(resp => {
            const abc = resp.data;
            //alert(abc[0].id + " - " + abc[1].someNumber);
            return abc;
        }, (resp: IJQueryAjaxResponse<{}>) => {
            alert(resp.error);
            return [];
        });

        return a2;
        //    .catch((resp: IJQueryAjaxResponse<{}>) => {
        //    alert(resp.error);
        //});

        //const prom = new Promise<ISomeData[]>(resolve => {
        //    AjaxHelper.postJson<ISomeData[]>("/api/SomeData/FirstTest", data).then(resp => {
        //        const abc = resp.data;
        //        alert(abc[0].id + " - " + abc[1].someNumber);
        //        resolve(abc);
        //    }).catch((resp: IJQueryAjaxResponse<{}>) => {
        //        alert(resp.error);
        //    });
        //});

        //return prom;
    }
}

export interface ISomeData {
    id: number,
    someNumber: number
}

export interface IPostData {
    id: number,
    someValue: string
}