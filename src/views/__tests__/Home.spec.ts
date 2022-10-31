import { expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import HomeView from "../HomeView.vue";

test("it should work", async () => {
  render(HomeView);

  const helloWorldHeader = screen.getByRole("heading");

  expect(helloWorldHeader).toBeInTheDocument();
});
