import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import LoginView from "../LoginView.vue";

describe("Login page", async () => {
    it("should render login header, email and password input", () => {
        render(LoginView);

        const loginHeader = screen.getByRole("heading");
        const emailInput = screen.getByRole("textbox", {
            name: /email/i,
        });
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole("button", { name: /login/i });

        expect(loginHeader).toBeTruthy();
        expect(emailInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(loginButton).toBeTruthy();
    });

    it("should render correct input value for email and password", async () => {
        const user = userEvent.setup();
        const email = "jon.doe@email.com";
        const password = "password123456";

        render(LoginView);

        const emailInput = screen.getByRole("textbox", {
            name: /email/i,
        }) as HTMLInputElement;
        const passwordInput = screen.getByLabelText(
            /password/i
        ) as HTMLInputElement;

        await user.type(emailInput, email);
        await user.type(passwordInput, password);

        expect(emailInput.value).toBe(email);
        expect(passwordInput.value).toBe(password);
    });

    it("should show spinner when login is in progress", async () => {
        const user = userEvent.setup();
        const email = "jon.doe@email.com";
        const password = "password123456";

        render(LoginView);

        const emailInput = screen.getByRole("textbox", {
            name: /email/i,
        });
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole("button", { name: /login/i });

        await user.type(emailInput, email);
        await user.type(passwordInput, password);
        user.click(loginButton);

        const spinner = await screen.findByRole("progressbar");
        expect(spinner).toBeTruthy();
    });
});
