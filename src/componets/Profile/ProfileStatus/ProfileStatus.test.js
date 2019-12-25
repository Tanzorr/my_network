import Reat from "react";
import {create} from "react-test-render";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", ()=>{
    test("status from props should be in the state", ()=>{
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });

    test("after creation span with status should be displayed", ()=>{
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const instance  = component.getInstance();
        let span = instande.findByType("span");
        expect(span.length).toBe(1);
    });
})
