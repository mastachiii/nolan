import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../cart";
import { BrowserRouter } from "react-router-dom";

// dummy props
const items = ["In The Mood for Love", null, "Parasite", "Green Mile", "Spirited Away", "Ocean's Eleven", 1, {}];

it("Displays correct heading", () => {
    render(
        <BrowserRouter>
            <Cart />
        </BrowserRouter>
    );

    expect(screen.getByRole("heading").textContent).toMatch("CART");
});

describe("Display correct number of items", () => {
    it("Renders all values from an array", () => {
        render(
            <BrowserRouter>
                <Cart items={items} />
            </BrowserRouter>
        );

        expect(screen.getAllByRole("listitem")).toHaveLength(5);
    });
    
    it("Skips invalid values", () => {
        render(
            <BrowserRouter>
                <Cart items={items} />
            </BrowserRouter>
        );

        expect(screen.getAllByRole("listitem")).toHaveLength(5);
    });
});
