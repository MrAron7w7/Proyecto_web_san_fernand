const datas = [
  {
    id: 1,
    src: '/assets/img/animals/gallina.webp',
    alt: 'Pollo',
    banner: '/assets/img/Pollo/banner-categoria-pollo.webp',
    products: [
      {
        id: 1,
        name: 'Filete pechuga de pollo',
        price: 15.0,
        img: '/assets/img/Pollo/Filete-pechuga-pollo.webp'
      },
      {
        id: 2,
        name: 'Pierna de pollo',
        price: 10.0,
        img: '/assets/img/Pollo/pierna-de-pollo.webp'
      },
      {
        id: 3,
        name: 'Ala de pollo',
        price: 8.0,
        img: '/assets/img/Pollo/alas-de-pollo.webp'
      },
      {
        id: 4,
        name: 'Muslo de pollo',
        price: 9.0,
        img: '/assets/img/Pollo/muslo-de-pollo3.webp'
      },
      {
        id: 5,
        name: 'Pechuga entera de pollo',
        price: 20.0,
        img: '/assets/img/Pollo/pechuga-de-pollo.webp'
      },
      {
        id: 6,
        name: 'Pierna con encuentro',
        price: 11.0,
        img: '/assets/img/Pollo/pierna-con-encuentro.webp'
      }
    ]
  },
  {
    id: 2,
    src: '/assets/img/animals/pavo.webp',
    alt: 'Pavo',
    banner: '/assets/img/Pavo/banner-categoria-pavo.webp',
    products: [
      {
        id: 1,
        name: 'Pechuga de pavita en trozos 1.5 Kg',
        price: 22.0,
        img: '/assets/img/Pavo/pechuga-de-pavita-trozos.webp'
      },
      {
        id: 2,
        name: 'Pavo entero con menudencia',
        price: 25.0,
        img: '/assets/img/Pavo/pavo-entero-con-menudencia.webp'
      },
      {
        id: 3,
        name: 'Pechuga de pavo horneado en lonjas',
        price: 18.0,
        img: '/assets/img/Pavo/pechuga-de-pavo-horneado-en-lonjas.webp'
      },
      {
        id: 4,
        name: 'Media pechuga deshuesada',
        price: 15.0,
        img: '/assets/img/Pavo/media-pechuga-deshuesada.webp'
      },
      {
        id: 5,
        name: 'Pechuga especial de pavo',
        price: 21.0,
        img: '/assets/img/Pavo/Pechuga.webp'
      },
      {
        id: 6,
        name: 'Enrollado americano de pollo congelado',
        price: 16.0,
        img: '/assets/img/Pavo/enrollado-americano-de-pollo-congelado.webp'
      },
      {
        id: 7,
        name: 'Enrollado americano de pavita congelado',
        price: 17.0,
        img: '/assets/img/Pavo/enrollado-americano-de-pavita-congelado.webp'
      },
      {
        id: 8,
        name: 'Enrollado delizia de pollo congelado',
        price: 19.0,
        img: '/assets/img/Pavo/enrollado-delizia-de-pollo-congelado.webp'
      },
      {
        id: 9,
        name: 'Enrollado delizia de cerdo congelado',
        price: 20.0,
        img: '/assets/img/Pavo/enrrollado-de-liza.webp'
      },
      {
        id: 10,
        name: 'Enrollado delizia de pavo congelado',
        price: 18.0,
        img: '/assets/img/Pavo/enrollado-delizia-de-pavo-congelado.webp'
      }
    ]
  },
  {
    id: 3,
    src: '/assets/img/animals/filetes.webp',
    alt: 'Embutidos',
    banner: '/assets/img/Embutidos/banner-categoria-embutidos.webp',
    products: [
      {
        id: 1,
        name: 'Chorizo parrillero',
        price: 7.0,
        img: '/assets/img/Embutidos/chorizo-parrillero.webp'
      },
      {
        id: 2,
        name: 'Chorizo parrillero finas hierbas',
        price: 8.0,
        img: '/assets/img/Embutidos/choriso-parrillero-hierbas.webp'
      },
      {
        id: 3,
        name: 'Chorizo parrillero brasa',
        price: 7.5,
        img: '/assets/img/Embutidos/chorillo-parrillero-brasa.webp'
      },
      {
        id: 4,
        name: 'Chorizo cocido parrillero',
        price: 6.0,
        img: '/assets/img/Embutidos/chorizo-parrillero.webp'
      }
    ]
  },
  {
    id: 4,
    src: '/assets/img/animals/pollo.webp',
    alt: 'Congelados',
    banner: '/assets/img/Congelados/banner-categoria-congelados.webp',
    products: [
      {
        id: 1,
        name: 'Crocante con pollo bolsa 342gr (4aund)',
        price: 13.5,
        img: '/assets/img/Congelados/crocante-cpollo-bolsa-x-4und.webp'
      },
      {
        id: 2,
        name: 'Deli Bisteck bolsa 424 (4und)',
        price: 14.5,
        img: '/assets/img/Congelados/deli-bistek.webp'
      },
      {
        id: 3,
        name: 'Milanesa apanada x 10und',
        price: 10.0,
        img: '/assets/img/Congelados/milanesa-apanada.webp'
      },
      {
        id: 4,
        name: 'Suprema apanada de pollo x 10und',
        price: 11.0,
        img: '/assets/img/Congelados/milanesa-opanada.webp'
      }
    ]
  },
  {
    id: 5,
    src: '/assets/img/animals/cerdo.webp',
    alt: 'Cerdo',
    banner: '/assets/img/Cerdo/banner-categoria-cerdo.webp',
    products: [
      {
        id: 1,
        name: 'Peril de cerdo congelado',
        price: 18.0,
        img: '/assets/img/Cerdo/pernil-de-cerdo-congelado.webp'
      },
      {
        id: 2,
        name: 'Pierna de cerdo congelada',
        price: 22.0,
        img: '/assets/img/Cerdo/pierna-cerdo-congelada.webp'
      },
      {
        id: 3,
        name: 'Brazuelo de cerdo congelado',
        price: 16.0,
        img: '/assets/img/Cerdo/brasuelo-cerdo.webp'
      }
    ]
  },
  {
    id: 6,
    src: '/assets/img/animals/huevo.webp',
    alt: 'Huevo',
    banner: '/assets/img/Huevo/banner-categoria-huevos.webp',
    products: [
      {
        id: 1,
        name: 'Huevo quincena',
        price: 9.0,
        img: '/assets/img/Huevo/huevo-quincena.webp'
      }
    ]
  }
]

export default datas
