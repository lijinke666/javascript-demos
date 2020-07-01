const sensor = new AmbientLightSensor();
sensor.start();
sensor.onchange = (e) => {
  console.log(e.reading.illuminance);
};
sensor.stop();
