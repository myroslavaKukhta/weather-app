import React from 'react';
import './AppStyles';
import { useTranslation } from "react-i18next";
import WeatherDisplay from "./features/weather/WeatherDisplay";
import WeatherSearch from "./features/weather/WeatherSearch";
import * as s from "./AppStyles";

const App: React.FC = () => {
    const { t } = useTranslation();

  return (
    <s.AppContainer>
      <s.Header>
          {t ('Норбі і Дегі')}
      </s.Header>
        <WeatherSearch/>
        <WeatherDisplay/>
    </s.AppContainer>
  );
}

export default App;
