export async function queryWords(subjectQuery: string): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (Math.random() > 0.5) {
    throw new Error('random error')
  }
  return [
    { text: 'engine', translation: 'двигатель', transcription: 'ˈen.dʒɪn' },
    { text: 'tire', translation: 'шина', transcription: 'ˈtaɪər' },
    {
      text: 'steering wheel',
      translation: 'руль',
      transcription: 'ˈstɪr.ɪŋ wiːl',
    },
    { text: 'brake', translation: 'тормоз', transcription: 'breɪk' },
    {
      text: 'accelerator',
      translation: 'акселератор',
      transcription: 'əkˈsel.ə.reɪ.tər',
    },
    {
      text: 'gearbox',
      translation: 'коробка передач',
      transcription: 'ˈɡɪər.bɒks',
    },
    { text: 'clutch', translation: 'сцепление', transcription: 'klʌtʃ' },
    {
      text: 'exhaust',
      translation: 'выхлопная система',
      transcription: 'ɪɡˈzɔːst',
    },
    { text: 'bumper', translation: 'бампер', transcription: 'ˈbʌm.pər' },
    { text: 'headlight', translation: 'фара', transcription: 'ˈhed.laɪt' },
    {
      text: 'taillight',
      translation: 'задний фонарь',
      transcription: 'ˈteɪl.laɪt',
    },
    {
      text: 'dashboard',
      translation: 'приборная панель',
      transcription: 'ˈdæʃ.bɔːrd',
    },
    {
      text: 'windshield',
      translation: 'лобовое стекло',
      transcription: 'ˈwɪnd.ʃiːld',
    },
    { text: 'trunk', translation: 'багажник', transcription: 'trʌŋk' },
    { text: 'hood', translation: 'капот', transcription: 'hʊd' },
    {
      text: 'seatbelt',
      translation: 'ремень безопасности',
      transcription: 'ˈsiːt.belt',
    },
    { text: 'mirror', translation: 'зеркало', transcription: 'ˈmɪr.ər' },
    {
      text: 'radiator',
      translation: 'радиатор',
      transcription: 'ˈreɪ.di.eɪ.tər',
    },
    { text: 'chassis', translation: 'шасси', transcription: 'ˈʃæs.i' },
    { text: 'cylinder', translation: 'цилиндр', transcription: 'ˈsɪl.ɪn.dər' },
  ]
}
