const rbMeasurementUnits = document.querySelectorAll(".header__measurement-radio");

for (let i = 0; i < rbMeasurementUnits.length; i++) {
    let element = rbMeasurementUnits[i] as HTMLInputElement;
    element.addEventListener('change', function() {
        let metricsElement = <HTMLDivElement>document.querySelector('.header__measurement--metrics')!;
        let imperialElement = <HTMLDivElement>document.querySelector('.header__measurement--imperial')!;
        if (element.value === 'metrics') {
            metricsElement.style.display = 'flex';
            imperialElement.style.display = 'none';
        } else {
            metricsElement.style.display = 'none';
            imperialElement.style.display = 'flex';
        }
    });
}