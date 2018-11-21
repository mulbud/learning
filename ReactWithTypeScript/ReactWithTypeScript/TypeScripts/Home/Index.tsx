import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HelloWorld } from "../Components/HelloWorld";

export default class Index {
    public static main() {
        //console.log("Hello");
        const obj = new Index();
        obj.init();
    }

    private init() {
        //alert("Hello");
        $("#buttonFirst").on('click', (e) => {
            ReactDOM.render(<HelloWorld personName="Muljadi Budiman" />, $("#divForReact")[0]);
        });
        //    const payload = {
        //        id: 33, someValue: "Testing"
        //    }

        //    try {
        //        var data = await SomeDataApi.getHomeInfo(payload);
        //        if (data == null) {
        //            alert("Null here");
        //        } else {
        //            alert("It is returned!");
        //            //processData(data);
        //            // Populate UI over here
        //        }
        //    } catch (e) {
        //        alert("e here");
        //    }
        //    //AjaxHelper.postJson("/api/SomeData/FirstTest", payload).then(resp => {
        //    //    const abc = resp.data as ISomeData[];
        //    //    alert(abc[0].id + " - " + abc[1].someNumber);
        //    //}).catch(resp => {
        //    //    alert("Fail");
        //    //});
        //    //alert("Here");
        //});
    }
}