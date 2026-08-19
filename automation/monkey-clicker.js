import { remote } from 'webdriverio';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  console.log('🐵 MONKEY BOT START');

  const driver = await remote({
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities: {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Android Device',
      'appium:udid': 'XGAUSOFAQSJFYHHU',
      'appium:appPackage': 'com.playrix.township',
      'appium:appActivity': 'com.playrix.township.GPlayActivity',
      'appium:noReset': true
    }
  });

  console.log('✅ Session ready');

  // убедимся что игра на переднем плане
  await driver.execute('mobile: activateApp', {
    appId: 'com.playrix.township'
  });

  await sleep(5000);

  const { width, height } = await driver.getWindowRect();
  console.log('📱 Screen:', width, height);

  // зона безопасности (чтобы не нажимать по краям UI)
  const xMin = Math.floor(width * 0.2);
  const xMax = Math.floor(width * 0.8);
  const yMin = Math.floor(height * 0.2);
  const yMax = Math.floor(height * 0.8);

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // =========================
  // 🐵 MAIN MONKEY LOOP
  // =========================
  for (let i = 0; i < 200; i++) {
    const x = rand(xMin, xMax);
    const y = rand(yMin, yMax);

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x, y },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 50 },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);

    await driver.releaseActions();
    console.log(`👆 tap ${i + 1}:`, x, y);
    await sleep(300 + Math.random() * 700);
  }

  console.log('🏁 MONKEY DONE');
  await driver.deleteSession();
}

run().catch(console.error);
