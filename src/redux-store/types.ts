type GalleryItem = {
  src: string;
};

type Odmiana = {
  nazwa: string;
  galeria: GalleryItem[];
  charakterystyka: string;
  owoc: string;
  uprawa: string;
  wymagania: {
    sloneczne: string;
    wodne: string;
    odczyn_gleby: string;
  };
  pora_kwitnienia: string;
  podatnosc_na_choroby: string;
  samopylnosc: string;
  zapylacze: string[];
  ciecie: string;
  mrozoodpornosc: string;
  dojrzalosc: {
    zbiorcza: string;
    konsumpcyjna: string;
  };
  okres_przechowywania: string;
  rozstawa: string;
  pochodzenie: string;
};

interface Rodzaj {
  rodzaj: string;
  odmiany: Odmiana[];
}

interface Kategoria {
  nazwa: string;
  typ: Rodzaj[];
}

interface PlantsJsonData {
  kategorie: Kategoria[];
}

interface JsonDataState {
  data: PlantsJsonData;
  lastModified: string;
  foundOdmiana?: Odmiana | null;
}

interface Plant {
  nazwa: string;
  kategoria: string;
}
