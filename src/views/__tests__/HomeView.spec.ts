import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import HomeView from "../HomeView.vue";

describe("Home page", async () => {
    it("should show heading", () => {
        render(HomeView);

        const helloWorldHeader = screen.getByRole("heading");

        expect(helloWorldHeader).toBeInTheDocument();
    });
});
