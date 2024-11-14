import { screen, render } from "@testing-library/react";

import Async from "./Async";

describe("Async Component", () => {
  test("Fetched Posts are rendered on the Page", async () => {
    //
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "1", title: "My dummy Post" },
        { id: "2", title: "My second dummy Post" },
      ],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 3000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
