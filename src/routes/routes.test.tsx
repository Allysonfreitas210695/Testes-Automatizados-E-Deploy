import { screen, waitFor } from "@testing-library/react-native";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { render } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { CityProps } from "@services/getCityByNameService";
import { Routes } from ".";


describe("Routes", () => {
    it("should be render Search screen when not city selected", async () => {
        render(<Routes />);

        const title = await waitFor(() => screen.findByText(/^escolha um local/i));

        expect(title).toBeTruthy();
    });

    it("should render Dashboard screen when a city is selected", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

        const city: CityProps = {
            id: "1",
            name: "São Paulo",
            latitude: 123,
            longitude: 456,
        };

        await saveStorageCity(city);

        render(<Routes />);

        const title = await waitFor(() => screen.getByText(city.name));

        expect(title).toBeTruthy();
    });
});