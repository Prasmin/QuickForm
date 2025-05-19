import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AiGeneratedForm from "../../components/AiGeneratedForm";

const mockForm = {
  content: {
    formFields: [
      { label: "Name", type: "text", value: "John" },
      { label: "Email", type: "email", value: "john@example.com" },
    ],
  },
};

describe("AiGeneratedForm", () => {
  it("renders form fields with correct labels and values", () => {
    render(<AiGeneratedForm form={mockForm} isEditMode={false} />);
    expect(screen.getByLabelText("Name")).toHaveValue("John");
    expect(screen.getByLabelText("Email")).toHaveValue("john@example.com");
  });

  it("disables inputs when not in edit mode", () => {
    render(<AiGeneratedForm form={mockForm} isEditMode={false} />);
    expect(screen.getByLabelText("Name")).toBeDisabled();
    expect(screen.getByLabelText("Email")).toBeDisabled();
    expect(screen.queryByText("Save")).not.toBeInTheDocument();
  });

  it("enables inputs and shows Save button in edit mode", () => {
    render(<AiGeneratedForm form={mockForm} isEditMode={true} />);
    expect(screen.getByLabelText("Name")).toBeEnabled();
    expect(screen.getByLabelText("Email")).toBeEnabled();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("updates input value on change in edit mode", () => {
    render(<AiGeneratedForm form={mockForm} isEditMode={true} />);
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Jane" } });
    expect(nameInput).toHaveValue("Jane");
  });
});
