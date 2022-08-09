// https://calculator.swiftutors.com/doppler-effect-approaching-source-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const newFrequencyofApproachingSourceRadio = document.getElementById('newFrequencyofApproachingSourceRadio');
const waveVelocityRadio = document.getElementById('waveVelocityRadio');
const wavelengthinFrontofSourceRadio = document.getElementById('wavelengthinFrontofSourceRadio');

let newFrequencyofApproachingSource;
let waveVelocity = v1;
let wavelengthinFrontofSource = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

newFrequencyofApproachingSourceRadio.addEventListener('click', function() {
  variable1.textContent = 'Wave Velocity (m/s)';
  variable2.textContent = 'Wavelength in Front of Source (m)';
  waveVelocity = v1;
  wavelengthinFrontofSource = v2;
  result.textContent = '';
});

waveVelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'New Frequency of Approaching Source (hz)';
  variable2.textContent = 'Wavelength in Front of Source (m)';
  newFrequencyofApproachingSource = v1;
  wavelengthinFrontofSource = v2;
  result.textContent = '';
});

wavelengthinFrontofSourceRadio.addEventListener('click', function() {
  variable1.textContent = 'New Frequency of Approaching Source (hz)';
  variable2.textContent = 'Wave Velocity (m/s)';
  newFrequencyofApproachingSource = v1;
  waveVelocity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(newFrequencyofApproachingSourceRadio.checked)
    result.textContent = `New Frequency of Approaching Source = ${computeNewFrequencyofApproachingSource().toFixed(2)} hz`;

  else if(waveVelocityRadio.checked)
    result.textContent = `Wave Velocity = ${computeWaveVelocity().toFixed(2)} m/s`;

  else if(wavelengthinFrontofSourceRadio.checked)
    result.textContent = `Wavelength in Front of Source = ${computeWavelengthinFrontofSource().toFixed(2)} m`;
})

// calculation

function computeNewFrequencyofApproachingSource() {
  return Number(waveVelocity.value) / Number(wavelengthinFrontofSource.value);
}

function computeWaveVelocity() {
  return Number(newFrequencyofApproachingSource.value) * Number(wavelengthinFrontofSource.value);
}

function computeWavelengthinFrontofSource() {
  return Number(waveVelocity.value) / Number(newFrequencyofApproachingSource.value);
}