import { render, screen } from "@testing-library/react-native";

import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", ()=> {
    it("should be return day.", () => {
        render(
            <NextDays
            data={[
                { day: "18/17",  min: "30c", max: "34c", icon: clearDay, weather: "Céu limpo"  },
                { day: "19/17",  min: "32c", max: "35c", icon: clearDay, weather: "Céu limpo"  },
                { day: "20/17",  min: "31c", max: "32c", icon: clearDay, weather: "Céu limpo"  },
                { day: "21/17",  min: "33c", max: "35c", icon: clearDay, weather: "Céu limpo"  },
                { day: "22/17",  min: "30c", max: "36c", icon: clearDay, weather: "Céu limpo"  },
            ]}
            />
        )

        expect(screen.getByText("19/17")).toBeTruthy();
    })
})