const images = {
  DU_Shield: './DUShield.png',
  DU_Shield_Icon:
    'data:image/png;base64,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',
  Imgur_Icon: 'https://i.imgur.com/OL0eUSz.png',
}

module.exports = images