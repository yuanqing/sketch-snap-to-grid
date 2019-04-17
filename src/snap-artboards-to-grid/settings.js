import {
  openSettingsDialog,
  saveSettings,
  CHECK_BOX,
  NUMERIC_TEXT_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Settings for Snap Artboards to Grid',
  inputs: [
    {
      type: CHECK_BOX,
      key: 'snapArtboardsToGrid.enabled',
      label: 'Enabled'
    },
    {
      type: NUMERIC_TEXT_BOX,
      key: 'snapArtboardsToGrid.gridWidth',
      label: 'Grid width'
    },
    {
      type: NUMERIC_TEXT_BOX,
      key: 'snapArtboardsToGrid.gridHeight',
      label: 'Grid height'
    },
    {
      type: TEXT_BOX,
      key: 'snapArtboardsToGrid.whitelistRegularExpression',
      label: 'Whitelist regular expression'
    }
  ]
}

export default function settings () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings(settings, { successMessage: 'Settings saved' })
  }
}