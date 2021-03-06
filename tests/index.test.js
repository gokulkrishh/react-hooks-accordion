import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Accordion from "../index";

afterEach(cleanup);

describe("Accordion", () => {
  let component;
  const title = "I am an accordion";
  const className = "accordion";
  const onToggleMock = jest.fn();

  beforeEach(() => {
    component = render(
      <Accordion className={className} title={title} onToggle={onToggleMock}>
        <ul>
          <li>content 1</li>
          <li>content 2</li>
          <li>content 3</li>
        </ul>
      </Accordion>
    );

    jest.clearAllMocks();
  });

  it("renders <Accordion /> correctly", () => {
    expect(component.getByText(title).textContent).toEqual(title);
  });

  it("renders <Accordion /> with children correctly", () => {
    expect(component.getByText("content 1").textContent).toEqual("content 1");
    expect(component.getByText("content 2").textContent).toEqual("content 2");
    expect(component.getByText("content 3").textContent).toEqual("content 3");
  });

  it("On click of the accordion title, hide & show the accordion content", () => {
    fireEvent.click(component.getByText(title));
    expect(component.queryByText("content 1")).toBeNull();
    expect(component.queryByText("content 2")).toBeNull();
    expect(component.queryByText("content 3")).toBeNull();

    fireEvent.click(component.getByText(title));
    expect(component.getByText("content 1").textContent).toEqual("content 1");
    expect(component.getByText("content 2").textContent).toEqual("content 2");
    expect(component.getByText("content 3").textContent).toEqual("content 3");
  });

  it("On click of the accordion title, calls the onToggle props", () => {
    fireEvent.click(component.getByText(title));
    expect(onToggleMock).toBeCalledTimes(1);
  });
});
