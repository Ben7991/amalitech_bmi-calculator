import { ImperialComponent } from "./components/imperial-component.js";
import { MetricsComponent } from "./components/metric-component.js";
const rbMeasurementUnits = document.querySelectorAll(".header__measurement-radio");
for (let i = 0; i < rbMeasurementUnits.length; i++) {
    let element = rbMeasurementUnits[i];
    element.addEventListener('change', function () {
        let metricsElement = document.querySelector('.header__measurement--metrics');
        let imperialElement = document.querySelector('.header__measurement--imperial');
        if (element.value === 'metrics') {
            metricsElement.style.display = 'flex';
            imperialElement.style.display = 'none';
            new MetricsComponent();
        }
        else {
            metricsElement.style.display = 'none';
            imperialElement.style.display = 'flex';
            new ImperialComponent();
        }
    });
}
rbMeasurementUnits[0].checked = true;
new MetricsComponent();
