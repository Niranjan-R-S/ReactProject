import React from "react";
import ReactDOM from 'react-dom';
import RnaTranscriptionApiMethod from "./components/RnaTranscriptionApiMethod";
import TestRenderer from 'react-test-renderer';


describe("Button component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = TestRenderer.create(<RnaTranscriptionApiMethod />);
    const instance = component.getInstance();
    expect(instance.state.rna_strand).toBe("");
    instance.handleSubmit();
    expect(instance.state.rna_strand).toBe("undefined");
  });
});
