import * as $ from "jquery";
import "promise";

export interface IJQueryAjaxResponse<T> {
    data: T,
    status: string,
    xhr: JQueryXHR, // XMLHttpRuntime object (xhr)
    error?: any
}

export class AjaxHelper {
    public static postJson<T>(url: string, data: object) : Promise<IJQueryAjaxResponse<T>> {

        const promise = new Promise<IJQueryAjaxResponse<T>>(function (resolve, reject) {
            $.post(url, data).then((responseData, status, xhr) => {
                resolve({ data: responseData, status, xhr });
            }, (xhr, status, error) => {
                reject({ data: null, status, xhr, error });
            });

            //if (/* everything turned out fine */) {
            //    resolve("Stuff worked!");
            //}
            //else {
            //    reject(Error("It broke"));
            //}
        });

        return promise;
    }
}