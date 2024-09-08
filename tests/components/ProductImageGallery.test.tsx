import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if list is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render list if list is not empty", () => {
    const imageUrls = ["google.com", "yahoo.com"];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const imgs = screen.getAllByRole("img");

    expect(imgs).toHaveLength(2);

    imageUrls.forEach((imageUrl, i) => {
      expect(imgs[i]).toHaveAttribute("src", imageUrl);
    });
  });
});
