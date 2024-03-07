export async function queryWords(subjectQuery: string): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (Math.random() > 0.5) {
    throw new Error('random error')
  }
  return [
    { word: 'engine', translation: 'двигатель', transcription: 'ˈen.dʒɪn' },
    { word: 'tire', translation: 'шина', transcription: 'ˈtaɪər' },
    {
      word: 'steering wheel',
      translation: 'руль',
      transcription: 'ˈstɪr.ɪŋ wiːl',
    },
    { word: 'brake', translation: 'тормоз', transcription: 'breɪk' },
    {
      word: 'accelerator',
      translation: 'акселератор',
      transcription: 'əkˈsel.ə.reɪ.tər',
    },
    {
      word: 'gearbox',
      translation: 'коробка передач',
      transcription: 'ˈɡɪər.bɒks',
    },
    { word: 'clutch', translation: 'сцепление', transcription: 'klʌtʃ' },
    {
      word: 'exhaust',
      translation: 'выхлопная система',
      transcription: 'ɪɡˈzɔːst',
    },
    { word: 'bumper', translation: 'бампер', transcription: 'ˈbʌm.pər' },
    { word: 'headlight', translation: 'фара', transcription: 'ˈhed.laɪt' },
    {
      word: 'taillight',
      translation: 'задний фонарь',
      transcription: 'ˈteɪl.laɪt',
    },
    {
      word: 'dashboard',
      translation: 'приборная панель',
      transcription: 'ˈdæʃ.bɔːrd',
    },
    {
      word: 'windshield',
      translation: 'лобовое стекло',
      transcription: 'ˈwɪnd.ʃiːld',
    },
    { word: 'trunk', translation: 'багажник', transcription: 'trʌŋk' },
    { word: 'hood', translation: 'капот', transcription: 'hʊd' },
    {
      word: 'seatbelt',
      translation: 'ремень безопасности',
      transcription: 'ˈsiːt.belt',
    },
    { word: 'mirror', translation: 'зеркало', transcription: 'ˈmɪr.ər' },
    {
      word: 'radiator',
      translation: 'радиатор',
      transcription: 'ˈreɪ.di.eɪ.tər',
    },
    { word: 'chassis', translation: 'шасси', transcription: 'ˈʃæs.i' },
    { word: 'cylinder', translation: 'цилиндр', transcription: 'ˈsɪl.ɪn.dər' },
  ]
}
