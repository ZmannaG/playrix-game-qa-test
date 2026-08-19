# Mobile Game QA — Township

## Project Overview

Manual and automated QA testing of the Android version of Township.

The project combines functional and ad-hoc testing with automated UI interaction testing using Appium.

## Testing Environment

- Device: POCO X4 GT
- OS: Android 14
- Application: Township
- Android package: `com.playrix.township`
- Automation: Appium 3, UiAutomator2, WebdriverIO

## Testing Approach

- Manual functional testing
- Ad-hoc testing
- UI testing
- Automated UI interaction
- Stability testing under randomized user actions
- UX and game mechanics analysis

## Automation

A custom UI monkey-clicker was developed using Appium and WebdriverIO.

The tool:
- connects to an Android device;
- starts an Appium session;
- generates randomized tap coordinates;
- performs repeated touch actions;
- runs 200 randomized interactions;
- terminates the session after execution.

## Results

- No critical application crashes were observed during the automated run.
- UI remained stable under randomized interactions.
- 1 UI defect was identified during manual testing.

## Defect Found

**Loading screen is not displayed across the full screen.**

The issue causes part of the underlying game interface to become visible during application startup.

Severity: Low.

Detailed reproduction steps and screenshots are available in the test report.

## UX & Game Design Observations

The testing also included several product improvement suggestions related to:

- narrative-driven levels;
- interactive objects and dynamic level objectives;
- visual consistency of alliance chat stickers.

These observations are documented in the full test report.

## Skills Demonstrated

- Manual QA
- Mobile QA
- Game QA
- Functional testing
- Ad-hoc testing
- UI testing
- Appium
- WebdriverIO
- Android / ADB
- JavaScript
- Bug reporting
- UX analysis
- Game mechanics analysis

## Test Report

See the full [test report](./report/Playrix_QA_Test.pdf).
